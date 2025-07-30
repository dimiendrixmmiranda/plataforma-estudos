'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Usando o useRouter corretamente
import { auth, db } from "@/lib/firebase"; // Importando a instância do Firebase auth
import { User, signInWithEmailAndPassword } from "firebase/auth"; // Importando funções de autenticação
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import Cookies from 'js-cookie';
import { doc, getDoc, setDoc } from "firebase/firestore";
import Usuario from "@/interfaces/Usuario";

interface AuthContextProps {
    usuario?: Usuario | null;
    children?: React.ReactNode;
    carregando?: boolean
    login?: (email: string, senha: string, manterConectado: boolean) => Promise<void>;
    logout?: () => Promise<void>;

}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken();
    const userDoc = await getDoc(doc(db, "usuarios", usuarioFirebase.uid));
    let tipo: string | undefined;

    if (userDoc.exists()) {
        tipo = userDoc.data().tipo;
    }

    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName || "",
        email: usuarioFirebase.email || "",
        token,
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


    async function login(email: string, senha: string, manterConectado = false) {
        try {
            setCarregando(true);

            await setPersistence(auth, manterConectado ? browserLocalPersistence : browserSessionPersistence);

            const result = await signInWithEmailAndPassword(auth, email, senha);
            const user = result.user;

            const userDocRef = doc(db, "usuarios", user.uid);
            let userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                await setDoc(userDocRef, {
                    tipo: "cliente",
                    nome: user.displayName || "",
                    email: user.email || "",
                });
                console.warn("Documento do usuário não existia. Foi criado com tipo 'cliente'.");
                userDoc = await getDoc(userDocRef);
            }

            const userData = userDoc.data();
            const tipo = userData?.tipo;

            if (tipo === "adm") {
                router.push('/adm');
            } else if (tipo === "cliente") {
                router.push('/pages/materias');
            } else {
                console.error("Tipo de usuário desconhecido:", tipo);
                router.push('/');
            }

            await configurarSessao(user);
            console.log("Usuário logado:", user);
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
