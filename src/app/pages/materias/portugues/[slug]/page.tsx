// src/app/pages/materias/portugues/[slug]/page.tsx
'use client'
import AnaliseInterpretacaoTexto from '@/components/portugues/AnaliseInterpretacaoTexto'
import FigurasDeLinguagem from '@/components/portugues/FigurasDeLinguagem'
import Morfologia from '@/components/portugues/Morfologia'
import Pontuacao from '@/components/portugues/Pontuacao'
import Sintaxe from '@/components/portugues/Sintaxe'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['analise-e-interpretacao-de-texto']: <AnaliseInterpretacaoTexto />,
    ['figuras-de-linguagem']: <FigurasDeLinguagem />,
    ['morfologia']: <Morfologia />,
    ['sintaxe']: <Sintaxe />,
    ['pontuacao']: <Pontuacao />
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
