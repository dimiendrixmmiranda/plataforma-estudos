const informatica = {
    titulo: `Informática Básica`,
    introducao: `Para esse concurso, as principais textos a serem estudadas são:`,
    materias: [
        {
            texto: 'Informática Básica',
            id: 'informatica-basica',
            introducao: `Abrange os conceitos fundamentais da computação, como funcionamento de computadores, hardware, software, tipos de arquivos, sistemas de entrada e saída, e noções gerais de uso de tecnologias digitais no cotidiano.`
        },
        {
            texto: 'Edição de Textos, Planilhas e Apresentações',
            id: 'edicao-de-textos-planilhas-e-apresentacoes',
            introducao: `Trata do uso prático de softwares como Word, Excel e PowerPoint (ou equivalentes), abordando recursos essenciais para criar, editar e formatar documentos, planilhas e apresentações.`
        },
        {
            texto: 'Ambiente Microsoft Office',
            id: 'ambiente-microsoft-office',
            introducao: `Envolve o domínio do pacote Microsoft Office como um todo, com foco na integração entre os programas, atalhos, menus, funcionalidades comuns e boas práticas no uso profissional dos aplicativos.`
        },
        {
            texto: 'Sistema Operacional Windows',
            id: 'sistema-operacional-windows',
            introducao: `Apresenta o funcionamento e a navegação no sistema Windows, incluindo gerenciamento de arquivos e pastas, configurações básicas, área de trabalho, Painel de Controle e principais ferramentas do sistema.`
        },
        {
            texto: 'Internet e Intranet',
            id: 'internet-e-intranet',
            introducao: `Explora os conceitos de redes, especialmente o funcionamento da Internet e da Intranet, além de práticas de navegação segura, uso de navegadores, buscadores e recursos básicos da comunicação online.`
        },
        {
            texto: 'Tecnologias e Ferramentas Aplicativas',
            id: 'tecnologias-e-ferramentas-aplicativas',
            introducao: `Aborda ferramentas tecnológicas úteis no ambiente de trabalho e estudo, como editores online, aplicativos colaborativos, armazenamento em nuvem e soluções digitais aplicadas à produtividade.`
        },
        {
            texto: 'Organizacao e Gerenciamento de Informacoes',
            id: 'organizacao-e-gerenciamento-de-informacoes',
            introducao: `Foca em métodos para classificar, armazenar e recuperar informações de forma eficiente, utilizando sistemas de arquivos, bancos de dados simples, pastas e ferramentas organizacionais.`
        },
        {
            texto: 'Certificação de Assinatura Digital',
            id: 'certificacao-e-assinatura-digital',
            introducao: `Explica o que são certificados digitais, como funcionam as assinaturas eletrônicas e sua validade jurídica, além do papel da criptografia e das autoridades certificadoras.`
        },
        {
            texto: 'Segurança da Informação',
            id: 'seguranca-da-informacao',
            introducao: `Trata dos princípios de proteção de dados, como confidencialidade, integridade e disponibilidade, além de ameaças cibernéticas, antivírus, senhas seguras e boas práticas de segurança digital.`
        },
    ],
    // Materias individuais
    ['edicao-de-textos-planilhas-e-apresentacoes']: {
        titulo: 'Edição de Textos, Planilhas e Apresentações',
        id: 'edicao-de-textos-planilhas-e-apresentacoes',
        introducao: [
            `O domínio de ferramentas voltadas à criação de textos, planilhas e apresentações é indispensável no ambiente profissional e acadêmico. Esses programas permitem elaborar documentos organizados, manipular dados com eficiência e desenvolver apresentações visuais de impacto.`,
            `Compreender sua estrutura e funcionalidades possibilita uma comunicação mais clara, o gerenciamento preciso de informações e a apresentação de conteúdos de forma atrativa e adequada a diferentes contextos de uso.`
        ],
        submaterias: [
            {
                texto: 'Edição de Textos',
                id: 'edicao-de-textos',
                introducao: 'Consiste na criação e formatação de documentos, com foco em clareza, organização e apresentação adequada das informações.',
                explicacao: [
                    `Edição de textos envolve criar, modificar, formatar e revisar documentos escritos, geralmente usando programas como o Microsoft Word.`,
                    `Os principais recursos incluem: Principais Recursos: Digitação e correção ortográfica (você digita o texto e o programa identifica erros ortográficos e gramaticais), Formatação de fonte (mudar o tipo de letra (ex: Arial, Times), tamanho, cor, negrito, itálico e sublinhado). Parágrafos (ajustar alinhamento (esquerda, centro, direita, justificado), espaçamento entre linhas e recuos), Listas e marcadores (criar listas com símbolos (•) ou numerações (1, 2, 3), Inserção de elementos (como imagens, tabelas, cabeçalhos, rodapés, números de página, links e símbolos), Salvamento e impressão (salvar em diferentes formatos (.docx, .pdf) e configurar margens, orientação da página e layout antes de imprimir).`,
                    `Um exemplo prático seria criar um currículo no Word, com seu nome centralizado e em negrito, uma tabela com formação acadêmica e uma lista com suas experiências profissionais.`
                ],
                video: {
                    titulo: `Edição de textos`,
                    linkDoCanal: 'https://www.youtube.com/@romiltonjunior',
                    idVideo: '6RaQvloZGkI'
                },
                dicas: {
                    atalhos: [
                        {
                            atalho: 'CTRL + C',
                            funcao: 'Copiar'
                        },
                        {
                            atalho: 'CTRL + V',
                            funcao: 'Colar'
                        },
                        {
                            atalho: 'CTRL + X',
                            funcao: 'Recortar'
                        },
                        {
                            atalho: 'CTRL + Z',
                            funcao: 'Desfazer'
                        },
                        {
                            atalho: 'CTRL + A',
                            funcao: 'Selecionar Tudo'
                        },
                        {
                            atalho: 'CTRL + P',
                            funcao: 'Imprimir'
                        },
                    ],
                    tipoDeExtesao: '.docx e .pdf',
                }
            },
            {
                texto: 'Edição de Planilhas',
                id: 'edicao-de-planilhas',
                introducao: 'Envolve a organização e análise de dados por meio de cálculos, tabelas e gráficos, facilitando o controle de informações.',
                explicacao: [
                    `Edição de planilhas consiste no uso de programas como o Microsoft Excel para organizar e analisar dados, geralmente em forma de tabelas.`,
                    `Os principais recursos incluem: Células (são os espaços onde você insere os dados (números, textos, fórmulas)), Linhas e colunas (ajudam a estruturar os dados de forma clara), Fórmulas e funções (fazem cálculos automáticos (ex: =SOMA(A1:A5), =MÉDIA(B1:B10))), Formatação condicional (muda a cor da célula dependendo do valor (ex: vermelha se for negativa)), Gráficos (transformar dados em gráficos de colunas, pizza, linhas etc.), Filtros e classificações (para organizar grandes volumes de dados por ordem alfabética, por valor, por data, etc).`,
                    `Um exemplo prático seria montar uma planilha de controle financeiro com colunas para “Data”, “Descrição”, “Valor” e usar a função =SOMA() para saber quanto você gastou no mês.`
                ],
                video: {
                    titulo: `Edição de textos`,
                    linkDoCanal: 'https://www.youtube.com/@romiltonjunior',
                    idVideo: 'dzhA9mauj_o'
                },
                dicas: {
                    atalhos: [
                        {
                            atalho: 'CTRL + ;',
                            funcao: 'Inserir data atual'
                        },
                        {
                            atalho: 'CTRL + SHIFT + $',
                            funcao: 'Formato moeda'
                        },
                        {
                            atalho: 'CTRL + SHIFT + %',
                            funcao: 'Formato percentual'
                        },
                    ],
                    tipoDeExtesao: '.xlsx',
                }
            },
            {
                texto: 'Edição de Apresentações',
                id: 'edicao-de-apresentacoes',
                introducao: 'Refere-se à criação de slides claros e objetivos, usados para comunicar informações de forma visual e estruturada.',
                explicacao: [
                    `Edição de apresentações envolve a criação de slides com conteúdo visual e textual para apresentações orais, usando o Microsoft PowerPoint.`,
                    `Os principais recursos incluem: Slides (cada página da apresentação é um slide, que pode conter textos, imagens, gráficos, vídeos e tabelas), Modelos e temas (são layouts prontos que deixam a apresentação mais profissional), Transições (efeitos de entrada e saída entre os slides), Animações (efeitos para os elementos do slide, como texto ou imagens (ex: aparecer lentamente)), Modo de exibição (alternar entre modo de edição, apresentação de slides, visualização de anotações, etc), Anotações (espaço reservado para o apresentador escrever lembretes visíveis apenas por ele)`,
                    `Um exemplo pratico seria criar uma apresentação escolar com 5 slides, cada um com um título, uma imagem, um pequeno texto explicativo e transições suaves entre eles.`
                ],
                video: {
                    titulo: `Edição de textos`,
                    linkDoCanal: 'https://www.youtube.com/@MarcelRios',
                    idVideo: 'et2qWWa0kTA'
                },
                dicas: {
                    atalhos: [
                        {
                            atalho: 'f5',
                            funcao: 'Iniciar a apresentação'
                        },
                        {
                            atalho: 'ESC',
                            funcao: 'Encerrar apresentação'
                        },
                        {
                            atalho: 'CTRL + M',
                            funcao: 'Novo slide'
                        },
                    ],
                    tipoDeExtesao: '.pptx',
                }
            },
        ]
    },
    ['ambiente-microsoft-office']: {
        titulo: 'Ambiente Microsoft Office',
        id: 'ambiente-microsoft-office',
        introducao: [
            `O Microsoft Office é uma suíte de aplicativos de escritório desenvolvida pela Microsoft, amplamente utilizada em ambientes corporativos e governamentais.`,
            `Para concursos, é fundamental conhecer as funcionalidades básicas e avançadas dos seus principais programas: Word, Excel e PowerPoint.`,
            `Embora as versões mais recentes (Office 365, 2019, 2021) sejam as mais prováveis de serem cobradas, é importante ter uma noção das diferenças e semelhanças com versões anteriores (como 2010, 2013, 2016), pois algumas bancas ainda podem abordar conceitos mais antigos ou genéricos.`
        ],
        submaterias: [
            {
                texto: 'Microsoft Word',
                id: 'microsoft-word',
                introducao: 'O Microsoft Word é o editor de texto mais popular do mercado e, por isso, suas funcionalidades são frequentemente exploradas em provas de concurso público. Dominar seus recursos é essencial para quem deseja se sair bem nessas avaliações, especialmente porque os exames costumam cobrar uma variedade de tópicos relacionados ao uso da ferramenta.',
                explicacao: [
                    `Um dos temas mais recorrentes é a formatação de texto e parágrafo, que inclui o uso de diferentes fontes, tamanhos e estilos como negrito, itálico e sublinhado. Também entram nesse assunto o alinhamento de textos (à esquerda, à direita, centralizado ou justificado), espaçamento entre linhas e parágrafos, recuos, além da utilização de marcadores e numeração.`,
                    `Outro tópico bastante abordado é o uso de estilos, que permite aplicar e modificar formatações predefinidas para padronizar o visual dos documentos. Isso facilita a organização do conteúdo e a criação de documentos profissionais.`,
                    `A inserção de cabeçalho e rodapé também é cobrada, pois permite adicionar informações repetidas automaticamente em todas as páginas, como número de página, nome do autor, título do documento, entre outros dados úteis.`,
                    `O recurso de quebras (de página, de coluna e de seção) é essencial para a estruturação do documento. Saber utilizá-las corretamente influencia diretamente na organização e na formatação do texto, especialmente quando se trabalha com documentos longos e divididos em partes distintas.`,
                    `O uso de tabelas é outro ponto importante. É necessário saber como criar, editar e formatar tabelas, mesclar e dividir células, além de inserir ou excluir linhas e colunas conforme a necessidade do conteúdo. Além disso, o Word permite a inserção de imagens e formas, que podem ser redimensionadas, reposicionadas e formatadas de diversas maneiras. Um conhecimento comum exigido em concursos é o uso adequado da quebra automática de texto ao redor desses objetos.`,
                    `Na aba de revisão, os recursos mais exigidos são a verificação ortográfica e gramatical, o uso do dicionário de sinônimos e a contagem de palavras, essenciais para garantir a qualidade final do texto. Os modos de exibição do Word também são cobrados. Entre eles, destacam-se o layout de impressão, o modo de leitura, o layout da Web, a estrutura de tópicos e o modo rascunho. Cada um desses modos serve a diferentes finalidades durante a criação e a revisão do documento.`,
                    `Os modos de exibição do Word também são cobrados. Entre eles, destacam-se o layout de impressão, o modo de leitura, o layout da Web, a estrutura de tópicos e o modo rascunho. Cada um desses modos serve a diferentes finalidades durante a criação e a revisão do documento.`,
                    `A configuração de página é importante para definir como o documento será impresso. Isso inclui ajustes de margens, orientação da página (retrato ou paisagem), tamanho do papel e a divisão do conteúdo em colunas.`,
                    `Na parte de impressão, é fundamental conhecer as opções disponíveis, como a visualização de impressão e as configurações específicas para escolher quais páginas serão impressas, qual impressora utilizar, entre outros detalhes.`,
                    `Por fim, os atalhos de teclado são um recurso que acelera diversas tarefas no Word, e conhecê-los pode fazer a diferença em provas que exigem agilidade. Além disso, é importante saber utilizar recursos avançados, como a mala direta para criação de documentos personalizados em massa, o controle de alterações e comentários para revisão colaborativa, e as opções de proteção de documentos, que envolvem o uso de senhas e restrições de edição.`
                ],
                video: {
                    titulo: `Microsoft Word`,
                    linkDoCanal: 'https://www.youtube.com/@qconcursosvideos',
                    idVideo: 'cP_1ShdnkHU'
                },
                dicas: {
                    atalhos: [
                        {
                            atalho: 'CTRL + C',
                            funcao: 'Copiar'
                        },
                        {
                            atalho: 'CTRL + X',
                            funcao: 'Recortar'
                        },
                        {
                            atalho: 'CTRL + V',
                            funcao: 'Colar'
                        },
                        {
                            atalho: 'CTRL + Z',
                            funcao: 'Desfazer'
                        },
                        {
                            atalho: 'CTRL + Y',
                            funcao: 'Refazer'
                        },
                        {
                            atalho: 'CTRL + B',
                            funcao: 'Negrito'
                        },
                        {
                            atalho: 'CTRL + I',
                            funcao: 'Italico'
                        },
                        {
                            atalho: 'CTRL + U',
                            funcao: 'Sublinhado'
                        },
                        {
                            atalho: 'CTRL + P',
                            funcao: 'Imprimir'
                        },
                        {
                            atalho: 'CTRL + O',
                            funcao: 'Abrir'
                        },
                        {
                            atalho: 'CTRL + S',
                            funcao: 'Salvar'
                        },
                        {
                            atalho: 'CTRL + A',
                            funcao: 'Selecionar Tudo'
                        },
                        {
                            atalho: 'CTRL + L',
                            funcao: 'Localizar'
                        },
                        {
                            atalho: 'CTRL + K',
                            funcao: 'Hiperlink'
                        },
                    ],
                    tipoDeExtesao: '.docx e .pdf',
                }
            },
            {
                texto: 'Microsoft Excel',
                id: 'microsoft-excel',
                introducao: 'O Microsoft Excel é a ferramenta de planilhas eletrônicas mais utilizada no mundo, sendo amplamente cobrada em concursos públicos. As questões costumam envolver a criação e manipulação de dados, com foco em fórmulas, funções e organização das informações.',
                explicacao: [
                    `Um dos primeiros conceitos que o candidato deve dominar é o uso de células, linhas e colunas, incluindo suas referências (relativas, absolutas e mistas), além de saber como inserir, excluir e redimensionar esses elementos de maneira adequada.`,
                    `A formatação de células também é bastante cobrada. Isso inclui a aplicação de formatos para números, moedas, datas, porcentagens, além de alinhamento de conteúdo, aplicação de bordas, cores de preenchimento e outras características visuais que ajudam a organizar e destacar as informações.`,
                    `O uso de fórmulas e funções é um dos tópicos mais importantes. O candidato deve conhecer funções básicas e intermediárias como SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.SE, SE, PROCV, PROCH, AGORA, HOJE, CONCATENAR, ARRED, INT, entre outras. Entender a sintaxe dessas funções e saber como aplicá-las corretamente é essencial.`,
                    `Outro ponto comum nas provas é a criação e edição de gráficos. É preciso conhecer os principais tipos, como gráficos de colunas, barras, pizza e linhas, além de saber como personalizá-los para apresentar dados de forma visual e clara.`,
                    `A classificação e filtragem de dados é fundamental para organizar grandes volumes de informações. Saber aplicar filtros e ordenar os dados em ordem crescente ou decrescente facilita análises e respostas rápidas em planilhas complexas. O recurso de congelar painéis também é útil em planilhas extensas. Ele permite fixar determinadas linhas ou colunas para facilitar a navegação sem perder a referência das informações principais.`,
                    `A validação de dados é outra ferramenta poderosa do Excel. Ela permite restringir os tipos de dados que podem ser inseridos em determinadas células, evitando erros e garantindo maior consistência nos registros. Na parte de impressão, o candidato deve saber como configurar corretamente a área de impressão, ajustar quebras de página e inserir cabeçalhos e rodapés específicos para obter uma apresentação adequada dos dados em papel.`,
                    `Conhecer os atalhos de teclado mais usados para navegação e edição de planilhas pode garantir mais agilidade no uso do Excel, e também aparece em questões que testam produtividade.`,
                    `Por fim, o Excel possui recursos avançados, como as tabelas dinâmicas (PivotTable), que permitem resumir grandes quantidades de dados de forma interativa, e o uso básico de macros, que automatizam tarefas repetitivas utilizando conceitos introdutórios de VBA (Visual Basic for Applications), sem exigir aprofundamento em programação.`
                ],
                video: {
                    titulo: `Microsoft Excel`,
                    linkDoCanal: 'https://www.youtube.com/@BravoConcursos',
                    idVideo: 'JW2zqt4JG90'
                },
                dicas: {
                    atalhos: [
                        {
                            atalho: 'SOMA(intervalo)',
                            funcao: 'Soma os valores de um intervalo.'
                        },
                        {
                            atalho: 'MÉDIA(intervalo)',
                            funcao: 'Calcula a média dos valores.'
                        },
                        {
                            atalho: 'MÁXIMO(intervalo)',
                            funcao: 'Retorna o maior valor.'
                        },
                        {
                            atalho: 'MÍNIMO(intervalo)',
                            funcao: 'Retorna o menor valor.'
                        },
                        {
                            atalho: 'CONT.NÚM(intervalo)',
                            funcao: 'Conta o número de células que contêm números.'
                        },
                        {
                            atalho: 'CONT.VALORES(intervalo)',
                            funcao: 'Conta o número de células não vazias.'
                        },
                        {
                            atalho: 'CONT.SE(intervalo; critério)',
                            funcao: 'Conta o número de células que atendem a um critério.'
                        },
                        {
                            atalho: 'SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)',
                            funcao: 'Retorna um valor se a condição for verdadeira e outro se for falsa.'
                        },
                        {
                            atalho: 'PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; [intervalo_pesquisa])',
                            funcao: 'Procura um valor na primeira coluna de uma tabela e retorna um valor na mesma linha de uma coluna especificada.'
                        },
                        {
                            atalho: 'PROCH(valor_procurado; matriz_tabela; núm_índice_linha; [intervalo_pesquisa])',
                            funcao: 'Similar ao PROCV, mas procura na primeira linha.'
                        },
                        {
                            atalho: 'AGORA()',
                            funcao: 'Retorna a data e hora atuais.'
                        },
                        {
                            atalho: 'HOJE()',
                            funcao: 'Retorna a data atual.'
                        },
                        {
                            atalho: 'ARRED(número; núm_casas)',
                            funcao: 'Arredonda um número para um número especificado de casas decimais.'
                        },
                        {
                            atalho: 'INT(número)',
                            funcao: 'Arredonda um número para o inteiro mais próximo para baixo.'
                        },
                    ],
                    tipoDeExtesao: '.xls, .xlsx e .ods',
                }
            },
            {
                texto: 'Microsoft PowerPoint',
                id: 'microsoft-powerpoint',
                introducao: 'O PowerPoint é o software mais utilizado para a criação de apresentações e também costuma aparecer com frequência em concursos públicos. As questões relacionadas a ele geralmente envolvem a estrutura dos slides, o uso de elementos visuais, os modos de exibição e a configuração da apresentação.',
                explicacao: [
                    `A estrutura da apresentação é um dos primeiros conceitos que o candidato deve compreender. Isso envolve o uso de slides individuais, a escolha de layouts de slide (modelos pré-definidos para organizar conteúdo), o uso do slide mestre (modelo principal que define o padrão visual de todos os slides) e a divisão da apresentação em seções, que ajuda a organizar melhor os temas abordados.`,
                    `Outro ponto essencial é a inserção de conteúdo, como textos, imagens, formas, gráficos, tabelas, vídeos e áudios. Esses elementos enriquecem a apresentação e tornam a comunicação visual mais clara e atrativa. No quesito design e formatação, é importante conhecer o uso de temas prontos, personalização de planos de fundo, combinação de cores, seleção de fontes adequadas e alinhamento dos objetos nos slides para garantir uma apresentação visualmente coerente e profissional.`,
                    `As transições dizem respeito aos efeitos aplicados entre um slide e outro, enquanto as animações são os efeitos aplicados aos elementos dentro do slide, como entradas, saídas, ênfase e trajetórias de movimento. Saber aplicar esses recursos com equilíbrio é essencial para manter a atenção da audiência sem exageros.`,
                    `O PowerPoint também oferece diferentes modos de exibição, como o modo normal (edição principal), estrutura de tópicos (foco no conteúdo textual), classificação de slides (visualização em miniatura para reorganização), página de anotações (espaço para observações do apresentador), modo de leitura e o modo de apresentação de slides, que é a visualização final da apresentação em tela cheia.`,
                    `Durante a apresentação de slides, o usuário deve saber como iniciar a apresentação, navegar entre os slides, ocultar slides específicos (sem excluí-los), e utilizar o recurso de ensaio de tempos, que permite definir automaticamente o tempo de exibição de cada slide.`,
                    `O conhecimento dos atalhos de teclado também é cobrado, principalmente os que agilizam a criação dos slides e a execução da apresentação. Por fim, as configurações de apresentação incluem ajustes como a resolução da tela, modo de exibição em tela cheia ou janela, e a ativação do loop contínuo, ideal para apresentações que serão exibidas automaticamente em eventos ou estandes.`
                ],
                video: {
                    titulo: `Microsoft Power Point`,
                    linkDoCanal: 'https://www.youtube.com/@romiltonjunior',
                    idVideo: 'sExv_jruND4'
                },
                dicas: {
                    atalhos: [
                        {
                            atalho: 'F5',
                            funcao: 'Iniciar apresentação do começo.'
                        },
                        {
                            atalho: 'Shift + F5',
                            funcao: 'Iniciar apresentação do slide atual.'
                        },
                        {
                            atalho: 'N ou Page Down',
                            funcao: 'Próximo slide.'
                        },
                        {
                            atalho: 'P ou Page Up',
                            funcao: 'Slide anterior.'
                        },
                        {
                            atalho: 'Esc',
                            funcao: 'Finalizar apresentação.'
                        },
                        {
                            atalho: 'Ctrl + M',
                            funcao: 'Inserir novo slide.'
                        },
                        {
                            atalho: 'Ctrl + D',
                            funcao: 'Duplicar slide ou objeto.'
                        },
                    ],
                    tipoDeExtesao: '.pptx',
                }
            },
        ]
    },
    ['sistema-operacional-windows']: {
        titulo: 'Sistema Operacional Windows',
        id: 'sistema-operacional-windows',
        introducao: [
            `Um sistema operacional (SO) é o software mais importante de um computador. Ele gerencia o hardware e o software do computador, permitindo que os programas sejam executados e que o usuário interaja com a máquina. O Windows, desenvolvido pela Microsoft, é o SO dominante no mercado de computadores pessoais.`,
            `Para concursos, as versões mais recentes do Windows (Windows 10 e Windows 11) são as mais prováveis de serem cobradas. No entanto, é importante ter uma compreensão dos conceitos fundamentais que se aplicam a todas as versões, bem como as principais novidades e diferenças entre elas.`
        ],
        submaterias: [
            {
                texto: 'Conceitos Básicos',
                id: 'conceitos-basicos',
                introducao: 'O Sistema Operacional é o software que gerencia o funcionamento do computador, atuando como intermediário entre o usuário e a máquina. Suas funções principais envolvem o controle de processos, memória, arquivos, dispositivos e a interface com o usuário. O Windows é um exemplo de sistema operacional com interface gráfica, permitindo interação por meio de ícones e janelas.',
                explicacao: [
                    `Um Sistema Operacional (SO) é o software essencial que gerencia todos os recursos de hardware e software de um computador. Ele funciona como uma ponte entre o usuário e a máquina, permitindo que os programas sejam executados de forma organizada e que o usuário consiga interagir com o sistema de maneira eficiente.`,
                    `Entre as funções principais de um sistema operacional, destaca-se o gerenciamento de processos, que envolve a alocação dos recursos do processador para os diversos programas em execução. Outra função crucial é o gerenciamento de memória, responsável por controlar como a memória RAM é usada pelos aplicativos em uso, garantindo estabilidade e desempenho.`,
                    `O sistema operacional também realiza o gerenciamento de arquivos, organizando e controlando o acesso a arquivos e pastas armazenados nos dispositivos de armazenamento, como HDs e SSDs. Além disso, há o gerenciamento de dispositivos, que coordena a comunicação entre o computador e seus periféricos, como impressoras, teclados, mouses e outros equipamentos externos.`,
                    `Por fim, o sistema operacional fornece uma interface com o usuário, que pode ser gráfica (GUI), com ícones, janelas e menus, ou em modo texto, por linha de comando (CLI). Um exemplo de sistema operacional com interface gráfica é o Windows, amplamente utilizado e caracterizado pela sua interação visual intuitiva.`
                ],
            },
            {
                texto: 'Área de Trabalho (Desktop)',
                id: 'area-de-trabalho-desktop',
                introducao: 'A Área de Trabalho é a interface principal do Windows, onde o usuário acessa programas, arquivos e configurações. Ela inclui ícones, a barra de tarefas (com botão iniciar, pesquisa, programas abertos e fixados), a área de notificação e a Central de Ações. O Menu Iniciar e o botão Visão de Tarefas também fazem parte, oferecendo acesso rápido a recursos e múltiplas áreas de trabalho.',
                explicacao: [
                    `A Área de Trabalho (Desktop) é a tela principal do sistema Windows, sendo o local onde o usuário inicia a maioria de suas atividades. Nela, é possível acessar programas, arquivos, pastas e configurações do sistema com facilidade, tornando-se um ponto central de interação com o computador.`,
                    `Na área de trabalho, estão os ícones, que representam visualmente programas, arquivos, pastas ou atalhos. Atalhos são links rápidos para itens originais, e são identificados por uma pequena seta no canto inferior esquerdo do ícone.`,
                    `Outro elemento essencial é a Barra de Tarefas, normalmente posicionada na parte inferior da tela. Ela contém vários recursos importantes, como o Botão Iniciar, que abre o Menu Iniciar — um painel que oferece acesso a programas, configurações, documentos recentes e opções de desligamento do sistema.`,
                    `Ao lado do botão iniciar, encontra-se a caixa de pesquisa (ou Cortana, em versões anteriores), que permite buscar rapidamente arquivos, programas e até informações na internet. A barra também apresenta ícones de programas fixados, facilitando o acesso a aplicativos usados com frequência, e ícones de programas abertos, que indicam quais estão em execução no momento.`,
                    `Na extremidade direita da barra de tarefas está a Área de Notificação (também chamada de Bandeja do Sistema), onde são exibidos ícones de programas em segundo plano, além do relógio, controle de volume, status da rede e notificações do sistema.`,
                    `Outro recurso importante é o Botão Visão de Tarefas, que permite visualizar todas as janelas abertas de forma organizada, além de criar e alternar entre áreas de trabalho virtuais, recurso útil para dividir atividades.`,
                    `O Menu Iniciar, nas versões mais recentes do Windows (10 e 11), combina o estilo clássico com blocos dinâmicos (Live Tiles), permitindo acesso rápido a aplicativos, configurações e arquivos. Além disso, oferece opções de energia, como desligar, reiniciar ou suspender o sistema.`,
                    `Por fim, a Central de Ações, acessível por um ícone na barra de tarefas, reúne notificações de aplicativos e fornece atalhos para configurações rápidas, como Wi-Fi, Bluetooth, modo avião, brilho da tela e outras opções úteis para o usuário.`
                ],
            },
            {
                texto: 'Explorador de Arquivos (Windows Explorer',
                id: 'explorador-de-arquivos',
                introducao: 'O Explorador de Arquivos é uma ferramenta essencial do Windows para gerenciar arquivos e pastas. Permite criar, mover, copiar, renomear e excluir arquivos de forma prática, além de oferecer atalhos de teclado que facilitam a navegação. A organização é feita por meio de uma estrutura hierárquica de pastas e unidades, e a Lixeira serve como meio de recuperação de dados excluídos temporariamente.',
                explicacao: [
                    `O Explorador de Arquivos (Windows Explorer) é a principal ferramenta do Windows utilizada para visualizar, organizar e manipular arquivos e pastas armazenados no computador. Ele permite que o usuário navegue por diferentes unidades de armazenamento, como o disco rígido (C:, D:), pendrives, HDs externos e unidades de rede, de forma estruturada e intuitiva.`,
                    `A organização dos dados é feita através de arquivos e pastas. Os arquivos são as unidades básicas que armazenam informações — como documentos, imagens, vídeos ou programas. Já as pastas (ou diretórios) funcionam como contêineres que agrupam arquivos e outras pastas, criando uma estrutura hierárquica de fácil navegação.`,
                    `Entre as operações básicas que o usuário pode realizar no Explorador de Arquivos estão: criar novas pastas ou documentos, copiar arquivos (Ctrl + C) para duplicá-los em outro local, mover (Ctrl + X e Ctrl + V) para transferi-los definitivamente, renomear (F2) para alterar o nome de arquivos e pastas, e excluir (Delete) para enviá-los à Lixeira. Vale lembrar que, ao usar Shift + Delete, o item é excluído permanentemente, sem passar pela Lixeira.`,
                    `A Lixeira é um local especial do sistema onde os arquivos excluídos temporariamente ficam armazenados. Isso permite que o usuário recupere itens apagados por engano. Quando a Lixeira é esvaziada, o espaço ocupado pelos arquivos é liberado no disco.`,
                    `Além disso, o Windows oferece diversos atalhos de teclado úteis para agilizar a navegação: Windows + E abre o Explorador, Alt + seta para cima sobe um nível na hierarquia de pastas, Alt + seta para a esquerda retorna à pasta anterior visitada, Alt + seta para a direita avança para a próxima pasta, e Ctrl + Shift + N cria uma nova pasta rapidamente.`
                ],
            },
            {
                texto: 'Gerenciamento de Janelas',
                id: 'gerenciamento-de-janelas',
                introducao: 'O gerenciamento de janelas no Windows envolve abrir, fechar, minimizar, maximizar, restaurar, mover e redimensionar as janelas. Também permite alternar entre elas usando atalhos como Alt + Tab e Windows + Tab. Recursos como o Snap facilitam a organização da área de trabalho, permitindo fixar janelas em posições estratégicas da tela. Esses comandos otimizam o uso do sistema e aumentam a eficiência no trabalho.',
                explicacao: [
                    `O gerenciamento de janelas é uma habilidade essencial no uso do sistema operacional Windows, pois as janelas representam o ambiente visual onde programas e aplicativos são executados. Saber manipulá-las corretamente contribui para uma navegação mais fluida e uma maior produtividade no dia a dia.`,
                    `As ações básicas envolvem abrir e fechar janelas, o que corresponde a iniciar e encerrar programas. O botão de minimizar oculta a janela e a envia para a barra de tarefas, sem encerrar sua execução. Já o botão de maximizar expande a janela para ocupar toda a tela. Se o usuário quiser retornar ao tamanho anterior, pode utilizar a opção restaurar, que desfaz a maximização ou minimização. Também é possível redimensionar uma janela, clicando e arrastando suas bordas ou cantos, e mover a janela clicando em sua barra de título e arrastando-a para a posição desejada na tela.`,
                    `Para alternar rapidamente entre as janelas abertas, o Windows oferece atalhos de teclado como Alt + Tab, que permite navegar entre os programas em execução com uma pré-visualização, e Windows + Tab, que ativa a Visão de Tarefas, mostrando todas as janelas abertas e os desktops virtuais disponíveis. Outro recurso muito útil é o Snap (ajuste de janelas), que possibilita organizar as janelas na tela com rapidez: ao arrastá-las para os cantos ou bordas, elas se ajustam automaticamente; ou ainda, utilizando combinações como Windows + seta para a esquerda/direita/cima/baixo.`
                ],
            },
            {
                texto: 'Painel de Controle e Configurações',
                id: 'painel-de-controle-e-configuracoes',
                introducao: 'O Painel de Controle e o aplicativo Configurações são responsáveis por permitir a personalização e administração do sistema operacional. Com eles, o usuário pode gerenciar programas, contas, dispositivos, rede, aparência do sistema, atualizações e recursos de segurança do Windows.',
                explicacao: [
                    `O Painel de Controle, presente em versões mais antigas do Windows, e o aplicativo Configurações, adotado nas versões mais recentes como o Windows 10 e 11, são ferramentas essenciais para a personalização e administração do sistema operacional. Ambos permitem que o usuário ajuste aspectos fundamentais do funcionamento do computador.`,
                    `A área de Programas e Recursos (no Painel de Controle) ou Aplicativos e Recursos (no Configurações) possibilita a desinstalação de programas, além de ativar ou desativar funcionalidades do próprio Windows. Na seção Contas de Usuário, é possível gerenciar perfis de usuários, como criar ou excluir contas, alterar seus tipos (administrador ou padrão), e configurar senhas.`,
                    `A opção Data e Hora permite ajustar o relógio do sistema e configurar o fuso horário. Já na seção Dispositivos, o usuário pode adicionar ou remover periféricos como impressoras, scanners e dispositivos Bluetooth.`,
                    `A área de Rede e Internet oferece recursos para configurar conexões Wi-Fi ou com cabo (Ethernet), diagnosticar problemas de rede e realizar ajustes de compartilhamento. Na aba de Personalização, o usuário pode modificar a aparência do sistema, como o plano de fundo da área de trabalho, cores, temas, fontes e tela de bloqueio.`,
                    `A seção Sistema fornece informações técnicas importantes, como processador, quantidade de memória RAM, tipo de sistema (32 ou 64 bits), além de permitir a ativação do Windows e a modificação do nome do computador. Por fim, Atualização e Segurança é onde o usuário pode controlar atualizações do sistema, fazer backup, restaurar o sistema, e configurar opções de segurança como o antivírus e o firewall integrados.`
                ],
            },
            {
                texto: 'Segurança',
                id: 'seguranca',
                introducao: 'O Windows oferece múltiplos recursos para proteger o computador e os dados do usuário, como o Firewall, o Windows Defender, atualizações automáticas e o controle de permissões por meio de contas e do UAC. Juntos, esses mecanismos criam uma camada sólida de segurança para o sistema.',
                explicacao: [
                    `A segurança é uma das principais prioridades do sistema operacional Windows. O sistema conta com ferramentas robustas para proteger os usuários de ameaças externas e internas. O Firewall do Windows é uma dessas ferramentas, funcionando como uma barreira entre o computador e a rede (internet ou local), monitorando e bloqueando acessos não autorizados. Ele é essencial para prevenir invasões e ataques.`,
                    `Outra ferramenta importante é o Windows Defender, também chamado de Segurança do Windows. Esse antivírus e antimalware integrado oferece proteção em tempo real contra vírus, spywares e outros softwares maliciosos. Além disso, ele abrange outras áreas, como proteção de conta, segurança de rede e internet, controle de aplicativos, desempenho e integridade do sistema, além de ferramentas de segurança para a família.`,
                    `Manter o sistema atualizado é uma prática fundamental para garantir a segurança. O recurso Windows Update permite que o sistema baixe e instale automaticamente as atualizações mais recentes, que corrigem falhas de segurança, melhoram a estabilidade e adicionam novos recursos. A recomendação é manter essa opção sempre ativada para garantir proteção contínua.`,
                    `No que diz respeito aos usuários, o Windows permite a criação de diferentes tipos de contas com níveis distintos de permissão. Contas de Administrador possuem controle total sobre o sistema, enquanto Contas de Usuário Padrão têm permissões limitadas, o que ajuda a evitar alterações indevidas ou a instalação de programas maliciosos. Complementando isso, o Controle de Conta de Usuário (UAC) é um recurso que solicita confirmação sempre que um programa tenta fazer mudanças importantes no sistema, aumentando ainda mais a proteção.`,
                ],
            },
            {
                texto: 'Ferramentas do Sistema',
                id: 'ferramentas-do-sistema',
                introducao: 'O Windows possui ferramentas essenciais para garantir o bom funcionamento do sistema: o Desfragmentador otimiza discos; a Limpeza de Disco libera espaço; a Restauração do Sistema corrige falhas sem perder arquivos; e o Gerenciador de Tarefas permite monitorar e controlar os recursos em tempo real. Essas ferramentas são fundamentais tanto para o uso cotidiano quanto para provas de concurso.',
                explicacao: [
                    `O Windows oferece diversas ferramentas integradas que auxiliam na manutenção e otimização do sistema operacional, sendo frequentemente cobradas em concursos públicos.`,
                    `Uma das principais é o Desfragmentador e Otimizador de Unidades, que organiza os dados armazenados em discos rígidos (HDDs), facilitando o acesso e melhorando a velocidade de leitura. Já nos SSDs, ele executa uma otimização por meio do comando TRIM, que mantém o bom desempenho e prolonga a vida útil da unidade.`,
                    `Outra ferramenta essencial é a Limpeza de Disco, que remove arquivos desnecessários como temporários, de programas baixados, arquivos da Lixeira e outros itens que ocupam espaço sem utilidade. Essa limpeza ajuda a liberar espaço e melhorar o desempenho geral do computador.`,
                    `A Restauração do Sistema permite reverter o estado do Windows para um ponto anterior (ponto de restauração), sem afetar os arquivos pessoais. Isso é útil quando o sistema começa a apresentar falhas ou problemas após instalações de programas ou atualizações mal-sucedidas.`,
                    `Por fim, o Gerenciador de Tarefas, acessado por meio dos atalhos Ctrl + Shift + Esc ou Ctrl + Alt + Del, é uma ferramenta poderosa para monitorar processos ativos, uso de CPU e memória, programas iniciados com o sistema, usuários logados e serviços em execução. Também permite finalizar programas que não estão respondendo, ajudando a manter o sistema estável.`,
                ],
            },
            {
                texto: 'Recursos de Acessibilidade',
                id: 'recursos-de-acessibilidade',
                introducao: 'O Windows inclui recursos importantes de acessibilidade, como a Lupa, o Narrador e o Teclado Virtual, além de opções como Teclas de Aderência, Teclas de Filtro, Teclas de Alternância e Alto Contraste. Essas ferramentas promovem a inclusão, facilitando o uso do computador por pessoas com necessidades especiais, e são temas frequentes em concursos públicos.',
                explicacao: [
                    `O Windows possui diversas ferramentas voltadas à acessibilidade, desenvolvidas para facilitar o uso do computador por pessoas com deficiências visuais, motoras ou cognitivas. Esses recursos também costumam ser abordados em concursos públicos, principalmente em temas relacionados à inclusão digital e usabilidade.`,
                    `A Lupa é uma ferramenta que permite ampliar partes específicas da tela, ajudando usuários com baixa visão a enxergar melhor textos e imagens. Já o Narrador é um leitor de tela que descreve por voz o que está sendo exibido no monitor, incluindo mensagens de erro e textos, sendo essencial para pessoas com deficiência visual.`,
                    `O Teclado Virtual exibe um teclado na tela que pode ser operado com o mouse ou outros dispositivos apontadores. Ele é muito útil para pessoas com limitações motoras que não conseguem utilizar um teclado físico.`,
                    `As Teclas de Aderência permitem que o usuário pressione teclas modificadoras (como Ctrl, Alt ou Shift) uma de cada vez, em vez de combiná-las simultaneamente, facilitando o uso de atalhos por pessoas com dificuldade de coordenação. Já as Teclas de Filtro ajudam a ignorar toques acidentais ou repetidos, garantindo que apenas os comandos intencionais sejam reconhecidos. As Teclas de Alternância emitem um som sempre que Caps Lock, Num Lock ou Scroll Lock são ativadas ou desativadas, oferecendo um retorno sonoro para usuários com baixa visão.`,
                    `Por fim, o recurso de Alto Contraste modifica o esquema de cores do sistema, realçando o contraste entre o texto e o fundo para facilitar a leitura, especialmente para pessoas com deficiência visual ou sensibilidade a cores.`,
                ],
            },
            {
                texto: 'Conceitos de Redes (Básico)',
                id: 'conceitos-de-redes',
                introducao: 'O Windows permite a conexão à internet via Wi-Fi ou cabo (Ethernet) e possibilita a criação de redes locais (LAN). Nessas redes, é possível realizar o compartilhamento de arquivos e impressoras, respeitando configurações de permissões. O antigo Grupo Doméstico (HomeGroup) foi descontinuado no Windows 10, dando lugar a formas mais diretas de compartilhamento. Esses conceitos básicos podem ser cobrados em provas de concurso.',
                explicacao: [
                    `Mesmo que redes de computadores não sejam o foco principal ao se estudar o sistema operacional Windows, é comum que concursos cobrem noções básicas sobre como o sistema se conecta à internet e interage com outros dispositivos em uma rede.`,
                    `A conexão à internet no Windows pode ser feita de duas formas principais: por meio de redes sem fio (Wi-Fi) ou por meio de cabo (Ethernet). O sistema operacional oferece assistentes e interfaces gráficas simples para configurar ambos os tipos de conexão, permitindo que o usuário selecione redes disponíveis, insira senhas e ajuste configurações de IP, se necessário.`,
                    `Dentro de ambientes menores, como residências ou pequenos escritórios, a rede local (LAN) é o tipo mais comum de rede. Ela permite que vários dispositivos — como computadores, impressoras e roteadores — se comuniquem entre si dentro de uma área geográfica limitada. Essas redes possibilitam o uso de recursos compartilhados e facilitam o trabalho em grupo ou a gestão de arquivos entre máquinas diferentes.`,
                    `O compartilhamento de arquivos e impressoras é um recurso fundamental do Windows em ambientes com múltiplos dispositivos conectados à mesma rede. Ele permite que pastas e impressoras de um computador possam ser acessadas por outros usuários na mesma rede. É essencial compreender como funcionam as permissões de compartilhamento, que definem quem pode ver, modificar ou excluir arquivos compartilhados.`,
                    `O Grupo Doméstico (HomeGroup) foi um recurso disponível em versões anteriores do Windows (como o Windows 7 e 8) que simplificava o compartilhamento de arquivos e impressoras em redes residenciais. No entanto, a Microsoft descontinuou essa funcionalidade no Windows 10, substituindo-a por métodos de compartilhamento mais diretos por meio do Explorador de Arquivos.`,
                ],
            },
            {
                texto: 'Dicas e Atalhos',
                id: 'dicas-e-atalhos',
                introducao: 'Saber usar atalhos de teclado no Windows é essencial para mostrar eficiência e conhecimento em concursos de nível médio. Além de agilizar tarefas, esses atalhos são frequentemente cobrados nas provas. Para um bom preparo, é importante praticar com questões anteriores, focar na versão do Windows especificada no edital e entender não só como usar os recursos, mas também para que eles servem. Sempre consulte o conteúdo programático do edital para direcionar seus estudos.',
                explicacao: [
                    `O conhecimento dos atalhos de teclado é fundamental para quem deseja demonstrar proficiência no uso do sistema operacional Windows, sendo frequentemente cobrado em concursos públicos de nível médio. Saber utilizar esses atalhos não apenas agiliza o trabalho no computador, mas também mostra domínio das funcionalidades essenciais do sistema.`,
                    `Para se preparar bem, é recomendável praticar com questões anteriores de concursos. Essa prática ajuda a fixar o conteúdo e a compreender o estilo das bancas, além de ajudar a identificar detalhes e pegadinhas comuns, especialmente em relação aos atalhos de teclado e ao funcionamento do Explorador de Arquivos.`,
                    `É importante também ficar atento às versões do Windows indicadas no edital. Embora os conceitos básicos permaneçam semelhantes, a interface e alguns recursos podem variar entre versões como Windows 10 e Windows 11. Se o edital mencionar uma versão específica, concentre seus estudos nela; caso contrário, foque nas versões mais recentes, que são as mais prováveis de serem cobradas.`,
                    `Além de memorizar os atalhos, é essencial entender para que serve cada recurso. Muitas questões abordam a finalidade das ferramentas do sistema, e não apenas seu funcionamento prático. Por isso, um estudo focado tanto na "execução" quanto na "finalidade" dos comandos traz melhores resultados.`,
                    `Por fim, nunca deixe de fazer uma leitura atenta do edital do concurso. O conteúdo programático de informática listado ali é seu guia oficial para direcionar os estudos e garantir que você esteja focando nos tópicos corretos.`,
                ],
                dicas: {
                    atalhos: [
                        {
                            atalho: 'Windows:',
                            funcao: 'Abre/fecha o Menu Iniciar.'
                        },
                        {
                            atalho: 'Windows + D',
                            funcao: 'Mostra/oculta a Área de Trabalho.'
                        },
                        {
                            atalho: 'Windows + E',
                            funcao: 'Abre o Explorador de Arquivos.'
                        },
                        {
                            atalho: 'Windows + L',
                            funcao: 'Bloqueia o computador.'
                        },
                        {
                            atalho: 'Windows + R',
                            funcao: 'Abre a caixa de diálogo Executar.'
                        },
                        {
                            atalho: 'Windows + S ou Windows + Q',
                            funcao: 'Abre a pesquisa do Windows.'
                        },
                        {
                            atalho: 'Windows + I',
                            funcao: 'Abre as Configurações.'
                        },
                        {
                            atalho: 'Windows + A',
                            funcao: 'Abre a Central de Ações.'
                        },
                        {
                            atalho: 'Windows + Tab',
                            funcao: 'Abre a Visão de Tarefas.'
                        },
                        {
                            atalho: 'Windows + PrtScn',
                            funcao: 'Tira uma captura de tela e salva automaticamente na pasta Imagens > Capturas de tela.'
                        },
                        {
                            atalho: 'Alt + F4',
                            funcao: 'Fecha a janela ativa ou abre a caixa de diálogo Desligar Windows (se nenhuma janela estiver ativa).'
                        },
                        {
                            atalho: 'Ctrl + Shift + Esc',
                            funcao: 'Abre o Gerenciador de Tarefas diretamente.'
                        },
                        {
                            atalho: 'F2',
                            funcao: 'Renomear arquivo ou pasta selecionada.'
                        },
                        {
                            atalho: 'F5',
                            funcao: 'Atualizar a janela ativa.'
                        },
                    ],
                }
            },
        ],
        video: {
            titulo: `Sistema Operacional Windows`,
            linkDoCanal: 'https://www.youtube.com/@ProfessorDaniloVilanova',
            idVideo: 'MkVvtFSxpNg'
        },
    },
    ['internet-e-intranet']: {
        titulo: 'Internet e Intranet',
        id: 'internet-e-intranet',
    },
    ['tecnologias-e-ferramentas-aplicativas']: {
        titulo: 'Tecnologias e Ferramentas Aplicativas',
        id: 'tecnologias-e-ferramentas-aplicativas',
    },
    ['organizacao-e-gerenciamento-de-informacoes']: {
        titulo: 'Organizacao e Gerenciamento de Informações',
        id: 'organizacao-e-gerenciamento-de-informacoes',
    },
    ['certificacao-e-assinatura-digital']: {
        titulo: 'Certificacao e Assinatura Digital',
        id: 'certificacao-e-assinatura-digital',
    },
    ['seguranca-da-informacao']: {
        titulo: 'Segurança da Informação',
        id: 'seguranca-da-informacao',
    },
}

export default informatica