import MenuInferior from "@/components/menuInferior/MenuInferior";
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida";
import portugues from "@/constants/portugues";
import Link from "next/link";

export default function Page() {
    return (
        <RotaProtegida>
            <div className="w-full min-h-screen bg-zinc-300 text-black p-4 pb-14">
                {/* 1º assunto de 5 */}
                <div className="flex flex-col gap-4">
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
                        <ul className="list-disc ml-8">
                            {
                                portugues["figuras-de-linguagem"].introducao.assuntos.map((ass, i) => {
                                    return (
                                        <li key={i}>
                                            <p>{ass}</p>
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
                                        <li key={i} className="flex flex-col gap-4">
                                            <h3 className="text-xl font-black">{categoria.titulo}</h3>
                                            <ul className="flex flex-col gap-8">
                                                {
                                                    categoria.figuras.map((cat, j) => {
                                                        return (
                                                            <li key={j} className="flex flex-col gap-2">
                                                                {/* Titulo */}
                                                                <h4 className="font-bold text-xl">{cat.titulo}</h4>
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
                                                                {/* Botao de Exercícios */}
                                                                <Link
                                                                    href={`/pages/materias/exercicios`}
                                                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                                                >
                                                                    Realizar Exercícios
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <MenuInferior linkHome="/" linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
            </div>
        </RotaProtegida>

    )
}