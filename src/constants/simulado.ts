import Questao from "@/interfaces/Questao";

const listaDeQuestoes: Questao[] = [
    {
        "id": 1,
        "pergunta": {
            "enunciado": "Leia a frase a seguir e assinale a alternativa correta:",
            "listaEnumerada": [
                "\"Ele tem um coração de pedra.\""
            ],
            "complementoDoEnunciado": "A figura de linguagem presente na frase é:"
        },
        "categoria": "figuras-de-palavras",
        "alternativas": [
            { "conteudo": "Metáfora", "certa": true },
            { "conteudo": "Catacrese", "certa": false },
            { "conteudo": "Metonímia", "certa": false },
            { "conteudo": "Hipérbole", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "A frase utiliza a metáfora ao associar o coração a uma pedra para indicar frieza emocional."
    },
    {
        "id": 2,
        "pergunta": {
            "enunciado": "Observe a expressão a seguir:",
            "listaEnumerada": [
                "\"Estou morrendo de rir!\""
            ],
            "complementoDoEnunciado": "A figura de linguagem usada nessa expressão é:"
        },
        "categoria": "figuras-de-pensamento",
        "alternativas": [
            { "conteudo": "Ironia", "certa": false },
            { "conteudo": "Hipérbole", "certa": true },
            { "conteudo": "Eufemismo", "certa": false },
            { "conteudo": "Prosopopeia", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "A hipérbole é o uso de exagero proposital para intensificar uma ideia."
    },
    {
        "id": 3,
        "pergunta": {
            "enunciado": "Assinale a alternativa em que ocorre um caso de elipse:",
            "listaEnumerada": [
                "I. Fomos ao mercado e (nós) compramos frutas.",
                "II. João gosta de estudar, Maria não.",
                "III. Ela saiu cedo; ele, tarde."
            ],
            "complementoDoEnunciado": "A opção que apresenta uma elipse está em:"
        },
        "categoria": "figuras-de-construcao",
        "alternativas": [
            { "conteudo": "Apenas I.", "certa": true },
            { "conteudo": "Apenas II.", "certa": false },
            { "conteudo": "Apenas III.", "certa": false },
            { "conteudo": "II e III.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "Na frase I, o sujeito 'nós' foi omitido, configurando elipse."
    },
    {
        "id": 4,
        "pergunta": {
            "enunciado": "Assinale a alternativa que apresenta um exemplo de onomatopeia:",
            "listaEnumerada": [
                "I. O relógio fazia tic-tac.",
                "II. O menino correu rápido.",
                "III. Estava um silêncio total."
            ],
            "complementoDoEnunciado": "Qual alternativa representa uma figura de som?"
        },
        "categoria": "figuras-de-som",
        "alternativas": [
            { "conteudo": "Apenas I.", "certa": true },
            { "conteudo": "Apenas II.", "certa": false },
            { "conteudo": "I e III.", "certa": false },
            { "conteudo": "Todas as alternativas.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "\"Tic-tac\" é uma onomatopeia que imita o som do relógio."
    },
    {
        "id": 5,
        "pergunta": {
            "enunciado": "Assinale a alternativa em que o uso da vírgula está INCORRETO:",
            "listaEnumerada": [
                "I. João, meu amigo, chegou cedo.",
                "II. Choveu muito, por isso, não saímos.",
                "III. Maria foi ao mercado e, comprou frutas."
            ],
            "complementoDoEnunciado": ""
        },
        "categoria": "pontuacao",
        "alternativas": [
            { "conteudo": "Apenas III.", "certa": true },
            { "conteudo": "Apenas II.", "certa": false },
            { "conteudo": "II e III.", "certa": false },
            { "conteudo": "Nenhuma das alternativas.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "Na frase III, a vírgula é indevida entre o verbo 'e' e seu complemento, pois não há justificativa sintática para a pausa."
    },
    {
        "id": 6,
        "pergunta": {
            "enunciado": "Leia as orações a seguir:",
            "listaEnumerada": [
                "I. Choveu muito ontem à noite.",
                "II. Há muitos alunos na sala.",
                "III. O diretor reuniu-se com os professores."
            ],
            "complementoDoEnunciado": "Em qual das frases o sujeito é indeterminado?"
        },
        "categoria": "classificacao-de-sujeito",
        "alternativas": [
            { "conteudo": "Apenas I.", "certa": false },
            { "conteudo": "Apenas II.", "certa": false },
            { "conteudo": "Apenas III.", "certa": false },
            { "conteudo": "Nenhuma das alternativas.", "certa": true }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "Em I, o sujeito é inexistente; em II, também é inexistente devido ao verbo haver com sentido de existir; em III, o sujeito é determinado. Nenhuma tem sujeito indeterminado."
    },
    {
        "id": 7,
        "pergunta": {
            "enunciado": "Assinale a alternativa em que o uso da crase está correto:",
            "listaEnumerada": [
                "I. Entreguei o presente à aniversariante.",
                "II. Cheguei à uma conclusão inesperada.",
                "III. Iremos à pé até o centro."
            ],
            "complementoDoEnunciado": ""
        },
        "categoria": "crase",
        "alternativas": [
            { "conteudo": "Apenas I.", "certa": true },
            { "conteudo": "I e II.", "certa": false },
            { "conteudo": "I e III.", "certa": false },
            { "conteudo": "Todas as alternativas.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "Somente a frase I está correta. Em II, o uso é indevido com artigo indefinido; em III, não ocorre crase com palavras masculinas como 'pé'."
    },
    {
        "id": 8,
        "pergunta": {
            "enunciado": "Analise os enunciados abaixo e assinale a alternativa correta:",
            "listaEnumerada": [
                "I. Ela é uma flor que desabrocha a cada dia.",
                "II. Seu olhar é um raio que atravessa a alma.",
                "III. Ele corre como uma flecha."
            ],
            "complementoDoEnunciado": "Quais frases contêm metáforas?"
        },
        "categoria": "figuras-de-palavras",
        "alternativas": [
            { "conteudo": "Apenas I e II.", "certa": true },
            { "conteudo": "Apenas II e III.", "certa": false },
            { "conteudo": "Apenas I e III.", "certa": false },
            { "conteudo": "Todas as frases.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "As frases I e II utilizam metáforas: 'flor' e 'raio' são imagens simbólicas sem uso de elementos comparativos explícitos."
    },
    {
        "id": 9,
        "pergunta": {
            "enunciado": "Leia os exemplos e identifique a figura de pensamento presente:",
            "listaEnumerada": [
                "I. 'O silêncio gritava em seus ouvidos.'",
                "II. 'Chovia alegria naquela festa.'",
                "III. 'Ele morreu de tanto rir.'"
            ],
            "complementoDoEnunciado": "Qual figura está presente nas frases?"
        },
        "categoria": "figuras-de-pensamento",
        "alternativas": [
            { "conteudo": "Ironia.", "certa": false },
            { "conteudo": "Antítese.", "certa": false },
            { "conteudo": "Hipérbole.", "certa": true },
            { "conteudo": "Metonímia.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "A hipérbole está presente por meio da intensificação exagerada, como em 'morrer de tanto rir' e 'o silêncio gritava'."
    },
    {
        "id": 10,
        "pergunta": {
            "enunciado": "Observe os períodos abaixo:",
            "listaEnumerada": [
                "I. Se você viesse, eu ficaria feliz.",
                "II. Falava, falava, falava sem parar.",
                "III. O livro que eu li, gostei muito."
            ],
            "complementoDoEnunciado": "Qual frase contém um caso de anacoluto?"
        },
        "categoria": "figuras-de-construcao",
        "alternativas": [
            { "conteudo": "Apenas a frase I.", "certa": false },
            { "conteudo": "Apenas a frase II.", "certa": false },
            { "conteudo": "Apenas a frase III.", "certa": true },
            { "conteudo": "As frases I e III.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "A frase III apresenta um anacoluto — quebra na estrutura lógica: 'O livro que eu li' é iniciado, mas a frase segue com 'gostei muito', rompendo a construção gramatical."
    },
    {
        "id": 11,
        "pergunta": {
            "enunciado": "Assinale a alternativa em que há ocorrência de aliteração:",
            "listaEnumerada": [
                "I. 'O rato roeu a roupa do rei de Roma.'",
                "II. 'Vivia sonhando sonhos serenos.'",
                "III. 'O sol se pôs sobre o mar.'"
            ],
            "complementoDoEnunciado": "Qual das frases possui aliteração?"
        },
        "categoria": "figuras-de-som",
        "alternativas": [
            { "conteudo": "Apenas I e II.", "certa": true },
            { "conteudo": "Apenas III.", "certa": false },
            { "conteudo": "Apenas I.", "certa": false },
            { "conteudo": "Todas as frases.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "A aliteração ocorre pela repetição de sons consonantais, como 'r' em I e 's' em II."
    },
    {
        "id": 12,
        "pergunta": {
            "enunciado": "Classifique o sujeito das orações a seguir:",
            "listaEnumerada": [
                "I. Chove muito nesta época do ano.",
                "II. Todos os alunos chegaram cedo.",
                "III. Vende-se casas no bairro novo."
            ],
            "complementoDoEnunciado": "Qual alternativa apresenta corretamente a classificação dos sujeitos?"
        },
        "categoria": "classificacao-de-sujeito",
        "alternativas": [
            { "conteudo": "I. sujeito inexistente; II. sujeito simples; III. sujeito indeterminado.", "certa": false },
            { "conteudo": "I. sujeito simples; II. sujeito composto; III. sujeito inexistente.", "certa": false },
            { "conteudo": "I. sujeito inexistente; II. sujeito simples; III. sujeito simples.", "certa": true },
            { "conteudo": "I. sujeito oculto; II. sujeito composto; III. sujeito indeterminado.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "A frase I tem sujeito inexistente (fenômeno da natureza); II tem sujeito simples ('Todos os alunos'); III também tem sujeito simples ('casas')."
    },
    {
        "id": 13,
        "pergunta": {
            "enunciado": "Observe as frases a seguir:",
            "listaEnumerada": [
                "I. Entregou o presente à aniversariante.",
                "II. Chegou a uma conclusão rapidamente.",
                "III. Foi à pé para o trabalho."
            ],
            "complementoDoEnunciado": "Qual frase contém uso incorreto da crase?"
        },
        "categoria": "crase",
        "alternativas": [
            { "conteudo": "Apenas a frase III.", "certa": true },
            { "conteudo": "Apenas a frase II.", "certa": false },
            { "conteudo": "Apenas a frase I.", "certa": false },
            { "conteudo": "Todas estão corretas.", "certa": false }
        ],
        "respostaUsuario": null,
        "acertou": false,
        "justificativaResposta": "Na frase III, não se usa crase antes da palavra 'pé', pois não há artigo definido que a justifique."
    },
    {
        id: 14,
        pergunta: {
            enunciado: "Assinale a alternativa que representa um programa editor de planilha.",
        },
        materia: 'informatica',
        categoria: "edicao-de-textos-planilhas-apresentacoes",
        alternativas: [
            { conteudo: "Microsoft PowerPlan.", certa: false },
            { conteudo: "Microsoft OneNote.", certa: false },
            { conteudo: "Microsoft Word.", certa: false },
            { conteudo: "Microsoft Plan.", certa: false },
            { conteudo: "Microsoft Excel.", certa: true },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O Microsoft Excel é o editor de planilhas da suíte Microsoft Office, utilizado para criar e manipular tabelas, fórmulas e gráficos. As demais alternativas são incorretas ou inexistentes."
    },
    {
        id: 15,
        pergunta: {
            enunciado: "Assinale a alternativa que não representa um formato de arquivo.",
        },
        materia: 'informatica',
        categoria: "organizacao-e-gerenciamento-de-informacoes",
        alternativas: [
            { conteudo: ".pptx", certa: false },
            { conteudo: ".xlt", certa: false },
            { conteudo: ".docx", certa: false },
            { conteudo: ".fikr", certa: true },
            { conteudo: ".pdf", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: ".fikr não é uma extensão reconhecida de arquivos. As demais alternativas representam extensões de arquivos reais, utilizadas em programas como PowerPoint (.pptx), Excel (.xlt), Word (.docx) e leitores de PDF (.pdf)."
    },
    {
        id: 16,
        pergunta: {
            enunciado: "Utilizando o Windows 10, instalação padrão, português do Brasil, com a tela do computador na área de trabalho, assinale a alternativa que representa o comando Tecla do Logotipo do Windows+E (Obs.: O sinal de + não faz parte do comando, significa que as teclas devem ser pressionadas simultaneamente).",
        },
        materia: 'informatica',
        categoria: "sistema-operacional-windows",
        alternativas: [
            { conteudo: "Abre as configurações do Windows.", certa: false },
            { conteudo: "Ativa a barra Xbox.", certa: false },
            { conteudo: "Abre o Windows Explorer.", certa: true },
            { conteudo: "Ativa o botão Compartilhar.", certa: false },
            { conteudo: "Chama a Central de Ações.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O atalho Windows + E abre o Explorador de Arquivos (Windows Explorer), que permite navegar pelas pastas e arquivos do computador. É um atalho comum no sistema operacional Windows."
    },
    {
        id: 17,
        pergunta: {
            enunciado: "Utilizando o navegador de internet Google Chrome Versão 74.0.3729.131 (Versão oficial) 64 bits, assinale a alternativa que representa o comando Ctrl+T (Obs.: O sinal de + não faz parte do comando, significa que as teclas devem ser pressionadas simultaneamente).",
        },
        materia: 'informatica',
        categoria: "internet-e-intranet",
        alternativas: [
            { conteudo: "Adiciona “www.” e “.com” ao endereço digitado.", certa: false },
            { conteudo: "Abre uma nova aba.", certa: true },
            { conteudo: "Reabre a última aba fechada.", certa: false },
            { conteudo: "Alterna para a aba seguinte.", certa: false },
            { conteudo: "Alterna para a aba anterior.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O atalho Ctrl + T, no navegador Google Chrome, é utilizado para abrir uma nova aba. Esse comando é padrão em diversos navegadores modernos."
    }
]


export default listaDeQuestoes