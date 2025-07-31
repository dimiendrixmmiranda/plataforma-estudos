'use client'

import MenuInferior from "@/components/menuInferior/MenuInferior"
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida"
import Template from "@/components/template/Template"
import useAuth from "@/data/hook/useAuth"
import Link from "next/link"
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function PaginaMaterias() {
    const { logout } = useAuth()
    const { usuario } = useAuth()
    return (
        <Template>
            <RotaProtegida>
                <div className="bg-zinc-300 text-black min-h-[80vh] p-4 flex flex-col gap-4 pb-14">
                    <div className="flex flex-col gap-4">
                        <Link href={'/pages/materias/portugues'}>portugues pre refatoracao</Link>
                        <h2 className="uppercase font-black text-2xl leading-6">Selecione um cargo para estudo:</h2>
                        <Accordion multiple>
                            <AccordionTab header="Agente de Combate a Endemias">
                                <Accordion>
                                    <AccordionTab header="Português">
                                        <ul className="flex flex-col gap-2">
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/analise-e-interpretacao-de-texto'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/figuras-de-linguagem'}>
                                                    Figuras de Linguagem
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/morfologia'}>
                                                    Morfologia
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/sintaxe'}>
                                                    Sintaxe
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/pontuacao'}>
                                                    Pontuação
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                    <AccordionTab header="Matemática">
                                        <ul className="flex flex-col gap-2">
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Figuras de Linguagem
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Morfologia
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Sintaxe
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Pontuação
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                    <AccordionTab header="Conhecimento Geral">
                                        <ul className="flex flex-col gap-2">
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Figuras de Linguagem
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Morfologia
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Sintaxe
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Pontuação
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                    <AccordionTab header="Conhecimento Específico">
                                        <ul className="flex flex-col gap-2">
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Figuras de Linguagem
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Morfologia
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Sintaxe
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Pontuação
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                    <AccordionTab header="Informática">
                                        <ul className="flex flex-col gap-2">
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Figuras de Linguagem
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Morfologia
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Sintaxe
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                    Pontuação
                                                </Link>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                </Accordion>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <Link href={'/pages/simulado'} className="bg-amarelo uppercase font-black text-xl text-white flex justify-center items-center py-2" style={{ textShadow: '1px 1px 2px black' }}>Realizar Simulado!</Link >
                    <button onClick={logout} className="mt-auto bg-red-600 uppercase font-bold text-lg text-white max-w-[120px] py-2 ml-auto w-full" style={{ textShadow: '1px 1px 2px black' }}>Logout</button>
                </div>
                <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
            </RotaProtegida>
        </Template>
    )
}