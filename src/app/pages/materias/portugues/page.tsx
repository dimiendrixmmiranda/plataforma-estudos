import MenuInferior from "@/components/menuInferior/MenuInferior";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";
import Template from "@/components/template/Template";
import portugues from "@/constants/portugues";
import { createSlug } from "@/utils/createSlug";
import Link from "next/link";
import { FaCheckSquare } from "react-icons/fa";

export default function Page() {
    return (
        <Template>
            <RotaProtegida>
                <div className="w-full min-h-screen bg-zinc-300 text-black p-2 pb-14 relative">
                    <h2 className="text-3xl font-black uppercase">Português</h2>
                    <p>{portugues.introducao}</p>
                    <ul className="list-disc flex flex-col gap-2">
                        {
                            portugues.materias.map((materia, i) => {
                                return (
                                    <li key={i} className="bg-magenta p-2 text-white">
                                        <Link href={`#${materia.id}`} className="text-xl font-bold leading-5">{materia.materia}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* 1º assunto de 5 */}
                    <div className="flex flex-col gap-4 p-2" id={`${portugues["figuras-de-linguagem"].id}`}>
                        <h2 className="text-2xl font-black">{portugues["figuras-de-linguagem"].titulo}</h2>
                        {/* Introdução */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">{portugues["figuras-de-linguagem"].introducao.titulo}</h3>
                            <ul>
                                {
                                    portugues["figuras-de-linguagem"].introducao.texto.map((texto, i) => {
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
                                    portugues["figuras-de-linguagem"].introducao.assuntos.map((ass, i) => {
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
                        {/* Submatérias */}
                        <div>
                            <ul className="flex flex-col gap-10">
                                {
                                    portugues["figuras-de-linguagem"].categoriasDeFiguras.map((categoria, i) => {
                                        return (
                                            <li key={i} className="flex flex-col gap-4 p-2" id={`${categoria.id}`}>
                                                <div className="grid grid-cols-[1fr_50px]">
                                                    <h3 className="text-xl font-black">{categoria.titulo}</h3>
                                                </div>
                                                <ul className="flex flex-col gap-8">
                                                    {
                                                        categoria.figuras.map((cat, j) => {
                                                            return (
                                                                <li key={j} className="flex flex-col gap-2">
                                                                    {/* Titulo */}
                                                                    <div className="grid grid-cols-[1fr_50px]">
                                                                        <h4 className="font-bold text-xl">{cat.titulo}</h4>
                                                                        <button className="flex justify-center items-center w-full h-full text-2xl"><FaCheckSquare /></button>
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
                    {/* 2º assunto de 5 */}
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
                                            <li key={i} className="flex flex-col gap-4 p-2" id={`${categoria.id}`}>
                                                <div className="grid grid-cols-[1fr_50px]">
                                                    <h3 className="text-xl font-black">{categoria.titulo}</h3>
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
                    <MenuInferior linkHome="/" linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
                </div>
            </RotaProtegida>
        </Template>

    )
}