'use client'
import ConcursoPublico from '@/components/materias/estatutoDosServidores/ConcursoPublico'
import DisponibilidadeEAproveitamento from '@/components/materias/estatutoDosServidores/DisponibilidadeEAproveitamento'
import DisposicoesPreliminares from '@/components/materias/estatutoDosServidores/DisposicoesPreliminares'
import Estabilidade from '@/components/materias/estatutoDosServidores/Estabilidade'
import EstagioProbatorio from '@/components/materias/estatutoDosServidores/EstagioProbatorio'
import Exercicio from '@/components/materias/estatutoDosServidores/Exercicio'
import MovimentacaoDePessoal from '@/components/materias/estatutoDosServidores/MovimentacaoDePessoal'
import Posse from '@/components/materias/estatutoDosServidores/Posse'
import Provimento from '@/components/materias/estatutoDosServidores/Provimento'
import Redistribuicao from '@/components/materias/estatutoDosServidores/Redistribuicao'
import Reintegracao from '@/components/materias/estatutoDosServidores/Reintegracao'
import Remocao from '@/components/materias/estatutoDosServidores/Remocao'
import Reversao from '@/components/materias/estatutoDosServidores/Reversao'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['das-disposicoes-preliminares']: <DisposicoesPreliminares />,
    ['do-concurso-publico']: <ConcursoPublico />,
    ['do-provimento']: <Provimento />,
    ['da-posse']: <Posse />,
    ['do-exercicio']: <Exercicio />,
    ['do-estagio-probatorio']: <EstagioProbatorio />,
    ['da-estabilidade']: <Estabilidade />,
    ['da-reintegracao']: <Reintegracao />,
    ['da-disponibilidade-e-do-aproveitamento']: <DisponibilidadeEAproveitamento />,
    ['da-reversao']: <Reversao />,
    ['da-movimentacao-de-pessoal-disposicoes-gerais']: <MovimentacaoDePessoal />,
    ['da-remocao']: <Remocao />,
    ['da-redistribuicao']: <Redistribuicao />,
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
