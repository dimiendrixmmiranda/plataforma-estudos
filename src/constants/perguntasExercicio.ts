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
    {
        enunciado: "No Microsoft Word, qual atalho de teclado é usado para selecionar todo o conteúdo de um documento?",
        arrayDeRespostas: [
            { conteudo: "Ctrl + C", correto: false },
            { conteudo: "Ctrl + V", correto: false },
            { conteudo: "Ctrl + A", correto: true },
            { conteudo: "Ctrl + S", correto: false }
        ],
        justificativa: "Ctrl + A (de 'All') seleciona todo o conteúdo do documento. Os outros atalhos têm funções diferentes: Ctrl+C (copiar), Ctrl+V (colar), Ctrl+S (salvar).",
        categoriaDaPergunta: "edicao-de-textos"
    },
    {
        enunciado: "Qual função do Microsoft Word permite ajustar o espaçamento entre linhas em um parágrafo?",
        arrayDeRespostas: [
            { conteudo: "Fonte", correto: false },
            { conteudo: "Alinhamento", correto: false },
            { conteudo: "Espaçamento entre linhas", correto: true },
            { conteudo: "Marcadores e numeração", correto: false }
        ],
        justificativa: "A opção 'Espaçamento entre linhas' ajusta a distância entre uma linha e outra no parágrafo. 'Fonte' altera o estilo da letra e 'Alinhamento' define o posicionamento do texto.",
        categoriaDaPergunta: "edicao-de-textos"
    },
    {
        enunciado: "Qual comando permite adicionar automaticamente a numeração das páginas em um documento do Word?",
        arrayDeRespostas: [
            { conteudo: "Inserir > Tabela", correto: false },
            { conteudo: "Inserir > Número de Página", correto: true },
            { conteudo: "Layout > Margens", correto: false },
            { conteudo: "Revisão > Ortografia", correto: false }
        ],
        justificativa: "O comando 'Inserir > Número de Página' permite incluir automaticamente a numeração das páginas. As demais opções referem-se a outras funcionalidades.",
        categoriaDaPergunta: "edicao-de-textos"
    },
    {
        enunciado: "No Word, qual é a extensão padrão dos arquivos salvos na versão atual?",
        arrayDeRespostas: [
            { conteudo: ".doc", correto: false },
            { conteudo: ".docx", correto: true },
            { conteudo: ".txt", correto: false },
            { conteudo: ".pdf", correto: false }
        ],
        justificativa: ".docx é a extensão padrão dos documentos salvos no Word desde a versão 2007. '.doc' era usado nas versões anteriores, e '.pdf' é uma opção de exportação.",
        categoriaDaPergunta: "edicao-de-textos"
    },
    {
        enunciado: "Qual das opções abaixo representa o botão que alinha o texto tanto à esquerda quanto à direita, preenchendo toda a largura da página?",
        arrayDeRespostas: [
            { conteudo: "Alinhar à esquerda", correto: false },
            { conteudo: "Centralizar", correto: false },
            { conteudo: "Justificar", correto: true },
            { conteudo: "Alinhar à direita", correto: false }
        ],
        justificativa: "O alinhamento justificado distribui o texto igualmente entre as margens, alinhando-o à esquerda e à direita. É comum em textos formais como artigos e relatórios.",
        categoriaDaPergunta: "edicao-de-textos"
    },
    {
        enunciado: "No Excel, qual fórmula correta para somar os valores das células de A1 até A5?",
        arrayDeRespostas: [
            { conteudo: "=SOMA(A1:A5)", correto: true },
            { conteudo: "=SOMA(A1;A5)", correto: false },
            { conteudo: "=SOMA[A1:A5]", correto: false },
            { conteudo: "=SOMA A1:A5", correto: false }
        ],
        justificativa: "A forma correta de somar um intervalo no Excel é utilizando dois pontos entre as células e parênteses: `=SOMA(A1:A5)`.",
        categoriaDaPergunta: "edicao-de-planilhas"
    },
    {
        enunciado: "Qual atalho de teclado insere a data atual na célula selecionada do Excel?",
        arrayDeRespostas: [
            { conteudo: "Ctrl + D", correto: false },
            { conteudo: "Ctrl + T", correto: false },
            { conteudo: "Ctrl + ;", correto: true },
            { conteudo: "Ctrl + Shift + D", correto: false }
        ],
        justificativa: "O atalho `Ctrl + ;` insere a data atual na célula ativa. É útil em planilhas de controle de atividades, estoque e relatórios.",
        categoriaDaPergunta: "edicao-de-planilhas"
    },
    {
        enunciado: "Qual das opções abaixo é uma função que retorna a média dos valores numéricos em um intervalo de células?",
        arrayDeRespostas: [
            { conteudo: "=SOMA()", correto: false },
            { conteudo: "=MAIOR()", correto: false },
            { conteudo: "=MÉDIA()", correto: true },
            { conteudo: "=MENOR()", correto: false }
        ],
        justificativa: "A função `=MÉDIA()` retorna a média aritmética de um conjunto de valores numéricos em um intervalo de células.",
        categoriaDaPergunta: "edicao-de-planilhas"
    },
    {
        enunciado: "Em uma planilha do Excel, qual tipo de gráfico é mais adequado para representar a distribuição percentual de categorias, como por exemplo o total de votos por candidato?",
        arrayDeRespostas: [
            { conteudo: "Gráfico de colunas", correto: false },
            { conteudo: "Gráfico de pizza", correto: true },
            { conteudo: "Gráfico de linhas", correto: false },
            { conteudo: "Gráfico de dispersão", correto: false }
        ],
        justificativa: "O gráfico de pizza é ideal para representar proporções e porcentagens de um total, como em enquetes e votações.",
        categoriaDaPergunta: "edicao-de-planilhas"
    },
    {
        enunciado: "Qual extensão é usada por padrão nos arquivos salvos no Microsoft Excel a partir da versão 2007?",
        arrayDeRespostas: [
            { conteudo: ".xls", correto: false },
            { conteudo: ".xlsx", correto: true },
            { conteudo: ".csv", correto: false },
            { conteudo: ".xlsm", correto: false }
        ],
        justificativa: "A partir da versão 2007, a extensão padrão do Excel passou a ser `.xlsx`. A extensão `.xls` era usada em versões mais antigas, e `.xlsm` é usada para arquivos com macros.",
        categoriaDaPergunta: "edicao-de-planilhas"
    },
    {
        enunciado: "No Microsoft PowerPoint, qual tecla de atalho inicia a apresentação de slides a partir do primeiro slide?",
        arrayDeRespostas: [
            { conteudo: "F5", correto: true },
            { conteudo: "Ctrl + P", correto: false },
            { conteudo: "Shift + F5", correto: false },
            { conteudo: "Alt + Enter", correto: false }
        ],
        justificativa: "A tecla `F5` inicia a apresentação de slides a partir do primeiro slide. `Shift + F5` inicia a apresentação a partir do slide atual.",
        categoriaDaPergunta: "edicao-de-apresentacoes"
    },
    {
        enunciado: "No PowerPoint, qual é a diferença entre 'transição' e 'animação'?",
        arrayDeRespostas: [
            { conteudo: "Transição afeta textos e animação muda de slide", correto: false },
            { conteudo: "Transição aplica efeitos entre os slides, e animação aplica efeitos dentro do slide", correto: true },
            { conteudo: "Ambas são nomes diferentes para a mesma função", correto: false },
            { conteudo: "Transição é para vídeos e animação para gráficos", correto: false }
        ],
        justificativa: "Transições são efeitos visuais aplicados entre os slides. Animações são efeitos aplicados a objetos dentro do slide (texto, imagem, etc.).",
        categoriaDaPergunta: "edicao-de-apresentacoes"
    },
    {
        enunciado: "Qual extensão de arquivo é atribuída por padrão a apresentações criadas no PowerPoint moderno?",
        arrayDeRespostas: [
            { conteudo: ".ppt", correto: false },
            { conteudo: ".pptx", correto: true },
            { conteudo: ".potx", correto: false },
            { conteudo: ".docx", correto: false }
        ],
        justificativa: "A extensão padrão para apresentações do PowerPoint desde a versão 2007 é `.pptx`. A extensão `.ppt` era usada nas versões anteriores.",
        categoriaDaPergunta: "edicao-de-apresentacoes"
    },
    {
        enunciado: "Para adicionar um novo slide à apresentação atual no PowerPoint, qual é o atalho correto?",
        arrayDeRespostas: [
            { conteudo: "Ctrl + N", correto: false },
            { conteudo: "Ctrl + M", correto: true },
            { conteudo: "Ctrl + Enter", correto: false },
            { conteudo: "Ctrl + Shift + N", correto: false }
        ],
        justificativa: "O atalho `Ctrl + M` insere um novo slide na apresentação atual.",
        categoriaDaPergunta: "edicao-de-apresentacoes"
    },
    {
        enunciado: "No PowerPoint, o recurso de 'Anotações do Orador' serve para:",
        arrayDeRespostas: [
            { conteudo: "Mostrar textos adicionais durante a apresentação ao público", correto: false },
            { conteudo: "Inserir comentários visíveis nos slides", correto: false },
            { conteudo: "Adicionar informações visíveis apenas ao apresentador durante a exibição", correto: true },
            { conteudo: "Criar legendas automáticas em vídeos", correto: false }
        ],
        justificativa: "As anotações do orador ficam visíveis apenas para o apresentador, ajudando como guia ou lembrete durante a apresentação.",
        categoriaDaPergunta: "edicao-de-apresentacoes"
    }
]

export {
    listaPerguntasExercicios
}


/**
 * Categorias possíveis:
 * figuras-de-palavras
 * figuras-de-pensamento
 * figuras-de-construcao
 * figuras-de-som
 * pontuacao
 * classificacao-de-sujeito
 * predicado
 * crase
 */

/**
 * edicao-de-planilhas
 * edicao-de-textos
 * edicao-de-apresentacoes
 */