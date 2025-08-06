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
 */