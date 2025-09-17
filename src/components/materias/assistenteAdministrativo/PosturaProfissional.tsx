'use client'

import AncoraLink from "@/components/base/AncoraLink";
import IntroducaoMateria from "@/components/base/IntroducaoDisciplina";
import SubmateriasNavegacao from "@/components/base/MateriasNavegacao";
import TituloMateria from "@/components/base/TituloMateria";
import VideoExplicativo from "@/components/base/VideoExplicativo";
import MenuInferior from "@/components/menuInferior/MenuInferior";
import ReproduzirTexto from "@/components/reproduzirTexto/ReproduzirTexto";
import { assistenteAdministrativo } from "@/constants/assistenteAdministrativo";
import useAuth from "@/data/hook/useAuth";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import { createSlug } from "@/utils/createSlug";
import { FaCheckSquare } from "react-icons/fa";

export default function PosturaProfissional() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()
    console.log("materiasCompletas", materiasCompletas);

    return (
        <div className="p-2 bg-zinc-300 text-black min-h-[77vh] flex flex-col gap-3">
            {/* Titulo da Disciplina */}
            <TituloMateria texto={`${assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].titulo}`} />
            <IntroducaoMateria introducao={assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].introducao} />
            <ReproduzirTexto
                texto={
                    Array.isArray(assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].introducao)
                        ? assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].introducao.join(' ')
                        : assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].introducao
                }
            />
            <SubmateriasNavegacao arrayDeMaterias={assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].submaterias} />

            <ul className="flex flex-col gap-4">
                {
                    assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].submaterias.map((submateria, i) => {
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
                                    submateria.video != undefined ? (
                                        <VideoExplicativo idVideo={submateria.video?.idVideo} titulo={submateria.video?.titulo} />
                                    ) : ''
                                }
                                <AncoraLink link={`/pages/materias/exercicios/${createSlug(submateria.id)}`} texto="Realizar Exercicios" />
                            </li>
                        )
                    })
                }
            </ul>

            <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
        </div>
    )
}