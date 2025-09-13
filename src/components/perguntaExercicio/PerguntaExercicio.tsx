'use client'

import PerguntaExercicioInterface from "@/interfaces/PerguntaExercicio"
import Resposta from "@/interfaces/Resposta"
import { useEffect, useState } from "react"


interface PerguntaExercicioProps {
    pergunta: PerguntaExercicioInterface
    indice: number
    respostaCerta: boolean | null
    setRespostaCerta: (valor: boolean) => void
}

export default function PerguntaExercicio({ pergunta, indice, respostaCerta, setRespostaCerta }: PerguntaExercicioProps) {
    const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null)
    const [alternativas, setAlternativas] = useState(pergunta.arrayDeRespostas)

    const verificarResposta = () => {
        if (respostaSelecionada === null) return
        const resposta = alternativas[respostaSelecionada]
        setRespostaCerta(resposta.correto)
    }

    function embaralharArray(array: Resposta[]) {
        return [...array].sort(() => Math.random() - 0.5)
    }

    useEffect(() => {
        setAlternativas(embaralharArray(pergunta.arrayDeRespostas))
    }, [pergunta.arrayDeRespostas])

    return (
        <div className={`border border-zinc-700 rounded-md p-4 flex flex-col gap-2 ${respostaCerta === null ? 'bg-transparent' : respostaCerta ? 'bg-green-500' : 'bg-red-500'}`}>
            <h2>
                {indice + 1}-) {pergunta.enunciado}
            </h2>
            {
                pergunta.frase ? (
                    <span>{pergunta.frase}</span>
                ) : ('')
            }
            {
                pergunta.imagem ? (
                    <span>{pergunta.imagem}</span>
                ) : ('')
            }
            {
                pergunta.complemento ? (
                    <span>{pergunta.complemento}</span>
                ) : ('')
            }
            <ul className="flex flex-col gap-3">
                {
                    alternativas.map((resposta, i) => (
                        <li
                            key={i}
                            className={`p-2 rounded-md cursor-pointer
                            ${respostaSelecionada === i ? 'bg-blue-700 text-white' : 'bg-zinc-800 text-white'}
                        `}
                            onClick={() => setRespostaSelecionada(i)}
                        >
                            {resposta.conteudo}
                        </li>
                    ))
                }
            </ul>
            <button
                onClick={verificarResposta}
                className="bg-amarelo text-center uppercase font-black text-xl py-2 text-white mt-2"
            >
                Responder
            </button>

            {
                respostaCerta != null ? (
                    <div>
                        <p className="font-black text-xl uppercase">Justificativa:</p>
                        <span>{pergunta.justificativa}</span>
                    </div>
                ) : ('')
            }
        </div>
    )
}