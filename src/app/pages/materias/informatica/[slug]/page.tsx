// src/app/pages/materias/portugues/[slug]/page.tsx
'use client'
import AmbienteMicrosoftOffice from '@/components/materias/informatica/AmbienteMicrosoftOffice'
import CertificacaoEAssinaturaDigital from '@/components/materias/informatica/CertificacaoEAssinaturaDigital'
import EdicaoDeTextosPlanilhasApresentacoes from '@/components/materias/informatica/EdicaoDeTextosPlanilhasApresentacoes'
import InternetEIntranet from '@/components/materias/informatica/InternetEIntranet'
import OrganizacaoEGerenciamentoDeInformacoes from '@/components/materias/informatica/OrganizacaoEGerenciamentoDeInformacoes'
import SegurancaDaInformacao from '@/components/materias/informatica/SegurancaDaInformacao'
import SistemaOperacionalWindows from '@/components/materias/informatica/SistemaOperacionalWindows'
import TecnologiasEFerramentasAplicativas from '@/components/materias/informatica/TecnologiasEFerramentasAplicativas'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['edicao-de-textos-planilhas-e-apresentacoes']: <EdicaoDeTextosPlanilhasApresentacoes />,
    ['ambiente-microsoft-office']: <AmbienteMicrosoftOffice />,
    ['sistema-operacional-windows']: <SistemaOperacionalWindows />,
    ['internet-e-intranet']: <InternetEIntranet />,
    ['tecnologias-e-ferramentas-aplicativas']: <TecnologiasEFerramentasAplicativas />,
    ['organizacao-e-gerenciamento-de-informacoes']: <OrganizacaoEGerenciamentoDeInformacoes />,
    ['certificacao-e-assinatura-digital']: <CertificacaoEAssinaturaDigital />,
    ['seguranca-da-informacao']: <SegurancaDaInformacao />,
}

export default function PaginaMateriaPortugues() {
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
