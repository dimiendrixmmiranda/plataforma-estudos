'use client'

import portugues from "@/constants/portugues";
import useAuth from "@/data/hook/useAuth";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import { createSlug } from "@/utils/createSlug";
import Link from "next/link";
import { FaCheckSquare } from "react-icons/fa";
import MenuInferior from "../../menuInferior/MenuInferior";

export default function Morfologia() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh]">
            {/* 3º assunto de 5 */}
            <div className="flex flex-col gap-4 p-2" id={`${portugues.morfologia.id}`}>
                <h2 className="text-2xl font-black">{portugues.morfologia.titulo}</h2>
                {/* Introdução */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{portugues.morfologia.introdução.titulo}</h3>
                    <ul>
                        {
                            portugues.morfologia.introdução.texto.map((texto, i) => {
                                return (
                                    <li key={i}>
                                        <p className="indent-8">{texto}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="list-disc ml-8 gap-2 flex flex-col">
                        {
                            portugues.morfologia.introdução.assuntos.map((ass, i) => {
                                return (
                                    <li key={i} className="bg-azul-escuro p-2 text-black">
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
                        {
                            portugues.morfologia.submaterias.map((categoria, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(categoria.titulo) ? "bg-green-500" : ""
                                            }`}
                                        id={`${categoria.id}`}
                                    >
                                        <div className="grid grid-cols-[1fr_50px]">
                                            <h3 className="text-xl font-black">{categoria.titulo}</h3>
                                            <button
                                                onClick={() => toggleMateriaCompleta(categoria.titulo)}
                                                className="flex justify-center items-center w-full h-full text-2xl"
                                            >
                                                <FaCheckSquare />
                                            </button>
                                        </div>
                                        {/* Definição */}
                                        <ul>
                                            {
                                                categoria.definicao.map((texto, i) => {
                                                    return (
                                                        <li key={i}>{texto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        {/* Exemplos */}
                                        <div className="flex flex-col gap-2">
                                            <h5 className="font-black">{categoria.exemplos.titulo}</h5>
                                            <ul className="list-disc ml-8">
                                                {categoria.exemplos.frases.map((ex, l) => {
                                                    return (
                                                        <li key={l}>
                                                            <p className="italic font-semibold">{ex.frase}</p>
                                                            <span>{ex.explicacao}</span>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        {/* Video */}
                                        <div className="w-full aspect-video max-w-3xl mx-auto">
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${categoria.video?.idVideo}`}
                                                title={`${categoria.video?.titulo}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* Botao de Exercícios */}
                    <Link
                        href={`/pages/materias/exercicios/${createSlug(portugues.morfologia.id)}`}
                        className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                    >
                        Realizar Exercícios
                    </Link>
                </div>
            </div>
            <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias" linkVoltar="/pages/materias" />
        </div>
    )
}