'use client'
import ConcursoPublico from '@/components/materias/estatutoDosServidores/ConcursoPublico'
import DisposicoesPreliminares from '@/components/materias/estatutoDosServidores/DisposicoesPreliminares'
import Provimento from '@/components/materias/estatutoDosServidores/Provimento'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['das-disposicoes-preliminares']: <DisposicoesPreliminares />,
    ['do-concurso-publico']: <ConcursoPublico />,
    ['do-provimento']: <Provimento />,
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
