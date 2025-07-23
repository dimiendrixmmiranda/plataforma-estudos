'use client'

import PerguntaExercicio from "@/components/perguntaExercicio/PerguntaExercicio"
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

    return (
        <div className="p-4 bg-zinc-300 min-h-screen w-full text-black relative">
            {/* Componente de exercicio */}
            <ul className="flex flex-col gap-2">
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

            {/* botao de cola */}
            <button className="flex items-center rounded-full p-2 bg-azul-escuro text-white w-[70px] h-[70px] fixed bottom-2 right-2">
                <IoDocumentTextOutline className="text-xl" />
                <PiEyesBold className="text-4xl" />
            </button>
        </div>
    )
}