'use client'

import { useEffect, useState } from "react"
import Template from "@/components/template/Template"
import { db } from "@/lib/firebase"
import { doc, collection, addDoc } from "firebase/firestore"
import useAuth from "@/data/hook/useAuth"
import { formatarTempo } from "@/utils/formatarTempo"
import Questao from "@/interfaces/Questao"
import Image from "next/image"
import definirLetraAlternativa from "@/utils/definirLetraDaAlternativa"
import AncoraLink from "@/components/base/AncoraLink"

export default function Page() {
    const { usuario } = useAuth()
    const [resultado, setResultado] = useState<Questao[]>([])
    const [acertos, setAcertos] = useState<number>(0)
    const [tempo, setTempo] = useState<number>(0)

    useEffect(() => {
        const resultadoLS = localStorage.getItem("resultadoQuiz")
        const acertosLS = localStorage.getItem("acertosQuiz")
        const tempoLS = localStorage.getItem("tempoDeProva")

        if (resultadoLS) setResultado(JSON.parse(resultadoLS))
        if (acertosLS) setAcertos(parseInt(acertosLS))
        if (tempoLS) setTempo(parseInt(tempoLS))
    }, [])

    useEffect(() => {
        if (usuario && resultado.length > 0) {
            const salvar = async () => {
                try {
                    const userRef = doc(db, "usuarios", usuario.uid)
                    const resultadosRef = collection(userRef, "resultados")
                    const erros = resultado.length - acertos

                    await addDoc(resultadosRef, {
                        resultado,
                        acertos,
                        erros,
                        tempo,
                        data: new Date()
                    })

                    localStorage.removeItem("resultadoQuiz")
                    localStorage.removeItem("acertosQuiz")
                    localStorage.removeItem("tempoDeProva")

                    console.log("Resultado salvo no Firebase com sucesso!")
                } catch (error) {
                    console.error("Erro ao salvar resultado:", error)
                }
            }
            salvar()
        }
    }, [usuario, resultado, acertos, tempo])

    console.log(resultado)

    return (
        <Template>
            <div className="flex flex-col gap-4 w-full h-full min-h-[62vh] p-4 text-black bg-zinc-200">
                <h1 className="text-2xl font-bold">Resultado do Simulado</h1>
                {
                    resultado.length > 0 ? (
                        <>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex flex-col">
                                    <p className="text-center uppercase font-bold text-sm leading-4">Total de Perguntas:</p>
                                    <span className="text-xl font-black text-center mt-auto">{resultado.length}</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-center uppercase font-bold text-sm leading-4">Acertos:</p>
                                    <span className="text-xl font-black text-center mt-auto">{acertos}</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-center uppercase font-bold text-sm leading-4">Erros:</p>
                                    <span className="text-xl font-black text-center mt-auto">{resultado.length - acertos}</span>
                                </div>
                                {/* 10800 são 3 horas */}
                                <p className="col-start-1 col-end-4 leading-5 text-center sm:text-xl">Tempo Total de prova: <b>{formatarTempo(10800 - tempo)}</b> segundos</p>
                            </div>

                            <ul className="flex flex-col gap-8">
                                {
                                    resultado.map((pergunta, i) => {
                                        return (
                                            <li key={i} className={`p-4 ${pergunta.acertou ? 'bg-green-500' : 'bg-red-500'}`}>
                                                <p><b>{i + 1}-)</b> {pergunta.pergunta.enunciado}</p>

                                                {pergunta.pergunta.imagem && (
                                                    <div className="relative w-full h-[200px]">
                                                        <Image
                                                            alt="Imagem da Pergunta"
                                                            src={pergunta.pergunta.imagem}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}

                                                {pergunta.pergunta.listaEnumerada && (
                                                    <ul>
                                                        {pergunta.pergunta.listaEnumerada.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {pergunta.pergunta.complementoDoEnunciado && (
                                                    <p>{pergunta.pergunta.complementoDoEnunciado}</p>
                                                )}

                                                <div>
                                                    <ul className="flex flex-col gap-1">
                                                        {pergunta.alternativas.map((alternativa, i) => (
                                                            <li
                                                                key={i}
                                                                className={`cursor-pointer p-2 rounded border border-black ${pergunta.respostaUsuario === alternativa.conteudo ? (pergunta.acertou ? ('bg-green-700 text-white') : ('bg-orange-600 text-white')) : ''} ${alternativa.certa ? 'bg-green-700 text-white' : ''}`}
                                                            >
                                                                <p className={``}>
                                                                    {definirLetraAlternativa(i)} {alternativa.conteudo}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </>
                    ) : (
                        <div>
                            <h3 className="text-lg font-black leading-5">Nenhum Simulado Encontrado!</h3>
                            <p>Volte para página de simulado.</p>
                        </div>
                    )
                }

                <div className="grid gap-2 mt-auto md:grid-cols-2 md:gap-4">
                    <AncoraLink link="/pages/usuario" texto="Area do Usuário" />
                    <AncoraLink link="/pages/simulado" texto="Voltar" />
                </div>
            </div>
        </Template>
    )
}
