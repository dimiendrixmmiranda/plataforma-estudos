'use client'

import Ancora from "@/components/base/Ancora"
import MenuInferior from "@/components/menuInferior/MenuInferior"
import PerguntaExercicio from "@/components/perguntaExercicio/PerguntaExercicio"
import SidebarComponent from "@/components/sidebarComponent/SidebarComponente"
import Template from "@/components/template/Template"
import { listaPerguntasExercicios } from "@/constants/perguntasExercicio"
import useAuth from "@/data/hook/useAuth"
import PerguntaExercicioInterface from "@/interfaces/PerguntaExercicio"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { IoDocumentTextOutline } from "react-icons/io5"
import { PiEyesBold } from "react-icons/pi"

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
            <div className="p-4 bg-zinc-300 min-h-screen w-full text-black relative">
                {/* Componente de exercicio */}
                <ul className="flex flex-col gap-4">
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
                <Ancora link="/pages/materias" />

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
        </Template>
    )
}