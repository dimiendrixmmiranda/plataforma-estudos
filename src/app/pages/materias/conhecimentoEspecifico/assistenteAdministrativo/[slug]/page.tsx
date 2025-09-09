'use client'
import AdministracaoPublica from '@/components/materias/assistenteAdministrativo/AdministracaoPublica'
import AtosAdministrativos from '@/components/materias/assistenteAdministrativo/AtosAdministrativos'
import ContratosAdministrativos from '@/components/materias/assistenteAdministrativo/ContratosAdministrativos'
import Licitacoes from '@/components/materias/assistenteAdministrativo/Licitacoes'
import NocoesGeraisSobreArquivoDeDocumentos from '@/components/materias/assistenteAdministrativo/NocoesGeraisSobreArquivoDeDocumentos'
import PosturaProfissional from '@/components/materias/assistenteAdministrativo/PosturaProfissional'
import PrincipiosBasicosDaAdministracao from '@/components/materias/assistenteAdministrativo/PrincipiosBasicosDaAdministracao'
import RedacaoDeDocumentosOficiais from '@/components/materias/assistenteAdministrativo/RedacaoDeDocumentosOficiais'
import ResponsabiladadesDosServidores from '@/components/materias/assistenteAdministrativo/ResponsabilidadesDosServidores'
import ServicosPublicos from '@/components/materias/assistenteAdministrativo/ServicosPublicos'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['postura-profissional-e-relacoes-interpessoais']: <PosturaProfissional />,
    ['redacao-de-documentos-oficiais']: <RedacaoDeDocumentosOficiais />,
    ['nocoes-gerais-sobre-arquivos-de-documentos']: <NocoesGeraisSobreArquivoDeDocumentos />,
    ['principios-basicos-da-administracao-publica']: <PrincipiosBasicosDaAdministracao />,
    ['administracao-publica']: <AdministracaoPublica />,
    ['servicos-publicos']: <ServicosPublicos />,
    ['atos-administrativos']: <AtosAdministrativos />,
    ['contratos-administrativos']: <ContratosAdministrativos />,
    ['licitacoes']: <Licitacoes />,
    ['responsabilidades-dos-servidores']: <ResponsabiladadesDosServidores />,
}

export default function PaginaMateriaAssistenteAdministrativo() {
    const { slug } = useParams()

    const componente = componentesPorSlug[slug as string]

    if (!componente) {
        return <p>Matéria não encontrada.</p>
    }

    return (
        <Template>
            {componente}
        </Template>
    )
}
