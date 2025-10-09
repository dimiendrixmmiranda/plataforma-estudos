'use client'

import AncoraLink from "@/components/base/AncoraLink";
import IntroducaoMateria from "@/components/base/IntroducaoDisciplina";
import SubmateriasNavegacao from "@/components/base/MateriasNavegacao";
import TituloMateria from "@/components/base/TituloMateria";
import VideoExplicativo from "@/components/base/VideoExplicativo";
import MenuInferior from "@/components/menuInferior/MenuInferior";
import ReproduzirTexto from "@/components/reproduzirTexto/ReproduzirTexto";
import { tecnicoDeInformatica } from "@/constants/tecnicoDeInformatica";
import useAuth from "@/data/hook/useAuth";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import { createSlug } from "@/utils/createSlug";
import { FaCheckSquare } from "react-icons/fa";

export default function Virus() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()
    console.log("materiasCompletas", materiasCompletas);

    return (
        <div className="bg-zinc-300 text-black">
            <div className="flex flex-col max-w-[1500px] w-full mx-auto gap-4 p-4 md:p-6 lg:p-10">
                {/* Titulo da Disciplina */}
                <TituloMateria texto={`${tecnicoDeInformatica.virus.titulo}`} />
                <IntroducaoMateria introducao={tecnicoDeInformatica.virus.introducao} />
                <ReproduzirTexto
                    texto={
                        Array.isArray(tecnicoDeInformatica.virus.introducao)
                            ? tecnicoDeInformatica.virus.introducao.join(' ')
                            : tecnicoDeInformatica.virus.introducao
                    }
                />
                <SubmateriasNavegacao arrayDeMaterias={tecnicoDeInformatica.virus.submaterias} />

                <ul className="flex flex-col gap-4">
                    {
                        tecnicoDeInformatica.virus.submaterias.map((submateria, i) => {
                            return (
                                <li key={i} id={submateria.id} className={`flex flex-col gap-2 p-2 ${tecnicoDeInformatica.virus.submaterias.length - 1 == i ? '' : 'border-b-2 border-black'}  pb-8 ${materiasCompletas.includes(submateria.id) ? "bg-green-500" : ""
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
                                    {/* Tipos */}
                                    {
                                        submateria.tipos && (
                                            <div className="flex flex-col gap-4">
                                                <h2 className="font-bold text-2xl">{submateria.tipos.titulo}</h2>
                                                <ul className="flex flex-col gap-4">
                                                    {
                                                        submateria.tipos.arrayDeTipos.map((tipo, i) => {
                                                            return (
                                                                <li key={i}>
                                                                    <h3 className="text-xl uppercase font-bold">{tipo.titulo}</h3>
                                                                    <p>{tipo.explicacao}</p>
                                                                    <ul className="list-disc ml-5">
                                                                        {tipo.topicos.map((topico, j) => {
                                                                            return (
                                                                                <li key={j}>
                                                                                    <p>{topico}</p>
                                                                                </li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }

                                    {
                                        submateria.video != undefined ? (
                                            <VideoExplicativo idVideo={submateria.video?.idVideo} titulo={submateria.video?.titulo} />
                                        ) : ''
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-col gap-4 max-w-[800px] ml-auto w-full md:grid md:grid-cols-2">
                    <AncoraLink link={`/pages/materias`} texto="Voltar" />
                    <AncoraLink link={`/pages/materias/exercicios/${createSlug(tecnicoDeInformatica.virus.id)}`} texto="Realizar Exercicios" />
                </div>

                <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
            </div>
        </div>
    )
}