'use client'

import MenuInferior from "@/components/menuInferior/MenuInferior"
import RotaProtegida from "@/components/rotaProtegida/RotaProtegida"
import Template from "@/components/template/Template"
import useAuth from "@/data/hook/useAuth"
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas"
import informatica from "@/constants/informatica"
import MateriaCategoriaConcurso from "@/components/materiaCategoriaConcurso/MateriaCategoriaConcurso"
import portugues from "@/constants/portugues"
import { assistenteAdministrativo } from "@/constants/assistenteAdministrativo"
import BotaoExecutar from "@/components/base/BotaoExecutar"
import { estatutoDosServidoresDeJoaquimTavora } from "@/constants/estatutoDosServidoresJoaquimTavora"

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
                        <h2 className="uppercase font-black text-2xl leading-6 font-secundaria">Selecione um cargo para estudo:</h2>
                        <Accordion>
                            <AccordionTab header="Agente Comunitario de Saúde">
                                <MateriaCategoriaConcurso
                                    materia="Português"
                                    visible={visibleMateria === "portugues"}
                                    onToggle={() => toggleMateria("portugues")}
                                    submaterias={[
                                        {
                                            nome: `${portugues["analise-e-interpretacao-de-texto"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["analise-e-interpretacao-de-texto"].id}`,
                                            id: `agente-comunitario-${portugues["analise-e-interpretacao-de-texto"].id}`
                                        },
                                        {
                                            nome: `${portugues["figuras-de-linguagem"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["figuras-de-linguagem"].id}`,
                                            id: `agente-comunitario-${portugues["figuras-de-linguagem"].id}`
                                        },
                                        {
                                            nome: `${portugues["sintaxe"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["sintaxe"].id}`,
                                            id: `agente-comunitario-${portugues["sintaxe"].id}`
                                        },
                                        {
                                            nome: `${portugues["morfologia"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["morfologia"].id}`,
                                            id: `agente-comunitario-${portugues["morfologia"].id}`
                                        },
                                        {
                                            nome: `${portugues["pontuacao"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["pontuacao"].id}`,
                                            id: `agente-comunitario-${portugues["pontuacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
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
                                    materia="Português"
                                    visible={visibleMateria === "portugues"}
                                    onToggle={() => toggleMateria("portugues")}
                                    submaterias={[
                                        {
                                            nome: `${portugues["analise-e-interpretacao-de-texto"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["analise-e-interpretacao-de-texto"].id}`,
                                            id: `agente-endemias-${portugues["analise-e-interpretacao-de-texto"].id}`
                                        },
                                        {
                                            nome: `${portugues["figuras-de-linguagem"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["figuras-de-linguagem"].id}`,
                                            id: `agente-endemias-${portugues["figuras-de-linguagem"].id}`
                                        },
                                        {
                                            nome: `${portugues["sintaxe"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["sintaxe"].id}`,
                                            id: `agente-endemias-${portugues["sintaxe"].id}`
                                        },
                                        {
                                            nome: `${portugues["morfologia"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["morfologia"].id}`,
                                            id: `agente-endemias-${portugues["morfologia"].id}`
                                        },
                                        {
                                            nome: `${portugues["pontuacao"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["pontuacao"].id}`,
                                            id: `agente-endemias-${portugues["pontuacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
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
                            <AccordionTab header="Atendente de Farmácia">
                                <MateriaCategoriaConcurso
                                    materia="Português"
                                    visible={visibleMateria === "portugues"}
                                    onToggle={() => toggleMateria("portugues")}
                                    submaterias={[
                                        {
                                            nome: `${portugues["analise-e-interpretacao-de-texto"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["analise-e-interpretacao-de-texto"].id}`,
                                            id: `auxiliar-enfermagem-${portugues["analise-e-interpretacao-de-texto"].id}`
                                        },
                                        {
                                            nome: `${portugues["figuras-de-linguagem"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["figuras-de-linguagem"].id}`,
                                            id: `auxiliar-enfermagem-${portugues["figuras-de-linguagem"].id}`
                                        },
                                        {
                                            nome: `${portugues["sintaxe"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["sintaxe"].id}`,
                                            id: `auxiliar-enfermagem-${portugues["sintaxe"].id}`
                                        },
                                        {
                                            nome: `${portugues["morfologia"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["morfologia"].id}`,
                                            id: `auxiliar-enfermagem-${portugues["morfologia"].id}`
                                        },
                                        {
                                            nome: `${portugues["pontuacao"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["pontuacao"].id}`,
                                            id: `auxiliar-enfermagem-${portugues["pontuacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
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
                            <AccordionTab header="Assistente Administrativo">
                                <MateriaCategoriaConcurso
                                    materia="Português"
                                    visible={visibleMateria === "portugues"}
                                    onToggle={() => toggleMateria("portugues")}
                                    submaterias={[
                                        {
                                            nome: `${portugues["analise-e-interpretacao-de-texto"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["analise-e-interpretacao-de-texto"].id}`,
                                            id: `assistente-administrativo-${portugues["analise-e-interpretacao-de-texto"].id}`
                                        },
                                        {
                                            nome: `${portugues["figuras-de-linguagem"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["figuras-de-linguagem"].id}`,
                                            id: `assistente-administrativo-${portugues["figuras-de-linguagem"].id}`
                                        },
                                        {
                                            nome: `${portugues["sintaxe"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["sintaxe"].id}`,
                                            id: `assistente-administrativo-${portugues["sintaxe"].id}`
                                        },
                                        {
                                            nome: `${portugues["morfologia"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["morfologia"].id}`,
                                            id: `assistente-administrativo-${portugues["morfologia"].id}`
                                        },
                                        {
                                            nome: `${portugues["pontuacao"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["pontuacao"].id}`,
                                            id: `assistente-administrativo-${portugues["pontuacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
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
                                <MateriaCategoriaConcurso
                                    materia="Conhecimento Especifico"
                                    visible={visibleMateria === "especifico"}
                                    onToggle={() => toggleMateria("especifico")}
                                    submaterias={[
                                        {
                                            nome: `${assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["postura-profissional-e-relacoes-interpessoais"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["redacao-de-documentos-oficiais"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["redacao-de-documentos-oficiais"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["redacao-de-documentos-oficiais"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["nocoes-gerais-sobre-arquivos-de-documentos"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["nocoes-gerais-sobre-arquivos-de-documentos"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["nocoes-gerais-sobre-arquivos-de-documentos"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["principios-basicos-da-administracao-publica"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["principios-basicos-da-administracao-publica"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["principios-basicos-da-administracao-publica"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["administracao-publica"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["administracao-publica"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["administracao-publica"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["servicos-publicos"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["servicos-publicos"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["servicos-publicos"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["atos-administrativos"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["atos-administrativos"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["atos-administrativos"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["contratos-administrativos"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["contratos-administrativos"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["contratos-administrativos"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["licitacoes"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["licitacoes"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["licitacoes"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["responsabilidades-dos-servidores"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["responsabilidades-dos-servidores"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["responsabilidades-dos-servidores"].id}`
                                        },
                                        {
                                            nome: `${assistenteAdministrativo["estatuto-dos-servidores-do-municipio"].titulo}`,
                                            slug: `/pages/materias/conhecimentoEspecifico/assistenteAdministrativo/${assistenteAdministrativo["estatuto-dos-servidores-do-municipio"].id}`,
                                            id: `assistente-administrativo-${assistenteAdministrativo["estatuto-dos-servidores-do-municipio"].id}`
                                        },

                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
                                <MateriaCategoriaConcurso
                                    materia="Estatuto Dos Servidores"
                                    visible={visibleMateria === "estatuto-servidores"}
                                    onToggle={() => toggleMateria("estatuto-servidores")}
                                    submaterias={[
                                        {
                                            nome: `${estatutoDosServidoresDeJoaquimTavora["das-disposicoes-preliminares"].titulo}`,
                                            slug: `/pages/materias/estatutoDosServidores/${estatutoDosServidoresDeJoaquimTavora["das-disposicoes-preliminares"].id}`,
                                            id: `estatuto-dos-servidores-${estatutoDosServidoresDeJoaquimTavora["das-disposicoes-preliminares"].id}`
                                        },
                                        {
                                            nome: `${estatutoDosServidoresDeJoaquimTavora["do-concurso-publico"].titulo}`,
                                            slug: `/pages/materias/estatutoDosServidores/${estatutoDosServidoresDeJoaquimTavora["do-concurso-publico"].id}`,
                                            id: `estatuto-dos-servidores-${estatutoDosServidoresDeJoaquimTavora["do-concurso-publico"].id}`
                                        },
                                        {
                                            nome: `${estatutoDosServidoresDeJoaquimTavora["do-provimento"].titulo}`,
                                            slug: `/pages/materias/estatutoDosServidores/${estatutoDosServidoresDeJoaquimTavora["do-provimento"].id}`,
                                            id: `estatuto-dos-servidores-${estatutoDosServidoresDeJoaquimTavora["do-provimento"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
                            </AccordionTab>
                            <AccordionTab header="IBGE">
                                <MateriaCategoriaConcurso
                                    materia="Português"
                                    visible={visibleMateria === "portugues"}
                                    onToggle={() => toggleMateria("portugues")}
                                    submaterias={[
                                        {
                                            nome: `${portugues["analise-e-interpretacao-de-texto"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["analise-e-interpretacao-de-texto"].id}`,
                                            id: `ibge-${portugues["analise-e-interpretacao-de-texto"].id}`
                                        },
                                        {
                                            nome: `${portugues["figuras-de-linguagem"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["figuras-de-linguagem"].id}`,
                                            id: `ibge-${portugues["figuras-de-linguagem"].id}`
                                        },
                                        {
                                            nome: `${portugues["sintaxe"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["sintaxe"].id}`,
                                            id: `ibge-${portugues["sintaxe"].id}`
                                        },
                                        {
                                            nome: `${portugues["morfologia"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["morfologia"].id}`,
                                            id: `ibge-${portugues["morfologia"].id}`
                                        },
                                        {
                                            nome: `${portugues["pontuacao"].titulo}`,
                                            slug: `/pages/materias/portugues/${portugues["pontuacao"].id}`,
                                            id: `ibge-${portugues["pontuacao"].id}`
                                        },
                                    ]}
                                    materiaConcluida={toggleMateriaCompleta}
                                    materiasCompletas={materiasCompletas}
                                />
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
                    <BotaoExecutar link="/pages/simulado" texto="Realizar Simulado" />
                </div>
                <MenuInferior linkHome={`${usuario ? '/pages/materias' : '/'}`} linkProximo="/pages/materias/portugues" linkVoltar="/pages/materias" />
            </RotaProtegida>
        </Template>
    )
}