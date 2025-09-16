'use client'
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { QuestionarioFirebase } from "@/interfaces/QuestionarioFirebase";
import Link from "next/link";
import handleImagemChange from "@/utils/handleImageChange";
import AncoraLink from "@/components/base/AncoraLink";

export default function Page() {
    const { usuario } = useAuth()
    const [questionarios, setQuestionarios] = useState<QuestionarioFirebase[] | null>(null)
    const [, setErroImagemTamanho] = useState<string | null>()
    const [, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [sexo, setSexo] = useState('')
    const [telefone, setTelefone] = useState('')

    console.log(questionarios)

    useEffect(() => {
        setNome(usuario?.nome ?? '')
        setCpf(usuario?.cpf ?? '')
        setEmail(usuario?.email ?? '')
        setSexo(usuario?.sexo ?? '')
        setTelefone(usuario?.telefone ?? '')
    }, [usuario])

    useEffect(() => {
        if (!usuario) return

        async function fetchQuestionarios() {
            try {
                if (usuario) {
                    const snapshot = await getDocs(
                        collection(db, "usuarios", usuario.uid, "resultados")
                    )

                    const fetchedQuestionarios = snapshot.docs.map(
                        doc => ({ id: doc.id, ...doc.data() } as QuestionarioFirebase)
                    )
                    const questionariosOrdenados = fetchedQuestionarios.sort((a, b) => {
                        const dataA = a.data?.toDate ? a.data.toDate() : new Date(0)
                        const dataB = b.data?.toDate ? b.data.toDate() : new Date(0)
                        return dataB.getTime() - dataA.getTime()
                    })
                    setQuestionarios(questionariosOrdenados)
                }
            } catch (error) {
                console.error("Erro ao buscar questionários: ", error)
            }
        }
        fetchQuestionarios()
    }, [usuario])

    return (
        <Template>
            <div className="min-h-[78vh] p-4 bg-zinc-300 text-black flex flex-col gap-4">
                <h1 className="uppercase font-bold text-3xl text-center">Bem vindo {usuario?.nome.split(' ')[0]}</h1>
                <div className="relative w-fit mx-auto">
                    {usuario && (
                        <div className="w-[180px] h-[180px] rounded-full overflow-hidden relative mx-auto -mt-2">
                            <Image
                                alt="Imagem do Usuário"
                                src={imagemPreview || usuario?.imagemURL}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Botão customizado */}
                    <button
                        type="button"
                        className="bg-laranja text-white p-2 rounded-full absolute bottom-0 -right-4 flex items-center gap-1"
                        onClick={() => document.getElementById("imagens")?.click()}
                    >
                        <FiPlus />
                    </button>

                    <fieldset>
                        {/* Input escondido */}
                        <input
                            className="hidden"
                            type="file"
                            id="imagens"
                            accept="image/*"
                            onChange={async (e) => {
                                // processa a imagem e pega o Base64
                                const base64 = await handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview);
                                console.log(base64)
                                // só atualiza no Firebase se base64 existir
                                if (base64 && usuario?.uid) {
                                    await updateDoc(doc(db, "usuarios", usuario.uid), {
                                        imagemURL: base64
                                    });
                                }
                            }}
                        />
                    </fieldset>
                </div>
                <div>
                    <Accordion>
                        <AccordionTab header="Seus Dados">
                            <div className="flex flex-col">
                                <label htmlFor="nome">Nome:</label>
                                <input className="bg-zinc-400 h-[30px] p-2 rounded-lg text-white" type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} disabled />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="cpf">CPF:</label>
                                <input className="bg-zinc-400 h-[30px] p-2 rounded-lg text-white" type="text" name="cpf" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} disabled />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">Email:</label>
                                <input className="bg-zinc-400 h-[30px] p-2 rounded-lg text-white" type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="sexo">Sexo:</label>
                                <input className="bg-zinc-400 h-[30px] p-2 rounded-lg text-white capitalize" type="text" name="sexo" id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} disabled />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="telefone">telefone:</label>
                                <input className="bg-zinc-400 h-[30px] p-2 rounded-lg text-white" type="text" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} disabled />
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Simulados">
                            <ul className="flex flex-col w-full gap-2">
                                {
                                    questionarios?.map((questionario, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={`/pages/simuladosFeitos/${questionario.id}`} className="p-2 bg-red-100 flex">
                                                    <p>{questionario.data.toDate().toLocaleDateString()} - {questionario.data.toDate().toLocaleTimeString()}</p>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </AccordionTab>
                        <AccordionTab header="Estatísticas">
                            <ul>
                                <li className="flex gap-1 text-sm sm:text-lg">
                                    <p>Simulados Feitos:</p>
                                    <span>10</span>
                                </li>
                                <li className="flex gap-1 text-sm sm:text-lg">
                                    <p>Maior Quantidade de Acertos:</p>
                                    <span>25</span>
                                </li>
                                <li className="flex gap-1 text-sm sm:text-lg">
                                    <p>Maior Tempo de Prova:</p>
                                    <span>2:25:00</span>
                                </li>
                                <li className="flex gap-1 text-sm sm:text-lg">
                                    <p>Menor Tempo de Prova:</p>
                                    <span>00:22:00</span>
                                </li>
                            </ul>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div className="flex w-full justify-end mt-auto">
                    <AncoraLink link="/pages/materias" texto="Voltar" />
                </div>
            </div>
        </Template>
    )
}