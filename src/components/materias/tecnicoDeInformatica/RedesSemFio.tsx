'use client'

import AncoraLink from "@/components/base/AncoraLink";
import Imagem from "@/components/base/Imagem";
import IntroducaoMateria from "@/components/base/IntroducaoDisciplina";
import SubmateriasNavegacao from "@/components/base/MateriasNavegacao";
import TituloMateria from "@/components/base/TituloMateria";
import MenuInferior from "@/components/menuInferior/MenuInferior";
import ReproduzirTexto from "@/components/reproduzirTexto/ReproduzirTexto";
import { tecnicoDeInformatica } from "@/constants/tecnicoDeInformatica";
import useAuth from "@/data/hook/useAuth";
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import { createSlug } from "@/utils/createSlug";
import { FaCheckSquare } from "react-icons/fa";

export default function RedesSemFio() {
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();
    const { usuario } = useAuth()

    return (
        <div className="bg-zinc-300 text-black">
            <div className="flex flex-col max-w-[1500px] w-full mx-auto gap-4 p-4 md:p-6 lg:p-10">
                {/* Titulo da Disciplina */}
                <TituloMateria texto={`${tecnicoDeInformatica["redes-sem-fio"].titulo}`} />
                <IntroducaoMateria introducao={tecnicoDeInformatica["redes-sem-fio"].introducao} />
                <ReproduzirTexto
                    texto={
                        Array.isArray(tecnicoDeInformatica["redes-sem-fio"].introducao)
                            ? tecnicoDeInformatica["redes-sem-fio"].introducao.join(' ')
                            : tecnicoDeInformatica["redes-sem-fio"].introducao
                    }
                />
                <SubmateriasNavegacao arrayDeMaterias={tecnicoDeInformatica["redes-sem-fio"].submaterias} />

                <ul className="flex flex-col gap-4">
                    {
                        tecnicoDeInformatica["redes-sem-fio"].submaterias.map((submateria, i) => {
                            return (
                                <li key={i} id={submateria.id} className={`flex flex-col gap-2 p-2 ${tecnicoDeInformatica["redes-sem-fio"].submaterias.length - 1 == i ? '' : 'border-b-2 border-black'}  pb-8 ${materiasCompletas.includes(submateria.id) ? "bg-green-500" : ""
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
                                                                    {
                                                                        tipo.imagem && <div className="flex flex-col gap-2">
                                                                            <h4 className="text-2xl text-center">Resumo Visual:</h4>
                                                                            <Imagem enderecoDaImagem={tipo.imagem} />
                                                                        </div>
                                                                    }
                                                                    {
                                                                        tipo.complemento && <p>{tipo.complemento}</p>
                                                                    }
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                {
                                                    submateria.tipos.imagem && <div className="flex flex-col gap-2">
                                                        <h4 className="text-2xl text-center">Resumo Visual:</h4>
                                                        <Imagem enderecoDaImagem={submateria.tipos.imagem} />
                                                    </div>
                                                }
                                            </div>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-col gap-4 max-w-[800px] ml-auto w-full md:grid md:grid-cols-2">
                    <AncoraLink link={`/pages/materias`} texto="Voltar" />
                    <AncoraLink link={`/pages/materias/exercicios/${createSlug(tecnicoDeInformatica["redes-sem-fio"].id)}`} texto="Realizar Exercicios" />
                </div>

                <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
            </div>
        </div>
    )
}