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
    },
    {
        enunciado: "Qual é a função do Gerenciador de Tarefas no Windows?",
        arrayDeRespostas: [
            { conteudo: "Visualizar e encerrar processos em execução", correto: true },
            { conteudo: "Configurar a rede Wi-Fi", correto: false },
            { conteudo: "Editar documentos de texto", correto: false },
            { conteudo: "Desinstalar o Windows", correto: false },
        ],
        justificativa: "O Gerenciador de Tarefas permite controlar os processos e programas em execução, além de monitorar o desempenho.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Qual atalho de teclado abre o menu Iniciar no Windows?",
        arrayDeRespostas: [
            { conteudo: "Ctrl + I", correto: false },
            { conteudo: "Windows", correto: true },
            { conteudo: "Alt + F4", correto: false },
            { conteudo: "Ctrl + Alt + Del", correto: false },
        ],
        justificativa: "A tecla Windows abre o menu Iniciar, que dá acesso a aplicativos e configurações.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Para qual pasta o atalho Windows + E direciona o usuário?",
        arrayDeRespostas: [
            { conteudo: "Área de Trabalho", correto: false },
            { conteudo: "Documentos", correto: false },
            { conteudo: "Explorador de Arquivos", correto: true },
            { conteudo: "Configurações", correto: false },
        ],
        justificativa: "Windows + E abre o Explorador de Arquivos, permitindo navegar pelas pastas do sistema.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Qual função realiza uma cópia de segurança completa do sistema no Windows?",
        arrayDeRespostas: [
            { conteudo: "Restauração do Sistema", correto: false },
            { conteudo: "Backup e Restauração", correto: true },
            { conteudo: "Verificação de Disco", correto: false },
            { conteudo: "Atualização do Windows", correto: false },
        ],
        justificativa: "Backup e Restauração permite criar cópias completas dos arquivos e do sistema para recuperação futura.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Qual comando é utilizado para abrir o Prompt de Comando no Windows?",
        arrayDeRespostas: [
            { conteudo: "Ctrl + P", correto: false },
            { conteudo: "Win + R e digitar 'cmd'", correto: true },
            { conteudo: "Alt + F4", correto: false },
            { conteudo: "Ctrl + Alt + Del", correto: false },
        ],
        justificativa: "Usando Win + R para abrir o Executar e digitando 'cmd' abre o Prompt de Comando.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Qual dessas opções permite ajustar as configurações do sistema no Windows 10?",
        arrayDeRespostas: [
            { conteudo: "Painel de Controle", correto: true },
            { conteudo: "Microsoft Edge", correto: false },
            { conteudo: "Bloco de Notas", correto: false },
            { conteudo: "Calculadora", correto: false },
        ],
        justificativa: "O Painel de Controle é usado para ajustes avançados e configurações do sistema.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "O que acontece ao pressionar Alt + Tab no Windows?",
        arrayDeRespostas: [
            { conteudo: "Fecha a janela ativa", correto: false },
            { conteudo: "Alterna entre janelas abertas", correto: true },
            { conteudo: "Abre o menu Iniciar", correto: false },
            { conteudo: "Bloqueia o computador", correto: false },
        ],
        justificativa: "Alt + Tab permite alternar rapidamente entre as janelas e programas abertos.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Para que serve o 'Modo de Segurança' do Windows?",
        arrayDeRespostas: [
            { conteudo: "Executar o sistema com drivers e serviços mínimos para solução de problemas", correto: true },
            { conteudo: "Acelerar a inicialização do sistema", correto: false },
            { conteudo: "Atualizar o Windows automaticamente", correto: false },
            { conteudo: "Instalar novos programas", correto: false },
        ],
        justificativa: "O Modo de Segurança é usado para diagnosticar e corrigir problemas que impedem o funcionamento normal do sistema.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Qual a função do recurso 'Windows Update'?",
        arrayDeRespostas: [
            { conteudo: "Atualizar os drivers de vídeo apenas", correto: false },
            { conteudo: "Realizar atualizações do sistema operacional e segurança", correto: true },
            { conteudo: "Desinstalar programas", correto: false },
            { conteudo: "Gerenciar contas de usuário", correto: false },
        ],
        justificativa: "O Windows Update é responsável por manter o sistema atualizado com patches e melhorias.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Qual é a função do recurso 'Restaurar Sistema' no Windows?",
        arrayDeRespostas: [
            { conteudo: "Apagar todos os arquivos do computador", correto: false },
            { conteudo: "Reverter o sistema para um ponto anterior, sem apagar arquivos pessoais", correto: true },
            { conteudo: "Instalar novos programas automaticamente", correto: false },
            { conteudo: "Criar backups completos do disco", correto: false },
        ],
        justificativa: "Restaurar Sistema permite desfazer alterações recentes que estejam causando problemas no sistema.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Como acessar as configurações do Windows pelo menu Iniciar?",
        arrayDeRespostas: [
            { conteudo: "Clicar em Configurações (ícone de engrenagem)", correto: true },
            { conteudo: "Clicar com o botão direito na Área de Trabalho", correto: false },
            { conteudo: "Abrir o Bloco de Notas", correto: false },
            { conteudo: "Abrir o Painel de Controle", correto: false },
        ],
        justificativa: "O menu Iniciar possui um ícone de engrenagem que dá acesso rápido às configurações do Windows.",
        categoriaDaPergunta: "sistema-operacional-windows"
    },
    {
        enunciado: "Qual é o atalho para salvar um documento no Microsoft Word?",
        arrayDeRespostas: [
            { conteudo: "Ctrl + S", correto: true },
            { conteudo: "Ctrl + P", correto: false },
            { conteudo: "Ctrl + C", correto: false },
            { conteudo: "Ctrl + V", correto: false },
        ],
        justificativa: "Ctrl + S é o atalho universal para salvar arquivos no Word e na maioria dos programas.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Como inserir uma quebra de página no Word?",
        arrayDeRespostas: [
            { conteudo: "Ctrl + Enter", correto: true },
            { conteudo: "Ctrl + Shift + P", correto: false },
            { conteudo: "Alt + F4", correto: false },
            { conteudo: "Ctrl + B", correto: false },
        ],
        justificativa: "Ctrl + Enter insere uma quebra de página no documento.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Qual guia da faixa de opções contém as ferramentas para aplicar negrito, itálico e sublinhado?",
        arrayDeRespostas: [
            { conteudo: "Página Inicial", correto: true },
            { conteudo: "Inserir", correto: false },
            { conteudo: "Revisão", correto: false },
            { conteudo: "Exibição", correto: false },
        ],
        justificativa: "A guia Página Inicial reúne os principais recursos de formatação de texto, como negrito, itálico e sublinhado.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Como você adiciona um cabeçalho em um documento do Word?",
        arrayDeRespostas: [
            { conteudo: "Inserir > Cabeçalho", correto: true },
            { conteudo: "Layout > Cabeçalho", correto: false },
            { conteudo: "Revisão > Cabeçalho", correto: false },
            { conteudo: "Exibir > Cabeçalho", correto: false },
        ],
        justificativa: "O cabeçalho é inserido pelo menu Inserir > Cabeçalho.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Qual o objetivo do recurso 'Controlar Alterações' no Word?",
        arrayDeRespostas: [
            { conteudo: "Permitir a edição colaborativa com registro das modificações", correto: true },
            { conteudo: "Proteger o documento com senha", correto: false },
            { conteudo: "Inserir imagens no documento", correto: false },
            { conteudo: "Formatar o texto automaticamente", correto: false },
        ],
        justificativa: "'Controlar Alterações' permite que todas as edições sejam registradas para revisão posterior.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Como se chama a área onde digitamos o texto no Word?",
        arrayDeRespostas: [
            { conteudo: "Corpo do documento", correto: true },
            { conteudo: "Cabeçalho", correto: false },
            { conteudo: "Rodapé", correto: false },
            { conteudo: "Barra de título", correto: false },
        ],
        justificativa: "O texto é digitado no corpo do documento, que é a área principal de edição.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Qual é a extensão padrão dos arquivos do Microsoft Word desde a versão 2007?",
        arrayDeRespostas: [
            { conteudo: ".docx", correto: true },
            { conteudo: ".doc", correto: false },
            { conteudo: ".xlsx", correto: false },
            { conteudo: ".pptx", correto: false },
        ],
        justificativa: "A partir do Word 2007, o padrão passou a ser o formato .docx.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Qual opção permite criar uma lista numerada no Word?",
        arrayDeRespostas: [
            { conteudo: "Lista numerada na guia Página Inicial", correto: true },
            { conteudo: "Quebra de página na guia Inserir", correto: false },
            { conteudo: "Negrito na guia Página Inicial", correto: false },
            { conteudo: "Controlar Alterações na guia Revisão", correto: false },
        ],
        justificativa: "A lista numerada é criada na guia Página Inicial, no grupo Parágrafo.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Como inserir uma imagem no documento do Word?",
        arrayDeRespostas: [
            { conteudo: "Inserir > Imagens", correto: true },
            { conteudo: "Layout > Quebras", correto: false },
            { conteudo: "Exibir > Zoom", correto: false },
            { conteudo: "Revisão > Comentários", correto: false },
        ],
        justificativa: "O caminho correto é Inserir > Imagens para adicionar imagens ao documento.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Qual ferramenta do Word verifica a ortografia e gramática do texto?",
        arrayDeRespostas: [
            { conteudo: "Verificação Ortográfica", correto: true },
            { conteudo: "Controlar Alterações", correto: false },
            { conteudo: "Referências", correto: false },
            { conteudo: "Estilos", correto: false },
        ],
        justificativa: "A Verificação Ortográfica identifica erros de escrita e sugere correções.",
        categoriaDaPergunta: "microsoft-word"
    },
    {
        enunciado: "Qual fórmula do Excel é usada para somar os valores das células A1 até A10?",
        arrayDeRespostas: [
            { conteudo: "=SOMA(A1:A10)", correto: true },
            { conteudo: "=ADD(A1:A10)", correto: false },
            { conteudo: "=SUM(A1+A10)", correto: false },
            { conteudo: "=TOTAL(A1:A10)", correto: false },
        ],
        justificativa: "A função correta para somar um intervalo no Excel é SOMA (ou SUM na versão em inglês).",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Qual é o atalho para inserir uma nova planilha no Excel?",
        arrayDeRespostas: [
            { conteudo: "Shift + F11", correto: true },
            { conteudo: "Ctrl + N", correto: false },
            { conteudo: "Alt + N", correto: false },
            { conteudo: "Ctrl + T", correto: false },
        ],
        justificativa: "Shift + F11 cria uma nova planilha dentro da mesma pasta de trabalho.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Como congelar a primeira linha para que ela permaneça visível ao rolar a planilha?",
        arrayDeRespostas: [
            { conteudo: "Exibir > Congelar Painéis > Congelar Linha Superior", correto: true },
            { conteudo: "Layout > Congelar Painéis > Congelar Linha Superior", correto: false },
            { conteudo: "Dados > Congelar Linha", correto: false },
            { conteudo: "Página Inicial > Congelar Painéis", correto: false },
        ],
        justificativa: "A função correta está na guia Exibir, em Congelar Painéis.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "O que faz a função PROCV no Excel?",
        arrayDeRespostas: [
            { conteudo: "Procura um valor na primeira coluna de uma tabela e retorna um valor na mesma linha", correto: true },
            { conteudo: "Soma valores de uma coluna", correto: false },
            { conteudo: "Multiplica duas células", correto: false },
            { conteudo: "Cria um gráfico a partir de dados", correto: false },
        ],
        justificativa: "PROCV é usada para busca vertical, trazendo dados correspondentes.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Qual atalho permite copiar uma célula no Excel?",
        arrayDeRespostas: [
            { conteudo: "Ctrl + C", correto: true },
            { conteudo: "Ctrl + V", correto: false },
            { conteudo: "Ctrl + X", correto: false },
            { conteudo: "Ctrl + Z", correto: false },
        ],
        justificativa: "Ctrl + C copia o conteúdo selecionado para a área de transferência.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Para que serve o recurso 'Filtro' no Excel?",
        arrayDeRespostas: [
            { conteudo: "Permite visualizar somente os dados que atendem a critérios específicos", correto: true },
            { conteudo: "Classifica os dados em ordem alfabética", correto: false },
            { conteudo: "Protege a planilha contra alterações", correto: false },
            { conteudo: "Insere gráficos automaticamente", correto: false },
        ],
        justificativa: "O filtro facilita a análise de dados exibindo somente os que satisfazem certas condições.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Qual extensão padrão dos arquivos do Microsoft Excel desde 2007?",
        arrayDeRespostas: [
            { conteudo: ".xlsx", correto: true },
            { conteudo: ".xls", correto: false },
            { conteudo: ".docx", correto: false },
            { conteudo: ".pptx", correto: false },
        ],
        justificativa: "Desde 2007, o padrão é o formato .xlsx, que suporta mais recursos.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Como inserir um gráfico em uma planilha do Excel?",
        arrayDeRespostas: [
            { conteudo: "Selecionar dados > Inserir > Gráficos", correto: true },
            { conteudo: "Arquivo > Novo > Gráfico", correto: false },
            { conteudo: "Página Inicial > Gráfico", correto: false },
            { conteudo: "Dados > Classificar > Gráfico", correto: false },
        ],
        justificativa: "Gráficos são inseridos pela guia Inserir após selecionar os dados desejados.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Qual função permite contar quantas células não estão vazias em um intervalo?",
        arrayDeRespostas: [
            { conteudo: "CONT.VALORES", correto: true },
            { conteudo: "CONT.NÚM", correto: false },
            { conteudo: "SOMA", correto: false },
            { conteudo: "MÉDIA", correto: false },
        ],
        justificativa: "CONT.VALORES conta todas as células que contêm dados, independentemente do tipo.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Como você insere um comentário em uma célula no Excel?",
        arrayDeRespostas: [
            { conteudo: "Clicar com o botão direito > Inserir Comentário", correto: true },
            { conteudo: "Inserir > Comentário", correto: false },
            { conteudo: "Exibir > Comentário", correto: false },
            { conteudo: "Dados > Comentário", correto: false },
        ],
        justificativa: "Comentários são inseridos clicando com o botão direito sobre a célula e escolhendo 'Inserir Comentário'.",
        categoriaDaPergunta: "microsoft-excel"
    },
    {
        enunciado: "Qual é o atalho para iniciar a apresentação de slides a partir do primeiro slide?",
        arrayDeRespostas: [
            { conteudo: "F5", correto: true },
            { conteudo: "Ctrl + P", correto: false },
            { conteudo: "Alt + S", correto: false },
            { conteudo: "F1", correto: false },
        ],
        justificativa: "A tecla F5 inicia a apresentação de slides do começo no PowerPoint.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Qual guia da faixa de opções permite inserir novos slides em uma apresentação?",
        arrayDeRespostas: [
            { conteudo: "Página Inicial", correto: true },
            { conteudo: "Inserir", correto: false },
            { conteudo: "Design", correto: false },
            { conteudo: "Transições", correto: false },
        ],
        justificativa: "A guia Página Inicial contém a opção para inserir novos slides.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Como aplicar uma transição entre os slides?",
        arrayDeRespostas: [
            { conteudo: "Guia Transições > Escolher uma transição", correto: true },
            { conteudo: "Guia Animações > Escolher uma transição", correto: false },
            { conteudo: "Guia Inserir > Transição", correto: false },
            { conteudo: "Guia Revisão > Transição", correto: false },
        ],
        justificativa: "Transições são aplicadas pela guia Transições no PowerPoint.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Qual é a função do modo de exibição 'Classificação de Slides'?",
        arrayDeRespostas: [
            { conteudo: "Permite organizar e visualizar todos os slides em miniatura", correto: true },
            { conteudo: "Inicia a apresentação de slides", correto: false },
            { conteudo: "Edita o texto dos slides", correto: false },
            { conteudo: "Adiciona comentários", correto: false },
        ],
        justificativa: "A Classificação de Slides permite reorganizar os slides facilmente.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Como inserir uma imagem em um slide?",
        arrayDeRespostas: [
            { conteudo: "Inserir > Imagens", correto: true },
            { conteudo: "Design > Imagens", correto: false },
            { conteudo: "Animações > Imagens", correto: false },
            { conteudo: "Revisão > Imagens", correto: false },
        ],
        justificativa: "Imagens são inseridas pela guia Inserir no PowerPoint.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Qual é o formato padrão dos arquivos do PowerPoint desde 2007?",
        arrayDeRespostas: [
            { conteudo: ".pptx", correto: true },
            { conteudo: ".ppt", correto: false },
            { conteudo: ".docx", correto: false },
            { conteudo: ".xlsx", correto: false },
        ],
        justificativa: "O formato .pptx é o padrão atual para apresentações no PowerPoint.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Qual opção permite adicionar animações aos objetos em um slide?",
        arrayDeRespostas: [
            { conteudo: "Guia Animações", correto: true },
            { conteudo: "Guia Transições", correto: false },
            { conteudo: "Guia Inserir", correto: false },
            { conteudo: "Guia Revisão", correto: false },
        ],
        justificativa: "As animações são configuradas na guia Animações.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Como você pode duplicar um slide no PowerPoint?",
        arrayDeRespostas: [
            { conteudo: "Clicar com o botão direito no slide e escolher 'Duplicar Slide'", correto: true },
            { conteudo: "Pressionar Ctrl + N", correto: false },
            { conteudo: "Pressionar Alt + D", correto: false },
            { conteudo: "Selecionar o slide e pressionar F5", correto: false },
        ],
        justificativa: "Clicando com o botão direito no slide é possível duplicá-lo rapidamente.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Qual recurso permite inserir notas que o apresentador pode ver durante a apresentação?",
        arrayDeRespostas: [
            { conteudo: "Painel de Anotações", correto: true },
            { conteudo: "Comentários", correto: false },
            { conteudo: "Cabeçalho", correto: false },
            { conteudo: "Rodapé", correto: false },
        ],
        justificativa: "O Painel de Anotações permite inserir observações visíveis somente para o apresentador.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Como você salva uma apresentação para garantir que possa ser reproduzida em qualquer computador?",
        arrayDeRespostas: [
            { conteudo: "Salvar no formato padrão .pptx", correto: true },
            { conteudo: "Salvar como arquivo de texto", correto: false },
            { conteudo: "Salvar como imagem", correto: false },
            { conteudo: "Salvar como PDF", correto: false },
        ],
        justificativa: "Salvar no formato .pptx mantém todos os recursos e compatibilidade da apresentação.",
        categoriaDaPergunta: "microsoft-powerpoint"
    },
    {
        enunciado: "Qual das alternativas abaixo é considerada uma ferramenta de produtividade pessoal?",
        arrayDeRespostas: [
            { conteudo: "Microsoft Word", correto: true },
            { conteudo: "Paint", correto: false },
            { conteudo: "Windows Explorer", correto: false },
            { conteudo: "Prompt de Comando", correto: false }
        ],
        justificativa: "O Microsoft Word é uma ferramenta de produtividade pessoal voltada para edição de textos.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "O que é o Microsoft OneNote?",
        arrayDeRespostas: [
            { conteudo: "Um aplicativo de planilhas", correto: false },
            { conteudo: "Um software de anotações e organização de ideias", correto: true },
            { conteudo: "Um navegador de internet", correto: false },
            { conteudo: "Um software para criação de apresentações", correto: false }
        ],
        justificativa: "O OneNote é uma ferramenta da Microsoft utilizada para fazer anotações e organizar informações.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "Qual das ferramentas abaixo é mais apropriada para criar uma apresentação de slides?",
        arrayDeRespostas: [
            { conteudo: "Excel", correto: false },
            { conteudo: "Word", correto: false },
            { conteudo: "PowerPoint", correto: true },
            { conteudo: "Outlook", correto: false }
        ],
        justificativa: "O PowerPoint é a ferramenta da Microsoft voltada para criação de apresentações.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "O que é uma suíte de aplicativos de escritório?",
        arrayDeRespostas: [
            { conteudo: "Um conjunto de jogos para computador", correto: false },
            { conteudo: "Um pacote de programas para navegação na internet", correto: false },
            { conteudo: "Um conjunto de softwares para tarefas de escritório", correto: true },
            { conteudo: "Um único programa com múltiplas funções", correto: false }
        ],
        justificativa: "Uma suíte de escritório reúne programas como editores de texto, planilhas, apresentações e e-mails.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "Qual ferramenta é usada para gerenciar e-mails no pacote Microsoft Office?",
        arrayDeRespostas: [
            { conteudo: "Word", correto: false },
            { conteudo: "PowerPoint", correto: false },
            { conteudo: "Outlook", correto: true },
            { conteudo: "Excel", correto: false }
        ],
        justificativa: "O Outlook é o programa do pacote Office usado para gerenciar e-mails, contatos e calendários.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "Qual função principal do Microsoft Excel?",
        arrayDeRespostas: [
            { conteudo: "Editar imagens", correto: false },
            { conteudo: "Criar slides", correto: false },
            { conteudo: "Organizar e calcular dados em planilhas", correto: true },
            { conteudo: "Editar vídeos", correto: false }
        ],
        justificativa: "O Excel é utilizado para organização, cálculo e análise de dados em forma de planilhas.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "Google Docs é uma ferramenta de:",
        arrayDeRespostas: [
            { conteudo: "Navegação na internet", correto: false },
            { conteudo: "Edição de texto online", correto: true },
            { conteudo: "Criação de vídeos", correto: false },
            { conteudo: "Desenho digital", correto: false }
        ],
        justificativa: "O Google Docs permite criar e editar documentos de texto online.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "Uma vantagem das ferramentas online como o Google Drive é:",
        arrayDeRespostas: [
            { conteudo: "Exigem instalação local", correto: false },
            { conteudo: "Funcionam apenas no modo offline", correto: false },
            { conteudo: "Permitem o acesso e compartilhamento remoto de arquivos", correto: true },
            { conteudo: "São exclusivas para Windows", correto: false }
        ],
        justificativa: "Ferramentas como Google Drive permitem acesso e compartilhamento de arquivos de qualquer lugar com internet.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "Qual dessas ferramentas é utilizada para criar formulários online?",
        arrayDeRespostas: [
            { conteudo: "Google Forms", correto: true },
            { conteudo: "PowerPoint", correto: false },
            { conteudo: "WordPad", correto: false },
            { conteudo: "Microsoft Paint", correto: false }
        ],
        justificativa: "O Google Forms permite criar formulários, pesquisas e questionários pela internet.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "Ferramentas como Trello, Asana e Notion são utilizadas para:",
        arrayDeRespostas: [
            { conteudo: "Gerenciamento de tarefas e projetos", correto: true },
            { conteudo: "Criação de apresentações", correto: false },
            { conteudo: "Edição de vídeos", correto: false },
            { conteudo: "Envio de e-mails em massa", correto: false }
        ],
        justificativa: "Essas ferramentas auxiliam na organização, planejamento e acompanhamento de tarefas e projetos.",
        categoriaDaPergunta: "ferramentas-aplicativas"
    },
    {
        enunciado: "O que é o Pacote Office?",
        arrayDeRespostas: [
            { conteudo: "Um conjunto de aplicativos para edição de textos, planilhas e apresentações", correto: true },
            { conteudo: "Um sistema operacional da Microsoft", correto: false },
            { conteudo: "Um antivírus", correto: false },
            { conteudo: "Um tipo de navegador de internet", correto: false }
        ],
        justificativa: "O Pacote Office é um conjunto de softwares criados pela Microsoft para produtividade, como o Word, Excel e PowerPoint.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "Qual alternativa apresenta apenas programas que fazem parte do Pacote Office?",
        arrayDeRespostas: [
            { conteudo: "Word, Excel, PowerPoint", correto: true },
            { conteudo: "Chrome, Outlook, Paint", correto: false },
            { conteudo: "Excel, Firefox, Skype", correto: false },
            { conteudo: "PowerPoint, Teams, VLC", correto: false }
        ],
        justificativa: "Word, Excel e PowerPoint são os principais programas do Pacote Office.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "Qual programa do pacote Office é voltado para a criação de apresentações de slides?",
        arrayDeRespostas: [
            { conteudo: "PowerPoint", correto: true },
            { conteudo: "Excel", correto: false },
            { conteudo: "Word", correto: false },
            { conteudo: "Access", correto: false }
        ],
        justificativa: "O PowerPoint é a ferramenta do Office usada para criar apresentações com slides.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "Qual programa do Office é mais adequado para criar e manipular planilhas?",
        arrayDeRespostas: [
            { conteudo: "Excel", correto: true },
            { conteudo: "Word", correto: false },
            { conteudo: "OneNote", correto: false },
            { conteudo: "PowerPoint", correto: false }
        ],
        justificativa: "O Excel é o software de planilhas do Pacote Office, ideal para cálculos e gráficos.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "Entre as alternativas abaixo, qual é uma suíte de escritório alternativa ao Microsoft Office?",
        arrayDeRespostas: [
            { conteudo: "LibreOffice", correto: true },
            { conteudo: "Visual Studio", correto: false },
            { conteudo: "Photoshop", correto: false },
            { conteudo: "Discord", correto: false }
        ],
        justificativa: "LibreOffice é uma suíte de escritório gratuita e de código aberto, similar ao Microsoft Office.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "Qual é a principal função do LibreOffice?",
        arrayDeRespostas: [
            { conteudo: "Sistema operacional alternativo ao Windows", correto: false },
            { conteudo: "Conjunto de ferramentas para desenvolvimento de jogos", correto: false },
            { conteudo: "Pacote de softwares para produtividade, similar ao Microsoft Office", correto: true },
            { conteudo: "Antivírus gratuito para computadores pessoais", correto: false },
        ],
        justificativa: "O LibreOffice é um pacote de software livre voltado à produtividade, incluindo editor de texto, planilhas e apresentações, assim como o Microsoft Office.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "O que diferencia o Google Docs do Microsoft Word?",
        arrayDeRespostas: [
            { conteudo: "O Google Docs é um software de planilhas", correto: false },
            { conteudo: "O Microsoft Word funciona apenas online", correto: false },
            { conteudo: "O Google Docs permite edição colaborativa em tempo real pela nuvem", correto: true },
            { conteudo: "O Google Docs não salva documentos", correto: false },
        ],
        justificativa: "O Google Docs é conhecido por permitir que vários usuários editem um documento simultaneamente via internet.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "Qual das alternativas a seguir não pertence ao pacote Microsoft Office tradicional?",
        arrayDeRespostas: [
            { conteudo: "Word", correto: false },
            { conteudo: "Excel", correto: false },
            { conteudo: "Photoshop", correto: true },
            { conteudo: "PowerPoint", correto: false },
        ],
        justificativa: "O Photoshop é um software de edição de imagens desenvolvido pela Adobe, não faz parte do Microsoft Office.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "Qual é a função principal do Microsoft OneNote?",
        arrayDeRespostas: [
            { conteudo: "Criar apresentações visuais", correto: false },
            { conteudo: "Gerenciar e-mails", correto: false },
            { conteudo: "Tomar notas e organizar informações de forma digital", correto: true },
            { conteudo: "Criar planilhas financeiras", correto: false },
        ],
        justificativa: "O OneNote é um aplicativo de anotações digitais que permite organizar informações em blocos de anotações.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "O que é o WPS Office?",
        arrayDeRespostas: [
            { conteudo: "Um sistema de proteção de dados", correto: false },
            { conteudo: "Um concorrente gratuito do Microsoft Office", correto: true },
            { conteudo: "Um aplicativo de antivírus para Windows", correto: false },
            { conteudo: "Uma rede privada para empresas", correto: false },
        ],
        justificativa: "O WPS Office é um pacote de escritório alternativo ao Microsoft Office, com funções semelhantes de edição de texto, planilhas e apresentações.",
        categoriaDaPergunta: "pacote-office-e-similares"
    },
    {
        enunciado: "Qual dos navegadores abaixo é desenvolvido pela Mozilla?",
        arrayDeRespostas: [
            { conteudo: "Chrome", correto: false },
            { conteudo: "Firefox", correto: true },
            { conteudo: "Edge", correto: false },
            { conteudo: "Safari", correto: false },
        ],
        justificativa: "O Firefox é o navegador desenvolvido pela Mozilla.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "Qual é o navegador padrão dos dispositivos Apple?",
        arrayDeRespostas: [
            { conteudo: "Chrome", correto: false },
            { conteudo: "Safari", correto: true },
            { conteudo: "Firefox", correto: false },
            { conteudo: "Opera", correto: false },
        ],
        justificativa: "O Safari é o navegador padrão de dispositivos Apple.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "O que é uma aba anônima em um navegador?",
        arrayDeRespostas: [
            { conteudo: "Uma aba que permite acessar arquivos locais", correto: false },
            { conteudo: "Uma aba que oculta sua atividade de navegação", correto: true },
            { conteudo: "Uma aba que bloqueia propagandas", correto: false },
            { conteudo: "Uma aba com fundo preto", correto: false },
        ],
        justificativa: "A aba anônima não salva histórico de navegação, cookies ou dados de sites.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "Qual dessas extensões pode ser adicionada a navegadores?",
        arrayDeRespostas: [
            { conteudo: "Bloqueador de anúncios", correto: true },
            { conteudo: "Editor de vídeo", correto: false },
            { conteudo: "Sistema operacional", correto: false },
            { conteudo: "Pacote Office", correto: false },
        ],
        justificativa: "Bloqueadores de anúncios são exemplos comuns de extensões de navegador.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "Qual navegador é desenvolvido pela Google?",
        arrayDeRespostas: [
            { conteudo: "Edge", correto: false },
            { conteudo: "Chrome", correto: true },
            { conteudo: "Safari", correto: false },
            { conteudo: "Brave", correto: false },
        ],
        justificativa: "O Google Chrome é o navegador oficial da Google.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "Para que serve a barra de endereços em um navegador?",
        arrayDeRespostas: [
            { conteudo: "Para ajustar o brilho da tela", correto: false },
            { conteudo: "Para digitar o endereço de um site", correto: true },
            { conteudo: "Para mudar de aba", correto: false },
            { conteudo: "Para verificar notificações", correto: false },
        ],
        justificativa: "A barra de endereços serve para digitar URLs de sites.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "Qual dessas opções representa um protocolo de internet seguro?",
        arrayDeRespostas: [
            { conteudo: "HTTP", correto: false },
            { conteudo: "HTTPS", correto: true },
            { conteudo: "FTP", correto: false },
            { conteudo: "WWW", correto: false },
        ],
        justificativa: "HTTPS é a versão segura do protocolo HTTP.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "O que acontece ao limpar o cache do navegador?",
        arrayDeRespostas: [
            { conteudo: "O navegador é desinstalado", correto: false },
            { conteudo: "Os dados temporários são apagados", correto: true },
            { conteudo: "Todos os arquivos do computador são excluídos", correto: false },
            { conteudo: "A internet é desconectada", correto: false },
        ],
        justificativa: "Limpar o cache remove arquivos temporários armazenados pelo navegador.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "Qual navegador substituiu o Internet Explorer nos sistemas Windows mais recentes?",
        arrayDeRespostas: [
            { conteudo: "Chrome", correto: false },
            { conteudo: "Edge", correto: true },
            { conteudo: "Firefox", correto: false },
            { conteudo: "Opera", correto: false },
        ],
        justificativa: "O Microsoft Edge é o substituto do Internet Explorer.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "Para que serve o botão de atualizar em um navegador?",
        arrayDeRespostas: [
            { conteudo: "Fechar a página", correto: false },
            { conteudo: "Abrir uma nova aba", correto: false },
            { conteudo: "Recarregar o conteúdo da página", correto: true },
            { conteudo: "Salvar a página como PDF", correto: false },
        ],
        justificativa: "O botão de atualizar recarrega a página que está sendo visualizada.",
        categoriaDaPergunta: "navegadores-de-internet"
    },
    {
        enunciado: "Qual das opções abaixo representa um serviço de e-mail amplamente utilizado?",
        arrayDeRespostas: [
            { conteudo: "Google Drive", correto: false },
            { conteudo: "Gmail", correto: true },
            { conteudo: "Spotify", correto: false },
            { conteudo: "Zoom", correto: false }
        ],
        justificativa: "Gmail é um serviço gratuito de e-mail oferecido pelo Google, amplamente utilizado em todo o mundo.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "Para que serve o campo 'CC' ao enviar um e-mail?",
        arrayDeRespostas: [
            { conteudo: "Para anexar arquivos", correto: false },
            { conteudo: "Para colocar cópias do e-mail visíveis a outros destinatários", correto: true },
            { conteudo: "Para responder automaticamente", correto: false },
            { conteudo: "Para esconder os destinatários", correto: false }
        ],
        justificativa: "CC (Com Cópia) permite enviar cópias do e-mail a outros destinatários com visibilidade para todos os envolvidos.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "Qual é a função do campo 'CCO' (ou BCC) em um e-mail?",
        arrayDeRespostas: [
            { conteudo: "Esconder os destinatários uns dos outros", correto: true },
            { conteudo: "Enviar cópias visíveis para todos", correto: false },
            { conteudo: "Anexar arquivos", correto: false },
            { conteudo: "Agendar envio", correto: false }
        ],
        justificativa: "CCO (Com Cópia Oculta) envia cópias do e-mail sem que os destinatários saibam quem mais recebeu.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "O que é necessário para enviar um e-mail?",
        arrayDeRespostas: [
            { conteudo: "Um número de telefone", correto: false },
            { conteudo: "Uma conta de e-mail e conexão com a internet", correto: true },
            { conteudo: "Um aplicativo de música", correto: false },
            { conteudo: "Apenas um nome de usuário", correto: false }
        ],
        justificativa: "É necessário ter uma conta de e-mail e conexão com a internet para compor e enviar mensagens.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "Em qual parte do e-mail você deve adicionar um arquivo como uma foto ou documento?",
        arrayDeRespostas: [
            { conteudo: "Assunto", correto: false },
            { conteudo: "Anexo", correto: true },
            { conteudo: "Corpo da mensagem", correto: false },
            { conteudo: "Assinatura", correto: false }
        ],
        justificativa: "O campo de anexo é destinado a incluir arquivos como fotos, PDFs, ou documentos no e-mail.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "Qual dessas ações NÃO é possível realizar com um e-mail?",
        arrayDeRespostas: [
            { conteudo: "Responder", correto: false },
            { conteudo: "Encaminhar", correto: false },
            { conteudo: "Anexar arquivos", correto: false },
            { conteudo: "Fazer ligações de voz diretamente", correto: true }
        ],
        justificativa: "Embora alguns serviços integrem chamadas, o e-mail tradicional não realiza chamadas de voz diretamente.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "Qual é a função do campo 'Assunto' em um e-mail?",
        arrayDeRespostas: [
            { conteudo: "Adicionar anexo", correto: false },
            { conteudo: "Indicar o tema principal da mensagem", correto: true },
            { conteudo: "Enviar cópia para outro destinatário", correto: false },
            { conteudo: "Inserir links externos", correto: false }
        ],
        justificativa: "O campo 'Assunto' resume o conteúdo do e-mail, ajudando o destinatário a identificar o tema da mensagem.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "O que acontece ao clicar em 'Responder a todos' em um e-mail?",
        arrayDeRespostas: [
            { conteudo: "O e-mail é enviado apenas ao remetente", correto: false },
            { conteudo: "O e-mail é enviado a todos os destinatários do e-mail original", correto: true },
            { conteudo: "O e-mail é deletado", correto: false },
            { conteudo: "A mensagem é arquivada", correto: false }
        ],
        justificativa: "'Responder a todos' envia a resposta ao remetente e a todos que estavam nos campos CC e Para.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "O que é um filtro de spam?",
        arrayDeRespostas: [
            { conteudo: "Um sistema para acelerar a entrega de mensagens", correto: false },
            { conteudo: "Um mecanismo para bloquear mensagens indesejadas", correto: true },
            { conteudo: "Uma forma de criptografar e-mails", correto: false },
            { conteudo: "Um método de compressão de anexos", correto: false }
        ],
        justificativa: "Filtros de spam identificam e-mails indesejados ou perigosos, movendo-os para a pasta de spam/lixo eletrônico.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "Qual é a utilidade da 'Assinatura de e-mail'?",
        arrayDeRespostas: [
            { conteudo: "Aumentar o tamanho do texto", correto: false },
            { conteudo: "Adicionar informações automáticas ao fim de cada mensagem", correto: true },
            { conteudo: "Ocultar o remetente", correto: false },
            { conteudo: "Enviar a mensagem em modo anônimo", correto: false }
        ],
        justificativa: "A assinatura é adicionada automaticamente ao fim do e-mail com nome, cargo, telefone ou outras informações do remetente.",
        categoriaDaPergunta: "correio-eletronico-email"
    },
    {
        enunciado: "Qual das opções abaixo é considerada um software utilitário?",
        arrayDeRespostas: [
            { conteudo: "Microsoft Word", correto: false },
            { conteudo: "WinRAR", correto: true },
            { conteudo: "Google Chrome", correto: false },
            { conteudo: "Adobe Photoshop", correto: false }
        ],
        justificativa: "Softwares utilitários realizam tarefas de manutenção do sistema, como compactação de arquivos, exemplo: WinRAR.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "Para remover vírus e outras ameaças de um computador, é necessário utilizar:",
        arrayDeRespostas: [
            { conteudo: "Editor de texto", correto: false },
            { conteudo: "Antivírus", correto: true },
            { conteudo: "Navegador", correto: false },
            { conteudo: "Compactador de arquivos", correto: false }
        ],
        justificativa: "Antivírus são softwares utilitários que protegem o sistema contra ameaças como vírus e malwares.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "Qual software é usado para desfragmentar o disco rígido no Windows?",
        arrayDeRespostas: [
            { conteudo: "Desfragmentador de Disco", correto: true },
            { conteudo: "Gerenciador de Tarefas", correto: false },
            { conteudo: "Paint", correto: false },
            { conteudo: "Prompt de Comando", correto: false }
        ],
        justificativa: "O Desfragmentador de Disco organiza os dados no disco rígido para melhorar o desempenho do sistema.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "CCleaner é um exemplo de software que realiza qual função?",
        arrayDeRespostas: [
            { conteudo: "Editar textos", correto: false },
            { conteudo: "Navegar na internet", correto: false },
            { conteudo: "Limpeza e otimização do sistema", correto: true },
            { conteudo: "Gravação de CDs", correto: false }
        ],
        justificativa: "O CCleaner é um utilitário que limpa arquivos temporários e corrige erros no sistema.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "Qual alternativa apresenta apenas softwares utilitários?",
        arrayDeRespostas: [
            { conteudo: "Excel, Word, PowerPoint", correto: false },
            { conteudo: "Avast, WinRAR, CCleaner", correto: true },
            { conteudo: "Chrome, Firefox, Edge", correto: false },
            { conteudo: "Photoshop, Illustrator, CorelDRAW", correto: false }
        ],
        justificativa: "Avast, WinRAR e CCleaner são exemplos de softwares utilitários.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "Programas antivírus são classificados como:",
        arrayDeRespostas: [
            { conteudo: "Softwares de edição", correto: false },
            { conteudo: "Softwares de produtividade", correto: false },
            { conteudo: "Softwares utilitários", correto: true },
            { conteudo: "Softwares de apresentação", correto: false }
        ],
        justificativa: "Antivírus são utilitários projetados para manter a segurança do sistema.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "Qual software utilitário é usado para descompactar arquivos no formato .zip ou .rar?",
        arrayDeRespostas: [
            { conteudo: "WordPad", correto: false },
            { conteudo: "WinRAR", correto: true },
            { conteudo: "Microsoft Excel", correto: false },
            { conteudo: "Microsoft Edge", correto: false }
        ],
        justificativa: "WinRAR é um utilitário de compactação e descompactação de arquivos.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "O que caracteriza um software utilitário?",
        arrayDeRespostas: [
            { conteudo: "Permitir a navegação na internet", correto: false },
            { conteudo: "Ajudar na manutenção e bom funcionamento do sistema", correto: true },
            { conteudo: "Editar imagens e vídeos", correto: false },
            { conteudo: "Executar cálculos financeiros", correto: false }
        ],
        justificativa: "Softwares utilitários são voltados para manutenção, otimização e proteção do sistema.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "Qual das funções abaixo pode ser realizada por um utilitário?",
        arrayDeRespostas: [
            { conteudo: "Criação de apresentações", correto: false },
            { conteudo: "Acesso a redes sociais", correto: false },
            { conteudo: "Backup de arquivos", correto: true },
            { conteudo: "Criação de planilhas", correto: false }
        ],
        justificativa: "Fazer backup é uma função típica de softwares utilitários.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "Ferramentas como desfragmentador de disco, verificador de erros e limpeza de disco são encontradas em qual categoria?",
        arrayDeRespostas: [
            { conteudo: "Softwares de desenvolvimento", correto: false },
            { conteudo: "Softwares de design", correto: false },
            { conteudo: "Softwares utilitários", correto: true },
            { conteudo: "Softwares educacionais", correto: false }
        ],
        justificativa: "Essas ferramentas são típicas de softwares utilitários, que cuidam do desempenho do sistema.",
        categoriaDaPergunta: "softwares-utilitarios"
    },
    {
        enunciado: "O que é um antivírus?",
        arrayDeRespostas: [
            { conteudo: "Um programa que cria planilhas", correto: false },
            { conteudo: "Um software de edição de vídeos", correto: false },
            { conteudo: "Um programa que detecta e remove ameaças virtuais", correto: true },
            { conteudo: "Um aplicativo de e-mail", correto: false },
        ],
        justificativa: "Antivírus são programas desenvolvidos para detectar, prevenir e remover softwares maliciosos.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "Qual das opções abaixo representa uma boa prática de segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Anotar senhas em post-its colados no monitor", correto: false },
            { conteudo: "Usar a mesma senha para todos os sites", correto: false },
            { conteudo: "Compartilhar senhas com colegas de trabalho", correto: false },
            { conteudo: "Utilizar senhas fortes e únicas para cada serviço", correto: true },
        ],
        justificativa: "Senhas fortes e únicas reduzem o risco de invasões em contas pessoais e corporativas.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "O que é phishing?",
        arrayDeRespostas: [
            { conteudo: "Uma técnica de backup de arquivos", correto: false },
            { conteudo: "Uma forma de melhorar o desempenho do sistema", correto: false },
            { conteudo: "Uma tentativa de enganar usuários para obter dados confidenciais", correto: true },
            { conteudo: "Um tipo de antivírus", correto: false },
        ],
        justificativa: "Phishing é um golpe digital que visa enganar pessoas para que revelem informações sensíveis.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "O que é um firewall?",
        arrayDeRespostas: [
            { conteudo: "Um programa de edição de textos", correto: false },
            { conteudo: "Uma ferramenta para compactar arquivos", correto: false },
            { conteudo: "Um dispositivo ou software que controla o tráfego de rede", correto: true },
            { conteudo: "Um navegador de internet", correto: false },
        ],
        justificativa: "Firewalls monitoram e controlam o tráfego de entrada e saída de uma rede com base em regras de segurança.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "Por que devemos manter os softwares atualizados?",
        arrayDeRespostas: [
            { conteudo: "Para deixá-los mais lentos", correto: false },
            { conteudo: "Para consumir mais memória", correto: false },
            { conteudo: "Para corrigir falhas de segurança e melhorar o desempenho", correto: true },
            { conteudo: "Apenas por estética", correto: false },
        ],
        justificativa: "Atualizações corrigem vulnerabilidades que podem ser exploradas por hackers.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "O que é uma conexão segura na internet?",
        arrayDeRespostas: [
            { conteudo: "Aquela que possui o símbolo de cadeado e começa com https", correto: true },
            { conteudo: "Aquela que começa com ftp", correto: false },
            { conteudo: "Aquela que usa a rede Wi-Fi aberta", correto: false },
            { conteudo: "Aquela que não pede senha para acesso", correto: false },
        ],
        justificativa: "HTTPS e o cadeado indicam que a conexão está criptografada, garantindo mais segurança.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "O que é engenharia social?",
        arrayDeRespostas: [
            { conteudo: "Uma forma de construir redes sociais", correto: false },
            { conteudo: "Uma técnica para invadir redes Wi-Fi", correto: false },
            { conteudo: "Um método para manipular pessoas a fim de obter informações confidenciais", correto: true },
            { conteudo: "Uma configuração de segurança do Windows", correto: false },
        ],
        justificativa: "A engenharia social explora a confiança humana para obter acesso a sistemas ou dados.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "O que é um backup?",
        arrayDeRespostas: [
            { conteudo: "Um vírus de computador", correto: false },
            { conteudo: "Uma cópia de segurança de arquivos importantes", correto: true },
            { conteudo: "Uma falha do sistema operacional", correto: false },
            { conteudo: "Um antivírus", correto: false },
        ],
        justificativa: "Backup é uma cópia dos dados que pode ser restaurada em caso de perda, falha ou ataque.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "Por que não é recomendado clicar em links suspeitos?",
        arrayDeRespostas: [
            { conteudo: "Porque podem deixar o computador mais rápido", correto: false },
            { conteudo: "Porque geralmente levam a vídeos engraçados", correto: false },
            { conteudo: "Porque podem direcionar a páginas falsas que roubam dados", correto: true },
            { conteudo: "Porque aumentam o espaço do HD", correto: false },
        ],
        justificativa: "Links suspeitos podem conter golpes de phishing ou instalar malware no dispositivo.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "Qual destas ações aumenta a segurança de uma conta online?",
        arrayDeRespostas: [
            { conteudo: "Ativar a autenticação em dois fatores", correto: true },
            { conteudo: "Usar a mesma senha para todos os sites", correto: false },
            { conteudo: "Compartilhar a senha com familiares", correto: false },
            { conteudo: "Desativar o antivírus", correto: false },
        ],
        justificativa: "A autenticação em dois fatores adiciona uma camada extra de segurança ao exigir um segundo código além da senha.",
        categoriaDaPergunta: "seguranca-da-informacao",
    },
    {
        enunciado: "O que é uma interface gráfica do usuário (GUI) em um sistema operacional?",
        arrayDeRespostas: [
            { conteudo: "Um programa de segurança", correto: false },
            { conteudo: "Uma forma visual de interação com o sistema", correto: true },
            { conteudo: "Um tipo de memória RAM", correto: false },
            { conteudo: "Um driver de dispositivo", correto: false }
        ],
        justificativa: "GUI (Graphical User Interface) permite a interação do usuário com o sistema por meio de elementos visuais como janelas, ícones e botões.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "Qual destas é uma característica de sistemas operacionais com interface de linha de comando?",
        arrayDeRespostas: [
            { conteudo: "Utilizam apenas o mouse", correto: false },
            { conteudo: "São baseados em cliques e ícones", correto: false },
            { conteudo: "Dependem da digitação de comandos", correto: true },
            { conteudo: "Têm menus gráficos interativos", correto: false }
        ],
        justificativa: "Sistemas com linha de comando exigem que o usuário digite comandos para executar ações.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "Qual das opções abaixo é um exemplo de sistema operacional com interface gráfica?",
        arrayDeRespostas: [
            { conteudo: "MS-DOS", correto: false },
            { conteudo: "Windows 10", correto: true },
            { conteudo: "Prompt de Comando", correto: false },
            { conteudo: "Shell Script", correto: false }
        ],
        justificativa: "Windows 10 é um sistema operacional com interface gráfica, ao contrário do MS-DOS que é baseado em linha de comando.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "A principal função da interface de um sistema operacional é:",
        arrayDeRespostas: [
            { conteudo: "Gerenciar os cabos conectados ao computador", correto: false },
            { conteudo: "Permitir a interação entre o usuário e o sistema", correto: true },
            { conteudo: "Reduzir o consumo de energia do computador", correto: false },
            { conteudo: "Detectar vírus e malware", correto: false }
        ],
        justificativa: "A interface permite que o usuário utilize o sistema operacional de forma eficiente.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "Qual é o principal meio de interação com sistemas operacionais que possuem interface gráfica?",
        arrayDeRespostas: [
            { conteudo: "Teclado numérico", correto: false },
            { conteudo: "Comandos por voz", correto: false },
            { conteudo: "Mouse e elementos visuais", correto: true },
            { conteudo: "Conexões em rede", correto: false }
        ],
        justificativa: "Sistemas com interface gráfica geralmente utilizam o mouse para navegar entre janelas e menus.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "Qual sistema operacional é conhecido por sua interface baseada em janelas, ícones e menus?",
        arrayDeRespostas: [
            { conteudo: "Linux em modo terminal", correto: false },
            { conteudo: "Windows", correto: true },
            { conteudo: "Bash Shell", correto: false },
            { conteudo: "BIOS", correto: false }
        ],
        justificativa: "O Windows é conhecido por sua interface gráfica intuitiva baseada em janelas.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "Em sistemas com interface gráfica, qual é o nome da área onde os ícones dos programas são organizados?",
        arrayDeRespostas: [
            { conteudo: "Painel de Controle", correto: false },
            { conteudo: "Área de Trabalho", correto: true },
            { conteudo: "Menu Iniciar", correto: false },
            { conteudo: "Gerenciador de Tarefas", correto: false }
        ],
        justificativa: "A Área de Trabalho (Desktop) é onde os ícones e atalhos são normalmente exibidos.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "Qual dessas é uma função da interface do sistema operacional?",
        arrayDeRespostas: [
            { conteudo: "Conectar à internet", correto: false },
            { conteudo: "Interpretar os dados do HD", correto: false },
            { conteudo: "Facilitar a execução de comandos pelo usuário", correto: true },
            { conteudo: "Verificar a memória física", correto: false }
        ],
        justificativa: "A interface serve para que o usuário possa utilizar os recursos do sistema de forma mais acessível.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "Qual componente do sistema operacional mostra os programas em execução e permite alternar entre eles?",
        arrayDeRespostas: [
            { conteudo: "Painel de Controle", correto: false },
            { conteudo: "Gerenciador de Tarefas", correto: true },
            { conteudo: "Windows Explorer", correto: false },
            { conteudo: "Menu Iniciar", correto: false }
        ],
        justificativa: "O Gerenciador de Tarefas permite visualizar e controlar os programas em execução no sistema.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "O que é o Menu Iniciar em sistemas Windows?",
        arrayDeRespostas: [
            { conteudo: "Uma janela para configurações do BIOS", correto: false },
            { conteudo: "Um local para acessar programas, pastas e configurações", correto: true },
            { conteudo: "Uma ferramenta de recuperação do sistema", correto: false },
            { conteudo: "Um programa antivírus integrado", correto: false }
        ],
        justificativa: "O Menu Iniciar centraliza o acesso aos principais recursos do sistema como aplicativos, arquivos e configurações.",
        categoriaDaPergunta: "sistemas-operacionais-e-interfaces"
    },
    {
        enunciado: "Qual das opções abaixo é um exemplo de ferramenta que utiliza Inteligência Artificial para auxiliar na criação de textos?",
        arrayDeRespostas: [
            { conteudo: "Planilhas Google", correto: false },
            { conteudo: "ChatGPT", correto: true },
            { conteudo: "Google Maps", correto: false },
            { conteudo: "Adobe Photoshop", correto: false }
        ],
        justificativa: "O ChatGPT é uma ferramenta baseada em IA treinada para gerar textos, responder perguntas e auxiliar na criação de conteúdo.",
        categoriaDaPergunta: "inteligencia-artificial-e-ferramentas-online"
    },
    {
        enunciado: "Qual dessas ferramentas é um assistente virtual baseado em inteligência artificial?",
        arrayDeRespostas: [
            { conteudo: "Excel", correto: false },
            { conteudo: "Word", correto: false },
            { conteudo: "Siri", correto: true },
            { conteudo: "Firefox", correto: false }
        ],
        justificativa: "A Siri é um assistente virtual da Apple que utiliza IA para responder comandos de voz e interagir com o usuário.",
        categoriaDaPergunta: "inteligencia-artificial-e-ferramentas-online"
    },
    {
        enunciado: "Sobre os tradutores automáticos baseados em IA, como o Google Tradutor, é correto afirmar que:",
        arrayDeRespostas: [
            { conteudo: "Eles funcionam apenas em inglês.", correto: false },
            { conteudo: "Eles traduzem palavra por palavra sem contexto.", correto: false },
            { conteudo: "Eles utilizam redes neurais para compreender contexto e melhorar a tradução.", correto: true },
            { conteudo: "Eles são programas que precisam ser instalados no computador.", correto: false }
        ],
        justificativa: "Ferramentas como o Google Tradutor utilizam inteligência artificial e redes neurais para analisar o contexto e oferecer traduções mais precisas.",
        categoriaDaPergunta: "inteligencia-artificial-e-ferramentas-online"
    },
    {
        enunciado: "Qual o principal benefício do uso de IA em ferramentas online de produtividade?",
        arrayDeRespostas: [
            { conteudo: "Aumentar o tamanho dos arquivos.", correto: false },
            { conteudo: "Automatizar tarefas repetitivas e melhorar a eficiência.", correto: true },
            { conteudo: "Reduzir a velocidade de processamento.", correto: false },
            { conteudo: "Limitar o acesso a conteúdos externos.", correto: false }
        ],
        justificativa: "A IA permite automatizar processos, organizar informações e prever necessidades, otimizando o tempo do usuário.",
        categoriaDaPergunta: "inteligencia-artificial-e-ferramentas-online"
    },
    {
        enunciado: "Ferramentas com IA como o ChatGPT podem ser utilizadas para:",
        arrayDeRespostas: [
            { conteudo: "Criar conteúdo, responder dúvidas e traduzir textos.", correto: true },
            { conteudo: "Jogar online com outros usuários.", correto: false },
            { conteudo: "Controlar exclusivamente dispositivos físicos.", correto: false },
            { conteudo: "Realizar chamadas telefônicas automaticamente.", correto: false }
        ],
        justificativa: "Ferramentas com IA podem oferecer suporte em diversas áreas como criação de conteúdo, traduções e atendimento ao usuário.",
        categoriaDaPergunta: "inteligencia-artificial-e-ferramentas-online"
    },
    {
        enunciado: "O que é a Internet?",
        arrayDeRespostas: [
            { conteudo: "Uma rede mundial de computadores interligados", correto: true },
            { conteudo: "Um programa de computador", correto: false },
            { conteudo: "Um tipo de hardware", correto: false },
            { conteudo: "Um sistema operacional", correto: false }
        ],
        justificativa: "A Internet é uma rede mundial que conecta diversos computadores permitindo a troca de informações.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "Qual das opções a seguir é um protocolo usado para acessar sites na Internet?",
        arrayDeRespostas: [
            { conteudo: "HTTP", correto: true },
            { conteudo: "FTP", correto: false },
            { conteudo: "SMTP", correto: false },
            { conteudo: "DNS", correto: false }
        ],
        justificativa: "HTTP é o protocolo principal para transferência de páginas web na Internet.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "O que é um navegador de Internet?",
        arrayDeRespostas: [
            { conteudo: "Um programa para editar imagens", correto: false },
            { conteudo: "Um software para acessar páginas e serviços web", correto: true },
            { conteudo: "Um tipo de cabo de rede", correto: false },
            { conteudo: "Um protocolo de comunicação", correto: false }
        ],
        justificativa: "Navegadores são softwares que permitem acessar e visualizar conteúdos na web, como Chrome e Firefox.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "O que significa o termo URL na Internet?",
        arrayDeRespostas: [
            { conteudo: "Uniform Resource Locator (Localizador Padrão de Recursos)", correto: true },
            { conteudo: "Universal Resource Link", correto: false },
            { conteudo: "User Resource Locator", correto: false },
            { conteudo: "Unique Resource Link", correto: false }
        ],
        justificativa: "URL é o endereço completo de um recurso na Internet, como uma página web.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "O que é um endereço IP?",
        arrayDeRespostas: [
            { conteudo: "Um identificador único de um dispositivo em uma rede", correto: true },
            { conteudo: "Um nome de usuário", correto: false },
            { conteudo: "Um tipo de navegador", correto: false },
            { conteudo: "Uma senha de acesso", correto: false }
        ],
        justificativa: "O endereço IP identifica unicamente um dispositivo conectado a uma rede, permitindo sua comunicação.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "O que é Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "Uma rede sem fio para conexão à Internet", correto: true },
            { conteudo: "Um tipo de cabo", correto: false },
            { conteudo: "Um programa de antivírus", correto: false },
            { conteudo: "Um navegador de internet", correto: false }
        ],
        justificativa: "Wi-Fi é a tecnologia que permite conectar dispositivos à Internet sem uso de cabos.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "Qual dos seguintes serviços utiliza a Internet para envio de mensagens?",
        arrayDeRespostas: [
            { conteudo: "E-mail", correto: true },
            { conteudo: "Telefone fixo", correto: false },
            { conteudo: "Televisão a cabo", correto: false },
            { conteudo: "Rádio FM", correto: false }
        ],
        justificativa: "E-mail é um serviço que utiliza a Internet para troca de mensagens eletrônicas.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "O que é um provedor de Internet (ISP)?",
        arrayDeRespostas: [
            { conteudo: "Empresa que oferece acesso à Internet para usuários", correto: true },
            { conteudo: "Um software para navegar na web", correto: false },
            { conteudo: "Um equipamento de rede", correto: false },
            { conteudo: "Um tipo de conexão sem fio", correto: false }
        ],
        justificativa: "O ISP é a empresa que fornece o serviço de conexão à Internet para residências e empresas.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "O que significa o termo 'download' na Internet?",
        arrayDeRespostas: [
            { conteudo: "Transferir dados da Internet para o computador", correto: true },
            { conteudo: "Enviar dados do computador para a Internet", correto: false },
            { conteudo: "Navegar em páginas da web", correto: false },
            { conteudo: "Excluir arquivos da nuvem", correto: false }
        ],
        justificativa: "Download é o ato de copiar arquivos da Internet para seu dispositivo local.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "Qual destes dispositivos é usado para conectar uma rede local à Internet?",
        arrayDeRespostas: [
            { conteudo: "Roteador", correto: true },
            { conteudo: "Impressora", correto: false },
            { conteudo: "Monitor", correto: false },
            { conteudo: "Scanner", correto: false }
        ],
        justificativa: "O roteador conecta diferentes dispositivos da rede local e também à Internet.",
        categoriaDaPergunta: "internet"
    },
    {
        enunciado: "O que é uma intranet?",
        arrayDeRespostas: [
            { conteudo: "Uma rede privada usada dentro de uma organização", correto: true },
            { conteudo: "Uma rede pública disponível para qualquer usuário", correto: false },
            { conteudo: "Um tipo de software antivírus", correto: false },
            { conteudo: "Um navegador de internet", correto: false }
        ],
        justificativa: "A intranet é uma rede interna restrita a usuários autorizados, geralmente usada em empresas.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "Qual a principal vantagem da intranet em uma empresa?",
        arrayDeRespostas: [
            { conteudo: "Permitir o acesso irrestrito à internet", correto: false },
            { conteudo: "Facilitar a comunicação interna e o compartilhamento de informações", correto: true },
            { conteudo: "Aumentar o consumo de dados externos", correto: false },
            { conteudo: "Substituir o sistema operacional dos computadores", correto: false }
        ],
        justificativa: "A intranet melhora a colaboração e o fluxo de informações dentro da organização.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "Qual protocolo é comumente usado para acessar páginas dentro de uma intranet?",
        arrayDeRespostas: [
            { conteudo: "HTTP", correto: true },
            { conteudo: "FTP", correto: false },
            { conteudo: "SMTP", correto: false },
            { conteudo: "POP3", correto: false }
        ],
        justificativa: "HTTP é o protocolo usado para acessar páginas web, tanto na internet quanto em intranets.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "A intranet é acessível para quem?",
        arrayDeRespostas: [
            { conteudo: "Qualquer pessoa com acesso à internet", correto: false },
            { conteudo: "Apenas usuários autorizados da organização", correto: true },
            { conteudo: "Somente administradores de rede", correto: false },
            { conteudo: "Usuários de redes públicas", correto: false }
        ],
        justificativa: "A intranet é uma rede privada que limita o acesso a usuários autorizados para garantir a segurança dos dados.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "Qual ferramenta pode ser usada para acessar a intranet remotamente de forma segura?",
        arrayDeRespostas: [
            { conteudo: "VPN (Rede Privada Virtual)", correto: true },
            { conteudo: "Wi-Fi público", correto: false },
            { conteudo: "Bluetooth", correto: false },
            { conteudo: "Ethernet", correto: false }
        ],
        justificativa: "A VPN cria um túnel seguro para acesso remoto à intranet protegendo os dados transmitidos.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "Qual desses recursos é comum em uma intranet empresarial?",
        arrayDeRespostas: [
            { conteudo: "Redes sociais abertas", correto: false },
            { conteudo: "Sistemas internos de gestão e comunicação", correto: true },
            { conteudo: "Jogos online", correto: false },
            { conteudo: "Sites públicos de notícias", correto: false }
        ],
        justificativa: "Intranets geralmente hospedam sistemas internos que auxiliam na gestão e comunicação da empresa.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "Por que a intranet é considerada mais segura que a internet para uso empresarial?",
        arrayDeRespostas: [
            { conteudo: "Porque tem acesso aberto para todos", correto: false },
            { conteudo: "Porque limita o acesso a usuários autorizados e pode ser protegida por firewalls", correto: true },
            { conteudo: "Porque não usa protocolos de comunicação", correto: false },
            { conteudo: "Porque é uma rede sem fio", correto: false }
        ],
        justificativa: "A intranet protege informações corporativas limitando acesso e utilizando tecnologias de segurança.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "Qual é o papel dos servidores em uma intranet?",
        arrayDeRespostas: [
            { conteudo: "Gerenciar recursos e disponibilizar serviços para os usuários da rede interna", correto: true },
            { conteudo: "Impedir o acesso à internet", correto: false },
            { conteudo: "Servir apenas para armazenamento externo", correto: false },
            { conteudo: "Controlar dispositivos móveis fora da rede", correto: false }
        ],
        justificativa: "Servidores centralizam e gerenciam dados, aplicações e serviços usados pelos colaboradores na intranet.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "Qual das opções a seguir NÃO é uma característica típica da intranet?",
        arrayDeRespostas: [
            { conteudo: "Rede restrita a usuários autorizados", correto: false },
            { conteudo: "Hospedagem de serviços internos", correto: false },
            { conteudo: "Acesso livre para qualquer pessoa", correto: true },
            { conteudo: "Comunicação corporativa interna", correto: false }
        ],
        justificativa: "A intranet não é acessível ao público geral, seu acesso é restrito para proteger informações da organização.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "Como a intranet pode ajudar na redução de custos em uma empresa?",
        arrayDeRespostas: [
            { conteudo: "Permitindo a compra de equipamentos pela internet", correto: false },
            { conteudo: "Facilitando a comunicação e o compartilhamento rápido de informações internas", correto: true },
            { conteudo: "Aumentando o uso de recursos externos", correto: false },
            { conteudo: "Excluindo a necessidade de conexão com a internet", correto: false }
        ],
        justificativa: "Com uma intranet eficiente, a empresa reduz gastos com comunicação externa e agiliza processos internos.",
        categoriaDaPergunta: "intranet"
    },
    {
        enunciado: "O que é uma extranet?",
        arrayDeRespostas: [
            { conteudo: "Uma rede privada usada apenas dentro de uma empresa", correto: false },
            { conteudo: "Uma rede que permite acesso controlado a parceiros externos", correto: true },
            { conteudo: "Uma rede pública como a internet", correto: false },
            { conteudo: "Um software antivírus", correto: false }
        ],
        justificativa: "A extranet é uma extensão da intranet que permite o acesso restrito a usuários externos autorizados, como parceiros e fornecedores.",
        categoriaDaPergunta: "extranet"
    },
    {
        enunciado: "Qual a principal diferença entre intranet e extranet?",
        arrayDeRespostas: [
            { conteudo: "Intranet é pública; extranet é privada", correto: false },
            { conteudo: "Intranet é interna; extranet permite acesso externo controlado", correto: true },
            { conteudo: "Intranet usa Wi-Fi; extranet usa cabos", correto: false },
            { conteudo: "Intranet é software; extranet é hardware", correto: false }
        ],
        justificativa: "A intranet é uma rede interna, enquanto a extranet permite acesso controlado de usuários externos.",
        categoriaDaPergunta: "extranet"
    },
    {
        enunciado: "Quais usuários normalmente acessam uma extranet?",
        arrayDeRespostas: [
            { conteudo: "Usuários anônimos da internet", correto: false },
            { conteudo: "Funcionários da empresa apenas", correto: false },
            { conteudo: "Parceiros, fornecedores e clientes autorizados", correto: true },
            { conteudo: "Qualquer usuário sem restrição", correto: false }
        ],
        justificativa: "A extranet é destinada a usuários externos que precisam de acesso limitado a recursos da empresa.",
        categoriaDaPergunta: "extranet"
    },
    {
        enunciado: "Qual tecnologia é comumente usada para garantir a segurança no acesso à extranet?",
        arrayDeRespostas: [
            { conteudo: "Firewall", correto: false },
            { conteudo: "VPN (Rede Privada Virtual)", correto: true },
            { conteudo: "Bluetooth", correto: false },
            { conteudo: "Wi-Fi público", correto: false }
        ],
        justificativa: "VPNs são usadas para criar conexões seguras entre usuários externos e a rede interna da empresa.",
        categoriaDaPergunta: "extranet"
    },
    {
        enunciado: "Um benefício da extranet para as empresas é:",
        arrayDeRespostas: [
            { conteudo: "Reduzir o acesso à informação para todos", correto: false },
            { conteudo: "Melhorar a colaboração com parceiros externos", correto: true },
            { conteudo: "Eliminar a necessidade de redes internas", correto: false },
            { conteudo: "Permitir acesso público irrestrito aos sistemas da empresa", correto: false }
        ],
        justificativa: "A extranet facilita a comunicação e o trabalho conjunto com parceiros, clientes e fornecedores, mantendo o controle de acesso.",
        categoriaDaPergunta: "extranet"
    },
    {
        enunciado: "O que é um firewall em uma rede de computadores?",
        arrayDeRespostas: [
            { conteudo: "Um dispositivo que controla o tráfego de dados e protege a rede", correto: true },
            { conteudo: "Um programa para criar backups", correto: false },
            { conteudo: "Um tipo de cabo de rede", correto: false },
            { conteudo: "Um software para edição de imagens", correto: false }
        ],
        justificativa: "Firewalls monitoram e filtram o tráfego de rede para impedir acessos não autorizados.",
        categoriaDaPergunta: "seguranca-em-redes"
    },
    {
        enunciado: "O que significa a sigla VPN em segurança de redes?",
        arrayDeRespostas: [
            { conteudo: "Virtual Private Network (Rede Privada Virtual)", correto: true },
            { conteudo: "Very Private Network", correto: false },
            { conteudo: "Visual Private Network", correto: false },
            { conteudo: "Virtual Public Network", correto: false }
        ],
        justificativa: "VPN cria uma conexão segura e criptografada para proteger dados transmitidos pela rede.",
        categoriaDaPergunta: "seguranca-em-redes"
    },
    {
        enunciado: "Qual é o principal objetivo do uso de criptografia em redes?",
        arrayDeRespostas: [
            { conteudo: "Aumentar a velocidade da rede", correto: false },
            { conteudo: "Proteger a confidencialidade e integridade dos dados", correto: true },
            { conteudo: "Reduzir o número de dispositivos conectados", correto: false },
            { conteudo: "Melhorar a qualidade do sinal Wi-Fi", correto: false }
        ],
        justificativa: "A criptografia transforma os dados em formato ilegível para garantir sua segurança durante a transmissão.",
        categoriaDaPergunta: "seguranca-em-redes"
    },
    {
        enunciado: "O que é um ataque DoS (Denial of Service)?",
        arrayDeRespostas: [
            { conteudo: "Um ataque que sobrecarrega um sistema para torná-lo indisponível", correto: true },
            { conteudo: "Um vírus que infecta arquivos do sistema", correto: false },
            { conteudo: "Um software legítimo para proteção de rede", correto: false },
            { conteudo: "Uma atualização de segurança", correto: false }
        ],
        justificativa: "Ataques DoS têm como objetivo impedir o funcionamento normal de um serviço ao sobrecarregá-lo com requisições.",
        categoriaDaPergunta: "seguranca-em-redes"
    },
    {
        enunciado: "Qual prática contribui para aumentar a segurança em uma rede Wi-Fi doméstica?",
        arrayDeRespostas: [
            { conteudo: "Deixar o Wi-Fi aberto para todos os dispositivos", correto: false },
            { conteudo: "Utilizar senhas fortes e criptografia WPA2 ou superior", correto: true },
            { conteudo: "Desativar o firewall do roteador", correto: false },
            { conteudo: "Usar o nome padrão da rede (SSID)", correto: false }
        ],
        justificativa: "Utilizar senhas fortes e criptografia adequada protege a rede contra acessos não autorizados.",
        categoriaDaPergunta: "seguranca-em-redes"
    },
    {
        enunciado: "Qual a principal função da Internet?",
        arrayDeRespostas: [
            { conteudo: "Conectar computadores em uma rede global para troca de informações", correto: true },
            { conteudo: "Criar redes internas em empresas", correto: false },
            { conteudo: "Servir exclusivamente para envio de e-mails", correto: false },
            { conteudo: "Armazenar arquivos localmente no computador", correto: false }
        ],
        justificativa: "A Internet conecta diversos computadores ao redor do mundo, permitindo comunicação e compartilhamento de dados.",
        categoriaDaPergunta: "introducao-sobre-internet-e-intranet"
    },
    {
        enunciado: "O que é uma Intranet?",
        arrayDeRespostas: [
            { conteudo: "Uma rede privada utilizada dentro de uma organização", correto: true },
            { conteudo: "Um tipo de navegador de internet", correto: false },
            { conteudo: "Uma rede aberta para qualquer usuário", correto: false },
            { conteudo: "Um protocolo de segurança", correto: false }
        ],
        justificativa: "A Intranet é uma rede privada que permite a comunicação e o compartilhamento de informações internas de uma empresa.",
        categoriaDaPergunta: "introducao-sobre-internet-e-intranet"
    },
    {
        enunciado: "Qual é a diferença entre Internet e Intranet?",
        arrayDeRespostas: [
            { conteudo: "Internet é pública e Intranet é privada", correto: true },
            { conteudo: "Internet é mais lenta que Intranet", correto: false },
            { conteudo: "Internet só funciona via Wi-Fi e Intranet por cabo", correto: false },
            { conteudo: "Internet é um software e Intranet é hardware", correto: false }
        ],
        justificativa: "A Internet é acessível publicamente, enquanto a Intranet é uma rede restrita aos usuários de uma organização.",
        categoriaDaPergunta: "introducao-sobre-internet-e-intranet"
    },
    {
        enunciado: "Qual tecnologia permite o acesso seguro remoto a uma Intranet?",
        arrayDeRespostas: [
            { conteudo: "VPN (Rede Privada Virtual)", correto: true },
            { conteudo: "Bluetooth", correto: false },
            { conteudo: "HTTP", correto: false },
            { conteudo: "FTP", correto: false }
        ],
        justificativa: "VPN permite que usuários acessem a Intranet de forma segura, mesmo estando fora da rede local.",
        categoriaDaPergunta: "introducao-sobre-internet-e-intranet"
    },
    {
        enunciado: "Qual dos exemplos abaixo é um serviço comum oferecido em uma Intranet?",
        arrayDeRespostas: [
            { conteudo: "E-mail corporativo", correto: true },
            { conteudo: "Facebook", correto: false },
            { conteudo: "Google", correto: false },
            { conteudo: "YouTube", correto: false }
        ],
        justificativa: "E-mails corporativos são normalmente acessados dentro de redes internas como a Intranet.",
        categoriaDaPergunta: "introducao-sobre-internet-e-intranet"
    },
    {
        enunciado: "O que é organização da informação?",
        arrayDeRespostas: [
            { conteudo: "Processo de estruturar e classificar dados para facilitar o acesso", correto: true },
            { conteudo: "Armazenar dados sem nenhuma ordem", correto: false },
            { conteudo: "Exclusivamente a criação de backups", correto: false },
            { conteudo: "O uso de softwares de edição de texto", correto: false }
        ],
        justificativa: "Organizar a informação permite que dados sejam facilmente encontrados e utilizados.",
        categoriaDaPergunta: "conceitos-fundamentais"
    },
    {
        enunciado: "Qual é o objetivo do gerenciamento de informações?",
        arrayDeRespostas: [
            { conteudo: "Controlar e garantir que as informações estejam disponíveis, corretas e seguras", correto: true },
            { conteudo: "Excluir dados antigos automaticamente", correto: false },
            { conteudo: "Impedir o acesso de todos aos dados", correto: false },
            { conteudo: "Armazenar informações em papel", correto: false }
        ],
        justificativa: "Gerenciar informações envolve planejamento, controle e segurança para uso eficiente dos dados.",
        categoriaDaPergunta: "conceitos-fundamentais"
    },
    {
        enunciado: "Qual dos seguintes é um exemplo de ferramenta para organização da informação?",
        arrayDeRespostas: [
            { conteudo: "Sistemas de gerenciamento de banco de dados (SGBD)", correto: true },
            { conteudo: "Antivírus", correto: false },
            { conteudo: "Navegador de internet", correto: false },
            { conteudo: "Editor de imagens", correto: false }
        ],
        justificativa: "SGBDs são utilizados para armazenar, organizar e recuperar informações de forma eficiente.",
        categoriaDaPergunta: "conceitos-fundamentais"
    },
    {
        enunciado: "Por que a segurança da informação é importante no gerenciamento de dados?",
        arrayDeRespostas: [
            { conteudo: "Para proteger dados contra acessos não autorizados e perda de integridade", correto: true },
            { conteudo: "Para garantir que os dados nunca sejam usados", correto: false },
            { conteudo: "Para dificultar o acesso dos usuários", correto: false },
            { conteudo: "Para acelerar a transmissão de dados na internet", correto: false }
        ],
        justificativa: "Garantir segurança protege a confidencialidade, integridade e disponibilidade dos dados.",
        categoriaDaPergunta: "conceitos-fundamentais"
    },
    {
        enunciado: "O que é metadado em gerenciamento de informações?",
        arrayDeRespostas: [
            { conteudo: "Informação que descreve outras informações, facilitando sua organização", correto: true },
            { conteudo: "Um tipo de dado armazenado em papel", correto: false },
            { conteudo: "Software para edição de textos", correto: false },
            { conteudo: "Um protocolo de rede", correto: false }
        ],
        justificativa: "Metadados fornecem detalhes sobre dados, como autor, data de criação e formato, facilitando a busca e o gerenciamento.",
        categoriaDaPergunta: "conceitos-fundamentais"
    },
    {
        enunciado: "O que é gestão documental?",
        arrayDeRespostas: [
            { conteudo: "Processo de administrar documentos desde sua criação até sua destinação final", correto: true },
            { conteudo: "Organização apenas de documentos eletrônicos", correto: false },
            { conteudo: "Criação de documentos em papel", correto: false },
            { conteudo: "Armazenamento de dados sem controle", correto: false }
        ],
        justificativa: "Gestão documental envolve o controle eficiente dos documentos para garantir acessibilidade e segurança.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "Qual a importância da gestão documental para as organizações?",
        arrayDeRespostas: [
            { conteudo: "Facilitar o acesso e preservação da informação e garantir conformidade legal", correto: true },
            { conteudo: "Reduzir o número de funcionários", correto: false },
            { conteudo: "Aumentar o uso de papel", correto: false },
            { conteudo: "Evitar a criação de documentos", correto: false }
        ],
        justificativa: "Uma boa gestão documental melhora a eficiência e atende às exigências legais e regulatórias.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "O que significa digitalização de documentos?",
        arrayDeRespostas: [
            { conteudo: "Converter documentos físicos em formato digital", correto: true },
            { conteudo: "Criar documentos escritos à mão", correto: false },
            { conteudo: "Excluir documentos antigos", correto: false },
            { conteudo: "Organizar documentos em pastas físicas", correto: false }
        ],
        justificativa: "Digitalizar documentos facilita o armazenamento, acesso e preservação das informações.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "Qual é um benefício do uso de sistemas eletrônicos para gestão documental?",
        arrayDeRespostas: [
            { conteudo: "Melhor controle, rapidez no acesso e segurança dos documentos", correto: true },
            { conteudo: "Maior risco de perda de documentos", correto: false },
            { conteudo: "Aumento do uso de papel", correto: false },
            { conteudo: "Dificuldade para localizar documentos", correto: false }
        ],
        justificativa: "Sistemas eletrônicos otimizam o gerenciamento documental, facilitando o controle e acesso rápido.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "O que é o ciclo de vida de um documento?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de fases que um documento percorre desde a criação até o descarte", correto: true },
            { conteudo: "Período em que um documento fica escondido", correto: false },
            { conteudo: "Tempo que um documento demora para ser criado", correto: false },
            { conteudo: "Duração da impressão de um documento", correto: false }
        ],
        justificativa: "O ciclo de vida documenta as etapas pelas quais o documento passa, facilitando sua gestão adequada.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "Qual é a função da indexação em gestão documental?",
        arrayDeRespostas: [
            { conteudo: "Atribuir palavras-chave para facilitar a busca dos documentos", correto: true },
            { conteudo: "Excluir documentos desnecessários", correto: false },
            { conteudo: "Organizar documentos em arquivos físicos", correto: false },
            { conteudo: "Criar documentos novos automaticamente", correto: false }
        ],
        justificativa: "A indexação permite a localização rápida dos documentos por meio de palavras-chave ou tags.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "O que é arquivamento eletrônico?",
        arrayDeRespostas: [
            { conteudo: "Guardar documentos em formato digital com organização e segurança", correto: true },
            { conteudo: "Imprimir documentos para arquivar", correto: false },
            { conteudo: "Enviar documentos por e-mail", correto: false },
            { conteudo: "Destruir documentos antigos", correto: false }
        ],
        justificativa: "O arquivamento eletrônico possibilita o armazenamento digital seguro e organizado dos documentos.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "Por que a segurança da informação é importante na gestão documental?",
        arrayDeRespostas: [
            { conteudo: "Para proteger documentos contra acessos não autorizados e perda de dados", correto: true },
            { conteudo: "Para dificultar o acesso dos usuários autorizados", correto: false },
            { conteudo: "Para aumentar o consumo de espaço em disco", correto: false },
            { conteudo: "Para evitar a digitalização de documentos", correto: false }
        ],
        justificativa: "A segurança garante a integridade, confidencialidade e disponibilidade dos documentos gerenciados.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "O que é um documento digital certificado?",
        arrayDeRespostas: [
            { conteudo: "Um documento com assinatura digital que garante autenticidade e integridade", correto: true },
            { conteudo: "Um documento impresso com carimbo", correto: false },
            { conteudo: "Um arquivo PDF comum", correto: false },
            { conteudo: "Um documento enviado por e-mail", correto: false }
        ],
        justificativa: "A certificação digital assegura que o documento não foi alterado e é autêntico.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "Qual legislação brasileira trata da gestão documental e arquivística?",
        arrayDeRespostas: [
            { conteudo: "Lei nº 12.527/2011 (Lei de Acesso à Informação)", correto: false },
            { conteudo: "Lei nº 8.159/1991 (Lei de Arquivos)", correto: true },
            { conteudo: "Marco Civil da Internet", correto: false },
            { conteudo: "Lei Geral de Proteção de Dados (LGPD)", correto: false }
        ],
        justificativa: "A Lei nº 8.159/1991 estabelece normas sobre gestão documental e arquivos públicos e privados no Brasil.",
        categoriaDaPergunta: "gestao-documental"
    },
    {
        enunciado: "O que é o princípio da proveniência na arquivística?",
        arrayDeRespostas: [
            { conteudo: "Agrupar documentos conforme a origem ou produtor", correto: true },
            { conteudo: "Separar documentos por assunto", correto: false },
            { conteudo: "Eliminar documentos duplicados", correto: false },
            { conteudo: "Organizar documentos pela data de criação", correto: false }
        ],
        justificativa: "O princípio da proveniência determina que documentos sejam mantidos agrupados segundo sua origem para preservar seu contexto.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "Qual é o objetivo do princípio da organicidade?",
        arrayDeRespostas: [
            { conteudo: "Manter a integridade dos documentos conforme a estrutura da organização", correto: true },
            { conteudo: "Separar documentos por tipo de papel", correto: false },
            { conteudo: "Destruir documentos antigos", correto: false },
            { conteudo: "Dividir arquivos por usuário", correto: false }
        ],
        justificativa: "A organicidade assegura que documentos sejam organizados conforme a forma natural como foram produzidos pela entidade.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "O que diz o princípio da integridade?",
        arrayDeRespostas: [
            { conteudo: "Os documentos devem ser mantidos completos e sem alterações indevidas", correto: true },
            { conteudo: "Os documentos devem ser separados para facilitar o acesso", correto: false },
            { conteudo: "Os documentos devem ser destruídos após um período", correto: false },
            { conteudo: "Os documentos devem ser digitalizados", correto: false }
        ],
        justificativa: "Integridade garante que o conteúdo original dos documentos seja preservado sem modificações não autorizadas.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "O princípio da publicidade se refere a:",
        arrayDeRespostas: [
            { conteudo: "Garantir o acesso público aos documentos arquivísticos, respeitando restrições legais", correto: true },
            { conteudo: "Impedir qualquer acesso aos documentos", correto: false },
            { conteudo: "Manter documentos em sigilo absoluto", correto: false },
            { conteudo: "Divulgar documentos sem restrições", correto: false }
        ],
        justificativa: "A publicidade permite que os documentos sejam acessados conforme a legislação, garantindo transparência e controle.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "O que significa o princípio da originalidade?",
        arrayDeRespostas: [
            { conteudo: "Conservar os documentos em sua forma original e não em cópias", correto: true },
            { conteudo: "Criar cópias de todos os documentos", correto: false },
            { conteudo: "Organizar documentos por tipo", correto: false },
            { conteudo: "Separar documentos por data", correto: false }
        ],
        justificativa: "Originalidade preconiza que somente os documentos autênticos e originais devem ser preservados como prova documental.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "Qual é a finalidade do princípio da economia na arquivística?",
        arrayDeRespostas: [
            { conteudo: "Otimizar recursos na organização, preservação e acesso aos documentos", correto: true },
            { conteudo: "Eliminar documentos importantes para economizar espaço", correto: false },
            { conteudo: "Aumentar os custos com armazenamento", correto: false },
            { conteudo: "Duplicar documentos para segurança", correto: false }
        ],
        justificativa: "O princípio da economia busca eficiência na gestão documental, evitando desperdício de recursos.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "O princípio da identidade arquivística determina que:",
        arrayDeRespostas: [
            { conteudo: "Cada documento deve ser único e identificável de forma clara", correto: true },
            { conteudo: "Os documentos podem ser misturados sem controle", correto: false },
            { conteudo: "Documentos podem ser alterados para corrigir erros", correto: false },
            { conteudo: "Arquivar apenas documentos recentes", correto: false }
        ],
        justificativa: "Esse princípio garante que documentos sejam preservados com características que permitam sua identificação e autenticidade.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "O princípio da inalterabilidade refere-se a:",
        arrayDeRespostas: [
            { conteudo: "Os documentos não devem ser modificados após sua produção", correto: true },
            { conteudo: "Documentos devem ser constantemente editados", correto: false },
            { conteudo: "Arquivar documentos em diferentes formatos", correto: false },
            { conteudo: "Permitir o acesso irrestrito a todos", correto: false }
        ],
        justificativa: "Inalterabilidade protege a autenticidade documental, proibindo alterações não autorizadas.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "O princípio da funcionalidade na arquivística significa:",
        arrayDeRespostas: [
            { conteudo: "Organizar documentos segundo a função administrativa que os gerou", correto: true },
            { conteudo: "Separar documentos por cor", correto: false },
            { conteudo: "Destruir documentos inúteis", correto: false },
            { conteudo: "Guardar documentos em locais diferentes", correto: false }
        ],
        justificativa: "Funcionalidade orienta a organização documental conforme as atividades e funções da entidade produtora.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "O que é o princípio da conservação?",
        arrayDeRespostas: [
            { conteudo: "Garantir a preservação física e digital dos documentos para uso futuro", correto: true },
            { conteudo: "Eliminar documentos antigos", correto: false },
            { conteudo: "Criar novos documentos constantemente", correto: false },
            { conteudo: "Limpar documentos para reaproveitar papel", correto: false }
        ],
        justificativa: "Conservação visa manter os documentos em condições que permitam seu uso e consulta ao longo do tempo.",
        categoriaDaPergunta: "principios-arquivisticos"
    },
    {
        enunciado: "Quais são as principais fases da gestão documental?",
        arrayDeRespostas: [
            { conteudo: "Criação, uso, avaliação, arquivamento e destinação", correto: true },
            { conteudo: "Impressão, digitalização e exclusão", correto: false },
            { conteudo: "Compra, venda e descarte", correto: false },
            { conteudo: "Armazenamento e backup apenas", correto: false }
        ],
        justificativa: "A gestão documental envolve todas essas fases para garantir o controle e preservação dos documentos.",
        categoriaDaPergunta: "fases-da-gestao-documental-e-niveis-de-aplicacao"
    },
    {
        enunciado: "O que acontece na fase de avaliação documental?",
        arrayDeRespostas: [
            { conteudo: "Determina quais documentos devem ser preservados ou descartados", correto: true },
            { conteudo: "Os documentos são criados", correto: false },
            { conteudo: "Documentos são digitalizados", correto: false },
            { conteudo: "Os documentos são impressos", correto: false }
        ],
        justificativa: "Na avaliação, analisa-se o valor dos documentos para definir sua destinação correta.",
        categoriaDaPergunta: "fases-da-gestao-documental-e-niveis-de-aplicacao"
    },
    {
        enunciado: "O arquivamento é uma fase da gestão documental que consiste em:",
        arrayDeRespostas: [
            { conteudo: "Organizar e guardar documentos para facilitar o acesso e preservação", correto: true },
            { conteudo: "Excluir documentos sem critério", correto: false },
            { conteudo: "Criar novos documentos", correto: false },
            { conteudo: "Enviar documentos por e-mail", correto: false }
        ],
        justificativa: "O arquivamento é fundamental para manter os documentos acessíveis e preservados adequadamente.",
        categoriaDaPergunta: "fases-da-gestao-documental-e-niveis-de-aplicacao"
    },
    {
        enunciado: "Quais são os níveis de aplicação da gestão documental?",
        arrayDeRespostas: [
            { conteudo: "Tático, estratégico e operacional", correto: true },
            { conteudo: "Local, regional e global", correto: false },
            { conteudo: "Simples, médio e avançado", correto: false },
            { conteudo: "Pessoal, público e privado", correto: false }
        ],
        justificativa: "A gestão documental é aplicada em diferentes níveis para atender necessidades variadas da organização.",
        categoriaDaPergunta: "fases-da-gestao-documental-e-niveis-de-aplicacao"
    },
    {
        enunciado: "Na fase de destinação documental, o que é feito com os documentos?",
        arrayDeRespostas: [
            { conteudo: "São eliminados ou transferidos para arquivo permanente", correto: true },
            { conteudo: "São criados novos documentos", correto: false },
            { conteudo: "São digitalizados para consulta imediata", correto: false },
            { conteudo: "São distribuídos para todos os funcionários", correto: false }
        ],
        justificativa: "A destinação define o descarte ou preservação definitiva dos documentos conforme sua relevância.",
        categoriaDaPergunta: "fases-da-gestao-documental-e-niveis-de-aplicacao"
    },
    {
        enunciado: "O que são modelos de gestão documental?",
        arrayDeRespostas: [
            { conteudo: "Conjuntos de diretrizes e práticas para organizar e controlar documentos", correto: true },
            { conteudo: "Softwares para edição de documentos", correto: false },
            { conteudo: "Tipos de documentos impressos", correto: false },
            { conteudo: "Métodos de criação de documentos", correto: false }
        ],
        justificativa: "Modelos definem como a gestão documental deve ser estruturada para garantir eficiência e segurança.",
        categoriaDaPergunta: "modelos-de-gestao-documental-e-gestao-de-arquivos-correntes"
    },
    {
        enunciado: "O que são arquivos correntes?",
        arrayDeRespostas: [
            { conteudo: "Documentos em uso ativo e com frequência de acesso", correto: true },
            { conteudo: "Documentos que já foram descartados", correto: false },
            { conteudo: "Documentos digitais somente", correto: false },
            { conteudo: "Documentos arquivados para preservação definitiva", correto: false }
        ],
        justificativa: "Arquivos correntes são documentos necessários para as atividades diárias da organização.",
        categoriaDaPergunta: "modelos-de-gestao-documental-e-gestao-de-arquivos-correntes"
    },
    {
        enunciado: "Qual a importância da gestão dos arquivos correntes?",
        arrayDeRespostas: [
            { conteudo: "Garantir que documentos essenciais estejam disponíveis para uso imediato", correto: true },
            { conteudo: "Arquivar documentos para uso futuro apenas", correto: false },
            { conteudo: "Eliminar documentos sem critério", correto: false },
            { conteudo: "Transformar documentos físicos em digitais", correto: false }
        ],
        justificativa: "A gestão adequada dos arquivos correntes facilita a eficiência operacional e a tomada de decisões.",
        categoriaDaPergunta: "modelos-de-gestao-documental-e-gestao-de-arquivos-correntes"
    },
    {
        enunciado: "Qual modelo de gestão documental prioriza o ciclo de vida do documento?",
        arrayDeRespostas: [
            { conteudo: "Modelo funcional", correto: true },
            { conteudo: "Modelo físico", correto: false },
            { conteudo: "Modelo eletrônico", correto: false },
            { conteudo: "Modelo estrutural", correto: false }
        ],
        justificativa: "O modelo funcional organiza os documentos conforme suas funções e ciclo de vida na organização.",
        categoriaDaPergunta: "modelos-de-gestao-documental-e-gestao-de-arquivos-correntes"
    },
    {
        enunciado: "Quais documentos normalmente fazem parte dos arquivos correntes?",
        arrayDeRespostas: [
            { conteudo: "Relatórios, contratos em uso e correspondências recentes", correto: true },
            { conteudo: "Documentos históricos e registros antigos", correto: false },
            { conteudo: "Documentos destruídos", correto: false },
            { conteudo: "Documentos descartados", correto: false }
        ],
        justificativa: "Arquivos correntes contêm documentos ainda relevantes para as operações diárias da organização.",
        categoriaDaPergunta: "modelos-de-gestao-documental-e-gestao-de-arquivos-correntes"
    },
    {
        enunciado: "O que é o ciclo de vida da informação?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de fases pelas quais a informação passa desde sua criação até sua eliminação", correto: true },
            { conteudo: "Processo de backup de dados", correto: false },
            { conteudo: "Apenas a fase de arquivamento de documentos", correto: false },
            { conteudo: "Método para criar novos dados", correto: false }
        ],
        justificativa: "O ciclo de vida da informação envolve todas as etapas para garantir o uso e preservação adequados dos dados.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "Qual é a primeira fase do ciclo de vida da informação?",
        arrayDeRespostas: [
            { conteudo: "Criação ou geração da informação", correto: true },
            { conteudo: "Avaliação", correto: false },
            { conteudo: "Arquivamento", correto: false },
            { conteudo: "Descarte", correto: false }
        ],
        justificativa: "A informação começa sua vida quando é criada ou capturada pela organização.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "Na fase de uso da informação, o que ocorre?",
        arrayDeRespostas: [
            { conteudo: "A informação é consultada e utilizada para tomada de decisões", correto: true },
            { conteudo: "A informação é descartada imediatamente", correto: false },
            { conteudo: "A informação é armazenada permanentemente", correto: false },
            { conteudo: "A informação é digitalizada", correto: false }
        ],
        justificativa: "Durante o uso, a informação tem valor prático e é acessada para apoiar atividades da organização.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "O que ocorre na fase de avaliação do ciclo de vida da informação?",
        arrayDeRespostas: [
            { conteudo: "Determina-se se a informação deve ser preservada, arquivada ou descartada", correto: true },
            { conteudo: "A informação é criada", correto: false },
            { conteudo: "A informação é copiada", correto: false },
            { conteudo: "A informação é criptografada", correto: false }
        ],
        justificativa: "A avaliação é crucial para decidir o destino da informação baseado em seu valor e relevância.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "Qual é a fase final do ciclo de vida da informação?",
        arrayDeRespostas: [
            { conteudo: "Descarte ou eliminação segura da informação", correto: true },
            { conteudo: "Criação de novos documentos", correto: false },
            { conteudo: "Indexação da informação", correto: false },
            { conteudo: "Publicação da informação", correto: false }
        ],
        justificativa: "Ao final do ciclo, a informação que não possui mais valor é descartada de forma segura para proteger dados sensíveis.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "Qual fase do ciclo de vida da informação envolve o armazenamento dos dados para uso futuro?",
        arrayDeRespostas: [
            { conteudo: "Arquivamento", correto: true },
            { conteudo: "Criação", correto: false },
            { conteudo: "Descarte", correto: false },
            { conteudo: "Avaliação", correto: false }
        ],
        justificativa: "O arquivamento garante que a informação seja preservada para consultas futuras ou obrigações legais.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "Por que a gestão do ciclo de vida da informação é importante?",
        arrayDeRespostas: [
            { conteudo: "Para garantir eficiência, segurança e conformidade legal no uso dos dados", correto: true },
            { conteudo: "Para dificultar o acesso à informação", correto: false },
            { conteudo: "Para aumentar o volume de dados armazenados", correto: false },
            { conteudo: "Para excluir toda informação rapidamente", correto: false }
        ],
        justificativa: "Gerenciar corretamente o ciclo da informação evita perda de dados importantes e mantém a organização em conformidade com leis.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "Qual fase pode envolver a digitalização de documentos físicos no ciclo de vida da informação?",
        arrayDeRespostas: [
            { conteudo: "Criação ou captura", correto: true },
            { conteudo: "Descarte", correto: false },
            { conteudo: "Avaliação", correto: false },
            { conteudo: "Publicação", correto: false }
        ],
        justificativa: "Digitalizar documentos é uma forma de capturar e criar informações em formato digital para facilitar o acesso.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "O que significa preservação da informação no ciclo de vida?",
        arrayDeRespostas: [
            { conteudo: "Garantir que a informação seja mantida em condições adequadas para uso futuro", correto: true },
            { conteudo: "Excluir informações antigas", correto: false },
            { conteudo: "Criar novos documentos constantemente", correto: false },
            { conteudo: "Aumentar o número de cópias desnecessárias", correto: false }
        ],
        justificativa: "Preservar a informação assegura sua integridade e disponibilidade ao longo do tempo.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "Como a avaliação influencia na destinação da informação?",
        arrayDeRespostas: [
            { conteudo: "A avaliação determina se a informação será mantida, transferida ou descartada", correto: true },
            { conteudo: "A avaliação cria novos documentos", correto: false },
            { conteudo: "A avaliação digitaliza todos os documentos", correto: false },
            { conteudo: "A avaliação elimina o acesso à informação", correto: false }
        ],
        justificativa: "Uma avaliação adequada garante decisões corretas sobre o destino da informação conforme seu valor.",
        categoriaDaPergunta: "ciclo-de-vida-da-informacao"
    },
    {
        enunciado: "O que é um sistema de informação?",
        arrayDeRespostas: [
            { conteudo: "Conjunto organizado de recursos para coletar, processar, armazenar e distribuir informações", correto: true },
            { conteudo: "Um programa de edição de texto", correto: false },
            { conteudo: "Um tipo de hardware para redes", correto: false },
            { conteudo: "Um banco de dados sem estrutura", correto: false }
        ],
        justificativa: "Sistemas de informação integram pessoas, processos e tecnologia para apoiar decisões e operações.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "Qual é o principal objetivo de um sistema de informação?",
        arrayDeRespostas: [
            { conteudo: "Apoiar a tomada de decisões e a gestão organizacional", correto: true },
            { conteudo: "Substituir completamente os funcionários", correto: false },
            { conteudo: "Apenas armazenar documentos", correto: false },
            { conteudo: "Criar redes sociais", correto: false }
        ],
        justificativa: "Sistemas de informação ajudam organizações a processar dados e gerar conhecimento útil para decisões.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "Qual componente NÃO faz parte de um sistema de informação?",
        arrayDeRespostas: [
            { conteudo: "Máquina de café", correto: true },
            { conteudo: "Hardware", correto: false },
            { conteudo: "Software", correto: false },
            { conteudo: "Pessoas", correto: false }
        ],
        justificativa: "Máquina de café não é um componente do sistema de informação, que envolve hardware, software, pessoas e processos.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "O que é um banco de dados dentro de um sistema de informação?",
        arrayDeRespostas: [
            { conteudo: "Conjunto estruturado de dados armazenados para facilitar acesso e gerenciamento", correto: true },
            { conteudo: "Documento em papel", correto: false },
            { conteudo: "Software de edição de imagens", correto: false },
            { conteudo: "Rede social", correto: false }
        ],
        justificativa: "O banco de dados é onde os dados são armazenados e organizados para uso no sistema de informação.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "O que significa ERP em sistemas de informação?",
        arrayDeRespostas: [
            { conteudo: "Enterprise Resource Planning (Planejamento de Recursos Empresariais)", correto: true },
            { conteudo: "External Resource Process", correto: false },
            { conteudo: "Electronic Record Program", correto: false },
            { conteudo: "Enterprise Reporting Platform", correto: false }
        ],
        justificativa: "ERP é um sistema integrado que gerencia processos empresariais em várias áreas da organização.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "Qual é a função do software em um sistema de informação?",
        arrayDeRespostas: [
            { conteudo: "Executar processos para manipular dados e gerar informações", correto: true },
            { conteudo: "Criar redes físicas", correto: false },
            { conteudo: "Armazenar papel", correto: false },
            { conteudo: "Desligar computadores", correto: false }
        ],
        justificativa: "Software é responsável por processar dados e transformar em informações úteis dentro do sistema.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "O que caracteriza um sistema de informação gerencial (SIG)?",
        arrayDeRespostas: [
            { conteudo: "Sistema que apoia a tomada de decisões e o controle gerencial", correto: true },
            { conteudo: "Sistema para editar textos", correto: false },
            { conteudo: "Rede social corporativa", correto: false },
            { conteudo: "Sistema de armazenamento de imagens", correto: false }
        ],
        justificativa: "SIGs fornecem relatórios e informações para a gestão e planejamento das empresas.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "Qual é o papel das pessoas em um sistema de informação?",
        arrayDeRespostas: [
            { conteudo: "Usuários que interagem e utilizam o sistema para atingir objetivos", correto: true },
            { conteudo: "Apenas desenvolvedores de software", correto: false },
            { conteudo: "Apenas técnicos de hardware", correto: false },
            { conteudo: "Não têm papel importante", correto: false }
        ],
        justificativa: "As pessoas são fundamentais para operar, administrar e tirar proveito das informações geradas pelo sistema.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "O que é automação de processos em sistemas de informação?",
        arrayDeRespostas: [
            { conteudo: "Uso de tecnologia para executar tarefas repetitivas automaticamente", correto: true },
            { conteudo: "Execução manual de tarefas", correto: false },
            { conteudo: "Eliminação de processos", correto: false },
            { conteudo: "Armazenamento de documentos em papel", correto: false }
        ],
        justificativa: "Automatizar processos aumenta eficiência e reduz erros nas operações organizacionais.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "Como os sistemas de informação contribuem para a vantagem competitiva das empresas?",
        arrayDeRespostas: [
            { conteudo: "Melhorando a eficiência, a tomada de decisões e o atendimento ao cliente", correto: true },
            { conteudo: "Aumentando os custos operacionais", correto: false },
            { conteudo: "Dificultando a comunicação interna", correto: false },
            { conteudo: "Substituindo todos os funcionários", correto: false }
        ],
        justificativa: "Sistemas de informação permitem que as empresas sejam mais ágeis, eficientes e focadas no cliente.",
        categoriaDaPergunta: "sistemas-da-informacao"
    },
    {
        enunciado: "O que é segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de práticas para proteger dados contra acessos não autorizados, alterações e perdas", correto: true },
            { conteudo: "Uso de senhas simples", correto: false },
            { conteudo: "Compartilhar todas as informações da empresa", correto: false },
            { conteudo: "Excluir arquivos importantes", correto: false }
        ],
        justificativa: "Segurança da informação visa garantir a confidencialidade, integridade e disponibilidade dos dados.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "Qual das opções é um princípio básico da segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Confidencialidade, integridade e disponibilidade", correto: true },
            { conteudo: "Rapidez, acessibilidade e anonimato", correto: false },
            { conteudo: "Abertura, compartilhamento e exclusão", correto: false },
            { conteudo: "Publicação, alteração e exclusão", correto: false }
        ],
        justificativa: "Estes princípios formam a base para proteger os dados de forma eficaz.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "O que é um firewall?",
        arrayDeRespostas: [
            { conteudo: "Sistema que monitora e controla o tráfego de rede para proteger contra acessos indevidos", correto: true },
            { conteudo: "Um antivírus", correto: false },
            { conteudo: "Um tipo de malware", correto: false },
            { conteudo: "Software de edição de texto", correto: false }
        ],
        justificativa: "Firewall atua como uma barreira entre redes confiáveis e não confiáveis, controlando o acesso.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "Qual é a função da autenticação na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Verificar a identidade do usuário antes de conceder acesso", correto: true },
            { conteudo: "Apagar arquivos automaticamente", correto: false },
            { conteudo: "Permitir acesso irrestrito", correto: false },
            { conteudo: "Instalar software antivírus", correto: false }
        ],
        justificativa: "A autenticação garante que apenas usuários autorizados acessem sistemas e dados.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "O que é phishing?",
        arrayDeRespostas: [
            { conteudo: "Tentativa de enganar usuários para obter informações pessoais ou financeiras", correto: true },
            { conteudo: "Tipo de vírus de computador", correto: false },
            { conteudo: "Software de proteção", correto: false },
            { conteudo: "Atualização de sistema", correto: false }
        ],
        justificativa: "Phishing é uma forma de ataque que usa mensagens falsas para roubar dados sensíveis.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "O que significa criptografia na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Transformar dados em código para impedir acesso não autorizado", correto: true },
            { conteudo: "Deletar arquivos antigos", correto: false },
            { conteudo: "Copiar dados para backup", correto: false },
            { conteudo: "Compartilhar senhas", correto: false }
        ],
        justificativa: "A criptografia protege os dados ao codificá-los, tornando-os ilegíveis para quem não tem a chave.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "Qual é a importância do backup na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Garantir cópias dos dados para recuperação em caso de perda ou ataque", correto: true },
            { conteudo: "Excluir dados desnecessários", correto: false },
            { conteudo: "Compartilhar dados com todos", correto: false },
            { conteudo: "Desativar antivírus", correto: false }
        ],
        justificativa: "Backups são essenciais para restaurar informações após falhas, ataques ou acidentes.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "O que é um malware?",
        arrayDeRespostas: [
            { conteudo: "Software malicioso criado para causar danos ou acessar sistemas sem autorização", correto: true },
            { conteudo: "Programa de segurança", correto: false },
            { conteudo: "Arquivo de texto", correto: false },
            { conteudo: "Software legítimo", correto: false }
        ],
        justificativa: "Malware inclui vírus, worms, trojans e outros códigos que ameaçam a segurança dos sistemas.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "O que deve ser feito para manter a segurança de senhas?",
        arrayDeRespostas: [
            { conteudo: "Utilizar senhas fortes e únicas, e alterar periodicamente", correto: true },
            { conteudo: "Compartilhar senhas com colegas", correto: false },
            { conteudo: "Usar senhas simples e fáceis", correto: false },
            { conteudo: "Escrever senhas em papel exposto", correto: false }
        ],
        justificativa: "Senhas fortes e seguras ajudam a proteger contas contra acessos indevidos.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "O que é a política de segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de regras e diretrizes para proteger ativos de informação na organização", correto: true },
            { conteudo: "Lista de senhas usadas na empresa", correto: false },
            { conteudo: "Programa para criar documentos", correto: false },
            { conteudo: "Manual de uso do computador", correto: false }
        ],
        justificativa: "A política de segurança define responsabilidades e procedimentos para proteger as informações corporativas.",
        categoriaDaPergunta: "seguranca-da-informacao"
    },
    {
        enunciado: "O que é organização da informação?",
        arrayDeRespostas: [
            { conteudo: "Processo de estruturar e categorizar dados para facilitar o acesso e uso", correto: true },
            { conteudo: "Excluir dados antigos", correto: false },
            { conteudo: "Criar informações novas", correto: false },
            { conteudo: "Armazenar dados sem critério", correto: false }
        ],
        justificativa: "Organizar a informação torna sua recuperação e utilização mais eficientes.",
        categoriaDaPergunta: "dicas"
    },
    {
        enunciado: "Qual é a finalidade do gerenciamento da informação?",
        arrayDeRespostas: [
            { conteudo: "Controlar, proteger e garantir o uso adequado das informações na organização", correto: true },
            { conteudo: "Eliminar todas as informações após o uso", correto: false },
            { conteudo: "Criar informações para todos os setores", correto: false },
            { conteudo: "Ignorar o fluxo de informações", correto: false }
        ],
        justificativa: "O gerenciamento assegura que as informações sejam úteis, seguras e disponíveis quando necessário.",
        categoriaDaPergunta: "dicas"
    },
    {
        enunciado: "Quais são ferramentas comuns para organizar informações digitais?",
        arrayDeRespostas: [
            { conteudo: "Sistemas de gestão documental, bancos de dados e softwares de colaboração", correto: true },
            { conteudo: "Impressoras e scanners apenas", correto: false },
            { conteudo: "Planilhas de papel", correto: false },
            { conteudo: "Dispositivos de armazenamento externos sem sistema", correto: false }
        ],
        justificativa: "Essas ferramentas auxiliam na organização, controle e compartilhamento da informação.",
        categoriaDaPergunta: "dicas"
    },
    {
        enunciado: "O que é metadado na organização da informação?",
        arrayDeRespostas: [
            { conteudo: "Informação que descreve e contextualiza um dado ou documento", correto: true },
            { conteudo: "Dados em formato de texto", correto: false },
            { conteudo: "Arquivo digital corrompido", correto: false },
            { conteudo: "Documento impresso", correto: false }
        ],
        justificativa: "Metadados facilitam a localização, entendimento e gerenciamento dos dados armazenados.",
        categoriaDaPergunta: "dicas"
    },
    {
        enunciado: "Por que é importante definir políticas de gerenciamento da informação?",
        arrayDeRespostas: [
            { conteudo: "Para garantir que as informações sejam usadas corretamente e protegidas", correto: true },
            { conteudo: "Para dificultar o acesso aos dados", correto: false },
            { conteudo: "Para destruir informações importantes", correto: false },
            { conteudo: "Para criar documentos repetidos", correto: false }
        ],
        justificativa: "Políticas estabelecem normas e responsabilidades para assegurar a qualidade e segurança das informações.",
        categoriaDaPergunta: "dicas"
    },
    {
        enunciado: "O que é assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Um método eletrônico que garante a autenticidade e integridade de um documento digital", correto: true },
            { conteudo: "Uma assinatura feita à mão e digitalizada", correto: false },
            { conteudo: "Um tipo de senha para acessar e-mails", correto: false },
            { conteudo: "Um programa de edição de textos", correto: false }
        ],
        justificativa: "Assinatura digital utiliza criptografia para certificar a origem e evitar alterações em documentos digitais.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "Qual tecnologia é fundamental para a assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Criptografia de chave pública", correto: true },
            { conteudo: "Redes sociais", correto: false },
            { conteudo: "Bluetooth", correto: false },
            { conteudo: "Firewall", correto: false }
        ],
        justificativa: "A criptografia assimétrica é essencial para garantir segurança e autenticação na assinatura digital.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "O que a assinatura digital garante em um documento?",
        arrayDeRespostas: [
            { conteudo: "Autenticidade, integridade e não-repúdio", correto: true },
            { conteudo: "Somente a formatação do documento", correto: false },
            { conteudo: "Exclusivamente a confidencialidade", correto: false },
            { conteudo: "O conteúdo pode ser alterado livremente", correto: false }
        ],
        justificativa: "Ela certifica que o documento é legítimo, não foi alterado e que o autor não pode negar a autoria.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "Qual órgão brasileiro regula a validade jurídica da assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "ICP-Brasil (Infraestrutura de Chaves Públicas Brasileira)", correto: true },
            { conteudo: "ANVISA", correto: false },
            { conteudo: "ANATEL", correto: false },
            { conteudo: "IBAMA", correto: false }
        ],
        justificativa: "A ICP-Brasil é responsável por regulamentar e garantir a validade legal da assinatura digital no país.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "Qual é a diferença entre assinatura digital e assinatura eletrônica?",
        arrayDeRespostas: [
            { conteudo: "Assinatura digital usa criptografia e tem validade jurídica, enquanto assinatura eletrônica é mais simples e pode não ter validade legal", correto: true },
            { conteudo: "Assinatura eletrônica é sempre mais segura que digital", correto: false },
            { conteudo: "Assinatura digital não é usada em documentos oficiais", correto: false },
            { conteudo: "Assinatura eletrônica é feita somente à mão", correto: false }
        ],
        justificativa: "Assinatura digital oferece mais segurança e validade legal que a assinatura eletrônica comum.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "O que é certificado digital no contexto de assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Um arquivo eletrônico que comprova a identidade do assinante", correto: true },
            { conteudo: "Um documento impresso", correto: false },
            { conteudo: "Uma senha simples", correto: false },
            { conteudo: "Um tipo de vírus", correto: false }
        ],
        justificativa: "Certificado digital é como um RG eletrônico usado para validar a assinatura digital.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "Quais são os principais componentes da assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Chave privada do assinante e chave pública para verificação", correto: true },
            { conteudo: "Senha e nome do usuário", correto: false },
            { conteudo: "Arquivo PDF e senha", correto: false },
            { conteudo: "Imagem da assinatura manual", correto: false }
        ],
        justificativa: "A assinatura digital utiliza um par de chaves criptográficas para garantir segurança e autenticidade.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "O que é não-repúdio na assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Impossibilidade do assinante negar a autoria da assinatura", correto: true },
            { conteudo: "Alteração livre do documento", correto: false },
            { conteudo: "Assinatura feita em papel", correto: false },
            { conteudo: "Cópia de segurança do documento", correto: false }
        ],
        justificativa: "Não-repúdio assegura que o autor da assinatura não possa negar sua autoria posteriormente.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "Como a integridade do documento é garantida na assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Por meio de um hash criptográfico que detecta alterações", correto: true },
            { conteudo: "Pela formatação do texto", correto: false },
            { conteudo: "Por senha simples", correto: false },
            { conteudo: "Pelo nome do arquivo", correto: false }
        ],
        justificativa: "O hash é um código gerado a partir do conteúdo, e qualquer alteração no documento invalida a assinatura.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "Qual é a principal vantagem da assinatura digital em documentos eletrônicos?",
        arrayDeRespostas: [
            { conteudo: "Garantir segurança, validade jurídica e autenticidade sem uso de papel", correto: true },
            { conteudo: "Imprimir documentos rapidamente", correto: false },
            { conteudo: "Compartilhar documentos em redes sociais", correto: false },
            { conteudo: "Evitar o uso de senhas", correto: false }
        ],
        justificativa: "Assinaturas digitais permitem processos totalmente eletrônicos com garantia legal e segurança.",
        categoriaDaPergunta: "assinatura-digital"
    },
    {
        enunciado: "O que é a ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Infraestrutura que garante a autenticidade, integridade e validade jurídica de documentos eletrônicos", correto: true },
            { conteudo: "Um software para edição de texto", correto: false },
            { conteudo: "Uma rede social do governo", correto: false },
            { conteudo: "Um tipo de certificado físico", correto: false }
        ],
        justificativa: "A ICP-Brasil é a cadeia hierárquica de confiança para certificados digitais no Brasil.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "Qual órgão é responsável pela ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Instituto Nacional de Tecnologia da Informação (ITI)", correto: true },
            { conteudo: "Banco Central do Brasil", correto: false },
            { conteudo: "Ministério da Educação", correto: false },
            { conteudo: "Agência Nacional de Telecomunicações (ANATEL)", correto: false }
        ],
        justificativa: "O ITI é o órgão gestor e responsável pela coordenação da ICP-Brasil.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "Qual é a função dos certificados digitais emitidos pela ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Identificar com segurança pessoas e empresas em transações eletrônicas", correto: true },
            { conteudo: "Armazenar arquivos de texto", correto: false },
            { conteudo: "Gerar senhas para redes sociais", correto: false },
            { conteudo: "Editar documentos eletrônicos", correto: false }
        ],
        justificativa: "Os certificados digitais asseguram a autenticidade e validade jurídica nas comunicações eletrônicas.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "O que é a Autoridade Certificadora Raiz (AC Raiz) na ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Entidade máxima de confiança que emite certificados para autoridades certificadoras", correto: true },
            { conteudo: "Um software antivírus", correto: false },
            { conteudo: "Um certificado para redes sociais", correto: false },
            { conteudo: "Um tipo de senha", correto: false }
        ],
        justificativa: "A AC Raiz é o topo da cadeia de confiança dentro da ICP-Brasil.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "O que é uma Autoridade Certificadora (AC) subordinada na ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Entidade que emite certificados digitais para usuários finais, subordinada à AC Raiz", correto: true },
            { conteudo: "Um usuário comum", correto: false },
            { conteudo: "Software para criar documentos", correto: false },
            { conteudo: "Rede social do governo", correto: false }
        ],
        justificativa: "As ACs subordinadas são responsáveis por emitir certificados para pessoas físicas e jurídicas.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "O que é a cadeia de confiança na ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Sequência de autoridades certificadoras que garantem a validade dos certificados digitais", correto: true },
            { conteudo: "Rede de computadores", correto: false },
            { conteudo: "Um tipo de assinatura manual", correto: false },
            { conteudo: "Sistema de arquivos", correto: false }
        ],
        justificativa: "A cadeia de confiança assegura que um certificado digital seja confiável e válido juridicamente.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "Quais documentos são necessários para obter um certificado digital na ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Documento de identidade, CPF e comprovante de endereço", correto: true },
            { conteudo: "Somente carteira de trabalho", correto: false },
            { conteudo: "Apenas CPF", correto: false },
            { conteudo: "Passaporte e título de eleitor", correto: false }
        ],
        justificativa: "Esses documentos são essenciais para validar a identidade do solicitante do certificado digital.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "Qual a validade legal dos documentos assinados digitalmente pela ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Possuem a mesma validade jurídica que documentos assinados manualmente", correto: true },
            { conteudo: "Não possuem validade legal", correto: false },
            { conteudo: "São válidos apenas para contratos informais", correto: false },
            { conteudo: "Somente documentos em papel têm validade", correto: false }
        ],
        justificativa: "A assinatura digital via ICP-Brasil confere validade jurídica plena aos documentos eletrônicos.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "Quais são os principais tipos de certificados digitais emitidos pela ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Pessoa física (e-CPF) e pessoa jurídica (e-CNPJ)", correto: true },
            { conteudo: "Certificado de propriedade e veículo", correto: false },
            { conteudo: "Certificado de residência e escolaridade", correto: false },
            { conteudo: "Certificado de curso online", correto: false }
        ],
        justificativa: "Os certificados digitais e-CPF e e-CNPJ são os mais comuns para identificação na ICP-Brasil.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "Como a ICP-Brasil contribui para a segurança das transações eletrônicas?",
        arrayDeRespostas: [
            { conteudo: "Garantindo autenticidade, integridade e não-repúdio das informações", correto: true },
            { conteudo: "Desativando redes Wi-Fi", correto: false },
            { conteudo: "Controlando o acesso à internet", correto: false },
            { conteudo: "Gerando senhas para redes sociais", correto: false }
        ],
        justificativa: "A ICP-Brasil oferece infraestrutura para validar e proteger as transações digitais com segurança jurídica.",
        categoriaDaPergunta: "infraestrutura-de-chaves-publicas-brasileira"
    },
    {
        enunciado: "Qual a principal vantagem da assinatura digital em relação à assinatura manual?",
        arrayDeRespostas: [
            { conteudo: "Garantia de autenticidade e integridade do documento eletrônico", correto: true },
            { conteudo: "Maior facilidade para falsificação", correto: false },
            { conteudo: "Redução do uso de computadores", correto: false },
            { conteudo: "Aumenta o tempo para aprovação de documentos", correto: false }
        ],
        justificativa: "A assinatura digital assegura que o documento não foi alterado e é de autoria legítima.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Como a certificação digital contribui para a redução de custos em uma empresa?",
        arrayDeRespostas: [
            { conteudo: "Reduz gastos com papel, impressão e armazenamento físico", correto: true },
            { conteudo: "Aumenta o custo de impressão", correto: false },
            { conteudo: "Necessita mais funcionários para controle", correto: false },
            { conteudo: "Exige mais uso de papel", correto: false }
        ],
        justificativa: "Processos digitais eliminam custos com documentos físicos e logística associada.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Qual vantagem da assinatura digital facilita o processo de auditoria?",
        arrayDeRespostas: [
            { conteudo: "Rastreamento e comprovação da origem e integridade dos documentos", correto: true },
            { conteudo: "Dificulta o acesso aos documentos", correto: false },
            { conteudo: "Elimina documentos históricos", correto: false },
            { conteudo: "Exige impressão de todos os documentos", correto: false }
        ],
        justificativa: "Assinaturas digitais deixam um registro eletrônico confiável para auditorias e verificações.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Como a certificação digital ajuda na segurança das transações eletrônicas?",
        arrayDeRespostas: [
            { conteudo: "Garantindo autenticação, integridade e não-repúdio", correto: true },
            { conteudo: "Permitindo acesso irrestrito a todos", correto: false },
            { conteudo: "Eliminando senhas", correto: false },
            { conteudo: "Armazenando documentos em papel", correto: false }
        ],
        justificativa: "A certificação digital protege contra fraudes e garante a validade jurídica das transações.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Uma vantagem da assinatura digital é a agilidade. Por quê?",
        arrayDeRespostas: [
            { conteudo: "Permite assinar e validar documentos eletronicamente em poucos segundos", correto: true },
            { conteudo: "Exige envio de documentos por correio", correto: false },
            { conteudo: "Necessita impressão e reconhecimento em cartório", correto: false },
            { conteudo: "Demora dias para validar assinaturas", correto: false }
        ],
        justificativa: "A assinatura digital elimina a necessidade de processos físicos lentos e burocráticos.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Como a certificação digital contribui para a sustentabilidade ambiental?",
        arrayDeRespostas: [
            { conteudo: "Reduz o uso de papel e diminui a pegada de carbono", correto: true },
            { conteudo: "Aumenta o consumo de energia", correto: false },
            { conteudo: "Exige mais transporte de documentos", correto: false },
            { conteudo: "Necessita descarte maior de papel", correto: false }
        ],
        justificativa: "Processos digitais diminuem a necessidade de materiais físicos e transporte, beneficiando o meio ambiente.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Uma vantagem da certificação digital para clientes é:",
        arrayDeRespostas: [
            { conteudo: "Mais segurança e confiança nas transações online", correto: true },
            { conteudo: "Processos mais lentos", correto: false },
            { conteudo: "Necessidade de comparecer presencialmente", correto: false },
            { conteudo: "Aumento da burocracia", correto: false }
        ],
        justificativa: "Clientes se beneficiam da autenticidade e segurança em suas relações digitais.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Como a certificação digital facilita a conformidade legal das empresas?",
        arrayDeRespostas: [
            { conteudo: "Atende exigências legais de validade e segurança de documentos eletrônicos", correto: true },
            { conteudo: "Ignora normas regulatórias", correto: false },
            { conteudo: "Não tem impacto legal", correto: false },
            { conteudo: "Aumenta riscos jurídicos", correto: false }
        ],
        justificativa: "Certificados digitais são aceitos legalmente e evitam problemas judiciais relacionados a documentos eletrônicos.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Qual vantagem da assinatura digital está relacionada à mobilidade?",
        arrayDeRespostas: [
            { conteudo: "Permite assinar documentos de qualquer lugar, a qualquer hora", correto: true },
            { conteudo: "Exige estar presente fisicamente", correto: false },
            { conteudo: "Só funciona em escritórios", correto: false },
            { conteudo: "Depende de papel e caneta", correto: false }
        ],
        justificativa: "Assinaturas digitais tornam os processos independentes de localização física, aumentando a flexibilidade.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Uma vantagem da certificação digital para processos internos é:",
        arrayDeRespostas: [
            { conteudo: "Automatização e segurança na gestão documental", correto: true },
            { conteudo: "Dificuldade no acesso aos documentos", correto: false },
            { conteudo: "Mais burocracia manual", correto: false },
            { conteudo: "Armazenamento exclusivo em papel", correto: false }
        ],
        justificativa: "A certificação digital facilita a gestão eficiente e segura dos documentos dentro das organizações.",
        categoriaDaPergunta: "vantagens-da-certificacao-e-assinatura-digital"
    },
    {
        enunciado: "Qual a principal diferença entre assinatura eletrônica e assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Assinatura digital utiliza criptografia e tem validade jurídica reconhecida, a eletrônica pode não ter", correto: true },
            { conteudo: "Assinatura eletrônica é sempre mais segura que a digital", correto: false },
            { conteudo: "Assinatura digital é feita manualmente e digitalizada", correto: false },
            { conteudo: "Assinatura eletrônica não pode ser usada em documentos digitais", correto: false }
        ],
        justificativa: "A assinatura digital usa tecnologia criptográfica para garantir autenticidade e validade jurídica.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "Qual das opções representa a assinatura eletrônica?",
        arrayDeRespostas: [
            { conteudo: "Qualquer forma de assinatura realizada em ambiente eletrônico, como clicar em 'Aceito'", correto: true },
            { conteudo: "Uso de certificado digital com criptografia assimétrica", correto: false },
            { conteudo: "Assinatura manuscrita em papel", correto: false },
            { conteudo: "Documento impresso", correto: false }
        ],
        justificativa: "A assinatura eletrônica abrange diversas formas simples de aceitação em ambiente digital.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "A assinatura digital oferece quais garantias que a assinatura eletrônica simples não oferece?",
        arrayDeRespostas: [
            { conteudo: "Autenticidade, integridade e não-repúdio", correto: true },
            { conteudo: "Somente rapidez na assinatura", correto: false },
            { conteudo: "Exclusivamente aparência visual", correto: false },
            { conteudo: "Apenas armazenamento local", correto: false }
        ],
        justificativa: "A assinatura digital utiliza criptografia para assegurar essas propriedades legais e técnicas.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "Qual é o requisito para que uma assinatura digital tenha validade jurídica no Brasil?",
        arrayDeRespostas: [
            { conteudo: "Ser emitida dentro da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil)", correto: true },
            { conteudo: "Ser feita com um clique simples", correto: false },
            { conteudo: "Ter imagem escaneada da assinatura manuscrita", correto: false },
            { conteudo: "Ser enviada por e-mail", correto: false }
        ],
        justificativa: "A ICP-Brasil é o órgão regulador que garante a validade legal da assinatura digital.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "A assinatura eletrônica pode ser usada para:",
        arrayDeRespostas: [
            { conteudo: "Aceitar termos em formulários online de forma simples", correto: true },
            { conteudo: "Garantir validade jurídica sem criptografia", correto: false },
            { conteudo: "Criar documentos físicos", correto: false },
            { conteudo: "Imprimir documentos", correto: false }
        ],
        justificativa: "A assinatura eletrônica é usada para concordar com termos e condições, mas nem sempre tem validade jurídica robusta.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "Quais tecnologias são usadas na assinatura digital que geralmente não são usadas na assinatura eletrônica simples?",
        arrayDeRespostas: [
            { conteudo: "Criptografia assimétrica e certificados digitais", correto: true },
            { conteudo: "Impressão em papel", correto: false },
            { conteudo: "Assinatura manuscrita", correto: false },
            { conteudo: "Email sem autenticação", correto: false }
        ],
        justificativa: "Essas tecnologias asseguram a autenticidade e integridade da assinatura digital.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "A assinatura digital permite o que que a eletrônica não permite facilmente?",
        arrayDeRespostas: [
            { conteudo: "Rastreamento seguro e prova legal da autoria e integridade do documento", correto: true },
            { conteudo: "Assinar com o dedo em tela sensível", correto: false },
            { conteudo: "Enviar documento por e-mail", correto: false },
            { conteudo: "Salvar documento no computador", correto: false }
        ],
        justificativa: "A assinatura digital gera provas técnicas que podem ser usadas em disputas legais.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "Qual afirmação sobre assinatura eletrônica é verdadeira?",
        arrayDeRespostas: [
            { conteudo: "Pode ser apenas um clique ou digitação de nome para aceitar termos", correto: true },
            { conteudo: "Sempre usa certificado digital", correto: false },
            { conteudo: "Tem garantia de integridade como a assinatura digital", correto: false },
            { conteudo: "Não pode ser usada em contratos", correto: false }
        ],
        justificativa: "Assinatura eletrônica é ampla e pode ser uma forma simples de concordância eletrônica.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "Qual das seguintes não é uma característica da assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Pode ser facilmente falsificada sem tecnologia adequada", correto: true },
            { conteudo: "Assegura a integridade do documento", correto: false },
            { conteudo: "Utiliza criptografia de chave pública e privada", correto: false },
            { conteudo: "Possui validade jurídica garantida pela ICP-Brasil", correto: false }
        ],
        justificativa: "A assinatura digital é difícil de falsificar graças à criptografia avançada.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "Por que a assinatura digital é recomendada para documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Porque oferece segurança, validade jurídica e integridade comprovada", correto: true },
            { conteudo: "Porque é mais barata que a assinatura eletrônica", correto: false },
            { conteudo: "Porque não precisa de tecnologia", correto: false },
            { conteudo: "Porque não precisa ser validada", correto: false }
        ],
        justificativa: "A assinatura digital é a opção mais segura e legalmente reconhecida para documentos oficiais.",
        categoriaDaPergunta: "diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital"
    },
    {
        enunciado: "Qual é a principal lei que regula a certificação digital e assinatura digital no Brasil?",
        arrayDeRespostas: [
            { conteudo: "Lei nº 14.063/2020", correto: true },
            { conteudo: "Lei nº 9.610/1998", correto: false },
            { conteudo: "Lei nº 12.527/2011", correto: false },
            { conteudo: "Lei nº 10.406/2002 (Código Civil)", correto: false }
        ],
        justificativa: "A Lei nº 14.063/2020 dispõe sobre o uso de assinaturas eletrônicas em documentos públicos e privados.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "O que a Lei nº 14.063/2020 estabelece sobre a validade da assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Reconhece validade jurídica para assinaturas eletrônicas, com diferentes níveis de segurança", correto: true },
            { conteudo: "Proíbe o uso de assinaturas digitais", correto: false },
            { conteudo: "Só permite assinaturas manuscritas", correto: false },
            { conteudo: "Não trata sobre assinaturas eletrônicas", correto: false }
        ],
        justificativa: "A lei diferencia níveis de assinaturas e garante validade jurídica conforme segurança empregada.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "Qual órgão regulamenta a ICP-Brasil e seus certificados digitais?",
        arrayDeRespostas: [
            { conteudo: "Instituto Nacional de Tecnologia da Informação (ITI)", correto: true },
            { conteudo: "Banco Central do Brasil", correto: false },
            { conteudo: "Ministério da Justiça", correto: false },
            { conteudo: "Agência Nacional de Telecomunicações (ANATEL)", correto: false }
        ],
        justificativa: "O ITI é o órgão gestor da ICP-Brasil e responsável pela regulamentação técnica.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "O que a Medida Provisória nº 2.200-2/2001 instituiu?",
        arrayDeRespostas: [
            { conteudo: "Instituiu a ICP-Brasil e a validade jurídica das assinaturas digitais", correto: true },
            { conteudo: "Criou o Código Civil", correto: false },
            { conteudo: "Regulamentou direitos autorais", correto: false },
            { conteudo: "Dispôs sobre direito do consumidor", correto: false }
        ],
        justificativa: "Essa MP criou a infraestrutura legal para o uso de assinaturas digitais no Brasil.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "Qual a importância do Decreto nº 10.278/2020 para assinaturas eletrônicas?",
        arrayDeRespostas: [
            { conteudo: "Regulamenta o uso de assinaturas eletrônicas em documentos públicos", correto: true },
            { conteudo: "Revoga a ICP-Brasil", correto: false },
            { conteudo: "Estabelece regras para telecomunicações", correto: false },
            { conteudo: "Define regras para a internet banda larga", correto: false }
        ],
        justificativa: "O decreto regulamenta e define procedimentos para assinaturas eletrônicas no setor público.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "O que a legislação brasileira considera como assinatura digital válida?",
        arrayDeRespostas: [
            { conteudo: "Assinatura realizada com certificado digital emitido pela ICP-Brasil", correto: true },
            { conteudo: "Qualquer assinatura escaneada", correto: false },
            { conteudo: "Apenas assinatura manuscrita", correto: false },
            { conteudo: "Assinatura por e-mail sem autenticação", correto: false }
        ],
        justificativa: "A validade jurídica depende do uso de certificados emitidos dentro da ICP-Brasil.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "O que a Lei Geral de Proteção de Dados (LGPD) tem relação com certificação digital?",
        arrayDeRespostas: [
            { conteudo: "Exige proteção dos dados pessoais, que podem ser assegurados pelo uso da certificação digital", correto: true },
            { conteudo: "Proíbe uso de certificados digitais", correto: false },
            { conteudo: "Não tem relação alguma", correto: false },
            { conteudo: "Exige o uso exclusivo de assinaturas manuscritas", correto: false }
        ],
        justificativa: "A LGPD reforça a importância da segurança e privacidade, beneficiando-se da certificação digital.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "Qual lei brasileira regulamenta o uso de documentos eletrônicos com validade jurídica?",
        arrayDeRespostas: [
            { conteudo: "Lei nº 14.063/2020", correto: true },
            { conteudo: "Lei nº 8.666/1993", correto: false },
            { conteudo: "Lei nº 13.709/2018", correto: false },
            { conteudo: "Lei nº 9.610/1998", correto: false }
        ],
        justificativa: "Essa lei dispõe sobre a validade de assinaturas eletrônicas em documentos públicos e privados.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "O que o Marco Civil da Internet (Lei nº 12.965/2014) estabelece em relação à assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Reconhece a assinatura digital como meio legítimo para comprovar atos na internet", correto: true },
            { conteudo: "Proíbe o uso de assinaturas digitais", correto: false },
            { conteudo: "Regulamenta exclusivamente redes sociais", correto: false },
            { conteudo: "Não menciona assinaturas digitais", correto: false }
        ],
        justificativa: "O Marco Civil reconhece a validade jurídica da assinatura digital nas relações online.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "Qual a função da Medida Provisória nº 2.200-2/2001 no contexto da certificação digital?",
        arrayDeRespostas: [
            { conteudo: "Estabelece a ICP-Brasil e define a validade jurídica da assinatura digital", correto: true },
            { conteudo: "Define regras para contratos de trabalho", correto: false },
            { conteudo: "Regula telecomunicações", correto: false },
            { conteudo: "Cria regras para direitos autorais", correto: false }
        ],
        justificativa: "Essa MP foi o marco legal que instituiu a infraestrutura de chaves públicas no Brasil.",
        categoriaDaPergunta: "legislacao-pertinente"
    },
    {
        enunciado: "O que é segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de práticas que protegem dados contra acessos não autorizados, perdas ou danos", correto: true },
            { conteudo: "Processo de instalação de softwares", correto: false },
            { conteudo: "Apenas o uso de antivírus", correto: false },
            { conteudo: "Exclusivamente backups físicos", correto: false }
        ],
        justificativa: "Segurança da informação visa proteger a confidencialidade, integridade e disponibilidade dos dados.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "Quais são os três pilares principais da segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Confidencialidade, integridade e disponibilidade", correto: true },
            { conteudo: "Velocidade, armazenamento e acesso", correto: false },
            { conteudo: "Hardware, software e redes", correto: false },
            { conteudo: "Usuário, senha e firewall", correto: false }
        ],
        justificativa: "Esses pilares garantem que a informação seja protegida contra acessos indevidos, alterações não autorizadas e esteja disponível quando necessário.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "O que é confidencialidade na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Garantia que a informação seja acessada somente por pessoas autorizadas", correto: true },
            { conteudo: "Disponibilidade dos dados 24 horas", correto: false },
            { conteudo: "Correção de erros em dados", correto: false },
            { conteudo: "Criação de backups", correto: false }
        ],
        justificativa: "Confidencialidade protege os dados contra acesso não autorizado.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "O que significa integridade em segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Garantia de que os dados não foram alterados indevidamente", correto: true },
            { conteudo: "Proteção contra vírus", correto: false },
            { conteudo: "Manutenção de servidores", correto: false },
            { conteudo: "Velocidade no processamento de dados", correto: false }
        ],
        justificativa: "Integridade assegura que os dados permanecem corretos e completos.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "O que é disponibilidade na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Garantia que a informação esteja acessível quando necessária", correto: true },
            { conteudo: "Criptografia dos dados", correto: false },
            { conteudo: "Cópias físicas de documentos", correto: false },
            { conteudo: "Bloqueio de acesso remoto", correto: false }
        ],
        justificativa: "Disponibilidade assegura que os dados e serviços estejam acessíveis para os usuários autorizados.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "Qual é o principal objetivo do controle de acesso?",
        arrayDeRespostas: [
            { conteudo: "Garantir que somente usuários autorizados possam acessar recursos", correto: true },
            { conteudo: "Aumentar o espaço de armazenamento", correto: false },
            { conteudo: "Velocidade da rede", correto: false },
            { conteudo: "Instalar softwares automaticamente", correto: false }
        ],
        justificativa: "Controle de acesso protege os sistemas e dados contra acessos não autorizados.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "O que é um malware?",
        arrayDeRespostas: [
            { conteudo: "Software malicioso projetado para causar danos ou acessar dados indevidamente", correto: true },
            { conteudo: "Programa de segurança", correto: false },
            { conteudo: "Atualização de sistema", correto: false },
            { conteudo: "Backup de dados", correto: false }
        ],
        justificativa: "Malware inclui vírus, worms, trojans, entre outros, que prejudicam sistemas e dados.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "Qual a função de um firewall?",
        arrayDeRespostas: [
            { conteudo: "Monitorar e controlar o tráfego de rede para proteger contra acessos indevidos", correto: true },
            { conteudo: "Acelerar a conexão com a internet", correto: false },
            { conteudo: "Armazenar arquivos temporariamente", correto: false },
            { conteudo: "Backup automático", correto: false }
        ],
        justificativa: "Firewall atua como barreira de proteção entre redes confiáveis e não confiáveis.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "O que é phishing?",
        arrayDeRespostas: [
            { conteudo: "Golpe que tenta obter dados pessoais por meio de falsificação de comunicação", correto: true },
            { conteudo: "Programa de segurança de redes", correto: false },
            { conteudo: "Ataque físico a equipamentos", correto: false },
            { conteudo: "Criptografia de dados", correto: false }
        ],
        justificativa: "Phishing usa e-mails ou sites falsos para enganar usuários e roubar informações.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "Por que a atualização de softwares é importante para a segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Corrige vulnerabilidades que podem ser exploradas por atacantes", correto: true },
            { conteudo: "Deixa o sistema mais lento", correto: false },
            { conteudo: "Diminui a segurança", correto: false },
            { conteudo: "Apaga dados importantes", correto: false }
        ],
        justificativa: "Atualizações corrigem falhas que podem comprometer a segurança dos sistemas.",
        categoriaDaPergunta: "aspectos-gerais"
    },
    {
        enunciado: "Qual é o princípio básico da confidencialidade na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Garantir que a informação seja acessada apenas por pessoas autorizadas", correto: true },
            { conteudo: "Garantir que os dados estejam sempre disponíveis", correto: false },
            { conteudo: "Garantir que os dados não sejam alterados", correto: false },
            { conteudo: "Garantir a velocidade do sistema", correto: false }
        ],
        justificativa: "A confidencialidade protege os dados contra acessos não autorizados.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "O que significa o princípio da integridade?",
        arrayDeRespostas: [
            { conteudo: "Assegurar que os dados não sejam modificados indevidamente", correto: true },
            { conteudo: "Garantir o acesso irrestrito a todos os usuários", correto: false },
            { conteudo: "Armazenar os dados em nuvem", correto: false },
            { conteudo: "Criar cópias de segurança", correto: false }
        ],
        justificativa: "Integridade garante que a informação permanece completa e correta.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "O que é disponibilidade no contexto da segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Garantia que a informação esteja acessível quando necessária", correto: true },
            { conteudo: "Proteção contra vírus", correto: false },
            { conteudo: "Manutenção do hardware", correto: false },
            { conteudo: "Criptografia dos dados", correto: false }
        ],
        justificativa: "Disponibilidade assegura o acesso contínuo aos dados e serviços.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "O princípio da autenticidade refere-se a:",
        arrayDeRespostas: [
            { conteudo: "Garantir que a identidade do usuário ou sistema seja verdadeira", correto: true },
            { conteudo: "Disponibilidade dos dados", correto: false },
            { conteudo: "Integridade dos arquivos", correto: false },
            { conteudo: "Backup de dados", correto: false }
        ],
        justificativa: "Autenticidade assegura a veracidade da identidade envolvida na comunicação.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "O que é o princípio do não-repúdio?",
        arrayDeRespostas: [
            { conteudo: "Garantia que uma ação não possa ser negada por quem a realizou", correto: true },
            { conteudo: "Impossibilidade de acesso a dados", correto: false },
            { conteudo: "Criptografia fraca", correto: false },
            { conteudo: "Disponibilidade limitada", correto: false }
        ],
        justificativa: "Não-repúdio evita que o autor de uma ação negue sua autoria posteriormente.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "O princípio da responsabilidade implica que:",
        arrayDeRespostas: [
            { conteudo: "Usuários devem responder por suas ações no sistema", correto: true },
            { conteudo: "Os dados devem ser públicos", correto: false },
            { conteudo: "Sistemas devem ser sempre gratuitos", correto: false },
            { conteudo: "Acesso irrestrito a todos", correto: false }
        ],
        justificativa: "Responsabilidade assegura rastreabilidade e prestação de contas das ações realizadas.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "O princípio do controle de acesso tem como objetivo:",
        arrayDeRespostas: [
            { conteudo: "Restringir o acesso a informações somente a usuários autorizados", correto: true },
            { conteudo: "Garantir acesso irrestrito", correto: false },
            { conteudo: "Eliminar senhas", correto: false },
            { conteudo: "Aumentar o tráfego de rede", correto: false }
        ],
        justificativa: "Controle de acesso protege informações contra acesso não autorizado.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "Qual princípio assegura que os dados sejam mantidos completos e corretos durante todo o ciclo de vida?",
        arrayDeRespostas: [
            { conteudo: "Integridade", correto: true },
            { conteudo: "Disponibilidade", correto: false },
            { conteudo: "Confidencialidade", correto: false },
            { conteudo: "Autenticidade", correto: false }
        ],
        justificativa: "Integridade evita alterações não autorizadas ou acidentais dos dados.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "Por que o princípio da confidencialidade é fundamental em segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Porque protege informações sensíveis contra acesso indevido", correto: true },
            { conteudo: "Porque permite acesso irrestrito", correto: false },
            { conteudo: "Porque diminui a velocidade do sistema", correto: false },
            { conteudo: "Porque impede backups", correto: false }
        ],
        justificativa: "Confidencialidade evita vazamento e uso indevido das informações.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "Qual princípio está relacionado à garantia da disponibilidade dos sistemas mesmo em caso de falhas?",
        arrayDeRespostas: [
            { conteudo: "Disponibilidade", correto: true },
            { conteudo: "Confidencialidade", correto: false },
            { conteudo: "Autenticidade", correto: false },
            { conteudo: "Não-repúdio", correto: false }
        ],
        justificativa: "Disponibilidade assegura que serviços e dados estejam acessíveis quando necessários, mesmo diante de problemas.",
        categoriaDaPergunta: "principios-da-seguranca-da-informacao"
    },
    {
        enunciado: "O que é criptologia?",
        arrayDeRespostas: [
            { conteudo: "Estudo das técnicas de codificação e decodificação de mensagens para garantir segurança", correto: true },
            { conteudo: "Processo de formatação de texto", correto: false },
            { conteudo: "Método de armazenamento de dados", correto: false },
            { conteudo: "Programa de backup", correto: false }
        ],
        justificativa: "Criptologia engloba a criação e análise de métodos seguros para proteger informações.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "Qual a diferença entre criptografia e criptoanálise?",
        arrayDeRespostas: [
            { conteudo: "Criptografia é a criação de códigos; criptoanálise é o estudo para quebrar esses códigos", correto: true },
            { conteudo: "Criptografia é quebrar códigos; criptoanálise é criar códigos", correto: false },
            { conteudo: "Ambas são o mesmo processo", correto: false },
            { conteudo: "Nenhuma das anteriores", correto: false }
        ],
        justificativa: "Criptografia protege mensagens; criptoanálise busca vulnerabilidades nesses métodos.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "O que é uma cifra simétrica?",
        arrayDeRespostas: [
            { conteudo: "Método que usa a mesma chave para criptografar e descriptografar", correto: true },
            { conteudo: "Método que usa chaves diferentes para criptografar e descriptografar", correto: false },
            { conteudo: "Criptografia sem uso de chave", correto: false },
            { conteudo: "Processo de compressão de dados", correto: false }
        ],
        justificativa: "Cifra simétrica usa uma única chave compartilhada entre remetente e destinatário.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "Qual é a característica principal da cifra assimétrica?",
        arrayDeRespostas: [
            { conteudo: "Usa um par de chaves: pública para criptografar e privada para descriptografar", correto: true },
            { conteudo: "Usa a mesma chave para criptografia e descriptografia", correto: false },
            { conteudo: "Não usa chaves", correto: false },
            { conteudo: "É usada apenas para compressão", correto: false }
        ],
        justificativa: "A cifra assimétrica possibilita comunicação segura sem troca prévia de chaves secretas.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "O que significa o termo 'criptografia de chave pública'?",
        arrayDeRespostas: [
            { conteudo: "Sistema que utiliza uma chave pública para criptografar e uma chave privada para descriptografar", correto: true },
            { conteudo: "Uso de uma única chave para todos os usuários", correto: false },
            { conteudo: "Criptografia sem chaves", correto: false },
            { conteudo: "Criptografia manual em papel", correto: false }
        ],
        justificativa: "Criptografia de chave pública é a base da criptografia assimétrica moderna.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "Qual das alternativas é um algoritmo de criptografia simétrica?",
        arrayDeRespostas: [
            { conteudo: "AES (Advanced Encryption Standard)", correto: true },
            { conteudo: "RSA", correto: false },
            { conteudo: "DSA", correto: false },
            { conteudo: "SHA-256", correto: false }
        ],
        justificativa: "AES é um dos principais algoritmos simétricos usados para criptografia de dados.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "Qual algoritmo é um exemplo de criptografia assimétrica?",
        arrayDeRespostas: [
            { conteudo: "RSA", correto: true },
            { conteudo: "DES", correto: false },
            { conteudo: "Blowfish", correto: false },
            { conteudo: "MD5", correto: false }
        ],
        justificativa: "RSA é um dos algoritmos mais usados para criptografia de chave pública.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "O que é uma função hash na criptologia?",
        arrayDeRespostas: [
            { conteudo: "Função que transforma dados de qualquer tamanho em um valor fixo e único", correto: true },
            { conteudo: "Algoritmo de criptografia simétrica", correto: false },
            { conteudo: "Tipo de assinatura digital", correto: false },
            { conteudo: "Programa antivírus", correto: false }
        ],
        justificativa: "Funções hash são usadas para verificar integridade e gerar impressões digitais dos dados.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "Qual a importância da criptografia na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Protege a confidencialidade e integridade dos dados", correto: true },
            { conteudo: "Melhora a velocidade da rede", correto: false },
            { conteudo: "Aumenta o armazenamento de dados", correto: false },
            { conteudo: "Remove vírus do sistema", correto: false }
        ],
        justificativa: "Criptografia assegura que dados sejam protegidos contra acesso e alterações não autorizadas.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "O que é criptoanálise?",
        arrayDeRespostas: [
            { conteudo: "Estudo e técnicas para quebrar sistemas criptográficos", correto: true },
            { conteudo: "Criação de novos algoritmos de criptografia", correto: false },
            { conteudo: "Processo de backup de dados", correto: false },
            { conteudo: "Análise de desempenho de hardware", correto: false }
        ],
        justificativa: "Criptoanálise busca identificar falhas em métodos criptográficos para quebrar a segurança.",
        categoriaDaPergunta: "criptologia"
    },
    {
        enunciado: "O que é autenticação na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Processo de verificar a identidade de um usuário ou sistema", correto: true },
            { conteudo: "Ação de criptografar dados", correto: false },
            { conteudo: "Backup de informações", correto: false },
            { conteudo: "Monitoramento de rede", correto: false }
        ],
        justificativa: "Autenticação garante que apenas usuários legítimos tenham acesso aos sistemas.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "Qual das alternativas é um método comum de autenticação?",
        arrayDeRespostas: [
            { conteudo: "Senha (password)", correto: true },
            { conteudo: "Criptografia", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Backup", correto: false }
        ],
        justificativa: "Senha é o método mais comum para autenticar usuários.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "O que significa autenticação multifator (MFA)?",
        arrayDeRespostas: [
            { conteudo: "Uso de dois ou mais métodos de autenticação para verificar identidade", correto: true },
            { conteudo: "Uso de uma única senha forte", correto: false },
            { conteudo: "Autenticação baseada em firewall", correto: false },
            { conteudo: "Backup periódico de dados", correto: false }
        ],
        justificativa: "MFA aumenta a segurança exigindo múltiplas provas de identidade.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "Qual dos seguintes fatores NÃO é usado em autenticação multifator?",
        arrayDeRespostas: [
            { conteudo: "Backup de dados", correto: true },
            { conteudo: "Algo que você sabe (senha)", correto: false },
            { conteudo: "Algo que você tem (token)", correto: false },
            { conteudo: "Algo que você é (biometria)", correto: false }
        ],
        justificativa: "Backup não é um fator de autenticação, mas uma medida de segurança distinta.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "Qual é a função de um token na autenticação?",
        arrayDeRespostas: [
            { conteudo: "Gerar códigos temporários para validar a identidade do usuário", correto: true },
            { conteudo: "Armazenar dados pessoais", correto: false },
            { conteudo: "Fazer backup de senhas", correto: false },
            { conteudo: "Controlar acesso à internet", correto: false }
        ],
        justificativa: "Tokens fornecem códigos temporários usados em autenticações seguras.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "O que é autenticação biométrica?",
        arrayDeRespostas: [
            { conteudo: "Verificação de identidade baseada em características físicas ou comportamentais", correto: true },
            { conteudo: "Uso de senhas fortes", correto: false },
            { conteudo: "Criptografia de dados", correto: false },
            { conteudo: "Monitoramento de rede", correto: false }
        ],
        justificativa: "Biometria usa elementos únicos do corpo, como impressões digitais, para autenticar.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "O que é falha de autenticação?",
        arrayDeRespostas: [
            { conteudo: "Quando o sistema não consegue confirmar a identidade do usuário", correto: true },
            { conteudo: "Quando o sistema perde dados", correto: false },
            { conteudo: "Quando a senha é atualizada", correto: false },
            { conteudo: "Quando o firewall bloqueia uma conexão", correto: false }
        ],
        justificativa: "Falha ocorre quando o processo de autenticação não confirma o usuário.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "O que significa 'autenticação baseada em conhecimento'?",
        arrayDeRespostas: [
            { conteudo: "Método que utiliza informações que o usuário sabe, como senha ou PIN", correto: true },
            { conteudo: "Autenticação por reconhecimento facial", correto: false },
            { conteudo: "Uso de token físico", correto: false },
            { conteudo: "Criptografia assimétrica", correto: false }
        ],
        justificativa: "Esse método depende de algo que só o usuário conhece para validar a identidade.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "Qual das alternativas é uma boa prática para fortalecer a autenticação?",
        arrayDeRespostas: [
            { conteudo: "Utilizar autenticação multifator sempre que possível", correto: true },
            { conteudo: "Usar senhas simples para facilitar o acesso", correto: false },
            { conteudo: "Compartilhar senhas com colegas", correto: false },
            { conteudo: "Desabilitar o sistema de autenticação", correto: false }
        ],
        justificativa: "Autenticação multifator reduz riscos de acesso não autorizado.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "Qual dos seguintes não é um fator de autenticação comum?",
        arrayDeRespostas: [
            { conteudo: "Velocidade da conexão de internet", correto: true },
            { conteudo: "Senha", correto: false },
            { conteudo: "Token físico", correto: false },
            { conteudo: "Impressão digital", correto: false }
        ],
        justificativa: "Velocidade da internet não é usada para autenticação de usuários.",
        categoriaDaPergunta: "autenticacao"
    },
    {
        enunciado: "O que é uma assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Um mecanismo que garante a autenticidade, integridade e não-repúdio de um documento eletrônico", correto: true },
            { conteudo: "Uma assinatura manuscrita escaneada", correto: false },
            { conteudo: "Um tipo de vírus de computador", correto: false },
            { conteudo: "Um programa para editar documentos", correto: false }
        ],
        justificativa: "A assinatura digital usa criptografia para garantir segurança e validade jurídica.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "O que é um certificado digital?",
        arrayDeRespostas: [
            { conteudo: "Um arquivo eletrônico que vincula uma chave pública a uma identidade", correto: true },
            { conteudo: "Um documento físico de identidade", correto: false },
            { conteudo: "Um software antivírus", correto: false },
            { conteudo: "Uma senha para acessar sistemas", correto: false }
        ],
        justificativa: "Certificados digitais são emitidos por autoridades certificadoras para autenticar identidades online.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "Qual é o papel da Autoridade Certificadora (AC) na infraestrutura de chaves públicas (ICP)?",
        arrayDeRespostas: [
            { conteudo: "Emitir e gerenciar certificados digitais confiáveis", correto: true },
            { conteudo: "Desenvolver antivírus", correto: false },
            { conteudo: "Gerenciar senhas de usuários", correto: false },
            { conteudo: "Criar sistemas operacionais", correto: false }
        ],
        justificativa: "A AC é responsável por garantir a confiabilidade dos certificados emitidos.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "Qual tecnologia é usada para garantir a integridade e autenticidade na assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Criptografia assimétrica", correto: true },
            { conteudo: "Backup em nuvem", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Antivírus", correto: false }
        ],
        justificativa: "A criptografia assimétrica permite vincular uma assinatura a uma chave privada única do assinante.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "O que significa o não-repúdio em uma assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "O autor da assinatura não pode negar a autoria do documento assinado", correto: true },
            { conteudo: "O documento não pode ser acessado", correto: false },
            { conteudo: "O documento está criptografado", correto: false },
            { conteudo: "O documento é público", correto: false }
        ],
        justificativa: "Não-repúdio assegura que a assinatura é válida e que o autor não pode negar ter assinado.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "Qual documento estabelece a validade jurídica da assinatura digital no Brasil?",
        arrayDeRespostas: [
            { conteudo: "Medida Provisória nº 2.200-2/2001", correto: true },
            { conteudo: "Lei nº 9.609/1998", correto: false },
            { conteudo: "Código Civil", correto: false },
            { conteudo: "Lei de Direitos Autorais", correto: false }
        ],
        justificativa: "Essa medida provisória instituiu a ICP-Brasil e garantiu validade jurídica à assinatura digital.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "Qual a diferença entre assinatura digital e assinatura eletrônica?",
        arrayDeRespostas: [
            { conteudo: "Assinatura digital utiliza certificado digital e criptografia; assinatura eletrônica pode ser qualquer método eletrônico de assinatura", correto: true },
            { conteudo: "São exatamente a mesma coisa", correto: false },
            { conteudo: "Assinatura eletrônica é manuscrita", correto: false },
            { conteudo: "Assinatura digital é feita à mão", correto: false }
        ],
        justificativa: "Assinatura digital oferece maior segurança e validade jurídica por usar criptografia e certificação.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "O que é ICP-Brasil?",
        arrayDeRespostas: [
            { conteudo: "Infraestrutura de Chaves Públicas Brasileira, que regula certificados digitais", correto: true },
            { conteudo: "Programa de backup de dados", correto: false },
            { conteudo: "Sistema operacional brasileiro", correto: false },
            { conteudo: "Antivírus nacional", correto: false }
        ],
        justificativa: "ICP-Brasil é a estrutura oficial que garante a confiança na certificação digital no país.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "Qual a função do certificado digital na assinatura digital?",
        arrayDeRespostas: [
            { conteudo: "Garantir a identidade do signatário e permitir a verificação da assinatura", correto: true },
            { conteudo: "Armazenar documentos físicos", correto: false },
            { conteudo: "Fazer backup automático", correto: false },
            { conteudo: "Controlar acesso à internet", correto: false }
        ],
        justificativa: "O certificado vincula a chave pública à identidade do usuário, validando a assinatura.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "Qual a vantagem principal da assinatura digital em relação à assinatura manuscrita?",
        arrayDeRespostas: [
            { conteudo: "Oferece segurança, validade jurídica e integridade dos documentos eletrônicos", correto: true },
            { conteudo: "É mais fácil de falsificar", correto: false },
            { conteudo: "Não tem valor legal", correto: false },
            { conteudo: "É obrigatória em todos os documentos", correto: false }
        ],
        justificativa: "A assinatura digital protege contra fraudes e garante autenticidade nos documentos digitais.",
        categoriaDaPergunta: "assinatura-digital-e-certificado-digital"
    },
    {
        enunciado: "O que significa o termo segurança da informação na informática?",
        arrayDeRespostas: [
            { conteudo: "Proteção dos dados, sistemas e redes contra acessos e ataques não autorizados", correto: true },
            { conteudo: "Manutenção de hardware", correto: false },
            { conteudo: "Desenvolvimento de software", correto: false },
            { conteudo: "Backup automático", correto: false }
        ],
        justificativa: "Segurança da informação visa garantir a confidencialidade, integridade e disponibilidade dos dados em sistemas computacionais.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "Qual das opções NÃO é um princípio básico da segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Velocidade da rede", correto: true },
            { conteudo: "Confidencialidade", correto: false },
            { conteudo: "Integridade", correto: false },
            { conteudo: "Disponibilidade", correto: false }
        ],
        justificativa: "Velocidade da rede não é um princípio básico da segurança da informação.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "O que caracteriza um ataque de phishing?",
        arrayDeRespostas: [
            { conteudo: "Tentativa de obter dados pessoais através de falsificação de comunicação", correto: true },
            { conteudo: "Ataque físico a servidores", correto: false },
            { conteudo: "Backup mal configurado", correto: false },
            { conteudo: "Uso de antivírus desatualizado", correto: false }
        ],
        justificativa: "Phishing é um tipo de ataque que usa engenharia social para enganar o usuário.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "Qual é a função de um firewall na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Controlar e filtrar o tráfego de rede para proteger contra acessos não autorizados", correto: true },
            { conteudo: "Aumentar a velocidade da internet", correto: false },
            { conteudo: "Fazer backup automático", correto: false },
            { conteudo: "Gerenciar senhas de usuários", correto: false }
        ],
        justificativa: "Firewall atua como uma barreira entre redes confiáveis e não confiáveis.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "O que é malware?",
        arrayDeRespostas: [
            { conteudo: "Software malicioso projetado para causar danos ou roubar informações", correto: true },
            { conteudo: "Programa de segurança", correto: false },
            { conteudo: "Backup de dados", correto: false },
            { conteudo: "Atualização de sistema", correto: false }
        ],
        justificativa: "Malware inclui vírus, worms, trojans, entre outros softwares prejudiciais.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "O que é autenticação multifator (MFA)?",
        arrayDeRespostas: [
            { conteudo: "Uso de dois ou mais métodos diferentes para confirmar a identidade do usuário", correto: true },
            { conteudo: "Uso de uma única senha", correto: false },
            { conteudo: "Acesso irrestrito", correto: false },
            { conteudo: "Criptografia de dados", correto: false }
        ],
        justificativa: "MFA aumenta a segurança exigindo múltiplas provas de identidade.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "Qual é a finalidade do backup na segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Garantir a recuperação de dados em caso de falhas ou ataques", correto: true },
            { conteudo: "Excluir arquivos antigos", correto: false },
            { conteudo: "Aumentar o espaço de armazenamento", correto: false },
            { conteudo: "Bloquear vírus", correto: false }
        ],
        justificativa: "Backup protege os dados contra perda ou corrupção.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "Qual das opções é um exemplo de ataque de engenharia social?",
        arrayDeRespostas: [
            { conteudo: "Phishing", correto: true },
            { conteudo: "Ransomware", correto: false },
            { conteudo: "Vírus", correto: false },
            { conteudo: "Malware", correto: false }
        ],
        justificativa: "Engenharia social manipula pessoas para obter informações confidenciais.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "O que é um ransomware?",
        arrayDeRespostas: [
            { conteudo: "Malware que sequestra dados e exige pagamento para liberação", correto: true },
            { conteudo: "Programa antivírus", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Backup automático", correto: false }
        ],
        justificativa: "Ransomware criptografa arquivos e cobra resgate para liberar o acesso.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "Por que é importante manter os sistemas atualizados?",
        arrayDeRespostas: [
            { conteudo: "Para corrigir vulnerabilidades que podem ser exploradas por atacantes", correto: true },
            { conteudo: "Para diminuir a velocidade do sistema", correto: false },
            { conteudo: "Para excluir dados antigos", correto: false },
            { conteudo: "Para bloquear o acesso dos usuários", correto: false }
        ],
        justificativa: "Atualizações corrigem falhas de segurança e melhoram a proteção do sistema.",
        categoriaDaPergunta: "seguranca-da-informacao-na-informatica-awari"
    },
    {
        enunciado: "O que é um ataque DoS (Denial of Service)?",
        arrayDeRespostas: [
            { conteudo: "Tentativa de tornar um serviço indisponível para seus usuários", correto: true },
            { conteudo: "Roubo de dados pessoais", correto: false },
            { conteudo: "Ataque físico a servidores", correto: false },
            { conteudo: "Criptografia de mensagens", correto: false }
        ],
        justificativa: "Ataques DoS sobrecarregam sistemas para impedir seu funcionamento normal.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "O que é um vírus de computador?",
        arrayDeRespostas: [
            { conteudo: "Programa malicioso que se replica e infecta arquivos", correto: true },
            { conteudo: "Programa antivírus", correto: false },
            { conteudo: "Backup de dados", correto: false },
            { conteudo: "Firewall", correto: false }
        ],
        justificativa: "Vírus infectam arquivos e podem causar danos ou propagação maliciosa.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "O que caracteriza um ataque de phishing?",
        arrayDeRespostas: [
            { conteudo: "Engenharia social para obter dados pessoais por meio de mensagens falsas", correto: true },
            { conteudo: "Ataque físico a servidores", correto: false },
            { conteudo: "Criptografia de dados", correto: false },
            { conteudo: "Backup de dados", correto: false }
        ],
        justificativa: "Phishing usa engano para roubar credenciais ou informações sensíveis.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "O que é ransomware?",
        arrayDeRespostas: [
            { conteudo: "Malware que sequestra dados e exige resgate para liberar acesso", correto: true },
            { conteudo: "Programa antivírus", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Backup automático", correto: false }
        ],
        justificativa: "Ransomware criptografa arquivos e cobra pagamento para desbloqueá-los.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "Qual é a característica de um worm (verme) em segurança da informação?",
        arrayDeRespostas: [
            { conteudo: "Software malicioso que se replica automaticamente sem precisar de arquivo hospedeiro", correto: true },
            { conteudo: "Programa de backup", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Software antivírus", correto: false }
        ],
        justificativa: "Worms se espalham autonomamente pela rede, causando danos ou lentidão.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "O que é um ataque de engenharia social?",
        arrayDeRespostas: [
            { conteudo: "Manipulação psicológica para obter informações confidenciais", correto: true },
            { conteudo: "Ataque físico a equipamentos", correto: false },
            { conteudo: "Uso de vírus", correto: false },
            { conteudo: "Criptografia de dados", correto: false }
        ],
        justificativa: "Engenharia social explora a confiança e o comportamento humano para ataques.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "O que é spyware?",
        arrayDeRespostas: [
            { conteudo: "Software que monitora atividades do usuário sem permissão", correto: true },
            { conteudo: "Antivírus legítimo", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Backup automático", correto: false }
        ],
        justificativa: "Spyware coleta informações privadas de forma oculta e pode comprometer a segurança.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "O que é um trojan (cavalo de troia)?",
        arrayDeRespostas: [
            { conteudo: "Programa malicioso que se disfarça como software legítimo", correto: true },
            { conteudo: "Programa antivírus", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Software de backup", correto: false }
        ],
        justificativa: "Trojans enganam o usuário para instalar malware disfarçado de programa confiável.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "Qual é o objetivo de um ataque de spoofing?",
        arrayDeRespostas: [
            { conteudo: "Falsificar identidade para enganar sistemas ou usuários", correto: true },
            { conteudo: "Destruir hardware", correto: false },
            { conteudo: "Backup de dados", correto: false },
            { conteudo: "Criptografar informações", correto: false }
        ],
        justificativa: "Spoofing envolve enganar o destinatário sobre a verdadeira origem da informação.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "O que é um ataque Man-in-the-Middle (MitM)?",
        arrayDeRespostas: [
            { conteudo: "Interceptação e possível alteração da comunicação entre duas partes sem que elas percebam", correto: true },
            { conteudo: "Ataque físico a servidores", correto: false },
            { conteudo: "Envio de spam", correto: false },
            { conteudo: "Backup de dados", correto: false }
        ],
        justificativa: "MitM permite que o atacante intercepte e manipule informações entre as partes comunicantes.",
        categoriaDaPergunta: "ataques-e-ameacas-em-seguranca-da-informacao"
    },
    {
        enunciado: "O que é um vírus de computador?",
        arrayDeRespostas: [
            { conteudo: "Software malicioso que se replica e infecta arquivos ou programas", correto: true },
            { conteudo: "Programa legítimo para proteção", correto: false },
            { conteudo: "Dispositivo de hardware", correto: false },
            { conteudo: "Backup automático", correto: false }
        ],
        justificativa: "Vírus são programas maliciosos que se espalham infectando arquivos e sistemas.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "O que é um worm (verme)?",
        arrayDeRespostas: [
            { conteudo: "Malware que se replica automaticamente e se espalha por redes", correto: true },
            { conteudo: "Programa antivírus", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Aplicativo de backup", correto: false }
        ],
        justificativa: "Worms se propagam sem a necessidade de arquivos hospedeiros, causando danos em redes.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "O que é um Trojan (Cavalo de Troia)?",
        arrayDeRespostas: [
            { conteudo: "Software malicioso que se disfarça como programa legítimo para enganar o usuário", correto: true },
            { conteudo: "Software antivírus", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Backup de dados", correto: false }
        ],
        justificativa: "Trojans enganam os usuários para instalar malware oculto em sistemas.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "O que é ransomware?",
        arrayDeRespostas: [
            { conteudo: "Malware que sequestra dados e exige pagamento para liberar o acesso", correto: true },
            { conteudo: "Programa de limpeza de vírus", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Sistema de backup", correto: false }
        ],
        justificativa: "Ransomware criptografa arquivos e cobra resgate para desbloqueá-los.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "Qual a função do spyware?",
        arrayDeRespostas: [
            { conteudo: "Monitorar e coletar informações do usuário sem seu consentimento", correto: true },
            { conteudo: "Remover vírus", correto: false },
            { conteudo: "Proteger a rede", correto: false },
            { conteudo: "Fazer backup", correto: false }
        ],
        justificativa: "Spyware espionam o usuário, capturando dados e hábitos de navegação.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "O que é adware?",
        arrayDeRespostas: [
            { conteudo: "Programa que exibe anúncios indesejados no computador do usuário", correto: true },
            { conteudo: "Software antivírus", correto: false },
            { conteudo: "Firewall", correto: false },
            { conteudo: "Aplicativo de backup", correto: false }
        ],
        justificativa: "Adware exibe publicidade que pode ser invasiva ou prejudicial à experiência do usuário.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "O que é rootkit?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de ferramentas que permitem acesso oculto e controle do sistema infectado", correto: true },
            { conteudo: "Programa antivírus", correto: false },
            { conteudo: "Backup automático", correto: false },
            { conteudo: "Firewall", correto: false }
        ],
        justificativa: "Rootkits ocultam a presença de malware e permitem controle total do sistema comprometido.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "Qual é o principal objetivo de um keylogger?",
        arrayDeRespostas: [
            { conteudo: "Registrar as teclas digitadas pelo usuário para roubo de informações", correto: true },
            { conteudo: "Proteger o teclado contra falhas", correto: false },
            { conteudo: "Bloquear anúncios", correto: false },
            { conteudo: "Acelerar o sistema", correto: false }
        ],
        justificativa: "Keyloggers capturam senhas e dados confidenciais digitados no teclado.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "O que é um backdoor?",
        arrayDeRespostas: [
            { conteudo: "Método que permite acesso não autorizado ao sistema sem passar pelos controles de segurança", correto: true },
            { conteudo: "Firewall configurado", correto: false },
            { conteudo: "Software de backup", correto: false },
            { conteudo: "Antivírus atualizado", correto: false }
        ],
        justificativa: "Backdoors criam brechas para invasores acessarem sistemas clandestinamente.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "Qual a diferença principal entre vírus e worm?",
        arrayDeRespostas: [
            { conteudo: "Vírus precisa de arquivo hospedeiro; worm se replica sozinho pela rede", correto: true },
            { conteudo: "Worm precisa de arquivo hospedeiro; vírus se replica sozinho", correto: false },
            { conteudo: "Ambos são a mesma coisa", correto: false },
            { conteudo: "Vírus é legal; worm é ilegal", correto: false }
        ],
        justificativa: "Vírus infecta arquivos; worms se espalham autonomamente pela rede.",
        categoriaDaPergunta: "tipos-de-malware"
    },
    {
        enunciado: "O que significa postura profissional no ambiente de trabalho?",
        arrayDeRespostas: [
            { conteudo: "Comportamento adequado que demonstra responsabilidade, ética e respeito", correto: true },
            { conteudo: "Usar roupas informais sempre", correto: false },
            { conteudo: "Ignorar regras da empresa", correto: false },
            { conteudo: "Chegar sempre atrasado", correto: false }
        ],
        justificativa: "Postura profissional envolve agir com ética, responsabilidade e respeito no trabalho.",
        categoriaDaPergunta: "definicao-e-importancia-sobre-postura-profissional"
    },
    {
        enunciado: "Por que a postura profissional é importante para a carreira?",
        arrayDeRespostas: [
            { conteudo: "Porque ajuda a construir uma imagem confiável e facilita o crescimento na carreira", correto: true },
            { conteudo: "Porque permite faltar sem avisar", correto: false },
            { conteudo: "Porque evita o trabalho em equipe", correto: false },
            { conteudo: "Porque dispensa a comunicação com colegas", correto: false }
        ],
        justificativa: "Uma boa postura profissional aumenta a confiança dos colegas e superiores.",
        categoriaDaPergunta: "definicao-e-importancia-sobre-postura-profissional"
    },
    {
        enunciado: "Qual atitude representa uma postura profissional adequada?",
        arrayDeRespostas: [
            { conteudo: "Cumprir prazos e compromissos com responsabilidade", correto: true },
            { conteudo: "Procrastinar e deixar tarefas para última hora", correto: false },
            { conteudo: "Falar mal dos colegas", correto: false },
            { conteudo: "Ignorar feedbacks", correto: false }
        ],
        justificativa: "Ser responsável e cumprir prazos demonstra comprometimento profissional.",
        categoriaDaPergunta: "definicao-e-importancia-sobre-postura-profissional"
    },
    {
        enunciado: "Como a postura profissional impacta o ambiente de trabalho?",
        arrayDeRespostas: [
            { conteudo: "Promove um ambiente harmonioso e produtivo", correto: true },
            { conteudo: "Gera conflitos e desorganização", correto: false },
            { conteudo: "Incentiva a desconfiança entre colegas", correto: false },
            { conteudo: "Diminui a motivação geral", correto: false }
        ],
        justificativa: "Postura adequada contribui para um ambiente positivo e eficiente.",
        categoriaDaPergunta: "definicao-e-importancia-sobre-postura-profissional"
    },
    {
        enunciado: "Qual das opções NÃO faz parte de uma boa postura profissional?",
        arrayDeRespostas: [
            { conteudo: "Desrespeitar normas da empresa", correto: true },
            { conteudo: "Comunicar-se de forma clara e respeitosa", correto: false },
            { conteudo: "Ser pontual", correto: false },
            { conteudo: "Demonstrar ética nas ações", correto: false }
        ],
        justificativa: "Desrespeitar normas prejudica a imagem profissional e o ambiente de trabalho.",
        categoriaDaPergunta: "definicao-e-importancia-sobre-postura-profissional"
    },
    {
        enunciado: "O que significa zelo no ambiente profissional?",
        arrayDeRespostas: [
            { conteudo: "Cuidado e atenção na execução das tarefas para evitar erros", correto: true },
            { conteudo: "Fazer o mínimo necessário", correto: false },
            { conteudo: "Ignorar os detalhes do trabalho", correto: false },
            { conteudo: "Deixar tarefas para depois", correto: false }
        ],
        justificativa: "Zelo representa o cuidado e responsabilidade na realização das atividades.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "Como a eficiência pode ser definida no trabalho?",
        arrayDeRespostas: [
            { conteudo: "Realizar as tarefas de forma correta e com bom aproveitamento de recursos", correto: true },
            { conteudo: "Trabalhar lentamente para evitar erros", correto: false },
            { conteudo: "Fazer várias tarefas ao mesmo tempo sem foco", correto: false },
            { conteudo: "Delegar todas as responsabilidades para os colegas", correto: false }
        ],
        justificativa: "Eficiência é produzir resultados com qualidade e uso adequado dos recursos.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "O que caracteriza a imparcialidade no ambiente de trabalho?",
        arrayDeRespostas: [
            { conteudo: "Tomar decisões sem favoritismo ou preconceito", correto: true },
            { conteudo: "Beneficiar amigos nas decisões", correto: false },
            { conteudo: "Desconsiderar regras para favorecer alguém", correto: false },
            { conteudo: "Agir conforme interesses pessoais", correto: false }
        ],
        justificativa: "Imparcialidade é agir com justiça e equidade, sem influências externas.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "O que significa impessoalidade na atuação profissional?",
        arrayDeRespostas: [
            { conteudo: "Atuar com base em critérios objetivos, sem influências pessoais", correto: true },
            { conteudo: "Tratar colegas com favoritismo", correto: false },
            { conteudo: "Decidir de forma emocional", correto: false },
            { conteudo: "Ignorar regras e normas", correto: false }
        ],
        justificativa: "Impessoalidade assegura que as ações sejam pautadas na justiça e nas normas vigentes.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "Por que a disciplina é importante no ambiente de trabalho?",
        arrayDeRespostas: [
            { conteudo: "Porque promove a organização e o cumprimento de regras e prazos", correto: true },
            { conteudo: "Porque permite flexibilizar as regras sempre que quiser", correto: false },
            { conteudo: "Porque favorece o desrespeito aos colegas", correto: false },
            { conteudo: "Porque impede o crescimento profissional", correto: false }
        ],
        justificativa: "Disciplina ajuda a manter o ambiente produtivo e respeitoso para todos.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "O que significa assiduidade no contexto profissional?",
        arrayDeRespostas: [
            { conteudo: "Presença regular e pontualidade no trabalho", correto: true },
            { conteudo: "Faltar frequentemente ao trabalho", correto: false },
            { conteudo: "Chegar atrasado frequentemente", correto: false },
            { conteudo: "Deixar de cumprir prazos", correto: false }
        ],
        justificativa: "Assiduidade indica compromisso e responsabilidade com o trabalho.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "Qual desses comportamentos demonstra zelo profissional?",
        arrayDeRespostas: [
            { conteudo: "Revisar o trabalho antes de entregar", correto: true },
            { conteudo: "Deixar erros passarem sem correção", correto: false },
            { conteudo: "Procrastinar tarefas importantes", correto: false },
            { conteudo: "Ignorar instruções", correto: false }
        ],
        justificativa: "Zelo implica atenção aos detalhes e qualidade na entrega das tarefas.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "Como a eficiência impacta os resultados do trabalho?",
        arrayDeRespostas: [
            { conteudo: "Melhora a produtividade e otimiza o uso de recursos", correto: true },
            { conteudo: "Reduz a qualidade do serviço", correto: false },
            { conteudo: "Aumenta o desperdício de tempo", correto: false },
            { conteudo: "Diminui o foco nas tarefas", correto: false }
        ],
        justificativa: "Eficiência é produzir bons resultados com menor esforço e recursos usados corretamente.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "Qual a importância da imparcialidade nas decisões profissionais?",
        arrayDeRespostas: [
            { conteudo: "Garantir justiça e evitar favorecimentos indevidos", correto: true },
            { conteudo: "Atender interesses pessoais", correto: false },
            { conteudo: "Ignorar os fatos", correto: false },
            { conteudo: "Agir conforme preferências pessoais", correto: false }
        ],
        justificativa: "Imparcialidade promove um ambiente ético e confiável no trabalho.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "O que demonstra disciplina no ambiente profissional?",
        arrayDeRespostas: [
            { conteudo: "Cumprir horários e seguir as normas da empresa", correto: true },
            { conteudo: "Desrespeitar regras e atrasar entregas", correto: false },
            { conteudo: "Ignorar as responsabilidades", correto: false },
            { conteudo: "Fazer apenas o mínimo necessário", correto: false }
        ],
        justificativa: "Disciplina é fundamental para o funcionamento organizado e eficaz da equipe.",
        categoriaDaPergunta: "zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade"
    },
    {
        enunciado: "O que é considerado uma boa apresentação pessoal no ambiente de trabalho?",
        arrayDeRespostas: [
            { conteudo: "Cuidar da higiene, vestir-se adequadamente e demonstrar postura profissional", correto: true },
            { conteudo: "Usar roupas informais e negligenciar a higiene", correto: false },
            { conteudo: "Chegar atrasado e desorganizado", correto: false },
            { conteudo: "Ignorar o ambiente e o contexto do trabalho", correto: false }
        ],
        justificativa: "A boa apresentação pessoal envolve cuidar da imagem e transmitir profissionalismo.",
        categoriaDaPergunta: "apresentacao-pessoal"
    },
    {
        enunciado: "Por que a apresentação pessoal é importante no ambiente profissional?",
        arrayDeRespostas: [
            { conteudo: "Porque influencia a primeira impressão e a credibilidade do profissional", correto: true },
            { conteudo: "Porque permite ignorar as normas da empresa", correto: false },
            { conteudo: "Porque não afeta as relações profissionais", correto: false },
            { conteudo: "Porque dispensa o respeito pelos colegas", correto: false }
        ],
        justificativa: "A apresentação pessoal adequada favorece a imagem e o respeito no trabalho.",
        categoriaDaPergunta: "apresentacao-pessoal"
    },
    {
        enunciado: "Qual atitude NÃO faz parte da boa apresentação pessoal?",
        arrayDeRespostas: [
            { conteudo: "Usar roupas sujas ou inadequadas", correto: true },
            { conteudo: "Manter boa higiene pessoal", correto: false },
            { conteudo: "Ter postura adequada", correto: false },
            { conteudo: "Ser pontual e organizado", correto: false }
        ],
        justificativa: "Roupas sujas ou inadequadas prejudicam a imagem profissional.",
        categoriaDaPergunta: "apresentacao-pessoal"
    },
    {
        enunciado: "Como a apresentação pessoal pode impactar a carreira de um profissional?",
        arrayDeRespostas: [
            { conteudo: "Melhorando a confiança e as oportunidades de crescimento", correto: true },
            { conteudo: "Prejudicando o relacionamento com colegas", correto: false },
            { conteudo: "Ignorando as responsabilidades do trabalho", correto: false },
            { conteudo: "Dificultando a comunicação com a equipe", correto: false }
        ],
        justificativa: "Uma boa apresentação pode abrir portas e fortalecer a reputação profissional.",
        categoriaDaPergunta: "apresentacao-pessoal"
    },
    {
        enunciado: "Qual das opções contribui para uma boa apresentação pessoal?",
        arrayDeRespostas: [
            { conteudo: "Vestir-se de acordo com o código de vestimenta da empresa", correto: true },
            { conteudo: "Ignorar as normas de higiene", correto: false },
            { conteudo: "Chegar atrasado frequentemente", correto: false },
            { conteudo: "Demonstrar desinteresse no trabalho", correto: false }
        ],
        justificativa: "Seguir o código de vestimenta e cuidar da higiene são essenciais para uma boa apresentação.",
        categoriaDaPergunta: "apresentacao-pessoal"
    },
    {
        enunciado: "O que caracteriza um ambiente de trabalho saudável?",
        arrayDeRespostas: [
            { conteudo: "Ambiente que promove respeito, colaboração e bem-estar dos colaboradores", correto: true },
            { conteudo: "Local onde não há comunicação entre colegas", correto: false },
            { conteudo: "Ambiente com alta rotatividade e conflitos constantes", correto: false },
            { conteudo: "Espaço sem regras ou organização", correto: false }
        ],
        justificativa: "Um ambiente saudável favorece a produtividade e a satisfação dos funcionários.",
        categoriaDaPergunta: "definicao-e-importancia-no-ambiente-de-trabalho"
    },
    {
        enunciado: "Por que a importância da comunicação clara no ambiente de trabalho?",
        arrayDeRespostas: [
            { conteudo: "Evita mal-entendidos e facilita a cooperação entre os membros da equipe", correto: true },
            { conteudo: "Aumenta os conflitos e rivalidades", correto: false },
            { conteudo: "Diminui a produtividade", correto: false },
            { conteudo: "Impede a troca de informações", correto: false }
        ],
        justificativa: "Comunicação clara é fundamental para o sucesso e harmonia no trabalho.",
        categoriaDaPergunta: "definicao-e-importancia-no-ambiente-de-trabalho"
    },
    {
        enunciado: "Qual a importância do respeito mútuo no ambiente de trabalho?",
        arrayDeRespostas: [
            { conteudo: "Promove um clima organizacional positivo e produtivo", correto: true },
            { conteudo: "Gera desconfiança entre os colaboradores", correto: false },
            { conteudo: "Fomenta conflitos", correto: false },
            { conteudo: "Diminui a motivação da equipe", correto: false }
        ],
        justificativa: "O respeito fortalece as relações profissionais e melhora o desempenho coletivo.",
        categoriaDaPergunta: "definicao-e-importancia-no-ambiente-de-trabalho"
    },
    {
        enunciado: "O que pode prejudicar o ambiente de trabalho?",
        arrayDeRespostas: [
            { conteudo: "Falta de ética e colaboração entre os membros da equipe", correto: true },
            { conteudo: "Trabalho em equipe e diálogo", correto: false },
            { conteudo: "Feedback construtivo", correto: false },
            { conteudo: "Respeito às diferenças", correto: false }
        ],
        justificativa: "A falta de ética e colaboração gera um ambiente tóxico e improdutivo.",
        categoriaDaPergunta: "definicao-e-importancia-no-ambiente-de-trabalho"
    },
    {
        enunciado: "Qual é o impacto de um bom ambiente de trabalho na produtividade?",
        arrayDeRespostas: [
            { conteudo: "Aumenta a motivação e o desempenho dos colaboradores", correto: true },
            { conteudo: "Reduz o comprometimento com as tarefas", correto: false },
            { conteudo: "Causa estresse e ansiedade", correto: false },
            { conteudo: "Diminui a qualidade do trabalho", correto: false }
        ],
        justificativa: "Ambientes positivos favorecem a eficiência e resultados melhores.",
        categoriaDaPergunta: "definicao-e-importancia-no-ambiente-de-trabalho"
    },
    {
        enunciado: "O que é comunicação eficaz nas relações interpessoais?",
        arrayDeRespostas: [
            { conteudo: "Transmitir e receber informações de forma clara e compreensível", correto: true },
            { conteudo: "Falar o máximo possível sem ouvir", correto: false },
            { conteudo: "Evitar expressar opiniões para não gerar conflitos", correto: false },
            { conteudo: "Interromper constantemente para corrigir os outros", correto: false }
        ],
        justificativa: "Comunicação eficaz envolve clareza e atenção ao ouvir e falar.",
        categoriaDaPergunta: "habilidades-essencias-para-boas-relacoes-interpessoais"
    },
    {
        enunciado: "Por que a empatia é importante nas relações interpessoais?",
        arrayDeRespostas: [
            { conteudo: "Porque permite compreender os sentimentos e perspectivas dos outros", correto: true },
            { conteudo: "Porque ignora as emoções alheias", correto: false },
            { conteudo: "Porque fortalece a indiferença", correto: false },
            { conteudo: "Porque evita a cooperação", correto: false }
        ],
        justificativa: "Empatia ajuda a construir conexões humanas positivas e colaboração.",
        categoriaDaPergunta: "habilidades-essencias-para-boas-relacoes-interpessoais"
    },
    {
        enunciado: "O que significa ter habilidades de escuta ativa?",
        arrayDeRespostas: [
            { conteudo: "Ouvir atentamente e demonstrar interesse genuíno na conversa", correto: true },
            { conteudo: "Ouvir parcialmente enquanto pensa em outra coisa", correto: false },
            { conteudo: "Ignorar o que o interlocutor fala", correto: false },
            { conteudo: "Interromper o tempo todo para dar opinião", correto: false }
        ],
        justificativa: "Escuta ativa é fundamental para entender e responder adequadamente.",
        categoriaDaPergunta: "habilidades-essencias-para-boas-relacoes-interpessoais"
    },
    {
        enunciado: "Como o respeito influencia as relações interpessoais no trabalho?",
        arrayDeRespostas: [
            { conteudo: "Promove um ambiente de confiança e cooperação", correto: true },
            { conteudo: "Gera conflitos e desconfiança", correto: false },
            { conteudo: "Inibe a comunicação", correto: false },
            { conteudo: "Diminui a produtividade", correto: false }
        ],
        justificativa: "O respeito facilita o diálogo e o trabalho em equipe.",
        categoriaDaPergunta: "habilidades-essencias-para-boas-relacoes-interpessoais"
    },
    {
        enunciado: "Por que a assertividade é uma habilidade importante nas relações interpessoais?",
        arrayDeRespostas: [
            { conteudo: "Porque permite expressar opiniões de forma clara e respeitosa", correto: true },
            { conteudo: "Porque evita expressar qualquer opinião", correto: false },
            { conteudo: "Porque reforça a agressividade", correto: false },
            { conteudo: "Porque impede a comunicação", correto: false }
        ],
        justificativa: "Assertividade equilibra a comunicação entre expressar-se e respeitar o outro.",
        categoriaDaPergunta: "habilidades-essencias-para-boas-relacoes-interpessoais"
    },
    {
        enunciado: "O que caracteriza um ofício como documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Comunicação formal entre órgãos públicos ou entre órgãos e particulares", correto: true },
            { conteudo: "Mensagem informal entre colegas", correto: false },
            { conteudo: "Documento pessoal sem valor oficial", correto: false },
            { conteudo: "Relatório interno de empresa privada", correto: false }
        ],
        justificativa: "O ofício é uma forma oficial de comunicação escrita, com formato padronizado.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual a finalidade do memorando em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Comunicação interna rápida entre setores ou departamentos", correto: true },
            { conteudo: "Documento para divulgação pública", correto: false },
            { conteudo: "Registro de atas em reuniões", correto: false },
            { conteudo: "Proposta para licitação", correto: false }
        ],
        justificativa: "Memorandos são usados para comunicações ágeis dentro da mesma instituição.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "O que é uma circular no contexto de documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Documento para comunicação dirigida a múltiplos destinatários", correto: true },
            { conteudo: "Comunicado pessoal", correto: false },
            { conteudo: "Documento de planejamento estratégico", correto: false },
            { conteudo: "Relatório de auditoria", correto: false }
        ],
        justificativa: "Circular tem o objetivo de informar várias pessoas simultaneamente.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Para que serve um aviso em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Comunicar fatos ou orientações importantes de forma breve", correto: true },
            { conteudo: "Registrar reuniões", correto: false },
            { conteudo: "Realizar contratos", correto: false },
            { conteudo: "Enviar propostas comerciais", correto: false }
        ],
        justificativa: "Avisos são usados para informar de forma rápida e objetiva.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "O que é um requerimento em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Pedido formal feito por pessoa física ou jurídica", correto: true },
            { conteudo: "Relatório de atividades", correto: false },
            { conteudo: "Comunicação interna", correto: false },
            { conteudo: "Documento de divulgação", correto: false }
        ],
        justificativa: "Requerimento formaliza pedidos para análise ou decisão de órgãos públicos.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual é a função principal da ata em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Registrar fielmente o que foi discutido e decidido em reuniões", correto: true },
            { conteudo: "Enviar comunicações internas", correto: false },
            { conteudo: "Solicitar documentos", correto: false },
            { conteudo: "Divulgar informações externas", correto: false }
        ],
        justificativa: "Atas são registros formais das decisões e ocorrências em reuniões oficiais.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "O que caracteriza um relatório em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Apresentar análise ou resultado de atividades e eventos", correto: true },
            { conteudo: "Comunicação informal", correto: false },
            { conteudo: "Pedido formal", correto: false },
            { conteudo: "Divulgação pública", correto: false }
        ],
        justificativa: "Relatórios sistematizam informações para análise e tomada de decisões.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual a finalidade de um decreto em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Normatizar atos administrativos com força de lei", correto: true },
            { conteudo: "Comunicação interna rápida", correto: false },
            { conteudo: "Solicitação formal", correto: false },
            { conteudo: "Registro de reunião", correto: false }
        ],
        justificativa: "Decretos estabelecem regras e diretrizes oficiais obrigatórias.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "O que é uma portaria no contexto de documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Ato administrativo que regulamenta procedimentos internos", correto: true },
            { conteudo: "Documento para comunicação externa", correto: false },
            { conteudo: "Relatório de auditoria", correto: false },
            { conteudo: "Pedido formal", correto: false }
        ],
        justificativa: "Portarias definem normas e rotinas dentro das instituições públicas.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial é usado para comunicar decisões ou determinações de autoridades?",
        arrayDeRespostas: [
            { conteudo: "Ofício", correto: true },
            { conteudo: "Ata", correto: false },
            { conteudo: "Memorando", correto: false },
            { conteudo: "Circular", correto: false }
        ],
        justificativa: "Ofício é o documento padrão para comunicação formal entre autoridades e órgãos.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial é utilizado para comunicar ordens ou instruções formais dentro de uma instituição?",
        arrayDeRespostas: [
            { conteudo: "Memorando", correto: true },
            { conteudo: "Ofício", correto: false },
            { conteudo: "Relatório", correto: false },
            { conteudo: "Ata", correto: false }
        ],
        justificativa: "Memorandos são usados para comunicações internas rápidas e formais.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial registra a lista de presença e decisões de uma reunião?",
        arrayDeRespostas: [
            { conteudo: "Ata", correto: true },
            { conteudo: "Ofício", correto: false },
            { conteudo: "Circular", correto: false },
            { conteudo: "Requerimento", correto: false }
        ],
        justificativa: "Atas documentam formalmente os acontecimentos e deliberações em reuniões.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial é usado para fazer um pedido formal a uma autoridade ou órgão público?",
        arrayDeRespostas: [
            { conteudo: "Requerimento", correto: true },
            { conteudo: "Memorando", correto: false },
            { conteudo: "Relatório", correto: false },
            { conteudo: "Aviso", correto: false }
        ],
        justificativa: "Requerimentos formalizam pedidos para análise e decisão oficial.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual é a principal característica da circular?",
        arrayDeRespostas: [
            { conteudo: "Destinada a vários destinatários para divulgar informações ou orientações", correto: true },
            { conteudo: "Documento para pedido formal", correto: false },
            { conteudo: "Comunicação interna restrita a um setor", correto: false },
            { conteudo: "Registro de reunião", correto: false }
        ],
        justificativa: "Circulares são usadas para comunicação ampla dentro da organização.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial formaliza uma decisão com força de lei dentro do poder executivo?",
        arrayDeRespostas: [
            { conteudo: "Decreto", correto: true },
            { conteudo: "Portaria", correto: false },
            { conteudo: "Ofício", correto: false },
            { conteudo: "Memorando", correto: false }
        ],
        justificativa: "Decretos regulamentam e disciplinam atos administrativos com força legal.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial é utilizado para normatizar procedimentos internos de uma instituição pública?",
        arrayDeRespostas: [
            { conteudo: "Portaria", correto: true },
            { conteudo: "Ofício", correto: false },
            { conteudo: "Circular", correto: false },
            { conteudo: "Relatório", correto: false }
        ],
        justificativa: "Portarias definem regras e normas internas para o funcionamento da instituição.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial deve conter elementos como cabeçalho, destinatário, corpo do texto e assinatura?",
        arrayDeRespostas: [
            { conteudo: "Ofício", correto: true },
            { conteudo: "Memorando", correto: false },
            { conteudo: "Relatório", correto: false },
            { conteudo: "Ata", correto: false }
        ],
        justificativa: "O ofício segue padrão formal com esses elementos para garantir clareza e validade.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial é usado para comunicar fatos ou informações importantes de forma breve?",
        arrayDeRespostas: [
            { conteudo: "Aviso", correto: true },
            { conteudo: "Memorando", correto: false },
            { conteudo: "Relatório", correto: false },
            { conteudo: "Portaria", correto: false }
        ],
        justificativa: "Avisos são comunicações rápidas para informar situações específicas.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial apresenta dados e análises de forma detalhada para subsidiar decisões?",
        arrayDeRespostas: [
            { conteudo: "Relatório", correto: true },
            { conteudo: "Memorando", correto: false },
            { conteudo: "Requerimento", correto: false },
            { conteudo: "Circular", correto: false }
        ],
        justificativa: "Relatórios fornecem informações organizadas para avaliação e tomada de decisão.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual documento oficial serve para comunicar entre órgãos públicos e entidades externas?",
        arrayDeRespostas: [
            { conteudo: "Ofício", correto: true },
            { conteudo: "Memorando", correto: false },
            { conteudo: "Ata", correto: false },
            { conteudo: "Aviso", correto: false }
        ],
        justificativa: "Ofícios são usados para comunicações oficiais entre órgãos e entidades externas.",
        categoriaDaPergunta: "tipos-de-documentos-oficiais"
    },
    {
        enunciado: "Qual é uma característica fundamental dos documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Ser formal e obedecer a padrões estabelecidos", correto: true },
            { conteudo: "Ser informal e flexível", correto: false },
            { conteudo: "Ser escrito de forma coloquial", correto: false },
            { conteudo: "Não precisar de assinatura", correto: false }
        ],
        justificativa: "Documentos oficiais exigem formalidade e padronização para garantir validade.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual elemento não pode faltar em um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Assinatura do responsável", correto: true },
            { conteudo: "Comentários informais", correto: false },
            { conteudo: "Linguagem subjetiva", correto: false },
            { conteudo: "Erros gramaticais", correto: false }
        ],
        justificativa: "A assinatura legitima o documento e o torna oficial.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual a importância do cabeçalho em um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Identificar o órgão emissor e a natureza do documento", correto: true },
            { conteudo: "Ser um espaço para decoração", correto: false },
            { conteudo: "Ficar em branco para economizar tinta", correto: false },
            { conteudo: "Ser removido para agilizar leitura", correto: false }
        ],
        justificativa: "O cabeçalho fornece informações essenciais para identificar o documento.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "O que garante a clareza de um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Uso de linguagem objetiva e precisa", correto: true },
            { conteudo: "Uso de expressões ambíguas", correto: false },
            { conteudo: "Frases longas e confusas", correto: false },
            { conteudo: "Jargões técnicos desnecessários", correto: false }
        ],
        justificativa: "Linguagem clara evita interpretações equivocadas e facilita a compreensão.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual característica é essencial para garantir a autenticidade do documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Assinatura e carimbo oficiais", correto: true },
            { conteudo: "Comentários manuscritos aleatórios", correto: false },
            { conteudo: "Falta de identificação do emissor", correto: false },
            { conteudo: "Linguagem informal", correto: false }
        ],
        justificativa: "Assinaturas e carimbos validam a autenticidade e autoridade do documento.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "Por que os documentos oficiais seguem uma estrutura padrão?",
        arrayDeRespostas: [
            { conteudo: "Para facilitar a compreensão e garantir uniformidade", correto: true },
            { conteudo: "Para dificultar a leitura", correto: false },
            { conteudo: "Para permitir variações conforme o humor do autor", correto: false },
            { conteudo: "Para eliminar a necessidade de revisão", correto: false }
        ],
        justificativa: "Estrutura padronizada torna os documentos mais organizados e profissionais.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual é a função do destinatário em um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Indicar para quem o documento é dirigido", correto: true },
            { conteudo: "Fazer parte do cabeçalho decorativo", correto: false },
            { conteudo: "Ser ignorado na comunicação", correto: false },
            { conteudo: "Substituir a assinatura", correto: false }
        ],
        justificativa: "O destinatário é essencial para direcionar o documento corretamente.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual característica distingue um documento oficial de um informal?",
        arrayDeRespostas: [
            { conteudo: "Formalidade e validade jurídica", correto: true },
            { conteudo: "Uso de linguagem coloquial", correto: false },
            { conteudo: "Ausência de regras", correto: false },
            { conteudo: "Falta de registro", correto: false }
        ],
        justificativa: "Documentos oficiais possuem valor legal e seguem normas específicas.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "O que o corpo do texto em um documento oficial deve conter?",
        arrayDeRespostas: [
            { conteudo: "Informações claras, objetivas e pertinentes ao assunto", correto: true },
            { conteudo: "Textos extensos e subjetivos", correto: false },
            { conteudo: "Opiniões pessoais do autor", correto: false },
            { conteudo: "Comentários irrelevantes", correto: false }
        ],
        justificativa: "O corpo do texto é a parte principal onde se expõe o conteúdo oficial.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "Por que a datacão é importante em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Permite identificar quando o documento foi emitido", correto: true },
            { conteudo: "Serve apenas como elemento decorativo", correto: false },
            { conteudo: "Pode ser omitida sem problemas", correto: false },
            { conteudo: "Não tem valor jurídico", correto: false }
        ],
        justificativa: "A datação é fundamental para controle e validade dos documentos oficiais.",
        categoriaDaPergunta: "caracteristicas-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual a primeira parte da estrutura de um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Cabeçalho", correto: true },
            { conteudo: "Corpo do texto", correto: false },
            { conteudo: "Destinatário", correto: false },
            { conteudo: "Fechamento", correto: false }
        ],
        justificativa: "O cabeçalho identifica o órgão emissor e o tipo de documento.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "O que geralmente consta no cabeçalho de um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Nome e logotipo do órgão emissor, número do documento e data", correto: true },
            { conteudo: "Resumo do conteúdo", correto: false },
            { conteudo: "Assinaturas", correto: false },
            { conteudo: "Comentários informais", correto: false }
        ],
        justificativa: "O cabeçalho apresenta informações essenciais para identificação e protocolo.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual parte da estrutura do documento oficial identifica a quem ele é dirigido?",
        arrayDeRespostas: [
            { conteudo: "Destinatário", correto: true },
            { conteudo: "Cabeçalho", correto: false },
            { conteudo: "Assinatura", correto: false },
            { conteudo: "Corpo do texto", correto: false }
        ],
        justificativa: "O destinatário é o elemento que indica o receptor do documento.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "O que deve conter o corpo do texto em um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "A mensagem principal, clara, objetiva e completa", correto: true },
            { conteudo: "Assinaturas e carimbos", correto: false },
            { conteudo: "Dados do destinatário", correto: false },
            { conteudo: "Número do documento", correto: false }
        ],
        justificativa: "O corpo do texto é a parte principal com o conteúdo da comunicação oficial.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual parte da estrutura oficializa o encerramento do documento?",
        arrayDeRespostas: [
            { conteudo: "Fechamento", correto: true },
            { conteudo: "Cabeçalho", correto: false },
            { conteudo: "Corpo do texto", correto: false },
            { conteudo: "Destinatário", correto: false }
        ],
        justificativa: "O fechamento contém saudações, agradecimentos e a despedida formal.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "Onde fica a assinatura em um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "No fechamento, abaixo da despedida formal", correto: true },
            { conteudo: "No cabeçalho", correto: false },
            { conteudo: "No corpo do texto", correto: false },
            { conteudo: "Na margem lateral", correto: false }
        ],
        justificativa: "A assinatura legitima o documento e deve estar no final, junto ao fechamento.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual a função da data em um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Indicar o dia em que o documento foi emitido", correto: true },
            { conteudo: "Ser um elemento decorativo", correto: false },
            { conteudo: "Substituir a assinatura", correto: false },
            { conteudo: "Indicar o destinatário", correto: false }
        ],
        justificativa: "A datação é fundamental para o controle e validade do documento.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "O que é o campo de referência em um documento oficial?",
        arrayDeRespostas: [
            { conteudo: "Espaço para indicar o assunto ou documento relacionado", correto: true },
            { conteudo: "Área para assinaturas adicionais", correto: false },
            { conteudo: "Campo para o nome do destinatário", correto: false },
            { conteudo: "Seção para comentários informais", correto: false }
        ],
        justificativa: "A referência facilita a identificação do tema tratado no documento.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "Em documentos oficiais, o que deve evitar no corpo do texto?",
        arrayDeRespostas: [
            { conteudo: "Linguagem subjetiva e informações irrelevantes", correto: true },
            { conteudo: "Linguagem clara e objetiva", correto: false },
            { conteudo: "Informações essenciais ao tema", correto: false },
            { conteudo: "Estruturação em parágrafos", correto: false }
        ],
        justificativa: "Textos oficiais devem ser objetivos, evitando ambiguidades e detalhes desnecessários.",
        categoriaDaPergunta: "estrutura-dos-documentos-oficiais"
    },
    {
        enunciado: "Qual é o objetivo principal das regras de redação oficial?",
        arrayDeRespostas: [
            { conteudo: "Garantir clareza, objetividade e formalidade na comunicação escrita", correto: true },
            { conteudo: "Permitir uso livre e informal da linguagem", correto: false },
            { conteudo: "Incentivar o uso de gírias e jargões", correto: false },
            { conteudo: "Deixar o texto subjetivo e interpretativo", correto: false }
        ],
        justificativa: "As regras visam padronizar e formalizar os documentos oficiais.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Qual norma é frequentemente adotada para padronizar documentos oficiais no Brasil?",
        arrayDeRespostas: [
            { conteudo: "Manual de Redação da Presidência da República", correto: true },
            { conteudo: "ABNT NBR 6023", correto: false },
            { conteudo: "ISO 9001", correto: false },
            { conteudo: "Manual de Estilo da APA", correto: false }
        ],
        justificativa: "O Manual de Redação da Presidência da República é referência oficial para textos governamentais.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Como deve ser o uso dos pronomes de tratamento em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Deve seguir as normas de formalidade adequadas ao cargo e à autoridade", correto: true },
            { conteudo: "Pode-se usar pronomes informais como 'você'", correto: false },
            { conteudo: "Não é necessário usar pronomes de tratamento", correto: false },
            { conteudo: "Pode-se inventar pronomes conforme preferência", correto: false }
        ],
        justificativa: "O uso correto dos pronomes mantém o respeito e a formalidade necessárias.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Como devem ser apresentadas as datas em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Por extenso, com dia, mês e ano (ex.: 10 de agosto de 2025)", correto: true },
            { conteudo: "Somente em números (ex.: 10/08/25)", correto: false },
            { conteudo: "Apenas o mês e o ano", correto: false },
            { conteudo: "Com abreviações informais", correto: false }
        ],
        justificativa: "A data por extenso garante clareza e evita ambiguidades.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Qual é a recomendação para o uso de siglas em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Deve-se escrever o nome completo na primeira menção, seguido da sigla entre parênteses", correto: true },
            { conteudo: "Usar siglas sem explicação desde o início", correto: false },
            { conteudo: "Evitar siglas em qualquer situação", correto: false },
            { conteudo: "Criar siglas livremente sem padrão", correto: false }
        ],
        justificativa: "Explicar siglas na primeira vez evita confusões para o leitor.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Como deve ser o uso dos números em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Números até dez são escritos por extenso, acima disso em algarismos", correto: true },
            { conteudo: "Todos os números devem ser escritos por extenso", correto: false },
            { conteudo: "Todos os números devem ser em algarismos", correto: false },
            { conteudo: "Pode-se usar qualquer formato, sem padrão", correto: false }
        ],
        justificativa: "Essa regra melhora a legibilidade e o padrão do texto.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Qual deve ser o tom da linguagem em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Formal, impessoal e objetiva", correto: true },
            { conteudo: "Informal e coloquial", correto: false },
            { conteudo: "Subjetivo e emocional", correto: false },
            { conteudo: "Irônico e crítico", correto: false }
        ],
        justificativa: "A formalidade e impessoalidade garantem seriedade e profissionalismo.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Como deve ser o uso das abreviaturas em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Devem ser usadas apenas as oficialmente reconhecidas e conhecidas", correto: true },
            { conteudo: "Podem ser criadas livremente", correto: false },
            { conteudo: "Abreviaturas não são permitidas", correto: false },
            { conteudo: "Podem ser informais", correto: false }
        ],
        justificativa: "Abreviaturas devem seguir padrões para evitar ambiguidades.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Como deve ser a estruturação dos parágrafos em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Parágrafos curtos, claros e organizados", correto: true },
            { conteudo: "Parágrafos longos e confusos", correto: false },
            { conteudo: "Textos sem parágrafos", correto: false },
            { conteudo: "Parágrafos cheios de informações irrelevantes", correto: false }
        ],
        justificativa: "Parágrafos bem estruturados facilitam a leitura e compreensão.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "Qual é a recomendação para o uso de linguagem em documentos oficiais?",
        arrayDeRespostas: [
            { conteudo: "Utilizar linguagem clara, objetiva e sem ambiguidades", correto: true },
            { conteudo: "Usar linguagem subjetiva e complexa", correto: false },
            { conteudo: "Utilizar jargões técnicos sem explicação", correto: false },
            { conteudo: "Empregar expressões populares e informais", correto: false }
        ],
        justificativa: "Linguagem clara garante o entendimento por todos os destinatários.",
        categoriaDaPergunta: "regras-de-redacao-oficial"
    },
    {
        enunciado: "O que caracteriza o regime jurídico administrativo no Brasil?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de normas que regulam a atuação da administração pública", correto: true },
            { conteudo: "Regras apenas para empresas privadas", correto: false },
            { conteudo: "Legislação trabalhista exclusiva de órgãos públicos", correto: false },
            { conteudo: "Normas sobre contratos comerciais", correto: false }
        ],
        justificativa: "O regime jurídico administrativo define como a administração deve atuar e suas responsabilidades.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "Qual princípio norteia a atuação da administração pública segundo o regime jurídico?",
        arrayDeRespostas: [
            { conteudo: "Legalidade", correto: true },
            { conteudo: "Lucro", correto: false },
            { conteudo: "Flexibilidade total", correto: false },
            { conteudo: "Autonomia empresarial", correto: false }
        ],
        justificativa: "A administração pública deve agir conforme a lei, princípio central do regime jurídico administrativo.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "O regime jurídico administrativo distingue-se do regime privado principalmente porque:",
        arrayDeRespostas: [
            { conteudo: "Administração age com prerrogativas e restrições específicas para interesse público", correto: true },
            { conteudo: "Não há necessidade de obedecer à lei", correto: false },
            { conteudo: "O lucro é o objetivo principal", correto: false },
            { conteudo: "Os contratos seguem regras exclusivamente comerciais", correto: false }
        ],
        justificativa: "O regime jurídico administrativo prioriza o interesse público e impõe limites à atuação da administração.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "Qual é a função dos atos administrativos dentro do regime jurídico administrativo?",
        arrayDeRespostas: [
            { conteudo: "Regular a atuação do Estado e gerar efeitos jurídicos para terceiros", correto: true },
            { conteudo: "Servir apenas como recomendação interna", correto: false },
            { conteudo: "Substituir decisões judiciais", correto: false },
            { conteudo: "Garantir lucro aos órgãos públicos", correto: false }
        ],
        justificativa: "Atos administrativos são instrumentos formais que concretizam a atuação da administração.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "Qual a principal diferença entre regime jurídico administrativo e regime jurídico de direito privado?",
        arrayDeRespostas: [
            { conteudo: "O público prioriza o interesse coletivo; o privado prioriza o interesse individual", correto: true },
            { conteudo: "O privado não tem regras", correto: false },
            { conteudo: "O público visa apenas lucro", correto: false },
            { conteudo: "Não há diferença significativa", correto: false }
        ],
        justificativa: "A distinção fundamental está na finalidade e nas prerrogativas legais de cada regime.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "O regime jurídico administrativo inclui normas sobre:",
        arrayDeRespostas: [
            { conteudo: "Servidores, licitações, contratos e atos administrativos", correto: true },
            { conteudo: "Somente contratos empresariais", correto: false },
            { conteudo: "Apenas legislação tributária privada", correto: false },
            { conteudo: "Questões de direito penal privado", correto: false }
        ],
        justificativa: "O regime jurídico administrativo regula todas as atividades do Estado e seus servidores.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "O princípio da impessoalidade, previsto no regime jurídico administrativo, significa que:",
        arrayDeRespostas: [
            { conteudo: "A atuação da administração deve visar ao interesse público, sem favorecimentos pessoais", correto: true },
            { conteudo: "O gestor pode favorecer familiares", correto: false },
            { conteudo: "Decisões podem ser arbitrárias", correto: false },
            { conteudo: "O lucro do servidor é prioritário", correto: false }
        ],
        justificativa: "Imparcialidade garante que a administração atue sempre para o bem comum.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "O regime jurídico administrativo é regido principalmente por qual conjunto de normas?",
        arrayDeRespostas: [
            { conteudo: "Constituição, leis, decretos e regulamentos", correto: true },
            { conteudo: "Regras empresariais internas", correto: false },
            { conteudo: "Normas internacionais comerciais", correto: false },
            { conteudo: "Costumes privados", correto: false }
        ],
        justificativa: "As normas jurídicas definem direitos, deveres e limites da administração pública.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "O regime jurídico administrativo garante ao cidadão:",
        arrayDeRespostas: [
            { conteudo: "Proteção contra abusos e acesso a serviços públicos de forma justa", correto: true },
            { conteudo: "Lucro em processos administrativos", correto: false },
            { conteudo: "Direito de interferir em decisões internas sem limites", correto: false },
            { conteudo: "Prerrogativas de gestor público", correto: false }
        ],
        justificativa: "As normas visam assegurar transparência, legalidade e proteção ao cidadão.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "O que significa que a administração pública atua com prerrogativas no regime jurídico administrativo?",
        arrayDeRespostas: [
            { conteudo: "Possui poderes especiais, como autotutela e poder de polícia, para cumprir suas funções", correto: true },
            { conteudo: "Pode agir sem lei e sem controle", correto: false },
            { conteudo: "Prioriza apenas interesses privados", correto: false },
            { conteudo: "Está sujeita exclusivamente às regras de direito privado", correto: false }
        ],
        justificativa: "Prerrogativas são poderes que permitem à administração pública atuar de forma eficaz e protegida por lei.",
        categoriaDaPergunta: "regime-juridico-administrativo"
    },
    {
        enunciado: "Qual a diferença fundamental entre regras e princípios na Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Regras determinam condutas específicas; princípios orientam decisões gerais", correto: true },
            { conteudo: "Regras são subjetivas; princípios são obrigatórios", correto: false },
            { conteudo: "Princípios estabelecem punições; regras são sugestões", correto: false },
            { conteudo: "Não há diferença significativa entre eles", correto: false }
        ],
        justificativa: "Regras definem ações concretas, enquanto princípios guiam a interpretação e aplicação das regras.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Um exemplo de princípio da Administração Pública é:",
        arrayDeRespostas: [
            { conteudo: "Legalidade", correto: true },
            { conteudo: "Preencher um formulário", correto: false },
            { conteudo: "Emitir um ofício", correto: false },
            { conteudo: "Seguir um checklist interno", correto: false }
        ],
        justificativa: "Princípios como legalidade orientam toda a atuação da administração pública.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Um exemplo de regra na Administração Pública é:",
        arrayDeRespostas: [
            { conteudo: "Exigir assinatura do gestor em um ofício", correto: true },
            { conteudo: "Impessoalidade na atuação do servidor", correto: false },
            { conteudo: "Finalidade pública das ações", correto: false },
            { conteudo: "Eficiência no serviço público", correto: false }
        ],
        justificativa: "Regras definem procedimentos específicos a serem seguidos.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Princípios da Administração Pública são:",
        arrayDeRespostas: [
            { conteudo: "Normas orientadoras que norteiam a atuação administrativa", correto: true },
            { conteudo: "Procedimentos obrigatórios detalhados", correto: false },
            { conteudo: "Documentos oficiais", correto: false },
            { conteudo: "Contratos internos", correto: false }
        ],
        justificativa: "Princípios guiam decisões e interpretação das regras sem definir ações específicas.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Regras na Administração Pública possuem característica de:",
        arrayDeRespostas: [
            { conteudo: "Detalhar condutas específicas obrigatórias", correto: true },
            { conteudo: "Ser apenas orientações gerais", correto: false },
            { conteudo: "Aplicar somente para servidores particulares", correto: false },
            { conteudo: "Ser princípios constitucionais", correto: false }
        ],
        justificativa: "Regras estabelecem exatamente como determinados atos devem ser praticados.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Qual é a relação entre princípios e regras na prática administrativa?",
        arrayDeRespostas: [
            { conteudo: "Princípios orientam a aplicação das regras", correto: true },
            { conteudo: "Regras substituem os princípios", correto: false },
            { conteudo: "Não há relação entre eles", correto: false },
            { conteudo: "Princípios são apenas sugestões", correto: false }
        ],
        justificativa: "Os princípios fornecem fundamentos e valores que justificam e guiam as regras.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Se uma regra específica não existir, a Administração deve se orientar por:",
        arrayDeRespostas: [
            { conteudo: "Princípios da Administração Pública", correto: true },
            { conteudo: "Preferência pessoal do gestor", correto: false },
            { conteudo: "Legislação estrangeira", correto: false },
            { conteudo: "Nada, pode agir livremente", correto: false }
        ],
        justificativa: "Princípios servem como guia quando regras detalhadas não estão previstas.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Qual das opções abaixo é um exemplo de aplicação de regra?",
        arrayDeRespostas: [
            { conteudo: "Registrar um processo no protocolo antes de tramitar", correto: true },
            { conteudo: "Agir com eficiência", correto: false },
            { conteudo: "Atender com imparcialidade", correto: false },
            { conteudo: "Buscar o interesse público", correto: false }
        ],
        justificativa: "A regra indica passo a passo obrigatório no procedimento administrativo.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Os princípios da Administração Pública são extraídos principalmente de:",
        arrayDeRespostas: [
            { conteudo: "Constituição Federal e leis", correto: true },
            { conteudo: "Costumes internos de empresas privadas", correto: false },
            { conteudo: "Preferências do gestor", correto: false },
            { conteudo: "Decisões judiciais estrangeiras", correto: false }
        ],
        justificativa: "Os princípios têm base legal e orientam toda a atividade administrativa.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "Por que é importante diferenciar regras de princípios na Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Para aplicar corretamente normas específicas e orientar decisões administrativas", correto: true },
            { conteudo: "Para aumentar a burocracia sem finalidade", correto: false },
            { conteudo: "Para permitir decisões arbitrárias", correto: false },
            { conteudo: "Não há importância prática", correto: false }
        ],
        justificativa: "Compreender a diferença garante que os atos administrativos sejam legais e eficientes.",
        categoriaDaPergunta: "regras-x-principios"
    },
    {
        enunciado: "O que significa a força normativa dos princípios da Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Eles têm efeito vinculante e orientam toda a atuação administrativa", correto: true },
            { conteudo: "São apenas recomendações sem efeito jurídico", correto: false },
            { conteudo: "Substituem a Constituição Federal", correto: false },
            { conteudo: "Apenas servem para decorar em concursos", correto: false }
        ],
        justificativa: "A força normativa garante que os princípios sejam obrigatórios na prática administrativa.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Qual princípio da Administração Pública possui força normativa vinculante?",
        arrayDeRespostas: [
            { conteudo: "Legalidade", correto: true },
            { conteudo: "Flexibilidade informal", correto: false },
            { conteudo: "Interesse particular", correto: false },
            { conteudo: "Decisão aleatória", correto: false }
        ],
        justificativa: "Todos os princípios constitucionais como legalidade possuem efeito jurídico e vinculam a administração.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Como a força normativa dos princípios influencia a interpretação das normas?",
        arrayDeRespostas: [
            { conteudo: "Servindo como guia para aplicação e interpretação da lei", correto: true },
            { conteudo: "Impede a aplicação da lei", correto: false },
            { conteudo: "Substitui a lei ordinária em qualquer situação", correto: false },
            { conteudo: "Serve apenas para documentos internos", correto: false }
        ],
        justificativa: "Princípios orientam decisões mesmo quando não há regra específica, garantindo coerência jurídica.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "A força normativa dos princípios torna-os:",
        arrayDeRespostas: [
            { conteudo: "Obrigatórios para todos os atos da Administração Pública", correto: true },
            { conteudo: "Opcional e apenas indicativo", correto: false },
            { conteudo: "Subordinados ao interesse pessoal do gestor", correto: false },
            { conteudo: "Aplicáveis apenas em contratos privados", correto: false }
        ],
        justificativa: "A força normativa confere caráter obrigatório aos princípios na atuação administrativa.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Se um ato administrativo viola um princípio constitucional, ele é considerado:",
        arrayDeRespostas: [
            { conteudo: "Ilegal ou inválido", correto: true },
            { conteudo: "Perfeitamente válido", correto: false },
            { conteudo: "Apenas inadequado, mas legal", correto: false },
            { conteudo: "Aceitável se houver justificativa pessoal", correto: false }
        ],
        justificativa: "A violação de princípios constitucionais compromete a validade do ato administrativo.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Quais princípios possuem força normativa explícita na Constituição Federal?",
        arrayDeRespostas: [
            { conteudo: "Legalidade, impessoalidade, moralidade, publicidade e eficiência", correto: true },
            { conteudo: "Flexibilidade, informalidade, subjetividade", correto: false },
            { conteudo: "Lucro, benefício pessoal e discricionariedade total", correto: false },
            { conteudo: "Criatividade, liberdade e improviso", correto: false }
        ],
        justificativa: "Esses princípios estão previstos no art. 37 da Constituição e orientam todos os atos administrativos.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "A força normativa dos princípios permite que:",
        arrayDeRespostas: [
            { conteudo: "Atos administrativos sejam questionados judicialmente se violarem os princípios", correto: true },
            { conteudo: "Gestores ignorem a lei com base em conveniência", correto: false },
            { conteudo: "Princípios sejam considerados meramente éticos", correto: false },
            { conteudo: "Os atos administrativos sejam sempre válidos independentemente da lei", correto: false }
        ],
        justificativa: "A observância aos princípios é fiscalizada e pode ser exigida judicialmente.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "A força normativa dos princípios é importante porque:",
        arrayDeRespostas: [
            { conteudo: "Assegura uniformidade, legalidade e moralidade nos atos administrativos", correto: true },
            { conteudo: "Permite decisões arbitrárias", correto: false },
            { conteudo: "Torna desnecessária a legislação", correto: false },
            { conteudo: "Serve apenas para doutrina acadêmica", correto: false }
        ],
        justificativa: "Princípios normativos garantem que a Administração atue dentro de padrões éticos e legais.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Princípios com força normativa vinculam a Administração Pública mesmo quando:",
        arrayDeRespostas: [
            { conteudo: "Não há regra específica sobre determinado caso", correto: true },
            { conteudo: "Há conveniência do gestor para ignorá-los", correto: false },
            { conteudo: "Existem normas contrárias da iniciativa privada", correto: false },
            { conteudo: "O cidadão não solicitar fiscalização", correto: false }
        ],
        justificativa: "A força normativa garante aplicação dos princípios em qualquer situação administrativa.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Em caso de conflito entre princípios, o que deve prevalecer?",
        arrayDeRespostas: [
            { conteudo: "A interpretação equilibrada visando ao interesse público", correto: true },
            { conteudo: "A conveniência do gestor", correto: false },
            { conteudo: "Sempre o princípio mais recente", correto: false },
            { conteudo: "O princípio mais simples", correto: false }
        ],
        justificativa: "O administrador deve buscar harmonizar princípios para atender ao interesse público.",
        categoriaDaPergunta: "forca-normativa-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "O que são princípios expressos da Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Princípios claramente previstos na Constituição Federal", correto: true },
            { conteudo: "Princípios apenas mencionados em doutrinas", correto: false },
            { conteudo: "Princípios criados pelo gestor no dia a dia", correto: false },
            { conteudo: "Princípios sugeridos por órgãos privados", correto: false }
        ],
        justificativa: "Princípios expressos estão formalmente escritos na Constituição e têm força normativa.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "Quais princípios são considerados expressos no art. 37 da Constituição Federal?",
        arrayDeRespostas: [
            { conteudo: "Legalidade, impessoalidade, moralidade, publicidade e eficiência", correto: true },
            { conteudo: "Flexibilidade, criatividade e iniciativa", correto: false },
            { conteudo: "Lucro, vantagem pessoal e discricionariedade", correto: false },
            { conteudo: "Informalidade, subjetividade e improviso", correto: false }
        ],
        justificativa: "O art. 37 define os princípios fundamentais da Administração Pública no Brasil.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "O princípio da legalidade significa que:",
        arrayDeRespostas: [
            { conteudo: "A Administração só pode agir conforme a lei", correto: true },
            { conteudo: "O gestor pode agir segundo sua conveniência", correto: false },
            { conteudo: "Pode-se ignorar normas se forem complexas", correto: false },
            { conteudo: "A lei é meramente sugestiva", correto: false }
        ],
        justificativa: "Legalidade é a base da atuação administrativa, garantindo conformidade legal.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "O princípio da impessoalidade garante que:",
        arrayDeRespostas: [
            { conteudo: "A atuação da Administração visa ao interesse público, não a benefícios pessoais", correto: true },
            { conteudo: "Gestores podem favorecer familiares e amigos", correto: false },
            { conteudo: "Decisões podem ser arbitrárias", correto: false },
            { conteudo: "Há prioridade para interesses particulares", correto: false }
        ],
        justificativa: "Imparcialidade protege a Administração de favorecimentos indevidos.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "O princípio da moralidade exige que:",
        arrayDeRespostas: [
            { conteudo: "A Administração atue segundo padrões éticos e de boa-fé", correto: true },
            { conteudo: "A prática de atos imorais seja permitida", correto: false },
            { conteudo: "A lei possa ser ignorada", correto: false },
            { conteudo: "Decisões sejam baseadas em interesses pessoais", correto: false }
        ],
        justificativa: "Moralidade assegura que a Administração pública seja ética e transparente.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "O princípio da publicidade garante que:",
        arrayDeRespostas: [
            { conteudo: "Atos administrativos sejam transparentes e acessíveis ao público", correto: true },
            { conteudo: "Informações sejam secretas sem necessidade", correto: false },
            { conteudo: "Somente o gestor tenha conhecimento dos atos", correto: false },
            { conteudo: "Documentos sejam destruídos após emissão", correto: false }
        ],
        justificativa: "Publicidade assegura controle social e transparência dos atos administrativos.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "O princípio da eficiência significa que:",
        arrayDeRespostas: [
            { conteudo: "A Administração deve utilizar recursos públicos com produtividade e qualidade", correto: true },
            { conteudo: "Pode gastar recursos sem planejamento", correto: false },
            { conteudo: "Atos podem ser lentos e ineficazes", correto: false },
            { conteudo: "O gestor decide sem considerar resultados", correto: false }
        ],
        justificativa: "Eficiência busca otimizar recursos e melhorar a prestação de serviços públicos.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "Princípios expressos têm força:",
        arrayDeRespostas: [
            { conteudo: "Normativa, vinculando todos os atos administrativos", correto: true },
            { conteudo: "Sugestiva, podendo ser ignorados", correto: false },
            { conteudo: "Informativa apenas para concursos", correto: false },
            { conteudo: "Apenas moral, sem efeito legal", correto: false }
        ],
        justificativa: "Esses princípios são obrigatórios e têm efeitos jurídicos diretos na Administração Pública.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "Quando há conflito entre princípios expressos, a solução deve considerar:",
        arrayDeRespostas: [
            { conteudo: "O equilíbrio e o interesse público", correto: true },
            { conteudo: "O interesse pessoal do gestor", correto: false },
            { conteudo: "A norma mais recente do setor privado", correto: false },
            { conteudo: "A facilidade de execução administrativa", correto: false }
        ],
        justificativa: "Princípios orientam decisões e devem ser harmonizados em favor do interesse público.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "Os princípios expressos são encontrados principalmente em:",
        arrayDeRespostas: [
            { conteudo: "Constituição Federal e leis específicas da Administração Pública", correto: true },
            { conteudo: "Costumes internos de empresas privadas", correto: false },
            { conteudo: "Preferência pessoal de gestores", correto: false },
            { conteudo: "Decisões judiciais estrangeiras", correto: false }
        ],
        justificativa: "Eles têm previsão legal e normativa clara na legislação brasileira.",
        categoriaDaPergunta: "principios-expressos-limpe"
    },
    {
        enunciado: "O que são princípios implícitos da Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Princípios não explicitamente previstos na Constituição, mas derivados da legalidade e moralidade", correto: true },
            { conteudo: "Princípios apenas mencionados em doutrinas estrangeiras", correto: false },
            { conteudo: "Princípios criados pelo gestor para conveniência própria", correto: false },
            { conteudo: "Princípios meramente éticos sem efeito jurídico", correto: false }
        ],
        justificativa: "Princípios implícitos orientam a administração mesmo sem estarem formalmente escritos na lei.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "Um exemplo de princípio implícito é:",
        arrayDeRespostas: [
            { conteudo: "Continuidade do serviço público", correto: true },
            { conteudo: "Lucro privado", correto: false },
            { conteudo: "Arbitrário benefício pessoal", correto: false },
            { conteudo: "Informalidade total nos atos", correto: false }
        ],
        justificativa: "Princípios implícitos surgem da interpretação das normas constitucionais e legais.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "O princípio da autotutela é considerado implícito porque:",
        arrayDeRespostas: [
            { conteudo: "Permite à Administração revisar seus próprios atos sem autorização judicial", correto: true },
            { conteudo: "É explicitamente escrito na Constituição", correto: false },
            { conteudo: "Serve apenas como recomendação ética", correto: false },
            { conteudo: "Não tem efeito jurídico", correto: false }
        ],
        justificativa: "Autotutela decorre da lógica do regime jurídico administrativo e da necessidade de correção de atos ilegais.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "O princípio da continuidade do serviço público garante que:",
        arrayDeRespostas: [
            { conteudo: "Serviços essenciais não sofram interrupções indevidas", correto: true },
            { conteudo: "Serviços podem ser suspensos sem aviso", correto: false },
            { conteudo: "Serviços dependem apenas da vontade do gestor", correto: false },
            { conteudo: "Atos administrativos são dispensáveis", correto: false }
        ],
        justificativa: "Continuidade é fundamental para a estabilidade e confiabilidade dos serviços públicos.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "O princípio da razoabilidade implica que:",
        arrayDeRespostas: [
            { conteudo: "A Administração deve agir de forma equilibrada e proporcional", correto: true },
            { conteudo: "Atos administrativos podem ser arbitrários", correto: false },
            { conteudo: "Interesses pessoais do gestor prevalecem", correto: false },
            { conteudo: "Não há necessidade de justificar decisões", correto: false }
        ],
        justificativa: "Razoabilidade evita abusos e assegura decisões justas e equilibradas.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "O princípio da proporcionalidade significa que:",
        arrayDeRespostas: [
            { conteudo: "A Administração deve escolher medidas adequadas, necessárias e proporcionais ao fim", correto: true },
            { conteudo: "Pode usar meios extremos sem justificativa", correto: false },
            { conteudo: "Só interessa o resultado final, não os meios", correto: false },
            { conteudo: "Não é relevante para decisões administrativas", correto: false }
        ],
        justificativa: "Proporcionalidade protege direitos individuais e evita excessos administrativos.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "Princípios implícitos são importantes porque:",
        arrayDeRespostas: [
            { conteudo: "Complementam princípios expressos e orientam decisões em situações não previstas", correto: true },
            { conteudo: "Não possuem efeito prático", correto: false },
            { conteudo: "Podem ser ignorados sem consequências", correto: false },
            { conteudo: "Servem apenas para doutrina acadêmica", correto: false }
        ],
        justificativa: "Eles preenchem lacunas e garantem coerência e legalidade na administração pública.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "O princípio da motivação implica que:",
        arrayDeRespostas: [
            { conteudo: "Atos administrativos devem ser justificados e explicados", correto: true },
            { conteudo: "Atos podem ser emitidos sem razão", correto: false },
            { conteudo: "Decisões dependem apenas da vontade pessoal", correto: false },
            { conteudo: "Somente atos internos precisam ser motivados", correto: false }
        ],
        justificativa: "Motivação garante transparência e controle sobre os atos administrativos.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "O princípio da confiança legítima significa que:",
        arrayDeRespostas: [
            { conteudo: "O cidadão pode confiar na estabilidade e previsibilidade dos atos administrativos", correto: true },
            { conteudo: "Pode esperar decisões arbitrárias", correto: false },
            { conteudo: "A Administração pode alterar regras sem aviso", correto: false },
            { conteudo: "Não existe obrigatoriedade de seguir leis", correto: false }
        ],
        justificativa: "Confiança legítima protege o cidadão de mudanças súbitas e injustificadas na administração.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "Princípios implícitos auxiliam a Administração Pública porque:",
        arrayDeRespostas: [
            { conteudo: "Fornecem diretrizes mesmo quando a lei não detalha procedimentos", correto: true },
            { conteudo: "Permitem decisões arbitrárias", correto: false },
            { conteudo: "Não têm efeito jurídico", correto: false },
            { conteudo: "Servem apenas para treinamento interno", correto: false }
        ],
        justificativa: "Eles garantem que a atuação administrativa seja coerente, ética e dentro da legalidade.",
        categoriaDaPergunta: "principios-implicitos"
    },
    {
        enunciado: "Além de expressos e implícitos, os princípios da Administração Pública podem ser classificados como:",
        arrayDeRespostas: [
            { conteudo: "Diretivos e interpretativos", correto: true },
            { conteudo: "Privados e públicos", correto: false },
            { conteudo: "Nacionais e internacionais", correto: false },
            { conteudo: "Subjetivos e opinativos", correto: false }
        ],
        justificativa: "Classificações adicionais ajudam a compreender a abrangência e aplicação dos princípios.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Princípios diretivos servem para:",
        arrayDeRespostas: [
            { conteudo: "Orientar políticas, estratégias e decisões da Administração", correto: true },
            { conteudo: "Definir detalhes operacionais do dia a dia", correto: false },
            { conteudo: "Estabelecer regras privadas de empresas", correto: false },
            { conteudo: "Ser apenas éticos, sem efeito jurídico", correto: false }
        ],
        justificativa: "Princípios diretivos fornecem direcionamento geral para atuação administrativa.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Princípios interpretativos ajudam:",
        arrayDeRespostas: [
            { conteudo: "Na compreensão e aplicação correta das normas jurídicas", correto: true },
            { conteudo: "Na criação de leis sem base legal", correto: false },
            { conteudo: "Na decisão de interesses privados", correto: false },
            { conteudo: "A ignorar a Constituição", correto: false }
        ],
        justificativa: "Eles orientam como a lei deve ser aplicada, garantindo coerência e legalidade.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Classificação de princípios por alcance pode incluir:",
        arrayDeRespostas: [
            { conteudo: "Principais e secundários", correto: true },
            { conteudo: "Locais e estrangeiros", correto: false },
            { conteudo: "Temporários e absolutos", correto: false },
            { conteudo: "Privados e corporativos", correto: false }
        ],
        justificativa: "Alguns princípios têm aplicação direta e ampla, outros funcionam como complementares.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Princípios complementares:",
        arrayDeRespostas: [
            { conteudo: "Auxiliam na interpretação e aplicação dos princípios expressos", correto: true },
            { conteudo: "Substituem os princípios constitucionais", correto: false },
            { conteudo: "São criados pelo gestor conforme interesse próprio", correto: false },
            { conteudo: "Não possuem relevância jurídica", correto: false }
        ],
        justificativa: "Servem para preencher lacunas e garantir coerência na atuação administrativa.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Princípios gerais da Administração Pública:",
        arrayDeRespostas: [
            { conteudo: "Aplicam-se a todas as esferas e órgãos administrativos", correto: true },
            { conteudo: "Valem apenas para situações excepcionais", correto: false },
            { conteudo: "Se aplicam apenas a entes privados", correto: false },
            { conteudo: "Não têm efeito vinculante", correto: false }
        ],
        justificativa: "São princípios de alcance amplo, como legalidade, impessoalidade e moralidade.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Algumas classificações consideram princípios como programáticos. Isso significa que:",
        arrayDeRespostas: [
            { conteudo: "Servem para orientar políticas públicas e objetivos a longo prazo", correto: true },
            { conteudo: "Têm efeito apenas imediato e operacional", correto: false },
            { conteudo: "Substituem a legislação vigente", correto: false },
            { conteudo: "Podem ser ignorados conforme conveniência do gestor", correto: false }
        ],
        justificativa: "Princípios programáticos indicam metas e diretrizes para planejamento administrativo.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Princípios restritivos ou limitativos:",
        arrayDeRespostas: [
            { conteudo: "Impedem ou condicionam certos atos administrativos", correto: true },
            { conteudo: "Sempre autorizam qualquer ação do gestor", correto: false },
            { conteudo: "Não têm importância prática", correto: false },
            { conteudo: "Se aplicam apenas a empresas privadas", correto: false }
        ],
        justificativa: "Eles atuam como limites para garantir legalidade e proteção de direitos.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "Classificar princípios por função permite:",
        arrayDeRespostas: [
            { conteudo: "Distinguir entre princípios que orientam decisões e os que limitam atos administrativos", correto: true },
            { conteudo: "Ignorar normas constitucionais", correto: false },
            { conteudo: "Aplicar apenas aos servidores privados", correto: false },
            { conteudo: "Não ter efeito na prática administrativa", correto: false }
        ],
        justificativa: "A função determina se o princípio é diretivo, interpretativo, restritivo ou complementar.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "A importância de outras classificações dos princípios está em:",
        arrayDeRespostas: [
            { conteudo: "Auxiliar gestores a interpretar, aplicar e harmonizar normas administrativas", correto: true },
            { conteudo: "Aumentar burocracia sem objetivo", correto: false },
            { conteudo: "Permitir decisões arbitrárias", correto: false },
            { conteudo: "Servir apenas como curiosidade acadêmica", correto: false }
        ],
        justificativa: "Classificações adicionais ajudam na compreensão prática e teórica da Administração Pública.",
        categoriaDaPergunta: "outras-classificacoes-dos-principios-da-administracao-publica"
    },
    {
        enunciado: "O que é Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de órgãos e agentes que executam políticas públicas e serviços à sociedade", correto: true },
            { conteudo: "Uma empresa privada voltada ao lucro", correto: false },
            { conteudo: "Um órgão judiciário independente", correto: false },
            { conteudo: "Um sindicato de servidores", correto: false }
        ],
        justificativa: "A Administração Pública engloba todos os órgãos e entidades que exercem funções administrativas para atender ao interesse público.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "Quais são os poderes que compõem a Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Executivo, Legislativo e Judiciário", correto: true },
            { conteudo: "Privado, Público e Corporativo", correto: false },
            { conteudo: "Federal, Estadual e Municipal apenas", correto: false },
            { conteudo: "Administrativo e Financeiro apenas", correto: false }
        ],
        justificativa: "A Administração Pública atua em todos os três poderes, mas com destaque para o Executivo na execução de políticas.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "A Administração Pública pode ser classificada em:",
        arrayDeRespostas: [
            { conteudo: "Direta e indireta", correto: true },
            { conteudo: "Local e internacional", correto: false },
            { conteudo: "Privada e voluntária", correto: false },
            { conteudo: "Judicial e empresarial", correto: false }
        ],
        justificativa: "A Administração Direta engloba órgãos públicos, e a Indireta inclui autarquias, fundações e empresas públicas.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "A Administração Direta inclui:",
        arrayDeRespostas: [
            { conteudo: "Órgãos que integram a estrutura do Estado, como ministérios e secretarias", correto: true },
            { conteudo: "Empresas privadas que prestam serviços públicos", correto: false },
            { conteudo: "Sindicatos e associações", correto: false },
            { conteudo: "Organizações internacionais", correto: false }
        ],
        justificativa: "São os órgãos que fazem parte do próprio Estado e executam funções administrativas diretamente.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "A Administração Indireta é composta por:",
        arrayDeRespostas: [
            { conteudo: "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista", correto: true },
            { conteudo: "Escolas privadas e hospitais particulares", correto: false },
            { conteudo: "Organizações não governamentais", correto: false },
            { conteudo: "Partidos políticos e sindicatos", correto: false }
        ],
        justificativa: "Essas entidades têm personalidade jurídica própria, mas estão vinculadas ao Estado para execução de atividades específicas.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "A finalidade principal da Administração Pública é:",
        arrayDeRespostas: [
            { conteudo: "Atender ao interesse público e promover o bem comum", correto: true },
            { conteudo: "Gerar lucro para gestores e empresas privadas", correto: false },
            { conteudo: "Atender apenas a interesses políticos individuais", correto: false },
            { conteudo: "Executar tarefas sem regulamentação legal", correto: false }
        ],
        justificativa: "O princípio do interesse público orienta todas as ações da Administração.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "Qual é o princípio que orienta a Administração a agir dentro da lei?",
        arrayDeRespostas: [
            { conteudo: "Legalidade", correto: true },
            { conteudo: "Eficiência", correto: false },
            { conteudo: "Impessoalidade", correto: false },
            { conteudo: "Publicidade", correto: false }
        ],
        justificativa: "O princípio da legalidade estabelece que a Administração só pode agir conforme a lei.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "O princípio da impessoalidade na Administração Pública significa:",
        arrayDeRespostas: [
            { conteudo: "Atuar visando ao interesse público, sem favorecimentos pessoais", correto: true },
            { conteudo: "Tomar decisões baseadas em preferências individuais", correto: false },
            { conteudo: "Ignorar normas legais quando conveniente", correto: false },
            { conteudo: "Priorizar interesses de familiares de gestores", correto: false }
        ],
        justificativa: "A impessoalidade garante que atos administrativos não sejam influenciados por interesses pessoais.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "A eficiência na Administração Pública busca:",
        arrayDeRespostas: [
            { conteudo: "A melhor utilização dos recursos públicos para resultados de qualidade", correto: true },
            { conteudo: "Aumento de despesas sem resultados", correto: false },
            { conteudo: "Decisões baseadas em favoritismo", correto: false },
            { conteudo: "Atos administrativos arbitrários", correto: false }
        ],
        justificativa: "Eficiência significa otimizar recursos e melhorar a prestação de serviços públicos.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "A publicidade na Administração Pública garante:",
        arrayDeRespostas: [
            { conteudo: "Transparência e acesso da sociedade aos atos administrativos", correto: true },
            { conteudo: "Segredo absoluto em todas as informações", correto: false },
            { conteudo: "Decisões privadas sem necessidade de divulgação", correto: false },
            { conteudo: "Atos administrativos sem registro formal", correto: false }
        ],
        justificativa: "A publicidade permite controle social e fiscalização sobre a Administração Pública.",
        categoriaDaPergunta: "nocoes-basicas-sobre-administracao-publica"
    },
    {
        enunciado: "O que é Administração Geral?",
        arrayDeRespostas: [
            { conteudo: "Estudo das técnicas, princípios e práticas voltadas à gestão de organizações", correto: true },
            { conteudo: "Apenas a contabilidade de empresas privadas", correto: false },
            { conteudo: "Gestão exclusiva de órgãos públicos", correto: false },
            { conteudo: "Consultoria legal para tribunais", correto: false }
        ],
        justificativa: "Administração Geral abrange gestão de recursos, pessoas e processos em organizações públicas e privadas.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "Quais são as principais funções da Administração Geral?",
        arrayDeRespostas: [
            { conteudo: "Planejar, organizar, dirigir e controlar", correto: true },
            { conteudo: "Somente planejar e executar", correto: false },
            { conteudo: "Apenas supervisionar e fiscalizar", correto: false },
            { conteudo: "Elaborar leis e julgamentos", correto: false }
        ],
        justificativa: "As funções clássicas da administração garantem o cumprimento dos objetivos organizacionais.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "O planejamento na Administração Geral consiste em:",
        arrayDeRespostas: [
            { conteudo: "Definir objetivos e traçar estratégias para alcançá-los", correto: true },
            { conteudo: "Somente controlar resultados", correto: false },
            { conteudo: "Dar ordens sem análise prévia", correto: false },
            { conteudo: "Executar tarefas sem metas", correto: false }
        ],
        justificativa: "Planejar envolve prever cenários e organizar recursos para atingir metas.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "A organização, no contexto da Administração Geral, refere-se a:",
        arrayDeRespostas: [
            { conteudo: "Estruturar recursos humanos, materiais e financeiros de forma eficiente", correto: true },
            { conteudo: "Escolher gestores aleatoriamente", correto: false },
            { conteudo: "Ignorar hierarquia e funções", correto: false },
            { conteudo: "Trabalhar sem métodos ou processos", correto: false }
        ],
        justificativa: "Organização define como os recursos e atividades se articulam para atingir objetivos.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "A direção na Administração Geral consiste em:",
        arrayDeRespostas: [
            { conteudo: "Guiar, coordenar e motivar pessoas para execução de planos", correto: true },
            { conteudo: "Delegar todas as tarefas sem acompanhamento", correto: false },
            { conteudo: "Controlar sem motivar a equipe", correto: false },
            { conteudo: "Apenas supervisionar sem comunicar metas", correto: false }
        ],
        justificativa: "A direção envolve liderança, comunicação e motivação para alcançar os objetivos organizacionais.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "O controle, na Administração Geral, tem como objetivo:",
        arrayDeRespostas: [
            { conteudo: "Verificar se os objetivos estão sendo atingidos e corrigir desvios", correto: true },
            { conteudo: "Ignorar falhas e continuar a execução", correto: false },
            { conteudo: "Substituir o planejamento original sem análise", correto: false },
            { conteudo: "Aplicar punições sem avaliação", correto: false }
        ],
        justificativa: "O controle garante que os resultados esperados sejam alcançados de forma eficiente.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "Quais são os tipos de administração existentes em organizações?",
        arrayDeRespostas: [
            { conteudo: "Pública, privada e mista", correto: true },
            { conteudo: "Judicial, militar e religiosa", correto: false },
            { conteudo: "Voluntária, comunitária e empresarial", correto: false },
            { conteudo: "Local, nacional e internacional apenas", correto: false }
        ],
        justificativa: "A classificação depende do tipo de organização e sua finalidade.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "A Administração Pública e a Administração Privada diferem principalmente em:",
        arrayDeRespostas: [
            { conteudo: "Finalidade: interesse público x lucro", correto: true },
            { conteudo: "Uso de computadores", correto: false },
            { conteudo: "Número de funcionários", correto: false },
            { conteudo: "Localização geográfica", correto: false }
        ],
        justificativa: "A distinção principal está nos objetivos que cada tipo de administração busca alcançar.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "A tomada de decisão na Administração Geral deve considerar:",
        arrayDeRespostas: [
            { conteudo: "Informações precisas, análise de alternativas e impactos", correto: true },
            { conteudo: "Preferências pessoais do gestor apenas", correto: false },
            { conteudo: "Ignorar dados e agir intuitivamente", correto: false },
            { conteudo: "Executar ações sem planejamento", correto: false }
        ],
        justificativa: "Decisões eficazes dependem de dados e análise criteriosa de alternativas.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "A importância da Administração Geral nas organizações está em:",
        arrayDeRespostas: [
            { conteudo: "Garantir eficiência, planejamento e coordenação de recursos", correto: true },
            { conteudo: "Criar burocracia sem finalidade", correto: false },
            { conteudo: "Substituir leis e regulamentos", correto: false },
            { conteudo: "Concentrar poder em uma pessoa apenas", correto: false }
        ],
        justificativa: "A administração organiza recursos e processos para que a organização atinja seus objetivos de forma eficaz.",
        categoriaDaPergunta: "administracao-geral"
    },
    {
        enunciado: "O que é gestão de documentos?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de atividades para criar, organizar, armazenar e controlar documentos", correto: true },
            { conteudo: "Somente o arquivamento físico de papéis", correto: false },
            { conteudo: "Elaboração de documentos apenas para empresas privadas", correto: false },
            { conteudo: "Destruição de documentos antigos sem critérios", correto: false }
        ],
        justificativa: "Gestão documental envolve planejamento, controle e preservação de documentos ao longo de seu ciclo de vida.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "O arquivamento correto de documentos garante:",
        arrayDeRespostas: [
            { conteudo: "Acesso rápido, preservação e segurança da informação", correto: true },
            { conteudo: "Perda de informações importantes", correto: false },
            { conteudo: "Somente a organização estética", correto: false },
            { conteudo: "Evitar qualquer consulta aos documentos", correto: false }
        ],
        justificativa: "O arquivamento eficiente permite localizar, proteger e manter a integridade dos documentos.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "Qual é a diferença entre documento ativo, intermediário e permanente?",
        arrayDeRespostas: [
            { conteudo: "Ativo: usado frequentemente; Intermediário: uso eventual; Permanente: deve ser preservado indefinidamente", correto: true },
            { conteudo: "Ativo: já não é usado; Intermediário: uso constante; Permanente: sem valor legal", correto: false },
            { conteudo: "Ativo: digital; Intermediário: físico; Permanente: descartável", correto: false },
            { conteudo: "Não existe diferença significativa entre eles", correto: false }
        ],
        justificativa: "Classificação documental ajuda a definir tratamento, prazo de guarda e descarte adequado.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "O ciclo de vida de um documento inclui:",
        arrayDeRespostas: [
            { conteudo: "Criação, tramitação, utilização, arquivamento e destinação final", correto: true },
            { conteudo: "Apenas criação e arquivamento", correto: false },
            { conteudo: "Elaboração e impressão apenas", correto: false },
            { conteudo: "Tramitação e eliminação sem organização", correto: false }
        ],
        justificativa: "O ciclo de vida assegura que cada documento seja gerido corretamente desde sua criação até sua destinação.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "O que é classificação de documentos?",
        arrayDeRespostas: [
            { conteudo: "Organizar documentos de acordo com função, assunto ou série documental", correto: true },
            { conteudo: "Destruir documentos sem critérios", correto: false },
            { conteudo: "Registrar documentos apenas digitalmente", correto: false },
            { conteudo: "Enviar documentos para terceiros indiscriminadamente", correto: false }
        ],
        justificativa: "A classificação facilita a localização e o controle documental, garantindo eficiência na gestão.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "O que é guarda de documentos?",
        arrayDeRespostas: [
            { conteudo: "Armazenamento seguro, preservação e manutenção da integridade dos documentos", correto: true },
            { conteudo: "Apenas empilhar papéis sem organização", correto: false },
            { conteudo: "Distribuir documentos sem controle", correto: false },
            { conteudo: "Apagar arquivos antigos indiscriminadamente", correto: false }
        ],
        justificativa: "A guarda correta assegura acesso futuro e proteção contra perdas ou danos.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "O que significa destinação final de documentos?",
        arrayDeRespostas: [
            { conteudo: "Definir se o documento será preservado permanentemente ou eliminado", correto: true },
            { conteudo: "Guardar todos os documentos sem critério", correto: false },
            { conteudo: "Destruir documentos aleatoriamente", correto: false },
            { conteudo: "Enviar documentos para qualquer setor sem controle", correto: false }
        ],
        justificativa: "A destinação final depende do valor legal, fiscal, administrativo ou histórico do documento.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "A gestão documental digital exige:",
        arrayDeRespostas: [
            { conteudo: "Sistemas de informação, controle de acesso e preservação de arquivos eletrônicos", correto: true },
            { conteudo: "Apenas digitalizar documentos sem organização", correto: false },
            { conteudo: "Imprimir todos os arquivos digitais", correto: false },
            { conteudo: "Deixar arquivos digitais sem backup", correto: false }
        ],
        justificativa: "Documentos digitais exigem medidas específicas de segurança, armazenamento e rastreabilidade.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "O que é tabela de temporalidade documental?",
        arrayDeRespostas: [
            { conteudo: "Instrumento que define prazos de guarda e destinação final de documentos", correto: true },
            { conteudo: "Lista de documentos sem importância", correto: false },
            { conteudo: "Arquivo de documentos antigos sem critérios", correto: false },
            { conteudo: "Registro de documentos duplicados", correto: false }
        ],
        justificativa: "A tabela de temporalidade organiza o ciclo de vida e assegura a gestão adequada dos documentos.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "A importância do arquivamento e gestão de documentos está em:",
        arrayDeRespostas: [
            { conteudo: "Garantir organização, acesso rápido, segurança e preservação da informação", correto: true },
            { conteudo: "Aumentar burocracia sem finalidade", correto: false },
            { conteudo: "Substituir processos legais", correto: false },
            { conteudo: "Servir apenas como formalidade sem utilidade", correto: false }
        ],
        justificativa: "Gestão documental eficiente contribui para a tomada de decisões, transparência e preservação histórica.",
        categoriaDaPergunta: "arquivamento-e-gestao-de-documentos"
    },
    {
        enunciado: "O que é Administração de Material?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de atividades relacionadas ao planejamento, aquisição, armazenamento e controle de materiais", correto: true },
            { conteudo: "Apenas a compra de materiais sem controle", correto: false },
            { conteudo: "Gestão de recursos humanos", correto: false },
            { conteudo: "Apenas a distribuição de produtos acabados", correto: false }
        ],
        justificativa: "A administração de material garante que a organização tenha os insumos necessários de forma eficiente e econômica.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "O objetivo principal da Administração de Material é:",
        arrayDeRespostas: [
            { conteudo: "Assegurar a disponibilidade de materiais, evitando desperdícios e perdas", correto: true },
            { conteudo: "Aumentar estoques desnecessariamente", correto: false },
            { conteudo: "Reduzir a quantidade de materiais sem planejamento", correto: false },
            { conteudo: "Comprar materiais de forma aleatória", correto: false }
        ],
        justificativa: "O objetivo é equilibrar a disponibilidade de materiais com o custo e a eficiência.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "As funções da Administração de Material incluem:",
        arrayDeRespostas: [
            { conteudo: "Planejamento, aquisição, armazenamento, distribuição e controle de estoque", correto: true },
            { conteudo: "Apenas compra e venda de produtos", correto: false },
            { conteudo: "Gestão de pessoal e financeiro exclusivamente", correto: false },
            { conteudo: "Produção industrial sem controle", correto: false }
        ],
        justificativa: "Cada função garante que o material certo esteja disponível no momento adequado e com o menor custo possível.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "O que é estoque de materiais?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de materiais armazenados para uso futuro ou consumo", correto: true },
            { conteudo: "Materiais descartados e inutilizados", correto: false },
            { conteudo: "Somente produtos acabados prontos para venda", correto: false },
            { conteudo: "Documentos administrativos", correto: false }
        ],
        justificativa: "O estoque permite que a organização tenha suprimentos disponíveis sem interrupção das atividades.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "O que é controle de estoque?",
        arrayDeRespostas: [
            { conteudo: "Monitoramento de entradas, saídas e níveis de materiais para garantir disponibilidade", correto: true },
            { conteudo: "Armazenamento de materiais sem registro", correto: false },
            { conteudo: "Distribuição de materiais sem planejamento", correto: false },
            { conteudo: "Apenas compras frequentes sem análise", correto: false }
        ],
        justificativa: "O controle de estoque evita falta ou excesso de materiais, garantindo eficiência e economia.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "O planejamento de materiais visa:",
        arrayDeRespostas: [
            { conteudo: "Determinar a quantidade, o momento da compra e os recursos necessários", correto: true },
            { conteudo: "Comprar todos os materiais de uma vez", correto: false },
            { conteudo: "Ignorar necessidades futuras", correto: false },
            { conteudo: "Distribuir materiais sem controle", correto: false }
        ],
        justificativa: "Planejamento evita desperdícios e garante que a organização tenha materiais quando necessário.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "A aquisição de materiais deve considerar:",
        arrayDeRespostas: [
            { conteudo: "Preço, qualidade, prazo de entrega e fornecedor confiável", correto: true },
            { conteudo: "Somente o preço mais baixo disponível", correto: false },
            { conteudo: "Preferência pessoal do gestor apenas", correto: false },
            { conteudo: "Quantidade máxima sem análise de necessidade", correto: false }
        ],
        justificativa: "A aquisição eficiente envolve análise de custo-benefício e confiabilidade do fornecedor.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "O armazenamento adequado de materiais garante:",
        arrayDeRespostas: [
            { conteudo: "Conservação, segurança e fácil localização dos itens", correto: true },
            { conteudo: "Perda frequente de materiais", correto: false },
            { conteudo: "Aumento de desperdício sem organização", correto: false },
            { conteudo: "Distribuição aleatória sem controle", correto: false }
        ],
        justificativa: "Armazenar corretamente evita danos e facilita o controle e acesso aos materiais.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "A distribuição de materiais consiste em:",
        arrayDeRespostas: [
            { conteudo: "Fornecer materiais aos setores ou pessoas conforme necessidade", correto: true },
            { conteudo: "Entregar materiais sem registro", correto: false },
            { conteudo: "Vender materiais indiscriminadamente", correto: false },
            { conteudo: "Destruir materiais excedentes sem análise", correto: false }
        ],
        justificativa: "A distribuição eficiente garante que os recursos cheguem ao destino certo no momento certo.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "O que é inventário de materiais?",
        arrayDeRespostas: [
            { conteudo: "Registro detalhado de todos os materiais existentes em estoque", correto: true },
            { conteudo: "Compra de materiais sem registro", correto: false },
            { conteudo: "Armazenamento desorganizado", correto: false },
            { conteudo: "Eliminação de materiais antigos sem controle", correto: false }
        ],
        justificativa: "O inventário permite controle preciso dos materiais e planejamento de reposição.",
        categoriaDaPergunta: "administracao-de-material"
    },
    {
        enunciado: "O que é licitação na Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Processo legal para contratação de serviços ou aquisição de bens, garantindo igualdade e transparência", correto: true },
            { conteudo: "Contrato direto com fornecedores preferidos", correto: false },
            { conteudo: "Compra de materiais sem análise de preços", correto: false },
            { conteudo: "Apenas convite a empresas privadas", correto: false }
        ],
        justificativa: "A licitação assegura competitividade, legalidade e melhor custo-benefício para a Administração Pública.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "Qual é a lei que regula as licitações e contratos administrativos no Brasil?",
        arrayDeRespostas: [
            { conteudo: "Lei nº 14.133/2021", correto: true },
            { conteudo: "Lei nº 8.666/1993", correto: false },
            { conteudo: "Lei nº 10.520/2002", correto: false },
            { conteudo: "Lei nº 13.709/2018", correto: false }
        ],
        justificativa: "A Lei nº 14.133/2021 substituiu a antiga Lei nº 8.666 e estabelece normas gerais sobre licitações e contratos.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "Qual o objetivo da licitação?",
        arrayDeRespostas: [
            { conteudo: "Garantir a seleção da proposta mais vantajosa para a Administração Pública", correto: true },
            { conteudo: "Escolher empresas sem critérios técnicos", correto: false },
            { conteudo: "Beneficiar fornecedores específicos", correto: false },
            { conteudo: "Evitar concorrência entre empresas", correto: false }
        ],
        justificativa: "A licitação busca a melhor relação custo-benefício, com transparência e competitividade.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "Quais são os principais tipos de licitação?",
        arrayDeRespostas: [
            { conteudo: "Concorrência, tomada de preços, convite, concurso, leilão e pregão", correto: true },
            { conteudo: "Somente concorrência e convite", correto: false },
            { conteudo: "Pregão e contrato direto apenas", correto: false },
            { conteudo: "Leilão e concurso apenas", correto: false }
        ],
        justificativa: "A lei define modalidades que variam conforme valor e complexidade do objeto licitado.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O que é pregão?",
        arrayDeRespostas: [
            { conteudo: "Modalidade de licitação para aquisição de bens e serviços comuns, com disputa de preços em sessão pública", correto: true },
            { conteudo: "Licitação exclusiva para obras públicas complexas", correto: false },
            { conteudo: "Compra direta sem competição", correto: false },
            { conteudo: "Convite a empresas internacionais", correto: false }
        ],
        justificativa: "O pregão prioriza eficiência e rapidez em contratações de itens comuns.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O que caracteriza o contrato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Acordo entre Administração Pública e particular para prestação de serviços ou fornecimento de bens, com regras de direito público", correto: true },
            { conteudo: "Contrato entre duas empresas privadas sem intervenção do Estado", correto: false },
            { conteudo: "Contrato verbal sem fiscalização", correto: false },
            { conteudo: "Apenas acordos informais de prestação de serviços", correto: false }
        ],
        justificativa: "O contrato administrativo possui cláusulas que garantem a legalidade e a execução conforme interesses públicos.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O que é inexigibilidade de licitação?",
        arrayDeRespostas: [
            { conteudo: "Situação em que a competição é inviável, como na contratação de profissional de notória especialização", correto: true },
            { conteudo: "Compra sem necessidade de contrato", correto: false },
            { conteudo: "Licitação aberta a todas as empresas", correto: false },
            { conteudo: "Convite a fornecedores sem análise", correto: false }
        ],
        justificativa: "A inexigibilidade ocorre quando não há competição possível, garantindo a contratação direta conforme a lei.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O que é dispensa de licitação?",
        arrayDeRespostas: [
            { conteudo: "Situação legal em que a Administração pode contratar diretamente, devido a valores baixos ou casos específicos previstos em lei", correto: true },
            { conteudo: "Desobrigação de formalizar contratos", correto: false },
            { conteudo: "Convite informal sem análise de propostas", correto: false },
            { conteudo: "Qualquer contratação sem justificativa", correto: false }
        ],
        justificativa: "A dispensa ocorre em situações legais que permitem contratação direta para agilidade ou necessidade urgente.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O que é edital de licitação?",
        arrayDeRespostas: [
            { conteudo: "Documento que contém regras, condições e especificações da licitação", correto: true },
            { conteudo: "Contrato final assinado entre empresa e administração", correto: false },
            { conteudo: "Resumo financeiro da licitação apenas", correto: false },
            { conteudo: "Proposta enviada pelo fornecedor", correto: false }
        ],
        justificativa: "O edital assegura transparência e informação completa sobre o processo licitatório.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O princípio da legalidade nas licitações significa:",
        arrayDeRespostas: [
            { conteudo: "A Administração deve seguir rigorosamente a lei em todos os atos licitatórios", correto: true },
            { conteudo: "A lei pode ser ignorada em situações urgentes", correto: false },
            { conteudo: "A Administração pode favorecer empresas específicas", correto: false },
            { conteudo: "A legalidade não é aplicável a licitações pequenas", correto: false }
        ],
        justificativa: "Legalidade garante que todo o procedimento esteja conforme normas legais, prevenindo irregularidades.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O princípio da impessoalidade nas licitações significa:",
        arrayDeRespostas: [
            { conteudo: "Todos os participantes devem ser tratados de forma igual, sem favorecimentos pessoais", correto: true },
            { conteudo: "O gestor pode escolher fornecedores favoritos", correto: false },
            { conteudo: "Empresas indicadas por políticos têm prioridade", correto: false },
            { conteudo: "Somente fornecedores grandes podem participar", correto: false }
        ],
        justificativa: "Impessoalidade garante justiça, igualdade e transparência no processo licitatório.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O princípio da economicidade nas licitações significa:",
        arrayDeRespostas: [
            { conteudo: "Buscar a melhor proposta em relação a custo e benefício", correto: true },
            { conteudo: "Escolher sempre a proposta mais barata sem análise", correto: false },
            { conteudo: "Desconsiderar qualidade em favor do preço baixo", correto: false },
            { conteudo: "Realizar contratos apenas com grandes empresas", correto: false }
        ],
        justificativa: "Economicidade garante que os recursos públicos sejam utilizados de forma racional e eficiente.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O que é fiscalização de contrato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Acompanhamento e verificação do cumprimento das obrigações contratuais", correto: true },
            { conteudo: "A assinatura do contrato sem acompanhamento", correto: false },
            { conteudo: "Distribuição de contratos sem controle", correto: false },
            { conteudo: "Pagamento sem verificação de serviços prestados", correto: false }
        ],
        justificativa: "A fiscalização garante que o contratado cumpra todas as condições e prazos definidos em lei.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O que é contrato de adesão?",
        arrayDeRespostas: [
            { conteudo: "Contrato cujo conteúdo já está padronizado e a Administração apenas adere às condições", correto: true },
            { conteudo: "Contrato negociado livremente entre Administração e fornecedor", correto: false },
            { conteudo: "Contrato verbal sem formalização", correto: false },
            { conteudo: "Contrato de compra direta sem análise legal", correto: false }
        ],
        justificativa: "Em contratos de adesão, a Administração se vincula a condições previamente estabelecidas, com segurança jurídica.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "A rescisão de contrato administrativo pode ocorrer quando:",
        arrayDeRespostas: [
            { conteudo: "Há descumprimento de cláusulas, interesse público ou motivos previstos em lei", correto: true },
            { conteudo: "O fornecedor deseja aumentar o lucro sem justificativa", correto: false },
            { conteudo: "A Administração não gosta do fornecedor", correto: false },
            { conteudo: "Sem nenhuma razão formal", correto: false }
        ],
        justificativa: "A rescisão deve ser justificada legalmente, garantindo proteção ao interesse público e às partes envolvidas.",
        categoriaDaPergunta: "licitacoes-e-contratos-administrativos"
    },
    {
        enunciado: "O que é Direito Administrativo?",
        arrayDeRespostas: [
            { conteudo: "Ramo do direito que regula a organização, funcionamento e atividades do Estado", correto: true },
            { conteudo: "Conjunto de leis aplicáveis apenas a empresas privadas", correto: false },
            { conteudo: "Direito que trata exclusivamente de contratos comerciais", correto: false },
            { conteudo: "Normas sobre direito penal e civil", correto: false }
        ],
        justificativa: "O Direito Administrativo disciplina a atuação da Administração Pública e suas relações com a sociedade.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "A Administração Pública é dividida em quais categorias?",
        arrayDeRespostas: [
            { conteudo: "Direta e indireta", correto: true },
            { conteudo: "Privada e social", correto: false },
            { conteudo: "Judicial e legislativa", correto: false },
            { conteudo: "Federal e internacional", correto: false }
        ],
        justificativa: "A Administração direta inclui órgãos ligados diretamente ao Estado, enquanto a indireta engloba autarquias, fundações e empresas públicas.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O princípio da legalidade na Administração Pública significa:",
        arrayDeRespostas: [
            { conteudo: "Os atos administrativos devem obedecer à lei e à Constituição", correto: true },
            { conteudo: "A Administração pode agir conforme interesse próprio sem restrições", correto: false },
            { conteudo: "Leis podem ser ignoradas em casos de urgência", correto: false },
            { conteudo: "A legalidade só se aplica a contratos privados", correto: false }
        ],
        justificativa: "Legalidade é o fundamento do Estado de Direito, impondo limites à atuação administrativa.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O que caracteriza ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Manifestação da Administração Pública que produz efeitos jurídicos", correto: true },
            { conteudo: "Decisão de particulares em contratos comerciais", correto: false },
            { conteudo: "Somente documentos internos sem efeito legal", correto: false },
            { conteudo: "Atos do Poder Judiciário", correto: false }
        ],
        justificativa: "Ato administrativo é toda manifestação de vontade do Estado com efeitos jurídicos previstos em lei.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O que é responsabilidade civil do Estado?",
        arrayDeRespostas: [
            { conteudo: "Obrigação do Estado de reparar danos causados a terceiros por atos administrativos", correto: true },
            { conteudo: "Responsabilidade apenas de servidores sem envolver o Estado", correto: false },
            { conteudo: "Multas aplicadas a empresas privadas", correto: false },
            { conteudo: "Responsabilidade por atos legislativos", correto: false }
        ],
        justificativa: "O Estado responde por atos ilícitos que causem prejuízo a terceiros, garantindo reparação.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O que é poder de polícia na Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Capacidade de limitar direitos individuais em benefício do interesse público", correto: true },
            { conteudo: "Direito de legislar sem controle judicial", correto: false },
            { conteudo: "Poder de multar apenas empresas privadas", correto: false },
            { conteudo: "Autoridade exclusiva para contratos administrativos", correto: false }
        ],
        justificativa: "O poder de polícia permite que o Estado regule e discipline atividades privadas visando segurança, ordem e saúde pública.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O que é licitude e ilegalidade de atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Atos lícitos respeitam a lei; atos ilegais violam normas jurídicas", correto: true },
            { conteudo: "Atos lícitos podem violar a lei em casos excepcionais", correto: false },
            { conteudo: "Todos os atos administrativos são considerados legais automaticamente", correto: false },
            { conteudo: "Atos ilegais podem ser executados sem sanção", correto: false }
        ],
        justificativa: "A legalidade é o critério que define se um ato administrativo é válido ou passível de anulação.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O que é princípio da impessoalidade?",
        arrayDeRespostas: [
            { conteudo: "A Administração deve tratar todos de forma igual, sem favoritismos", correto: true },
            { conteudo: "Permite favorecimento de servidores e empresas", correto: false },
            { conteudo: "Aplicável apenas a contratos públicos", correto: false },
            { conteudo: "Exclui a aplicação da lei em casos especiais", correto: false }
        ],
        justificativa: "Impessoalidade assegura neutralidade e objetividade na atuação administrativa.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O que é princípio da publicidade?",
        arrayDeRespostas: [
            { conteudo: "Os atos administrativos devem ser divulgados, garantindo transparência", correto: true },
            { conteudo: "Atos administrativos podem permanecer ocultos", correto: false },
            { conteudo: "Divulgação apenas de contratos privados", correto: false },
            { conteudo: "Permite atuação sigilosa sem justificativa legal", correto: false }
        ],
        justificativa: "A publicidade assegura controle social, transparência e legitimação da Administração Pública.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O que é princípio da moralidade administrativa?",
        arrayDeRespostas: [
            { conteudo: "Exige que a Administração atue com ética e boa-fé", correto: true },
            { conteudo: "Permite decisões baseadas em interesses pessoais", correto: false },
            { conteudo: "Aplica-se apenas a servidores públicos", correto: false },
            { conteudo: "Dispensa o cumprimento da lei em casos especiais", correto: false }
        ],
        justificativa: "A moralidade exige que atos da Administração estejam de acordo com padrões éticos e interesse público.",
        categoriaDaPergunta: "nocoes-de-direito-administrativo"
    },
    {
        enunciado: "O que é planejamento público?",
        arrayDeRespostas: [
            { conteudo: "Processo de definir metas, prioridades e estratégias para aplicação dos recursos públicos", correto: true },
            { conteudo: "Decisão exclusiva de políticos sobre gastos sem critérios", correto: false },
            { conteudo: "Somente elaboração de leis orçamentárias", correto: false },
            { conteudo: "Apenas controle interno de documentos administrativos", correto: false }
        ],
        justificativa: "O planejamento público organiza os recursos e ações do Estado para alcançar objetivos estratégicos e sociais.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O que é orçamento público?",
        arrayDeRespostas: [
            { conteudo: "Instrumento que detalha receitas e despesas previstas e autorizadas pelo governo", correto: true },
            { conteudo: "Documento particular de cada órgão público", correto: false },
            { conteudo: "Relatório financeiro de empresas privadas", correto: false },
            { conteudo: "Plano sem valor legal sobre gastos públicos", correto: false }
        ],
        justificativa: "O orçamento é uma lei que organiza e autoriza a execução financeira do Estado durante um período.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "Quais são as principais etapas do ciclo orçamentário?",
        arrayDeRespostas: [
            { conteudo: "Elaboração, aprovação, execução e controle", correto: true },
            { conteudo: "Apenas execução e aprovação", correto: false },
            { conteudo: "Somente planejamento e controle interno", correto: false },
            { conteudo: "Análise financeira de órgãos privados", correto: false }
        ],
        justificativa: "O ciclo orçamentário garante planejamento, legalidade e controle sobre as finanças públicas.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O que é Lei de Diretrizes Orçamentárias (LDO)?",
        arrayDeRespostas: [
            { conteudo: "Lei que estabelece metas, prioridades e parâmetros para elaboração do orçamento anual", correto: true },
            { conteudo: "Lei que autoriza despesas apenas com pessoal", correto: false },
            { conteudo: "Relatório de auditoria financeira", correto: false },
            { conteudo: "Documento interno sem valor legal", correto: false }
        ],
        justificativa: "A LDO orienta a elaboração da Lei Orçamentária Anual (LOA), definindo prioridades de governo.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O que é Lei Orçamentária Anual (LOA)?",
        arrayDeRespostas: [
            { conteudo: "Lei que estima receitas e fixa despesas para o exercício financeiro de um ano", correto: true },
            { conteudo: "Documento de planejamento plurianual", correto: false },
            { conteudo: "Relatório contábil de final de exercício", correto: false },
            { conteudo: "Plano interno de cada secretaria sem publicação", correto: false }
        ],
        justificativa: "A LOA organiza e autoriza a execução das finanças públicas durante o ano fiscal.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O que é Plano Plurianual (PPA)?",
        arrayDeRespostas: [
            { conteudo: "Instrumento de planejamento de médio prazo (4 anos) que estabelece metas e programas do governo", correto: true },
            { conteudo: "Plano anual de compras de materiais", correto: false },
            { conteudo: "Relatório contábil mensal", correto: false },
            { conteudo: "Programa interno sem validade legal", correto: false }
        ],
        justificativa: "O PPA define políticas e objetivos governamentais para um período de quatro anos, guiando LOA e LDO.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O princípio da legalidade nas finanças públicas significa:",
        arrayDeRespostas: [
            { conteudo: "Toda despesa deve estar autorizada por lei", correto: true },
            { conteudo: "A Administração pode gastar sem lei em casos de urgência", correto: false },
            { conteudo: "A lei só se aplica a contratos privados", correto: false },
            { conteudo: "O gestor pode alterar valores livremente", correto: false }
        ],
        justificativa: "A legalidade assegura que recursos públicos sejam utilizados conforme normas legais e constitucionais.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O que é equilíbrio orçamentário?",
        arrayDeRespostas: [
            { conteudo: "Situação em que receitas previstas são suficientes para cobrir despesas autorizadas", correto: true },
            { conteudo: "Gastos públicos sem relação com receitas", correto: false },
            { conteudo: "Planejamento sem estimativa de receitas", correto: false },
            { conteudo: "Apenas controle interno sem execução financeira", correto: false }
        ],
        justificativa: "O equilíbrio orçamentário evita déficit fiscal e garante sustentabilidade financeira ao Estado.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O que é receita pública?",
        arrayDeRespostas: [
            { conteudo: "Ingressos financeiros que o Estado arrecada, como impostos, taxas e contribuições", correto: true },
            { conteudo: "Renda de empresas privadas", correto: false },
            { conteudo: "Recursos sem previsão legal", correto: false },
            { conteudo: "Somente empréstimos bancários", correto: false }
        ],
        justificativa: "Receita pública é a base para o financiamento das atividades e políticas governamentais.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O que é despesa pública?",
        arrayDeRespostas: [
            { conteudo: "Gastos do Estado para execução de políticas, programas e serviços públicos", correto: true },
            { conteudo: "Investimentos privados sem controle estatal", correto: false },
            { conteudo: "Pagamentos sem planejamento ou registro", correto: false },
            { conteudo: "Despesas de particulares em contratos privados", correto: false }
        ],
        justificativa: "Despesas públicas devem estar previstas no orçamento e obedecer aos princípios legais e administrativos.",
        categoriaDaPergunta: "nocoes-de-planejamento-orcamento-e-financas-publicas"
    },
    {
        enunciado: "O que é Regime Jurídico Único (RJU)?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de normas que regulam os direitos e deveres de todos os servidores públicos civis", correto: true },
            { conteudo: "Leis aplicáveis apenas a funcionários temporários", correto: false },
            { conteudo: "Normas exclusivas para servidores de empresas privadas", correto: false },
            { conteudo: "Regras de aposentadoria privada", correto: false }
        ],
        justificativa: "O RJU garante uniformidade nas regras de ingresso, progressão, direitos e deveres dos servidores públicos civis.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "A quem se aplica o Regime Jurídico Único?",
        arrayDeRespostas: [
            { conteudo: "Servidores públicos civis da administração direta, autarquias e fundações", correto: true },
            { conteudo: "Empregados de empresas privadas", correto: false },
            { conteudo: "Militares das Forças Armadas", correto: false },
            { conteudo: "Servidores temporários apenas", correto: false }
        ],
        justificativa: "O RJU é destinado a servidores de órgãos públicos civis, garantindo direitos e deveres padronizados.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "Qual a lei que institui o Regime Jurídico Único dos servidores públicos civis federais?",
        arrayDeRespostas: [
            { conteudo: "Lei nº 8.112/1990", correto: true },
            { conteudo: "Lei nº 8.666/1993", correto: false },
            { conteudo: "Lei nº 9.784/1999", correto: false },
            { conteudo: "Lei nº 14.133/2021", correto: false }
        ],
        justificativa: "A Lei nº 8.112/1990 regula direitos, deveres, benefícios e responsabilidades dos servidores civis federais.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "O que é estabilidade do servidor público?",
        arrayDeRespostas: [
            { conteudo: "Garantia de permanência no cargo após estágio probatório de 3 anos, salvo motivos legais para exoneração", correto: true },
            { conteudo: "Direito de permanecer no cargo por tempo indefinido sem avaliação", correto: false },
            { conteudo: "Aplica-se apenas a servidores temporários", correto: false },
            { conteudo: "Liberdade para alterar funções sem regras", correto: false }
        ],
        justificativa: "A estabilidade protege o servidor após avaliação, garantindo segurança no exercício do cargo.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "O que é seguridade social do servidor público?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de benefícios que incluem previdência, saúde e assistência social", correto: true },
            { conteudo: "Apenas aposentadoria privada", correto: false },
            { conteudo: "Benefícios exclusivos para dependentes de servidores", correto: false },
            { conteudo: "Assistência financeira sem vínculo legal", correto: false }
        ],
        justificativa: "A seguridade social garante proteção ao servidor em situações de doença, aposentadoria ou eventos sociais previstos em lei.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "O servidor público tem direito à aposentadoria pelo regime próprio?",
        arrayDeRespostas: [
            { conteudo: "Sim, conforme regras de idade, tempo de contribuição e cargo ocupado", correto: true },
            { conteudo: "Não, todos usam apenas previdência privada", correto: false },
            { conteudo: "Somente militares têm aposentadoria", correto: false },
            { conteudo: "Aposentadoria depende apenas de tempo no cargo, sem idade mínima", correto: false }
        ],
        justificativa: "O regime próprio assegura aposentadoria conforme contribuição, idade e normas legais aplicáveis ao servidor público.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "O que é licença para tratamento de saúde do servidor?",
        arrayDeRespostas: [
            { conteudo: "Direito do servidor a afastamento remunerado para tratamento médico, com atestado e limites legais", correto: true },
            { conteudo: "Afastamento sem necessidade de comprovação médica", correto: false },
            { conteudo: "Somente férias prolongadas", correto: false },
            { conteudo: "Benefício exclusivo para aposentados", correto: false }
        ],
        justificativa: "A licença médica protege a saúde do servidor sem prejudicar seus direitos funcionais.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "O que é férias do servidor público?",
        arrayDeRespostas: [
            { conteudo: "Período anual de descanso remunerado, geralmente de 30 dias", correto: true },
            { conteudo: "Afastamento sem remuneração", correto: false },
            { conteudo: "Folga apenas em feriados nacionais", correto: false },
            { conteudo: "Direito apenas para servidores temporários", correto: false }
        ],
        justificativa: "As férias são um direito garantido pelo Regime Jurídico Único, assegurando descanso anual ao servidor.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "O que é licença-maternidade do servidor público?",
        arrayDeRespostas: [
            { conteudo: "Direito ao afastamento remunerado por nascimento ou adoção de filho, conforme lei", correto: true },
            { conteudo: "Afastamento sem remuneração", correto: false },
            { conteudo: "Benefício exclusivo para servidores temporários", correto: false },
            { conteudo: "Apenas extensão de férias anuais", correto: false }
        ],
        justificativa: "A licença-maternidade garante proteção à maternidade e direitos do servidor, conforme legislação específica.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "O servidor público pode contribuir para previdência complementar?",
        arrayDeRespostas: [
            { conteudo: "Sim, de forma facultativa, para complementar a aposentadoria do regime próprio", correto: true },
            { conteudo: "Não, apenas regime geral da previdência", correto: false },
            { conteudo: "Sim, mas apenas para dependentes", correto: false },
            { conteudo: "Não, qualquer contribuição é proibida", correto: false }
        ],
        justificativa: "A previdência complementar é opcional e permite que o servidor aumente seus benefícios futuros.",
        categoriaDaPergunta: "regime-juridico-unico-e-seguridade-social-do-servidor-publico"
    },
    {
        enunciado: "Qual é o principal objetivo da Lei Geral de Proteção de Dados Pessoais (LGPD)?",
        arrayDeRespostas: [
            { conteudo: "Proteger os direitos fundamentais de liberdade e privacidade e o livre desenvolvimento da personalidade da pessoa natural", correto: true },
            { conteudo: "Regular apenas o setor bancário", correto: false },
            { conteudo: "Substituir normas internacionais de privacidade", correto: false },
            { conteudo: "Criar regras para publicidade comercial apenas", correto: false }
        ],
        justificativa: "A LGPD visa proteger os dados pessoais, garantindo transparência e controle sobre seu tratamento.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "O que são dados pessoais segundo a LGPD?",
        arrayDeRespostas: [
            { conteudo: "Informações relacionadas a pessoa natural identificada ou identificável", correto: true },
            { conteudo: "Informações públicas sobre empresas", correto: false },
            { conteudo: "Somente dados financeiros", correto: false },
            { conteudo: "Qualquer dado sem identificação", correto: false }
        ],
        justificativa: "Dados pessoais permitem identificar direta ou indiretamente uma pessoa natural.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "O que são dados sensíveis segundo a LGPD?",
        arrayDeRespostas: [
            { conteudo: "Dados sobre origem racial, convicção religiosa, opinião política, saúde ou vida sexual", correto: true },
            { conteudo: "Dados sobre empresas privadas", correto: false },
            { conteudo: "Dados públicos de órgãos governamentais", correto: false },
            { conteudo: "Somente endereços de e-mail", correto: false }
        ],
        justificativa: "Dados sensíveis exigem tratamento diferenciado devido ao risco potencial de discriminação ou danos à pessoa.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "O que é tratamento de dados pessoais?",
        arrayDeRespostas: [
            { conteudo: "Qualquer operação realizada com dados pessoais, como coleta, armazenamento, uso, compartilhamento e eliminação", correto: true },
            { conteudo: "Apenas coleta de dados para cadastro", correto: false },
            { conteudo: "Somente armazenamento de dados offline", correto: false },
            { conteudo: "Divulgação de informações públicas", correto: false }
        ],
        justificativa: "O conceito de tratamento abrange todas as operações envolvendo dados pessoais.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "Quem é o controlador de dados segundo a LGPD?",
        arrayDeRespostas: [
            { conteudo: "Pessoa natural ou jurídica que decide sobre o tratamento de dados pessoais", correto: true },
            { conteudo: "Servidor público responsável por qualquer informação", correto: false },
            { conteudo: "Qualquer empresa privada, independentemente do dado", correto: false },
            { conteudo: "Apenas órgãos de fiscalização", correto: false }
        ],
        justificativa: "O controlador é quem define as finalidades e meios de tratamento de dados pessoais.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "Quem é o operador de dados?",
        arrayDeRespostas: [
            { conteudo: "Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador", correto: true },
            { conteudo: "O mesmo que o titular dos dados", correto: false },
            { conteudo: "Agente de fiscalização de órgãos públicos", correto: false },
            { conteudo: "Qualquer usuário da internet", correto: false }
        ],
        justificativa: "O operador realiza operações de tratamento conforme instruções do controlador, sem decidir sobre finalidades.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "O titular de dados pessoais tem quais direitos básicos?",
        arrayDeRespostas: [
            { conteudo: "Acesso, correção, exclusão, portabilidade e revogação de consentimento", correto: true },
            { conteudo: "Somente o direito de acesso público", correto: false },
            { conteudo: "Apenas direito de vender dados", correto: false },
            { conteudo: "Não possui direitos perante empresas privadas", correto: false }
        ],
        justificativa: "O titular pode controlar seus dados, garantindo transparência e proteção de sua privacidade.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "O tratamento de dados pessoais depende de que condição legal?",
        arrayDeRespostas: [
            { conteudo: "Consentimento do titular ou outra base legal prevista na LGPD", correto: true },
            { conteudo: "Sempre pode ocorrer sem restrição", correto: false },
            { conteudo: "Apenas quando a empresa é privada", correto: false },
            { conteudo: "Sem necessidade de transparência", correto: false }
        ],
        justificativa: "A LGPD define bases legais específicas para tratamento, sendo o consentimento a mais comum.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "O que é anonimização de dados?",
        arrayDeRespostas: [
            { conteudo: "Processo que torna impossível identificar a pessoa natural a partir dos dados", correto: true },
            { conteudo: "Exposição pública de dados sensíveis", correto: false },
            { conteudo: "Criação de perfis de usuários para marketing", correto: false },
            { conteudo: "Coleta de dados sem consentimento", correto: false }
        ],
        justificativa: "A anonimização protege a privacidade, permitindo uso de dados sem risco de identificação do titular.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "Qual órgão é responsável pela fiscalização da LGPD no Brasil?",
        arrayDeRespostas: [
            { conteudo: "Autoridade Nacional de Proteção de Dados (ANPD)", correto: true },
            { conteudo: "Banco Central do Brasil", correto: false },
            { conteudo: "Ministério da Justiça apenas", correto: false },
            { conteudo: "Tribunal de Contas da União", correto: false }
        ],
        justificativa: "A ANPD é o órgão responsável por orientar, fiscalizar e aplicar sanções em caso de descumprimento da LGPD.",
        categoriaDaPergunta: "lei-geral-de-protecao-de-dados-pessoais"
    },
    {
        enunciado: "Qual o principal objetivo da Lei nº 14.129/2021?",
        arrayDeRespostas: [
            { conteudo: "Aumentar a eficiência da administração pública por meio da desburocratização, inovação e transformação digital", correto: true },
            { conteudo: "Regular contratos privados de prestação de serviços", correto: false },
            { conteudo: "Estabelecer regras de licitação apenas", correto: false },
            { conteudo: "Substituir a Constituição Federal", correto: false }
        ],
        justificativa: "A Lei nº 14.129/2021 visa modernizar a gestão pública, promovendo eficiência e qualidade nos serviços prestados.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "O que significa desburocratização no serviço público?",
        arrayDeRespostas: [
            { conteudo: "Reduzir processos complexos, simplificando o atendimento ao cidadão", correto: true },
            { conteudo: "Aumentar a quantidade de formulários para controle", correto: false },
            { conteudo: "Eliminar todos os procedimentos legais", correto: false },
            { conteudo: "Transferir serviços públicos para o setor privado", correto: false }
        ],
        justificativa: "Desburocratização visa simplificar procedimentos e agilizar o atendimento ao público.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "O que é inovação na administração pública?",
        arrayDeRespostas: [
            { conteudo: "Introdução de novas práticas, métodos e tecnologias para melhorar os serviços", correto: true },
            { conteudo: "Manutenção das práticas tradicionais sem alterações", correto: false },
            { conteudo: "Redução de direitos dos servidores", correto: false },
            { conteudo: "Substituição de leis por decisões administrativas", correto: false }
        ],
        justificativa: "A inovação permite que os serviços públicos sejam mais eficientes, eficazes e modernos.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "O que significa eficiência na administração pública?",
        arrayDeRespostas: [
            { conteudo: "Alcançar resultados com o melhor uso possível dos recursos disponíveis", correto: true },
            { conteudo: "Aumentar despesas sem resultados claros", correto: false },
            { conteudo: "Reduzir a qualidade do serviço para economizar recursos", correto: false },
            { conteudo: "Substituir servidores por tecnologia sem planejamento", correto: false }
        ],
        justificativa: "Eficiência é usar recursos de forma racional, garantindo resultados satisfatórios para a sociedade.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "O que significa efetividade no serviço público?",
        arrayDeRespostas: [
            { conteudo: "Alcançar os objetivos propostos de forma consistente e satisfatória", correto: true },
            { conteudo: "Garantir apenas a execução de tarefas sem resultados", correto: false },
            { conteudo: "Reduzir custos ignorando metas", correto: false },
            { conteudo: "Substituir objetivos por medidas paliativas", correto: false }
        ],
        justificativa: "Efetividade avalia se os serviços prestados realmente atingem os resultados planejados.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "Qual a importância da transformação digital no serviço público?",
        arrayDeRespostas: [
            { conteudo: "Facilitar o acesso, agilizar processos e reduzir burocracia", correto: true },
            { conteudo: "Substituir servidores humanos indiscriminadamente", correto: false },
            { conteudo: "Aumentar o número de processos em papel", correto: false },
            { conteudo: "Exigir que todos usem tecnologia sem suporte", correto: false }
        ],
        justificativa: "A transformação digital moderniza a administração, tornando o serviço público mais rápido e acessível.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "O que são indicadores de desempenho no serviço público?",
        arrayDeRespostas: [
            { conteudo: "Ferramentas para medir a eficiência, qualidade e efetividade das ações e serviços públicos", correto: true },
            { conteudo: "Relatórios internos sem relação com resultados", correto: false },
            { conteudo: "Documentos legais obrigatórios apenas para auditoria", correto: false },
            { conteudo: "Dados exclusivamente financeiros", correto: false }
        ],
        justificativa: "Indicadores de desempenho permitem avaliar se os serviços estão atingindo seus objetivos e metas.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "O que significa foco no cidadão na gestão pública?",
        arrayDeRespostas: [
            { conteudo: "Priorizar as necessidades e satisfação dos cidadãos na prestação de serviços", correto: true },
            { conteudo: "Atender apenas demandas administrativas internas", correto: false },
            { conteudo: "Reduzir serviços para economizar recursos", correto: false },
            { conteudo: "Manter processos complexos para controle interno", correto: false }
        ],
        justificativa: "Serviço público eficiente coloca o cidadão no centro das decisões, garantindo atendimento de qualidade.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "O que é governança pública?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de práticas e processos que asseguram transparência, responsabilidade e eficiência na gestão pública", correto: true },
            { conteudo: "Gestão privada de serviços públicos sem fiscalização", correto: false },
            { conteudo: "Decisões políticas sem planejamento", correto: false },
            { conteudo: "Controle exclusivo de resultados financeiros", correto: false }
        ],
        justificativa: "A governança garante que os recursos e processos sejam utilizados de forma responsável e eficiente.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "Qual a relação entre inovação e qualidade no serviço público?",
        arrayDeRespostas: [
            { conteudo: "A inovação permite criar soluções que aumentam a qualidade e eficiência do serviço público", correto: true },
            { conteudo: "Inovação reduz a qualidade ao alterar processos tradicionais", correto: false },
            { conteudo: "Inovação é apenas tecnologia sem impacto na qualidade", correto: false },
            { conteudo: "Não há relação entre inovação e qualidade", correto: false }
        ],
        justificativa: "Inovar é melhorar processos, métodos e tecnologias, impactando diretamente na qualidade do serviço público.",
        categoriaDaPergunta: "qualidade-e-eficiencia-no-serviço-publico"
    },
    {
        enunciado: "O que é serviço público?",
        arrayDeRespostas: [
            { conteudo: "Atividade realizada pelo Estado ou sob sua regulação para atender às necessidades da coletividade", correto: true },
            { conteudo: "Serviço prestado exclusivamente por empresas privadas", correto: false },
            { conteudo: "Atividade econômica sem interesse social", correto: false },
            { conteudo: "Serviço limitado ao setor militar", correto: false }
        ],
        justificativa: "Serviço público é destinado a atender interesses da sociedade e pode ser prestado pelo Estado ou delegadamente a terceiros.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "Qual característica principal distingue um serviço público de serviços privados?",
        arrayDeRespostas: [
            { conteudo: "Atender o interesse coletivo com continuidade e legalidade", correto: true },
            { conteudo: "Gerar lucro para empresas privadas", correto: false },
            { conteudo: "Ser oferecido apenas mediante pagamento", correto: false },
            { conteudo: "Ser prestado de forma eventual e sem regulação", correto: false }
        ],
        justificativa: "Serviços públicos têm finalidade social, regulados por lei e contínuos, diferentemente de serviços privados.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "Quem pode prestar serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "O Estado diretamente ou mediante delegação a terceiros", correto: true },
            { conteudo: "Apenas empresas privadas sem regulação", correto: false },
            { conteudo: "Qualquer cidadão sem autorização legal", correto: false },
            { conteudo: "Exclusivamente organizações internacionais", correto: false }
        ],
        justificativa: "O Estado pode prestar serviços diretamente ou delegar a particulares, mantendo responsabilidade e fiscalização.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "Qual o objetivo central do serviço público?",
        arrayDeRespostas: [
            { conteudo: "Satisfazer necessidades essenciais da coletividade e garantir direitos fundamentais", correto: true },
            { conteudo: "Aumentar lucro do Estado", correto: false },
            { conteudo: "Servir apenas interesses políticos", correto: false },
            { conteudo: "Reduzir despesas do setor privado", correto: false }
        ],
        justificativa: "O serviço público visa o interesse coletivo, promovendo bem-estar e direitos da população.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "O que significa continuidade do serviço público?",
        arrayDeRespostas: [
            { conteudo: "Prestação ininterrupta de serviços essenciais à população", correto: true },
            { conteudo: "Serviços prestados apenas ocasionalmente", correto: false },
            { conteudo: "Serviços que podem ser suspensos sem aviso", correto: false },
            { conteudo: "Atendimento apenas em feriados e finais de semana", correto: false }
        ],
        justificativa: "Serviços públicos essenciais devem ser contínuos para garantir atendimento à sociedade sem interrupções injustificadas.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "O que significa gratuidade em determinados serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Alguns serviços são oferecidos sem cobrança direta, financiados pelo Estado", correto: true },
            { conteudo: "Todos os serviços devem gerar lucro", correto: false },
            { conteudo: "Serviços pagos apenas por empresas privadas", correto: false },
            { conteudo: "Serviços gratuitos sem regulamentação legal", correto: false }
        ],
        justificativa: "A gratuidade garante acesso a serviços essenciais, mesmo para cidadãos que não podem pagar, assegurando equidade social.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "O que significa generalidade no serviço público?",
        arrayDeRespostas: [
            { conteudo: "Serviços destinados a atender todos os membros da coletividade, sem discriminação", correto: true },
            { conteudo: "Serviços apenas para funcionários públicos", correto: false },
            { conteudo: "Serviços exclusivos para grupos específicos sem critério legal", correto: false },
            { conteudo: "Serviços apenas para empresas privadas", correto: false }
        ],
        justificativa: "A generalidade garante que os serviços públicos beneficiem toda a população de forma justa e igualitária.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "O que é a legalidade do serviço público?",
        arrayDeRespostas: [
            { conteudo: "Todos os serviços devem ser prestados conforme normas legais e regulamentos aplicáveis", correto: true },
            { conteudo: "Serviços podem ser prestados sem lei para agilizar processos", correto: false },
            { conteudo: "A legalidade aplica-se apenas a serviços privados", correto: false },
            { conteudo: "Serviços podem ignorar regras administrativas", correto: false }
        ],
        justificativa: "A legalidade assegura que os serviços públicos respeitem a lei, garantindo direitos e deveres de cidadãos e servidores.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "Qual a diferença entre serviço público e atividade administrativa?",
        arrayDeRespostas: [
            { conteudo: "Serviço público visa atender a coletividade; atividade administrativa é o conjunto de atos para organizar e gerir o serviço", correto: true },
            { conteudo: "Serviço público é privado; atividade administrativa é estatal", correto: false },
            { conteudo: "Serviço público depende de lucro; atividade administrativa não", correto: false },
            { conteudo: "Não há diferença conceitual", correto: false }
        ],
        justificativa: "A atividade administrativa dá suporte à prestação do serviço público, mas não se confunde com o próprio serviço.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "O serviço público pode ser delegado a particulares?",
        arrayDeRespostas: [
            { conteudo: "Sim, mediante autorização legal, concessão, permissão ou parceria público-privada", correto: true },
            { conteudo: "Não, apenas o Estado pode prestar serviços", correto: false },
            { conteudo: "Sim, sem necessidade de lei ou regulamentação", correto: false },
            { conteudo: "Apenas serviços não essenciais", correto: false }
        ],
        justificativa: "A delegação permite que o setor privado auxilie na prestação de serviços, sempre sob controle e responsabilidade do Estado.",
        categoriaDaPergunta: "conceito-de-servico-publico"
    },
    {
        enunciado: "O que é o princípio da legalidade na administração pública?",
        arrayDeRespostas: [
            { conteudo: "Os atos administrativos devem estar estritamente de acordo com a lei", correto: true },
            { conteudo: "A administração pode agir fora da lei se houver interesse público", correto: false },
            { conteudo: "Somente leis municipais devem ser seguidas", correto: false },
            { conteudo: "Aplicável apenas a servidores temporários", correto: false }
        ],
        justificativa: "O princípio da legalidade garante que a administração pública só pode agir dentro dos limites da lei.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que significa o princípio da impessoalidade?",
        arrayDeRespostas: [
            { conteudo: "Atos administrativos devem visar o interesse público, não interesses pessoais", correto: true },
            { conteudo: "Os atos podem beneficiar amigos e familiares", correto: false },
            { conteudo: "Aplicável apenas a gestores privados", correto: false },
            { conteudo: "Significa que servidores não têm identidade própria", correto: false }
        ],
        justificativa: "A impessoalidade evita favorecimento e garante que decisões administrativas beneficiem a coletividade.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da moralidade administrativa?",
        arrayDeRespostas: [
            { conteudo: "Atos da administração devem obedecer padrões éticos e morais", correto: true },
            { conteudo: "Servidores podem agir conforme conveniência pessoal", correto: false },
            { conteudo: "Aplica-se apenas a atos financeiros", correto: false },
            { conteudo: "Permite decisões fora da lei se ético", correto: false }
        ],
        justificativa: "A moralidade exige que a atuação do poder público seja ética e responsável.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que significa princípio da publicidade?",
        arrayDeRespostas: [
            { conteudo: "Atos da administração devem ser divulgados para garantir transparência", correto: true },
            { conteudo: "Os atos podem ser mantidos em sigilo sem justificativa", correto: false },
            { conteudo: "Somente comunicados internos são suficientes", correto: false },
            { conteudo: "Aplica-se apenas a relatórios financeiros", correto: false }
        ],
        justificativa: "A publicidade garante que cidadãos tenham acesso às informações sobre a administração pública.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da eficiência?",
        arrayDeRespostas: [
            { conteudo: "Atuar com produtividade, economia de recursos e resultados satisfatórios", correto: true },
            { conteudo: "Foco apenas na redução de custos sem qualidade", correto: false },
            { conteudo: "Eficiência significa rapidez sem resultados", correto: false },
            { conteudo: "Aplica-se apenas a servidores comissionados", correto: false }
        ],
        justificativa: "A eficiência busca otimizar recursos e melhorar a prestação dos serviços públicos.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da razoabilidade?",
        arrayDeRespostas: [
            { conteudo: "Atos administrativos devem ter proporção e equilíbrio em relação aos fins públicos", correto: true },
            { conteudo: "Pode-se exagerar em medidas desde que legal", correto: false },
            { conteudo: "Aplica-se apenas a atos financeiros", correto: false },
            { conteudo: "Significa obedecer apenas regras internas", correto: false }
        ],
        justificativa: "A razoabilidade evita abusos de poder e garante decisões equilibradas e justas.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da motivação?",
        arrayDeRespostas: [
            { conteudo: "Atos administrativos devem ser fundamentados com razões claras e justificáveis", correto: true },
            { conteudo: "Não há necessidade de justificar atos internos", correto: false },
            { conteudo: "Aplicável apenas a contratos", correto: false },
            { conteudo: "Significa motivar servidores com prêmios", correto: false }
        ],
        justificativa: "A motivação garante transparência e possibilita controle e contestação de decisões administrativas.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da proporcionalidade?",
        arrayDeRespostas: [
            { conteudo: "Os meios usados pela administração devem ser adequados e necessários para atingir os fins", correto: true },
            { conteudo: "Pode-se usar qualquer meio para fins públicos", correto: false },
            { conteudo: "Significa aumentar o alcance de serviços sem limites", correto: false },
            { conteudo: "Aplica-se apenas a punições administrativas", correto: false }
        ],
        justificativa: "A proporcionalidade evita excessos e garante que a administração não ultrapasse o necessário para atingir objetivos.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da continuidade dos serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Serviços essenciais devem ser prestados de forma ininterrupta", correto: true },
            { conteudo: "Serviços podem ser interrompidos sem planejamento", correto: false },
            { conteudo: "Aplica-se apenas a empresas privadas contratadas", correto: false },
            { conteudo: "Serviços públicos podem ser prestados apenas em dias úteis", correto: false }
        ],
        justificativa: "A continuidade assegura que a população tenha acesso constante aos serviços essenciais.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da economicidade?",
        arrayDeRespostas: [
            { conteudo: "A administração deve usar os recursos públicos com parcimônia e eficiência", correto: true },
            { conteudo: "Apenas reduzir despesas sem resultado", correto: false },
            { conteudo: "Significa cortar direitos dos servidores", correto: false },
            { conteudo: "Aplica-se somente a contratos privados", correto: false }
        ],
        justificativa: "A economicidade garante o uso responsável dos recursos públicos, sem desperdícios.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que significa o princípio da legalidade estrita?",
        arrayDeRespostas: [
            { conteudo: "A administração só pode agir dentro dos limites expressos na lei", correto: true },
            { conteudo: "A administração pode inovar sem base legal", correto: false },
            { conteudo: "Significa seguir regras internas apenas", correto: false },
            { conteudo: "Aplica-se somente a municípios", correto: false }
        ],
        justificativa: "A legalidade estrita protege a sociedade de atos administrativos ilegais.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da publicidade como instrumento de controle social?",
        arrayDeRespostas: [
            { conteudo: "Permite que a sociedade acompanhe e fiscalize os atos administrativos", correto: true },
            { conteudo: "Serve apenas para marketing institucional", correto: false },
            { conteudo: "Aplica-se apenas a relatórios financeiros internos", correto: false },
            { conteudo: "Não tem relação com transparência", correto: false }
        ],
        justificativa: "A publicidade promove transparência e accountability, permitindo controle social efetivo.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que significa princípio da impessoalidade na contratação pública?",
        arrayDeRespostas: [
            { conteudo: "Evita favoritismo, garantindo igualdade de condições a todos os concorrentes", correto: true },
            { conteudo: "Permite escolher fornecedores por amizade", correto: false },
            { conteudo: "Aplica-se apenas a servidores comissionados", correto: false },
            { conteudo: "Significa contratar sem análise de mérito", correto: false }
        ],
        justificativa: "A impessoalidade assegura processos justos e equitativos na administração pública.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que é o princípio da responsabilidade?",
        arrayDeRespostas: [
            { conteudo: "Servidores e gestores devem responder por seus atos administrativos", correto: true },
            { conteudo: "Responsabilidade é opcional e depende da situação", correto: false },
            { conteudo: "Aplica-se apenas a atos financeiros", correto: false },
            { conteudo: "Significa que gestores podem agir sem prestar contas", correto: false }
        ],
        justificativa: "A responsabilidade garante que ações da administração pública sejam justificáveis e passíveis de controle.",
        categoriaDaPergunta: "principios-da-administracao-publica"
    },
    {
        enunciado: "O que significa o princípio da continuidade nos serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Os serviços essenciais devem ser prestados de forma ininterrupta", correto: true },
            { conteudo: "Serviços podem ser interrompidos a qualquer momento sem aviso", correto: false },
            { conteudo: "Aplica-se apenas a serviços administrativos internos", correto: false },
            { conteudo: "Significa que os serviços são prestados apenas em horários comerciais", correto: false }
        ],
        justificativa: "A continuidade garante que a população tenha acesso constante aos serviços essenciais.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que é o princípio da mutabilidade dos serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Os serviços podem ser adaptados ou modificados conforme o interesse público e a evolução das necessidades", correto: true },
            { conteudo: "Serviços públicos não podem sofrer alterações", correto: false },
            { conteudo: "Aplica-se apenas a serviços privados delegados", correto: false },
            { conteudo: "Significa que serviços são permanentes e imutáveis", correto: false }
        ],
        justificativa: "A mutabilidade permite que os serviços evoluam de acordo com a demanda social e tecnológica.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que significa o princípio da generalidade?",
        arrayDeRespostas: [
            { conteudo: "Os serviços devem atender a toda a coletividade, sem discriminação", correto: true },
            { conteudo: "Serviços podem ser prestados apenas a grupos específicos", correto: false },
            { conteudo: "Aplica-se apenas a servidores públicos", correto: false },
            { conteudo: "Significa atender apenas interesses privados", correto: false }
        ],
        justificativa: "A generalidade assegura que todos os cidadãos tenham acesso aos serviços públicos de maneira igualitária.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que é o princípio da gratuidade em serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Alguns serviços essenciais devem ser oferecidos sem cobrança direta do usuário", correto: true },
            { conteudo: "Todos os serviços devem gerar lucro para o Estado", correto: false },
            { conteudo: "Serviços gratuitos podem ser prestados sem regulamentação legal", correto: false },
            { conteudo: "Aplica-se apenas a serviços privados", correto: false }
        ],
        justificativa: "A gratuidade garante acesso universal a serviços essenciais, promovendo equidade social.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que significa princípio da eficiência nos serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Os serviços devem ser prestados com economia de recursos e máxima produtividade", correto: true },
            { conteudo: "Eficiência significa apenas reduzir custos sem qualidade", correto: false },
            { conteudo: "Aplicável apenas a atos administrativos internos", correto: false },
            { conteudo: "Significa rapidez sem resultados satisfatórios", correto: false }
        ],
        justificativa: "A eficiência busca otimizar recursos e melhorar a prestação de serviços à sociedade.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que é o princípio da adaptabilidade?",
        arrayDeRespostas: [
            { conteudo: "Serviços devem se adaptar às mudanças sociais, tecnológicas e econômicas", correto: true },
            { conteudo: "Serviços públicos são rígidos e não podem mudar", correto: false },
            { conteudo: "Aplicável apenas a empresas privadas delegadas", correto: false },
            { conteudo: "Significa que os serviços podem ser suspensos temporariamente", correto: false }
        ],
        justificativa: "A adaptabilidade permite que os serviços públicos se mantenham relevantes e eficazes frente às mudanças.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que significa princípio da continuidade de atendimento?",
        arrayDeRespostas: [
            { conteudo: "Os serviços devem estar disponíveis de maneira constante para atender a população", correto: true },
            { conteudo: "Serviços podem ser suspensos sem aviso prévio", correto: false },
            { conteudo: "Aplica-se apenas a serviços administrativos internos", correto: false },
            { conteudo: "Significa atender apenas empresas privadas", correto: false }
        ],
        justificativa: "Garantir atendimento contínuo é essencial para a confiabilidade dos serviços públicos.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que é o princípio da padronização?",
        arrayDeRespostas: [
            { conteudo: "Os serviços públicos devem seguir padrões de qualidade e procedimentos uniformes", correto: true },
            { conteudo: "Cada unidade pode agir sem padronização", correto: false },
            { conteudo: "Aplica-se apenas a contratos administrativos", correto: false },
            { conteudo: "Significa variar serviços para cada usuário", correto: false }
        ],
        justificativa: "A padronização assegura consistência, qualidade e previsibilidade na prestação dos serviços.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que significa princípio da adaptabilidade tecnológica?",
        arrayDeRespostas: [
            { conteudo: "Serviços devem incorporar tecnologias que aumentem a eficiência e qualidade", correto: true },
            { conteudo: "Tecnologia não deve ser utilizada na administração pública", correto: false },
            { conteudo: "Aplicável apenas a empresas privadas", correto: false },
            { conteudo: "Significa terceirizar todos os serviços tecnológicos", correto: false }
        ],
        justificativa: "A incorporação de tecnologias modernas permite maior eficiência e melhor atendimento ao cidadão.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "O que significa princípio da acessibilidade nos serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Serviços devem ser acessíveis a todos os cidadãos, incluindo pessoas com deficiência", correto: true },
            { conteudo: "Serviços podem ser restritos a grupos selecionados", correto: false },
            { conteudo: "Aplica-se apenas a documentação interna", correto: false },
            { conteudo: "Significa cobrar taxa extra para acesso", correto: false }
        ],
        justificativa: "A acessibilidade garante que todos tenham igualdade de condições para usufruir dos serviços públicos.",
        categoriaDaPergunta: "principios-especificos-dos-servicos-publicos"
    },
    {
        enunciado: "Como os serviços públicos podem ser classificados quanto à natureza?",
        arrayDeRespostas: [
            { conteudo: "Serviços administrativos, serviços econômicos e serviços sociais", correto: true },
            { conteudo: "Serviços comerciais, industriais e militares", correto: false },
            { conteudo: "Serviços privados, públicos e mistos", correto: false },
            { conteudo: "Serviços nacionais, estaduais e municipais", correto: false }
        ],
        justificativa: "A classificação quanto à natureza considera o tipo de finalidade e atuação do serviço público.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que são serviços administrativos?",
        arrayDeRespostas: [
            { conteudo: "Serviços ligados à organização interna da administração pública, sem entrega direta à população", correto: true },
            { conteudo: "Serviços que geram lucro privado", correto: false },
            { conteudo: "Serviços prestados por empresas privadas", correto: false },
            { conteudo: "Serviços exclusivamente militares", correto: false }
        ],
        justificativa: "Serviços administrativos mantêm o funcionamento da administração, apoiando a prestação de serviços diretos à sociedade.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que são serviços econômicos?",
        arrayDeRespostas: [
            { conteudo: "Serviços prestados pelo Estado ou delegados, voltados à produção de bens e exploração econômica", correto: true },
            { conteudo: "Serviços puramente administrativos internos", correto: false },
            { conteudo: "Serviços gratuitos para todos os cidadãos", correto: false },
            { conteudo: "Serviços prestados apenas por ONGs", correto: false }
        ],
        justificativa: "Serviços econômicos envolvem exploração de atividades que podem gerar receita ou lucro, como energia e transportes.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que são serviços sociais?",
        arrayDeRespostas: [
            { conteudo: "Serviços destinados diretamente ao bem-estar e qualidade de vida da população", correto: true },
            { conteudo: "Serviços apenas de fiscalização administrativa", correto: false },
            { conteudo: "Serviços econômicos com finalidade de lucro", correto: false },
            { conteudo: "Serviços internos sem contato com o público", correto: false }
        ],
        justificativa: "Serviços sociais incluem educação, saúde, assistência social e outras atividades voltadas ao atendimento da sociedade.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "Como os serviços públicos podem ser classificados quanto à forma de prestação?",
        arrayDeRespostas: [
            { conteudo: "Diretos, indiretos e delegados", correto: true },
            { conteudo: "Administrativos, privados e mistos", correto: false },
            { conteudo: "Nacionais, estaduais e municipais", correto: false },
            { conteudo: "Obrigatórios, facultativos e opcionais", correto: false }
        ],
        justificativa: "Essa classificação considera quem executa o serviço: o próprio Estado, autarquias/empresas públicas ou particulares autorizados.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que são serviços públicos diretos?",
        arrayDeRespostas: [
            { conteudo: "Prestados diretamente pelo Estado com seus próprios recursos e pessoal", correto: true },
            { conteudo: "Serviços terceirizados por empresas privadas sem supervisão", correto: false },
            { conteudo: "Serviços voluntários prestados por ONGs", correto: false },
            { conteudo: "Serviços pagos apenas por usuários privados", correto: false }
        ],
        justificativa: "Serviços diretos são executados pela própria administração pública centralizada.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que são serviços públicos indiretos?",
        arrayDeRespostas: [
            { conteudo: "Prestados por entidades administrativas descentralizadas, como autarquias e empresas públicas", correto: true },
            { conteudo: "Serviços privados sem regulação estatal", correto: false },
            { conteudo: "Serviços voluntários sem interesse público", correto: false },
            { conteudo: "Serviços prestados apenas a setores econômicos", correto: false }
        ],
        justificativa: "Serviços indiretos são executados por entidades que possuem autonomia administrativa, mas continuam vinculadas ao Estado.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que são serviços públicos delegados?",
        arrayDeRespostas: [
            { conteudo: "Serviços prestados por particulares autorizados, permitidos ou concedidos pelo Estado", correto: true },
            { conteudo: "Serviços internos de órgãos públicos", correto: false },
            { conteudo: "Serviços econômicos estatais sem finalidade social", correto: false },
            { conteudo: "Serviços voluntários sem regulação", correto: false }
        ],
        justificativa: "A delegação permite que o setor privado auxilie na prestação de serviços, garantindo fiscalização e interesse público.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "Como os serviços públicos podem ser classificados quanto à obrigatoriedade?",
        arrayDeRespostas: [
            { conteudo: "Obrigatórios ou facultativos", correto: true },
            { conteudo: "Diretos, indiretos ou privados", correto: false },
            { conteudo: "Administrativos, sociais ou econômicos", correto: false },
            { conteudo: "Estaduais, municipais ou federais", correto: false }
        ],
        justificativa: "Essa classificação indica se o cidadão deve necessariamente receber ou se pode optar pelo uso do serviço.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que são serviços públicos obrigatórios?",
        arrayDeRespostas: [
            { conteudo: "Serviços essenciais que devem ser oferecidos a toda população", correto: true },
            { conteudo: "Serviços opcionais prestados apenas por conveniência", correto: false },
            { conteudo: "Serviços exclusivamente econômicos", correto: false },
            { conteudo: "Serviços prestados apenas a órgãos internos do governo", correto: false }
        ],
        justificativa: "Serviços obrigatórios são essenciais e visam atender necessidades básicas da sociedade, como saúde e segurança.",
        categoriaDaPergunta: "classificacao-dos-servicos-publicos"
    },
    {
        enunciado: "Quais são as principais formas de prestação dos serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Direta, indireta e delegada", correto: true },
            { conteudo: "Privada, voluntária e interna", correto: false },
            { conteudo: "Obrigatória, facultativa e opcional", correto: false },
            { conteudo: "Administrativa, econômica e social", correto: false }
        ],
        justificativa: "A classificação considera quem executa o serviço: o próprio Estado, entidades indiretas ou particulares delegados.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que caracteriza a prestação direta de serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Serviços prestados diretamente pelo Estado com seus recursos e pessoal", correto: true },
            { conteudo: "Serviços terceirizados sem fiscalização", correto: false },
            { conteudo: "Serviços opcionais e privados", correto: false },
            { conteudo: "Serviços prestados apenas em horários limitados", correto: false }
        ],
        justificativa: "Na prestação direta, o Estado realiza os serviços com seus próprios órgãos e funcionários.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que caracteriza a prestação indireta de serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Serviços realizados por autarquias, fundações ou empresas públicas", correto: true },
            { conteudo: "Serviços prestados apenas por empresas privadas sem supervisão", correto: false },
            { conteudo: "Serviços opcionais e gratuitos", correto: false },
            { conteudo: "Serviços prestados apenas por cidadãos voluntários", correto: false }
        ],
        justificativa: "A prestação indireta é feita por entidades que possuem autonomia administrativa, mas continuam vinculadas ao Estado.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que caracteriza a prestação delegada de serviços públicos?",
        arrayDeRespostas: [
            { conteudo: "Serviços prestados por particulares mediante concessão, permissão ou autorização", correto: true },
            { conteudo: "Serviços prestados exclusivamente pelo Estado", correto: false },
            { conteudo: "Serviços voluntários sem regulação legal", correto: false },
            { conteudo: "Serviços internos sem contato com o público", correto: false }
        ],
        justificativa: "A delegação permite que o setor privado preste serviços sob fiscalização e normas do Estado.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que é uma concessão de serviço público?",
        arrayDeRespostas: [
            { conteudo: "Contrato pelo qual o Estado transfere a exploração do serviço a particular por prazo determinado", correto: true },
            { conteudo: "Serviço gratuito sem contrato formal", correto: false },
            { conteudo: "Serviço exclusivo para órgãos internos do governo", correto: false },
            { conteudo: "Serviço prestado sem regulamentação legal", correto: false }
        ],
        justificativa: "A concessão envolve delegação de serviço público essencial, com obrigações contratuais e fiscalização estatal.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que é uma permissão de serviço público?",
        arrayDeRespostas: [
            { conteudo: "Autorização estatal para que particular preste serviço público, normalmente de menor complexidade e prazo menor que a concessão", correto: true },
            { conteudo: "Contrato de prestação direta pelo Estado", correto: false },
            { conteudo: "Serviço gratuito prestado por voluntários", correto: false },
            { conteudo: "Serviço sem fiscalização do Estado", correto: false }
        ],
        justificativa: "A permissão é uma forma de delegação administrativa temporária e flexível, com supervisão do Estado.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que é autorização de serviço público?",
        arrayDeRespostas: [
            { conteudo: "Consentimento legal do Estado para que particular execute atividade específica de interesse público", correto: true },
            { conteudo: "Serviço prestado apenas por servidores do Estado", correto: false },
            { conteudo: "Serviço opcional sem finalidade pública", correto: false },
            { conteudo: "Serviço prestado por ONG sem contrato", correto: false }
        ],
        justificativa: "A autorização é uma forma simplificada de delegação, permitindo prestação de serviço mediante regras estabelecidas.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "Qual a diferença entre concessão e permissão?",
        arrayDeRespostas: [
            { conteudo: "Concessão envolve serviço essencial e prazo mais longo; permissão é de menor complexidade e prazo mais curto", correto: true },
            { conteudo: "Concessão é gratuita; permissão é sempre paga", correto: false },
            { conteudo: "Concessão não precisa de contrato; permissão sempre precisa", correto: false },
            { conteudo: "Não há diferença entre concessão e permissão", correto: false }
        ],
        justificativa: "A diferença se dá em complexidade, duração e regulamentação formal do serviço público delegado.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "Quais entidades podem prestar serviços públicos indiretos?",
        arrayDeRespostas: [
            { conteudo: "Autarquias, fundações públicas e empresas estatais", correto: true },
            { conteudo: "Apenas empresas privadas sem contrato", correto: false },
            { conteudo: "ONGs sem supervisão", correto: false },
            { conteudo: "Servidores voluntários sem vínculo legal", correto: false }
        ],
        justificativa: "Essas entidades possuem autonomia administrativa e estão vinculadas ao Estado para execução de serviços públicos.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que caracteriza a prestação direta em relação à responsabilidade?",
        arrayDeRespostas: [
            { conteudo: "O Estado responde integralmente pelos atos praticados", correto: true },
            { conteudo: "O particular responde sozinho pelos serviços delegados", correto: false },
            { conteudo: "Não há responsabilidade formal do Estado", correto: false },
            { conteudo: "A responsabilidade é compartilhada apenas em serviços voluntários", correto: false }
        ],
        justificativa: "Na prestação direta, o Estado assume total responsabilidade pelos serviços fornecidos à população.",
        categoriaDaPergunta: "formas-de-prestacao-dos-servicos-publicos"
    },
    {
        enunciado: "O que é um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Manifestação unilateral do Estado destinada a produzir efeitos jurídicos", correto: true },
            { conteudo: "Contrato entre particulares sem participação do Estado", correto: false },
            { conteudo: "Atividade privada que gera obrigações legais", correto: false },
            { conteudo: "Decisão judicial sem caráter administrativo", correto: false }
        ],
        justificativa: "Ato administrativo é uma declaração do Estado para produzir efeitos jurídicos com finalidade pública.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "Qual é a finalidade do ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Produzir efeitos jurídicos e atender ao interesse público", correto: true },
            { conteudo: "Atender apenas interesses privados", correto: false },
            { conteudo: "Gerar lucro para empresas públicas", correto: false },
            { conteudo: "Aplicar apenas normas internas do governo", correto: false }
        ],
        justificativa: "Todo ato administrativo visa a satisfação do interesse público, regulando direitos e deveres.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "Quais são os elementos essenciais de um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Competência, finalidade, forma, motivo e objeto", correto: true },
            { conteudo: "Lugar, tempo, testemunhas, contrato e assinatura", correto: false },
            { conteudo: "Acordo, consentimento, contrato, cláusula e assinatura", correto: false },
            { conteudo: "Direito, dever, obrigação, recurso e sanção", correto: false }
        ],
        justificativa: "Esses cinco elementos garantem a validade e legalidade do ato administrativo.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "O que significa o elemento 'competência' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Autoridade de quem pratica o ato, de acordo com a lei", correto: true },
            { conteudo: "A área física onde o ato ocorre", correto: false },
            { conteudo: "O objetivo final do ato", correto: false },
            { conteudo: "O tempo em que o ato foi publicado", correto: false }
        ],
        justificativa: "A competência indica quem tem autoridade legal para praticar o ato administrativo.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "O que significa o elemento 'finalidade' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Objetivo público que o ato deve atingir", correto: true },
            { conteudo: "O lucro que o ato gera para o Estado", correto: false },
            { conteudo: "A competência do servidor que assina", correto: false },
            { conteudo: "O prazo de validade do ato", correto: false }
        ],
        justificativa: "A finalidade indica que o ato deve sempre buscar o interesse público, evitando desvios de poder.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "O que significa o elemento 'forma' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Modo de exteriorização do ato, geralmente escrito ou formal", correto: true },
            { conteudo: "O efeito econômico do ato", correto: false },
            { conteudo: "O objetivo de beneficiar empresas privadas", correto: false },
            { conteudo: "A assinatura do particular envolvido", correto: false }
        ],
        justificativa: "A forma garante validade e publicidade ao ato administrativo.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "O que significa o elemento 'motivo' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Circunstâncias fáticas e legais que justificam a prática do ato", correto: true },
            { conteudo: "O interesse privado do servidor", correto: false },
            { conteudo: "A autoridade de quem pratica o ato", correto: false },
            { conteudo: "A duração do ato no tempo", correto: false }
        ],
        justificativa: "O motivo é a causa que legitima o ato administrativo, baseando-se em fatos e leis.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "O que significa o elemento 'objeto' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "O efeito jurídico que o ato pretende produzir", correto: true },
            { conteudo: "O servidor que assina o ato", correto: false },
            { conteudo: "O local onde o ato é publicado", correto: false },
            { conteudo: "O interesse privado do cidadão", correto: false }
        ],
        justificativa: "O objeto corresponde ao conteúdo do ato, ou seja, a sua consequência jurídica.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "Quais são os atributos dos atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Presunção de legitimidade, imperatividade e autoexecutoriedade", correto: true },
            { conteudo: "Gratuidade, discricionariedade e temporalidade", correto: false },
            { conteudo: "Publicidade, obrigatoriedade e adaptabilidade", correto: false },
            { conteudo: "Eficiência, legalidade e moralidade", correto: false }
        ],
        justificativa: "Esses atributos permitem que o ato produza efeitos legais imediatos e seja executado pelo Estado.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "Qual a diferença entre ato vinculado e ato discricionário?",
        arrayDeRespostas: [
            { conteudo: "Ato vinculado tem sua decisão determinada por lei; ato discricionário permite margem de escolha do administrador", correto: true },
            { conteudo: "Ato vinculado é opcional; ato discricionário é obrigatório", correto: false },
            { conteudo: "Ato vinculado não gera efeitos jurídicos; ato discricionário sim", correto: false },
            { conteudo: "Não existe diferença legal entre eles", correto: false }
        ],
        justificativa: "A distinção se dá pelo grau de liberdade do agente público ao praticar o ato administrativo.",
        categoriaDaPergunta: "ato-administrativo"
    },
    {
        enunciado: "Quais são os elementos essenciais do ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Competência, finalidade, forma, motivo e objeto", correto: true },
            { conteudo: "Autoridade, tempo, local, testemunha e assinatura", correto: false },
            { conteudo: "Contrato, consentimento, cláusula, assinatura e prazo", correto: false },
            { conteudo: "Direito, dever, sanção, recurso e obrigação", correto: false }
        ],
        justificativa: "Esses elementos garantem a validade, legalidade e legitimidade do ato administrativo.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "O que é o elemento 'competência' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "A autoridade legal do agente público para praticar o ato", correto: true },
            { conteudo: "O objetivo final do ato", correto: false },
            { conteudo: "O tempo em que o ato foi praticado", correto: false },
            { conteudo: "O efeito econômico do ato", correto: false }
        ],
        justificativa: "Competência indica quem tem a autoridade legal para praticar o ato administrativo.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "O que é o elemento 'finalidade' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "O objetivo público que o ato deve atingir", correto: true },
            { conteudo: "A conveniência pessoal do servidor", correto: false },
            { conteudo: "A duração do ato", correto: false },
            { conteudo: "O local de execução do ato", correto: false }
        ],
        justificativa: "A finalidade garante que o ato administrativo busque o interesse público e não interesses particulares.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "O que significa o elemento 'forma' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "O modo como o ato se exterioriza, geralmente escrito ou formal", correto: true },
            { conteudo: "O conteúdo jurídico do ato", correto: false },
            { conteudo: "O objetivo econômico do ato", correto: false },
            { conteudo: "O prazo de validade do ato", correto: false }
        ],
        justificativa: "A forma assegura a validade e a publicidade do ato administrativo.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "O que é o elemento 'motivo' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "As circunstâncias fáticas e jurídicas que justificam a prática do ato", correto: true },
            { conteudo: "A autoridade de quem assina o ato", correto: false },
            { conteudo: "O tempo de execução do ato", correto: false },
            { conteudo: "O benefício financeiro gerado pelo ato", correto: false }
        ],
        justificativa: "O motivo é a causa que legitima o ato, baseada em fatos e normas legais.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "O que significa o elemento 'objeto' em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "O efeito jurídico que o ato pretende produzir", correto: true },
            { conteudo: "O servidor que pratica o ato", correto: false },
            { conteudo: "O local de publicação do ato", correto: false },
            { conteudo: "O interesse privado do cidadão", correto: false }
        ],
        justificativa: "O objeto é o conteúdo ou resultado jurídico que o ato busca alcançar.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "Por que o elemento competência é essencial no ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Porque garante que apenas o agente autorizado legalmente pratique o ato", correto: true },
            { conteudo: "Porque determina o lucro do ato", correto: false },
            { conteudo: "Porque define a duração do ato", correto: false },
            { conteudo: "Porque escolhe a forma de publicação do ato", correto: false }
        ],
        justificativa: "Sem competência, o ato é nulo, pois não teria legitimidade legal.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "Qual a importância do elemento finalidade?",
        arrayDeRespostas: [
            { conteudo: "Assegura que o ato atenda ao interesse público e não interesses privados", correto: true },
            { conteudo: "Define apenas a forma de assinatura do ato", correto: false },
            { conteudo: "Determina o local de execução do ato", correto: false },
            { conteudo: "Não possui relevância prática", correto: false }
        ],
        justificativa: "A finalidade é o critério que distingue atos válidos de atos praticados com desvio de poder.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "O que acontece se faltar o elemento forma em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "O ato pode ser considerado inválido por não cumprir os requisitos legais de exteriorização", correto: true },
            { conteudo: "O ato continua plenamente válido sem restrições", correto: false },
            { conteudo: "O ato passa a ser voluntário", correto: false },
            { conteudo: "O ato gera efeito apenas econômico", correto: false }
        ],
        justificativa: "A forma garante publicidade, controle e segurança jurídica na administração pública.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "Qual a função do elemento motivo em relação ao controle do ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Permite verificar se há legalidade e legitimidade na prática do ato", correto: true },
            { conteudo: "Define apenas a competência do agente", correto: false },
            { conteudo: "Serve apenas para registro interno sem efeito jurídico", correto: false },
            { conteudo: "Determina o lucro obtido pelo Estado", correto: false }
        ],
        justificativa: "O motivo é essencial para que órgãos de controle possam avaliar a validade do ato administrativo.",
        categoriaDaPergunta: "elementos-essenciais-do-ato-administrativo"
    },
    {
        enunciado: "Quais são os principais atributos dos atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Presunção de legitimidade, imperatividade e autoexecutoriedade", correto: true },
            { conteudo: "Publicidade, temporalidade e discricionariedade", correto: false },
            { conteudo: "Eficiência, moralidade e legalidade", correto: false },
            { conteudo: "Competência, finalidade e forma", correto: false }
        ],
        justificativa: "Esses atributos permitem que o ato produza efeitos imediatos e seja executado pelo Estado.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "O que significa a presunção de legitimidade dos atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "O ato é considerado válido até que se prove o contrário", correto: true },
            { conteudo: "O ato não produz efeitos até ser homologado judicialmente", correto: false },
            { conteudo: "O ato depende de concordância de terceiros", correto: false },
            { conteudo: "O ato é sempre nulo por presunção legal", correto: false }
        ],
        justificativa: "Presume-se que o ato administrativo cumpre a lei e atende ao interesse público, até prova em contrário.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "O que significa a imperatividade dos atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "O ato impõe obrigações independentemente da concordância do administrado", correto: true },
            { conteudo: "O ato depende da assinatura do administrado para produzir efeito", correto: false },
            { conteudo: "O ato é meramente recomendatório", correto: false },
            { conteudo: "O ato só é válido após apreciação judicial", correto: false }
        ],
        justificativa: "Imperatividade significa que o ato obriga terceiros a cumprir suas determinações, sem necessidade de concordância.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "O que significa a autoexecutoriedade dos atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "O Estado pode executá-los diretamente, sem necessidade de intervenção judicial", correto: true },
            { conteudo: "O ato depende de ordem judicial para ser cumprido", correto: false },
            { conteudo: "O ato é opcional para o administrado", correto: false },
            { conteudo: "O ato só produz efeito após recurso administrativo", correto: false }
        ],
        justificativa: "Autoexecutoriedade permite que o Estado faça cumprir o ato de forma direta, garantindo eficácia imediata.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "Qual atributo garante que terceiros devem cumprir o ato mesmo sem concordar com ele?",
        arrayDeRespostas: [
            { conteudo: "Imperatividade", correto: true },
            { conteudo: "Presunção de legitimidade", correto: false },
            { conteudo: "Autoexecutoriedade", correto: false },
            { conteudo: "Finalidade", correto: false }
        ],
        justificativa: "A imperatividade assegura que o ato impõe obrigações de maneira unilateral pelo Estado.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "Qual atributo protege o ato administrativo até que seja declarado nulo?",
        arrayDeRespostas: [
            { conteudo: "Presunção de legitimidade", correto: true },
            { conteudo: "Imperatividade", correto: false },
            { conteudo: "Autoexecutoriedade", correto: false },
            { conteudo: "Legalidade", correto: false }
        ],
        justificativa: "A presunção de legitimidade garante que o ato seja considerado válido até que haja prova de ilegalidade.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "Qual atributo permite que o Estado execute o ato diretamente sem recorrer ao Judiciário?",
        arrayDeRespostas: [
            { conteudo: "Autoexecutoriedade", correto: true },
            { conteudo: "Imperatividade", correto: false },
            { conteudo: "Presunção de legitimidade", correto: false },
            { conteudo: "Publicidade", correto: false }
        ],
        justificativa: "A autoexecutoriedade dá ao Estado meios de fazer cumprir o ato de forma imediata.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "Quais atributos permitem que o ato administrativo tenha eficácia imediata?",
        arrayDeRespostas: [
            { conteudo: "Presunção de legitimidade, imperatividade e autoexecutoriedade", correto: true },
            { conteudo: "Finalidade, forma e objeto", correto: false },
            { conteudo: "Competência, legalidade e moralidade", correto: false },
            { conteudo: "Publicidade, obrigatoriedade e discricionariedade", correto: false }
        ],
        justificativa: "Esses atributos garantem que o ato produza efeitos jurídicos assim que praticado.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "O que acontece se faltar a imperatividade em um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "O ato perde a força de obrigar terceiros a cumpri-lo", correto: true },
            { conteudo: "O ato deixa de ter forma escrita", correto: false },
            { conteudo: "O ato deixa de ter competência", correto: false },
            { conteudo: "O ato deixa de ter finalidade pública", correto: false }
        ],
        justificativa: "Sem imperatividade, o ato administrativo se torna meramente recomendatório, perdendo eficácia obrigatória.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "O que garante que o ato administrativo possa ser executado sem demora pelo Estado?",
        arrayDeRespostas: [
            { conteudo: "Autoexecutoriedade", correto: true },
            { conteudo: "Presunção de legitimidade", correto: false },
            { conteudo: "Imperatividade", correto: false },
            { conteudo: "Finalidade", correto: false }
        ],
        justificativa: "A autoexecutoriedade assegura que o Estado possa impor diretamente os efeitos do ato.",
        categoriaDaPergunta: "atributos-dos-atos-administrativos"
    },
    {
        enunciado: "Como os atos administrativos podem ser classificados quanto à sua validade?",
        arrayDeRespostas: [
            { conteudo: "Vinculados ou discricionários", correto: true },
            { conteudo: "Obrigatórios ou facultativos", correto: false },
            { conteudo: "Escritos ou verbais", correto: false },
            { conteudo: "Diretos ou indiretos", correto: false }
        ],
        justificativa: "A classificação em vinculados ou discricionários se dá de acordo com a margem de liberdade do administrador.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "O que caracteriza um ato administrativo vinculado?",
        arrayDeRespostas: [
            { conteudo: "O agente deve praticar o ato conforme a lei, sem margem de escolha", correto: true },
            { conteudo: "O agente tem total liberdade para decidir conforme conveniência", correto: false },
            { conteudo: "O ato depende da autorização judicial para valer", correto: false },
            { conteudo: "O ato é meramente recomendatório", correto: false }
        ],
        justificativa: "Nos atos vinculados, a lei determina todos os elementos do ato, não cabendo discricionariedade.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "O que caracteriza um ato administrativo discricionário?",
        arrayDeRespostas: [
            { conteudo: "O administrador possui margem de escolha quanto à conveniência e oportunidade", correto: true },
            { conteudo: "O ato deve ser praticado exatamente como a lei determina", correto: false },
            { conteudo: "O ato não produz efeitos jurídicos", correto: false },
            { conteudo: "O ato depende de aprovação judicial para existir", correto: false }
        ],
        justificativa: "A discricionariedade permite ao agente público decidir dentro dos limites legais sobre como agir.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "Como os atos administrativos podem ser classificados quanto aos efeitos que produzem?",
        arrayDeRespostas: [
            { conteudo: "Constitutivos, modificativos, declaratórios ou extintivos", correto: true },
            { conteudo: "Obrigatórios ou facultativos", correto: false },
            { conteudo: "Diretos ou indiretos", correto: false },
            { conteudo: "Escritos ou verbais", correto: false }
        ],
        justificativa: "Essa classificação é baseada na consequência jurídica que cada ato produz.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "O que é um ato administrativo constitutivo?",
        arrayDeRespostas: [
            { conteudo: "Cria um novo direito ou obrigação", correto: true },
            { conteudo: "Extingue um direito existente", correto: false },
            { conteudo: "Reconhece uma situação preexistente", correto: false },
            { conteudo: "Modifica apenas aspectos internos do ato", correto: false }
        ],
        justificativa: "Os atos constitutivos originam direitos ou deveres novos para o administrado ou para o Estado.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "O que é um ato administrativo modificativo?",
        arrayDeRespostas: [
            { conteudo: "Altera um direito ou obrigação já existente", correto: true },
            { conteudo: "Cria um novo direito ou obrigação", correto: false },
            { conteudo: "Declara a situação de fato ou de direito", correto: false },
            { conteudo: "Extingue um direito existente", correto: false }
        ],
        justificativa: "O ato modificativo altera elementos de atos anteriores sem extingui-los completamente.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "O que é um ato administrativo declaratório?",
        arrayDeRespostas: [
            { conteudo: "Reconhece uma situação de fato ou de direito existente", correto: true },
            { conteudo: "Cria um novo direito ou obrigação", correto: false },
            { conteudo: "Altera um ato anterior", correto: false },
            { conteudo: "Extingue um direito ou obrigação", correto: false }
        ],
        justificativa: "O ato declaratório apenas confirma uma situação que já existe, sem criar ou modificar direitos.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "O que é um ato administrativo extintivo?",
        arrayDeRespostas: [
            { conteudo: "Extingue direitos ou obrigações previamente existentes", correto: true },
            { conteudo: "Cria um novo direito ou obrigação", correto: false },
            { conteudo: "Reconhece um direito existente", correto: false },
            { conteudo: "Modifica aspectos internos do ato", correto: false }
        ],
        justificativa: "Os atos extintivos têm como finalidade extinguir efeitos jurídicos que estavam em vigor.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "Como os atos administrativos podem ser classificados quanto à forma de manifestação?",
        arrayDeRespostas: [
            { conteudo: "Escritos, verbais, solenes ou sigilosos", correto: true },
            { conteudo: "Obrigatórios ou facultativos", correto: false },
            { conteudo: "Diretos ou indiretos", correto: false },
            { conteudo: "Vinculados ou discricionários", correto: false }
        ],
        justificativa: "A classificação quanto à forma depende do modo como o ato se exterioriza e é comunicado.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "Um ato administrativo pode ser classificado de várias maneiras simultaneamente?",
        arrayDeRespostas: [
            { conteudo: "Sim, por exemplo, um ato pode ser discricionário, constitutivo e escrito", correto: true },
            { conteudo: "Não, só é possível uma classificação por vez", correto: false },
            { conteudo: "Depende apenas da vontade do servidor", correto: false },
            { conteudo: "Não, atos administrativos não possuem classificação", correto: false }
        ],
        justificativa: "Os atos podem ser classificados sob diferentes critérios: vinculado/discricionário, efeitos produzidos e forma de manifestação.",
        categoriaDaPergunta: "classificacao-dos-atos-administrativos"
    },
    {
        enunciado: "O que são vícios dos atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Irregularidades que afetam a validade ou eficácia do ato", correto: true },
            { conteudo: "Exigências formais cumpridas corretamente", correto: false },
            { conteudo: "Atos praticados de acordo com a lei", correto: false },
            { conteudo: "Atos sem efeitos jurídicos irrelevantes", correto: false }
        ],
        justificativa: "Vícios podem tornar o ato anulável ou nulo, dependendo de sua gravidade.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "Qual é a diferença entre ato nulo e ato anulável?",
        arrayDeRespostas: [
            { conteudo: "Ato nulo é inválido desde a origem; ato anulável pode ser convalidado", correto: true },
            { conteudo: "Ato nulo é discreto; ato anulável é obrigatório", correto: false },
            { conteudo: "Não há diferença legal entre eles", correto: false },
            { conteudo: "Ato nulo depende de aprovação judicial; ato anulável não", correto: false }
        ],
        justificativa: "A nulidade decorre de vício grave; a anulabilidade de vício relativo que permite convalidação.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "O que é vício de competência?",
        arrayDeRespostas: [
            { conteudo: "Quando o ato é praticado por agente sem autoridade legal", correto: true },
            { conteudo: "Quando o ato é publicado incorretamente", correto: false },
            { conteudo: "Quando o ato não possui objeto definido", correto: false },
            { conteudo: "Quando o ato é praticado fora do horário legal", correto: false }
        ],
        justificativa: "A competência garante que apenas agentes legalmente autorizados pratiquem atos administrativos.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "O que é vício de finalidade?",
        arrayDeRespostas: [
            { conteudo: "Quando o ato é praticado para fins diversos do interesse público", correto: true },
            { conteudo: "Quando o ato não tem forma escrita", correto: false },
            { conteudo: "Quando o ato carece de assinatura", correto: false },
            { conteudo: "Quando o ato é discricionário", correto: false }
        ],
        justificativa: "A finalidade é essencial para que o ato sirva ao interesse público e não a interesses particulares.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "O que é vício de forma?",
        arrayDeRespostas: [
            { conteudo: "Quando o ato não respeita a formalidade exigida por lei", correto: true },
            { conteudo: "Quando o ato é praticado por agente competente", correto: false },
            { conteudo: "Quando o ato tem finalidade pública", correto: false },
            { conteudo: "Quando o ato é imperativo", correto: false }
        ],
        justificativa: "A forma é um elemento essencial do ato administrativo; sua ausência compromete a validade.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "O que é vício de motivo?",
        arrayDeRespostas: [
            { conteudo: "Quando as circunstâncias ou fatos que justificam o ato são inexistentes ou falsos", correto: true },
            { conteudo: "Quando o ato é escrito", correto: false },
            { conteudo: "Quando o ato tem finalidade pública", correto: false },
            { conteudo: "Quando o ato é vinculado", correto: false }
        ],
        justificativa: "O motivo deve ser verdadeiro e suficiente para legitimar o ato administrativo.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "O que é vício de objeto?",
        arrayDeRespostas: [
            { conteudo: "Quando o conteúdo do ato é impossível, ilícito ou indeterminado", correto: true },
            { conteudo: "Quando o ato é praticado no prazo correto", correto: false },
            { conteudo: "Quando o ato é escrito formalmente", correto: false },
            { conteudo: "Quando o ato é imperativo", correto: false }
        ],
        justificativa: "O objeto é essencial; se ilícito, impossível ou indeterminado, o ato é nulo.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "O que é convalidação do ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Correção de vícios anuláveis, mantendo os efeitos do ato", correto: true },
            { conteudo: "Extinção automática do ato nulo", correto: false },
            { conteudo: "Publicação do ato em diário oficial", correto: false },
            { conteudo: "Alteração da finalidade do ato", correto: false }
        ],
        justificativa: "Atos anuláveis podem ser convalidados se o vício for sanável e não houver prejuízo a terceiros.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "Quais vícios tornam um ato administrativo nulo de pleno direito?",
        arrayDeRespostas: [
            { conteudo: "Ilicitude do objeto, falta de competência e finalidade contrária à lei", correto: true },
            { conteudo: "Erros de digitação, pequenas omissões e detalhes formais", correto: false },
            { conteudo: "Atos praticados no prazo legal", correto: false },
            { conteudo: "Atos publicados em diário oficial", correto: false }
        ],
        justificativa: "Vícios graves comprometem a validade do ato, tornando-o nulo de pleno direito.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "O que diferencia um ato anulável de um ato nulo?",
        arrayDeRespostas: [
            { conteudo: "O ato anulável possui vício relativo que pode ser convalidado; o ato nulo possui vício absoluto", correto: true },
            { conteudo: "O ato anulável é sempre inválido; o ato nulo pode ser corrigido", correto: false },
            { conteudo: "Não existe diferença legal", correto: false },
            { conteudo: "O ato anulável não produz efeitos; o ato nulo sim", correto: false }
        ],
        justificativa: "A distinção se dá pelo grau de gravidade do vício presente no ato administrativo.",
        categoriaDaPergunta: "vicios-dos-atos-administrativos"
    },
    {
        enunciado: "O que significa a extinção de um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Quando o ato deixa de produzir efeitos jurídicos", correto: true },
            { conteudo: "Quando o ato é praticado com vício", correto: false },
            { conteudo: "Quando o ato é publicado em diário oficial", correto: false },
            { conteudo: "Quando o ato é apenas recomendado", correto: false }
        ],
        justificativa: "A extinção ocorre quando o ato administrativo perde sua eficácia, seja por cumprimento, revogação ou anulação.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "Quais são as formas de extinção dos atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Cumprimento, revogação, anulação, caducidade e desaparecimento do objeto", correto: true },
            { conteudo: "Publicação, assinatura, competência, finalidade e forma", correto: false },
            { conteudo: "Obrigatoriedade, presunção, autoexecutoriedade, imperatividade e publicidade", correto: false },
            { conteudo: "Vinculado, discricionário, constitutivo, declaratório e extintivo", correto: false }
        ],
        justificativa: "Essas são as principais hipóteses que fazem o ato perder seus efeitos jurídicos.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "O que é a revogação de um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Retirada do ato pelo próprio poder público por conveniência e oportunidade", correto: true },
            { conteudo: "Correção de vício de legalidade no ato", correto: false },
            { conteudo: "Cumprimento das obrigações do ato", correto: false },
            { conteudo: "Reconhecimento de direitos do administrado", correto: false }
        ],
        justificativa: "A revogação é realizada por motivos de oportunidade e conveniência, não por ilegalidade.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "O que é a anulação de um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Declaração de nulidade do ato por ilegalidade", correto: true },
            { conteudo: "Extinção do ato por conveniência da administração", correto: false },
            { conteudo: "Cumprimento das obrigações do ato", correto: false },
            { conteudo: "Publicação do ato em diário oficial", correto: false }
        ],
        justificativa: "A anulação ocorre quando há vícios de legalidade, competência, finalidade ou forma.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "O que é caducidade de um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Perda de eficácia por alteração da lei ou norma que o originou", correto: true },
            { conteudo: "Cumprimento integral do ato", correto: false },
            { conteudo: "Revogação por conveniência", correto: false },
            { conteudo: "Erro formal na assinatura do ato", correto: false }
        ],
        justificativa: "Caducidade ocorre quando a norma que sustentava o ato deixa de existir ou é modificada.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "O que significa a extinção por cumprimento do ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Quando o objetivo do ato é totalmente alcançado e não há mais efeitos a produzir", correto: true },
            { conteudo: "Quando o ato é publicado em diário oficial", correto: false },
            { conteudo: "Quando o ato é considerado nulo", correto: false },
            { conteudo: "Quando o ato é apenas recomendado", correto: false }
        ],
        justificativa: "Cumprimento é a forma natural de extinção, ao atingir o fim a que se destinava.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "O que é desaparecimento do objeto de um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Quando o objetivo do ato deixa de existir ou torna-se impossível de alcançar", correto: true },
            { conteudo: "Quando o ato é praticado com vício", correto: false },
            { conteudo: "Quando o ato é declarado discricionário", correto: false },
            { conteudo: "Quando o ato é publicado em diário oficial", correto: false }
        ],
        justificativa: "Se o objeto do ato não existe mais, não há como o ato produzir efeitos.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "Qual a diferença entre anulação e revogação de um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Anulação ocorre por ilegalidade; revogação por conveniência e oportunidade", correto: true },
            { conteudo: "Anulação é voluntária; revogação é obrigatória", correto: false },
            { conteudo: "Não há diferença entre elas", correto: false },
            { conteudo: "Revogação depende de aprovação judicial; anulação não", correto: false }
        ],
        justificativa: "A anulação busca corrigir ilegalidades, enquanto a revogação busca atender à conveniência administrativa.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "Um ato administrativo pode ser extinto por mais de uma causa simultaneamente?",
        arrayDeRespostas: [
            { conteudo: "Sim, por exemplo, um ato pode ser revogado e desaparecer seu objeto ao mesmo tempo", correto: true },
            { conteudo: "Não, só uma causa de extinção é possível por ato", correto: false },
            { conteudo: "Depende da vontade do servidor responsável", correto: false },
            { conteudo: "Não, atos administrativos não podem ser extintos", correto: false }
        ],
        justificativa: "Os atos podem ter múltiplas causas de extinção, dependendo das circunstâncias.",
        categoriaDaPergunta: "extincao-dos-atos-administrativos"
    },
    {
        enunciado: "Qual é a diferença principal entre anulação e revogação de atos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Anulação ocorre por ilegalidade; revogação por conveniência e oportunidade", correto: true },
            { conteudo: "Anulação é feita pelo Judiciário; revogação é feita pelo legislativo", correto: false },
            { conteudo: "Anulação é temporária; revogação é definitiva", correto: false },
            { conteudo: "Não há diferença entre anulação e revogação", correto: false }
        ],
        justificativa: "A anulação corrige ilegalidades, enquanto a revogação atende ao interesse público de forma discricionária.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "Quem pode anular um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "O próprio órgão que o praticou ou autoridade competente", correto: true },
            { conteudo: "Qualquer cidadão", correto: false },
            { conteudo: "Somente o Poder Judiciário", correto: false },
            { conteudo: "O presidente da República exclusivamente", correto: false }
        ],
        justificativa: "A anulação pode ser realizada pela própria administração ou pelo Judiciário em caso de ilegalidade.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "A revogação de um ato administrativo depende de vício de legalidade?",
        arrayDeRespostas: [
            { conteudo: "Não, depende apenas de conveniência e oportunidade", correto: true },
            { conteudo: "Sim, sempre depende de vício de legalidade", correto: false },
            { conteudo: "Sim, depende de decisão judicial", correto: false },
            { conteudo: "Não, depende de consenso do legislativo", correto: false }
        ],
        justificativa: "A revogação é um ato discricionário baseado em interesses da administração, não em ilegalidade.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "Um ato administrativo revogado produz efeitos retroativos?",
        arrayDeRespostas: [
            { conteudo: "Não, a revogação tem efeito apenas prospectivo", correto: true },
            { conteudo: "Sim, anula todos os efeitos passados", correto: false },
            { conteudo: "Depende da vontade do servidor responsável", correto: false },
            { conteudo: "Depende da publicação no diário oficial", correto: false }
        ],
        justificativa: "A revogação não afeta atos já consumados, produz efeito somente a partir de sua publicação.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "Um ato administrativo anulado produz efeitos retroativos?",
        arrayDeRespostas: [
            { conteudo: "Sim, os efeitos do ato considerado ilegal são eliminados desde a origem", correto: true },
            { conteudo: "Não, a anulação só vale para o futuro", correto: false },
            { conteudo: "Depende da conveniência da administração", correto: false },
            { conteudo: "Depende da aprovação judicial", correto: false }
        ],
        justificativa: "A anulação elimina os efeitos do ato desde sua prática, devido à ilegalidade.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "A revogação pode ser aplicada a atos vinculados?",
        arrayDeRespostas: [
            { conteudo: "Sim, desde que não haja violação de direitos adquiridos", correto: true },
            { conteudo: "Não, atos vinculados nunca podem ser revogados", correto: false },
            { conteudo: "Depende da análise judicial", correto: false },
            { conteudo: "Sim, mas apenas com aprovação do legislativo", correto: false }
        ],
        justificativa: "Atos vinculados podem ser revogados por conveniência, respeitados direitos adquiridos.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "Qual é a finalidade da anulação de um ato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Corrigir ilegalidades e preservar a legalidade administrativa", correto: true },
            { conteudo: "Atender conveniência e oportunidade do gestor", correto: false },
            { conteudo: "Modificar o objeto do ato", correto: false },
            { conteudo: "Publicar o ato em diário oficial", correto: false }
        ],
        justificativa: "A anulação garante que os atos praticados com vício de legalidade não produzam efeitos.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "A revogação de atos administrativos discricionários depende de avaliação de:",
        arrayDeRespostas: [
            { conteudo: "Oportunidade e conveniência", correto: true },
            { conteudo: "Ilegalidade", correto: false },
            { conteudo: "Competência judicial", correto: false },
            { conteudo: "Assinatura do interessado", correto: false }
        ],
        justificativa: "Atos discricionários podem ser revogados por decisão da administração considerando o interesse público.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "A anulação de um ato administrativo pode ser feita a qualquer tempo?",
        arrayDeRespostas: [
            { conteudo: "Sim, não há prazo para anular ato ilegal", correto: true },
            { conteudo: "Não, só dentro de 30 dias", correto: false },
            { conteudo: "Não, depende de autorização judicial", correto: false },
            { conteudo: "Depende da conveniência da administração", correto: false }
        ],
        justificativa: "Atos ilegais podem ser anulados a qualquer tempo para resguardar a legalidade.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "A revogação pode afetar direitos adquiridos pelo administrado?",
        arrayDeRespostas: [
            { conteudo: "Não, direitos adquiridos são protegidos", correto: true },
            { conteudo: "Sim, sempre afeta direitos adquiridos", correto: false },
            { conteudo: "Sim, se houver autorização judicial", correto: false },
            { conteudo: "Depende da conveniência da administração", correto: false }
        ],
        justificativa: "A revogação não retroage para prejudicar direitos já constituídos ou adquiridos pelo administrado.",
        categoriaDaPergunta: "anulacao-e-revogacao"
    },
    {
        enunciado: "O que caracteriza um contrato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Acordo de vontades entre Administração Pública e particular, regulado por normas administrativas e de direito público", correto: true },
            { conteudo: "Qualquer acordo de vontades entre particulares", correto: false },
            { conteudo: "Acordo entre órgãos públicos sem participação de terceiros", correto: false },
            { conteudo: "Documento apenas formal, sem efeitos jurídicos", correto: false }
        ],
        justificativa: "Os contratos administrativos possuem normas especiais que diferem dos contratos de direito privado.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "Qual é a finalidade principal dos contratos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Atender ao interesse público e à finalidade administrativa", correto: true },
            { conteudo: "Beneficiar apenas a empresa contratada", correto: false },
            { conteudo: "Garantir lucro máximo para a Administração", correto: false },
            { conteudo: "Formalizar um acordo sem validade jurídica", correto: false }
        ],
        justificativa: "O contrato administrativo existe para que a Administração alcance seus objetivos, garantindo eficiência e legalidade.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "Quem são as partes de um contrato administrativo?",
        arrayDeRespostas: [
            { conteudo: "A Administração Pública e um particular ou empresa", correto: true },
            { conteudo: "Dois particulares quaisquer", correto: false },
            { conteudo: "Dois órgãos públicos do mesmo ente federativo", correto: false },
            { conteudo: "Um sindicato e uma empresa privada", correto: false }
        ],
        justificativa: "O contrato envolve a Administração Pública e um particular para realização de serviços ou fornecimento de bens.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "Qual é a diferença entre contrato administrativo e contrato privado?",
        arrayDeRespostas: [
            { conteudo: "O contrato administrativo é regulado por normas de direito público, enquanto o privado segue o direito civil", correto: true },
            { conteudo: "Não há diferença, ambos seguem as mesmas regras civis", correto: false },
            { conteudo: "O contrato privado só é válido se registrado em cartório", correto: false },
            { conteudo: "O contrato administrativo não precisa de formalidades", correto: false }
        ],
        justificativa: "Os contratos administrativos possuem prerrogativas e restrições especiais em relação ao direito público.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "Um contrato administrativo pode ser alterado unilateralmente?",
        arrayDeRespostas: [
            { conteudo: "Sim, a Administração pode modificar cláusulas para atender ao interesse público", correto: true },
            { conteudo: "Não, alterações só podem ser feitas com acordo das partes", correto: false },
            { conteudo: "Não, nunca é permitido alterar cláusulas", correto: false },
            { conteudo: "Sim, mas apenas por decisão judicial", correto: false }
        ],
        justificativa: "A Administração possui prerrogativas como alteração unilateral para melhor atender ao interesse público.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "O que significa que contratos administrativos possuem cláusulas exorbitantes?",
        arrayDeRespostas: [
            { conteudo: "A Administração possui poderes especiais que não existem em contratos privados", correto: true },
            { conteudo: "As cláusulas são ilegais e nulas", correto: false },
            { conteudo: "São cláusulas opcionais para o particular", correto: false },
            { conteudo: "São cláusulas que favorecem apenas a empresa contratada", correto: false }
        ],
        justificativa: "Cláusulas exorbitantes conferem à Administração prerrogativas como alteração, fiscalização e rescisão unilateral.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "Quais tipos de objetos podem ser contratados pela Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Bens, serviços e obras", correto: true },
            { conteudo: "Apenas obras públicas", correto: false },
            { conteudo: "Apenas serviços internos", correto: false },
            { conteudo: "Somente bens de consumo", correto: false }
        ],
        justificativa: "A Administração pode contratar qualquer objeto necessário à execução de sua função, respeitando a lei.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "O contrato administrativo é sempre celebrado por escrito?",
        arrayDeRespostas: [
            { conteudo: "Sim, deve ser formalizado por escrito para ter validade", correto: true },
            { conteudo: "Não, pode ser verbal em qualquer situação", correto: false },
            { conteudo: "Não, somente contratos privados precisam ser escritos", correto: false },
            { conteudo: "Sim, mas apenas quando ultrapassar R$ 10.000", correto: false }
        ],
        justificativa: "A formalização escrita garante segurança jurídica e possibilidade de fiscalização.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "O que é essencial para a validade de um contrato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Legalidade, objeto lícito e forma prescrita em lei", correto: true },
            { conteudo: "Apenas a assinatura das partes", correto: false },
            { conteudo: "A aprovação do legislativo", correto: false },
            { conteudo: "A divulgação em meios de comunicação", correto: false }
        ],
        justificativa: "A validade depende de respeito às normas legais, ao objeto do contrato e à forma exigida.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "Contratos administrativos podem gerar responsabilidade civil ao particular contratado?",
        arrayDeRespostas: [
            { conteudo: "Sim, por inadimplemento ou execução inadequada", correto: true },
            { conteudo: "Não, apenas a Administração é responsável", correto: false },
            { conteudo: "Não, responsabilidade civil não se aplica a contratos administrativos", correto: false },
            { conteudo: "Sim, mas somente em casos criminais", correto: false }
        ],
        justificativa: "O contratado responde pelos danos ou descumprimento das obrigações pactuadas.",
        categoriaDaPergunta: "conceito-de-contratos-administrativos"
    },
    {
        enunciado: "Qual é uma característica fundamental dos contratos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Possuir cláusulas exorbitantes que conferem poderes especiais à Administração", correto: true },
            { conteudo: "Ser sempre sigiloso e secreto", correto: false },
            { conteudo: "Não possuir qualquer formalidade legal", correto: false },
            { conteudo: "Ter duração indeterminada sem fiscalização", correto: false }
        ],
        justificativa: "Cláusulas exorbitantes permitem à Administração alterar, fiscalizar ou rescindir o contrato unilateralmente, preservando o interesse público.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "Os contratos administrativos possuem natureza jurídica de:",
        arrayDeRespostas: [
            { conteudo: "Direito público, subordinados a normas legais especiais", correto: true },
            { conteudo: "Direito privado, seguindo apenas regras civis", correto: false },
            { conteudo: "Direito penal, pois implicam sanções criminais", correto: false },
            { conteudo: "Direito tributário, pois envolvem pagamentos de taxas", correto: false }
        ],
        justificativa: "Os contratos administrativos têm natureza de direito público, com prerrogativas e restrições específicas.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "A possibilidade de alteração unilateral do contrato pela Administração é:",
        arrayDeRespostas: [
            { conteudo: "Uma característica dos contratos administrativos", correto: true },
            { conteudo: "Proibida em todas as situações", correto: false },
            { conteudo: "Exclusiva dos contratos privados", correto: false },
            { conteudo: "Permitida apenas se houver concordância do particular", correto: false }
        ],
        justificativa: "A Administração pode alterar cláusulas do contrato para atender ao interesse público, respeitando limites legais.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "A execução fiscal e controle pelo poder público é uma característica dos contratos administrativos porque:",
        arrayDeRespostas: [
            { conteudo: "Garante legalidade, eficiência e fiscalização dos serviços prestados", correto: true },
            { conteudo: "Visa exclusivamente o lucro da empresa contratada", correto: false },
            { conteudo: "Evita que o contrato seja escrito", correto: false },
            { conteudo: "Substitui a necessidade de licitação", correto: false }
        ],
        justificativa: "A fiscalização permite que a Administração acompanhe o cumprimento do contrato e proteja o interesse público.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "Os contratos administrativos são dotados de presunção de:",
        arrayDeRespostas: [
            { conteudo: "Legitimidade e veracidade", correto: true },
            { conteudo: "Ilegalidade e nulidade", correto: false },
            { conteudo: "Sigilo absoluto", correto: false },
            { conteudo: "Irrevogabilidade", correto: false }
        ],
        justificativa: "Presumem-se legais e corretos, cabendo à Administração ou interessado comprovar vícios ou irregularidades.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "A continuidade do serviço contratado é uma característica porque:",
        arrayDeRespostas: [
            { conteudo: "Garantia que serviços públicos essenciais não sejam interrompidos", correto: true },
            { conteudo: "A Administração pode rescindir a qualquer momento sem motivo", correto: false },
            { conteudo: "O contrato não precisa ser fiscalizado", correto: false },
            { conteudo: "A empresa pode alterar o objeto sem autorização", correto: false }
        ],
        justificativa: "A continuidade assegura que o serviço público seja prestado de forma ininterrupta.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "A formalidade dos contratos administrativos significa que:",
        arrayDeRespostas: [
            { conteudo: "Devem ser celebrados por escrito e obedecer às normas legais", correto: true },
            { conteudo: "Podem ser apenas verbais, sem registro oficial", correto: false },
            { conteudo: "Não necessitam assinatura das partes", correto: false },
            { conteudo: "A Administração não precisa cumprir prazos", correto: false }
        ],
        justificativa: "A formalização escrita é essencial para validade, publicidade e fiscalização do contrato.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "Os contratos administrativos podem gerar responsabilidades ao contratado porque:",
        arrayDeRespostas: [
            { conteudo: "O particular responde por inadimplemento ou execução inadequada do contrato", correto: true },
            { conteudo: "O particular nunca tem responsabilidade, só a Administração", correto: false },
            { conteudo: "A responsabilidade depende apenas de aprovação judicial", correto: false },
            { conteudo: "A responsabilidade se limita a cláusulas verbais", correto: false }
        ],
        justificativa: "A execução adequada do contrato é obrigatória; descumprimento gera responsabilidade civil ou administrativa.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "A unilateralidade do contrato administrativo significa que:",
        arrayDeRespostas: [
            { conteudo: "A Administração pode impor alterações ou fiscalizar o contrato de forma exclusiva", correto: true },
            { conteudo: "O particular pode modificar unilateralmente o contrato", correto: false },
            { conteudo: "Não há necessidade de fiscalização do contrato", correto: false },
            { conteudo: "O contrato não precisa ser escrito", correto: false }
        ],
        justificativa: "A Administração possui prerrogativas especiais para resguardar o interesse público.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "Os contratos administrativos possuem interesse público porque:",
        arrayDeRespostas: [
            { conteudo: "Atendem finalidades da Administração e direitos da coletividade", correto: true },
            { conteudo: "São celebrados exclusivamente para lucro do particular", correto: false },
            { conteudo: "Servem apenas para formalidade documental", correto: false },
            { conteudo: "Não precisam respeitar normas legais", correto: false }
        ],
        justificativa: "O interesse público é a base que legitima todas as prerrogativas e obrigações nos contratos administrativos.",
        categoriaDaPergunta: "caracteristicas-dos-contratos-administrativos"
    },
    {
        enunciado: "Qual é o tipo de contrato administrativo utilizado para aquisição de bens pela Administração Pública?",
        arrayDeRespostas: [
            { conteudo: "Contrato de fornecimento", correto: true },
            { conteudo: "Contrato de obra", correto: false },
            { conteudo: "Contrato de prestação de serviço", correto: false },
            { conteudo: "Contrato de comodato", correto: false }
        ],
        justificativa: "O contrato de fornecimento é destinado à aquisição de bens móveis necessários à Administração.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "Qual contrato administrativo é utilizado para a execução de obras públicas?",
        arrayDeRespostas: [
            { conteudo: "Contrato de obra", correto: true },
            { conteudo: "Contrato de fornecimento", correto: false },
            { conteudo: "Contrato de serviço contínuo", correto: false },
            { conteudo: "Contrato de comodato", correto: false }
        ],
        justificativa: "O contrato de obra destina-se à construção, reforma, manutenção ou restauração de obras públicas.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "Qual tipo de contrato administrativo tem como objetivo a execução de atividades sem fornecimento de bens materiais?",
        arrayDeRespostas: [
            { conteudo: "Contrato de prestação de serviços", correto: true },
            { conteudo: "Contrato de fornecimento", correto: false },
            { conteudo: "Contrato de obra", correto: false },
            { conteudo: "Contrato de comodato", correto: false }
        ],
        justificativa: "Contratos de serviços têm por objeto a execução de atividades que não envolvem entrega de bens.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "O contrato de gestão é utilizado principalmente para:",
        arrayDeRespostas: [
            { conteudo: "Gestão de órgãos ou entidades públicas com metas de desempenho", correto: true },
            { conteudo: "Fornecimento de produtos ao setor privado", correto: false },
            { conteudo: "Execução de obras civis privadas", correto: false },
            { conteudo: "Contrato entre particulares sem interesse público", correto: false }
        ],
        justificativa: "O contrato de gestão define metas e responsabilidades para a administração de entidades públicas.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "O contrato de parceria público-privada (PPP) tem como característica:",
        arrayDeRespostas: [
            { conteudo: "A cooperação entre Administração Pública e iniciativa privada para serviços ou obras de interesse público", correto: true },
            { conteudo: "Ser exclusivo para fornecimento de bens materiais", correto: false },
            { conteudo: "Não gerar responsabilidade civil ao particular", correto: false },
            { conteudo: "Ser usado apenas em contratos internos da Administração", correto: false }
        ],
        justificativa: "As PPPs envolvem risco compartilhado e têm como finalidade atender interesses públicos com recursos privados.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "Qual tipo de contrato administrativo envolve a locação de bens móveis ou imóveis para uso da Administração?",
        arrayDeRespostas: [
            { conteudo: "Contrato de locação", correto: true },
            { conteudo: "Contrato de obra", correto: false },
            { conteudo: "Contrato de prestação de serviço", correto: false },
            { conteudo: "Contrato de fornecimento", correto: false }
        ],
        justificativa: "O contrato de locação permite que a Administração utilize bens sem precisar adquiri-los.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "O contrato de comodato consiste em:",
        arrayDeRespostas: [
            { conteudo: "Em empréstimo gratuito de bens, sem transferência de propriedade", correto: true },
            { conteudo: "Compra de bens de terceiros com transferência de propriedade", correto: false },
            { conteudo: "Prestação de serviços contínuos", correto: false },
            { conteudo: "Execução de obras civis", correto: false }
        ],
        justificativa: "Comodato é o empréstimo gratuito de bens, caracterizado pela devolução após uso.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "Qual contrato administrativo envolve concessão de serviço público a particulares?",
        arrayDeRespostas: [
            { conteudo: "Contrato de concessão", correto: true },
            { conteudo: "Contrato de fornecimento", correto: false },
            { conteudo: "Contrato de comodato", correto: false },
            { conteudo: "Contrato de gestão", correto: false }
        ],
        justificativa: "O contrato de concessão transfere a prestação de serviço público a particular mediante regulamentação legal.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "O contrato administrativo de prestação de serviços contínuos se diferencia porque:",
        arrayDeRespostas: [
            { conteudo: "Tem execução prolongada e contínua, como limpeza ou vigilância", correto: true },
            { conteudo: "É sempre de curto prazo", correto: false },
            { conteudo: "Envolve apenas entrega de bens", correto: false },
            { conteudo: "Não pode ser fiscalizado pela Administração", correto: false }
        ],
        justificativa: "Serviços contínuos exigem contrato de longo prazo com manutenção da prestação ao longo do tempo.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "O contrato de fornecimento parcelado é utilizado quando:",
        arrayDeRespostas: [
            { conteudo: "A Administração adquire bens em lotes ou etapas ao longo do tempo", correto: true },
            { conteudo: "A Administração executa obras únicas", correto: false },
            { conteudo: "Serviços contínuos não são necessários", correto: false },
            { conteudo: "É um contrato de comodato", correto: false }
        ],
        justificativa: "Fornecimento parcelado permite que os bens sejam entregues em etapas, facilitando planejamento e execução.",
        categoriaDaPergunta: "tipos-de-contratos-administrativos"
    },
    {
        enunciado: "Qual é a primeira fase da contratação administrativa?",
        arrayDeRespostas: [
            { conteudo: "Planejamento da contratação", correto: true },
            { conteudo: "Execução do contrato", correto: false },
            { conteudo: "Fiscalização do contrato", correto: false },
            { conteudo: "Pagamento do fornecedor", correto: false }
        ],
        justificativa: "O planejamento define a necessidade, o objeto e as condições da contratação, sendo a fase inicial.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "A fase de licitação tem como objetivo:",
        arrayDeRespostas: [
            { conteudo: "Selecionar a proposta mais vantajosa para a Administração Pública", correto: true },
            { conteudo: "Executar o contrato", correto: false },
            { conteudo: "Assinar o contrato sem análise de propostas", correto: false },
            { conteudo: "Efetuar pagamento imediato ao fornecedor", correto: false }
        ],
        justificativa: "A licitação é a fase em que a Administração seleciona a melhor proposta em condições de igualdade.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "Qual fase antecede a assinatura do contrato administrativo?",
        arrayDeRespostas: [
            { conteudo: "Julgamento e homologação da licitação", correto: true },
            { conteudo: "Execução do contrato", correto: false },
            { conteudo: "Fiscalização do contrato", correto: false },
            { conteudo: "Planejamento do pagamento", correto: false }
        ],
        justificativa: "Após julgamento e homologação da licitação, ocorre a assinatura do contrato formalizando a contratação.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "A fase de execução do contrato envolve:",
        arrayDeRespostas: [
            { conteudo: "Cumprimento das obrigações contratuais por ambas as partes", correto: true },
            { conteudo: "Planejamento da licitação", correto: false },
            { conteudo: "Somente o pagamento ao contratado", correto: false },
            { conteudo: "Registro do processo sem execução", correto: false }
        ],
        justificativa: "Nesta fase, o contratado presta o serviço ou fornece o bem, e a Administração acompanha e fiscaliza.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "A fiscalização do contrato administrativo tem como objetivo:",
        arrayDeRespostas: [
            { conteudo: "Garantir que o contrato seja executado conforme as condições pactuadas", correto: true },
            { conteudo: "Permitir alterações ilimitadas pelo contratado", correto: false },
            { conteudo: "Substituir a fase de licitação", correto: false },
            { conteudo: "Evitar pagamento ao contratado", correto: false }
        ],
        justificativa: "A fiscalização assegura que os serviços ou bens contratados atendam aos padrões e prazos previstos.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "A fase de pagamento ocorre:",
        arrayDeRespostas: [
            { conteudo: "Após a execução do contrato e verificação da conformidade", correto: true },
            { conteudo: "Antes da assinatura do contrato", correto: false },
            { conteudo: "Durante o planejamento da contratação", correto: false },
            { conteudo: "Sem necessidade de fiscalização", correto: false }
        ],
        justificativa: "O pagamento é feito somente após a Administração confirmar que o contrato foi cumprido corretamente.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "O planejamento da contratação inclui:",
        arrayDeRespostas: [
            { conteudo: "Definição do objeto, estimativa de preços e pesquisa de mercado", correto: true },
            { conteudo: "Execução dos serviços sem análise prévia", correto: false },
            { conteudo: "Assinatura imediata do contrato", correto: false },
            { conteudo: "Pagamento antecipado sem licitação", correto: false }
        ],
        justificativa: "O planejamento é crucial para garantir a eficiência, legalidade e economicidade da contratação.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "Qual fase da contratação administrativa garante a transparência e legalidade do processo?",
        arrayDeRespostas: [
            { conteudo: "Licitação", correto: true },
            { conteudo: "Execução do contrato", correto: false },
            { conteudo: "Pagamento", correto: false },
            { conteudo: "Planejamento interno sem divulgação", correto: false }
        ],
        justificativa: "A licitação assegura competição justa, transparência e escolha da proposta mais vantajosa.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "A fase de encerramento do contrato administrativo envolve:",
        arrayDeRespostas: [
            { conteudo: "Verificação final do cumprimento das obrigações e liquidação de responsabilidades", correto: true },
            { conteudo: "Início da licitação para novo contrato", correto: false },
            { conteudo: "Assinatura do contrato", correto: false },
            { conteudo: "Planejamento inicial do objeto", correto: false }
        ],
        justificativa: "O encerramento formaliza que todas as obrigações foram cumpridas e encerra as responsabilidades das partes.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "A homologação do processo licitatório significa:",
        arrayDeRespostas: [
            { conteudo: "Validação e aprovação do resultado da licitação pela autoridade competente", correto: true },
            { conteudo: "Início da execução do contrato sem análise", correto: false },
            { conteudo: "Pagamento ao contratado sem entrega", correto: false },
            { conteudo: "Planejamento do objeto sem licitação", correto: false }
        ],
        justificativa: "A homologação confirma que o processo foi conduzido de acordo com a lei, permitindo a assinatura do contrato.",
        categoriaDaPergunta: "fases-da-contratacao-administrativa"
    },
    {
        enunciado: "O que são cláusulas exorbitantes em contratos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Cláusulas que conferem poderes especiais à Administração, além do que seria comum em contratos privados", correto: true },
            { conteudo: "Cláusulas que obrigam apenas o contratado a cumprir regras civis", correto: false },
            { conteudo: "Cláusulas que tornam o contrato inválido automaticamente", correto: false },
            { conteudo: "Cláusulas opcionais para o contratado", correto: false }
        ],
        justificativa: "As cláusulas exorbitantes permitem à Administração alterar, fiscalizar ou rescindir unilateralmente o contrato, protegendo o interesse público.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "Qual é uma prerrogativa conferida à Administração pelas cláusulas exorbitantes?",
        arrayDeRespostas: [
            { conteudo: "Alteração unilateral do contrato para atender ao interesse público", correto: true },
            { conteudo: "Exigir que o contratado ignore normas legais", correto: false },
            { conteudo: "Evitar fiscalização do contrato", correto: false },
            { conteudo: "Permitir que o contratado modifique cláusulas sem aviso", correto: false }
        ],
        justificativa: "A Administração pode ajustar cláusulas quando necessário para o cumprimento do interesse público, respeitando limites legais.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "As cláusulas exorbitantes permitem à Administração:",
        arrayDeRespostas: [
            { conteudo: "Rescindir unilateralmente o contrato em caso de interesse público ou descumprimento", correto: true },
            { conteudo: "Cancelar o contrato sem motivo legal", correto: false },
            { conteudo: "Transferir a execução do contrato a terceiros sem aviso", correto: false },
            { conteudo: "Evitar cumprir obrigações financeiras", correto: false }
        ],
        justificativa: "A rescisão unilateral protege o interesse público quando o contratado descumpre obrigações ou há necessidade administrativa.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "A fiscalização direta do cumprimento das obrigações pelo contratado é:",
        arrayDeRespostas: [
            { conteudo: "Uma característica conferida pelas cláusulas exorbitantes", correto: true },
            { conteudo: "Uma obrigação exclusiva do contratado", correto: false },
            { conteudo: "Opcional para a Administração", correto: false },
            { conteudo: "Proibida por lei", correto: false }
        ],
        justificativa: "A Administração pode monitorar e controlar a execução do contrato para garantir conformidade com o objeto contratado.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "O poder de aplicar sanções ao contratado em caso de descumprimento do contrato é:",
        arrayDeRespostas: [
            { conteudo: "Uma prerrogativa derivada das cláusulas exorbitantes", correto: true },
            { conteudo: "Vedada em contratos administrativos", correto: false },
            { conteudo: "Exclusiva de contratos privados", correto: false },
            { conteudo: "Não possui fundamento legal", correto: false }
        ],
        justificativa: "As cláusulas exorbitantes conferem à Administração poder de multar, suspender ou rescindir contratos quando necessário.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "A modificação unilateral do contrato pode ocorrer apenas quando:",
        arrayDeRespostas: [
            { conteudo: "Houver interesse público ou necessidade de adequação do objeto", correto: true },
            { conteudo: "O contratado solicitar, sem análise da Administração", correto: false },
            { conteudo: "A Administração quiser sem justificativa", correto: false },
            { conteudo: "For contrato privado", correto: false }
        ],
        justificativa: "A alteração unilateral deve respeitar os limites legais e visar sempre ao interesse público.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "As cláusulas exorbitantes distinguem os contratos administrativos dos contratos privados porque:",
        arrayDeRespostas: [
            { conteudo: "Conferem prerrogativas especiais à Administração, ausentes no direito privado", correto: true },
            { conteudo: "Eliminam a necessidade de pagamento ao contratado", correto: false },
            { conteudo: "Tornam o contrato inválido automaticamente", correto: false },
            { conteudo: "Impedem a fiscalização do contrato", correto: false }
        ],
        justificativa: "Essas prerrogativas permitem que a Administração proteja o interesse público e exerça controle sobre o contrato.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "O contrato administrativo com cláusulas exorbitantes permite:",
        arrayDeRespostas: [
            { conteudo: "Garantir cumprimento do objeto e atender ao interesse público com poderes especiais", correto: true },
            { conteudo: "Evitar o cumprimento das obrigações contratuais", correto: false },
            { conteudo: "Aumentar arbitrariamente os preços pagos ao contratado", correto: false },
            { conteudo: "Eximir a Administração de responsabilidade legal", correto: false }
        ],
        justificativa: "As cláusulas exorbitantes são instrumentos para assegurar que o contrato cumpra suas finalidades públicas.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "Qual das opções abaixo NÃO é uma prerrogativa conferida pelas cláusulas exorbitantes?",
        arrayDeRespostas: [
            { conteudo: "O contratado alterar unilateralmente o objeto do contrato", correto: true },
            { conteudo: "Alteração unilateral pelo interesse público", correto: false },
            { conteudo: "Fiscalização direta do cumprimento das obrigações", correto: false },
            { conteudo: "Rescisão unilateral em caso de descumprimento", correto: false }
        ],
        justificativa: "Somente a Administração tem prerrogativas especiais; o contratado não pode alterar o contrato unilateralmente.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "As cláusulas exorbitantes estão previstas em qual legislação brasileira?",
        arrayDeRespostas: [
            { conteudo: "Lei nº 8.666/1993 (Lei de Licitações e Contratos Administrativos)", correto: true },
            { conteudo: "Código Civil", correto: false },
            { conteudo: "Lei do Consumidor", correto: false },
            { conteudo: "Constituição Federal apenas", correto: false }
        ],
        justificativa: "A Lei 8.666/1993 estabelece regras sobre contratos administrativos, incluindo cláusulas exorbitantes.",
        categoriaDaPergunta: "clausulas-exorbitantes"
    },
    {
        enunciado: "Qual é uma forma de extinção dos contratos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Rescisão", correto: true },
            { conteudo: "Início da execução", correto: false },
            { conteudo: "Fiscalização contínua", correto: false },
            { conteudo: "Alteração unilateral", correto: false }
        ],
        justificativa: "A rescisão é uma das formas previstas para extinguir contratos administrativos, podendo ocorrer por interesse público ou inadimplemento.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "A extinção por rescisão pode ser motivada por:",
        arrayDeRespostas: [
            { conteudo: "Inadimplemento do contratado ou interesse público", correto: true },
            { conteudo: "Solicitação do contratado apenas", correto: false },
            { conteudo: "Alteração do objeto sem justificativa", correto: false },
            { conteudo: "Fiscalização deficiente", correto: false }
        ],
        justificativa: "A rescisão pode ocorrer por descumprimento do contrato ou conveniência administrativa.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "A rescisão unilateral é prerrogativa de quem?",
        arrayDeRespostas: [
            { conteudo: "Da Administração Pública", correto: true },
            { conteudo: "Do contratado", correto: false },
            { conteudo: "De órgãos de controle externo apenas", correto: false },
            { conteudo: "Do Poder Legislativo", correto: false }
        ],
        justificativa: "A Administração pode rescindir unilateralmente contratos administrativos para atender ao interesse público.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "A extinção por acordo ocorre quando:",
        arrayDeRespostas: [
            { conteudo: "Ambas as partes concordam em encerrar o contrato", correto: true },
            { conteudo: "Somente a Administração decide encerrar", correto: false },
            { conteudo: "O contratado deixa de cumprir suas obrigações", correto: false },
            { conteudo: "O contrato é alterado unilateralmente", correto: false }
        ],
        justificativa: "O término por acordo exige consenso entre Administração e contratado.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "O término do contrato pelo cumprimento total do objeto é chamado de:",
        arrayDeRespostas: [
            { conteudo: "Extinção natural ou adimplemento", correto: true },
            { conteudo: "Rescisão unilateral", correto: false },
            { conteudo: "Rescisão judicial", correto: false },
            { conteudo: "Extinção por inadimplemento", correto: false }
        ],
        justificativa: "Quando todas as obrigações contratuais são cumpridas, o contrato se extingue naturalmente.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "A rescisão amigável é:",
        arrayDeRespostas: [
            { conteudo: "Quando as partes acordam voluntariamente a extinção do contrato", correto: true },
            { conteudo: "Quando apenas a Administração impõe o fim do contrato", correto: false },
            { conteudo: "Quando o contratado descumpre o contrato", correto: false },
            { conteudo: "Quando há execução parcial do contrato", correto: false }
        ],
        justificativa: "A rescisão amigável ocorre mediante consenso entre Administração e contratado, sem litígio.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "A rescisão por culpa do contratado ocorre quando:",
        arrayDeRespostas: [
            { conteudo: "O contratado descumpre cláusulas contratuais ou obrigações legais", correto: true },
            { conteudo: "A Administração decide encerrar sem motivo", correto: false },
            { conteudo: "O contrato é cumprido integralmente", correto: false },
            { conteudo: "Há acordo entre as partes", correto: false }
        ],
        justificativa: "Descumprimento pelo contratado, como atraso ou má execução, justifica rescisão por culpa.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "A extinção por interesse público é aplicada quando:",
        arrayDeRespostas: [
            { conteudo: "A Administração identifica conveniência ou oportunidade para encerrar o contrato", correto: true },
            { conteudo: "O contratado cumpre todas as obrigações", correto: false },
            { conteudo: "Há descumprimento do contrato pelo contratado", correto: false },
            { conteudo: "O contrato é privado e sem interesse público", correto: false }
        ],
        justificativa: "A Administração pode rescindir contratos para atender ao interesse público, mesmo sem culpa do contratado.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "A rescisão judicial ocorre quando:",
        arrayDeRespostas: [
            { conteudo: "Há disputa judicial sobre o descumprimento ou validade do contrato", correto: true },
            { conteudo: "As partes decidem de comum acordo", correto: false },
            { conteudo: "O contrato se cumpre integralmente", correto: false },
            { conteudo: "A Administração rescinde unilateralmente sem litígio", correto: false }
        ],
        justificativa: "Quando há conflito sobre execução ou obrigações, a extinção do contrato pode ser determinada judicialmente.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "O aditamento ou prorrogação do contrato administrativo:",
        arrayDeRespostas: [
            { conteudo: "Não extingue o contrato, apenas altera ou estende suas condições", correto: true },
            { conteudo: "Extingue o contrato imediatamente", correto: false },
            { conteudo: "É ilegal em qualquer circunstância", correto: false },
            { conteudo: "Sempre ocorre de forma unilateral pelo contratado", correto: false }
        ],
        justificativa: "O aditamento modifica ou prorroga o contrato, sem extingui-lo, mantendo a vigência do ajuste original.",
        categoriaDaPergunta: "extincao-dos-contratos-administrativos"
    },
    {
        enunciado: "O que são sanções administrativas?",
        arrayDeRespostas: [
            { conteudo: "Medidas aplicadas pela Administração para punir o descumprimento de normas ou contratos", correto: true },
            { conteudo: "Benefícios concedidos a servidores por desempenho", correto: false },
            { conteudo: "Acordos voluntários entre particulares", correto: false },
            { conteudo: "Remuneração adicional por produtividade", correto: false }
        ],
        justificativa: "Sanções administrativas são instrumentos legais para punir infrações cometidas por servidores, fornecedores ou empresas contratadas.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "Qual é uma sanção administrativa comum aplicada a fornecedores que descumprem contrato?",
        arrayDeRespostas: [
            { conteudo: "Multa", correto: true },
            { conteudo: "Promoção automática", correto: false },
            { conteudo: "Bonificação financeira", correto: false },
            { conteudo: "Transferência de função", correto: false }
        ],
        justificativa: "A multa é aplicada para penalizar o descumprimento das obrigações contratuais pelo fornecedor.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "A suspensão temporária de participar em licitações é uma sanção administrativa destinada a:",
        arrayDeRespostas: [
            { conteudo: "Empresas ou pessoas que descumprirem normas legais ou contratuais", correto: true },
            { conteudo: "Servidores com bom desempenho", correto: false },
            { conteudo: "Empresas que cumprem todos os contratos", correto: false },
            { conteudo: "Clientes que não utilizam serviços públicos", correto: false }
        ],
        justificativa: "A suspensão impede temporariamente que o infrator participe de novos processos licitatórios.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "A declaração de inidoneidade impede que:",
        arrayDeRespostas: [
            { conteudo: "Uma empresa participe de licitações ou celebre contratos com a Administração", correto: true },
            { conteudo: "O servidor receba férias", correto: false },
            { conteudo: "Um cidadão acesse serviços públicos", correto: false },
            { conteudo: "A Administração suspenda contratos", correto: false }
        ],
        justificativa: "A inidoneidade é uma sanção que afasta a empresa do mercado público devido a irregularidades graves.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "A advertência é uma sanção administrativa aplicada quando:",
        arrayDeRespostas: [
            { conteudo: "O ato infracional é leve e não causa grandes prejuízos", correto: true },
            { conteudo: "Há descumprimento grave de contrato", correto: false },
            { conteudo: "Há má-fé comprovada em licitação", correto: false },
            { conteudo: "O servidor recebe bônus por produtividade", correto: false }
        ],
        justificativa: "A advertência é usada para corrigir condutas leves, sem penalidades severas.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "As sanções administrativas podem ser aplicadas a:",
        arrayDeRespostas: [
            { conteudo: "Servidores públicos, empresas e particulares que descumprirem normas", correto: true },
            { conteudo: "Somente servidores civis", correto: false },
            { conteudo: "Somente empresas privadas", correto: false },
            { conteudo: "Cidadãos sem vínculo com contratos administrativos", correto: false }
        ],
        justificativa: "A lei prevê sanções para diferentes sujeitos que infringirem normas ou obrigações legais.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "A multa administrativa é calculada geralmente:",
        arrayDeRespostas: [
            { conteudo: "Em percentual sobre o valor do contrato ou obrigação descumprida", correto: true },
            { conteudo: "Como benefício financeiro ao contratado", correto: false },
            { conteudo: "Como valor fixo sem relação ao contrato", correto: false },
            { conteudo: "Somente após ação judicial", correto: false }
        ],
        justificativa: "O valor da multa é proporcional ao contrato e à gravidade da infração, conforme previsto em lei.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "A suspensão de direitos ou funções administrativas pode ocorrer em casos de:",
        arrayDeRespostas: [
            { conteudo: "Descumprimento de normas por servidores ou contratados", correto: true },
            { conteudo: "Execução correta de contratos", correto: false },
            { conteudo: "Cumprimento de obrigações legais", correto: false },
            { conteudo: "Participação em licitações regulares", correto: false }
        ],
        justificativa: "A suspensão visa punir infrações graves e impedir temporariamente o exercício de certas atividades.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "A aplicação de sanções administrativas deve respeitar:",
        arrayDeRespostas: [
            { conteudo: "Os princípios da legalidade, proporcionalidade e devido processo legal", correto: true },
            { conteudo: "Somente a vontade da autoridade administrativa", correto: false },
            { conteudo: "A conveniência do contratado", correto: false },
            { conteudo: "A urgência do serviço sem análise legal", correto: false }
        ],
        justificativa: "As sanções devem observar a lei e princípios fundamentais do direito administrativo.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "A inabilitação em licitações futuras é aplicada quando:",
        arrayDeRespostas: [
            { conteudo: "Uma empresa comete infrações graves, como fraude ou inadimplência contratual", correto: true },
            { conteudo: "A empresa cumpre rigorosamente o contrato", correto: false },
            { conteudo: "O servidor realiza suas funções corretamente", correto: false },
            { conteudo: "O contrato termina naturalmente por adimplemento", correto: false }
        ],
        justificativa: "A inabilitação impede que empresas infratoras participem de licitações futuras, protegendo o interesse público.",
        categoriaDaPergunta: "sancoes-administrativas"
    },
    {
        enunciado: "Qual é o princípio que obriga a Administração a agir conforme a lei nas licitações?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Legalidade", correto: true },
            { conteudo: "Princípio da Impessoalidade", correto: false },
            { conteudo: "Princípio da Publicidade", correto: false },
            { conteudo: "Princípio da Moralidade", correto: false }
        ],
        justificativa: "A legalidade é a base de toda a atuação administrativa, garantindo que a licitação respeite a lei.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio assegura que não haja favorecimento ou perseguição entre os licitantes?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Impessoalidade", correto: true },
            { conteudo: "Princípio da Economicidade", correto: false },
            { conteudo: "Princípio da Razoabilidade", correto: false },
            { conteudo: "Princípio da Eficiência", correto: false }
        ],
        justificativa: "A impessoalidade garante igualdade de tratamento e evita discriminações.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "O princípio que garante que o julgamento da proposta seja feito sem critérios subjetivos é:",
        arrayDeRespostas: [
            { conteudo: "Princípio do Julgamento Objetivo", correto: true },
            { conteudo: "Princípio da Competitividade", correto: false },
            { conteudo: "Princípio da Transparência", correto: false },
            { conteudo: "Princípio da Isonomia", correto: false }
        ],
        justificativa: "O julgamento objetivo evita subjetividade e garante clareza nos critérios de avaliação.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio obriga que todas as etapas da licitação sejam públicas e acessíveis?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Publicidade", correto: true },
            { conteudo: "Princípio da Probidade Administrativa", correto: false },
            { conteudo: "Princípio da Eficiência", correto: false },
            { conteudo: "Princípio da Moralidade", correto: false }
        ],
        justificativa: "A publicidade garante transparência e controle social.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio busca a melhor utilização dos recursos públicos com o menor custo possível?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Economicidade", correto: true },
            { conteudo: "Princípio da Impessoalidade", correto: false },
            { conteudo: "Princípio da Vinculação ao Edital", correto: false },
            { conteudo: "Princípio da Razoabilidade", correto: false }
        ],
        justificativa: "A economicidade garante uso racional dos recursos para benefício público.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio obriga o gestor a seguir as regras definidas no edital da licitação?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Vinculação ao Instrumento Convocatório", correto: true },
            { conteudo: "Princípio da Moralidade", correto: false },
            { conteudo: "Princípio da Legalidade", correto: false },
            { conteudo: "Princípio da Eficiência", correto: false }
        ],
        justificativa: "Esse princípio garante que as regras do edital sejam cumpridas fielmente.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "O princípio que garante tratamento igualitário entre os participantes do processo é:",
        arrayDeRespostas: [
            { conteudo: "Princípio da Isonomia", correto: true },
            { conteudo: "Princípio da Transparência", correto: false },
            { conteudo: "Princípio da Probidade", correto: false },
            { conteudo: "Princípio da Moralidade", correto: false }
        ],
        justificativa: "A isonomia assegura igualdade de oportunidades para todos os licitantes.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio garante que o interesse público prevaleça sobre interesses particulares?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Moralidade", correto: true },
            { conteudo: "Princípio da Eficiência", correto: false },
            { conteudo: "Princípio da Economicidade", correto: false },
            { conteudo: "Princípio da Competitividade", correto: false }
        ],
        justificativa: "A moralidade garante que a licitação seja guiada por valores éticos.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio garante que os licitantes tenham acesso igual às condições de competição?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Competitividade", correto: true },
            { conteudo: "Princípio da Publicidade", correto: false },
            { conteudo: "Princípio da Probidade", correto: false },
            { conteudo: "Princípio da Razoabilidade", correto: false }
        ],
        justificativa: "A competitividade impede restrições desnecessárias e aumenta a concorrência.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "O princípio que exige honestidade e boa-fé da Administração e dos licitantes é:",
        arrayDeRespostas: [
            { conteudo: "Princípio da Probidade Administrativa", correto: true },
            { conteudo: "Princípio da Impessoalidade", correto: false },
            { conteudo: "Princípio da Economicidade", correto: false },
            { conteudo: "Princípio da Eficiência", correto: false }
        ],
        justificativa: "A probidade busca prevenir fraudes e atos de corrupção.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio orienta a Administração a selecionar a proposta mais adequada para o interesse público?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Seleção da Proposta Mais Vantajosa", correto: true },
            { conteudo: "Princípio da Vinculação ao Edital", correto: false },
            { conteudo: "Princípio da Razoabilidade", correto: false },
            { conteudo: "Princípio da Transparência", correto: false }
        ],
        justificativa: "Esse princípio garante que o vencedor seja aquele que oferece a melhor relação custo-benefício.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio exige que a licitação seja conduzida de forma eficiente, sem desperdício de recursos?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Eficiência", correto: true },
            { conteudo: "Princípio da Isonomia", correto: false },
            { conteudo: "Princípio da Moralidade", correto: false },
            { conteudo: "Princípio da Probidade", correto: false }
        ],
        justificativa: "A eficiência busca os melhores resultados com menor custo e tempo.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "O princípio que impede exigências desnecessárias que restrinjam a participação é:",
        arrayDeRespostas: [
            { conteudo: "Princípio da Razoabilidade", correto: true },
            { conteudo: "Princípio da Legalidade", correto: false },
            { conteudo: "Princípio da Economicidade", correto: false },
            { conteudo: "Princípio da Transparência", correto: false }
        ],
        justificativa: "A razoabilidade impede exigências abusivas que prejudiquem a competitividade.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio garante que o processo licitatório seja compreensível e verificável pela sociedade?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Transparência", correto: true },
            { conteudo: "Princípio da Moralidade", correto: false },
            { conteudo: "Princípio da Isonomia", correto: false },
            { conteudo: "Princípio da Eficiência", correto: false }
        ],
        justificativa: "A transparência garante clareza nas decisões e fiscalização social.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual princípio assegura que os critérios e condições estabelecidos no edital sejam seguidos até o fim?",
        arrayDeRespostas: [
            { conteudo: "Princípio da Vinculação ao Instrumento Convocatório", correto: true },
            { conteudo: "Princípio da Publicidade", correto: false },
            { conteudo: "Princípio da Razoabilidade", correto: false },
            { conteudo: "Princípio da Eficiência", correto: false }
        ],
        justificativa: "A vinculação garante que não haja mudanças arbitrárias durante a licitação.",
        categoriaDaPergunta: "licitações-e-seus-principios"
    },
    {
        enunciado: "Qual é o principal objetivo da Lei 14.133/2021?",
        arrayDeRespostas: [
            { conteudo: "Regulamentar os contratos privados", correto: false },
            { conteudo: "Instituir normas gerais de licitação e contratação", correto: true },
            { conteudo: "Organizar apenas as concessões públicas", correto: false },
            { conteudo: "Revogar integralmente o Código Civil", correto: false },
        ],
        justificativa: "A Lei 14.133/2021 estabelece normas gerais sobre licitações e contratos administrativos no Brasil.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "A Lei 14.133/2021 substitui quais legislações anteriores?",
        arrayDeRespostas: [
            { conteudo: "Lei 8.666/1993, Lei do Pregão e RDC", correto: true },
            { conteudo: "Apenas a Lei 8.429/1992", correto: false },
            { conteudo: "Somente a Lei do Pregão", correto: false },
            { conteudo: "Nenhuma lei anterior", correto: false },
        ],
        justificativa: "Ela revoga gradualmente a Lei 8.666/1993, a Lei do Pregão (10.520/2002) e o Regime Diferenciado de Contratações (12.462/2011).",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "Qual é o prazo máximo de transição para uso obrigatório da Lei 14.133/2021?",
        arrayDeRespostas: [
            { conteudo: "Dois anos após a publicação", correto: true },
            { conteudo: "Cinco anos após a publicação", correto: false },
            { conteudo: "Dez anos após a publicação", correto: false },
            { conteudo: "Não existe prazo de transição", correto: false },
        ],
        justificativa: "O prazo de transição estabelecido foi de dois anos a partir da publicação, encerrando-se em abril de 2023.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "A Lei 14.133/2021 introduziu quais princípios adicionais às licitações?",
        arrayDeRespostas: [
            { conteudo: "Planejamento, transparência, segregação de funções", correto: true },
            { conteudo: "Exclusivamente eficiência e publicidade", correto: false },
            { conteudo: "Apenas moralidade e impessoalidade", correto: false },
            { conteudo: "Nenhum princípio novo", correto: false },
        ],
        justificativa: "A nova lei trouxe princípios como o planejamento, a transparência e a segregação de funções, além de reforçar os já existentes.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "Qual é o critério de julgamento que foi incorporado pela Lei 14.133/2021?",
        arrayDeRespostas: [
            { conteudo: "Maior retorno econômico", correto: true },
            { conteudo: "Menor tempo de execução", correto: false },
            { conteudo: "Maior prazo de garantia", correto: false },
            { conteudo: "Maior número de empregados contratados", correto: false },
        ],
        justificativa: "A Lei 14.133/2021 incluiu o critério de julgamento 'maior retorno econômico', aplicável especialmente em contratos de eficiência.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "A Lei 14.133/2021 prevê quais modalidades de licitação?",
        arrayDeRespostas: [
            { conteudo: "Concorrência, concurso, leilão, pregão e diálogo competitivo", correto: true },
            { conteudo: "Somente concorrência e pregão", correto: false },
            { conteudo: "Leilão, convite e tomada de preços", correto: false },
            { conteudo: "Apenas pregão eletrônico", correto: false },
        ],
        justificativa: "A lei consolidou as modalidades, extinguindo convite e tomada de preços, e criou o diálogo competitivo.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "O que é o 'diálogo competitivo' previsto na Lei 14.133/2021?",
        arrayDeRespostas: [
            { conteudo: "Modalidade para soluções inovadoras", correto: true },
            { conteudo: "Licitação simplificada para pequenas compras", correto: false },
            { conteudo: "Contratação direta sem licitação", correto: false },
            { conteudo: "Um tipo de pregão presencial", correto: false },
        ],
        justificativa: "O diálogo competitivo é destinado a contratações complexas que demandam soluções inovadoras.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "Qual sistema deve ser utilizado obrigatoriamente para a divulgação dos atos de licitação?",
        arrayDeRespostas: [
            { conteudo: "Portal Nacional de Contratações Públicas (PNCP)", correto: true },
            { conteudo: "Diário Oficial da União", correto: false },
            { conteudo: "Jornal de grande circulação", correto: false },
            { conteudo: "Site próprio do órgão", correto: false },
        ],
        justificativa: "A lei estabelece que todos os atos devem ser divulgados no PNCP para garantir transparência.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "A Lei 14.133/2021 permite a contratação integrada?",
        arrayDeRespostas: [
            { conteudo: "Sim, incluindo elaboração de projetos e execução", correto: true },
            { conteudo: "Não, apenas execução de obras", correto: false },
            { conteudo: "Apenas em caráter emergencial", correto: false },
            { conteudo: "Não, foi proibida", correto: false },
        ],
        justificativa: "A contratação integrada é admitida, englobando projetos, execução e entregas finais.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "O que significa a matriz de riscos na Lei 14.133/2021?",
        arrayDeRespostas: [
            { conteudo: "Distribuição de responsabilidades entre as partes", correto: true },
            { conteudo: "Planilha de custos da obra", correto: false },
            { conteudo: "Lista de sanções aplicáveis", correto: false },
            { conteudo: "Quadro comparativo de propostas", correto: false },
        ],
        justificativa: "A matriz de riscos define a alocação de responsabilidades entre contratante e contratado.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "Na nova lei, qual é a prioridade para o desempate em licitações?",
        arrayDeRespostas: [
            { conteudo: "Produção nacional e desenvolvimento sustentável", correto: true },
            { conteudo: "Menor prazo de entrega", correto: false },
            { conteudo: "Maior número de funcionários contratados", correto: false },
            { conteudo: "Valor histórico do fornecedor", correto: false },
        ],
        justificativa: "A lei prioriza critérios como produção nacional e desenvolvimento sustentável para desempates.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "A Lei 14.133/2021 prevê sanções administrativas?",
        arrayDeRespostas: [
            { conteudo: "Sim, como advertência, multa e impedimento de licitar", correto: true },
            { conteudo: "Não, apenas sanções civis e penais", correto: false },
            { conteudo: "Somente multa pecuniária", correto: false },
            { conteudo: "Não, sanções foram revogadas", correto: false },
        ],
        justificativa: "A lei prevê sanções como advertência, multa, impedimento de licitar e declaração de inidoneidade.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "Como deve ser feito o planejamento das contratações na Lei 14.133/2021?",
        arrayDeRespostas: [
            { conteudo: "Por meio do Plano Anual de Contratações", correto: true },
            { conteudo: "Apenas por autorização do gestor", correto: false },
            { conteudo: "Diretamente na fase de julgamento", correto: false },
            { conteudo: "Sem exigência específica", correto: false },
        ],
        justificativa: "O planejamento deve estar formalizado no Plano Anual de Contratações, publicado no PNCP.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "O pregão eletrônico permanece válido na nova lei?",
        arrayDeRespostas: [
            { conteudo: "Sim, como modalidade preferencial", correto: true },
            { conteudo: "Não, foi extinto", correto: false },
            { conteudo: "Só pode ser utilizado em casos emergenciais", correto: false },
            { conteudo: "Apenas em obras públicas", correto: false },
        ],
        justificativa: "O pregão eletrônico permanece e é preferencialmente utilizado para aquisição de bens e serviços comuns.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "Qual é a novidade em relação às garantias contratuais trazida pela Lei 14.133/2021?",
        arrayDeRespostas: [
            { conteudo: "Possibilidade de seguro-garantia com cláusula de retomada", correto: true },
            { conteudo: "Eliminação da exigência de garantias", correto: false },
            { conteudo: "Exclusividade do depósito caução", correto: false },
            { conteudo: "Uso apenas de fiança bancária", correto: false },
        ],
        justificativa: "A lei inovou ao permitir o seguro-garantia com cláusula de retomada em obras e serviços de engenharia.",
        categoriaDaPergunta: "lei-14133/2021",
    },
    {
        enunciado: "Qual é a obrigação do servidor em relação à presença no trabalho?",
        arrayDeRespostas: [
            { conteudo: "Assiduidade e pontualidade", correto: true },
            { conteudo: "Urbanidade no trato com colegas", correto: false },
            { conteudo: "Obediência hierárquica", correto: false },
            { conteudo: "Zelar pelo patrimônio", correto: false }
        ],
        justificativa: "O servidor deve cumprir sua jornada de trabalho com assiduidade e pontualidade.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "O servidor deve desempenhar suas funções com:",
        arrayDeRespostas: [
            { conteudo: "Eficiência e dedicação", correto: true },
            { conteudo: "Somente eficiência", correto: false },
            { conteudo: "Somente dedicação", correto: false },
            { conteudo: "Urbanidade", correto: false }
        ],
        justificativa: "Eficiência e dedicação são fundamentais para a prestação de um serviço público de qualidade.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "O servidor deve obedecer às ordens hierárquicas, exceto quando:",
        arrayDeRespostas: [
            { conteudo: "A ordem for manifestamente ilegal", correto: true },
            { conteudo: "Não estiver de acordo com colegas", correto: false },
            { conteudo: "For contra a sua vontade", correto: false },
            { conteudo: "For uma tarefa cansativa", correto: false }
        ],
        justificativa: "A obediência hierárquica é obrigatória, salvo quando a ordem violar a lei ou direitos.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "Como o servidor deve se comportar no trato com colegas e cidadãos?",
        arrayDeRespostas: [
            { conteudo: "Urbanidade e respeito", correto: true },
            { conteudo: "Somente cordialidade", correto: false },
            { conteudo: "Apenas simpatia", correto: false },
            { conteudo: "Não há regras específicas", correto: false }
        ],
        justificativa: "Urbanidade é essencial para relações harmoniosas no ambiente de trabalho.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "Qual é o dever do servidor em relação ao patrimônio público?",
        arrayDeRespostas: [
            { conteudo: "Zelar pelo patrimônio", correto: true },
            { conteudo: "Ignorar pequenos danos", correto: false },
            { conteudo: "Usar livremente para fins pessoais", correto: false },
            { conteudo: "Não é necessário responsabilidade", correto: false }
        ],
        justificativa: "O servidor deve proteger e preservar o patrimônio público sob sua guarda.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "O servidor público deve atuar sempre de acordo com:",
        arrayDeRespostas: [
            { conteudo: "A legislação vigente e normas internas", correto: true },
            { conteudo: "Somente com base em sua experiência pessoal", correto: false },
            { conteudo: "A vontade do superior imediato, sem questionamento", correto: false },
            { conteudo: "Opinião popular", correto: false }
        ],
        justificativa: "As ações do servidor devem respeitar as leis e regulamentos internos.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "O servidor deve manter sigilo sobre:",
        arrayDeRespostas: [
            { conteudo: "Informações confidenciais do serviço", correto: true },
            { conteudo: "Informações públicas já divulgadas", correto: false },
            { conteudo: "Assuntos pessoais de colegas", correto: false },
            { conteudo: "Todas as informações sem distinção", correto: false }
        ],
        justificativa: "O dever de sigilo protege informações sensíveis e evita prejuízos ao serviço público.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "O servidor deve tratar o público com:",
        arrayDeRespostas: [
            { conteudo: "Cortesia, respeito e eficiência", correto: true },
            { conteudo: "Somente cortesia", correto: false },
            { conteudo: "Eficiência apenas", correto: false },
            { conteudo: "Não há obrigação específica", correto: false }
        ],
        justificativa: "A boa relação com o público garante atendimento adequado e transparente.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "O cumprimento das normas e procedimentos internos demonstra:",
        arrayDeRespostas: [
            { conteudo: "Disciplina e responsabilidade", correto: true },
            { conteudo: "Somente eficiência", correto: false },
            { conteudo: "Somente dedicação", correto: false },
            { conteudo: "Não é necessário", correto: false }
        ],
        justificativa: "Seguir regras internas garante ordem e confiabilidade na administração pública.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "A assiduidade do servidor se refere a:",
        arrayDeRespostas: [
            { conteudo: "Comparecer regularmente ao trabalho", correto: true },
            { conteudo: "Apenas chegar no horário de entrada", correto: false },
            { conteudo: "Apenas cumprir tarefas de forma eficiente", correto: false },
            { conteudo: "Não se aplica a cargos administrativos", correto: false }
        ],
        justificativa: "Assiduidade é a presença constante e responsável do servidor no serviço público.",
        categoriaDaPergunta: "deveres-do-servidor"
    },
    {
        enunciado: "É permitido ao servidor público exercer atividade que seja incompatível com o cargo?",
        arrayDeRespostas: [
            { conteudo: "Não, é proibido", correto: true },
            { conteudo: "Sim, desde que informado ao chefe", correto: false },
            { conteudo: "Sim, se for atividade voluntária", correto: false },
            { conteudo: "Depende do cargo ocupado", correto: false }
        ],
        justificativa: "O servidor não pode exercer atividades incompatíveis que prejudiquem suas funções públicas.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "O servidor pode receber presentes de empresas ou cidadãos em razão do cargo?",
        arrayDeRespostas: [
            { conteudo: "Não, é proibido aceitar presentes", correto: true },
            { conteudo: "Sim, se for simbólico", correto: false },
            { conteudo: "Sim, sem restrições", correto: false },
            { conteudo: "Depende do valor do presente", correto: false }
        ],
        justificativa: "Receber presentes em função do cargo caracteriza conflito de interesse e corrupção.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "O servidor pode divulgar informações sigilosas obtidas em serviço?",
        arrayDeRespostas: [
            { conteudo: "Não, é expressamente proibido", correto: true },
            { conteudo: "Sim, se for para colegas de trabalho", correto: false },
            { conteudo: "Sim, se não houver prejuízo direto", correto: false },
            { conteudo: "Depende da autorização do superior", correto: false }
        ],
        justificativa: "Divulgar informações sigilosas é proibido para proteger o interesse público e a segurança da informação.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "O servidor pode usar recursos públicos para fins particulares?",
        arrayDeRespostas: [
            { conteudo: "Não, é proibido", correto: true },
            { conteudo: "Sim, com autorização do superior", correto: false },
            { conteudo: "Sim, se for em pequenas quantidades", correto: false },
            { conteudo: "Depende da urgência da situação", correto: false }
        ],
        justificativa: "O uso de bens ou serviços públicos para fins pessoais constitui infração administrativa.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "É permitido ao servidor favorecer parentes ou amigos em processos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Não, é proibido", correto: true },
            { conteudo: "Sim, desde que seja rápido", correto: false },
            { conteudo: "Sim, com autorização expressa", correto: false },
            { conteudo: "Depende da situação", correto: false }
        ],
        justificativa: "Favorecer pessoas próximas caracteriza nepotismo e quebra do princípio da impessoalidade.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "O servidor pode receber propina ou vantagem indevida?",
        arrayDeRespostas: [
            { conteudo: "Não, é terminantemente proibido", correto: true },
            { conteudo: "Sim, se não for percebido", correto: false },
            { conteudo: "Sim, se for em pequena quantia", correto: false },
            { conteudo: "Depende do cargo ocupado", correto: false }
        ],
        justificativa: "Receber vantagem indevida é crime e infração disciplinar.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "O servidor pode participar de atos políticos usando a estrutura do cargo?",
        arrayDeRespostas: [
            { conteudo: "Não, é proibido utilizar o cargo para fins políticos", correto: true },
            { conteudo: "Sim, se for campanha municipal", correto: false },
            { conteudo: "Sim, desde que sem remuneração", correto: false },
            { conteudo: "Depende do nível hierárquico", correto: false }
        ],
        justificativa: "A proibição mantém a imparcialidade do servidor e evita influência indevida em eleições.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "O servidor pode omitir informações relevantes em processos administrativos?",
        arrayDeRespostas: [
            { conteudo: "Não, é proibido", correto: true },
            { conteudo: "Sim, se achar conveniente", correto: false },
            { conteudo: "Sim, apenas em casos urgentes", correto: false },
            { conteudo: "Depende do tipo de processo", correto: false }
        ],
        justificativa: "A omissão de informações compromete a transparência e a legalidade dos atos administrativos.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "O servidor pode usar informações do serviço para benefício próprio ou de terceiros?",
        arrayDeRespostas: [
            { conteudo: "Não, é expressamente proibido", correto: true },
            { conteudo: "Sim, se não houver prejuízo ao serviço", correto: false },
            { conteudo: "Sim, se autorizado por superiores", correto: false },
            { conteudo: "Depende da função exercida", correto: false }
        ],
        justificativa: "Usar informações do serviço indevidamente caracteriza conflito de interesse e infração disciplinar.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "É permitido ao servidor assumir tarefas de familiares dentro da administração pública?",
        arrayDeRespostas: [
            { conteudo: "Não, é proibido devido ao nepotismo", correto: true },
            { conteudo: "Sim, se houver supervisão", correto: false },
            { conteudo: "Sim, se não houver remuneração", correto: false },
            { conteudo: "Depende da autorização do superior", correto: false }
        ],
        justificativa: "A legislação impede favorecimento de familiares para garantir impessoalidade e igualdade de condições.",
        categoriaDaPergunta: "proibicoes-dos-servidores"
    },
    {
        enunciado: "Qual é a responsabilidade do servidor em relação ao cumprimento de suas tarefas?",
        arrayDeRespostas: [
            { conteudo: "Executar com eficiência e dedicação", correto: true },
            { conteudo: "Delegar sempre que possível", correto: false },
            { conteudo: "Cumprir apenas ordens do superior imediato", correto: false },
            { conteudo: "Realizar somente tarefas de interesse próprio", correto: false }
        ],
        justificativa: "O servidor deve desempenhar suas funções com eficiência, dedicação e zelo pelo serviço público.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "O servidor é responsável por:",
        arrayDeRespostas: [
            { conteudo: "Zelar pelo patrimônio público", correto: true },
            { conteudo: "Usar bens públicos para fins pessoais", correto: false },
            { conteudo: "Ignorar recursos e materiais do órgão", correto: false },
            { conteudo: "Tomar decisões sem respaldo legal", correto: false }
        ],
        justificativa: "Zelar pelo patrimônio garante a integridade dos recursos públicos e o bom funcionamento da administração.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "A disciplina e o cumprimento das normas internas demonstram:",
        arrayDeRespostas: [
            { conteudo: "Responsabilidade do servidor", correto: true },
            { conteudo: "Somente eficiência", correto: false },
            { conteudo: "Apenas dedicação", correto: false },
            { conteudo: "Não têm relação com responsabilidades", correto: false }
        ],
        justificativa: "Seguir normas e procedimentos internos é essencial para a ordem e confiabilidade do serviço público.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "O servidor deve respeitar hierarquia e subordinação, exceto quando:",
        arrayDeRespostas: [
            { conteudo: "A ordem for manifestamente ilegal", correto: true },
            { conteudo: "For uma tarefa cansativa", correto: false },
            { conteudo: "O superior não estiver presente", correto: false },
            { conteudo: "For apenas uma sugestão", correto: false }
        ],
        justificativa: "A obediência hierárquica é obrigatória, salvo quando a ordem violar a lei ou direitos.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "O servidor deve manter sigilo sobre:",
        arrayDeRespostas: [
            { conteudo: "Informações confidenciais do serviço", correto: true },
            { conteudo: "Assuntos já públicos", correto: false },
            { conteudo: "Questões pessoais de colegas", correto: false },
            { conteudo: "Todas as informações sem exceção", correto: false }
        ],
        justificativa: "Manter sigilo protege informações sensíveis e evita prejuízos à administração pública.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "O servidor deve prestar contas de suas ações e decisões?",
        arrayDeRespostas: [
            { conteudo: "Sim, é responsabilidade dele", correto: true },
            { conteudo: "Não, apenas o chefe responde", correto: false },
            { conteudo: "Somente quando houver auditoria", correto: false },
            { conteudo: "Depende do cargo ocupado", correto: false }
        ],
        justificativa: "Prestar contas garante transparência e legalidade na administração pública.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "A responsabilidade do servidor inclui atendimento ao público com:",
        arrayDeRespostas: [
            { conteudo: "Cortesia, urbanidade e respeito", correto: true },
            { conteudo: "Rapidez apenas", correto: false },
            { conteudo: "Eficiência sem cordialidade", correto: false },
            { conteudo: "Somente cumprimento de ordens", correto: false }
        ],
        justificativa: "Atender o público com urbanidade e respeito é dever do servidor e garante qualidade no serviço público.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "O servidor deve contribuir para a melhoria dos serviços públicos através de:",
        arrayDeRespostas: [
            { conteudo: "Proatividade e sugestões construtivas", correto: true },
            { conteudo: "Ignorando problemas administrativos", correto: false },
            { conteudo: "Apenas cumprindo ordens sem questionar", correto: false },
            { conteudo: "Foco apenas em tarefas pessoais", correto: false }
        ],
        justificativa: "Proatividade e sugestões de melhoria fazem parte da responsabilidade e eficiência do servidor.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "A assiduidade e pontualidade demonstram:",
        arrayDeRespostas: [
            { conteudo: "Responsabilidade e comprometimento do servidor", correto: true },
            { conteudo: "Somente disciplina formal", correto: false },
            { conteudo: "Dedicação superficial", correto: false },
            { conteudo: "Não têm relação com responsabilidades", correto: false }
        ],
        justificativa: "Comparecer regularmente e pontualmente ao serviço evidencia responsabilidade e comprometimento.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "Cumprir com zelo as tarefas atribuídas é responsabilidade do servidor porque:",
        arrayDeRespostas: [
            { conteudo: "Garante eficiência e qualidade no serviço público", correto: true },
            { conteudo: "Evita punições imediatas apenas", correto: false },
            { conteudo: "Somente demonstra obediência hierárquica", correto: false },
            { conteudo: "Não tem importância real", correto: false }
        ],
        justificativa: "O zelo nas tarefas assegura a boa prestação de serviços à população e a correta utilização dos recursos públicos.",
        categoriaDaPergunta: "responsabilidades-dos-servidores"
    },
    {
        enunciado: "Qual é o objetivo das sanções disciplinares aplicadas aos servidores públicos?",
        arrayDeRespostas: [
            { conteudo: "Assegurar cumprimento das normas e disciplina", correto: true },
            { conteudo: "Punir sem relação com infrações", correto: false },
            { conteudo: "Apenas reduzir benefícios do servidor", correto: false },
            { conteudo: "Favorecer a gestão interna", correto: false }
        ],
        justificativa: "As sanções disciplinarem visam garantir a ordem, eficiência e legalidade no serviço público.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "Qual das opções abaixo é considerada sanção disciplinar leve?",
        arrayDeRespostas: [
            { conteudo: "Advertência", correto: true },
            { conteudo: "Demissão", correto: false },
            { conteudo: "Suspensão", correto: false },
            { conteudo: "Cassação de aposentadoria", correto: false }
        ],
        justificativa: "A advertência é uma penalidade inicial aplicada em casos de infrações leves.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "A suspensão do servidor é aplicada quando:",
        arrayDeRespostas: [
            { conteudo: "Há infração de gravidade média", correto: true },
            { conteudo: "O servidor comete infração leve", correto: false },
            { conteudo: "O servidor deseja se ausentar temporariamente", correto: false },
            { conteudo: "É procedimento administrativo obrigatório para todos", correto: false }
        ],
        justificativa: "A suspensão é aplicada para infrações de gravidade média, impedindo temporariamente o servidor de exercer suas funções.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "A demissão do servidor ocorre em casos de:",
        arrayDeRespostas: [
            { conteudo: "Infrações graves ou crimes funcionais", correto: true },
            { conteudo: "Faltas eventuais sem justificativa", correto: false },
            { conteudo: "Erro operacional não intencional", correto: false },
            { conteudo: "Questões administrativas sem impacto", correto: false }
        ],
        justificativa: "A demissão é a sanção máxima para infrações graves que comprometem o serviço público.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "A advertência deve ser registrada:",
        arrayDeRespostas: [
            { conteudo: "No processo administrativo do servidor", correto: true },
            { conteudo: "Apenas verbalmente", correto: false },
            { conteudo: "No diário oficial sem registro interno", correto: false },
            { conteudo: "Não é necessário registrar", correto: false }
        ],
        justificativa: "O registro formal assegura transparência e histórico das medidas disciplinares aplicadas.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "A cassação de aposentadoria é aplicada em casos de:",
        arrayDeRespostas: [
            { conteudo: "Infrações graves cometidas por servidores aposentados", correto: true },
            { conteudo: "Erros administrativos menores", correto: false },
            { conteudo: "Faltas eventuais não justificadas", correto: false },
            { conteudo: "Ausência temporária ao trabalho", correto: false }
        ],
        justificativa: "Mesmo após aposentadoria, o servidor pode responder por infrações graves cometidas durante o exercício do cargo.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "A suspensão do servidor pode ser:",
        arrayDeRespostas: [
            { conteudo: "Com ou sem remuneração, dependendo da gravidade", correto: true },
            { conteudo: "Sempre com remuneração", correto: false },
            { conteudo: "Sempre sem remuneração", correto: false },
            { conteudo: "Opcional, a critério do servidor", correto: false }
        ],
        justificativa: "A legislação estabelece que a suspensão pode ou não ser remunerada conforme a gravidade da infração.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "O servidor tem direito a ampla defesa em processos disciplinares?",
        arrayDeRespostas: [
            { conteudo: "Sim, é um direito constitucional", correto: true },
            { conteudo: "Não, a decisão é unilateral da administração", correto: false },
            { conteudo: "Apenas se for suspensão", correto: false },
            { conteudo: "Depende do cargo ocupado", correto: false }
        ],
        justificativa: "A ampla defesa garante o contraditório e a legalidade do processo disciplinar.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "A aplicação de sanções disciplinares deve obedecer a:",
        arrayDeRespostas: [
            { conteudo: "Princípio da proporcionalidade e da legalidade", correto: true },
            { conteudo: "Preferência pessoal do superior", correto: false },
            { conteudo: "Interesse político momentâneo", correto: false },
            { conteudo: "A opinião do público externo", correto: false }
        ],
        justificativa: "As sanções devem ser proporcionais à infração e baseadas na legislação vigente.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "A advertência pode ser aplicada de forma:",
        arrayDeRespostas: [
            { conteudo: "Verbal ou escrita, conforme a gravidade da infração", correto: true },
            { conteudo: "Apenas escrita", correto: false },
            { conteudo: "Apenas verbal", correto: false },
            { conteudo: "Não se aplica para infrações leves", correto: false }
        ],
        justificativa: "A advertência pode ser verbal ou escrita e é utilizada para corrigir condutas inadequadas de forma inicial.",
        categoriaDaPergunta: "sancoes-disciplinares-dos-servidores"
    },
    {
        enunciado: "O servidor público pode acumular cargos públicos?",
        arrayDeRespostas: [
            { conteudo: "Sim, desde que haja compatibilidade de horários e seja permitido por lei", correto: true },
            { conteudo: "Não, acumulação de cargos é sempre proibida", correto: false },
            { conteudo: "Sim, sem restrições", correto: false },
            { conteudo: "Depende apenas da vontade do servidor", correto: false }
        ],
        justificativa: "A Constituição permite acumulação de cargos apenas quando houver compatibilidade de horários e previsão legal.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "Quais combinações de cargos são permitidas por lei?",
        arrayDeRespostas: [
            { conteudo: "Dois cargos de professor; um cargo de professor com outro técnico ou científico; dois cargos técnicos ou científicos em áreas diferentes", correto: true },
            { conteudo: "Qualquer dois cargos de qualquer natureza", correto: false },
            { conteudo: "Apenas cargos administrativos e políticos", correto: false },
            { conteudo: "Nenhuma combinação é permitida", correto: false }
        ],
        justificativa: "A Constituição Federal estabelece combinações específicas que permitem acumulação de cargos.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "O que deve ser observado antes de acumular cargos públicos?",
        arrayDeRespostas: [
            { conteudo: "Compatibilidade de horários e respeito aos limites legais de remuneração", correto: true },
            { conteudo: "Somente a vontade do servidor", correto: false },
            { conteudo: "Apenas a aprovação do superior imediato", correto: false },
            { conteudo: "Não há necessidade de observação", correto: false }
        ],
        justificativa: "A acumulação depende de compatibilidade de horários e limites legais para evitar conflito de interesses.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "É permitido acumular dois cargos de natureza política?",
        arrayDeRespostas: [
            { conteudo: "Não, é proibido", correto: true },
            { conteudo: "Sim, se houver compatibilidade de horários", correto: false },
            { conteudo: "Sim, sem restrições legais", correto: false },
            { conteudo: "Depende do órgão público", correto: false }
        ],
        justificativa: "A lei proíbe acumulação de cargos políticos ou de chefia com outros cargos da mesma natureza.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "Um servidor pode acumular dois cargos de professor?",
        arrayDeRespostas: [
            { conteudo: "Sim, é permitido desde que haja compatibilidade de horários", correto: true },
            { conteudo: "Não, é proibido em qualquer situação", correto: false },
            { conteudo: "Sim, mas apenas na mesma instituição", correto: false },
            { conteudo: "Sim, sem limites de horário", correto: false }
        ],
        justificativa: "A acumulação de cargos de professor é uma exceção permitida pela Constituição, respeitando compatibilidade de horários.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "Acumular um cargo técnico com outro de professor é permitido?",
        arrayDeRespostas: [
            { conteudo: "Sim, desde que haja compatibilidade de horários", correto: true },
            { conteudo: "Não, é sempre proibido", correto: false },
            { conteudo: "Sim, mas apenas em órgãos diferentes", correto: false },
            { conteudo: "Depende apenas da autorização do superior", correto: false }
        ],
        justificativa: "A Constituição autoriza a acumulação de um cargo de professor com outro técnico ou científico se houver compatibilidade de horários.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "O servidor pode receber remuneração integral de dois cargos acumulados sem restrições?",
        arrayDeRespostas: [
            { conteudo: "Não, deve respeitar limites legais", correto: true },
            { conteudo: "Sim, sempre integral", correto: false },
            { conteudo: "Sim, se os cargos forem da mesma área", correto: false },
            { conteudo: "Depende da aprovação do chefe imediato", correto: false }
        ],
        justificativa: "O recebimento da remuneração deve observar limites legais para evitar conflitos e excesso de carga de trabalho.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "O que caracteriza a incompatibilidade de cargos?",
        arrayDeRespostas: [
            { conteudo: "Quando os horários de exercício se sobrepõem e não permitem o cumprimento das funções", correto: true },
            { conteudo: "Quando os cargos são na mesma cidade", correto: false },
            { conteudo: "Quando o servidor prefere não dividir o tempo", correto: false },
            { conteudo: "Quando os cargos têm salários diferentes", correto: false }
        ],
        justificativa: "A incompatibilidade ocorre quando não é possível cumprir integralmente os horários e responsabilidades de ambos os cargos.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "O servidor deve comunicar à administração sobre a acumulação de cargos?",
        arrayDeRespostas: [
            { conteudo: "Sim, é obrigatório informar e obter autorização legal", correto: true },
            { conteudo: "Não, a administração descobre automaticamente", correto: false },
            { conteudo: "Sim, mas apenas em casos de cargos públicos federais", correto: false },
            { conteudo: "Não é necessário comunicar", correto: false }
        ],
        justificativa: "Informar à administração é fundamental para garantir legalidade e compatibilidade de horários na acumulação de cargos.",
        categoriaDaPergunta: "acumulacao-de-cargos-dos-servidores"
    },
    {
        enunciado: "O que é prescrição de infrações disciplinares dos servidores?",
        arrayDeRespostas: [
            { conteudo: "É a perda do direito de punir o servidor após determinado prazo", correto: true },
            { conteudo: "É a suspensão automática do servidor", correto: false },
            { conteudo: "É a anulação do cargo do servidor", correto: false },
            { conteudo: "É a perda do salário do servidor", correto: false }
        ],
        justificativa: "A prescrição impede que o Estado aplique sanções após o prazo legal previsto para cada tipo de infração.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "Qual é o prazo de prescrição para infrações leves?",
        arrayDeRespostas: [
            { conteudo: "2 anos", correto: true },
            { conteudo: "5 anos", correto: false },
            { conteudo: "10 anos", correto: false },
            { conteudo: "1 ano", correto: false }
        ],
        justificativa: "Infrações leves prescrevem em 2 anos, contados da data do conhecimento da irregularidade.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "Qual é o prazo de prescrição para infrações graves?",
        arrayDeRespostas: [
            { conteudo: "5 anos", correto: true },
            { conteudo: "2 anos", correto: false },
            { conteudo: "8 anos", correto: false },
            { conteudo: "10 anos", correto: false }
        ],
        justificativa: "Infrações graves prescrevem em 5 anos, garantindo ao servidor direito à defesa dentro do prazo legal.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "A prescrição das infrações disciplinares é contada a partir de quando?",
        arrayDeRespostas: [
            { conteudo: "Da data em que a infração foi conhecida", correto: true },
            { conteudo: "Da data de posse do servidor", correto: false },
            { conteudo: "Do primeiro dia do mês seguinte", correto: false },
            { conteudo: "Do último dia do exercício do servidor", correto: false }
        ],
        justificativa: "O prazo começa quando a administração toma ciência da infração para garantir o direito de defesa.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "O que acontece se o processo disciplinar não for iniciado dentro do prazo de prescrição?",
        arrayDeRespostas: [
            { conteudo: "O servidor não pode mais ser punido", correto: true },
            { conteudo: "A punição é aplicada parcialmente", correto: false },
            { conteudo: "O servidor pode ser punido, mas com desconto de salário", correto: false },
            { conteudo: "O processo é automaticamente renovado", correto: false }
        ],
        justificativa: "A prescrição extingue o direito da administração de aplicar sanções após o prazo legal.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "O prazo de prescrição pode ser interrompido?",
        arrayDeRespostas: [
            { conteudo: "Sim, quando o servidor é notificado oficialmente ou há instauração de processo", correto: true },
            { conteudo: "Não, o prazo corre sem interrupção", correto: false },
            { conteudo: "Sim, apenas por decisão judicial", correto: false },
            { conteudo: "Sim, por solicitação do servidor", correto: false }
        ],
        justificativa: "A prescrição é interrompida pela notificação ou instauração de processo disciplinar, reiniciando a contagem do prazo.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "Infrações leves prescrevem mais rapidamente que infrações graves porque:",
        arrayDeRespostas: [
            { conteudo: "São consideradas de menor impacto administrativo", correto: true },
            { conteudo: "O servidor tem menos responsabilidades", correto: false },
            { conteudo: "O superior não precisa analisar com cuidado", correto: false },
            { conteudo: "Não há justificativa legal", correto: false }
        ],
        justificativa: "Infrações leves possuem menor gravidade e, portanto, prazo de prescrição menor.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "Infrações graves não prescrevem se:",
        arrayDeRespostas: [
            { conteudo: "Houver investigação em andamento que interrompa a contagem do prazo", correto: true },
            { conteudo: "O servidor solicitar", correto: false },
            { conteudo: "O superior achar conveniente", correto: false },
            { conteudo: "Nunca prescrevem", correto: false }
        ],
        justificativa: "A prescrição é suspensa ou interrompida durante a tramitação do processo administrativo disciplinar.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "A prescrição das infrações disciplinares protege o servidor porque:",
        arrayDeRespostas: [
            { conteudo: "Evita punições injustas por fatos antigos", correto: true },
            { conteudo: "Impede qualquer investigação administrativa", correto: false },
            { conteudo: "Garante benefícios financeiros retroativos", correto: false },
            { conteudo: "Dispensa o cumprimento de deveres", correto: false }
        ],
        justificativa: "A prescrição garante segurança jurídica e evita que o servidor seja punido por fatos antigos sem possibilidade de defesa adequada.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "O prazo de prescrição está definido em qual legislação?",
        arrayDeRespostas: [
            { conteudo: "Lei 8.112/1990 (Regime Jurídico dos Servidores Públicos Civis da União)", correto: true },
            { conteudo: "Lei de Licitações", correto: false },
            { conteudo: "Constituição Municipal", correto: false },
            { conteudo: "Código de Trânsito", correto: false }
        ],
        justificativa: "A Lei 8.112/1990 estabelece os prazos de prescrição para diferentes tipos de infrações disciplinares.",
        categoriaDaPergunta: "prescricao-de-infracoes-dos-servidores"
    },
    {
        enunciado: "O que é um vírus de computador?",
        arrayDeRespostas: [
            { conteudo: "Um programa capaz de se auto-replicar e infectar outros arquivos.", correto: true },
            { conteudo: "Um software que aumenta o desempenho do computador.", correto: false },
            { conteudo: "Um protocolo de comunicação entre sistemas operacionais.", correto: false },
            { conteudo: "Um aplicativo de limpeza de cache e cookies.", correto: false },
            { conteudo: "Um hardware de segurança usado em redes locais.", correto: false }
        ],
        justificativa: "Vírus são programas que se replicam, infectando arquivos e sistemas sem consentimento do usuário.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual das alternativas representa uma forma comum de infecção por vírus?",
        arrayDeRespostas: [
            { conteudo: "Abrir anexos de e-mails desconhecidos.", correto: true },
            { conteudo: "Formatar o computador regularmente.", correto: false },
            { conteudo: "Instalar atualizações do sistema operacional.", correto: false },
            { conteudo: "Usar senhas complexas em todas as contas.", correto: false },
            { conteudo: "Realizar backup dos arquivos importantes.", correto: false }
        ],
        justificativa: "Anexos de e-mails e links maliciosos são vetores clássicos de infecção.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual característica distingue um vírus de um worm?",
        arrayDeRespostas: [
            { conteudo: "O vírus precisa de um hospedeiro, o worm é autônomo.", correto: true },
            { conteudo: "O vírus atua apenas em redes, o worm atua em arquivos.", correto: false },
            { conteudo: "O worm é inofensivo, o vírus é sempre destrutivo.", correto: false },
            { conteudo: "O vírus só afeta sistemas Linux.", correto: false },
            { conteudo: "O worm precisa de interação humana para se propagar.", correto: false }
        ],
        justificativa: "Vírus dependem de um arquivo hospedeiro, enquanto worms se espalham sozinhos.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual é o principal método de combate aos vírus?",
        arrayDeRespostas: [
            { conteudo: "Utilização de antivírus atualizado e boas práticas de segurança.", correto: true },
            { conteudo: "Compartilhamento de programas desconhecidos.", correto: false },
            { conteudo: "Desativar o firewall do sistema.", correto: false },
            { conteudo: "Abertura de anexos desconhecidos.", correto: false },
            { conteudo: "Desinstalar o sistema operacional periodicamente.", correto: false }
        ],
        justificativa: "Antivírus e medidas preventivas são fundamentais na proteção contra vírus.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um vírus do tipo 'boot'?",
        arrayDeRespostas: [
            { conteudo: "Aquele que infecta o setor de inicialização do disco rígido.", correto: true },
            { conteudo: "Um vírus que se disfarça de software antivírus.", correto: false },
            { conteudo: "Um vírus que atua exclusivamente em navegadores.", correto: false },
            { conteudo: "Um vírus que apaga a memória RAM.", correto: false },
            { conteudo: "Um vírus que substitui o BIOS do computador.", correto: false }
        ],
        justificativa: "Vírus de boot atacam o setor de inicialização, impedindo a inicialização correta do sistema.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que caracteriza um vírus polimórfico?",
        arrayDeRespostas: [
            { conteudo: "Capacidade de alterar seu código a cada infecção para evitar detecção.", correto: true },
            { conteudo: "Capacidade de se copiar apenas uma vez.", correto: false },
            { conteudo: "Capacidade de funcionar apenas em sistemas de 64 bits.", correto: false },
            { conteudo: "Capacidade de destruir fisicamente componentes de hardware.", correto: false },
            { conteudo: "Capacidade de se autoexecutar em dispositivos móveis.", correto: false }
        ],
        justificativa: "Vírus polimórficos mudam sua assinatura digital, dificultando a detecção por antivírus baseados em assinatura.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual o principal objetivo de um vírus do tipo macro?",
        arrayDeRespostas: [
            { conteudo: "Infectar arquivos de programas de escritório, como Word e Excel.", correto: true },
            { conteudo: "Atacar servidores web.", correto: false },
            { conteudo: "Roubar senhas de administradores de rede.", correto: false },
            { conteudo: "Infectar sistemas operacionais Linux.", correto: false },
            { conteudo: "Substituir drivers de vídeo do sistema.", correto: false }
        ],
        justificativa: "Vírus de macro exploram linguagens de automação de softwares de escritório, como o VBA do Microsoft Office.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual das opções representa um sintoma comum de infecção por vírus?",
        arrayDeRespostas: [
            { conteudo: "Desempenho reduzido e comportamento anormal do sistema.", correto: true },
            { conteudo: "Melhora significativa na velocidade do computador.", correto: false },
            { conteudo: "Atualizações automáticas de segurança mais frequentes.", correto: false },
            { conteudo: "Aumento da memória RAM disponível.", correto: false },
            { conteudo: "Diminuição do consumo de energia.", correto: false }
        ],
        justificativa: "Vírus podem causar lentidão, falhas, e alterações inesperadas no sistema.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual das opções abaixo descreve corretamente um cavalo de Troia?",
        arrayDeRespostas: [
            { conteudo: "Programa que parece legítimo, mas executa ações maliciosas ocultas.", correto: true },
            { conteudo: "Vírus que se anexa a outros arquivos executáveis.", correto: false },
            { conteudo: "Worm que se espalha pela rede automaticamente.", correto: false },
            { conteudo: "Spyware que monitora teclas digitadas.", correto: false },
            { conteudo: "Programa que remove automaticamente malwares do sistema.", correto: false }
        ],
        justificativa: "Trojans se disfarçam de programas úteis para enganar o usuário e instalar ameaças.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que diferencia um antivírus com análise heurística?",
        arrayDeRespostas: [
            { conteudo: "Detecta ameaças pelo comportamento, não apenas por assinatura.", correto: true },
            { conteudo: "Funciona apenas em modo offline.", correto: false },
            { conteudo: "Precisa de atualização manual diária.", correto: false },
            { conteudo: "Só remove vírus conhecidos.", correto: false },
            { conteudo: "Depende de hardware adicional para funcionar.", correto: false }
        ],
        justificativa: "Análise heurística identifica ameaças desconhecidas observando o comportamento do código.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um vírus residente?",
        arrayDeRespostas: [
            { conteudo: "Permanece na memória do sistema após ser executado.", correto: true },
            { conteudo: "Atua apenas em arquivos comprimidos.", correto: false },
            { conteudo: "Desativa o antivírus automaticamente.", correto: false },
            { conteudo: "Só funciona quando o computador está desconectado da internet.", correto: false },
            { conteudo: "Ataca exclusivamente dispositivos móveis.", correto: false }
        ],
        justificativa: "Vírus residentes permanecem ativos na memória, infectando novos arquivos enquanto o sistema está em execução.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um vírus de script?",
        arrayDeRespostas: [
            { conteudo: "Vírus que utiliza linguagens de script, como JavaScript ou VBScript.", correto: true },
            { conteudo: "Vírus que afeta apenas sistemas baseados em Linux.", correto: false },
            { conteudo: "Vírus que depende exclusivamente de arquivos executáveis.", correto: false },
            { conteudo: "Vírus que infecta somente discos rígidos externos.", correto: false },
            { conteudo: "Vírus que substitui programas legítimos do Windows.", correto: false }
        ],
        justificativa: "Esses vírus exploram linguagens de script para se propagar em páginas web ou arquivos de sistema.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que caracteriza um vírus multipartite?",
        arrayDeRespostas: [
            { conteudo: "Capacidade de infectar múltiplas partes do sistema, como arquivos e setor de boot.", correto: true },
            { conteudo: "Capacidade de funcionar em diferentes sistemas operacionais.", correto: false },
            { conteudo: "Capacidade de se transformar em worm automaticamente.", correto: false },
            { conteudo: "Capacidade de alterar a BIOS do computador.", correto: false },
            { conteudo: "Capacidade de criptografar os dados do usuário.", correto: false }
        ],
        justificativa: "Vírus multipartite atacam várias áreas, dificultando a remoção completa.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual alternativa descreve um vírus stealth?",
        arrayDeRespostas: [
            { conteudo: "Vírus que se oculta do antivírus, manipulando informações do sistema.", correto: true },
            { conteudo: "Vírus que se replica apenas uma vez.", correto: false },
            { conteudo: "Vírus que atua exclusivamente em sistemas móveis.", correto: false },
            { conteudo: "Vírus que exige interação constante do usuário.", correto: false },
            { conteudo: "Vírus que funciona apenas em ambiente virtual.", correto: false }
        ],
        justificativa: "Vírus stealth ocultam sua presença, interceptando chamadas do sistema e enganando o antivírus.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual dos seguintes arquivos é mais vulnerável a vírus do tipo macro?",
        arrayDeRespostas: [
            { conteudo: "Documentos do Microsoft Word.", correto: true },
            { conteudo: "Arquivos de imagem .png.", correto: false },
            { conteudo: "Vídeos .mp4.", correto: false },
            { conteudo: "Arquivos de texto simples .txt.", correto: false },
            { conteudo: "Arquivos de áudio .mp3.", correto: false }
        ],
        justificativa: "Vírus de macro exploram linguagens de automação em softwares de escritório.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual o objetivo principal dos vírus destrutivos?",
        arrayDeRespostas: [
            { conteudo: "Danos a dados ou inutilização do sistema.", correto: true },
            { conteudo: "Melhorar o desempenho do sistema.", correto: false },
            { conteudo: "Criptografar arquivos para recuperação posterior.", correto: false },
            { conteudo: "Detectar falhas de hardware.", correto: false },
            { conteudo: "Monitorar redes para diagnóstico.", correto: false }
        ],
        justificativa: "Vírus destrutivos apagam arquivos ou corrompem o sistema, causando prejuízo direto ao usuário.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Como os antivírus baseados em assinatura detectam vírus?",
        arrayDeRespostas: [
            { conteudo: "Comparando o código dos arquivos com uma base de dados de padrões conhecidos.", correto: true },
            { conteudo: "Analisando o comportamento do usuário na internet.", correto: false },
            { conteudo: "Bloqueando todo tipo de execução de software.", correto: false },
            { conteudo: "Verificando o tamanho dos arquivos periodicamente.", correto: false },
            { conteudo: "Apagando automaticamente arquivos desconhecidos.", correto: false }
        ],
        justificativa: "Antivírus de assinatura reconhecem vírus conhecidos com base em padrões armazenados.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um falso positivo em antivírus?",
        arrayDeRespostas: [
            { conteudo: "Quando o antivírus identifica erroneamente um arquivo legítimo como vírus.", correto: true },
            { conteudo: "Quando o antivírus não encontra nenhum vírus real.", correto: false },
            { conteudo: "Quando o antivírus falha em iniciar.", correto: false },
            { conteudo: "Quando o antivírus apaga vírus verdadeiros.", correto: false },
            { conteudo: "Quando o antivírus é infectado por um malware.", correto: false }
        ],
        justificativa: "Falsos positivos ocorrem quando arquivos legítimos são marcados erroneamente como ameaças.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um vírus de link?",
        arrayDeRespostas: [
            { conteudo: "Aquele que altera endereços de arquivos, fazendo-os apontar para o vírus.", correto: true },
            { conteudo: "Aquele que se propaga apenas via e-mail.", correto: false },
            { conteudo: "Aquele que cria atalhos legítimos no sistema.", correto: false },
            { conteudo: "Aquele que infecta exclusivamente dispositivos USB.", correto: false },
            { conteudo: "Aquele que criptografa arquivos do sistema.", correto: false }
        ],
        justificativa: "Vírus de link modificam entradas de diretório para redirecionar a execução para o código malicioso.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual ação ajuda a evitar infecção por vírus?",
        arrayDeRespostas: [
            { conteudo: "Não abrir anexos de e-mails suspeitos.", correto: true },
            { conteudo: "Desativar o antivírus para economizar recursos.", correto: false },
            { conteudo: "Ignorar atualizações de segurança.", correto: false },
            { conteudo: "Compartilhar arquivos desconhecidos.", correto: false },
            { conteudo: "Usar softwares piratas.", correto: false }
        ],
        justificativa: "Evitar abrir anexos suspeitos é uma das medidas mais eficazes contra infecções.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um vírus de e-mail?",
        arrayDeRespostas: [
            { conteudo: "Vírus transmitido como anexo ou link malicioso em mensagens de e-mail.", correto: true },
            { conteudo: "Vírus que infecta exclusivamente navegadores de internet.", correto: false },
            { conteudo: "Vírus que se propaga apenas em redes sociais.", correto: false },
            { conteudo: "Vírus que bloqueia o envio de mensagens.", correto: false },
            { conteudo: "Vírus que formata automaticamente a caixa de entrada.", correto: false }
        ],
        justificativa: "Vírus de e-mail são disseminados por anexos ou links fraudulentos enviados por mensagens.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual é o primeiro passo após identificar um arquivo suspeito?",
        arrayDeRespostas: [
            { conteudo: "Isolar o arquivo e executar uma varredura com antivírus.", correto: true },
            { conteudo: "Apagar todos os arquivos do computador.", correto: false },
            { conteudo: "Reiniciar o computador em modo normal.", correto: false },
            { conteudo: "Compartilhar o arquivo com colegas.", correto: false },
            { conteudo: "Ignorar o alerta e continuar o trabalho.", correto: false }
        ],
        justificativa: "Isolar o arquivo impede propagação enquanto a análise é feita.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual é a função da quarentena no antivírus?",
        arrayDeRespostas: [
            { conteudo: "Isolar arquivos suspeitos sem removê-los imediatamente.", correto: true },
            { conteudo: "Apagar permanentemente todos os arquivos infectados.", correto: false },
            { conteudo: "Reinstalar o sistema operacional automaticamente.", correto: false },
            { conteudo: "Permitir a execução de arquivos infectados.", correto: false },
            { conteudo: "Mover arquivos para a nuvem.", correto: false }
        ],
        justificativa: "A quarentena impede o acesso do sistema aos arquivos suspeitos até verificação.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual é a principal característica de um vírus não residente?",
        arrayDeRespostas: [
            { conteudo: "Executa-se e infecta arquivos, mas não permanece na memória.", correto: true },
            { conteudo: "Permanece ativo o tempo todo na memória RAM.", correto: false },
            { conteudo: "Atua apenas em modo de segurança.", correto: false },
            { conteudo: "Afeta apenas sistemas baseados em Linux.", correto: false },
            { conteudo: "Requer acesso remoto constante.", correto: false }
        ],
        justificativa: "Vírus não residentes infectam arquivos e encerram sua execução após a ação.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que caracteriza um vírus de rede?",
        arrayDeRespostas: [
            { conteudo: "Propaga-se explorando vulnerabilidades em protocolos de rede.", correto: true },
            { conteudo: "Necessita de mídia removível para se espalhar.", correto: false },
            { conteudo: "Afeta apenas sistemas operacionais móveis.", correto: false },
            { conteudo: "Executa-se apenas localmente.", correto: false },
            { conteudo: "Atua exclusivamente em navegadores.", correto: false }
        ],
        justificativa: "Vírus de rede exploram falhas de segurança em comunicações para se propagar.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que significa o termo 'payload' em um vírus?",
        arrayDeRespostas: [
            { conteudo: "A parte do código responsável pelo dano ou ação maliciosa.", correto: true },
            { conteudo: "O arquivo infectado pelo vírus.", correto: false },
            { conteudo: "O antivírus usado para removê-lo.", correto: false },
            { conteudo: "O log gerado durante a infecção.", correto: false },
            { conteudo: "A atualização automática do antivírus.", correto: false }
        ],
        justificativa: "O payload é a carga útil — a parte que executa as ações maliciosas do vírus.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um vírus de tempo (time bomb)?",
        arrayDeRespostas: [
            { conteudo: "Ativa-se em uma data ou condição específica.", correto: true },
            { conteudo: "Ataca apenas quando o computador está offline.", correto: false },
            { conteudo: "Atua apenas em sistemas de 32 bits.", correto: false },
            { conteudo: "Executa ações benéficas no sistema.", correto: false },
            { conteudo: "Reinicia automaticamente o antivírus.", correto: false }
        ],
        justificativa: "Vírus de tempo são programados para ativar seu payload em momento específico.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um vírus hoax?",
        arrayDeRespostas: [
            { conteudo: "Uma mensagem falsa sobre a existência de um vírus inexistente.", correto: true },
            { conteudo: "Um vírus que infecta exclusivamente navegadores.", correto: false },
            { conteudo: "Um vírus que corrompe o antivírus.", correto: false },
            { conteudo: "Um vírus que modifica o sistema operacional.", correto: false },
            { conteudo: "Um vírus que substitui senhas de administrador.", correto: false }
        ],
        justificativa: "Hoaxes são boatos sobre vírus, usados para causar pânico ou enganar usuários.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "O que é um vírus metamórfico?",
        arrayDeRespostas: [
            { conteudo: "Reescreve completamente seu código a cada infecção, mantendo a mesma funcionalidade.", correto: true },
            { conteudo: "Muda apenas o nome do arquivo infectado.", correto: false },
            { conteudo: "Copia arquivos de sistema legítimos.", correto: false },
            { conteudo: "Funciona apenas com acesso à internet.", correto: false },
            { conteudo: "Cria cópias idênticas de si mesmo.", correto: false }
        ],
        justificativa: "Vírus metamórficos alteram totalmente seu código, tornando-se difíceis de detectar.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "A nomenclatura de um vírus geralmente indica:",
        arrayDeRespostas: [
            { conteudo: "O sistema afetado, a família e o tipo do vírus.", correto: true },
            { conteudo: "A cor da interface do antivírus que o detectou.", correto: false },
            { conteudo: "O nome do usuário infectado.", correto: false },
            { conteudo: "O tamanho do arquivo original.", correto: false },
            { conteudo: "O fabricante do antivírus.", correto: false }
        ],
        justificativa: "A nomenclatura segue padrões como 'Win32/Sality.A', indicando sistema e família do vírus.",
        categoriaDaPergunta: "tecnico-de-informatica-virus"
    },
    {
        enunciado: "Qual o principal objetivo de uma cópia de segurança (backup)?",
        arrayDeRespostas: [
            { conteudo: "Proteger dados contra perda acidental ou falhas do sistema.", correto: true },
            { conteudo: "Aumentar a velocidade do computador.", correto: false },
            { conteudo: "Reduzir o tamanho dos arquivos.", correto: false },
            { conteudo: "Evitar vírus no sistema operacional.", correto: false },
            { conteudo: "Compartilhar arquivos na nuvem automaticamente.", correto: false }
        ],
        justificativa: "O backup tem como função preservar dados importantes e permitir recuperação em caso de perda.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual dos tipos de backup é realizado copiando todos os arquivos, independentemente de alterações?",
        arrayDeRespostas: [
            { conteudo: "Backup completo.", correto: true },
            { conteudo: "Backup incremental.", correto: false },
            { conteudo: "Backup diferencial.", correto: false },
            { conteudo: "Backup remoto.", correto: false },
            { conteudo: "Backup espelhado.", correto: false }
        ],
        justificativa: "O backup completo copia todos os arquivos selecionados, mesmo os que não foram modificados.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "O que caracteriza um backup incremental?",
        arrayDeRespostas: [
            { conteudo: "Copia apenas arquivos alterados desde o último backup, completo ou incremental.", correto: true },
            { conteudo: "Copia todos os arquivos do sistema novamente.", correto: false },
            { conteudo: "Apaga arquivos antigos e mantém apenas os novos.", correto: false },
            { conteudo: "Copia apenas arquivos temporários.", correto: false },
            { conteudo: "Faz backup apenas em mídias físicas.", correto: false }
        ],
        justificativa: "O backup incremental é eficiente em tempo e espaço, copiando apenas arquivos novos ou modificados.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "O backup diferencial copia:",
        arrayDeRespostas: [
            { conteudo: "Todos os arquivos modificados desde o último backup completo.", correto: true },
            { conteudo: "Somente arquivos modificados no último dia.", correto: false },
            { conteudo: "Todos os arquivos do sistema diariamente.", correto: false },
            { conteudo: "Somente arquivos temporários.", correto: false },
            { conteudo: "Arquivos de programas instalados apenas.", correto: false }
        ],
        justificativa: "O diferencial copia os arquivos alterados desde o último backup completo, facilitando restauração parcial.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual das alternativas representa uma boa prática para backup?",
        arrayDeRespostas: [
            { conteudo: "Manter cópias em locais distintos, físicos e na nuvem.", correto: true },
            { conteudo: "Guardar apenas a última versão do arquivo.", correto: false },
            { conteudo: "Fazer backup somente após a falha de hardware.", correto: false },
            { conteudo: "Salvar arquivos temporários e ignorar documentos importantes.", correto: false },
            { conteudo: "Compartilhar backups em redes públicas sem proteção.", correto: false }
        ],
        justificativa: "Manter cópias redundantes em diferentes locais aumenta a segurança dos dados.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a diferença entre backup local e remoto?",
        arrayDeRespostas: [
            { conteudo: "Local é feito em dispositivos próprios; remoto em servidores ou nuvem.", correto: true },
            { conteudo: "Local é automático; remoto precisa de intervenção manual.", correto: false },
            { conteudo: "Local é mais seguro que remoto sempre.", correto: false },
            { conteudo: "Remoto não permite restauração parcial.", correto: false },
            { conteudo: "Local só funciona em sistemas Linux.", correto: false }
        ],
        justificativa: "Backup local usa discos ou fitas físicas; remoto utiliza servidores externos ou nuvem.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "O que é um backup em nuvem?",
        arrayDeRespostas: [
            { conteudo: "Armazenamento de arquivos em servidores externos via internet.", correto: true },
            { conteudo: "Cópia realizada apenas em pendrives.", correto: false },
            { conteudo: "Backup que só funciona offline.", correto: false },
            { conteudo: "Backup físico em DVDs.", correto: false },
            { conteudo: "Backup que não permite restauração de arquivos.", correto: false }
        ],
        justificativa: "O backup em nuvem permite acesso e restauração de arquivos de qualquer local com internet.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "O que significa a estratégia 3-2-1 para backup?",
        arrayDeRespostas: [
            { conteudo: "3 cópias dos dados, 2 tipos de mídia, 1 fora do local.", correto: true },
            { conteudo: "3 servidores, 2 backups diários, 1 usuário responsável.", correto: false },
            { conteudo: "3 arquivos, 2 pastas, 1 mídia removível.", correto: false },
            { conteudo: "3 tipos de antivírus, 2 cópias locais, 1 nuvem.", correto: false },
            { conteudo: "3 backups completos por mês, 2 incrementais, 1 diferencial.", correto: false }
        ],
        justificativa: "A regra 3-2-1 garante redundância e segurança contra perdas locais e desastres.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a vantagem do backup incremental em relação ao completo?",
        arrayDeRespostas: [
            { conteudo: "Economiza tempo e espaço de armazenamento.", correto: true },
            { conteudo: "Permite restaurar todo o sistema instantaneamente.", correto: false },
            { conteudo: "Não exige softwares especializados.", correto: false },
            { conteudo: "É realizado automaticamente sem configuração.", correto: false },
            { conteudo: "Evita qualquer tipo de falha no hardware.", correto: false }
        ],
        justificativa: "Incremental copia apenas alterações, economizando recursos, mas depende do último backup completo.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "O que é um backup espelhado (mirror)?",
        arrayDeRespostas: [
            { conteudo: "Cópia exata e idêntica dos arquivos, refletindo alterações em tempo real.", correto: true },
            { conteudo: "Cópia apenas dos arquivos novos ou alterados diariamente.", correto: false },
            { conteudo: "Backup feito em mídias físicas apenas.", correto: false },
            { conteudo: "Cópia que comprime arquivos antigos.", correto: false },
            { conteudo: "Backup realizado apenas uma vez por mês.", correto: false }
        ],
        justificativa: "Backup espelhado mantém cópia idêntica, útil para restauração rápida.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a principal vantagem do backup automático?",
        arrayDeRespostas: [
            { conteudo: "Reduz a possibilidade de falha humana e garante periodicidade.", correto: true },
            { conteudo: "Evita a necessidade de mídia física.", correto: false },
            { conteudo: "Elimina a necessidade de antivírus.", correto: false },
            { conteudo: "Garante recuperação instantânea de qualquer arquivo.", correto: false },
            { conteudo: "Aumenta a velocidade do computador.", correto: false }
        ],
        justificativa: "Backup automático realiza cópias regulares sem depender do usuário.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual a função de uma política de backup?",
        arrayDeRespostas: [
            { conteudo: "Definir frequência, tipo e procedimentos de cópia de dados.", correto: true },
            { conteudo: "Aumentar espaço disponível no HD.", correto: false },
            { conteudo: "Impedir instalação de vírus.", correto: false },
            { conteudo: "Automatizar a atualização de softwares.", correto: false },
            { conteudo: "Substituir backups antigos por novos.", correto: false }
        ],
        justificativa: "Políticas de backup organizam e padronizam como os dados serão protegidos.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual tipo de backup é mais rápido para restauração completa?",
        arrayDeRespostas: [
            { conteudo: "Backup completo.", correto: true },
            { conteudo: "Backup incremental.", correto: false },
            { conteudo: "Backup diferencial.", correto: false },
            { conteudo: "Backup em nuvem.", correto: false },
            { conteudo: "Backup espelhado.", correto: false }
        ],
        justificativa: "Restauração rápida exige backup completo, pois não depende de arquivos anteriores.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a principal desvantagem do backup diferencial?",
        arrayDeRespostas: [
            { conteudo: "O tamanho aumenta diariamente, ocupando mais espaço que o incremental.", correto: true },
            { conteudo: "Não permite restauração completa.", correto: false },
            { conteudo: "Exige reinício do sistema.", correto: false },
            { conteudo: "Não funciona em sistemas Windows.", correto: false },
            { conteudo: "Só realiza cópias de arquivos temporários.", correto: false }
        ],
        justificativa: "O diferencial copia todas as alterações desde o último completo, crescendo com o tempo.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual a importância de testar backups regularmente?",
        arrayDeRespostas: [
            { conteudo: "Garantir que os dados possam ser restaurados corretamente.", correto: true },
            { conteudo: "Evitar a criação de backups.", correto: false },
            { conteudo: "Reduzir o tamanho dos arquivos.", correto: false },
            { conteudo: "Substituir antivírus por backup.", correto: false },
            { conteudo: "Aumentar a velocidade da rede.", correto: false }
        ],
        justificativa: "Testes regulares verificam a integridade e funcionalidade das cópias de segurança.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a diferença entre backup online e offline?",
        arrayDeRespostas: [
            { conteudo: "Online é feito via internet; offline é feito em mídias físicas locais.", correto: true },
            { conteudo: "Offline é automático; online é manual.", correto: false },
            { conteudo: "Offline só copia arquivos temporários.", correto: false },
            { conteudo: "Online não permite restauração.", correto: false },
            { conteudo: "Offline usa apenas armazenamento em nuvem.", correto: false }
        ],
        justificativa: "Backups online usam servidores ou nuvem; offline envolve mídias físicas sem conexão com a internet.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a vantagem de armazenar backups em mídias diferentes?",
        arrayDeRespostas: [
            { conteudo: "Reduz risco de perda por falha de um único tipo de mídia.", correto: true },
            { conteudo: "Garante recuperação imediata sem software.", correto: false },
            { conteudo: "Aumenta automaticamente a velocidade do backup.", correto: false },
            { conteudo: "Evita necessidade de políticas de backup.", correto: false },
            { conteudo: "Substitui antivírus na proteção de dados.", correto: false }
        ],
        justificativa: "Usar mídias diversas, como HD, SSD e nuvem, aumenta a segurança e resiliência dos backups.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a função do versionamento em backups?",
        arrayDeRespostas: [
            { conteudo: "Permitir recuperar diferentes versões de um mesmo arquivo.", correto: true },
            { conteudo: "Reduzir o tamanho do arquivo original.", correto: false },
            { conteudo: "Criptografar dados automaticamente.", correto: false },
            { conteudo: "Eliminar arquivos duplicados do sistema.", correto: false },
            { conteudo: "Evitar reinício do computador durante backup.", correto: false }
        ],
        justificativa: "O versionamento mantém várias cópias de um arquivo em diferentes estados, facilitando a restauração seletiva.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a principal vantagem do backup automatizado em nuvem?",
        arrayDeRespostas: [
            { conteudo: "Realiza cópias regulares sem intervenção do usuário.", correto: true },
            { conteudo: "Evita falhas de hardware no computador local.", correto: false },
            { conteudo: "Aumenta o desempenho do sistema.", correto: false },
            { conteudo: "Substitui backups completos por incrementais.", correto: false },
            { conteudo: "Permite restauração sem internet.", correto: false }
        ],
        justificativa: "Automatização na nuvem garante cópias contínuas e protege dados mesmo em caso de falhas locais.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a importância de manter backups fora do local principal?",
        arrayDeRespostas: [
            { conteudo: "Protege dados contra desastres locais, como incêndio ou roubo.", correto: true },
            { conteudo: "Evita necessidade de backup completo.", correto: false },
            { conteudo: "Garante restauração mais rápida no mesmo equipamento.", correto: false },
            { conteudo: "Substitui antivírus na proteção de arquivos.", correto: false },
            { conteudo: "Permite restaurar apenas arquivos temporários.", correto: false }
        ],
        justificativa: "Backups fora do local principal aumentam a segurança em casos de desastres físicos.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "O que é um backup diferencial cumulativo?",
        arrayDeRespostas: [
            { conteudo: "Copia todos os arquivos alterados desde o último backup completo.", correto: true },
            { conteudo: "Copia apenas arquivos modificados no dia atual.", correto: false },
            { conteudo: "Copia arquivos aleatoriamente para testar restauração.", correto: false },
            { conteudo: "Apaga arquivos antigos e mantém apenas novos.", correto: false },
            { conteudo: "Funciona apenas em sistemas Linux.", correto: false }
        ],
        justificativa: "Backup diferencial cumulativo acumula alterações desde o último backup completo, facilitando a restauração.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a principal desvantagem do backup espelhado?",
        arrayDeRespostas: [
            { conteudo: "Não mantém histórico de versões anteriores.", correto: true },
            { conteudo: "Leva muito tempo para ser realizado.", correto: false },
            { conteudo: "Só funciona em nuvem.", correto: false },
            { conteudo: "Requer reinício do computador.", correto: false },
            { conteudo: "Não permite restauração de arquivos.", correto: false }
        ],
        justificativa: "Backups espelhados refletem os dados atuais, não permitindo recuperar versões antigas.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é o risco de não realizar backups regularmente?",
        arrayDeRespostas: [
            { conteudo: "Perda irreversível de dados em caso de falha ou ataque.", correto: true },
            { conteudo: "Redução do espaço em disco.", correto: false },
            { conteudo: "Diminuição da velocidade do sistema.", correto: false },
            { conteudo: "Aumento do consumo de energia.", correto: false },
            { conteudo: "Evita a propagação de vírus.", correto: false }
        ],
        justificativa: "Sem backup, falhas de hardware, exclusão acidental ou ataques podem resultar em perda permanente de dados.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a vantagem de realizar backup criptografado?",
        arrayDeRespostas: [
            { conteudo: "Protege os dados contra acesso não autorizado.", correto: true },
            { conteudo: "Reduz o tamanho dos arquivos de backup.", correto: false },
            { conteudo: "Permite restauração mais rápida.", correto: false },
            { conteudo: "Substitui backup incremental.", correto: false },
            { conteudo: "Evita falhas de hardware.", correto: false }
        ],
        justificativa: "Criptografia garante que mesmo se o backup for roubado, os dados não poderão ser acessados sem chave.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a função de um backup rotativo?",
        arrayDeRespostas: [
            { conteudo: "Alternar entre múltiplas mídias para preservar histórico e espaço.", correto: true },
            { conteudo: "Fazer cópia apenas do disco principal.", correto: false },
            { conteudo: "Apagar backups antigos automaticamente sem critério.", correto: false },
            { conteudo: "Executar backup apenas quando o sistema está desligado.", correto: false },
            { conteudo: "Substituir backup completo por diferencial.", correto: false }
        ],
        justificativa: "Rotatividade permite manter várias cópias e economizar mídia, evitando sobrescrever dados importantes.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a vantagem de backups off-site em nuvem pública?",
        arrayDeRespostas: [
            { conteudo: "Proteção contra desastres físicos no local original.", correto: true },
            { conteudo: "Não precisa de internet para restaurar dados.", correto: false },
            { conteudo: "Permite restauração instantânea localmente.", correto: false },
            { conteudo: "Reduz automaticamente tamanho de arquivos.", correto: false },
            { conteudo: "Evita necessidade de antivírus.", correto: false }
        ],
        justificativa: "Backups em nuvem pública fora do local físico garantem resiliência contra desastres.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "O que é um backup de migração?",
        arrayDeRespostas: [
            { conteudo: "Backup utilizado para transferir dados de um sistema ou hardware para outro.", correto: true },
            { conteudo: "Backup automático em nuvem pública.", correto: false },
            { conteudo: "Backup incremental diário.", correto: false },
            { conteudo: "Backup de arquivos temporários apenas.", correto: false },
            { conteudo: "Backup que remove arquivos antigos após cópia.", correto: false }
        ],
        justificativa: "Backup de migração facilita a mudança de equipamentos ou sistemas sem perder dados.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a diferença entre backup completo e backup diferencial cumulativo?",
        arrayDeRespostas: [
            { conteudo: "O completo copia todos os arquivos; o diferencial copia alterações desde o último completo.", correto: true },
            { conteudo: "O diferencial copia todos os arquivos do sistema.", correto: false },
            { conteudo: "O completo é incremental por natureza.", correto: false },
            { conteudo: "O diferencial elimina arquivos antigos automaticamente.", correto: false },
            { conteudo: "Não há diferença entre eles.", correto: false }
        ],
        justificativa: "Backup completo sempre copia tudo; diferencial cumulativo copia apenas alterações desde o último completo.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a vantagem de manter backups históricos?",
        arrayDeRespostas: [
            { conteudo: "Permite restaurar arquivos em diferentes estados ao longo do tempo.", correto: true },
            { conteudo: "Evita necessidade de backup completo.", correto: false },
            { conteudo: "Reduz o tamanho do backup atual.", correto: false },
            { conteudo: "Aumenta a velocidade do computador.", correto: false },
            { conteudo: "Substitui backup incremental.", correto: false }
        ],
        justificativa: "Manter históricos garante restauração de versões antigas e recuperação de dados modificados ou corrompidos.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a principal vantagem de utilizar software especializado de backup?",
        arrayDeRespostas: [
            { conteudo: "Automatiza, organiza e garante integridade das cópias de segurança.", correto: true },
            { conteudo: "Evita falhas de hardware permanentemente.", correto: false },
            { conteudo: "Aumenta espaço livre no disco original.", correto: false },
            { conteudo: "Substitui a necessidade de antivírus.", correto: false },
            { conteudo: "Restaura arquivos sem nenhuma configuração.", correto: false }
        ],
        justificativa: "Softwares especializados facilitam backup regular, seguro e eficiente, com opções avançadas de restauração.",
        categoriaDaPergunta: "tecnico-de-informatica-copia-de-seguranca-backup"
    },
    {
        enunciado: "Qual é a função principal de um cliente de e-mail?",
        arrayDeRespostas: [
            { conteudo: "Permitir o envio, leitura e gerenciamento de mensagens eletrônicas.", correto: true },
            { conteudo: "Servir apenas para navegação na internet.", correto: false },
            { conteudo: "Atuar como antivírus e firewall.", correto: false },
            { conteudo: "Executar scripts de automação de rede.", correto: false },
            { conteudo: "Gerar relatórios financeiros automáticos.", correto: false }
        ],
        justificativa: "Clientes de e-mail, como Outlook ou Thunderbird, gerenciam o envio e recebimento de mensagens eletrônicas.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que significa IMAP na configuração de e-mail?",
        arrayDeRespostas: [
            { conteudo: "Internet Message Access Protocol.", correto: true },
            { conteudo: "Internal Mail Access Program.", correto: false },
            { conteudo: "Internet Mail Authentication Process.", correto: false },
            { conteudo: "Integrated Messaging Application Protocol.", correto: false },
            { conteudo: "Instant Mail Access Provider.", correto: false }
        ],
        justificativa: "IMAP permite o acesso remoto às mensagens armazenadas no servidor de e-mail.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual protocolo é responsável pelo envio de mensagens de e-mail?",
        arrayDeRespostas: [
            { conteudo: "SMTP.", correto: true },
            { conteudo: "IMAP.", correto: false },
            { conteudo: "POP3.", correto: false },
            { conteudo: "FTP.", correto: false },
            { conteudo: "HTTP.", correto: false }
        ],
        justificativa: "O protocolo SMTP (Simple Mail Transfer Protocol) é responsável pelo envio de mensagens.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que significa POP3?",
        arrayDeRespostas: [
            { conteudo: "Post Office Protocol version 3.", correto: true },
            { conteudo: "Private Office Program.", correto: false },
            { conteudo: "Public Online Protocol.", correto: false },
            { conteudo: "Personal Operation Port.", correto: false },
            { conteudo: "Packet Output Program.", correto: false }
        ],
        justificativa: "O POP3 permite baixar mensagens do servidor para o computador do usuário.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual a principal diferença entre IMAP e POP3?",
        arrayDeRespostas: [
            { conteudo: "IMAP mantém mensagens no servidor; POP3 as baixa para o computador.", correto: true },
            { conteudo: "POP3 é mais seguro que IMAP.", correto: false },
            { conteudo: "IMAP apaga as mensagens automaticamente.", correto: false },
            { conteudo: "POP3 permite múltiplos acessos simultâneos.", correto: false },
            { conteudo: "IMAP não necessita autenticação.", correto: false }
        ],
        justificativa: "IMAP mantém sincronização com o servidor; POP3 transfere e remove mensagens.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual protocolo utiliza a porta padrão 25?",
        arrayDeRespostas: [
            { conteudo: "SMTP.", correto: true },
            { conteudo: "POP3.", correto: false },
            { conteudo: "IMAP.", correto: false },
            { conteudo: "HTTPS.", correto: false },
            { conteudo: "DNS.", correto: false }
        ],
        justificativa: "A porta 25 é usada tradicionalmente para envio de mensagens via SMTP.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual a função do campo Cc em um e-mail?",
        arrayDeRespostas: [
            { conteudo: "Enviar cópia da mensagem para outros destinatários.", correto: true },
            { conteudo: "Enviar mensagem oculta a todos.", correto: false },
            { conteudo: "Criptografar o conteúdo da mensagem.", correto: false },
            { conteudo: "Apagar automaticamente mensagens antigas.", correto: false },
            { conteudo: "Encaminhar e-mails automaticamente.", correto: false }
        ],
        justificativa: "O campo Cc (Com Cópia) envia cópia visível da mensagem a outros destinatários.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que significa o campo Cco em mensagens de e-mail?",
        arrayDeRespostas: [
            { conteudo: "Com Cópia Oculta – envia cópia sem que os demais vejam o destinatário oculto.", correto: true },
            { conteudo: "Cópia Compartilhada Online.", correto: false },
            { conteudo: "Cliente de Comunicação Online.", correto: false },
            { conteudo: "Cópia Centralizada de Operações.", correto: false },
            { conteudo: "Canal de Comunicação Opcional.", correto: false }
        ],
        justificativa: "Cco mantém a privacidade dos destinatários ocultos na mensagem.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que é necessário para configurar uma conta de e-mail em um cliente como o Outlook?",
        arrayDeRespostas: [
            { conteudo: "Endereço de e-mail, senha, servidor SMTP e servidor IMAP/POP3.", correto: true },
            { conteudo: "Somente o endereço de e-mail.", correto: false },
            { conteudo: "Apenas a senha do servidor.", correto: false },
            { conteudo: "O número IP do provedor de internet.", correto: false },
            { conteudo: "Uma conta de rede local.", correto: false }
        ],
        justificativa: "Essas informações permitem autenticação e conexão com os servidores de tecnico-de-informatica-correio-eletronico.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual é a vantagem de usar IMAP em dispositivos móveis?",
        arrayDeRespostas: [
            { conteudo: "Permite sincronizar mensagens entre diferentes dispositivos.", correto: true },
            { conteudo: "Apaga automaticamente mensagens antigas.", correto: false },
            { conteudo: "Evita uso de senha para login.", correto: false },
            { conteudo: "Funciona apenas offline.", correto: false },
            { conteudo: "Impede envio de anexos.", correto: false }
        ],
        justificativa: "IMAP sincroniza pastas e mensagens, mantendo o mesmo conteúdo em todos os dispositivos.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual a finalidade do servidor SMTP autenticado (porta 587)?",
        arrayDeRespostas: [
            { conteudo: "Permitir envio seguro de e-mails com autenticação do usuário.", correto: true },
            { conteudo: "Receber mensagens POP3.", correto: false },
            { conteudo: "Gerenciar spam automaticamente.", correto: false },
            { conteudo: "Armazenar e-mails enviados localmente.", correto: false },
            { conteudo: "Fazer backup de mensagens antigas.", correto: false }
        ],
        justificativa: "O SMTP autenticado usa a porta 587 e requer login, aumentando a segurança no envio.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual campo de um e-mail contém o assunto da mensagem?",
        arrayDeRespostas: [
            { conteudo: "Subject.", correto: true },
            { conteudo: "To.", correto: false },
            { conteudo: "From.", correto: false },
            { conteudo: "Body.", correto: false },
            { conteudo: "Header.", correto: false }
        ],
        justificativa: "O campo 'Subject' identifica o tema ou título da mensagem enviada.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual extensão é mais associada a anexos perigosos em e-mails?",
        arrayDeRespostas: [
            { conteudo: ".exe.", correto: true },
            { conteudo: ".pdf.", correto: false },
            { conteudo: ".txt.", correto: false },
            { conteudo: ".jpg.", correto: false },
            { conteudo: ".docx.", correto: false }
        ],
        justificativa: "Arquivos executáveis (.exe) podem conter scripts ou vírus embutidos.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que é phishing?",
        arrayDeRespostas: [
            { conteudo: "Golpe que utiliza e-mails falsos para roubar informações pessoais.", correto: true },
            { conteudo: "Protocolo de autenticação de e-mail.", correto: false },
            { conteudo: "Backup automático de mensagens.", correto: false },
            { conteudo: "Sistema de verificação de anexos.", correto: false },
            { conteudo: "Serviço de bloqueio de spam.", correto: false }
        ],
        justificativa: "Phishing é um golpe comum via e-mail que tenta enganar usuários para obter dados sigilosos.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que significa o termo 'spam'?",
        arrayDeRespostas: [
            { conteudo: "Mensagens eletrônicas não solicitadas, geralmente em massa.", correto: true },
            { conteudo: "Mensagens criptografadas por antivírus.", correto: false },
            { conteudo: "tecnico-de-informatica-correio-eletronico legítimo.", correto: false },
            { conteudo: "Sistema de login seguro.", correto: false },
            { conteudo: "Aplicativo de envio de e-mails em grupo.", correto: false }
        ],
        justificativa: "Spam são mensagens indesejadas, geralmente com fins publicitários ou fraudulentos.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual ferramenta pode ser usada para bloquear spam em clientes de e-mail?",
        arrayDeRespostas: [
            { conteudo: "Filtros de mensagens.", correto: true },
            { conteudo: "Gerenciador de downloads.", correto: false },
            { conteudo: "Firewall do sistema.", correto: false },
            { conteudo: "Editor de texto.", correto: false },
            { conteudo: "Gerador de senhas.", correto: false }
        ],
        justificativa: "Filtros de spam analisam remetente e conteúdo para bloquear mensagens suspeitas.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que é necessário para enviar anexos em e-mails?",
        arrayDeRespostas: [
            { conteudo: "Anexar o arquivo antes do envio, respeitando o limite de tamanho do servidor.", correto: true },
            { conteudo: "Converter o arquivo em texto.", correto: false },
            { conteudo: "Desativar o antivírus.", correto: false },
            { conteudo: "Usar apenas formato .txt.", correto: false },
            { conteudo: "Executar o arquivo durante o envio.", correto: false }
        ],
        justificativa: "Os anexos são adicionados à mensagem, e seu tamanho é limitado pelo provedor.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que é um servidor de tecnico-de-informatica-correio-eletronico?",
        arrayDeRespostas: [
            { conteudo: "Computador que armazena e gerencia mensagens enviadas e recebidas.", correto: true },
            { conteudo: "Aplicativo usado apenas para navegar na web.", correto: false },
            { conteudo: "Programa de edição de documentos.", correto: false },
            { conteudo: "Sistema operacional de e-mail local.", correto: false },
            { conteudo: "Antivírus para e-mails.", correto: false }
        ],
        justificativa: "Servidores de e-mail administram o fluxo de mensagens entre remetentes e destinatários.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que é uma assinatura de e-mail?",
        arrayDeRespostas: [
            { conteudo: "Informações adicionadas automaticamente ao final das mensagens.", correto: true },
            { conteudo: "Senha para abrir a conta de e-mail.", correto: false },
            { conteudo: "Certificado digital de autenticação.", correto: false },
            { conteudo: "Mensagem automática de erro.", correto: false },
            { conteudo: "Assinatura de serviço pago de e-mail.", correto: false }
        ],
        justificativa: "Assinaturas padronizam comunicações, incluindo nome, cargo e contatos.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual é a vantagem de usar um e-mail corporativo com domínio próprio?",
        arrayDeRespostas: [
            { conteudo: "Maior credibilidade e controle administrativo sobre contas.", correto: true },
            { conteudo: "Permite enviar mensagens anônimas.", correto: false },
            { conteudo: "Dispensa o uso de senhas.", correto: false },
            { conteudo: "Elimina necessidade de servidor SMTP.", correto: false },
            { conteudo: "É incompatível com dispositivos móveis.", correto: false }
        ],
        justificativa: "E-mails com domínio próprio reforçam a identidade institucional e permitem controle interno.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual das alternativas indica corretamente o formato padrão de endereços de e-mail?",
        arrayDeRespostas: [
            { conteudo: "usuario@dominio.extensão", correto: true },
            { conteudo: "www.usuario.extensão", correto: false },
            { conteudo: "http://usuario@dominio", correto: false },
            { conteudo: "dominio/usuario", correto: false },
            { conteudo: "usuario#dominio.extensão", correto: false }
        ],
        justificativa: "Endereços de e-mail seguem o formato usuário@domínio, separados pelo caractere @.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual campo deve ser preenchido para responder automaticamente mensagens de ausência?",
        arrayDeRespostas: [
            { conteudo: "Resposta automática (Out of Office).", correto: true },
            { conteudo: "Cc.", correto: false },
            { conteudo: "Cco.", correto: false },
            { conteudo: "Assunto.", correto: false },
            { conteudo: "Encaminhar.", correto: false }
        ],
        justificativa: "A resposta automática informa o remetente sobre ausência temporária do destinatário.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual recurso permite enviar mensagens a vários contatos simultaneamente com privacidade?",
        arrayDeRespostas: [
            { conteudo: "Uso do campo Cco (Cópia Oculta).", correto: true },
            { conteudo: "Encaminhamento em massa.", correto: false },
            { conteudo: "Campo Cc.", correto: false },
            { conteudo: "Agrupamento de mensagens.", correto: false },
            { conteudo: "Filtro de destinatários.", correto: false }
        ],
        justificativa: "O campo Cco oculta a lista de destinatários, garantindo privacidade.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual recurso pode ser usado para garantir autenticidade e integridade de mensagens eletrônicas?",
        arrayDeRespostas: [
            { conteudo: "Certificado digital.", correto: true },
            { conteudo: "Criptografia simples.", correto: false },
            { conteudo: "Assinatura de e-mail padrão.", correto: false },
            { conteudo: "Campo Cco.", correto: false },
            { conteudo: "Backup automático.", correto: false }
        ],
        justificativa: "Certificados digitais garantem autenticidade, integridade e não repúdio de e-mails.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que ocorre ao configurar o servidor POP3 para excluir mensagens após o download?",
        arrayDeRespostas: [
            { conteudo: "As mensagens são removidas do servidor e ficam apenas no computador local.", correto: true },
            { conteudo: "As mensagens permanecem sincronizadas entre os dispositivos.", correto: false },
            { conteudo: "As mensagens são copiadas para todos os dispositivos.", correto: false },
            { conteudo: "O servidor rejeita novas mensagens.", correto: false },
            { conteudo: "A conta é bloqueada automaticamente.", correto: false }
        ],
        justificativa: "POP3 pode ser configurado para apagar mensagens do servidor após o download.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual das opções é uma boa prática de segurança ao usar e-mails?",
        arrayDeRespostas: [
            { conteudo: "Não abrir anexos de remetentes desconhecidos.", correto: true },
            { conteudo: "Reenviar todos os spams recebidos.", correto: false },
            { conteudo: "Desativar antivírus para ler mensagens.", correto: false },
            { conteudo: "Abrir links suspeitos para verificar autenticidade.", correto: false },
            { conteudo: "Usar senhas fracas e simples.", correto: false }
        ],
        justificativa: "Evitar abrir anexos desconhecidos reduz o risco de infecção por malware.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Qual é a principal função de um webmail?",
        arrayDeRespostas: [
            { conteudo: "Permitir acesso a e-mails via navegador, sem necessidade de instalar um cliente local.", correto: true },
            { conteudo: "Atuar exclusivamente como servidor SMTP para envio de mensagens.", correto: false },
            { conteudo: "Armazenar apenas a lista de contatos, sem acesso às mensagens.", correto: false },
            { conteudo: "Criptografar automaticamente todas as mensagens com chave privada do usuário.", correto: false },
            { conteudo: "Executar aplicações locais sem conexão com o servidor de e-mail.", correto: false }
        ],
        justificativa: "Webmail possibilita enviar, receber e gerenciar e-mails diretamente pelo navegador, mantendo as mensagens no servidor e dispensando a instalação de software cliente.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    }, {
        enunciado: "Qual é o principal objetivo da assinatura digital em mensagens de e-mail?",
        arrayDeRespostas: [
            { conteudo: "Garantir a autenticidade e integridade da mensagem enviada.", correto: true },
            { conteudo: "Aumentar o tamanho do anexo do e-mail.", correto: false },
            { conteudo: "Permitir que o e-mail seja lido offline.", correto: false },
            { conteudo: "Evitar a necessidade de criptografia.", correto: false },
            { conteudo: "Reduzir o consumo de banda de rede.", correto: false }
        ],
        justificativa: "A assinatura digital assegura que o remetente é legítimo e que o conteúdo da mensagem não foi alterado.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "O que significa o termo 'SMTP Authentication' durante a configuração de um cliente de e-mail?",
        arrayDeRespostas: [
            { conteudo: "É a exigência de autenticação para enviar mensagens pelo servidor SMTP.", correto: true },
            { conteudo: "É o método de criptografia de anexos do e-mail.", correto: false },
            { conteudo: "É o nome alternativo para o protocolo POP3.", correto: false },
            { conteudo: "É o processo de recepção de mensagens pelo servidor IMAP.", correto: false },
            { conteudo: "É a verificação de antivírus no envio de e-mails.", correto: false }
        ],
        justificativa: "SMTP Authentication impede que terceiros usem o servidor para enviar mensagens não autorizadas.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Ao configurar um e-mail corporativo, qual campo deve ser ajustado para identificar o domínio da empresa?",
        arrayDeRespostas: [
            { conteudo: "O servidor de entrada e saída deve utilizar o domínio da empresa (ex: mail.empresa.com.br).", correto: true },
            { conteudo: "O campo de senha deve conter o nome do domínio.", correto: false },
            { conteudo: "O nome do usuário deve ser substituído pelo domínio.", correto: false },
            { conteudo: "O domínio é configurado apenas no cliente de antivírus.", correto: false },
            { conteudo: "O domínio é adicionado automaticamente pelo sistema operacional.", correto: false }
        ],
        justificativa: "O domínio define a origem e destino do e-mail, devendo ser configurado corretamente no servidor de entrada e saída.",
        categoriaDaPergunta: "tecnico-de-informatica-correio-eletronico"
    },
    {
        enunciado: "Em um sistema operacional, qual é a principal função da administração de usuários?",
        arrayDeRespostas: [
            { conteudo: "Controlar o acesso e as permissões de cada usuário no sistema.", correto: true },
            { conteudo: "Monitorar apenas o uso de memória RAM.", correto: false },
            { conteudo: "Executar rotinas automáticas de backup.", correto: false },
            { conteudo: "Gerenciar apenas dispositivos de hardware.", correto: false },
            { conteudo: "Definir protocolos de rede.", correto: false }
        ],
        justificativa: "A administração de usuários visa controlar acessos, permissões e perfis dentro do sistema.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Em sistemas Linux, qual comando é utilizado para adicionar um novo usuário?",
        arrayDeRespostas: [
            { conteudo: "useradd", correto: true },
            { conteudo: "adduseraccount", correto: false },
            { conteudo: "newuser", correto: false },
            { conteudo: "createuser", correto: false },
            { conteudo: "mkuser", correto: false }
        ],
        justificativa: "O comando 'useradd' é utilizado para criar novas contas de usuários no Linux.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Em sistemas Windows, qual ferramenta é usada para gerenciar contas de usuários?",
        arrayDeRespostas: [
            { conteudo: "Painel de Controle > Contas de Usuário", correto: true },
            { conteudo: "Gerenciador de Dispositivos", correto: false },
            { conteudo: "Prompt de Comando", correto: false },
            { conteudo: "Monitor de Recursos", correto: false },
            { conteudo: "Windows Defender", correto: false }
        ],
        justificativa: "O gerenciamento de contas de usuário no Windows é feito pelo Painel de Controle na seção correspondente.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Em um domínio Windows, o Active Directory é responsável por:",
        arrayDeRespostas: [
            { conteudo: "Gerenciar usuários, computadores e políticas de segurança em rede.", correto: true },
            { conteudo: "Aumentar a velocidade de processamento dos servidores.", correto: false },
            { conteudo: "Gerenciar apenas impressoras de rede.", correto: false },
            { conteudo: "Realizar backups automáticos.", correto: false },
            { conteudo: "Monitorar tráfego de rede.", correto: false }
        ],
        justificativa: "O Active Directory é o serviço da Microsoft que centraliza a administração de usuários e recursos em redes corporativas.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é um grupo de usuários em sistemas operacionais?",
        arrayDeRespostas: [
            { conteudo: "Um conjunto de usuários com permissões semelhantes.", correto: true },
            { conteudo: "Uma pasta que contém contas de administradores.", correto: false },
            { conteudo: "Um tipo de serviço de rede.", correto: false },
            { conteudo: "Um arquivo de configuração do sistema.", correto: false },
            { conteudo: "Um processo do sistema que cria contas.", correto: false }
        ],
        justificativa: "Grupos de usuários facilitam a atribuição coletiva de permissões e políticas.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual comando no Linux é usado para modificar um usuário existente?",
        arrayDeRespostas: [
            { conteudo: "usermod", correto: true },
            { conteudo: "useredit", correto: false },
            { conteudo: "chuser", correto: false },
            { conteudo: "moduser", correto: false },
            { conteudo: "eduser", correto: false }
        ],
        justificativa: "O comando 'usermod' altera propriedades de uma conta de usuário no Linux.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual é o arquivo de configuração que armazena informações sobre usuários no Linux?",
        arrayDeRespostas: [
            { conteudo: "/etc/passwd", correto: true },
            { conteudo: "/etc/users", correto: false },
            { conteudo: "/etc/account", correto: false },
            { conteudo: "/etc/login.conf", correto: false },
            { conteudo: "/home/config", correto: false }
        ],
        justificativa: "O arquivo /etc/passwd contém dados como nome de usuário, UID, GID e diretório home.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que significa UID em sistemas Linux?",
        arrayDeRespostas: [
            { conteudo: "User Identifier", correto: true },
            { conteudo: "Universal Installation Directory", correto: false },
            { conteudo: "User Internal Data", correto: false },
            { conteudo: "Unique Interface Device", correto: false },
            { conteudo: "Unit Identification Disk", correto: false }
        ],
        justificativa: "UID é o identificador numérico único atribuído a cada usuário no sistema Linux.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual é o propósito da senha do usuário no sistema operacional?",
        arrayDeRespostas: [
            { conteudo: "Autenticar o usuário e proteger o acesso à sua conta.", correto: true },
            { conteudo: "Aumentar a velocidade de login.", correto: false },
            { conteudo: "Habilitar acesso remoto automático.", correto: false },
            { conteudo: "Compartilhar acesso entre contas.", correto: false },
            { conteudo: "Desabilitar a conta de administrador.", correto: false }
        ],
        justificativa: "As senhas garantem que somente o titular da conta possa acessar seus recursos e dados.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual grupo de usuários no Windows possui todas as permissões administrativas?",
        arrayDeRespostas: [
            { conteudo: "Administradores", correto: true },
            { conteudo: "Convidados", correto: false },
            { conteudo: "Usuários padrão", correto: false },
            { conteudo: "Power Users", correto: false },
            { conteudo: "Operadores de backup", correto: false }
        ],
        justificativa: "O grupo 'Administradores' tem controle total sobre o sistema e suas configurações.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Em ambientes corporativos, qual a vantagem do uso de perfis de usuário centralizados?",
        arrayDeRespostas: [
            { conteudo: "Permitem que o usuário acesse sua configuração de qualquer máquina do domínio.", correto: true },
            { conteudo: "Aumentam a velocidade de inicialização.", correto: false },
            { conteudo: "Eliminam a necessidade de senha.", correto: false },
            { conteudo: "Bloqueiam o uso de rede.", correto: false },
            { conteudo: "Desativam atualizações automáticas.", correto: false }
        ],
        justificativa: "Perfis centralizados permitem mobilidade e consistência de configurações entre diferentes estações.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O comando 'passwd' no Linux é utilizado para:",
        arrayDeRespostas: [
            { conteudo: "Alterar a senha de um usuário.", correto: true },
            { conteudo: "Remover uma conta de usuário.", correto: false },
            { conteudo: "Listar usuários do sistema.", correto: false },
            { conteudo: "Criar grupos.", correto: false },
            { conteudo: "Bloquear acesso remoto.", correto: false }
        ],
        justificativa: "O comando 'passwd' altera a senha de login de um usuário no sistema Linux.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual arquivo armazena as senhas criptografadas no Linux?",
        arrayDeRespostas: [
            { conteudo: "/etc/shadow", correto: true },
            { conteudo: "/etc/passwd", correto: false },
            { conteudo: "/etc/secure", correto: false },
            { conteudo: "/home/shadowfile", correto: false },
            { conteudo: "/var/passwords", correto: false }
        ],
        justificativa: "O arquivo /etc/shadow contém senhas criptografadas e é acessível apenas por administradores.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual comando no Windows é usado no prompt para criar um novo usuário?",
        arrayDeRespostas: [
            { conteudo: "net user nomeusuario /add", correto: true },
            { conteudo: "create user nomeusuario", correto: false },
            { conteudo: "add account nomeusuario", correto: false },
            { conteudo: "user create nomeusuario", correto: false },
            { conteudo: "newuser nomeusuario", correto: false }
        ],
        justificativa: "O comando 'net user' é utilizado para gerenciar usuários via prompt de comando no Windows.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Em uma política de segurança, por que é importante definir tempo de expiração de senhas?",
        arrayDeRespostas: [
            { conteudo: "Para reduzir o risco de acesso indevido a longo prazo.", correto: true },
            { conteudo: "Para diminuir o tempo de login dos usuários.", correto: false },
            { conteudo: "Para permitir logins automáticos.", correto: false },
            { conteudo: "Para aumentar o desempenho do sistema.", correto: false },
            { conteudo: "Para evitar bloqueio de contas.", correto: false }
        ],
        justificativa: "Senhas com validade forçada obrigam renovações periódicas, melhorando a segurança.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual a função do grupo 'sudo' no Linux?",
        arrayDeRespostas: [
            { conteudo: "Permitir que usuários executem comandos com privilégios de administrador.", correto: true },
            { conteudo: "Restringir acesso a determinados arquivos.", correto: false },
            { conteudo: "Bloquear usuários temporariamente.", correto: false },
            { conteudo: "Criar backups automáticos de usuários.", correto: false },
            { conteudo: "Gerenciar senhas de todos os usuários.", correto: false }
        ],
        justificativa: "Usuários do grupo 'sudo' podem executar comandos privilegiados temporariamente.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é um usuário convidado (guest) em sistemas operacionais?",
        arrayDeRespostas: [
            { conteudo: "Uma conta com permissões limitadas para acesso temporário.", correto: true },
            { conteudo: "Um administrador sem senha.", correto: false },
            { conteudo: "Um usuário com privilégios totais.", correto: false },
            { conteudo: "Uma conta usada apenas para rede local.", correto: false },
            { conteudo: "Um grupo de usuários bloqueados.", correto: false }
        ],
        justificativa: "Contas guest permitem acesso temporário sem comprometer a segurança do sistema.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual comando Linux exibe informações detalhadas sobre um usuário?",
        arrayDeRespostas: [
            { conteudo: "id nomeusuario", correto: true },
            { conteudo: "userinfo nomeusuario", correto: false },
            { conteudo: "showuser nomeusuario", correto: false },
            { conteudo: "whoami nomeusuario", correto: false },
            { conteudo: "getuser nomeusuario", correto: false }
        ],
        justificativa: "O comando 'id' mostra UID, GID e grupos aos quais o usuário pertence.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Por que é importante usar políticas de senha fortes?",
        arrayDeRespostas: [
            { conteudo: "Para dificultar ataques de força bruta e aumentar a segurança.", correto: true },
            { conteudo: "Para permitir acesso rápido aos usuários.", correto: false },
            { conteudo: "Para reduzir o consumo de memória do sistema.", correto: false },
            { conteudo: "Para agilizar backups automáticos.", correto: false },
            { conteudo: "Para eliminar contas inativas.", correto: false }
        ],
        justificativa: "Senhas fortes reduzem a probabilidade de acesso não autorizado.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual é a função do arquivo /etc/group no Linux?",
        arrayDeRespostas: [
            { conteudo: "Armazenar informações sobre grupos e os usuários pertencentes a cada grupo.", correto: true },
            { conteudo: "Guardar senhas criptografadas.", correto: false },
            { conteudo: "Listar usuários conectados via rede.", correto: false },
            { conteudo: "Definir permissões de arquivos individuais.", correto: false },
            { conteudo: "Registrar logs de autenticação.", correto: false }
        ],
        justificativa: "O /etc/group contém grupos do sistema e quais usuários pertencem a cada um.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "No Windows, qual é a diferença entre contas padrão e contas de administrador?",
        arrayDeRespostas: [
            { conteudo: "Contas padrão possuem permissões limitadas; administradores têm controle total.", correto: true },
            { conteudo: "Administradores não podem instalar programas.", correto: false },
            { conteudo: "Contas padrão podem modificar configurações do sistema.", correto: false },
            { conteudo: "Não há diferença entre elas.", correto: false },
            { conteudo: "Contas padrão são criadas automaticamente apenas no Linux.", correto: false }
        ],
        justificativa: "Administradores têm permissões elevadas para gerenciar sistema, enquanto contas padrão têm acesso limitado.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que significa delegar permissões a usuários em um sistema?",
        arrayDeRespostas: [
            { conteudo: "Conceder direitos específicos para executar tarefas sem dar acesso total.", correto: true },
            { conteudo: "Criar novos usuários automaticamente.", correto: false },
            { conteudo: "Bloquear contas temporariamente.", correto: false },
            { conteudo: "Alterar a senha de outro usuário sem permissão.", correto: false },
            { conteudo: "Excluir todos os arquivos do sistema.", correto: false }
        ],
        justificativa: "Delegar permissões permite distribuir responsabilidades mantendo segurança do sistema.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é um perfil de usuário no Windows?",
        arrayDeRespostas: [
            { conteudo: "Conjunto de configurações, preferências e arquivos pessoais de um usuário.", correto: true },
            { conteudo: "Uma conta administrativa oculta.", correto: false },
            { conteudo: "Um grupo de usuários conectados.", correto: false },
            { conteudo: "Um arquivo de log de login.", correto: false },
            { conteudo: "Uma pasta temporária do sistema.", correto: false }
        ],
        justificativa: "O perfil mantém personalizações, documentos e configurações individuais de cada usuário.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Em sistemas corporativos, o que é a política de 'conta inativa'?",
        arrayDeRespostas: [
            { conteudo: "Procedimento que bloqueia ou desativa contas sem uso por determinado período.", correto: true },
            { conteudo: "Atualização automática de senha de administrador.", correto: false },
            { conteudo: "Remoção de permissões temporárias.", correto: false },
            { conteudo: "Backup automático da pasta home.", correto: false },
            { conteudo: "Criação de contas de convidados.", correto: false }
        ],
        justificativa: "Contas inativas representam risco de segurança, por isso políticas corporativas podem bloqueá-las.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é autenticação de dois fatores (2FA) em administração de usuários?",
        arrayDeRespostas: [
            { conteudo: "Método de segurança que requer duas formas de verificação para acesso.", correto: true },
            { conteudo: "Permite login em duas máquinas ao mesmo tempo.", correto: false },
            { conteudo: "Cria duas contas iguais automaticamente.", correto: false },
            { conteudo: "Desativa temporariamente a senha.", correto: false },
            { conteudo: "Somente monitora atividades do usuário.", correto: false }
        ],
        justificativa: "O 2FA aumenta a segurança exigindo algo que o usuário sabe e algo que possui.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual é a finalidade de restringir privilégios de administrador aos usuários comuns?",
        arrayDeRespostas: [
            { conteudo: "Reduzir risco de alterações acidentais ou maliciosas no sistema.", correto: true },
            { conteudo: "Evitar que usuários acessem arquivos temporários.", correto: false },
            { conteudo: "Aumentar o desempenho do sistema.", correto: false },
            { conteudo: "Permitir múltiplos logins simultâneos.", correto: false },
            { conteudo: "Criar automaticamente backups de usuários.", correto: false }
        ],
        justificativa: "Limitar privilégios minimiza o impacto de erros ou ações maliciosas em contas comuns.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Qual comando Linux remove uma conta de usuário e seu diretório home?",
        arrayDeRespostas: [
            { conteudo: "userdel -r nomeusuario", correto: true },
            { conteudo: "deluser nomeusuario", correto: false },
            { conteudo: "rmuser nomeusuario", correto: false },
            { conteudo: "removeuser -home nomeusuario", correto: false },
            { conteudo: "delhome nomeusuario", correto: false }
        ],
        justificativa: "A opção '-r' do 'userdel' remove também o diretório home associado ao usuário.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é um SID (Security Identifier) no Windows?",
        arrayDeRespostas: [
            { conteudo: "Identificador único que o sistema usa para gerenciar permissões de usuários.", correto: true },
            { conteudo: "Senha temporária do usuário.", correto: false },
            { conteudo: "Nome de grupo de usuários.", correto: false },
            { conteudo: "Tipo de diretório protegido.", correto: false },
            { conteudo: "Arquivo de configuração de rede.", correto: false }
        ],
        justificativa: "O SID é usado internamente pelo Windows para identificar contas e controlar permissões.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é a política de 'senha expirada' em um ambiente corporativo?",
        arrayDeRespostas: [
            { conteudo: "Obrigar usuários a trocar a senha após um período determinado.", correto: true },
            { conteudo: "Bloquear o usuário permanentemente.", correto: false },
            { conteudo: "Resetar todas as senhas do sistema.", correto: false },
            { conteudo: "Desativar autenticação de rede.", correto: false },
            { conteudo: "Remover contas antigas automaticamente.", correto: false }
        ],
        justificativa: "Senhas expiram para reduzir risco de uso indevido de credenciais antigas.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Por que é importante auditar contas de usuário regularmente?",
        arrayDeRespostas: [
            { conteudo: "Para identificar contas inativas, permissões indevidas ou comportamentos suspeitos.", correto: true },
            { conteudo: "Para acelerar o login dos usuários.", correto: false },
            { conteudo: "Para reduzir o uso de memória RAM.", correto: false },
            { conteudo: "Para criar perfis duplicados.", correto: false },
            { conteudo: "Para eliminar arquivos temporários.", correto: false }
        ],
        justificativa: "Auditorias regulares ajudam a manter a segurança e conformidade do ambiente.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é uma conta de serviço no Windows ou Linux?",
        arrayDeRespostas: [
            { conteudo: "Uma conta usada exclusivamente para executar aplicações ou serviços, não para usuários humanos.", correto: true },
            { conteudo: "Uma conta administrativa padrão.", correto: false },
            { conteudo: "Uma conta de convidado temporária.", correto: false },
            { conteudo: "Uma conta bloqueada automaticamente.", correto: false },
            { conteudo: "Uma conta que não possui SID.", correto: false }
        ],
        justificativa: "Contas de serviço permitem que programas rodem com permissões controladas sem vincular a um usuário real.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é um home directory (diretório home) no Linux?",
        arrayDeRespostas: [
            { conteudo: "Pasta pessoal do usuário que contém arquivos e configurações.", correto: true },
            { conteudo: "Diretório temporário do sistema.", correto: false },
            { conteudo: "Pasta compartilhada entre todos os usuários.", correto: false },
            { conteudo: "Arquivo de configuração de senhas.", correto: false },
            { conteudo: "Área de swap do usuário.", correto: false }
        ],
        justificativa: "O diretório home mantém arquivos, documentos e configurações individuais de cada usuário.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "Por que a segmentação de usuários em grupos é considerada uma boa prática de administração?",
        arrayDeRespostas: [
            { conteudo: "Facilita atribuição de permissões e gerenciamento de recursos de forma organizada.", correto: true },
            { conteudo: "Evita a criação de backups.", correto: false },
            { conteudo: "Substitui a necessidade de senhas.", correto: false },
            { conteudo: "Aumenta automaticamente a velocidade do sistema.", correto: false },
            { conteudo: "Bloqueia contas temporárias sem motivo.", correto: false }
        ],
        justificativa: "Organizar usuários em grupos simplifica administração e reforça a segurança.",
        categoriaDaPergunta: "tecnico-de-informatica-administracao-de-usuarios"
    },
    {
        enunciado: "O que é uma rede sem fio (wireless)?",
        arrayDeRespostas: [
            { conteudo: "Rede que utiliza ondas de rádio para comunicação entre dispositivos.", correto: true },
            { conteudo: "Rede que depende exclusivamente de cabos de cobre.", correto: false },
            { conteudo: "Rede que só funciona via satélite.", correto: false },
            { conteudo: "Rede usada apenas em ambientes industriais.", correto: false },
            { conteudo: "Rede que opera apenas com fibra óptica.", correto: false }
        ],
        justificativa: "Redes sem fio utilizam ondas de rádio para transmitir dados entre dispositivos sem o uso de cabos.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual padrão IEEE define as redes Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "IEEE 802.11", correto: true },
            { conteudo: "IEEE 802.3", correto: false },
            { conteudo: "IEEE 802.15", correto: false },
            { conteudo: "IEEE 802.16", correto: false },
            { conteudo: "IEEE 802.1Q", correto: false }
        ],
        justificativa: "O padrão IEEE 802.11 define as especificações para redes locais sem fio (Wi-Fi).",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que significa a sigla SSID em uma rede Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "Service Set Identifier", correto: true },
            { conteudo: "Secure Signal Identification", correto: false },
            { conteudo: "System Server ID", correto: false },
            { conteudo: "Signal Strength ID", correto: false },
            { conteudo: "Service Signal Identifier", correto: false }
        ],
        justificativa: "SSID é o nome da rede sem fio que identifica um ponto de acesso para conexão.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é a frequência de operação mais comum das redes Wi-Fi domésticas?",
        arrayDeRespostas: [
            { conteudo: "2,4 GHz e 5 GHz", correto: true },
            { conteudo: "1,2 GHz e 3 GHz", correto: false },
            { conteudo: "10 GHz e 12 GHz", correto: false },
            { conteudo: "900 MHz e 1 GHz", correto: false },
            { conteudo: "7 GHz e 8 GHz", correto: false }
        ],
        justificativa: "Redes Wi-Fi operam principalmente nas bandas de 2,4 GHz e 5 GHz, dependendo do padrão.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual tecnologia é usada para criptografar dados em uma rede Wi-Fi moderna?",
        arrayDeRespostas: [
            { conteudo: "WPA3", correto: true },
            { conteudo: "WEP", correto: false },
            { conteudo: "SSL 2.0", correto: false },
            { conteudo: "TLS 1.0", correto: false },
            { conteudo: "PPP", correto: false }
        ],
        justificativa: "O WPA3 é o protocolo de segurança mais recente e seguro para redes sem fio.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é um ponto de acesso (Access Point)?",
        arrayDeRespostas: [
            { conteudo: "Dispositivo que permite a conexão de clientes sem fio a uma rede cabeada.", correto: true },
            { conteudo: "Roteador que apenas distribui endereços IP.", correto: false },
            { conteudo: "Antena passiva de sinal.", correto: false },
            { conteudo: "Firewall de rede local.", correto: false },
            { conteudo: "Servidor DNS interno.", correto: false }
        ],
        justificativa: "O ponto de acesso faz a ponte entre dispositivos sem fio e a rede cabeada.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é a principal diferença entre os padrões 802.11n e 802.11ac?",
        arrayDeRespostas: [
            { conteudo: "O 802.11ac opera apenas na faixa de 5 GHz e oferece maiores velocidades.", correto: true },
            { conteudo: "O 802.11n é mais rápido que o 802.11ac.", correto: false },
            { conteudo: "O 802.11ac utiliza apenas cabos de fibra óptica.", correto: false },
            { conteudo: "O 802.11n é exclusivo para redes corporativas.", correto: false },
            { conteudo: "O 802.11ac não suporta múltiplas antenas.", correto: false }
        ],
        justificativa: "O 802.11ac melhora a velocidade e desempenho usando 5 GHz e múltiplos fluxos de dados (MIMO).",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é o modo Ad-Hoc em redes sem fio?",
        arrayDeRespostas: [
            { conteudo: "Modo onde dispositivos se comunicam diretamente sem um ponto de acesso.", correto: true },
            { conteudo: "Modo exclusivo de roteadores corporativos.", correto: false },
            { conteudo: "Modo que requer autenticação WPA3 obrigatória.", correto: false },
            { conteudo: "Modo usado apenas para repetidores Wi-Fi.", correto: false },
            { conteudo: "Modo de operação via cabo Ethernet.", correto: false }
        ],
        justificativa: "No modo Ad-Hoc, os dispositivos se conectam diretamente uns aos outros sem precisar de um AP.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que significa a sigla WLAN?",
        arrayDeRespostas: [
            { conteudo: "Wireless Local Area Network", correto: true },
            { conteudo: "Wide Local Access Network", correto: false },
            { conteudo: "Wireless Link Access Node", correto: false },
            { conteudo: "Wide Link Adapter Network", correto: false },
            { conteudo: "Wireless LAN Access Name", correto: false }
        ],
        justificativa: "WLAN é uma rede local sem fio, equivalente à LAN, mas baseada em radiofrequência.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual protocolo é utilizado para obtenção automática de IP em redes Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "DHCP", correto: true },
            { conteudo: "DNS", correto: false },
            { conteudo: "FTP", correto: false },
            { conteudo: "HTTP", correto: false },
            { conteudo: "ICMP", correto: false }
        ],
        justificativa: "O protocolo DHCP fornece automaticamente endereços IP aos dispositivos conectados à rede.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é o Wi-Fi 6 (802.11ax)?",
        arrayDeRespostas: [
            { conteudo: "Padrão Wi-Fi que oferece maior velocidade, eficiência e menor latência.", correto: true },
            { conteudo: "Protocolo de criptografia para redes sem fio.", correto: false },
            { conteudo: "Nova versão do Bluetooth.", correto: false },
            { conteudo: "Tecnologia usada apenas em cabos ópticos.", correto: false },
            { conteudo: "Padrão de comunicação via satélite.", correto: false }
        ],
        justificativa: "O Wi-Fi 6 (802.11ax) melhora desempenho e estabilidade, mesmo com muitos dispositivos conectados.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é o MAC Filtering em um roteador sem fio?",
        arrayDeRespostas: [
            { conteudo: "Recurso que restringe o acesso à rede com base no endereço físico (MAC) dos dispositivos.", correto: true },
            { conteudo: "Protocolo de segurança avançado.", correto: false },
            { conteudo: "Método de compressão de pacotes de rede.", correto: false },
            { conteudo: "Técnica de modulação de frequência.", correto: false },
            { conteudo: "Serviço de distribuição automática de IP.", correto: false }
        ],
        justificativa: "O MAC Filtering controla quais dispositivos podem se conectar, usando o endereço físico de rede.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é a função de um repetidor Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "Ampliar o alcance do sinal da rede sem fio existente.", correto: true },
            { conteudo: "Bloquear interferências de outros sinais.", correto: false },
            { conteudo: "Fornecer endereços IP automaticamente.", correto: false },
            { conteudo: "Reduzir a potência do sinal de rádio.", correto: false },
            { conteudo: "Transformar uma rede cabeada em rede sem fio.", correto: false }
        ],
        justificativa: "O repetidor retransmite o sinal do roteador, expandindo a cobertura da rede sem fio.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é o principal tipo de interferência em redes Wi-Fi de 2,4 GHz?",
        arrayDeRespostas: [
            { conteudo: "Interferência de micro-ondas e telefones sem fio.", correto: true },
            { conteudo: "Interferência de cabos de rede.", correto: false },
            { conteudo: "Interferência de sinais de fibra óptica.", correto: false },
            { conteudo: "Ruído de tensão elétrica alternada.", correto: false },
            { conteudo: "Sinais de infravermelho.", correto: false }
        ],
        justificativa: "A faixa de 2,4 GHz é usada por diversos aparelhos domésticos, causando interferências.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que significa hotspot em redes sem fio?",
        arrayDeRespostas: [
            { conteudo: "Local onde há disponibilidade pública de conexão Wi-Fi.", correto: true },
            { conteudo: "Equipamento de roteamento cabeado.", correto: false },
            { conteudo: "Servidor de autenticação de rede.", correto: false },
            { conteudo: "Firewall de rede sem fio.", correto: false },
            { conteudo: "Modo de segurança WPA.", correto: false }
        ],
        justificativa: "Hotspot é uma área onde o acesso Wi-Fi é disponibilizado para usuários, como cafés e aeroportos.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é o protocolo WPS (Wi-Fi Protected Setup)?",
        arrayDeRespostas: [
            { conteudo: "Método de conexão rápida e simplificada a uma rede Wi-Fi segura.", correto: true },
            { conteudo: "Protocolo de autenticação avançada via certificado digital.", correto: false },
            { conteudo: "Sistema de criptografia WPA3.", correto: false },
            { conteudo: "Serviço de roteamento estático.", correto: false },
            { conteudo: "Aplicativo de monitoramento de rede.", correto: false }
        ],
        justificativa: "O WPS permite conectar dispositivos facilmente sem digitar a senha, mas pode ser vulnerável.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é o canal (channel) em uma rede Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "Faixa específica de frequência usada para transmissão de dados sem fio.", correto: true },
            { conteudo: "Número de IP usado pelo roteador.", correto: false },
            { conteudo: "Porta lógica usada para conexões HTTP.", correto: false },
            { conteudo: "Endereço MAC do roteador.", correto: false },
            { conteudo: "Nome da rede sem fio (SSID).", correto: false }
        ],
        justificativa: "Canais definem subdivisões da faixa de frequência Wi-Fi, usadas para reduzir interferências.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é o alcance típico de uma rede Wi-Fi em ambiente interno?",
        arrayDeRespostas: [
            { conteudo: "Entre 30 e 50 metros, dependendo das barreiras físicas.", correto: true },
            { conteudo: "Até 500 metros em qualquer condição.", correto: false },
            { conteudo: "Apenas 5 metros em locais abertos.", correto: false },
            { conteudo: "Mais de 1 quilômetro.", correto: false },
            { conteudo: "Apenas 10 metros fixos.", correto: false }
        ],
        justificativa: "O alcance interno varia de acordo com o padrão Wi-Fi e obstáculos como paredes.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é a principal vantagem do padrão 802.11ax (Wi-Fi 6) em relação ao 802.11ac?",
        arrayDeRespostas: [
            { conteudo: "Melhor desempenho em ambientes com muitos dispositivos conectados.", correto: true },
            { conteudo: "Maior consumo de energia.", correto: false },
            { conteudo: "Uso exclusivo da faixa de 2,4 GHz.", correto: false },
            { conteudo: "Velocidade reduzida para estabilidade.", correto: false },
            { conteudo: "Compatibilidade apenas com roteadores cabeados.", correto: false }
        ],
        justificativa: "O Wi-Fi 6 melhora a eficiência em locais com alta densidade de dispositivos.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é a autenticação 802.1X usada em redes sem fio corporativas?",
        arrayDeRespostas: [
            { conteudo: "Mecanismo que integra servidor RADIUS para controle de acesso à rede.", correto: true },
            { conteudo: "Protocolo de roteamento dinâmico.", correto: false },
            { conteudo: "Serviço de alocação de IP.", correto: false },
            { conteudo: "Técnica de compressão de dados Wi-Fi.", correto: false },
            { conteudo: "Método de criptografia WPA2.", correto: false }
        ],
        justificativa: "O 802.1X autentica usuários via servidor RADIUS, reforçando a segurança em redes corporativas.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que significa a sigla WPA em redes Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "Wi-Fi Protected Access", correto: true },
            { conteudo: "Wireless Packet Adapter", correto: false },
            { conteudo: "Wide Protected Area", correto: false },
            { conteudo: "Wireless Privacy Algorithm", correto: false },
            { conteudo: "Wi-Fi Public Access", correto: false }
        ],
        justificativa: "WPA é o protocolo de segurança que substituiu o WEP, oferecendo criptografia mais robusta.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é a principal desvantagem do protocolo WEP?",
        arrayDeRespostas: [
            { conteudo: "Apresenta vulnerabilidades graves e pode ser facilmente quebrado.", correto: true },
            { conteudo: "É incompatível com dispositivos modernos.", correto: false },
            { conteudo: "Requer senha longa demais para configuração.", correto: false },
            { conteudo: "Funciona apenas em redes 5G.", correto: false },
            { conteudo: "Não permite compartilhamento de internet.", correto: false }
        ],
        justificativa: "O WEP usa criptografia fraca e não oferece proteção adequada contra invasões.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é a função do modo 'bridge' em um roteador sem fio?",
        arrayDeRespostas: [
            { conteudo: "Conectar duas redes diferentes, permitindo comunicação entre elas.", correto: true },
            { conteudo: "Bloquear dispositivos desconhecidos.", correto: false },
            { conteudo: "Atuar como firewall da rede local.", correto: false },
            { conteudo: "Distribuir endereços IP automaticamente.", correto: false },
            { conteudo: "Aumentar o número de SSIDs disponíveis.", correto: false }
        ],
        justificativa: "O modo bridge conecta duas redes, permitindo que elas compartilhem recursos.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Em uma rede Wi-Fi, qual é a finalidade do modo 'repetidor'?",
        arrayDeRespostas: [
            { conteudo: "Ampliar o sinal de outra rede sem fio existente.", correto: true },
            { conteudo: "Criar um novo SSID isolado.", correto: false },
            { conteudo: "Desativar a transmissão de pacotes.", correto: false },
            { conteudo: "Converter sinal Wi-Fi em Bluetooth.", correto: false },
            { conteudo: "Alterar o canal de frequência.", correto: false }
        ],
        justificativa: "O repetidor estende o alcance do sinal original, melhorando cobertura.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual é a função do protocolo RADIUS em redes sem fio empresariais?",
        arrayDeRespostas: [
            { conteudo: "Autenticar e autorizar usuários centralizadamente.", correto: true },
            { conteudo: "Atribuir endereços IP automaticamente.", correto: false },
            { conteudo: "Definir rotas de comunicação entre APs.", correto: false },
            { conteudo: "Gerar logs de tráfego HTTP.", correto: false },
            { conteudo: "Bloquear acesso a sites não seguros.", correto: false }
        ],
        justificativa: "O RADIUS é amplamente usado para autenticação segura de usuários corporativos.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é 'roaming' em redes Wi-Fi corporativas?",
        arrayDeRespostas: [
            { conteudo: "Capacidade de um dispositivo mudar de ponto de acesso sem perder a conexão.", correto: true },
            { conteudo: "Criação de redes paralelas de backup.", correto: false },
            { conteudo: "Configuração de IPs estáticos.", correto: false },
            { conteudo: "Conexão automática a redes públicas.", correto: false },
            { conteudo: "Limitação de largura de banda.", correto: false }
        ],
        justificativa: "O roaming permite movimentação contínua do usuário entre diferentes pontos de acesso.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é o MIMO em redes Wi-Fi modernas?",
        arrayDeRespostas: [
            { conteudo: "Uso de múltiplas antenas para transmissão e recepção simultânea de dados.", correto: true },
            { conteudo: "Método de compressão de pacotes.", correto: false },
            { conteudo: "Sistema de backup automático de rede.", correto: false },
            { conteudo: "Protocolo de autenticação de usuários.", correto: false },
            { conteudo: "Algoritmo de segurança WPA.", correto: false }
        ],
        justificativa: "O MIMO (Multiple Input, Multiple Output) melhora velocidade e confiabilidade da comunicação sem fio.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é o QoS (Quality of Service) em redes Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "Mecanismo que prioriza determinados tipos de tráfego, como voz e vídeo.", correto: true },
            { conteudo: "Protocolo de roteamento estático.", correto: false },
            { conteudo: "Serviço de autenticação de usuários.", correto: false },
            { conteudo: "Sistema de criptografia avançada.", correto: false },
            { conteudo: "Técnica de economia de energia.", correto: false }
        ],
        justificativa: "O QoS assegura qualidade em aplicações sensíveis à latência, como chamadas e streaming.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Em redes Wi-Fi, o termo 'band steering' refere-se a:",
        arrayDeRespostas: [
            { conteudo: "Técnica que direciona dispositivos para a banda mais adequada (2,4 ou 5 GHz).", correto: true },
            { conteudo: "Protocolo de roteamento dinâmico.", correto: false },
            { conteudo: "Modo de operação do WPS.", correto: false },
            { conteudo: "Sistema de autenticação dupla.", correto: false },
            { conteudo: "Técnica de compressão de pacotes TCP.", correto: false }
        ],
        justificativa: "Band steering ajuda a balancear o uso entre as bandas de 2,4 GHz e 5 GHz, otimizando o desempenho.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Por que o WPA3 é considerado mais seguro que o WPA2?",
        arrayDeRespostas: [
            { conteudo: "Utiliza criptografia mais forte e proteção contra ataques de dicionário.", correto: true },
            { conteudo: "Dispensa autenticação de usuários.", correto: false },
            { conteudo: "Opera apenas na banda de 2,4 GHz.", correto: false },
            { conteudo: "Funciona sem necessidade de senha.", correto: false },
            { conteudo: "É compatível apenas com redes cabeadas.", correto: false }
        ],
        justificativa: "O WPA3 introduz criptografia individual e autenticação mais robusta, aumentando a segurança.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "O que é 'hidden SSID' em uma rede Wi-Fi?",
        arrayDeRespostas: [
            { conteudo: "Configuração que oculta o nome da rede, dificultando sua detecção.", correto: true },
            { conteudo: "Protocolo de segurança avançado.", correto: false },
            { conteudo: "Canal de transmissão exclusivo.", correto: false },
            { conteudo: "Modo de conexão via cabo.", correto: false },
            { conteudo: "Função que aumenta a potência do sinal.", correto: false }
        ],
        justificativa: "Ocultar o SSID pode adicionar uma camada básica de privacidade, embora não substitua a criptografia.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
    },
    {
        enunciado: "Qual ferramenta é usada para analisar redes Wi-Fi e verificar canais disponíveis?",
        arrayDeRespostas: [
            { conteudo: "Wireshark", correto: true },
            { conteudo: "PuTTY", correto: false },
            { conteudo: "Nmap", correto: false },
            { conteudo: "FileZilla", correto: false },
            { conteudo: "VirtualBox", correto: false }
        ],
        justificativa: "O Wireshark permite capturar e analisar pacotes de rede, inclusive redes Wi-Fi.",
        categoriaDaPergunta: "tecnico-de-informatica-redes-sem-fio"
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
 * microsoft-word
 * microsoft-excel
 * microsoft-powerpoint
 * sistema-operacional-windows
 * ferramentas-aplicativas
 * pacote-office-e-similares
 * navegadores-de-internet
 * correio-eletronico-email
 * softwares-utilitarios
 * seguranca-da-informacao
 * sistemas-operacionais-e-interfaces
 * inteligencia-artificial-e-ferramentas-online
 * internet
 * intranet
 * extranet
 * seguranca-em-redes
 * introducao-sobre-internet-e-intranet
 * conceitos-fundamentais (sobre organização e gerenciamento de informacoes)
 * gestao-documental
 * principios-arquivisticos
 * fases-da-gestao-documental-e-niveis-de-aplicacao
 * modelos-de-gestao-documental-e-gestao-de-arquivos-correntes
 * ciclo-de-vida-da-informacao
 * sistemas-da-informacao
 * seguranca-da-informacao
 * dicas (sobre organização e gerenciamento de informacoes)
 * assinatura-digital
 * infraestrutura-de-chaves-publicas-brasileira
 * vantagens-da-certificacao-e-assinatura-digital
 * diferencas-cruciais-entre-assinatura-eletronica-e-assinatura-digital
 * legislacao-pertinente
 * aspectos-gerais(segurança-da-informação)
 * principios-da-seguranca-da-informacao
 * criptologia
 * autenticacao (seguranca da informação)
 * assinatura-digital-e-certificado-digital
 * seguranca-da-informacao-na-informatica-awari
 * ataques-e-ameacas-em-seguranca-da-informacao
 * tipos-de-malware
 * 
 * definicao-e-importancia-sobre-postura-profissional
 * zelo-eficiencia-imparcialidade-impessoalidade-disciplina-e-assiduidade
 * apresentacao-pessoal
 * definicao-e-importancia-no-ambiente-de-trabalho
 * habilidades-essencias-para-boas-relacoes-interpessoais
 * tipos-de-documentos-oficiais
 * caracteristicas-dos-documentos-oficiais
 * estrutura-dos-documentos-oficiais
 * regras-de-redacao-oficial
 * regime-juridico-administrativo
 * regras-x-principios
 * forca-normativa-dos-principios-da-administracao-publica
 * principios-expressos-limpe
 * principios-implicitos
 * outras-classificacoes-dos-principios-da-administracao-publica
 * nocoes-basicas-sobre-administracao-publica
 * administracao-geral
 * arquivamento-e-gestao-de-documentos
 * administracao-de-material
 * licitacoes-e-contratos-administrativos
 * nocoes-de-direito-administrativo
 * nocoes-de-planejamento-orcamento-e-financas-publicas
 * regime-juridico-unico-e-seguridade-social-do-servidor-publico
 * lei-geral-de-protecao-de-dados-pessoais
 * qualidade-e-eficiencia-no-serviço-publico
 * conceito-de-servico-publico
 * principios-da-administracao-publica
 * principios-especificos-dos-servicos-publicos
 * classificacao-dos-servicos-publicos
 * formas-de-prestacao-dos-servicos-publicos
 * ato-administrativo
 * elementos-essenciais-do-ato-administrativo
 * atributos-dos-atos-administrativos
 * classificacao-dos-atos-administrativos
 * vicios-dos-atos-administrativos
 * extincao-dos-atos-administrativos
 * anulacao-e-revogacao
 * conceito-de-contratos-administrativos
 * caracteristicas-dos-contratos-administrativos
 * tipos-de-contratos-administrativos
 * fases-da-contratacao-administrativa
 * clausulas-exorbitantes
 * extincao-dos-contratos-administrativos
 * sancoes-administrativas
 * licitações-e-seus-principios
 * lei-14133/2021
 * deveres-do-servidor
 * proibicoes-dos-servidores
 * responsabilidades-dos-servidores
 * sancoes-disciplinares-dos-servidores
 * acumulacao-de-cargos-dos-servidores
 * prescricao-de-infracoes-dos-servidores
 */