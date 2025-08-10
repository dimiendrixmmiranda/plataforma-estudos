'use client'
import portugues from "@/constants/portugues"
import useAuth from "@/data/hook/useAuth";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import { createSlug } from "@/utils/createSlug";
import Link from "next/link"
import { FaCheckSquare } from "react-icons/fa";
import MenuInferior from "../../menuInferior/MenuInferior";

export default function Pontuacao() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh]">
            {/* 5º assunto de 5 */}
            <div className="flex flex-col gap-4 p-4" id={`${portugues.pontuacao.id}`}>
                <h2 className="text-2xl font-black">{portugues.pontuacao.titulo}</h2>
                {/* Introdução */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{portugues.pontuacao.introducao.titulo}</h3>
                    <ul>
                        {
                            portugues.pontuacao.introducao.texto.map((texto, i) => {
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
                            portugues.pontuacao.introducao.assuntos.map((ass, i) => {
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
                            portugues.pontuacao.submaterias.map((pontuacao, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(pontuacao.titulo) ? "bg-green-500" : ""
                                            }`}
                                        id={`${pontuacao.id}`}
                                    >
                                        <div className="grid grid-cols-[1fr_50px]">
                                            <h3 className="text-xl font-black">{pontuacao.titulo}</h3>
                                            <button
                                                onClick={() => toggleMateriaCompleta(pontuacao.titulo)}
                                                className="flex justify-center items-center w-full h-full text-2xl"
                                            >
                                                <FaCheckSquare />
                                            </button>
                                        </div>
                                        {/* Definição */}
                                        <ul>
                                            {
                                                pontuacao.definicao.map((texto, i) => {
                                                    return (
                                                        <li key={i}>{texto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div>
                                            <h3 className="uppercase font-bold text-2xl">Regras:</h3>
                                            <ul className="flex flex-col gap-4">
                                                {
                                                    pontuacao.regras.listaDeRegras.map((regra, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <p><b>{regra.titulo}</b> {regra.definicao}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        {/* Video */}
                                        <div className="w-full aspect-video max-w-3xl mx-auto">
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${pontuacao.video?.idVideo}`}
                                                title={`${pontuacao.video?.titulo}`}
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