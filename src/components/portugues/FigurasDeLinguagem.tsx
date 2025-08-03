'use client'
import portugues from "@/constants/portugues"
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import { createSlug } from "@/utils/createSlug";
import Link from "next/link"
import { FaCheckSquare } from "react-icons/fa";
import MenuInferior from "../menuInferior/MenuInferior";
import useAuth from "@/data/hook/useAuth";

export default function FigurasDeLinguagem() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh]">
            <div className="flex flex-col" id={`${portugues["figuras-de-linguagem"].id}`}>
                <h2 className="text-2xl font-black p-4">{portugues["figuras-de-linguagem"].titulo}</h2>
                {/* Introdução */}
                <div className="flex flex-col gap-2 p-4">
                    <h3 className="text-xl font-bold">{portugues["figuras-de-linguagem"].introducao.titulo}</h3>
                    <ul>
                        {
                            portugues["figuras-de-linguagem"].introducao.texto.map((texto, i) => {
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
                            portugues["figuras-de-linguagem"].introducao.assuntos.map((ass, i) => {
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
                {/* Submatérias */}
                <div>
                    <ul className="flex flex-col gap-10">
                        {
                            portugues["figuras-de-linguagem"].categoriasDeFiguras.map((categoria, i) => {
                                return (
                                    <li key={i} className="flex flex-col gap-4 p-2" id={`${categoria.id}`}>
                                        <div className="grid grid-cols-[1fr_50px] p-2">
                                            <h3 className="text-xl font-black">{categoria.titulo}</h3>
                                        </div>
                                        <ul className="flex flex-col gap-8">
                                            {
                                                categoria.figuras.map((cat, j) => {
                                                    return (
                                                        <li
                                                            key={j}
                                                            className={`flex flex-col gap-2 p-2 ${materiasCompletas.includes(cat.titulo) ? "bg-green-500" : ""
                                                                }`}
                                                        >
                                                            {/* Titulo */}
                                                            <div className="grid grid-cols-[1fr_50px]">
                                                                <h4 className="font-bold text-xl">{cat.titulo}</h4>
                                                                <button
                                                                    onClick={() => toggleMateriaCompleta(cat.titulo)}
                                                                    className="flex justify-center items-center w-full h-full text-2xl"
                                                                >
                                                                    <FaCheckSquare />
                                                                </button>
                                                            </div>
                                                            {/* Definição */}
                                                            <ul>
                                                                {cat.definicao.map((texto, k) => {
                                                                    return (
                                                                        <li key={k}>{texto}</li>
                                                                    )
                                                                })}
                                                            </ul>
                                                            {/* Exemplos */}
                                                            <div className="flex flex-col gap-2">
                                                                <h5 className="font-black">{cat.exemplos.titulo}</h5>
                                                                <ul className="list-disc ml-8">
                                                                    {cat.exemplos.frases.map((ex, l) => {
                                                                        return (
                                                                            <li key={l}>
                                                                                <p className="italic font-semibold">{ex.frase}</p>
                                                                                <span>{ex.explicacao}</span>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                            <div className="w-full aspect-video max-w-3xl mx-auto">
                                                                <iframe
                                                                    className="w-full h-full"
                                                                    src={`https://www.youtube.com/embed/${cat.video?.idVideo}`}
                                                                    title={`${cat.video?.titulo}`}
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
                                            href={`/pages/materias/exercicios/${createSlug(categoria.id)}`}
                                            className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                        >
                                            Realizar Exercícios
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias" linkVoltar="/pages/materias" />
        </div>
    )
}