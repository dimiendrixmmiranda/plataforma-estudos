'use client'

import MenuInferior from "@/components/menuInferior/MenuInferior"
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida"
import Template from "@/components/template/Template"
import useAuth from "@/data/hook/useAuth"
import Link from "next/link"
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas"
import { FaCheckSquare } from "react-icons/fa"
import portugues from "@/constants/portugues"
import informatica from "@/constants/informatica"

export default function PaginaMaterias() {
    const { usuario } = useAuth()
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas();

    return (
        <Template>
            <RotaProtegida>
                <div className="bg-zinc-300 text-black min-h-[80vh] p-4 flex flex-col gap-4 pb-14">
                    <div className="flex flex-col gap-4">
                        <h2 className="uppercase font-black text-2xl leading-6">Selecione um cargo para estudo:</h2>
                        <Accordion multiple>
                            <AccordionTab header="Agente de Combate a Endemias">
                                <Accordion>
                                    <AccordionTab header="Português">
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/analise-e-interpretacao-de-texto'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["figuras-de-linguagem"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/figuras-de-linguagem'}>
                                                    Figuras de Linguagem
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["figuras-de-linguagem"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.morfologia.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/morfologia'}>
                                                    Morfologia
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.morfologia.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.sintaxe.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/sintaxe'}>
                                                    Sintaxe
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.sintaxe.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.pontuacao.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/pontuacao'}>
                                                    Pontuação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.pontuacao.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
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
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            {/* titulo de cada submateria que esta mandando no check */}
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/edicao-de-textos-planilhas-e-apresentacoes'}>
                                                    Edição de Textos, Planilhas e Apresentações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["ambiente-microsoft-office"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/ambiente-microsoft-office'}>
                                                    Ambiente Microsoft Office
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["ambiente-microsoft-office"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["sistema-operacional-windows"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/sistema-operacional-windows'}>
                                                    Sistema Operacional Windows
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["sistema-operacional-windows"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["internet-e-intranet"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/internet-e-intranet'}>
                                                    Internet e Intranet
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["internet-e-intranet"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["tecnologias-e-ferramentas-aplicativas"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/tecnologias-e-ferramentas-aplicativas'}>
                                                    Tecnologias e Ferramentas Aplicativas
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["tecnologias-e-ferramentas-aplicativas"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["organizacao-e-gerenciamento-de-informacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/organizacao-e-gerenciamento-de-informacoes'}>
                                                    Organização e Gerenciamento de Informações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["organizacao-e-gerenciamento-de-informacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["certificacao-e-assinatura-digital"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/certificacao-e-assinatura-digital'}>
                                                    Certificação e Assinatura Digital
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["certificacao-e-assinatura-digital"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["seguranca-da-informacao"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/seguranca-da-informacao'}>
                                                    Segurança da Informação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["seguranca-da-informacao"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                </Accordion>
                            </AccordionTab>
                            <AccordionTab header="Agente Comunitário de Saúde">
                                <Accordion>
                                    <AccordionTab header="Português">
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/analise-e-interpretacao-de-texto'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["figuras-de-linguagem"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/figuras-de-linguagem'}>
                                                    Figuras de Linguagem
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["figuras-de-linguagem"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.morfologia.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/morfologia'}>
                                                    Morfologia
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.morfologia.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.sintaxe.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/sintaxe'}>
                                                    Sintaxe
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.sintaxe.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.pontuacao.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/pontuacao'}>
                                                    Pontuação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.pontuacao.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
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
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            {/* titulo de cada submateria que esta mandando no check */}
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/edicao-de-textos-planilhas-e-apresentacoes'}>
                                                    Edição de Textos, Planilhas e Apresentações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["ambiente-microsoft-office"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/ambiente-microsoft-office'}>
                                                    Ambiente Microsoft Office
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["ambiente-microsoft-office"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["sistema-operacional-windows"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/sistema-operacional-windows'}>
                                                    Sistema Operacional Windows
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["sistema-operacional-windows"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["internet-e-intranet"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/internet-e-intranet'}>
                                                    Internet e Intranet
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["internet-e-intranet"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["tecnologias-e-ferramentas-aplicativas"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/tecnologias-e-ferramentas-aplicativas'}>
                                                    Tecnologias e Ferramentas Aplicativas
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["tecnologias-e-ferramentas-aplicativas"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["organizacao-e-gerenciamento-de-informacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/organizacao-e-gerenciamento-de-informacoes'}>
                                                    Organização e Gerenciamento de Informações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["organizacao-e-gerenciamento-de-informacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["certificacao-e-assinatura-digital"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/certificacao-e-assinatura-digital'}>
                                                    Certificação e Assinatura Digital
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["certificacao-e-assinatura-digital"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["seguranca-da-informacao"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/seguranca-da-informacao'}>
                                                    Segurança da Informação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["seguranca-da-informacao"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                </Accordion>
                            </AccordionTab>
                            <AccordionTab header="Atendente de Farmácia">
                                <Accordion>
                                    <AccordionTab header="Português">
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/analise-e-interpretacao-de-texto'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["figuras-de-linguagem"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/figuras-de-linguagem'}>
                                                    Figuras de Linguagem
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["figuras-de-linguagem"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.morfologia.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/morfologia'}>
                                                    Morfologia
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.morfologia.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.sintaxe.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/sintaxe'}>
                                                    Sintaxe
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.sintaxe.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.pontuacao.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/pontuacao'}>
                                                    Pontuação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.pontuacao.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
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
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            {/* titulo de cada submateria que esta mandando no check */}
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/edicao-de-textos-planilhas-e-apresentacoes'}>
                                                    Edição de Textos, Planilhas e Apresentações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["ambiente-microsoft-office"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/ambiente-microsoft-office'}>
                                                    Ambiente Microsoft Office
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["ambiente-microsoft-office"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["sistema-operacional-windows"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/sistema-operacional-windows'}>
                                                    Sistema Operacional Windows
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["sistema-operacional-windows"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["internet-e-intranet"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/internet-e-intranet'}>
                                                    Internet e Intranet
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["internet-e-intranet"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["tecnologias-e-ferramentas-aplicativas"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/tecnologias-e-ferramentas-aplicativas'}>
                                                    Tecnologias e Ferramentas Aplicativas
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["tecnologias-e-ferramentas-aplicativas"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["organizacao-e-gerenciamento-de-informacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/organizacao-e-gerenciamento-de-informacoes'}>
                                                    Organização e Gerenciamento de Informações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["organizacao-e-gerenciamento-de-informacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["certificacao-e-assinatura-digital"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/certificacao-e-assinatura-digital'}>
                                                    Certificação e Assinatura Digital
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["certificacao-e-assinatura-digital"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["seguranca-da-informacao"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/seguranca-da-informacao'}>
                                                    Segurança da Informação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["seguranca-da-informacao"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                </Accordion>
                            </AccordionTab>
                            <AccordionTab header="Assistente Administrativo">
                                <Accordion>
                                    <AccordionTab header="Português">
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/analise-e-interpretacao-de-texto'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["figuras-de-linguagem"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/figuras-de-linguagem'}>
                                                    Figuras de Linguagem
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["figuras-de-linguagem"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.morfologia.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/morfologia'}>
                                                    Morfologia
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.morfologia.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.sintaxe.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/sintaxe'}>
                                                    Sintaxe
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.sintaxe.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.pontuacao.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/pontuacao'}>
                                                    Pontuação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.pontuacao.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
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
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            {/* titulo de cada submateria que esta mandando no check */}
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/edicao-de-textos-planilhas-e-apresentacoes'}>
                                                    Edição de Textos, Planilhas e Apresentações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["ambiente-microsoft-office"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/ambiente-microsoft-office'}>
                                                    Ambiente Microsoft Office
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["ambiente-microsoft-office"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["sistema-operacional-windows"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/sistema-operacional-windows'}>
                                                    Sistema Operacional Windows
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["sistema-operacional-windows"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["internet-e-intranet"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/internet-e-intranet'}>
                                                    Internet e Intranet
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["internet-e-intranet"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["tecnologias-e-ferramentas-aplicativas"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/tecnologias-e-ferramentas-aplicativas'}>
                                                    Tecnologias e Ferramentas Aplicativas
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["tecnologias-e-ferramentas-aplicativas"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["organizacao-e-gerenciamento-de-informacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/organizacao-e-gerenciamento-de-informacoes'}>
                                                    Organização e Gerenciamento de Informações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["organizacao-e-gerenciamento-de-informacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["certificacao-e-assinatura-digital"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/certificacao-e-assinatura-digital'}>
                                                    Certificação e Assinatura Digital
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["certificacao-e-assinatura-digital"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["seguranca-da-informacao"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/seguranca-da-informacao'}>
                                                    Segurança da Informação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["seguranca-da-informacao"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                </Accordion>
                            </AccordionTab>
                            <AccordionTab header="IBGE">
                                <Accordion>
                                    <AccordionTab header="Português">
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["analise-e-interpretacao-de-texto"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/analise-e-interpretacao-de-texto'}>
                                                    Análise e Interpretação de Texto
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["analise-e-interpretacao-de-texto"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues["figuras-de-linguagem"].titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/figuras-de-linguagem'}>
                                                    Figuras de Linguagem
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues["figuras-de-linguagem"].titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.morfologia.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/morfologia'}>
                                                    Morfologia
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.morfologia.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.sintaxe.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/sintaxe'}>
                                                    Sintaxe
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.sintaxe.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] ${materiasCompletas.includes(portugues.pontuacao.titulo) ? "bg-green-500" : ""
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/portugues/pontuacao'}>
                                                    Pontuação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(portugues.pontuacao.titulo)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
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
                                        <ul className="flex flex-col gap-2 bg-zinc-700 text-white p-2">
                                            {/* titulo de cada submateria que esta mandando no check */}
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/edicao-de-textos-planilhas-e-apresentacoes'}>
                                                    Edição de Textos, Planilhas e Apresentações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["edicao-de-textos-planilhas-e-apresentacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["ambiente-microsoft-office"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/ambiente-microsoft-office'}>
                                                    Ambiente Microsoft Office
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["ambiente-microsoft-office"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["sistema-operacional-windows"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/sistema-operacional-windows'}>
                                                    Sistema Operacional Windows
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["sistema-operacional-windows"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["internet-e-intranet"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/internet-e-intranet'}>
                                                    Internet e Intranet
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["internet-e-intranet"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["tecnologias-e-ferramentas-aplicativas"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/tecnologias-e-ferramentas-aplicativas'}>
                                                    Tecnologias e Ferramentas Aplicativas
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["tecnologias-e-ferramentas-aplicativas"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["organizacao-e-gerenciamento-de-informacoes"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/organizacao-e-gerenciamento-de-informacoes'}>
                                                    Organização e Gerenciamento de Informações
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["organizacao-e-gerenciamento-de-informacoes"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["certificacao-e-assinatura-digital"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/certificacao-e-assinatura-digital'}>
                                                    Certificação e Assinatura Digital
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["certificacao-e-assinatura-digital"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                            <li className={`grid grid-cols-[1fr_40px] text-white ${materiasCompletas.includes(informatica["seguranca-da-informacao"].id) ? "bg-green-500" : "bg-zinc-700"
                                                }`}>
                                                <Link className="uppercase font-bold p-2 text-center flex justify-center items-center text-sm md:text-base" href={'/pages/materias/informatica/seguranca-da-informacao'}>
                                                    Segurança da Informação
                                                </Link>
                                                <button
                                                    onClick={() => toggleMateriaCompleta(informatica["seguranca-da-informacao"].id)}
                                                    className="flex justify-center items-center w-full h-full text-2xl cursor-pointer"
                                                >
                                                    <FaCheckSquare />
                                                </button>
                                            </li>
                                        </ul>
                                    </AccordionTab>
                                </Accordion>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <Link href={'/pages/simulado'} className="bg-amarelo uppercase font-black text-xl text-white flex justify-center items-center py-2" style={{ textShadow: '1px 1px 2px black' }}>Realizar Simulado!</Link >
                </div>
                <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
            </RotaProtegida>
        </Template>
    )
}