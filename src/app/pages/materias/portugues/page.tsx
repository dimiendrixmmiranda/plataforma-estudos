'use client'
import MenuInferior from "@/components/menuInferior/MenuInferior";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";
import Template from "@/components/template/Template";
import portugues from "@/constants/portugues";
import useAuth from "@/data/hook/useAuth";
import { createSlug } from "@/utils/createSlug";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";

export default function Page() {
    const [materiasCompletas, setMateriasCompletas] = useState<string[]>([]);
    const { usuario } = useAuth()

    useEffect(() => {
        const salvos = localStorage.getItem("materiasCompletas");
        if (salvos) {
            setMateriasCompletas(JSON.parse(salvos));
        }
    }, []);

    function toggleMateriaCompleta(id: string) {
        const atualizadas = materiasCompletas.includes(id)
            ? materiasCompletas.filter((item) => item !== id)
            : [...materiasCompletas, id];

        setMateriasCompletas(atualizadas);
        localStorage.setItem("materiasCompletas", JSON.stringify(atualizadas));
    }

    return (
        <Template>
            <RotaProtegida>
                <div className="w-full min-h-screen bg-zinc-300 text-black relative">
                    <div className="flex flex-col p-4">
                        <h2 className="text-3xl font-black uppercase">Português</h2>
                        <p>{portugues.introducao}</p>
                        <ul className="list-disc flex flex-col gap-2 ml-4">
                            {
                                portugues.materias.map((materia, i) => {
                                    return (
                                        <li key={i} className="bg-magenta text-white p-2" style={{ textShadow: '1px 1px 2px black' }}>
                                            <Link href={`#${materia.id}`} className="text-xl font-bold leading-5">{materia.materia}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* 1º assunto de 5 */}
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
                    {/* 4º assunto de 5 */}
                    <div className="flex flex-col gap-4 p-2" id={`${portugues.sintaxe.id}`}>
                        <h2 className="text-2xl font-black">{portugues.sintaxe.titulo}</h2>
                        {/* Introdução */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">{portugues.sintaxe.introducao.titulo}</h3>
                            <ul>
                                {
                                    portugues.sintaxe.introducao.texto.map((texto, i) => {
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
                                    portugues.sintaxe.introducao.assuntos.map((ass, i) => {
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
                        {/* submateria individual */}
                        <div>
                            {/* submateria 1 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe["classificacao-de-sujeitos"].titulo) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe["classificacao-de-sujeitos"].id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe["classificacao-de-sujeitos"].titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe["classificacao-de-sujeitos"].titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe["classificacao-de-sujeitos"].definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* Classificação */}
                                <div>
                                    <ul className="flex flex-col gap-4">
                                        {
                                            portugues.sintaxe["classificacao-de-sujeitos"].classificacao.map((classificacao, i) => {
                                                return (
                                                    <li key={i} className="flex flex-col gap-3">
                                                        <h3 className="uppercase font-black text-xl">{classificacao.titulo}</h3>
                                                        <ul>
                                                            {
                                                                classificacao.definicao.map((def, i) => {
                                                                    return (
                                                                        <li key={i}><p>{def}</p></li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                        <div className="flex flex-col gap-2">
                                                            <h2 className="text-xl font-semibold">Exemplos:</h2>
                                                            <ul className="flex flex-col gap-4">
                                                                {
                                                                    classificacao.exemplos.map((ex, i) => {
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
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe["classificacao-de-sujeitos"].video.idVideo}`}
                                        title={`${portugues.sintaxe["classificacao-de-sujeitos"].video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe["classificacao-de-sujeitos"].id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                            {/* submateria 3 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe.predicados.titulo) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe.predicados.id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe.predicados.titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe.predicados.titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe.predicados.definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* Categorias */}
                                <div>
                                    <ul className="flex flex-col gap-4">
                                        {
                                            portugues.sintaxe.predicados.categorias.map((categoria, i) => {
                                                return (
                                                    <li key={i} className="flex flex-col gap-3">
                                                        <h3 className="uppercase font-black text-xl">{categoria.titulo}</h3>
                                                        <ul>
                                                            {
                                                                categoria.definicao.map((def, i) => {
                                                                    return (
                                                                        <li key={i}><p>{def}</p></li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                        <div className="flex flex-col gap-2">
                                                            <h2 className="text-xl font-semibold">Exemplos:</h2>
                                                            <ul className="flex flex-col gap-4">
                                                                {
                                                                    categoria.exemplos.map((ex, i) => {
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
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe.predicados.video.idVideo}`}
                                        title={`${portugues.sintaxe.predicados.video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe.predicados.id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                            {/* submateria 4 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe.vocativo.titulo) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe.vocativo.id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe.vocativo.titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe.vocativo.titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe.vocativo.definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* Atenção */}
                                <div className="flex flex-col gap-4">
                                    <h3 className="uppercase font-black text-2xl">Atenção</h3>
                                    <ul>
                                        {
                                            portugues.sintaxe.vocativo.atencao.explicacao.map((p, i) => {
                                                return (
                                                    <li key={i}>
                                                        <p>{p}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div>
                                        <h4 className="font-bold text-xl">Exemplos de Comparação</h4>
                                        <ul className="flex flex-col gap-4">
                                            {
                                                portugues.sintaxe.vocativo.atencao.exemplos.map((ex, i) => {
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
                                </div>
                                {/* Exemplos */}
                                <div>
                                    <h3>Exemplos:</h3>
                                    <ul className="flex flex-col gap-4">
                                        {
                                            portugues.sintaxe.vocativo.exemplos.map((ex, i) => {
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
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe.vocativo.video.idVideo}`}
                                        title={`${portugues.sintaxe.vocativo.video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe.vocativo.id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                            {/* submateria 5 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe["periodo-compostos-por-subordinacao"].titulo) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe["periodo-compostos-por-subordinacao"].id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe["periodo-compostos-por-subordinacao"].titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe["periodo-compostos-por-subordinacao"].titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe["periodo-compostos-por-subordinacao"].definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* Categorias */}
                                <div>
                                    <ul className="flex flex-col gap-4">
                                        {
                                            portugues.sintaxe["periodo-compostos-por-subordinacao"].categorias.map((categoria, i) => {
                                                return (
                                                    <li key={i} className="flex flex-col gap-3">
                                                        <h3 className="uppercase font-black text-xl">{categoria.titulo}</h3>
                                                        <ul>
                                                            {
                                                                categoria.definicao.map((def, i) => {
                                                                    return (
                                                                        <li key={i}><p>{def}</p></li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                        <div className="flex flex-col gap-2">
                                                            <h2 className="text-xl font-semibold">Exemplos:</h2>
                                                            <ul className="flex flex-col gap-4">
                                                                {
                                                                    categoria.exemplos.map((ex, i) => {
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
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe["periodo-compostos-por-subordinacao"].video.idVideo}`}
                                        title={`${portugues.sintaxe["periodo-compostos-por-subordinacao"].video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe["periodo-compostos-por-subordinacao"].id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                            {/* submateria 6 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe["periodo-compostos-por-coordenacao"].titulo) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe["periodo-compostos-por-coordenacao"].id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe["periodo-compostos-por-coordenacao"].titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe["periodo-compostos-por-coordenacao"].titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe["periodo-compostos-por-coordenacao"].definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* Categorias */}
                                <div>
                                    <ul className="flex flex-col gap-4">
                                        {
                                            portugues.sintaxe["periodo-compostos-por-coordenacao"].categorias.map((categoria, i) => {
                                                return (
                                                    <li key={i} className="flex flex-col gap-3">
                                                        <h3 className="uppercase font-black text-xl">{categoria.titulo}</h3>
                                                        <ul>
                                                            {
                                                                categoria.definicao.map((def, i) => {
                                                                    return (
                                                                        <li key={i}><p>{def}</p></li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                        <div className="flex flex-col gap-2">
                                                            <h2 className="text-xl font-semibold">Exemplos:</h2>
                                                            <ul className="flex flex-col gap-4">
                                                                {
                                                                    categoria.exemplos.map((ex, i) => {
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
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe["periodo-compostos-por-coordenacao"].video.idVideo}`}
                                        title={`${portugues.sintaxe["periodo-compostos-por-coordenacao"].video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe["periodo-compostos-por-coordenacao"].id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                            {/* submateria 6 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].titulo) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* exemplos */}
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-xl font-semibold">Exemplos:</h2>
                                        <ul className="flex flex-col gap-4">
                                            {
                                                portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].exemplos.map((ex, i) => {
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
                                </div>
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].video.idVideo}`}
                                        title={`${portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe["periodo-compostos-por-subordinacao-e-coordenacao"].id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                            {/* submateria 7 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe["concordancia-nominal"].titulo) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe["concordancia-nominal"].id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe["concordancia-nominal"].titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe["concordancia-nominal"].titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe["concordancia-nominal"].definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* casos especiais */}
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-xl font-semibold">Casos Especiais</h2>
                                        <p>A concordância nominal, embora geralmente simples, apresenta alguns casos especiais que merecem destaque.</p>
                                        <ul className="flex flex-col gap-4">
                                            {
                                                portugues.sintaxe["concordancia-nominal"].casosEspeciais.map((caso, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <p className="italic font-semibold">{caso.frase}</p>
                                                            <span>{caso.explicacao}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* exemplos */}
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-xl font-semibold">Exemplos:</h2>
                                        <ul className="flex flex-col gap-4">
                                            {
                                                portugues.sintaxe["concordancia-nominal"].exemplos.map((ex, i) => {
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
                                </div>
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe["concordancia-nominal"].video.idVideo}`}
                                        title={`${portugues.sintaxe["concordancia-nominal"].video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe["concordancia-nominal"].id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                            {/* submateria 8 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe["concordancia-verbal"].titulo) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe["concordancia-verbal"].id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe["concordancia-verbal"].titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe["concordancia-verbal"].titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe["concordancia-verbal"].definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* casos especiais */}
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-xl font-semibold">Casos Especiais</h2>
                                        <p>A concordância verbal, embora geralmente simples, apresenta alguns casos especiais que merecem destaque.</p>
                                        <ul className="flex flex-col gap-4">
                                            {
                                                portugues.sintaxe["concordancia-verbal"].casosEspeciais.map((caso, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <p className="italic font-semibold">{caso.frase}</p>
                                                            <span>{caso.explicacao}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* exemplos */}
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-xl font-semibold">Exemplos:</h2>
                                        <ul className="flex flex-col gap-4">
                                            {
                                                portugues.sintaxe["concordancia-verbal"].exemplos.map((ex, i) => {
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
                                </div>
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe["concordancia-verbal"].video.idVideo}`}
                                        title={`${portugues.sintaxe["concordancia-verbal"].video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe["concordancia-verbal"].id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                            {/* submateria 9 */}
                            <div
                                className={`flex flex-col gap-4 p-4 ${materiasCompletas.includes(portugues.sintaxe.crase.id) ? "bg-green-500" : ""
                                    }`}
                                id={`${portugues.sintaxe.crase.id}`}
                            >
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="text-xl font-black">{portugues.sintaxe.crase.titulo}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(portugues.sintaxe.crase.titulo)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                {/* Definição */}
                                <ul>
                                    {
                                        portugues.sintaxe.crase.definicao.map((texto, i) => {
                                            return (
                                                <li key={i}>{texto}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <div>
                                    <h2 className="upperscase font-bold text-2xl">Regras para o uso da crase</h2>
                                    <ul>
                                        {
                                            portugues.sintaxe.crase.regras.map((regra, i) => {
                                                return (
                                                    <li key={i} className="flex flex-col gap-2">
                                                        <h3 className="uppercase font-black text-xl">{regra.titulo}</h3>
                                                        <ul>
                                                            <li>
                                                                {
                                                                    regra.definicao.map((p, i) => {
                                                                        return (
                                                                            <p key={i}>{p}</p>
                                                                        )
                                                                    })
                                                                }
                                                            </li>
                                                        </ul>
                                                        <div>
                                                            <h4 className="uppercase font-bold text-xl">Exemplos:</h4>
                                                            <ul className="flex flex-col gap-4">
                                                                {
                                                                    regra.exemplos.map((ex, i) => {
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
                                {/* Video */}
                                <div className="w-full aspect-video max-w-3xl mx-auto">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${portugues.sintaxe.crase.video.idVideo}`}
                                        title={`${portugues.sintaxe.crase.video.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* Botao de Exercícios */}
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(portugues.sintaxe.crase.id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </div>
                        </div>
                    </div>
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
            </RotaProtegida>
        </Template>

    )
}