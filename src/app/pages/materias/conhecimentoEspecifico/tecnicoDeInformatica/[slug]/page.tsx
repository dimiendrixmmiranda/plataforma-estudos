'use client'
import CopiaDeSegurancaBackup from '@/components/materias/tecnicoDeInformatica/CopiaDeSegurancaBackup'
import Virus from '@/components/materias/tecnicoDeInformatica/Virus'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['tecnico-de-informatica-virus']: <Virus />,
    ['tecnico-de-informatica-copia-de-seguranca-backup']: <CopiaDeSegurancaBackup />,
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
