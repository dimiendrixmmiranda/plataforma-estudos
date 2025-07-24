'use client'

import PerguntaExercicio from "@/components/perguntaExercicio/PerguntaExercicio"
import SidebarComponent from "@/components/sidebarComponent/SidebarComponente"
import Template from "@/components/template/Template"
import { listaPerguntasExercicios } from "@/constants/perguntasExercicio"
import PerguntaExercicioInterface from "@/interfaces/PerguntaExercicio"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { IoDocumentTextOutline } from "react-icons/io5"
import { PiEyesBold } from "react-icons/pi"

export default function Page() {
    const params = useParams()
    const id = typeof params.slug === 'string' ? params.slug : params.slug?.[0]

    const [perguntas, setPerguntas] = useState<PerguntaExercicioInterface[]>([])
    useEffect(() => {
        setPerguntas(listaPerguntasExercicios.filter(pergunta => pergunta.categoriaDaPergunta === id))
    }, [listaPerguntasExercicios])

    console.log(id)

    return (
        <Template>
            <div className="p-4 bg-zinc-300 min-h-screen w-full text-black relative">
                {/* Componente de exercicio */}
                <ul className="flex flex-col gap-4">
                    {
                        perguntas.length > 0 ? (
                            perguntas.map((pergunta, i) => {
                                return (
                                    <PerguntaExercicio pergunta={pergunta} indice={i} key={i} />
                                )
                            })
                        ) : (
                            <div>Perguntas não cadastradas</div>
                        )
                    }
                </ul>

                <SidebarComponent
                    titulo={
                        <button className="flex items-center rounded-full p-2 bg-magenta text-white w-[70px] h-[70px] fixed bottom-2 right-2 z-20" style={{ boxShadow: '0px 0px 2px 1px black' }}>
                            <IoDocumentTextOutline className="text-xl" />
                            <PiEyesBold className="text-4xl" />
                        </button>
                    }
                    header={
                        `Colinha`
                    }
                >
                    <div>
                        Uma colinha bem legal
                    </div>
                </SidebarComponent>
            </div>
        </Template>
    )
}