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
 */