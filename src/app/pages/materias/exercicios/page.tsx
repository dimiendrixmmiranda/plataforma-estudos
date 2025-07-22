'use client'

import PerguntaExercicio from "@/components/perguntaExercicio/PerguntaExercicio"
import { listaPerguntasExercicios } from "@/constants/perguntasExercicio"
import { IoDocumentTextOutline } from "react-icons/io5"
import { PiEyesBold } from "react-icons/pi"

export default function Page() {
    return (
        <div className="p-4 bg-zinc-300 min-h-screen w-full text-black relative">
            {/* Componente de exercicio */}
            <ul className="flex flex-col gap-2">
                {
                    listaPerguntasExercicios.map((pergunta, i) => {
                        return (
                            <PerguntaExercicio pergunta={pergunta} indice={i} key={i} />
                        )
                    })
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