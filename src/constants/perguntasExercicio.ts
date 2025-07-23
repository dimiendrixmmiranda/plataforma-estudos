import PerguntaExercicioInterface from "@/interfaces/PerguntaExercicio"

const listaPerguntasExercicios: PerguntaExercicioInterface[] = [
    {
        enunciado: `Leia a frase abaixo:`,
        frase: `"A cidade não dorme, vive em um eterno movimento."`,
        complemento: `Qual é a figura de linguagem presente na frase?`,
        arrayDeRespostas: [
            {
                conteudo: 'Hipérbole',
                correto: false
            },
            {
                conteudo: 'Metonímia',
                correto: false
            },
            {
                conteudo: 'Ironia',
                correto: false
            },
            {
                conteudo: 'Prosopopeia (ou Personificação)',
                correto: true
            },
            {
                conteudo: 'Antítese',
                correto: false
            },
        ],
        categoriaDaPergunta: 'figuras-de-pensamento',
        justificativa: `A frase atribui uma característica humana ("não dorme") à cidade, que é um ser inanimado. Isso é típico da prosopopeia ou personificação, figura de linguagem que atribui ações ou sentimentos humanos a seres não humanos.`
    },
    {
        enunciado: `Leia a frase abaixo:`,
        frase: `"Ele chorou rios de lágrimas ao ver o final do filme."`,
        complemento: `Qual é a figura de linguagem predominante?`,
        arrayDeRespostas: [
            {
                conteudo: 'Eufemismo',
                correto: false
            },
            {
                conteudo: 'Hipérbole',
                correto: true
            },
            {
                conteudo: 'Antítese',
                correto: false
            },
            {
                conteudo: 'Catacrese',
                correto: false
            },
            {
                conteudo: 'Paradoxo',
                correto: false
            },
        ],
        categoriaDaPergunta: 'figuras-de-pensamento',
        justificativa: `A expressão "chorou rios de lágrimas" é um exagero intencional, pois ninguém literalmente chora rios. Isso caracteriza a hipérbole, figura que exagera uma ideia para dar ênfase ou intensidade`
    },
]

export {
    listaPerguntasExercicios
}