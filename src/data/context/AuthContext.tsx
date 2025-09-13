'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Usando o useRouter corretamente
import { auth, db } from "@/lib/firebase"; // Importando a instância do Firebase auth
import { User, signInWithEmailAndPassword } from "firebase/auth"; // Importando funções de autenticação
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import Cookies from 'js-cookie';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Usuario } from "@/interfaces/Usuario";

interface AuthContextProps {
    usuario?: Usuario | null;
    children?: React.ReactNode;
    carregando?: boolean
    login?: (email: string, senha: string, manterConectado: boolean) => Promise<void>;
    logout?: () => Promise<void>;
}

interface UsuarioFirestore {
    nome?: string;
    sexo?: string;
    genero?: string;
    gender?: string;
    tipo?: string;
    email?: string;
    cpf?: string;
    telefone?: string;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken();
    const userDoc = await getDoc(doc(db, "usuarios", usuarioFirebase.uid));

    const data = userDoc.exists() ? (userDoc.data() as UsuarioFirestore) : {}
    const tipo = data?.tipo
    const nomeFirestore = data?.nome ?? null
    const sexoFirestore = data?.sexo ?? data?.genero ?? data?.gender ?? null

    return {
        uid: usuarioFirebase.uid,
        nome: nomeFirestore || usuarioFirebase.displayName || "",
        email: usuarioFirebase.email || "",
        token,
        sexo: sexoFirestore ?? "",
        provedor: usuarioFirebase.providerData[0]?.providerId || "",
        imagemURL: usuarioFirebase.photoURL || "",
        tipo,
    };
}

export function AuthProvider({ children }: AuthContextProps) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const router = useRouter(); // Usando useRouter corretamente

    async function configurarSessao(usuarioFirebase: User | null) {
        if (usuarioFirebase && usuarioFirebase.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            gerenciarCookie(false)
            setUsuario(null)
            setCarregando(false)
            return false
        }
    }

    async function logout() {
        console.log('aq')
        try {
            setCarregando(true)
            await auth.signOut()
            await configurarSessao(null)
            router.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function login(identificador: string, senha: string, manterConectado = false) {
        try {
            setCarregando(true);

            // Define persistência da sessão
            await setPersistence(auth, manterConectado ? browserLocalPersistence : browserSessionPersistence);

            let emailParaLogin = identificador.trim(); // Valor que vamos passar para o Firebase

            // Se não for um email (não contém "@"), vamos buscar no Firestore
            if (!identificador.includes("@")) {
                // Busca por CPF
                let q = query(collection(db, "usuarios"), where("cpf", "==", identificador));
                let snap = await getDocs(q);

                // Se não encontrou pelo CPF, tenta buscar pelo telefone
                if (snap.empty) {
                    q = query(collection(db, "usuarios"), where("telefone", "==", identificador));
                    snap = await getDocs(q);
                }

                if (!snap.empty) {
                    emailParaLogin = snap.docs[0].data().email;
                } else {
                    throw new Error("Usuário não encontrado com o identificador informado.");
                }
            }

            // Faz o login normalmente com email e senha
            const result = await signInWithEmailAndPassword(auth, emailParaLogin, senha);
            const user = result.user;

            // Garante que o documento existe no Firestore
            const userDocRef = doc(db, "usuarios", user.uid);
            let userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, {
                    tipo: "cliente",
                    nome: user.displayName || "",
                    email: user.email || "",
                });
                userDoc = await getDoc(userDocRef);
            }

            const userData = userDoc.data();
            const tipo = userData?.tipo;

            // Redireciona conforme tipo
            if (tipo === "adm") {
                router.push("/adm");
            } else if (tipo === "cliente") {
                router.push("/pages/materias");
            } else {
                router.push("/");
            }

            await configurarSessao(user);
        } catch (error) {
            console.error("Erro ao autenticar:", error);
            throw error;
        } finally {
            setCarregando(false);
        }
    }


    function gerenciarCookie(logado: boolean) {
        if (logado) {
            Cookies.set('admin-auth', JSON.stringify(logado), {
                expires: 7
            })
        } else {
            Cookies.remove('admin-auth')
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onIdTokenChanged(async (user) => {
            await configurarSessao(user);
        });
        return () => unsubscribe();
    }, []);


    // Recuperando o usuário do cookie ou localStorage na inicialização
    useEffect(() => {
        // Verificando se o cookie contém informações de autenticação
        const usuarioAuth = Cookies.get('admin-auth');
        if (usuarioAuth) {
            // Aqui você poderia adicionar a lógica para recuperar o token do Firebase
            auth.onIdTokenChanged((user) => {
                if (user) {
                    configurarSessao(user);
                } else {
                    setCarregando(false);
                }
            });
        } else {
            setCarregando(false); // Se não houver usuário no cookie, termina o carregamento
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            usuario, carregando, logout, login
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
