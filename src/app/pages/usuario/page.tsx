'use client'
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { QuestionarioFirebase } from "@/interfaces/QuestionarioFirebase";
import Link from "next/link";

export default function Page() {
    const { usuario } = useAuth()
    const [questionarios, setQuestionarios] = useState<QuestionarioFirebase[] | null>(null)

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
                    {
                        usuario && <div className="w-[180px] h-[180px] relative mx-auto -mt-2">
                            <Image alt="Imagem do Usuário" src={usuario?.imagemURL} fill className="object-contain" />
                        </div>
                    }
                    <button className="bg-laranja text-white p-2 rounded-full absolute bottom-0 -right-4"><FiPlus /></button>
                </div>
                <div>
                    <Accordion>
                        <AccordionTab header="Seus Dados">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Simulados">
                            <ul className="flex flex-col w-full gap-2">
                                {
                                    questionarios?.map((questionario, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={''} className="p-2 bg-red-100 flex">
                                                    <p>{questionario.data.toDate().toLocaleDateString()} - {questionario.data.toDate().toLocaleTimeString()}</p>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </AccordionTab>
                        <AccordionTab header="Estatísticas">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        </Template>
    )
}