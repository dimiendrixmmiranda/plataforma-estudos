import Questao from "@/interfaces/Questao";
import TextoBase from "@/interfaces/TextoBase";

const textosBase: TextoBase[] = [
    {
        id: 1,
        titulo: "A responsabilidade dos CEOs pela cibersegurança.",
        conteudo: `
                Um estudo realizado em 2023 pela
                revista Forbes consultou grandes executivos
                norte-americanos a respeito das políticas de
                segurança cibernética das suas respectivas
                companhias. De acordo com a pesquisa, 75%
                dos CEOs acreditam que a falta de
                conscientização sobre cibersegurança entre
                os colaboradores é o principal risco para a
                empresa. Esse resultado demonstra que há
                uma via de mão dupla quando se pensa nas
                estratégias corporativas para a segurança de
                dados - as responsabilidades que cabem aos
                gestores maiores e o papel a ser
                desempenhado pelos demais colaboradores.
                No entanto1
                , pela relevância do cargo
                que ocupa, o CEO deve assumir a liderança na
                promoção da cultura de segurança cibernética,
                incorporando-a como parte central da
                estratégia de negócios.
                Além disso2
                , as ações e palavras do
                CEO têm um impacto significativo no
                comportamento dos demais funcionários e
                colaboradores. Dessa forma, o líder deve
                demonstrar seu compromisso com a
                cibersegurança, o que se traduz em ações
                práticas, como a alocação de recursos
                adequados para iniciativas de proteção,
                investimento em treinamentos para os
                colaboradores e implementação de políticas
                rigorosas de segurança de dados.
                Porém3
                , como evidencia o estudo feito
                pela revista Forbes, a responsabilidade pela
                proteção de dados da companhia não se limita
                aos gestores maiores na escala hierárquica:
                essa prática deve permear toda a organização,
                desde a alta gerência até os integrantes de
                gerências, departamentos e grupos de
                trabalho. Criar e participar ativamente de uma
                cultura de segurança cibernética é
                fundamental, conscientizando todos os
                usuários sobre os riscos e responsabilidades
                em relação à segurança da informação,
                promovendo a educação continuada e
                incentivando a comunicação aberta e imediata
                sobre possíveis incidentes.
                Com esses parâmetros em pauta, a
                cibersegurança jamais será vista como custo
                adicional, mas um investimento estratégico
                que protege a empresa de perdas financeiras,danos 
                à reputação e interrupções
                operacionais. Ao integrar a segurança
                cibernética à estratégia de negócios, o CEO
                demonstra a importância de proteger os ativos
                digitais da empresa[,] e os colaboradores, por
                sua vez, se sentem mais motivados a ajudar a
                preservar a confidencialidade das
                informações.
        `,
    }
]

const listaDeQuestoes: Questao[] = [
    {
        id: 1,
        textoBaseId: 1,
        pergunta: {
            enunciado: "De acordo com o texto:",
        },
        materia: 'portugues',
        categoria: "analise-e-interpretacao-de-texto",
        alternativas: [
            { conteudo: "A responsabilidade pela proteção dos dados da empresa deve abranger todos os setores da instituição.", certa: true },
            { conteudo: "A relevância do cargo de presidenteexecutivo não influencia na proteção dos dados da empresa", certa: false },
            { conteudo: "A proteção dos dados das companhias é de responsabilidade exclusiva do setor de tecnologia da informação.", certa: false },
            { conteudo: "Os colaboradores das empresas não se interessam pela cibersegurança do ambiente em que trabalham.", certa: false },
            { conteudo: "As falhas de cibersegurança se mostram perigosas somente para a saúde financeira das companhias.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "De acordo com o texto, a responsabilidade pela proteção dos dados deve envolver todos os setores da empresa. O CEO deve liderar essa cultura de segurança, e os riscos abrangem não apenas a saúde financeira, mas também a reputação e a operação da companhia."
    },
    // informatica
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
    },
    {
        id: 18,
        pergunta: {
            enunciado: "Utilizando o Pacote Microsoft Office 2013, instalação padrão, português do Brasil, assinale a alternativa que representa o comando Ctrl+C no programa Word.",
        },
        materia: 'informatica',
        categoria: "edicao-de-textos-planilhas-apresentacoes",
        alternativas: [
            { conteudo: "Sublinhado.", certa: false },
            { conteudo: "Selecionar tudo.", certa: false },
            { conteudo: "Fechar.", certa: false },
            { conteudo: "Recortar.", certa: false },
            { conteudo: "Copiar.", certa: true },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O atalho Ctrl+C é amplamente utilizado no Word e em outros programas para copiar o conteúdo selecionado. Esse comando é parte fundamental da edição de texto."
    },
    {
        id: 21,
        pergunta: {
            enunciado: "Considere a imagem a seguir:",
            complementoDoEnunciado: 'A imagem apresenta os elementos disponíveis no grupo “Área de Transferência” do Microsoft Word 365. Sendo assim, assinale a alternativa correta com os nome dos elementos disponíveis na imagem.',
            imagem: '/imagensQuestoes/imagem-1.png'
        },
        materia: 'informatica',
        categoria: "edicao-de-textos-planilhas-apresentacoes",
        alternativas: [
            { conteudo: "Colar – Recortar – Duplicar - Formatar. ", certa: false },
            { conteudo: "Colar – Cortar – Copiar – Pincel de Formatação.", certa: true },
            { conteudo: "Colar – Recortar – Copiar – Pincel de Formatação", certa: false },
            { conteudo: "Colar – Recortar – Copiar – Realce do Texto. ", certa: false },
            { conteudo: "Colar – Recortar – Copiar – Desfazer ", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A questão trata dos botões da faixa de opções do Word relacionados à edição de texto (Copiar, Colar, Recortar e Pincel de Formatação), que são funções clássicas de edição em editores de texto como o Microsoft Word."
    },
    {
        id: 19,
        pergunta: {
            enunciado: "Assinale a alternativa que não representa um navegador de internet.",
        },
        materia: 'informatica',
        categoria: "internet-e-intranet",
        alternativas: [
            { conteudo: "Mozilla Firefox.", certa: false },
            { conteudo: "Internet Explorer.", certa: false },
            { conteudo: "Google Chrome.", certa: false },
            { conteudo: "Google Drive.", certa: true },
            { conteudo: "Edge.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Google Drive é um serviço de armazenamento em nuvem, não um navegador. Os demais (Firefox, Internet Explorer, Chrome, Edge) são navegadores da web."
    },
    {
        id: 20,
        pergunta: {
            enunciado: "Utilizando o Windows 10, instalação padrão, português do Brasil, assinale a alternativa que representa o comando Alt+F4.",
        },
        materia: 'informatica',
        categoria: "sistema-operacional-windows",
        alternativas: [
            { conteudo: "Desfazer uma ação.", certa: false },
            { conteudo: "Alternar aplicativos abertos.", certa: false },
            { conteudo: "Fechar o item ativo ou sair do aplicativo ativo.", certa: true },
            { conteudo: "Atualizar a janela ativa.", certa: false },
            { conteudo: "Ativar a barra de menus no aplicativo ativo.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O atalho Alt+F4 é utilizado para fechar a janela atual ou o programa ativo no sistema Windows, sendo uma função comum no gerenciamento do sistema operacional."
    },
]


export {
    textosBase,
    listaDeQuestoes
}