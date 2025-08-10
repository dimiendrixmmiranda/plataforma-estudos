// src/app/pages/materias/portugues/[slug]/page.tsx
'use client'
import AmbienteMicrosoftOffice from '@/components/materias/informatica/AmbienteMicrosoftOffice'
import CertificacaoEAssinaturaDigital from '@/components/materias/informatica/CertificacaoEAssinaturaDigital'
import EdicaoDeTextosPlanilhasApresentacoes from '@/components/materias/informatica/EdicaoDeTextosPlanilhasApresentacoes'
import InformaticaBasica from '@/components/materias/informatica/InformaticaBasica'
import InternetEIntranet from '@/components/materias/informatica/InternetEIntranet'
import OrganizacaoEGerenciamentoDeInformacoes from '@/components/materias/informatica/OrganizacaoEGerenciamentoDeInformacoes'
import SegurancaDaInformacao from '@/components/materias/informatica/SegurancaDaInformacao'
import SistemaOperacionalWindows from '@/components/materias/informatica/SistemaOperacionalWindows'
import TecnologiasEFerramentasAplicativas from '@/components/materias/informatica/TecnologiasEFerramentasAplicativas'
import Template from '@/components/template/Template'
import { useParams } from 'next/navigation'
import { JSX } from 'react'

const componentesPorSlug: Record<string, JSX.Element> = {
    ['operacoes-fundamentais']: <InformaticaBasica />,
    ['operacoes-com-numeros-naturais-e-racionais']: <EdicaoDeTextosPlanilhasApresentacoes />,
    ['teoria-dos-conjuntos']: <AmbienteMicrosoftOffice />,
    ['operacoes-com-fracoes']: <SistemaOperacionalWindows />,
    ['funcoes-exponenciais']: <InternetEIntranet />,
    ['sistemas-lineares']: <TecnologiasEFerramentasAplicativas />,
    ['numeros-complexos']: <OrganizacaoEGerenciamentoDeInformacoes />,
    ['raciocinio-logico']: <CertificacaoEAssinaturaDigital />,
    ['polinomios']: <SegurancaDaInformacao />,
    ['produtos-notaveis']: <SegurancaDaInformacao />,
    ['equacoes-primeiro-segundo-grau']: <SegurancaDaInformacao />,
    ['problemas-matematicos']: <SegurancaDaInformacao />,
    ['probabilidades']: <SegurancaDaInformacao />,
    ['potenciacao']: <SegurancaDaInformacao />,
    ['regra-de-tres-simples-e-composta']: <SegurancaDaInformacao />,
    ['razao-e-proporcao']: <SegurancaDaInformacao />,
    ['porcentagem']: <SegurancaDaInformacao />,
    ['grandezas-proporcionais']: <SegurancaDaInformacao />,
    ['sistemas-de-medidas']: <SegurancaDaInformacao />,
    ['medida-aritimetica-simples-e-ponderada']: <SegurancaDaInformacao />,
    ['sistema-monetario-brasileiro']: <SegurancaDaInformacao />,
    ['nocoes-de-estatisca']: <SegurancaDaInformacao />,
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

// Operações fundamentais: adição, subtração, multiplicação e divisão 
// Operações com números naturais e racionais 
// Teoria dos conjuntos 
// Operações com frações: mínimo múltiplo comum e máximo divisor comum 
// Funções exponenciais 
// Sistemas lineares 
// Números complexos 
// Raciocínio lógico 
// Polinômios 
// Produtos notáveis 
// Equações de 1º e 2º grau 
// Problemas matemáticos 
// Probabilidades 
// Fatoração 
// Potenciação 
// Regra de três simples e composta 
// Razão e proporção 
// Porcentagem 
// Grandezas proporcionais 
// Sistema de medidas: 
// Metro, metro quadrado e cúbico 
// Litro 
// Grama 
// Medida aritmética simples e ponderada 
// Sistema Monetário Brasileiro 
// Noções de estatística: 