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
                <div className="bg-zinc-300 text-black min-h-[80vh] p-4 flex flex-col pb-14">
                    <div className="flex flex-col gap-4">
                        <h2 className="uppercase font-black text-2xl leading-6">Selecione um cargo para estudo:</h2>
                        <ul className="">
                            <Accordion>
                                <AccordionTab header="Agente de Combate a Endemias">
                                    <ul>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                Portugues
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/matematica'}>
                                                Matemática
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica'}>
                                                Informática
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias'}>
                                                Conhecimento Específico
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionTab>
                                <AccordionTab header="Agente Comunitário de Saúde">
                                    <ul>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                Portugues
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/matematica'}>
                                                Matemática
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica'}>
                                                Informática
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias'}>
                                                Conhecimento Específico
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionTab>
                                <AccordionTab header="Assistente Administrativo">
                                    <ul>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                Portugues
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/matematica'}>
                                                Matemática
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica'}>
                                                Informática
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias'}>
                                                Conhecimento Específico
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionTab>
                                <AccordionTab header="Atendente de Farmácia">
                                    <ul>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues'}>
                                                Portugues
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/matematica'}>
                                                Matemática
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica'}>
                                                Informática
                                            </Link>
                                        </li>
                                        <li className="p-2">
                                            <Link className="uppercase font-bold p-2 text-white bg-zinc-700 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias'}>
                                                Conhecimento Específico
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                        </ul>
                    </div>
                    <button onClick={logout} className="mt-auto bg-red-600 uppercase font-bold text-lg text-white max-w-[120px] py-2 ml-auto w-full" style={{ textShadow: '1px 1px 2px black' }}>Logout</button>
                </div>
                <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
            </RotaProtegida>
        </Template>
    )
}