'use client'

import AncoraLink from "@/components/base/AncoraLink"
import MenuInferior from "@/components/menuInferior/MenuInferior"
import PerguntaExercicio from "@/components/perguntaExercicio/PerguntaExercicio"
import Template from "@/components/template/Template"
import { listaPerguntasExercicios } from "@/constants/perguntasExercicio"
import useAuth from "@/data/hook/useAuth"
import PerguntaExercicioInterface from "@/interfaces/PerguntaExercicio"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page() {
    const { usuario } = useAuth()
    const params = useParams()
    const id = typeof params.slug === 'string' ? params.slug : params.slug?.[0]
    console.log(usuario)
    const [perguntas, setPerguntas] = useState<PerguntaExercicioInterface[]>([])
    const [respostasCertas, setRespostasCertas] = useState<(boolean | null)[]>([])
    const [todasCertas, setTodasCertas] = useState(false)
    const [visibleMensagem, setVisibleMensagem] = useState(false)


    useEffect(() => {
        const filtradas = listaPerguntasExercicios.filter(
            pergunta => pergunta.categoriaDaPergunta === id
        )
        setPerguntas(filtradas)
        setRespostasCertas(Array(filtradas.length).fill(null))
    }, [id])

    const atualizarResposta = (indice: number, valor: boolean) => {
        const novas = [...respostasCertas]
        novas[indice] = valor
        setRespostasCertas(novas)

        // Verifica se todas foram respondidas e todas estão corretas
        if (novas.every(r => r === true)) {
            setTodasCertas(true)
        } else {
            setTodasCertas(false)
        }
    }

    // só ativa a mensagem quando todasCertas mudar para true
    useEffect(() => {
        if (todasCertas) {
            setVisibleMensagem(true)

            // exemplo: esconde depois de 5 segundos
            const timer = setTimeout(() => setVisibleMensagem(false), 5000)
            return () => clearTimeout(timer)
        }
    }, [todasCertas])

    return (
        <Template>
            <div className="p-4 bg-zinc-300 min-h-screen w-full text-black relative flex flex-col gap-4">
                <div className="p-4 text-black flex flex-col gap-4 max-w-[1000px] mx-auto w-full">
                    <h2 className="text-2xl uppercase font-black text-center">Lista de exercícios:</h2>
                    {/* Componente de exercicio */}
                    <ul className="flex flex-col gap-4 mx-auto w-full">
                        {perguntas.length > 0 ? (
                            perguntas.map((pergunta, i) => (
                                <PerguntaExercicio
                                    key={i}
                                    pergunta={pergunta}
                                    indice={i}
                                    respostaCerta={respostasCertas[i]}
                                    setRespostaCerta={(valor) => atualizarResposta(i, valor)}
                                />
                            ))
                        ) : (
                            <div>Perguntas não cadastradas</div>
                        )}
                    </ul>
                    <div className="max-w-[300px] w-full ml-auto">
                        <AncoraLink link={`/pages/materias`} texto="Voltar" />
                    </div>
                    {visibleMensagem && (
                        <div
                            className="fixed bottom-24 left-1/2 w-[95%] bg-green-600 p-4 rounded-xl shadow-lg"
                            style={{ transform: "translateX(-50%)" }}
                        >
                            <h2 className="text-white text-2xl uppercase font-semibold leading-7">
                                Parabéns{" "}
                                {
                                    usuario?.sexo === "masculino" ? (
                                        <strong className="font-black">
                                            Meu Rei,
                                        </strong>
                                    ) : (
                                        <strong className="font-black">
                                            Minha linda,
                                        </strong>
                                    )
                                }
                                , você acertou tudo!!!!
                            </h2>
                            <span className="text-white">
                                Continue assim {usuario?.nome}, agora realize os exercícios das próximas matérias!
                            </span>
                        </div>
                    )}
                    <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
                </div>
            </div>
        </Template>
    )
}