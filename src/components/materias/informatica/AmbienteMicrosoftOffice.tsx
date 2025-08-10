'use client'

import useAuth from "@/data/hook/useAuth";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import MenuInferior from "../../menuInferior/MenuInferior";
import TituloMateria from "../../base/TituloMateria";
import IntroducaoMateria from "../../base/IntroducaoDisciplina";
import SubmateriasNavegacao from "../../base/MateriasNavegacao";
import informatica from "@/constants/informatica";
import { FaCheckSquare } from "react-icons/fa";
import VideoExplicativo from "../../base/VideoExplicativo";
import Link from "next/link";
import { createSlug } from "@/utils/createSlug";
import ReproduzirTexto from "../../reproduzirTexto/ReproduzirTexto";

export default function AmbienteMicrosoftOffice() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()
    console.log("materiasCompletas", materiasCompletas);

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh] flex flex-col gap-3">
            {/* Titulo da Disciplina */}
            <TituloMateria texto={`${informatica["ambiente-microsoft-office"].titulo}`} />
            <IntroducaoMateria introducao={informatica["ambiente-microsoft-office"].introducao} />
            <ReproduzirTexto
                texto={
                    Array.isArray(informatica["ambiente-microsoft-office"].introducao)
                        ? informatica["ambiente-microsoft-office"].introducao.join(' ')
                        : informatica["ambiente-microsoft-office"].introducao
                }
            />
            <SubmateriasNavegacao arrayDeMaterias={informatica["ambiente-microsoft-office"].submaterias} />

            <ul className="flex flex-col gap-4">
                {
                    informatica["ambiente-microsoft-office"].submaterias.map((submateria, i) => {
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
                                <div className="flex flex-col gap-2">
                                    <h2 className="uppercase font-bold text-xl mt-2">Dicas</h2>
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
                                    <p>As principais extensões para esse tipo de arquivo são: <b>{submateria.dicas.tipoDeExtesao}</b></p>
                                </div>
                                <VideoExplicativo idVideo={submateria.video?.idVideo} titulo={submateria.video?.titulo} />
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