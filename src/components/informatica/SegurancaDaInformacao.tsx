'use client'

import informatica from "@/constants/informatica";
import useAuth from "@/data/hook/useAuth";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import TituloMateria from "../base/TituloMateria";
import IntroducaoMateria from "../base/IntroducaoDisciplina";
import ReproduzirTexto from "../reproduzirTexto/ReproduzirTexto";
import SubmateriasNavegacao from "../base/MateriasNavegacao";
import { FaCheckSquare } from "react-icons/fa";
import VideoExplicativo from "../base/VideoExplicativo";
import Link from "next/link";
import { createSlug } from "@/utils/createSlug";
import MenuInferior from "../menuInferior/MenuInferior";

export default function SegurancaDaInformacao() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()
    console.log("materiasCompletas", materiasCompletas);

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh] flex flex-col gap-3">
            {/* Titulo da Disciplina */}
            <TituloMateria texto={`${informatica["seguranca-da-informacao"].titulo}`} />
            <IntroducaoMateria introducao={informatica["seguranca-da-informacao"].introducao} />
            <ReproduzirTexto
                texto={
                    Array.isArray(informatica["seguranca-da-informacao"].introducao)
                        ? informatica["seguranca-da-informacao"].introducao.join(' ')
                        : informatica["seguranca-da-informacao"].introducao
                }
            />
            <SubmateriasNavegacao arrayDeMaterias={informatica["seguranca-da-informacao"].submaterias} />
            {/* Submaterias */}
            <ul className="flex flex-col gap-4">
                {
                    informatica["seguranca-da-informacao"].submaterias.map((submateria, i) => {
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
                                {/* Explicação */}
                                <ReproduzirTexto
                                    texto={
                                        Array.isArray(submateria.explicacao)
                                            ? submateria.explicacao.join(' ')
                                            : submateria.explicacao
                                    }
                                />
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
                                    submateria.video ? (
                                        <VideoExplicativo idVideo={submateria.video?.idVideo} titulo={submateria.video?.titulo} />
                                    ) : ''
                                }
                                <Link
                                    href={`/pages/materias/exercicios/${createSlug(submateria.id)}`}
                                    className="text-center uppercase font-bold text-xl flex justify-center bg-amarelo w-full py-2 text-white mt-2"
                                >
                                    Realizar Exercícios
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
        </div>
    )
}