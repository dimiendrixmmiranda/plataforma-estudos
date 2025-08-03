// src/app/pages/materias/portugues/[slug]/page.tsx
'use client'
import AmbienteMicrosoftOffice from '@/components/informatica/AmbienteMicrosoftOffice'
import CertificacaoEAssinaturaDigital from '@/components/informatica/CertificacaoEAssinaturaDigital'
import EdicaoDeTextosPlanilhasApresentacoes from '@/components/informatica/EdicaoDeTextosPlanilhasApresentacoes'
import InformaticaBasica from '@/components/informatica/InformaticaBasica'
import InternetEIntranet from '@/components/informatica/InternetEIntranet'
import OrganizacaoEGerenciamentoDeInformacoes from '@/components/informatica/OrganizacaoEGerenciamentoDeInformacoes'
import SegurancaDaInformacao from '@/components/informatica/SegurancaDaInformacao'
import SistemaOperacionalWindows from '@/components/informatica/SistemaOperacionalWindows'
import TecnologiasEFerramentasAplicativas from '@/components/informatica/TecnologiasEFerramentasAplicativas'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['informatica-basica']: <InformaticaBasica />,
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
