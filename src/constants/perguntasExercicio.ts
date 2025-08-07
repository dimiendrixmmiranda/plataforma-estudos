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
 */