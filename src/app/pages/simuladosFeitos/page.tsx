'use client'
import AncoraLink from "@/components/base/AncoraLink";
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import { QuestionarioFirebase } from "@/interfaces/QuestionarioFirebase";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

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
            <div className="min-h-[78vh] p-4 bg-zinc-300 text-black flex flex-col gap-4 md:p-8">
                <h2 className="uppercase font-bold text-lg md:text-2xl">Lista de Simulados Feitos:</h2>
                <ul className="flex flex-col w-full gap-2 max-w-[400px]">
                    {
                        questionarios?.map((questionario, i) => {
                            return (
                                <li key={i}>
                                    <Link href={`/pages/simuladosFeitos/${questionario.id}`} className="p-2 bg-zinc-500 text-white flex rounded-lg" style={{ textShadow: '1px 1px 2px black' }}>
                                        <p>{questionario.data.toDate().toLocaleDateString()} - {questionario.data.toDate().toLocaleTimeString()}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex w-full justify-end mt-auto">
                    <AncoraLink link="/pages/materias" texto="Voltar" />
                </div>
            </div>
        </Template>
    )
}