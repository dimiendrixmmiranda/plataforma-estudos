'use client'

import MenuInferior from "@/components/menuInferior/MenuInferior"
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida"
import Template from "@/components/template/Template"
import useAuth from "@/data/hook/useAuth"
import Link from "next/link"
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas"
import informatica from "@/constants/informatica"
import MateriaCategoriaConcurso from "@/components/materiaCategoriaConcurso/MateriaCategoriaConcurso"

export default function PaginaMaterias() {
    const { usuario } = useAuth()
    const [visibleMateria, setVisibleMateria] = useState<string | null>(null)
    const { materiasCompletas, toggleMateriaCompleta } = useMateriasCompletas()

    function toggleMateria(materia: string) {
        setVisibleMateria(prev => (prev === materia ? null : materia))
    }

    return (
        <Template>
            <RotaProtegida>
                <div className="bg-zinc-300 text-black min-h-[80vh] p-4 flex flex-col gap-4 pb-14">
                    <div className="flex flex-col gap-4">
                        <h2 className="uppercase font-black text-2xl leading-6">Selecione um cargo para estudo:</h2>
                        <Accordion>
                            <AccordionTab header="Agente Comunitario de Saúde">
                                <MateriaCategoriaConcurso
                                    materia="Informática"
                                    visible={visibleMateria === "informatica"}
                                    onToggle={() => toggleMateria("informatica")}
                                    submaterias={[
                                        {
                                            nome: `${informatica["ambiente-microsoft-office"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["ambiente-microsoft-office"].id}`,
                                            id: `agente-comunitario-${informatica["ambiente-microsoft-office"].id}`
                                        },
                                        {
                                            nome: `${informatica["edicao-de-textos-planilhas-e-apresentacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`,
                                            id: `agente-comunitario-${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["sistema-operacional-windows"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["sistema-operacional-windows"].id}`,
                                            id: `agente-comunitario-${informatica["sistema-operacional-windows"].id}`
                                        },
                                        {
                                            nome: `${informatica["internet-e-intranet"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["internet-e-intranet"].id}`,
                                            id: `agente-comunitario-${informatica["internet-e-intranet"].id}`
                                        },
                                        {
                                            nome: `${informatica["tecnologias-e-ferramentas-aplicativas"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["tecnologias-e-ferramentas-aplicativas"].id}`,
                                            id: `agente-comunitario-${informatica["tecnologias-e-ferramentas-aplicativas"].id}`
                                        },
                                        {
                                            nome: `${informatica["organizacao-e-gerenciamento-de-informacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`,
                                            id: `agente-comunitario-${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["certificacao-e-assinatura-digital"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["certificacao-e-assinatura-digital"].id}`,
                                            id: `agente-comunitario-${informatica["certificacao-e-assinatura-digital"].id}`
                                        },
                                        {
                                            nome: `${informatica["seguranca-da-informacao"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["seguranca-da-informacao"].id}`,
                                            id: `agente-comunitario-${informatica["seguranca-da-informacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
                            </AccordionTab>
                            <AccordionTab header="Agente de Combate de Endemias">
                                <MateriaCategoriaConcurso
                                    materia="Informática"
                                    visible={visibleMateria === "informatica"}
                                    onToggle={() => toggleMateria("informatica")}
                                    submaterias={[
                                        {
                                            nome: `${informatica["ambiente-microsoft-office"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["ambiente-microsoft-office"].id}`,
                                            id: `agente-endemias-${informatica["ambiente-microsoft-office"].id}`
                                        },
                                        {
                                            nome: `${informatica["edicao-de-textos-planilhas-e-apresentacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`,
                                            id: `agente-endemias-${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["sistema-operacional-windows"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["sistema-operacional-windows"].id}`,
                                            id: `agente-endemias-${informatica["sistema-operacional-windows"].id}`
                                        },
                                        {
                                            nome: `${informatica["internet-e-intranet"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["internet-e-intranet"].id}`,
                                            id: `agente-endemias-${informatica["internet-e-intranet"].id}`
                                        },
                                        {
                                            nome: `${informatica["tecnologias-e-ferramentas-aplicativas"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["tecnologias-e-ferramentas-aplicativas"].id}`,
                                            id: `agente-endemias-${informatica["tecnologias-e-ferramentas-aplicativas"].id}`
                                        },
                                        {
                                            nome: `${informatica["organizacao-e-gerenciamento-de-informacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`,
                                            id: `agente-endemias-${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["certificacao-e-assinatura-digital"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["certificacao-e-assinatura-digital"].id}`,
                                            id: `agente-endemias-${informatica["certificacao-e-assinatura-digital"].id}`
                                        },
                                        {
                                            nome: `${informatica["seguranca-da-informacao"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["seguranca-da-informacao"].id}`,
                                            id: `agente-endemias-${informatica["seguranca-da-informacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
                            </AccordionTab>
                            <AccordionTab header="Auxiliar de Enfermagem">
                                <MateriaCategoriaConcurso
                                    materia="Informática"
                                    visible={visibleMateria === "informatica"}
                                    onToggle={() => toggleMateria("informatica")}
                                    submaterias={[
                                        {
                                            nome: `${informatica["ambiente-microsoft-office"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["ambiente-microsoft-office"].id}`,
                                            id: `auxiliar-enfermagem-${informatica["ambiente-microsoft-office"].id}`
                                        },
                                        {
                                            nome: `${informatica["edicao-de-textos-planilhas-e-apresentacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`,
                                            id: `auxiliar-enfermagem-${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["sistema-operacional-windows"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["sistema-operacional-windows"].id}`,
                                            id: `auxiliar-enfermagem-${informatica["sistema-operacional-windows"].id}`
                                        },
                                        {
                                            nome: `${informatica["internet-e-intranet"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["internet-e-intranet"].id}`,
                                            id: `auxiliar-enfermagem-${informatica["internet-e-intranet"].id}`
                                        },
                                        {
                                            nome: `${informatica["tecnologias-e-ferramentas-aplicativas"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["tecnologias-e-ferramentas-aplicativas"].id}`,
                                            id: `auxiliar-enfermagem-${informatica["tecnologias-e-ferramentas-aplicativas"].id}`
                                        },
                                        {
                                            nome: `${informatica["organizacao-e-gerenciamento-de-informacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`,
                                            id: `auxiliar-enfermagem-${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["certificacao-e-assinatura-digital"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["certificacao-e-assinatura-digital"].id}`,
                                            id: `auxiliar-enfermagem-${informatica["certificacao-e-assinatura-digital"].id}`
                                        },
                                        {
                                            nome: `${informatica["seguranca-da-informacao"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["seguranca-da-informacao"].id}`,
                                            id: `auxiliar-enfermagem-${informatica["seguranca-da-informacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
                            </AccordionTab>
                            <AccordionTab header="Assitente Administrativo">
                                <MateriaCategoriaConcurso
                                    materia="Informática"
                                    visible={visibleMateria === "informatica"}
                                    onToggle={() => toggleMateria("informatica")}
                                    submaterias={[
                                        {
                                            nome: `${informatica["ambiente-microsoft-office"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["ambiente-microsoft-office"].id}`,
                                            id: `assistente-administrativo-${informatica["ambiente-microsoft-office"].id}`
                                        },
                                        {
                                            nome: `${informatica["edicao-de-textos-planilhas-e-apresentacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`,
                                            id: `assistente-administrativo-${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["sistema-operacional-windows"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["sistema-operacional-windows"].id}`,
                                            id: `assistente-administrativo-${informatica["sistema-operacional-windows"].id}`
                                        },
                                        {
                                            nome: `${informatica["internet-e-intranet"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["internet-e-intranet"].id}`,
                                            id: `assistente-administrativo-${informatica["internet-e-intranet"].id}`
                                        },
                                        {
                                            nome: `${informatica["tecnologias-e-ferramentas-aplicativas"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["tecnologias-e-ferramentas-aplicativas"].id}`,
                                            id: `assistente-administrativo-${informatica["tecnologias-e-ferramentas-aplicativas"].id}`
                                        },
                                        {
                                            nome: `${informatica["organizacao-e-gerenciamento-de-informacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`,
                                            id: `assistente-administrativo-${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["certificacao-e-assinatura-digital"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["certificacao-e-assinatura-digital"].id}`,
                                            id: `assistente-administrativo-${informatica["certificacao-e-assinatura-digital"].id}`
                                        },
                                        {
                                            nome: `${informatica["seguranca-da-informacao"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["seguranca-da-informacao"].id}`,
                                            id: `assistente-administrativo-${informatica["seguranca-da-informacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
                            </AccordionTab>
                            <AccordionTab header="IBGE">
                                <MateriaCategoriaConcurso
                                    materia="Informática"
                                    visible={visibleMateria === "informatica"}
                                    onToggle={() => toggleMateria("informatica")}
                                    submaterias={[
                                        {
                                            nome: `${informatica["ambiente-microsoft-office"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["ambiente-microsoft-office"].id}`,
                                            id: `ibge-${informatica["ambiente-microsoft-office"].id}`
                                        },
                                        {
                                            nome: `${informatica["edicao-de-textos-planilhas-e-apresentacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`,
                                            id: `ibge-${informatica["edicao-de-textos-planilhas-e-apresentacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["sistema-operacional-windows"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["sistema-operacional-windows"].id}`,
                                            id: `ibge-${informatica["sistema-operacional-windows"].id}`
                                        },
                                        {
                                            nome: `${informatica["internet-e-intranet"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["internet-e-intranet"].id}`,
                                            id: `ibge-${informatica["internet-e-intranet"].id}`
                                        },
                                        {
                                            nome: `${informatica["tecnologias-e-ferramentas-aplicativas"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["tecnologias-e-ferramentas-aplicativas"].id}`,
                                            id: `ibge-${informatica["tecnologias-e-ferramentas-aplicativas"].id}`
                                        },
                                        {
                                            nome: `${informatica["organizacao-e-gerenciamento-de-informacoes"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`,
                                            id: `ibge-${informatica["organizacao-e-gerenciamento-de-informacoes"].id}`
                                        },
                                        {
                                            nome: `${informatica["certificacao-e-assinatura-digital"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["certificacao-e-assinatura-digital"].id}`,
                                            id: `ibge-${informatica["certificacao-e-assinatura-digital"].id}`
                                        },
                                        {
                                            nome: `${informatica["seguranca-da-informacao"].titulo}`,
                                            slug: `/pages/materias/informatica/${informatica["seguranca-da-informacao"].id}`,
                                            id: `ibge-${informatica["seguranca-da-informacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
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