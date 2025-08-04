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
    },
    ['sistema-operacional-windows']: {
        titulo: 'Sistema Operacional Windows',
        id: 'sistema-operacional-windows',
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