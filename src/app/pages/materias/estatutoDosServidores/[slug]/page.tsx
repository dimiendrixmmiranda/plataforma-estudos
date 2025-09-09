'use client'
import DisposicoesPreliminares from '@/components/materias/estatutoDosServidores/DisposicoesPreliminares'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['das-disposicoes-preliminares']: <DisposicoesPreliminares />,
}

export default function Page() {
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
