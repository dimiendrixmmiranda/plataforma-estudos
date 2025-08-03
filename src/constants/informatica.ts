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
    ['edicaoTextosPlanilhasEApresentacoes']: {
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
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare commodo nisi. Cras fermentum magna ac egestas ultrices. Sed condimentum orci ut neque mollis, vitae varius ipsum mollis. Nam aliquet eget turpis in aliquam. Mauris ac lorem metus. Nunc maximus leo vitae eros mollis mattis. In convallis eros vel imperdiet convallis.`,
                    `Etiam dignissim neque augue, ultrices venenatis massa varius non. Sed ac tortor dapibus, fringilla magna vitae, porttitor justo. Quisque efficitur id nulla quis fermentum. Etiam sollicitudin dui justo. Ut in placerat nulla. Cras tempus accumsan lorem, sit amet posuere erat rutrum at. Aenean imperdiet scelerisque justo, ac cursus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ex lectus, eget elementum libero dapibus non. Vivamus mattis ipsum vel nisl vestibulum posuere. In nisl turpis, pulvinar ac neque et, tincidunt iaculis massa. Quisque pellentesque, dolor a sagittis efficitur, sem metus malesuada felis, sed consequat felis urna at tellus. Nunc id dolor eget lectus tincidunt molestie ut et lorem.`,
                    `Maecenas eu dolor porta, efficitur purus feugiat, iaculis ligula. Suspendisse eu vehicula justo. Cras eu urna sit amet elit mollis gravida. Integer at blandit elit. Praesent non velit nulla. Fusce bibendum rhoncus libero, id aliquet dui rhoncus ut. Nunc egestas nec mauris vel commodo. Aenean pretium ligula mollis arcu ornare, in tristique tellus ullamcorper. Curabitur molestie quis velit vitae tempor. Maecenas nec enim mi.`
                ]
            },
            {
                texto: 'Edição de Planilhas',
                id: 'edicao-de-planilhas',
                introducao: 'Envolve a organização e análise de dados por meio de cálculos, tabelas e gráficos, facilitando o controle de informações.',
                explicacao: [
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare commodo nisi. Cras fermentum magna ac egestas ultrices. Sed condimentum orci ut neque mollis, vitae varius ipsum mollis. Nam aliquet eget turpis in aliquam. Mauris ac lorem metus. Nunc maximus leo vitae eros mollis mattis. In convallis eros vel imperdiet convallis.`,
                    `Etiam dignissim neque augue, ultrices venenatis massa varius non. Sed ac tortor dapibus, fringilla magna vitae, porttitor justo. Quisque efficitur id nulla quis fermentum. Etiam sollicitudin dui justo. Ut in placerat nulla. Cras tempus accumsan lorem, sit amet posuere erat rutrum at. Aenean imperdiet scelerisque justo, ac cursus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ex lectus, eget elementum libero dapibus non. Vivamus mattis ipsum vel nisl vestibulum posuere. In nisl turpis, pulvinar ac neque et, tincidunt iaculis massa. Quisque pellentesque, dolor a sagittis efficitur, sem metus malesuada felis, sed consequat felis urna at tellus. Nunc id dolor eget lectus tincidunt molestie ut et lorem.`,
                    `Maecenas eu dolor porta, efficitur purus feugiat, iaculis ligula. Suspendisse eu vehicula justo. Cras eu urna sit amet elit mollis gravida. Integer at blandit elit. Praesent non velit nulla. Fusce bibendum rhoncus libero, id aliquet dui rhoncus ut. Nunc egestas nec mauris vel commodo. Aenean pretium ligula mollis arcu ornare, in tristique tellus ullamcorper. Curabitur molestie quis velit vitae tempor. Maecenas nec enim mi.`
                ]
            },
            {
                texto: 'Edição de Apresentações',
                id: 'edicao-de-apresentacoes',
                introducao: 'Refere-se à criação de slides claros e objetivos, usados para comunicar informações de forma visual e estruturada.',
                explicacao: [
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare commodo nisi. Cras fermentum magna ac egestas ultrices. Sed condimentum orci ut neque mollis, vitae varius ipsum mollis. Nam aliquet eget turpis in aliquam. Mauris ac lorem metus. Nunc maximus leo vitae eros mollis mattis. In convallis eros vel imperdiet convallis.`,
                    `Etiam dignissim neque augue, ultrices venenatis massa varius non. Sed ac tortor dapibus, fringilla magna vitae, porttitor justo. Quisque efficitur id nulla quis fermentum. Etiam sollicitudin dui justo. Ut in placerat nulla. Cras tempus accumsan lorem, sit amet posuere erat rutrum at. Aenean imperdiet scelerisque justo, ac cursus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ex lectus, eget elementum libero dapibus non. Vivamus mattis ipsum vel nisl vestibulum posuere. In nisl turpis, pulvinar ac neque et, tincidunt iaculis massa. Quisque pellentesque, dolor a sagittis efficitur, sem metus malesuada felis, sed consequat felis urna at tellus. Nunc id dolor eget lectus tincidunt molestie ut et lorem.`,
                    `Maecenas eu dolor porta, efficitur purus feugiat, iaculis ligula. Suspendisse eu vehicula justo. Cras eu urna sit amet elit mollis gravida. Integer at blandit elit. Praesent non velit nulla. Fusce bibendum rhoncus libero, id aliquet dui rhoncus ut. Nunc egestas nec mauris vel commodo. Aenean pretium ligula mollis arcu ornare, in tristique tellus ullamcorper. Curabitur molestie quis velit vitae tempor. Maecenas nec enim mi.`
                ]
            },
        ]
    }
}

export default informatica