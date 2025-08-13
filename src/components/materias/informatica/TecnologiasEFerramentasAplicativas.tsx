'use client'

import informatica from "@/constants/informatica";
import useAuth from "@/data/hook/useAuth";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import TituloMateria from "../../base/TituloMateria";
import IntroducaoMateria from "../../base/IntroducaoDisciplina";
import ReproduzirTexto from "../../reproduzirTexto/ReproduzirTexto";
import SubmateriasNavegacao from "../../base/MateriasNavegacao";
import { FaCheckSquare } from "react-icons/fa";
import VideoExplicativo from "../../base/VideoExplicativo";
import { createSlug } from "@/utils/createSlug";
import MenuInferior from "../../menuInferior/MenuInferior";
import BotaoExecutar from "@/components/base/BotaoExecutar";

export default function TecnologiasEFerramentasAplicativas() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()
    console.log("materiasCompletas", materiasCompletas);

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh] flex flex-col gap-3">
            {/* Titulo da Disciplina */}
            <TituloMateria texto={`${informatica["tecnologias-e-ferramentas-aplicativas"].titulo}`} />
            <IntroducaoMateria introducao={informatica["tecnologias-e-ferramentas-aplicativas"].introducao} />
            <ReproduzirTexto
                texto={
                    Array.isArray(informatica["tecnologias-e-ferramentas-aplicativas"].introducao)
                        ? informatica["tecnologias-e-ferramentas-aplicativas"].introducao.join(' ')
                        : informatica["tecnologias-e-ferramentas-aplicativas"].introducao
                }
            />
            <SubmateriasNavegacao arrayDeMaterias={informatica["tecnologias-e-ferramentas-aplicativas"].submaterias} />
            {/* Submaterias */}
            <ul className="flex flex-col gap-4">
                {
                    informatica["tecnologias-e-ferramentas-aplicativas"].submaterias.map((submateria, i) => {
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
                                <BotaoExecutar link={`/pages/materias/exercicios/${createSlug(submateria.id)}`} texto="Realizar Exercicios" />
                            </li>
                        )
                    })
                }
            </ul>
            <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
        </div>
    )
}