'use client'
import portugues from "@/constants/portugues"
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import { createSlug } from "@/utils/createSlug";
import Link from "next/link"
import { FaCheckSquare } from "react-icons/fa";
import MenuInferior from "../menuInferior/MenuInferior";
import useAuth from "@/data/hook/useAuth";

export default function AnaliseInterpretacaoTexto() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh]">
            <div className="flex flex-col" id={`${portugues["analise-e-interpretacao-de-texto"].id}`}>
                <h2 className="text-2xl font-black p-4">{portugues["analise-e-interpretacao-de-texto"].titulo}</h2>
                {/* Introdução */}
                <div className="flex flex-col gap-2 p-4">
                    <h3 className="text-xl font-bold">{portugues["analise-e-interpretacao-de-texto"].introducao.titulo}</h3>
                    <ul>
                        {
                            portugues["analise-e-interpretacao-de-texto"].introducao.texto.map((texto, i) => {
                                return (
                                    <li key={i} className="">
                                        <p className="indent-8">{texto}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="list-disc ml-8 gap-2 flex flex-col">
                        {
                            portugues["analise-e-interpretacao-de-texto"].introducao.assuntos.map((ass, i) => {
                                return (
                                    <li key={i} className="bg-azul-escuro text-black p-2">
                                        <Link href={`#${ass.id}`}>
                                            <p className="text-white"><b>{ass.titulo}</b>: {ass.descricao}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* Submaterias */}
                <div>
                    <ul className="flex flex-col gap-10">
                        {/* sub1 */}
                        <li className="flex flex-col gap-4 p-2" id={`${portugues["analise-e-interpretacao-de-texto"].submaterias["compreensao-geral-do-texto"].id}`}>
                            <ul className="flex flex-col gap-8">
                                <li
                                    className={`flex flex-col gap-2 p-2 ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].submaterias["compreensao-geral-do-texto"].titulo) ? "bg-green-500" : ""
                                        }`}
                                >
                                    {/* Titulo */}
                                    <div className="grid grid-cols-[1fr_50px]">
                                        <h4 className="font-bold text-xl">{portugues["analise-e-interpretacao-de-texto"].submaterias["compreensao-geral-do-texto"].titulo}</h4>
                                        <button
                                            onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].submaterias["compreensao-geral-do-texto"].titulo)}
                                            className="flex justify-center items-center w-full h-full text-2xl"
                                        >
                                            <FaCheckSquare />
                                        </button>
                                    </div>
                                    {/* Definição */}
                                    <ul>
                                        {portugues["analise-e-interpretacao-de-texto"].submaterias["compreensao-geral-do-texto"].definicao.map((texto, k) => {
                                            return (
                                                <li key={k}>{texto}</li>
                                            )
                                        })}
                                    </ul>
                                    {/* Dicas */}
                                    <div>
                                        <h3>Dicas</h3>
                                        <ul>
                                            {
                                                portugues["analise-e-interpretacao-de-texto"].submaterias["compreensao-geral-do-texto"].dicas.map((texto, k) => {
                                                    return (
                                                        <li key={k}>{texto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="w-full aspect-video max-w-3xl mx-auto">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${portugues["analise-e-interpretacao-de-texto"].submaterias["compreensao-geral-do-texto"].video.idVideo}`}
                                            title={`${portugues["analise-e-interpretacao-de-texto"].submaterias["compreensao-geral-do-texto"].video.titulo}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Botao de Exercícios */}
                                    <Link
                                        href={`/pages/materias/exercicios/${createSlug(portugues["analise-e-interpretacao-de-texto"].id)}`}
                                        className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                    >
                                        Realizar Exercícios
                                    </Link>
                                </li>
                            </ul>

                        </li>
                        {/* sub2 */}
                        <li className="flex flex-col gap-4 p-2" id={`${portugues["analise-e-interpretacao-de-texto"].submaterias["ponto-de-vista-ou-ideia-central-defendida-pelo-autor"].id}`}>
                            <ul className="flex flex-col gap-8">
                                <li
                                    className={`flex flex-col gap-2 p-2 ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].submaterias["ponto-de-vista-ou-ideia-central-defendida-pelo-autor"].titulo) ? "bg-green-500" : ""
                                        }`}
                                >
                                    {/* Titulo */}
                                    <div className="grid grid-cols-[1fr_50px]">
                                        <h4 className="font-bold text-xl">{portugues["analise-e-interpretacao-de-texto"].submaterias["ponto-de-vista-ou-ideia-central-defendida-pelo-autor"].titulo}</h4>
                                        <button
                                            onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].submaterias["ponto-de-vista-ou-ideia-central-defendida-pelo-autor"].titulo)}
                                            className="flex justify-center items-center w-full h-full text-2xl"
                                        >
                                            <FaCheckSquare />
                                        </button>
                                    </div>
                                    {/* Definição */}
                                    <ul>
                                        {portugues["analise-e-interpretacao-de-texto"].submaterias["ponto-de-vista-ou-ideia-central-defendida-pelo-autor"].definicao.map((texto, k) => {
                                            return (
                                                <li key={k}>{texto}</li>
                                            )
                                        })}
                                    </ul>
                                    {/* Dicas */}
                                    <div>
                                        <h3>Dicas</h3>
                                        <ul>
                                            {
                                                portugues["analise-e-interpretacao-de-texto"].submaterias["ponto-de-vista-ou-ideia-central-defendida-pelo-autor"].dicas.map((texto, k) => {
                                                    return (
                                                        <li key={k}>{texto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="w-full aspect-video max-w-3xl mx-auto">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${portugues["analise-e-interpretacao-de-texto"].submaterias["ponto-de-vista-ou-ideia-central-defendida-pelo-autor"].video.idVideo}`}
                                            title={`${portugues["analise-e-interpretacao-de-texto"].submaterias["ponto-de-vista-ou-ideia-central-defendida-pelo-autor"].video.titulo}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Botao de Exercícios */}
                                    <Link
                                        href={`/pages/materias/exercicios/${createSlug(portugues["analise-e-interpretacao-de-texto"].id)}`}
                                        className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                    >
                                        Realizar Exercícios
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* sub3 */}
                        <li className="flex flex-col gap-4 p-2" id={`${portugues["analise-e-interpretacao-de-texto"].submaterias.argumentacao.id}`}>
                            <ul className="flex flex-col gap-8">
                                <li
                                    className={`flex flex-col gap-2 p-2 ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].submaterias.argumentacao.titulo) ? "bg-green-500" : ""
                                        }`}
                                >
                                    {/* Titulo */}
                                    <div className="grid grid-cols-[1fr_50px]">
                                        <h4 className="font-bold text-xl">{portugues["analise-e-interpretacao-de-texto"].submaterias.argumentacao.titulo}</h4>
                                        <button
                                            onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].submaterias.argumentacao.titulo)}
                                            className="flex justify-center items-center w-full h-full text-2xl"
                                        >
                                            <FaCheckSquare />
                                        </button>
                                    </div>
                                    {/* Definição */}
                                    <ul>
                                        {portugues["analise-e-interpretacao-de-texto"].submaterias.argumentacao.definicao.map((texto, k) => {
                                            return (
                                                <li key={k}>{texto}</li>
                                            )
                                        })}
                                    </ul>
                                    {/* Dicas */}
                                    <div>
                                        <h3>Dicas</h3>
                                        <ul>
                                            {
                                                portugues["analise-e-interpretacao-de-texto"].submaterias.argumentacao.dicas.map((texto, k) => {
                                                    return (
                                                        <li key={k}>{texto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="w-full aspect-video max-w-3xl mx-auto">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${portugues["analise-e-interpretacao-de-texto"].submaterias.argumentacao.video.idVideo}`}
                                            title={`${portugues["analise-e-interpretacao-de-texto"].submaterias.argumentacao.video.titulo}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Botao de Exercícios */}
                                    <Link
                                        href={`/pages/materias/exercicios/${createSlug(portugues["analise-e-interpretacao-de-texto"].id)}`}
                                        className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                    >
                                        Realizar Exercícios
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* sub4 */}
                        <li className="flex flex-col gap-4 p-2" id={`${portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].id}`}>
                            <ul className="flex flex-col gap-8">
                                <li
                                    className={`flex flex-col gap-2 p-2 ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].titulo) ? "bg-green-500" : ""
                                        }`}
                                >
                                    {/* Titulo */}
                                    <div className="grid grid-cols-[1fr_50px]">
                                        <h4 className="font-bold text-xl">{portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].titulo}</h4>
                                        <button
                                            onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].titulo)}
                                            className="flex justify-center items-center w-full h-full text-2xl"
                                        >
                                            <FaCheckSquare />
                                        </button>
                                    </div>
                                    {/* Definição */}
                                    <ul>
                                        {portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].definicao.map((texto, k) => {
                                            return (
                                                <li key={k}>{texto}</li>
                                            )
                                        })}
                                    </ul>
                                    {/* Dicas */}
                                    <div>
                                        <h3>Dicas</h3>
                                        <ul>
                                            {
                                                portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].dicas.map((texto, k) => {
                                                    return (
                                                        <li key={k}>{texto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    {/* tipos */}
                                    <div>
                                        <h3>Tipos de elementos de coesão</h3>
                                        <ul>
                                            {
                                                portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].tipos.map((tipo, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <h3>{tipo.titulo}</h3>
                                                            <ul>
                                                                {
                                                                    tipo.definicao.map((p, i) => {
                                                                        return (
                                                                            <li key={i}>
                                                                                <p>{p}</p>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                            <div>
                                                                <h3>São alguns exemplos:</h3>
                                                                <ul>
                                                                    {
                                                                        tipo.exemplos.map((ex, i) => {
                                                                            return (
                                                                                <li key={i}>
                                                                                    <p className="italic font-semibold">{ex.frase}</p>
                                                                                    <span>{ex.explicacao}</span>
                                                                                </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="w-full aspect-video max-w-3xl mx-auto">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].video.idVideo}`}
                                            title={`${portugues["analise-e-interpretacao-de-texto"].submaterias["elementos-de-coesao"].video.titulo}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Botao de Exercícios */}
                                    <Link
                                        href={`/pages/materias/exercicios/${createSlug(portugues["analise-e-interpretacao-de-texto"].id)}`}
                                        className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                    >
                                        Realizar Exercícios
                                    </Link>
                                </li>
                            </ul>

                        </li>
                        {/* sub5 */}
                        <li className="flex flex-col gap-4 p-2" id={`${portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.id}`}>
                            <ul className="flex flex-col gap-8">
                                <li
                                    className={`flex flex-col gap-2 p-2 ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.titulo) ? "bg-green-500" : ""
                                        }`}
                                >
                                    {/* Titulo */}
                                    <div className="grid grid-cols-[1fr_50px]">
                                        <h4 className="font-bold text-xl">{portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.titulo}</h4>
                                        <button
                                            onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.titulo)}
                                            className="flex justify-center items-center w-full h-full text-2xl"
                                        >
                                            <FaCheckSquare />
                                        </button>
                                    </div>
                                    {/* Definição */}
                                    <ul>
                                        {portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.definicao.map((texto, k) => {
                                            return (
                                                <li key={k}>{texto}</li>
                                            )
                                        })}
                                    </ul>
                                    {/* Dicas */}
                                    <div>
                                        <h3>Dicas</h3>
                                        <ul>
                                            {
                                                portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.dicas.map((texto, k) => {
                                                    return (
                                                        <li key={k}>{texto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    {/* tipos */}
                                    <div>
                                        <h3>Tipos de elementos de coesão</h3>
                                        <ul>
                                            {
                                                portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.tipos.map((tipo, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <h3>{tipo.titulo}</h3>
                                                            <ul>
                                                                {
                                                                    tipo.definicao.map((p, i) => {
                                                                        return (
                                                                            <li key={i}>
                                                                                <p>{p}</p>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                            <div>
                                                                <h3>São alguns exemplos:</h3>
                                                                <ul>
                                                                    {
                                                                        tipo.exemplos.map((ex, i) => {
                                                                            return (
                                                                                <li key={i}>
                                                                                    <p className="italic font-semibold">{ex.frase}</p>
                                                                                    <span>{ex.explicacao}</span>
                                                                                </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="w-full aspect-video max-w-3xl mx-auto">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.video.idVideo}`}
                                            title={`${portugues["analise-e-interpretacao-de-texto"].submaterias.inferencias.video.titulo}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    {/* Botao de Exercícios */}
                                    <Link
                                        href={`/pages/materias/exercicios/${createSlug(portugues["analise-e-interpretacao-de-texto"].id)}`}
                                        className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                    >
                                        Realizar Exercícios
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias" linkVoltar="/pages/materias" />
        </div>
    )
}