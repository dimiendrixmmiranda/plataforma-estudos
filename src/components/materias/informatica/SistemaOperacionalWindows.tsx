'use client'

import informatica from "@/constants/informatica";
import VideoExplicativo from "../../base/VideoExplicativo";
import MenuInferior from "../../menuInferior/MenuInferior";
import Link from "next/link";
import { createSlug } from "@/utils/createSlug";
import { FaCheckSquare } from "react-icons/fa";
import TituloMateria from "../../base/TituloMateria";
import IntroducaoMateria from "../../base/IntroducaoDisciplina";
import SubmateriasNavegacao from "../../base/MateriasNavegacao";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import useAuth from "@/data/hook/useAuth";
import ReproduzirTexto from "../../reproduzirTexto/ReproduzirTexto";

export default function SistemaOperacionalWindows() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()
    console.log("materiasCompletas", materiasCompletas);

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh] flex flex-col gap-3">
            <TituloMateria texto={`${informatica["sistema-operacional-windows"].titulo}`} />

            {/* Introdução */}
            <IntroducaoMateria introducao={informatica["sistema-operacional-windows"].introducao} />
            <ReproduzirTexto
                texto={
                    Array.isArray(informatica["sistema-operacional-windows"].introducao)
                        ? informatica["sistema-operacional-windows"].introducao.join(' ')
                        : informatica["sistema-operacional-windows"].introducao
                }
            />
            <SubmateriasNavegacao arrayDeMaterias={informatica["sistema-operacional-windows"].submaterias} />

            <ul className="flex flex-col gap-4">
                {
                    informatica["sistema-operacional-windows"].submaterias.map((submateria, i) => {
                        return (
                            <li key={i} id={submateria.id} className={`flex flex-col gap-2 p-2 ${materiasCompletas.includes(submateria.id) ? "bg-green-500" : ""
                                }`}>
                                {/* Titulo */}
                                <div className="grid grid-cols-[1fr_50px]">
                                    <h3 className="uppercase font-bold text-2xl">{submateria.texto}</h3>
                                    <button
                                        onClick={() => toggleMateriaCompleta(submateria.id)}
                                        className="flex justify-center items-center w-full h-full text-2xl"
                                    >
                                        <FaCheckSquare />
                                    </button>
                                </div>
                                <ReproduzirTexto
                                    texto={
                                        Array.isArray(submateria.explicacao)
                                            ? submateria.explicacao.join(' ')
                                            : submateria.explicacao
                                    }
                                />
                                {/* Explicação */}
                                <ul>
                                    {
                                        submateria.explicacao.map((paragrafo, i) => {
                                            return (
                                                <li key={i}>
                                                    <p>{paragrafo}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                {
                                    submateria.dicas ? (
                                        <div className="flex flex-col gap-2">
                                            <h2 className="uppercase font-bold text-xl mt-2">Atalhos</h2>
                                            <p>Os principais atalhos incluem:</p>
                                            <ul>
                                                {
                                                    submateria.dicas.atalhos.map((atalho, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <p><b>{atalho.atalho}:</b> {atalho.funcao}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    ) : ''
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <VideoExplicativo idVideo={informatica["sistema-operacional-windows"].video?.idVideo} titulo={informatica["sistema-operacional-windows"].video?.titulo} />
            <Link
                href={`/pages/materias/exercicios/${createSlug(informatica["sistema-operacional-windows"].id)}`}
                className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
            >
                Realizar Exercícios
            </Link>
            <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
        </div>
    )
}