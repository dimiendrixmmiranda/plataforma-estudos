'use client'

import informatica from "@/constants/informatica";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import TituloMateria from "../base/TituloMateria";
import IntroducaoMateria from "../base/IntroducaoDisciplina";
import SubmateriasNavegacao from "../base/MateriasNavegacao";
import { FaCheckSquare } from "react-icons/fa";

export default function EdicaoDeTextosPlanilhasApresentacoes() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    console.log("materiasCompletas", materiasCompletas);

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh] flex flex-col gap-3">
            {/* Titulo da Disciplina */}
            <TituloMateria texto={`${informatica.edicaoTextosPlanilhasEApresentacoes.titulo}`} />
            <IntroducaoMateria introducao={informatica.edicaoTextosPlanilhasEApresentacoes.introducao} />
            <SubmateriasNavegacao arrayDeMaterias={informatica.edicaoTextosPlanilhasEApresentacoes.submaterias} />
            {/* Submaterias */}
            <ul className="flex flex-col gap-4">
                {
                    informatica.edicaoTextosPlanilhasEApresentacoes.submaterias.map((submateria, i) => {
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
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}