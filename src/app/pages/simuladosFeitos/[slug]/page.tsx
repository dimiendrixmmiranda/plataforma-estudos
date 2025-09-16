'use client'
import AncoraLink from "@/components/base/AncoraLink";
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import { QuestionarioFirebase } from "@/interfaces/QuestionarioFirebase";
import { db } from "@/lib/firebase";
import definirLetraAlternativa from "@/utils/definirLetraDaAlternativa";
import { formatarTempo } from "@/utils/formatarTempo";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const { slug } = useParams()
    console.log(slug)
    const { usuario } = useAuth()
    const [questionario, setQuestionario] = useState<QuestionarioFirebase | null>(null)
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
                    const questionarioSelecionado = fetchedQuestionarios.filter(q => q.id == slug)[0]
                    setQuestionario(questionarioSelecionado)
                }
            } catch (error) {
                console.error("Erro ao buscar questionários: ", error)
            }
        }
        fetchQuestionarios()
    }, [usuario])

    return (
        <Template>
            <div className="min-h-[78vh] p-4 bg-zinc-300 text-black">
                <h2 className="text-xl flex gap-1 font-bold mb-6">Simulado <b className="line-clamp-1">{slug}</b></h2>
                {
                    questionario != undefined ? (
                        <>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="flex flex-col">
                                    <p className="text-center uppercase font-bold text-sm leading-4">Total de Perguntas:</p>
                                    <span className="text-xl font-black text-center mt-auto">{questionario?.resultado.length}</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-center uppercase font-bold text-sm leading-4">Acertos:</p>
                                    <span className="text-xl font-black text-center mt-auto">{questionario?.acertos}</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-center uppercase font-bold text-sm leading-4">Erros:</p>
                                    <span className="text-xl font-black text-center mt-auto">{questionario?.resultado.length - questionario?.acertos}</span>
                                </div>
                                {/* 10800 são 3 horas */}
                                <p className="col-start-1 col-end-4 leading-5 text-center sm:text-xl">Tempo Total de prova: <b>{formatarTempo(10800 - questionario.tempo)}</b> segundos</p>
                            </div>

                            <ul className="flex flex-col gap-8 mt-4">
                                {
                                    questionario.resultado.map((pergunta, i) => {
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
                    ) : ''
                }
                <div className="flex w-full justify-end mt-4">
                    <AncoraLink link="/pages/usuario" texto="Voltar" />
                </div>
            </div>
        </Template>
    )
}