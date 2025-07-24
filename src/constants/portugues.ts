const portugues = {
    introducao: `Para esse concurso, as principais materias a serem estudadas são:`,
    materias: [
        {
            materia: 'Análise e Interpretação de Texto',
            id: 'interpretacao-de-texto'
        },
        {
            materia: 'Figuras de Linguagem',
            id: 'figuras-de-linguagem'
        },
        {
            materia: 'Morfologia',
            id: 'morfologia'
        },
        {
            materia: 'Sintaxe',
            id: 'sintaxe'
        },
        {
            materia: 'Pontuação',
            id: 'pontuacao'
        },
    ],
    'figuras-de-linguagem': {
        titulo: 'Figuras de Linguagem',
        id: 'figuras-de-linguagem',
        introducao: {
            titulo: 'Introdução',
            texto: [
                ` As figuras de linguagem são recursos expressivos usados na comunicação, especialmente na linguagem escrita e literária, com o objetivo de tornar a mensagem mais rica, envolvente ou impactante. Elas se distanciam da linguagem literal, comum no dia a dia, e criam efeitos de sentido ao explorar sons, significados e construções da língua.`,
                `Cada grupo possui características próprias e exemplos que aparecem com frequência em provas.`,
                `Dividem-se, de forma geral, em quatro grupos principais:`
            ],
            assuntos: [
                {
                    titulo: `Figuras de palavras (ou semânticas)`,
                    id: 'figuras-de-palavras',
                    descricao: `Alteram o significado comum das palavras para criar novas associações de sentido. Exemplo: metáfora, metonímia, catacrese, sinestesia.`
                },
                {
                    titulo: `Figuras de pensamento`,
                    id: 'figuras-de-pensamento',
                    descricao: `Envolvem uma ideia ou construção de raciocínio que gera surpresa, contraste ou ironia. Exemplo:  hipérbole, eufemismo, litote, ironia, personificação, antítese, paradoxo, gradação e apóstrofe.`
                },
                {
                    titulo: `Figuras de construção (ou sintaxe)`,
                    id: 'figuras-de-construcao',
                    descricao: `Alteram a estrutura da frase ou a ordem das palavras para causar efeito estilístico. Exemplo: elipse, zeugma, pleonasmo, hipérbato.`
                },
                {
                    titulo: `Figuras de som (ou harmonia)`,
                    id: 'figuras-de-som',
                    descricao: `Utilizam sons semelhantes ou repetitivos para criar musicalidade ou expressar emoções. Exemplo: aliteração, assonância, onomatopeia.`
                },
            ]
        },
        // Figuras
        categoriasDeFiguras: [
            {
                titulo: 'Figuras de palavras (ou semânticas)',
                id: 'figuras-de-palavras',
                figuras: [
                    {
                        titulo: 'Metáfora',
                        definicao: [
                            `A metáfora é utilizada para fazer a comparação entre dois ou mais elementos sem utilizar termos que indiquem que uma comparação está sendo feita, deixando de forma implícita. Em outras palavras é usada fora do seu sentido literal para representar outro sentido, com base em uma semelhança subjetiva`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"A vida é um palco."',
                                    explicacao: 'Essa metáfora compara a vida a um palco, sugerindo que todos nós "atuamos" ou desempenhamos papéis diferentes ao longo da vida. Não há a palavra "como", por isso é uma metáfora (e não comparação).'
                                },
                                {
                                    frase: '"Ela é uma rocha em tempos difíceis."',
                                    explicacao: 'A pessoa não é literalmente uma rocha, mas a frase indica que ela é firme, forte, confiável — alguém que dá segurança nos momentos difíceis.'
                                },
                                {
                                    frase: '"Seu coração é um deserto."',
                                    explicacao: 'Essa frase usa metáfora para indicar que a pessoa pode estar se sentindo vazia, solitária ou sem emoções, como um deserto é seco e sem vida.'
                                },
                                {
                                    frase: '"O tempo é um ladrão."',
                                    explicacao: 'O tempo não rouba literalmente, mas a metáfora expressa a ideia de que ele "tira" coisas de nós, como juventude, momentos ou oportunidades.'
                                },
                                {
                                    frase: '"Seus olhos são duas estrelas."',
                                    explicacao: 'A metáfora indica que os olhos da pessoa brilham, são bonitos ou chamativos — sem usar "como", o que caracteriza a metáfora.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Metáfora`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'hQS8o50k3rI'
                        }
                    },
                    {
                        titulo: 'Comparação',
                        definicao: [
                            `A comparação é uma figura de linguagem que estabelece, de maneira explícita, a relação de semelhança entre dois ou mais elementos em algum contexto. Essa relação é estabelecida pelo uso de palavras que marquem a comparação que está sendo feita.`,
                            `Na comparação é comum usar palavras como "como", "tal qual", "feito", etc. Diferente da metáfora que "afirma" que uma coisa é outra, mesmo que isso seja impossível literalmente, a comparação "não afirma", apenas mostra uma semelhança entre duas coisas, sem dizer que são a mesma.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Ela é forte como uma rocha."',
                                    explicacao: 'A frase compara a força dela com a de uma rocha, usando o conectivo "como", o que caracteriza uma comparação.'
                                },
                                {
                                    frase: '"Seus olhos brilham como estrelas."',
                                    explicacao: 'A comparação aqui está no brilho dos olhos em relação ao das estrelas. O uso de "como" deixa claro que é apenas uma semelhança, não uma afirmação.'
                                },
                                {
                                    frase: '"Ele corre feito um leopardo."',
                                    explicacao: 'O termo “feito” atua como conectivo comparativo, indicando que a velocidade dele é parecida com a de um leopardo.'
                                },
                                {
                                    frase: '"A menina dançava igual a uma bailarina profissional."',
                                    explicacao: 'A frase compara a forma de dançar da menina com a de uma bailarina profissional, evidenciando uma comparação explícita.'
                                },
                                {
                                    frase: '"A tristeza chegou tal qual uma nuvem cinzenta."',
                                    explicacao: 'A tristeza é comparada a uma nuvem, com o uso de “tal qual”, mostrando que ela veio de forma lenta e pesada — mas sem dizer que é uma nuvem.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Comparação`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'lDgcRJOlOiE'
                        },
                        cuidado: {
                            texto: 'Comparação e metáfora podem causar confusão https://querobolsa.com.br/revista/figuras-de-linguagem-o-que-e-metafora'
                        }
                    },
                    {
                        titulo: 'Metonímia',
                        definicao: [
                            `Metonímia é uma figura de linguagem usada quando trocamos uma palavra por outra, mas as duas têm alguma relação de sentido. É como dizer uma coisa, mas querendo dizer outra relacionada a ela.`,
                            `Um exemplo simples seria na frase "Depois de me formar, quero ter meu próprio teto`,
                            `Neste caso, o termo teto", que é uma parte de uma casa, é utilizada no lugar da palavra "casa". Costumamos dizer que este tipo de metonímia é aquele que substitui a parte pelo todo.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Li Machado de Assis nas férias."',
                                    explicacao: 'Aqui, "Machado de Assis" (autor) foi usado no lugar da obra dele (Autor pela obra).'
                                },
                                {
                                    frase: '"Ela devorou dois pratos de feijoada."',
                                    explicacao: 'Não se come os pratos, mas o conteúdo deles (Objeto pelo conteúdo).'
                                },
                                {
                                    frase: '"O estádio inteiro gritou de alegria."',
                                    explicacao: 'O estádio (lugar) representa as pessoas que estavam lá (Lugar pelas pessoas).'
                                },
                                {
                                    frase: '"Ele vive do seu suor."',
                                    explicacao: '“Suor” representa o trabalho, esforço físico (Efeito pela causa).'
                                },
                                {
                                    frase: '"Precisamos comprar um bom azeite de Portugal."',
                                    explicacao: '“Portugal” está no lugar do que vem de lá, ou seja, o produto (Lugar de origem pelo produto).'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Metonímia`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'VaEnniNW0kQ'
                        },
                    },
                    {
                        titulo: 'Catacrese',
                        definicao: [
                            `Catacrese é uma figura de linguagem usada quando não existe uma palavra exata para algo, então usamos uma expressão emprestada de outro contexto para se fazer entender.`,
                            `É uma figura de linguagem que representa um tipo de metáfora de uso comum que, com o passar do tempo, foi desgastada e se cristalizou.`,
                            `A catacrese acontece quando usamos uma palavra por falta de outra melhor. É como um "improviso" da linguagem que virou hábito.`,
                            `Alguns exemplos simples são: "Dente de alho" (Alho não tem dentes de verdade, mas chamamos os pedaços assim), "Braço da cadeira" (A cadeira não tem um braço de verdade como o nosso.)`,
                            `Sendo assim, a catacrese é um tipo especial de metáfora que já foi incorporada por todos os falantes da língua.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Coloquei a comida no pé da mesa."',
                                    explicacao: 'A mesa não tem “pé” como um ser humano, mas usamos essa parte inferior por analogia com o corpo humano.'
                                },
                                {
                                    frase: '"Ele quebrou o braço da cadeira."',
                                    explicacao: 'Cadeiras não têm “braço” de verdade, mas usamos esse termo por falta de um mais exato.'
                                },
                                {
                                    frase: '"O cego pediu ajuda para enxergar com os olhos da alma."',
                                    explicacao: '“Olhos da alma” é uma expressão que substitui a ideia de perceber ou sentir espiritualmente, pois não há um termo literal para isso.'
                                },
                                {
                                    frase: '"Preciso embarcar no avião às 14h.',
                                    explicacao: '“Embarcar” vem de "barco", mas usamos mesmo quando não é um barco, como no caso do avião. É uma catacrese por extensão do sentido original da palavra.'
                                },
                                {
                                    frase: '"Ela penteou os cabelos do braço."',
                                    explicacao: 'A palavra “cabelos” é normalmente usada para a cabeça, mas usamos ela por falta de outra palavra mais precisa para os pelos finos do corpo.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Catacrese`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'cSgA014iVUM'
                        },
                    },
                    {
                        titulo: 'Sinestesia',
                        definicao: [
                            `Sinestesia é uma figura de linguagem que mistura sensações de sentidos diferentes (visão, olfato, audição, tato, paladar) numa mesma frase, para criar um efeito mais rico ou expressivo.`,
                            `Ela é muito utilizada como recurso estilístico e, portanto, surge em diversos textos poéticos e musicais. No movimento simbolista, a sinestesia foi muito empregada pelos escritores.`,
                            `Em resumo, é quando misturamos os sentidos na hora de falar.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"O perfume tinha um cheiro doce."',
                                    explicacao: 'Mistura olfato (cheiro) com paladar (doce).'
                                },
                                {
                                    frase: '"Ouvi uma voz quente e acolhedora."',
                                    explicacao: 'Mistura audição (voz) com tato (quente, acolhedora).'
                                },
                                {
                                    frase: '"A música tinha um toque áspero."',
                                    explicacao: '“Mistura audição (música) com tato (áspero).'
                                },
                                {
                                    frase: '"Ela falou com um tom amargo."',
                                    explicacao: 'Mistura audição (tom de voz) com paladar (amargo).'
                                },
                                {
                                    frase: '"O quarto estava iluminado com uma luz fria."',
                                    explicacao: 'Mistura visão (luz) com tato (frio).'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Sinestesia`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'wDR61wip9Fk'
                        },
                    },
                    {
                        titulo: 'Perífrase',
                        definicao: [
                            `Perífrase é uma figura de linguagem que consiste em usar uma expressão no lugar do nome direto de algo ou alguém, destacando alguma característica marcante.`,
                            `Um exemplos simples seria utilizar a frase: "O rei do futebol", em vez de dizer simplesmente "Pelé"`,
                            `Além de ser usada na linguagem coloquial (informal), é comum a utilização da perífrase como recurso estilístico em textos poéticos e musicais. `,
                            `Em resumo, é quando não falamos o nome direto, mas usamos uma descrição que o representa.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"O Rei do Futebol encantou o mundo por décadas."',
                                    explicacao: '“Rei do Futebol” é uma perífrase para Pelé. Usa-se uma característica famosa dele para evitar o nome direto.'
                                },
                                {
                                    frase: '"A Cidade Maravilhosa recebe milhares de turistas."',
                                    explicacao: '“Cidade Maravilhosa” é uma perífrase para Rio de Janeiro.'
                                },
                                {
                                    frase: '"O astro do pop lançou um novo álbum."',
                                    explicacao: '“Astro do pop” é uma perífrase, por exemplo, para Michael Jackson ou outro cantor muito conhecido, sem citar diretamente o nome'
                                },
                                {
                                    frase: '"A rainha dos baixinhos marcou gerações."',
                                    explicacao: '“Rainha dos baixinhos” é uma perífrase para Xuxa — uma forma de falar dela por meio de sua característica mais conhecida.'
                                },
                                {
                                    frase: '"A estrela da seleção brasileira brilhou no jogo decisivo."',
                                    explicacao: 'Pode ser uma perífrase para Neymar ou outro jogador, substituindo o nome por uma descrição famosa.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Perífrase`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'VqMpxBo-_ws'
                        },
                    },
                ]
            },
            {
                titulo: 'Figuras de Pensamento',
                id: 'figuras-de-pensamento',
                figuras: [
                    {
                        titulo: 'Hipérbole',
                        definicao: [
                            `Hipérbole é uma figura de linguagem usada para exagerar uma ideia, com o objetivo de dar mais ênfase ou emoção ao que está sendo dito.`,
                            `A hipérbole é um recurso muito utilizado, inclusive na linguagem do dia a dia, a qual expressa uma ideia exagerada ou intensificada de algo ou alguém, por exemplo: "Estou morrendo de sede".`,
                            `Em resumo, é quando a gente exagera de propósito para reforçar o que quer dizer.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Estou morrendo de fome!"',
                                    explicacao: 'A pessoa não está realmente morrendo, mas usa o exagero para mostrar que está com muita fome.'
                                },
                                {
                                    frase: '"Chorei rios de lágrimas."',
                                    explicacao: 'Exagero para dizer que chorou muito, não literalmente "rios".'
                                },
                                {
                                    frase: '"Já te disse isso mil vezes!"',
                                    explicacao: 'A frase expressa impaciência ou repetição, mas não foram literalmente mil vezes.'
                                },
                                {
                                    frase: '"Esperei uma eternidade por você."',
                                    explicacao: 'Usa “eternidade” como exagero do tempo de espera, que foi apenas muito longo.'
                                },
                                {
                                    frase: '"Ele corre mais rápido que o vento."',
                                    explicacao: 'Hipérbole para indicar que ele é muito rápido, não que supere o vento de verdade.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Hiperbole`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'UUv1-LCDmus'
                        }
                    },
                    {
                        titulo: 'Eufemismo',
                        definicao: [
                            `Eufemismo é uma figura de pensamento usada para suavizar uma ideia dura, desagradável ou ofensiva, tornando a frase mais leve e educada.`,
                            `Um exemplo bem simples seria na frase: "Foi chamado para o descanso eterno", utilizando uma forma suave de dizer que alguém faleceu.`,
                            `Em resumo, é quando a gente fala algo difícil de um jeito mais suave.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Ele passou dessa para melhor."',
                                    explicacao: 'Usa uma expressão suave para dizer que alguém morreu, evitando a palavra direta “morte”.'
                                },
                                {
                                    frase: '"Ela foi dispensada da empresa."',
                                    explicacao: 'Substitui o termo “demitida” por uma forma mais branda, amenizando a situação.'
                                },
                                {
                                    frase: '"Está passando por dificuldades financeiras."',
                                    explicacao: 'Usa uma expressão mais gentil para dizer que a pessoa está com problemas graves de dinheiro.'
                                },
                                {
                                    frase: '"Ele está na melhor idade."',
                                    explicacao: 'Eufemiza o fato de a pessoa ser idosa, usando um termo mais positivo e respeitoso.'
                                },
                                {
                                    frase: '"Ela tem seus quilinhos a mais."',
                                    explicacao: 'Substitui uma crítica direta sobre o peso por uma expressão mais suave e delicada.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Eufemismo`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'ava2qyLvPLg'
                        }
                    },
                    {
                        titulo: 'Ironia',
                        definicao: [
                            `Ironia é uma figura de linguagem em que se diz o contrário do que realmente se quer dizer, geralmente com intenção de criticar, brincar ou provocar.`,
                            `Um exemplo simples seria na frase: "Nossa, que rapidez!", dito para alguém que está sendo muito lento.`,
                            `Em resumo, é quando você fala uma coisa, mas quer dizer o oposto, com um tom de deboche ou sarcasmo.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Que ótimo, derramei café na minha camisa branca!"',
                                    explicacao: 'A palavra “ótimo” é usada ironicamente, já que derramar café em si é algo ruim. A intenção é expressar frustração, não alegria.'
                                },
                                {
                                    frase: '"Parabéns, chegou só duas horas atrasado!"',
                                    explicacao: 'O “parabéns” é usado com ironia, criticando o atraso em vez de elogiar.'
                                },
                                {
                                    frase: '"Ah, claro, porque todo mundo adora ficar preso no trânsito."',
                                    explicacao: 'A frase finge elogiar o trânsito, mas na verdade expressa o incômodo de estar nele.'
                                },
                                {
                                    frase: '"Nossa, como você é educado, hein?"',
                                    explicacao: 'Usa a palavra “educado” de forma irônica, geralmente depois de alguém agir de maneira rude.'
                                },
                                {
                                    frase: '"Lógico que eu queria trabalhar no feriado!"',
                                    explicacao: 'A palavra “lógico” intensifica a ironia, já que a fala expressa o contrário do que alguém realmente deseja.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Ironia`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'LSVCwx0u5cY'
                        }
                    },
                    {
                        titulo: 'Personificação ou Prosopopeia',
                        definicao: [
                            `Personificação (também chamada de prosopopeia) é uma figura de linguagem em que se dá características humanas a seres não humanos, como animais, objetos ou elementos da natureza.`,
                            `A personificação é utilizada para atribuir sensações, sentimentos, comportamentos, características e/ou qualidades essencialmente humanas (seres animados) aos objetos inanimados ou seres irracionais, por exemplo:`,
                            `Um exemplo simples seria na frase: "O dia acordou feliz.", segundo a frase, a característica de “acordar feliz” é uma característica humana, que, nesse caso, está atribuída ao dia (substantivo inanimado).`,
                            `Em resumo, é quando algo sem vida ou que não é gente age como se fosse uma pessoa.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"O vento sussurrou segredos ao ouvido das árvores."',
                                    explicacao: 'O vento, que é um fenômeno natural, recebe a ação humana de “sussurrar” e interagir com as árvores como se tivesse vida.'
                                },
                                {
                                    frase: '"A lua observava silenciosa a cidade adormecida."',
                                    explicacao: 'A lua é personificada ao receber a ação de “observar”, algo típico dos seres humanos.'
                                },
                                {
                                    frase: '"As flores dançavam felizes ao som da brisa."',
                                    explicacao: 'As flores ganham a capacidade humana de “dançar” e “sentir felicidade”.'
                                },
                                {
                                    frase: '"O relógio parecia cansado de marcar as horas."',
                                    explicacao: 'Um objeto inanimado, o relógio, recebe um sentimento humano, “cansaço”, e a ação de “parecer cansado”.'
                                },
                                {
                                    frase: '"A cidade nunca dorme."',
                                    explicacao: 'A cidade, que não é um ser vivo, é tratada como se pudesse dormir, ação humana.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Personificação`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                            idVideo: 'n0e75nRstcU'
                        }
                    },
                    {
                        titulo: 'Antítese',
                        definicao: [
                            `Antítese é uma figura de linguagem que coloca duas ideias opostas juntas, para destacar o contraste entre elas.`,
                            `É uma figura de pensamento que acontece por meio da aproximação de palavras com sentidos opostos, por exemplo: "o ódio e a amor andam de mãos dadas.", nesse caso, o termo “ódio” está posicionado ao lado de seu termo contrário, o "amor".`,
                            `Em resumo, é quando você usa palavras ou ideias que são contrárias, lado a lado, para mostrar a diferença.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Ele era triste, mas sorria."',
                                    explicacao: 'Apresenta ideias opostas — tristeza e sorriso — para destacar um contraste.'
                                },
                                {
                                    frase: '"O frio da noite e o calor do dia."',
                                    explicacao: 'Coloca juntos dois conceitos contrários para enfatizar a diferença entre eles.'
                                },
                                {
                                    frase: '"Ela falou pouco, mas disse muito."',
                                    explicacao: 'Mostra oposição entre “pouco falar” e “dizer muito” no conteúdo.'
                                },
                                {
                                    frase: '"A luz da esperança e a sombra do medo."',
                                    explicacao: 'Contrapõe luz e sombra para ilustrar sentimentos opostos.'
                                },
                                {
                                    frase: '"Viver para amar ou morrer de solidão."',
                                    explicacao: 'Enfatiza a oposição entre vida com amor e morte solitária.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Antítese`,
                            linkDoCanal: 'https://www.youtube.com/@portuguesonlinealine',
                            idVideo: 'XUCJ3_252gU'
                        }
                    },
                    {
                        titulo: 'Paradoxo',
                        definicao: [
                            `Paradoxo é uma figura de linguagem que junta ideias opostas que parecem se contradizer, mas que fazem sentido quando a gente pensa mais profundamente.`,
                            `O paradoxo é fundamentado na contradição lógica das ideias, como se tivéssemos duas ideias numa frase, e uma está se contrapondo à outra. No entanto, a contraposição dos termos utilizados cria uma ideia lógica.`,
                            `Um exemplo simples seria na frase: "É morrendo que se vive.", parece impossível, mas fala de vida espiritual.`,
                            `Em resumo, é quando a frase parece sem lógica à primeira vista, mas tem um sentido escondido.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"É morrendo que se vive para a vida eterna."',
                                    explicacao: 'A ideia de viver ao morrer é contraditória, mas usada para expressar uma verdade espiritual ou religiosa.'
                                },
                                {
                                    frase: '"O silêncio gritava em seus ouvidos."',
                                    explicacao: 'Silêncio e grito são opostos, mas a frase usa essa contradição para intensificar o impacto do silêncio.'
                                },
                                {
                                    frase: '"Tenho uma certeza: de que nada é certo."',
                                    explicacao: 'Afirma ter certeza de algo incerto, criando um contraste lógico proposital.'
                                },
                                {
                                    frase: '"Quanto mais eu trabalho, mais tenho a sensação de que nada fiz."',
                                    explicacao: 'Trabalhar muito e sentir que não fez nada parece contraditório, revelando um sentimento de frustração.'
                                },
                                {
                                    frase: '"Ele estava sozinho no meio da multidão."',
                                    explicacao: 'Estar sozinho e ao mesmo tempo cercado de pessoas é uma contradição que expressa solidão emocional.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Paradoxo`,
                            linkDoCanal: 'https://www.youtube.com/@portuguescomleticia',
                            idVideo: '197BBJOEEFo'
                        }
                    },
                ]
            },
            {
                titulo: 'Figuras de Sintaxe',
                id: 'figuras-de-sintaxe',
                figuras: [
                    {
                        titulo: 'Elipse',
                        definicao: [
                            `Elipse é quando uma ou mais palavras são “escondidas” numa frase, mas a gente entende mesmo assim porque o sentido continua claro.`,
                            `A elipse é uma figura de linguagem classificada como figura de sintaxe (ou de construção), porque interfere na estrutura sintática dos enunciados.`,
                            `Um exemplo simples seria na frase: "Estava falando sobre a minha mãe e não sobre à sua.", nessa frase, a palavra mãe foi omitida (estava falando sobre a minha mãe e não sobre à sua mãe.)`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Fui ao mercado e ela, à farmácia."',
                                    explicacao: 'O verbo "foi" foi omitido na segunda parte da frase. O correto seria: "ela foi à farmácia", mas "foi" está subentendido. (Fui ao mercado e ela foi à farmácia.)'
                                },
                                {
                                    frase: '"Na sala, apenas dois alunos."',
                                    explicacao: 'O verbo "havia" está omitido, mas entendido: "Na sala, havia apenas dois alunos."'
                                },
                                {
                                    frase: '"Ele gosta de matemática; eu, de português."',
                                    explicacao: 'O verbo "gosto" foi omitido na segunda parte: "Eu gosto de português."'
                                },
                                {
                                    frase: '"Comi demais ontem. Hoje, nada."',
                                    explicacao: 'O verbo "comi" está omitido na segunda frase: "Hoje, (comi) nada."'
                                },
                                {
                                    frase: '"Quando jovem, era muito tímido."',
                                    explicacao: 'O sujeito "eu" está omitido: "(Eu) quando jovem, era muito tímido."'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Elipse`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessoraAdrianaFigueiredo',
                            idVideo: 'qejJjWsnvg8'
                        }
                    },
                    {
                        titulo: 'Zeugma',
                        definicao: [
                            `Zeugma é um tipo de elipse, ou seja, também é quando uma palavra é escondida na frase. A diferença é: no zeugma, a palavra escondida já foi dita antes.`,
                            `Um exemplo simples seria na frase: "Maria gosta de ler; Paulo, de escrever", nessa frase, o verbo gostar foi omitido na segunda parte (Maria gosta de ler; Paulo gosta de escrever).`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Ele gosta de futebol; ela, de vôlei."',
                                    explicacao: 'O verbo “gosta” foi omitido na segunda oração, pois já foi usado antes. Frase completa seria: "Ela gosta de vôlei."'
                                },
                                {
                                    frase: '"João comprou um carro; Maria, uma moto."',
                                    explicacao: 'O verbo “comprou” é omitido na segunda parte, porque já foi dito. "Maria comprou uma moto.""'
                                },
                                {
                                    frase: '"Pedro fala inglês fluente; Ana, espanhol."',
                                    explicacao: 'O verbo “fala” está implícito na segunda parte da frase. (Pedro fala inglês fluente; Ana, fala espanhol.)'
                                },
                                {
                                    frase: '"Visitei Paris em julho e, no inverno, Roma."',
                                    explicacao: 'O verbo “visitei” é usado uma vez e omitido depois, quando se refere a Roma. (Visitei Paris em julho e, no inverno, visitei Roma.)'
                                },
                                {
                                    frase: '"Ela prefere doce; ele, salgado."',
                                    explicacao: 'O verbo “prefere” já está no início, então é omitido na segunda oração (Ela prefere doce; ele, prefere salgado).'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Zeugma`,
                            linkDoCanal: 'https://www.youtube.com/@ProfessoraAdrianaFigueiredo',
                            idVideo: 'zL-6wfCOM8o'
                        }
                    },
                    {
                        titulo: 'Polissíndeto',
                        definicao: [
                            `Polissíndeto é o uso repetido de conjunções (como e, ou, mas, nem) mais do que o normal numa frase. Ele é usado para dar ênfase, ritmo, ou mostrar acúmulo de ideias.`,
                            `Essa figura de sintaxe é muito utilizada como recurso estilístico, sobretudo nos textos poéticos e musicais. Esse uso repetitivo das conjunções dá uma ideia de acréscimo, sucessão e continuidade, oferecendo mais expressividade ao texto.`,
                            `Um exemplo simples seria na frase: "Ele gritava e chorava e corria e não parava", veja que o “e” aparece várias vezes. Normalmente, numa frase comum, a gente diria: “Ele gritava, chorava, corria e não parava.”, mas no polissíndeto, a conjunção é repetida de propósito.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Correu e gritou e chorou e caiu no chão."',
                                    explicacao: 'Repetição da conjunção “e” dá ritmo acelerado e mostra intensidade nas ações.'
                                },
                                {
                                    frase: '"Nem falou, nem explicou, nem pediu desculpas."',
                                    explicacao: 'Repetição de “nem” reforça a ausência total de atitude da pessoa.'
                                },
                                {
                                    frase: '"Chovia e ventava e fazia frio."',
                                    explicacao: 'A repetição de “e” intensifica a sensação do clima ruim e contínuo.'
                                },
                                {
                                    frase: '"Quero paz, mas quero justiça, mas quero verdade."',
                                    explicacao: 'Repetição de “mas” reforça o contraste entre desejos simultâneos.'
                                },
                                {
                                    frase: '"Estudava ou lia ou fazia exercícios ou revisava conteúdos."',
                                    explicacao: 'O uso repetido de “ou” dá ênfase às várias opções de atividades realizadas.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Polissíndeto`,
                            linkDoCanal: 'http://youtube.com/@ProfessoraPamba',
                            idVideo: 'Xm-zjA5c4ts'
                        }
                    },
                    {
                        titulo: 'Assíndeto',
                        definicao: [
                            `Assíndeto é quando a gente tira as conjunções (e, mas, ou...) entre as palavras ou frases que normalmente estariam ligadas.`,
                            `Ou seja, não usa conjunções onde normalmente usaria, dando um efeito de agilidade, rapidez ou urgência.`,
                            `Um exemplo simples seria na frase: "Cheguei, vi, venci.", aqui não tem “e” ligando as ações. A frase completa com conjunção seria: “Cheguei, e vi, e venci.”, como tiramos as conjunções, isso é assíndeto.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"Cheguei, vi, venci."',
                                    explicacao: 'As ações são ligadas sem conjunções, apenas por vírgulas — exemplo clássico de assíndeto.'
                                },
                                {
                                    frase: '"Abriu a porta, entrou, sentou."',
                                    explicacao: 'Três ações consecutivas, sem uso de "e" entre elas.'
                                },
                                {
                                    frase: '"O dia amanheceu, o sol apareceu, os pássaros cantaram."',
                                    explicacao: 'As orações são colocadas em sequência sem conjunção ligando-as.'
                                },
                                {
                                    frase: '"Fome, sede, cansaço tomavam conta de todos."',
                                    explicacao: 'Lista de sensações, sem “e” ligando os termos — só vírgulas.'
                                },
                                {
                                    frase: '"Veio, falou, foi embora."',
                                    explicacao: 'Sequência rápida de ações, com ausência total de conjunções.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Assindeto`,
                            linkDoCanal: 'http://youtube.com/@ProfessoraPamba',
                            idVideo: 'Xm-zjA5c4ts'
                        }
                    },
                ]
            },
            {
                titulo: 'Figuras de Som',
                id: 'figuras-de-som',
                figuras: [
                    {
                        titulo: 'Aliteração',
                        definicao: [
                            `Aliteração é a repetição de sons iguais ou parecidos no começo das palavras, principalmente sons de consoantes. Ela é usada para dar ritmo, musicalidade ou enfatizar uma ideia em textos, músicas e poesias.`,
                            `Ela produz um efeito sonoro interessante, marcando o ritmo e sugerindo alguns sons semelhantes às palavras que compõem o texto. É um recurso linguístico muito utilizado nos textos poéticos para enfatizar determinado som, oferecendo maior expressividade ao texto.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"O rato roeu a roupa do rei de Roma."',
                                    explicacao: 'Repetição do som /r/ ao longo da frase — efeito sonoro marcante.'
                                },
                                {
                                    frase: '"Vozes veladas, veludosas vozes..."',
                                    explicacao: 'Repetição do som /v/ — cria uma sensação de suavidade e mistério. (Verso de Cruz e Sousa)"'
                                },
                                {
                                    frase: '"O vento varria as velhas folhas."',
                                    explicacao: 'Repetição do som /v/ dá ritmo e reforça a ideia do vento agindo.'
                                },
                                {
                                    frase: '"Gritava, gemia, gargalhava sem parar."',
                                    explicacao: 'Repetição do som /g/ — transmite intensidade e desespero.'
                                },
                                {
                                    frase: '"Bate-bate o martelo no batente da madeira."',
                                    explicacao: 'Repetição do som /b/ reforça o som do martelo e dá musicalidade.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Aliteração`,
                            linkDoCanal: 'https://www.youtube.com/@adicadeportuguesparavoce',
                            idVideo: 'uZClZYk9Nac'
                        }
                    },
                    {
                        titulo: 'Assonância',
                        definicao: [
                            `Assonância é a repetição de sons vocálicos (ou seja, sons de vogais) dentro das palavras de uma frase ou verso. Enquanto a aliteração repete consoantes, a assonância repete vogais.`,
                            `É um recurso estilístico muito utilizado na literatura, na música e nos provérbios populares. Ela oferece maior expressividade ao texto por meio da intensificação da musicalidade e do ritmo.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"A alma da gente chora e cala."',
                                    explicacao: 'Repetição do som /a/ em várias palavras, criando um tom melancólico e ritmado.'
                                },
                                {
                                    frase: '"Ouço o som do outro mundo."',
                                    explicacao: 'Repetição do som /o/ — reforça o clima de mistério ou profundidade.'
                                },
                                {
                                    frase: '"A menina rima e brinca na vida linda."',
                                    explicacao: 'Repetição dos sons /i/ e /a, dando leveza e musicalidade à frase.'
                                },
                                {
                                    frase: '"Ecoa a voz no corpo oco."',
                                    explicacao: 'Repetição do som /o/ — transmite sensação de vazio ou ressonância.'
                                },
                                {
                                    frase: '"O tempo é lento, eterno, espesso."',
                                    explicacao: 'Repetição do som /e/ — cria ritmo arrastado, que combina com o significado da frase.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Assonância`,
                            linkDoCanal: 'https://www.youtube.com/@adicadeportuguesparavoce',
                            idVideo: 'uZClZYk9Nac'
                        }
                    },
                    {
                        titulo: 'Onomatopéia',
                        definicao: [
                            `Onomatopeia é uma palavra que imita um som. Ou seja, é quando escrevemos um som do jeito que ele parece ser ouvido.`,
                            `Ela reproduz fonemas ou palavras que imitam os sons naturais, quer sejam de objetos, de pessoas ou de animais. Esse recurso aumenta a expressividade do discurso, motivo pelo qual é muito utilizado na literatura e nas histórias em quadrinhos.`
                        ],
                        exemplos: {
                            titulo: 'São alguns exemplos:',
                            frases: [
                                {
                                    frase: '"O relógio fazia tic-tac a noite toda."',
                                    explicacao: '“Tic-tac” imita o som mecânico dos ponteiros do relógio.'
                                },
                                {
                                    frase: '"O gato miou: miau, miau."',
                                    explicacao: '“Miau” reproduz o som do miado do gato.'
                                },
                                {
                                    frase: '"De repente, bum!, a porta bateu."',
                                    explicacao: '“Bum” representa um som forte e repentino, como de algo caindo ou batendo.'
                                },
                                {
                                    frase: '"A abelha passou zumbindo: z-z-z-z..."',
                                    explicacao: '“Z-z-z-z” imita o som do voo da abelha.'
                                },
                                {
                                    frase: '"O cavalo avançou com um trote toc-toc pelo caminho."',
                                    explicacao: '“Toc-toc” simula o som dos cascos do cavalo batendo no chão.'
                                },
                            ]
                        },
                        video: {
                            titulo: `Figuras de Linguagem - Onomatopéia`,
                            linkDoCanal: 'https://www.youtube.com/@gramaticacomlaercio',
                            idVideo: 'DXChEBm0EGI'
                        }
                    },
                ]
            },
        ]
    },
    morfologia: {
        titulo: 'Morfologia',
        id: 'morfologia',
        introdução: {
            titulo: 'Introdução',
            texto: [
                `A morfologia é a parte da gramática que estuda a estrutura, a formação e a classificação das palavras. Em outras palavras, ela nos ajuda a entender como as palavras são formadas e como se encaixam nas frases. `,
                `Um dos pontos principais da morfologia é o estudo das classes gramaticais, que são os grupos em que as palavras são organizadas de acordo com sua função na frase.`,
                `Dividem-se, de forma geral, em 10 principais classes gramaticais:`
            ],
            assuntos: [
                {
                    titulo: `Substantivo`,
                    id: 'substantivo',
                    descricao: `É a palavra que dá nome às coisas, pessoas, lugares, sentimentos etc. (Ex: casa, João, amor, escola.)`
                },
                {
                    titulo: `Adjetivo`,
                    id: 'adjetivo',
                    descricao: `É a palavra que caracteriza o substantivo, mostrando uma qualidade ou estado. (Ex: bonito, triste, rápido.)`
                },
                {
                    titulo: `Artigo`,
                    id: 'artigo',
                    descricao: `Acompanha o substantivo e define se ele está determinado ou indefinido. (Ex: o, a, os, as, um, uma.)`
                },
                {
                    titulo: `Numeral`,
                    id: 'numeral',
                    descricao: `Indica quantidade, ordem, multiplicação ou fração. (Ex: um, dois, primeiro, triplo, metade)`
                },
                {
                    titulo: `Pronome`,
                    id: 'pronome',
                    descricao: `Substitui ou acompanha o nome, indicando a pessoa do discurso. (Ex: eu, tu, ele, esse, aquele, meu.)`
                },
                {
                    titulo: `Verbo`,
                    id: 'verbo',
                    descricao: `Expressa ações, estados ou fenômenos, geralmente ligados ao tempo. (Ex: correr, ser, estar, chover.)`
                },
                {
                    titulo: `Advérbio`,
                    id: 'adverbio',
                    descricao: `Modifica o verbo, o adjetivo ou outro advérbio, indicando circunstâncias (modo, tempo, lugar, intensidade etc). (Ex: rapidamente, ontem, aqui, muito.)`
                },
                {
                    titulo: `Preposição`,
                    id: 'preposicao',
                    descricao: `Liga palavras, indicando relações entre elas. (Ex: de, para, com, sobre, em.)`
                },
                {
                    titulo: `Conjunção`,
                    id: 'conjuncao',
                    descricao: `Liga orações ou palavras, indicando uma relação lógica entre elas. (Ex: e, mas, porque, embora.)`
                },
                {
                    titulo: `Interjeição`,
                    id: 'interjeicao',
                    descricao: `Expressa emoções ou reações. (Ex: ah!, nossa!, ei!, socorro!)`
                },
            ]
        },
        submaterias: [
            {
                titulo: 'Substantivo',
                id: 'substantivo',
                definicao: [
                    `Substantivo é a palavra que dá nome a seres, objetos, lugares, sentimentos, ações, qualidades, entre outros. Em palavras simples, substantivo é o nome das coisas.`,
                    `Uma dica simples é: se você pode colocar um artigo (o, a, os, as, um, uma) antes da palavra, provavelmente ela é um substantivo!`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"A menina está brincando no parquinho."',
                            explicacao: '"Menina" é o substantivo, pois é o nome da pessoa.'
                        },
                        {
                            frase: '"Eu gosto de pizza."',
                            explicacao: '"Pizza" é o substantivo, pois é o nome de um alimento.'
                        },
                        {
                            frase: '"Senti muita alegria com a notícia."',
                            explicacao: '"Alegria" é o substantivo, pois é o nome de um sentimento.'
                        },
                        {
                            frase: '"O cachorro está dormindo."',
                            explicacao: '"Cachorro" é o substantivo, pois é o nome de um animal.'
                        },
                        {
                            frase: '"Vamos à praia nas férias."',
                            explicacao: '"Praia" é o substantivo, pois é o nome de um lugar.'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Substantivo`,
                    linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                    idVideo: '8iXiBgCnGv4'
                }
            },
            {
                titulo: 'Adjetivo',
                id: 'adjetivo',
                definicao: [
                    `Adjetivo é a palavra que caracteriza o substantivo, ou seja, diz como é o ser, objeto, lugar, etc. Em simples palavras, adjetivo é a palavra que dá uma qualidade, estado, aspecto ou característica a algo.`,
                    `Uma dica simples é: Se a palavra está dizendo como é ou como está o substantivo (nome), ela é um adjetivo.`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"A menina feliz está cantando."',
                            explicacao: '"Feliz" é o adjetivo, pois mostra o estado da menina.'
                        },
                        {
                            frase: '"Comprei um carro novo."',
                            explicacao: '"Novo" é o adjetivo, pois caracteriza o carro.'
                        },
                        {
                            frase: '"A casa grande tem um jardim bonito."',
                            explicacao: '"Grande" e "bonito" são adjetivos, pois descrevem a casa e o jardim.'
                        },
                        {
                            frase: '"Foi um filme emocionante."',
                            explicacao: '"Emocionante" é o adjetivo, pois mostra como foi o filme.'
                        },
                        {
                            frase: '"O dia está chuvoso."',
                            explicacao: '"Chuvoso" é o adjetivo, pois descreve o dia.'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Adjetivo`,
                    linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                    idVideo: 'tgoAZdK4Lro'
                }
            },
            {
                titulo: 'Artigo',
                id: 'artigo',
                definicao: [
                    `Artigo é a palavra que acompanha o substantivo para determiná-lo ou indicar se é conhecido ou não. Ele vem antes do substantivo e mostra o gênero (masculino ou feminino) e o número (singular ou plural) da palavra.`,
                    `Existem 2 tipos de artigo: ARTIGOS DEFINIDOS (o, a, os, as), que são usados quando o substantivo é conhecido e ARTIGOS INDEFINIDOS (um, uma, uns, umas), que são usados quando o substantivo é desconhecido ou genérico`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"O menino está brincando."',
                            explicacao: '"O" é artigo definido, pois fala de um menino conhecido.'
                        },
                        {
                            frase: '"Uma menina entrou na sala."',
                            explicacao: '"Uma" é artigo indefinido, pois não sabemos quem é a menina.'
                        },
                        {
                            frase: '"As flores do jardim são lindas."',
                            explicacao: '"As" é artigo definido, acompanha flores (substantivo feminino e plural).'
                        },
                        {
                            frase: '"Comprei uns livros interessantes."',
                            explicacao: '"Uns" é artigo indefinido, usado de forma mais geral.'
                        },
                        {
                            frase: '"A casa está limpa."',
                            explicacao: '"A" é artigo definido, acompanha casa (feminino e singular).'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Artigo`,
                    linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                    idVideo: '7zA6LKkx25g'
                }
            },
            {
                titulo: 'Numeral',
                id: 'numeral',
                definicao: [
                    `Numeral é a palavra que indica uma quantidade exata (número) ou a ordem de algo. Ele serve para dizer quantos (quantidade) ou em que posição algo está.`,
                    `Uma dica simples para identificar um numeral é: se a palavra estiver relacionada a número, quantidade ou posição, ela é numeral.`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"Eu tenho dois irmãos."',
                            explicacao: '"Dois" é numeral cardinal, pois mostra a quantidade.'
                        },
                        {
                            frase: '"Ela ficou em primeiro lugar na corrida."',
                            explicacao: '"Primeiro" é numeral ordinal, mostra a posição.'
                        },
                        {
                            frase: '""Primeiro" é numeral ordinal, mostra a posição."',
                            explicacao: '""Dobro" é numeral multiplicativo, indica 2 vezes mais.'
                        },
                        {
                            frase: '"Tomei meio copo de suco."',
                            explicacao: '"Meio" é numeral fracionário, indica uma parte.'
                        },
                        {
                            frase: '"Chegaram cem pessoas na festa."',
                            explicacao: '"Cem" é numeral cardinal, indica uma quantidade exata.'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Numeral`,
                    linkDoCanal: 'https://www.youtube.com/@portuguescomleticia',
                    idVideo: 'Rxo6xTWgZGI'
                }
            },
            {
                titulo: 'Pronome',
                id: 'pronome',
                definicao: [
                    `Pronome é a palavra que substitui ou acompanha o substantivo, evitando repetições ou dando mais clareza à frase.`,
                    `Ele pode indicar as pessoas do discurso (quem fala, com quem se fala e de quem se fala), além de mostrar posse, quantidade, identidade, entre outros.`,
                    `Uma dica simples é se a palavra substitui ou acompanha um nome (substantivo) e evita repetições, ela é PRONOME.`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"Eu gosto de estudar."',
                            explicacao: '"Eu" é pronome pessoal (quem fala).'
                        },
                        {
                            frase: '"Ela trouxe seu livro."',
                            explicacao: '"Ela" é pronome pessoal, e "seu" é possessivo (o livro é dela).'
                        },
                        {
                            frase: '"Este caderno é meu."',
                            explicacao: '"Este" é pronome demonstrativo, mostra algo próximo.'
                        },
                        {
                            frase: '"Alguém bateu na porta."',
                            explicacao: '"Alguém" é pronome indefinido, pois não se sabe quem é.'
                        },
                        {
                            frase: '"Quem chegou primeiro?"',
                            explicacao: '"Quem" é pronome interrogativo, usado na pergunta.'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Pronome`,
                    linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                    idVideo: 'yHr9yjKkX_k'
                }
            },
            {
                titulo: 'Verbo',
                id: 'verbo',
                definicao: [
                    `Verbo é a palavra que indica ação, estado, mudança ou fenômeno da natureza. É o que a pessoa ou coisa faz, sente ou está sendo.`,
                    `Uma dica simples é se a palavra indica o que alguém faz, é, está ou sente, ela é um verbo. Muitas vezes, a gente consegue conjugar o verbo (eu como, tu comes, ele come...) — isso também ajuda a identificar!`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"Eu estudo todos os dias."',
                            explicacao: '"Estudo" é o verbo, indica a ação de estudar.'
                        },
                        {
                            frase: '"Ele corre muito rápido."',
                            explicacao: '"Corre" é o verbo, ação de correr.'
                        },
                        {
                            frase: '"Nós somos amigos."',
                            explicacao: '"Somos" é o verbo, indica o estado de ser.'
                        },
                        {
                            frase: '"O céu ficou escuro."',
                            explicacao: '"Ficou" é o verbo, indica uma mudança.'
                        },
                        {
                            frase: '"Hoje choveu bastante."',
                            explicacao: '"Choveu" é o verbo, fenômeno da natureza.'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Verbo`,
                    linkDoCanal: 'https://www.youtube.com/c/Portugu%C3%AAssemEnrola%C3%A7%C3%A3o',
                    idVideo: '7T7DyQe8qbo'
                }
            },
            {
                titulo: 'Advérbio',
                id: 'adverbio',
                definicao: [
                    `Advérbio é a palavra que modifica o sentido de um verbo, adjetivo ou outro advérbio, indicando como, quando, onde, com que intensidade, etc. Ele dá mais informações sobre a ação ou uma característica.`,
                    `Se a palavra diz algo sobre o verbo, adjetivo ou outro advérbio (como, quando, onde, quanto...), ela é um advérbio.`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"Ela fala rapidamente."',
                            explicacao: '"Rapidamente" é advérbio de modo (como ela fala?).'
                        },
                        {
                            frase: '"Ontem choveu bastante."',
                            explicacao: '"Ontem" é advérbio de tempo (quando choveu?).'
                        },
                        {
                            frase: '"O gato está aqui."',
                            explicacao: '"Aqui" é advérbio de lugar (onde está o gato?).'
                        },
                        {
                            frase: '"Estou muito cansado."',
                            explicacao: '"Muito" é advérbio de intensidade (quão cansado?).'
                        },
                        {
                            frase: '"Ele não quer sair."',
                            explicacao: '"Não" é advérbio de negação (nega a ação).'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Advérbio`,
                    linkDoCanal: 'https://www.youtube.com/c/Portugu%C3%AAssemEnrola%C3%A7%C3%A3o',
                    idVideo: 'HAmETXF6Mpc'
                }
            },
            {
                titulo: 'Preposição',
                id: 'preposicao',
                definicao: [
                    `Preposição é a palavra que liga duas outras palavras na frase, estabelecendo uma relação entre elas (como tempo, lugar, causa, posse, meio...). Ela não tem significado sozinha, mas dá sentido à frase quando usada com outras palavras.`,
                    `São exemplos de preposições: de (origem, posse), em (lugar), com (companhia, instrumento), para (destino, finalidade), por (causa, meio), a (direcao, tempo), entre (posição entre dois elementos), sem (ausência), sobre (assunto, posição acima).`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"O presente é de Ana."',
                            explicacao: '"De" mostra posse (o presente pertence à Ana).'
                        },
                        {
                            frase: '"Estou em casa."',
                            explicacao: '"Em" mostra lugar (onde estou?).'
                        },
                        {
                            frase: '"Escrevi a carta com caneta azul."',
                            explicacao: '"Com" mostra o instrumento usado.'
                        },
                        {
                            frase: '"Vamos para a escola."',
                            explicacao: '"Para" mostra destino.'
                        },
                        {
                            frase: '"Lutaram por liberdade."',
                            explicacao: '"Por" mostra o motivo da luta.'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Preposição`,
                    linkDoCanal: 'https://www.youtube.com/c/Portugu%C3%AAssemEnrola%C3%A7%C3%A3o',
                    idVideo: 'KRIE_1XNATY'
                }
            },
            {
                titulo: 'Conjunção',
                id: 'conjuncao',
                definicao: [
                    `Conjunção é a palavra que liga duas orações ou dois termos semelhantes dentro de uma mesma frase. Ela conecta ideias, mostrando relações como adição, oposição, causa, consequência, comparação, etc.`,
                    `Uma dica simples é se a palavra está ligando frases ou ideias e explicando a relação entre elas, é uma conjunção.`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"Gosto de estudar e de ler."',
                            explicacao: '"E" é conjunção aditiva, junta duas ações.'
                        },
                        {
                            frase: '"Estava cansado, mas continuou trabalhando."',
                            explicacao: '"Mas" é conjunção adversativa, mostra contraste.'
                        },
                        {
                            frase: '"Não fui à escola porque estava doente."',
                            explicacao: '"Porque" é conjunção causal, mostra o motivo.'
                        },
                        {
                            frase: '"Estava com fome, por isso comeu rápido."',
                            explicacao: '"Por isso" é conjunção consecutiva, mostra consequência.'
                        },
                        {
                            frase: '"Se chover, não sairemos."',
                            explicacao: '"Se" é conjunção condicional, mostra uma condição.'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Preposição`,
                    linkDoCanal: 'https://www.youtube.com/c/Portugu%C3%AAssemEnrola%C3%A7%C3%A3o',
                    idVideo: 'KRIE_1XNATY'
                }
            },
            {
                titulo: 'Interjeição',
                id: 'interjeicao',
                definicao: [
                    `Interjeição é a palavra ou expressão usada para expressar emoções, sentimentos, reações ou sons espontâneos. Pode mostrar alegria, dor, medo, surpresa, dúvida, raiva, entre outros sentimentos — sem precisar de uma frase completa.`,
                    `São exemplos de interjeições: Ah (alívio, tristeza ou surpresa), Ufa! (alívio), Ai! (dor), Eba! (alegria), Puxa! (admiração, decepção), Nossa!	(surpresa), Ih!	(desapontamento ou erro), Credo! (nojo ou susto), Uau! (surpresa boa ou admiração), Socorro! (pedido de ajuda)`
                ],
                exemplos: {
                    titulo: 'São alguns exemplos:',
                    frases: [
                        {
                            frase: '"Eba! Vamos viajar amanhã!"',
                            explicacao: '"Eba!" mostra alegria espontânea.'
                        },
                        {
                            frase: '"Ai! Isso doeu!"',
                            explicacao: '"Ai!" expressa dor.'
                        },
                        {
                            frase: '"Ufa! Consegui terminar a prova."',
                            explicacao: '"Ufa!" mostra alívio.'
                        },
                        {
                            frase: '"Nossa! Que lugar lindo!"',
                            explicacao: '"Nossa!" expressa surpresa.'
                        },
                        {
                            frase: '"Socorro! Tem alguém preso ali!"',
                            explicacao: '"Socorro!" é um pedido urgente de ajuda.'
                        },
                    ]
                },
                video: {
                    titulo: `Morfologia - Interjeição`,
                    linkDoCanal: 'https://www.youtube.com/@portuguescomleticia',
                    idVideo: 'fCVBUAt71TA'
                }
            },
        ]
    },
    pontuacao: {
        titulo: 'Pontuação',
        id: 'pontuacao',
        introducao: {
            titulo: 'Introdução',
            texto: [
                `A pontuação é um dos pilares da escrita eficaz. Ela não apenas organiza as ideias e dá ritmo à leitura, mas também é fundamental para a clareza e a correta interpretação de qualquer texto.`,
                `No contexto de editais e provas, o domínio da pontuação é um diferencial crucial, pois um sinal mal empregado pode alterar completamente o sentido de uma frase ou, em casos mais graves, comprometer a coerência de um argumento.`
            ],
            assuntos: [
                {
                    titulo: `Vírgula`,
                    id: 'virgula',
                    descricao: `Separa partes da frase para dar clareza, organizar ideias ou indicar uma pausa. Ex: João saiu cedo, mas voltou à tarde.`
                },
                {
                    titulo: `Ponto`,
                    id: 'ponto',
                    descricao: `Marca o fim de uma frase ou ideia completa. Ex: Ela foi ao mercado.`
                },
                {
                    titulo: `Aspas`,
                    id: 'aspas',
                    descricao: `Usadas para destacar falas, expressões, palavras estrangeiras ou dar ênfase. Ex: Ele disse: “Estou cansado”.`
                },
            ],
            submaterias: [
                {
                    titulo: 'Substantivo',
                    id: 'substantivo',
                    definicao: [
                        `Substantivo é a palavra que dá nome a seres, objetos, lugares, sentimentos, ações, qualidades, entre outros. Em palavras simples, substantivo é o nome das coisas.`,
                        `Uma dica simples é: se você pode colocar um artigo (o, a, os, as, um, uma) antes da palavra, provavelmente ela é um substantivo!`
                    ],
                    exemplos: {
                        titulo: 'São alguns exemplos:',
                        frases: [
                            {
                                frase: '"A menina está brincando no parquinho."',
                                explicacao: '"Menina" é o substantivo, pois é o nome da pessoa.'
                            },
                            {
                                frase: '"Eu gosto de pizza."',
                                explicacao: '"Pizza" é o substantivo, pois é o nome de um alimento.'
                            },
                            {
                                frase: '"Senti muita alegria com a notícia."',
                                explicacao: '"Alegria" é o substantivo, pois é o nome de um sentimento.'
                            },
                            {
                                frase: '"O cachorro está dormindo."',
                                explicacao: '"Cachorro" é o substantivo, pois é o nome de um animal.'
                            },
                            {
                                frase: '"Vamos à praia nas férias."',
                                explicacao: '"Praia" é o substantivo, pois é o nome de um lugar.'
                            },
                        ]
                    },
                    video: {
                        titulo: `Morfologia - Substantivo`,
                        linkDoCanal: 'https://www.youtube.com/@ProfessorNoslen',
                        idVideo: '8iXiBgCnGv4'
                    }
                },
            ]
        }
    }
}

export default portugues