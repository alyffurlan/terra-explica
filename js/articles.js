/*
  COMO PUBLICAR UM NOVO ARTIGO:
  1. Copie um objeto completo abaixo e cole no início do array ARTICLES.
  2. Preencha id, category, date, readTime, title, excerpt, image, imageAlt, content e quiz.
  3. Cada artigo deve ter exatamente 3 perguntas. Para cada pergunta, crie 3 opções,
     indique a correta em "answer" (0, 1 ou 2) e explique em "explanation".
  4. Salve e publique o repositório novamente.
  Imagens: prefira URLs diretas de imagens públicas. Para guardar imagens no projeto,
  coloque-as em assets/ e use, por exemplo, "assets/minha-imagem.jpg".
*/
const ARTICLES = [
  {
    id: "placas-tectonicas",
    category: "Geologia",
    date: "2026-10-28",
    readTime: "4 MIN DE LEITURA",
    title: "Placas tectônicas: por que a superfície da Terra está sempre em movimento?",
    excerpt: "O chão sob nossos pés parece parado, mas a litosfera é feita de grandes blocos que se movem lentamente e transformam o planeta.",
    image: "assets/placas-tectonicas.jpg",
    imageAlt: "Ilustração em corte da subducção da Placa de Nazca sob a Placa Sul-Americana, com a Cordilheira dos Andes e um vulcão",
    featured: true,
    content: [
      { type: "p", text: "As placas tectônicas são grandes blocos rochosos que formam a camada mais externa da Terra, chamada litosfera. Essas placas se movimentam lentamente sobre uma região do manto chamada astenosfera, e seus movimentos são responsáveis por diversas transformações no planeta, como terremotos, vulcões e formação de montanhas." },
      { type: "h3", text: "Três tipos de movimento" },
      { type: "p", text: "Existem três tipos principais de movimentos das placas tectônicas. O movimento convergente acontece quando duas placas se aproximam e colidem, podendo formar montanhas e provocar terremotos. Um exemplo é a Cordilheira dos Andes, formada pela interação entre as placas de Nazca e Sul-Americana." },
      { type: "p", text: "Já o movimento divergente ocorre quando duas placas se afastam, permitindo a subida do magma e a formação de uma nova crosta terrestre, como acontece na Dorsal Mesoatlântica." },
      { type: "p", text: "Por fim, o movimento transformante acontece quando duas placas deslizam lateralmente uma em relação à outra, causando atrito e podendo provocar terremotos, como ocorre na Falha de San Andreas, nos Estados Unidos." },
      { type: "h3", text: "A deriva continental" },
      { type: "p", text: "A movimentação das placas também está relacionada à teoria da deriva continental, proposta pelo cientista Alfred Wegener. Segundo essa teoria, os continentes já estiveram unidos em um único supercontinente chamado Pangeia, que começou a se separar há milhões de anos, dando origem à configuração atual dos continentes e oceanos." },
      { type: "h3", text: "E no Brasil?" },
      { type: "p", text: "Esses movimentos continuam acontecendo e podem causar terremotos, erupções vulcânicas e tsunamis. No Brasil, esses fenômenos são menos frequentes e intensos do que em regiões próximas aos limites das placas, pois o país está localizado no interior da Placa Sul-Americana. Mesmo assim, podem ocorrer terremotos de menor intensidade." },
      { type: "h3", text: "Em resumo" },
      { type: "p", text: "O estudo das placas tectônicas é importante para entender como a superfície terrestre se transforma ao longo do tempo e como esses movimentos influenciam a formação do relevo e a ocorrência de fenômenos naturais." }
    ],
    quiz: [
      { question: "(FUVEST 2026) A África Oriental utiliza recursos geotérmicos para gerar cerca de 630 MW por ano. O Quênia é o líder africano em usinas geotérmicas em operação, totalizando mais de 40% da produção total de eletricidade do país. Qual alternativa apresenta, respectivamente, o processo geológico e sua consequência no terreno que explicam a exploração de energia geotérmica no Quênia?", options: ["Movimento transcorrente; morros testemunhos.", "Movimento divergente de placas; rift valley.", "Movimento convergente; cadeias montanhosas."], answer: 1, explanation: "Na África Oriental as placas se afastam (movimento divergente). Esse afastamento permite a subida do magma e forma vales de rift (rift valley), onde o calor do interior da Terra fica mais próximo da superfície e pode ser aproveitado como energia geotérmica." },
      { question: "(FUVEST 2022) Em virtude do movimento das placas tectônicas, a distância entre a América do Sul e a África aumenta, nos dias atuais, cerca de 2,0 cm a cada ano. Supondo que essa velocidade tivesse sido constante ao longo do tempo, e tomando uma distância atual de cerca de 5.000 km, qual é a melhor estimativa do tempo transcorrido desde que ambas estavam unidas em um único supercontinente?", options: ["2.500.000 anos", "25.000.000 anos", "250.000.000 anos"], answer: 2, explanation: "5.000 km equivalem a 500.000.000 cm. Dividindo por 2 cm por ano, obtemos 250.000.000 anos. O valor é da ordem de grandeza correta, embora estimativas mais precisas deem um resultado diferente, e remete à separação da Pangeia." },
      { question: "(UNICAMP 2017) O poeta Zhu Xi escreveu há cerca de 1200 anos: “No topo das altas montanhas vejo conchas que me dizem que antigos lugares de baixa altitude se elevaram para os céus e moram agora nos mais elevados picos. Estas conchas dizem-me também que materiais vivos de animais se converteram nas mais duras e inertes rochas.” O poema faz referência:", options: ["à presença de fósseis de moluscos em montanhas que se formaram em regiões antes cobertas por água.", "ao processo de migração de moluscos marinhos para topos de montanhas e a sua posterior fossilização.", "à existência de fósseis de moluscos que habitavam topos de montanhas e hoje estão extintos."], answer: 0, explanation: "As conchas encontradas no alto das montanhas indicam que aquelas áreas já estiveram cobertas por água. Com o movimento das placas, o terreno foi elevado e hoje forma montanhas. Os moluscos não migraram até os topos nem viviam ali." }
    ]
  },
  {
    id: "camadas-da-terra",
    category: "Geologia",
    date: "2026-10-28",
    readTime: "4 MIN DE LEITURA",
    title: "Camadas da Terra: o que existe por baixo dos nossos pés?",
    excerpt: "Crosta, manto e núcleo: conheça as três camadas do planeta e como os cientistas estudam um interior que ninguém consegue visitar.",
    image: "assets/camadas-da-terra.jpg",
    imageAlt: "Ilustração do interior da Terra em corte, mostrando crosta, manto, núcleo externo e núcleo interno",
    featured: true,
    content: [
      { type: "p", text: "A Terra é formada por três camadas principais: crosta, manto e núcleo, que apresentam diferenças de composição, temperatura, pressão e estado físico. O estudo dessas camadas permite compreender melhor a estrutura do planeta e fenômenos naturais, como terremotos, vulcões e o movimento das placas tectônicas." },
      { type: "h3", text: "Crosta: a camada onde vivemos" },
      { type: "p", text: "A crosta terrestre é a camada mais externa, fina e sólida, onde vivemos e onde se encontram os continentes e os oceanos. Ela se divide em crosta continental, que forma os continentes, e crosta oceânica, localizada sob os oceanos. A crosta é fragmentada em placas tectônicas que se movimentam lentamente." },
      { type: "h3", text: "Manto: a camada mais espessa" },
      { type: "p", text: "O manto é a camada intermediária e a mais espessa do planeta. É composto principalmente por rochas ricas em silicatos, magnésio e ferro. Apesar de ser predominantemente sólido, seus materiais podem apresentar comportamento plástico e movimentar-se lentamente por meio de correntes de convecção, contribuindo para o deslocamento das placas tectônicas. Nessa camada, a temperatura aumenta conforme a profundidade." },
      { type: "h3", text: "Núcleo: o centro de ferro e níquel" },
      { type: "p", text: "O núcleo é a camada mais interna da Terra, constituída principalmente por ferro e níquel. Ele se divide em núcleo externo, que apresenta estado líquido, e núcleo interno, que permanece sólido devido à enorme pressão existente nessa região. Os movimentos dos metais líquidos no núcleo externo são responsáveis pela geração do campo magnético terrestre." },
      { type: "h3", text: "Como sabemos o que há lá dentro?" },
      { type: "p", text: "Como não é possível observar diretamente as regiões mais profundas do planeta, os cientistas estudam sua estrutura por meio de evidências indiretas, especialmente das ondas sísmicas produzidas pelos terremotos. Essas pesquisas ajudam a compreender a composição interna da Terra e os processos responsáveis por sua dinâmica geológica." },
      { type: "h3", text: "Em resumo" },
      { type: "p", text: "As três camadas apresentam características distintas, mas estão relacionadas ao funcionamento do planeta. A crosta abriga a vida, o manto participa da dinâmica das placas tectônicas e o núcleo contribui para a formação do campo magnético terrestre." }
    ],
    quiz: [
      { question: "(UFRGS 2024) Na estrutura interna da Terra, cada camada apresenta características específicas. Qual camada é formada principalmente por ferro e níquel e está relacionada à origem do campo magnético terrestre?", options: ["Crosta", "Manto", "Núcleo"], answer: 2, explanation: "O núcleo é composto principalmente por ferro e níquel, e os movimentos dos metais líquidos do núcleo externo geram o campo magnético. Já a crosta apresenta porções continentais e oceânicas, e os movimentos do manto contribuem para o deslocamento das placas tectônicas." },
      { question: "(UFPEL 2009) Analise as afirmações sobre a composição e a estrutura interna da Terra. I. O manto é formado principalmente por níquel e ferro e se divide em manto superior e inferior. II. A crosta terrestre apresenta porções continentais e oceânicas, com diferenças em sua composição mineralógica. III. O núcleo possui uma parte externa líquida e uma parte interna sólida, podendo atingir temperaturas muito elevadas. IV. A litosfera corresponde somente à camada mais externa da crosta terrestre. Quais afirmações estão corretas?", options: ["I, III e IV.", "II e III.", "III e IV."], answer: 1, explanation: "Apenas II e III estão corretas. A composição do manto é predominantemente silicatada, com magnésio e ferro, e não principalmente níquel e ferro (I). Além disso, a litosfera inclui a crosta e a porção mais rígida do manto superior, e não apenas a parte externa da crosta (IV)." },
      { question: "(UFRGS 2016) A Islândia está localizada em uma região de afastamento de placas tectônicas e apresenta vulcões ativos e áreas geotérmicas. Analise as afirmações. I. A Islândia está localizada em uma região de afastamento de placas tectônicas, o que favorece a atividade vulcânica. II. O manto apresenta movimentos lentos associados a diferenças de temperatura no interior do planeta, contribuindo para a dinâmica das placas tectônicas. III. O núcleo terrestre possui uma parte externa líquida e uma parte interna sólida, podendo atingir temperaturas próximas de 6.000 °C. Quais afirmações estão corretas?", options: ["Apenas I.", "I, II e III.", "Apenas II e III."], answer: 1, explanation: "As três afirmações são consideradas corretas no contexto da questão. Os movimentos do manto contribuem para a dinâmica das placas, e o núcleo apresenta uma parte externa líquida e outra interna sólida. Descrever o manto como fluido, como ocorre em algumas abordagens didáticas, é uma simplificação: ele é predominantemente sólido, embora possa se deformar lentamente." }
    ]
  },
  {
    id: "terremotos",
    category: "Geologia",
    date: "2026-10-28",
    readTime: "5 MIN DE LEITURA",
    title: "Terremotos: por que a Terra treme e como reduzir os riscos?",
    excerpt: "Tremores repentinos nascem da liberação de energia no interior do planeta. Entenda as causas, as formas de medir e as consequências.",
    image: "assets/terremotos.jpg",
    imageAlt: "Ilustração em corte de um terremoto, com hipocentro, epicentro, ondas sísmicas e o traçado de um sismógrafo",
    featured: true,
    content: [
      { type: "p", text: "Os terremotos, também chamados de abalos sísmicos, são tremores repentinos da superfície terrestre provocados pela liberação de energia acumulada no interior da Terra. Sua principal causa é o movimento das placas tectônicas, grandes blocos que formam a litosfera e se deslocam lentamente sobre camadas mais profundas do planeta. Quando essas placas se chocam, se afastam ou deslizam umas em relação às outras, podem ocorrer rupturas nas rochas e a liberação de ondas sísmicas." },
      { type: "h3", text: "Hipocentro e epicentro" },
      { type: "p", text: "O ponto no interior da Terra onde o terremoto se inicia é chamado de hipocentro, enquanto o epicentro é o ponto da superfície localizado diretamente acima dele. Os terremotos são mais frequentes nas bordas das placas tectônicas, como ocorre no Japão, no Chile e na Turquia. Entretanto, também podem acontecer no interior das placas, devido à movimentação de falhas geológicas." },
      { type: "h3", text: "Magnitude e intensidade" },
      { type: "p", text: "A magnitude de um terremoto indica a quantidade de energia liberada e pode ser determinada por registros de instrumentos chamados sismógrafos. Já a intensidade corresponde aos efeitos e danos provocados em determinado local. Tradicionalmente, a magnitude é associada à escala Richter, enquanto a escala Mercalli Modificada avalia os efeitos observados. A intensidade dos danos depende não apenas da magnitude, mas também da profundidade do abalo, da distância em relação ao epicentro e da resistência das construções." },
      { type: "h3", text: "Consequências" },
      { type: "p", text: "Entre as principais consequências dos terremotos estão rachaduras, desabamentos, deslizamentos de terra, incêndios e prejuízos à infraestrutura. Quando um abalo ocorre no fundo do oceano e provoca grande deslocamento de água, pode gerar um tsunami, com ondas capazes de atingir áreas costeiras." },
      { type: "h3", text: "E no Brasil?" },
      { type: "p", text: "O Brasil está localizado no interior da Placa Sul-Americana, distante de seus limites mais ativos, por isso apresenta, em geral, terremotos menos intensos do que países situados nas bordas das placas. Mesmo assim, pequenos e, ocasionalmente, moderados abalos podem ocorrer devido à reativação de falhas geológicas." },
      { type: "h3", text: "Como reduzir os riscos" },
      { type: "p", text: "Embora ainda não seja possível prever com precisão quando e onde acontecerá um terremoto, o monitoramento sísmico, o planejamento urbano e as construções resistentes ajudam a reduzir os riscos e os prejuízos." }
    ],
    quiz: [
      { question: "(ENEM 2024) Diferentes tremores foram registrados no Chile, no interior do Amazonas e em municípios do interior de São Paulo. Essas regiões apresentam características geológicas distintas, que influenciam a ocorrência dos abalos sísmicos. Qual fator explica principalmente as diferenças na ocorrência desses fenômenos?", options: ["A presença de planícies costeiras nas regiões atingidas.", "A proximidade de zonas de subducção entre placas tectônicas.", "A localização das cidades em bacias continentais."], answer: 1, explanation: "As zonas de subducção, onde uma placa mergulha sob outra, estão associadas a muitos terremotos intensos, como os do Chile. Já no interior da Placa Sul-Americana, longe dessas bordas, os abalos tendem a ser menos intensos." },
      { question: "(UNICAMP 2024) A Turquia apresenta histórico de terremotos de grande magnitude por estar localizada em uma região de contato entre placas tectônicas. Os terremotos de 1939 e de 2023 estiveram associados à movimentação da Placa da Anatólia em relação a outras placas. Qual alternativa identifica corretamente as placas envolvidas e o tipo de falha relacionado a esses movimentos?", options: ["Placas Euroasiática e Arábica; falhas transcorrentes.", "Placas Arábica e Euroasiática; falhas normais.", "Placas Africana e Indiana; falhas transcorrentes."], answer: 0, explanation: "Os movimentos relativos entre a Placa da Anatólia e as placas vizinhas (Euroasiática e Arábica) envolvem falhas transcorrentes, nas quais os blocos rochosos deslizam lateralmente." },
      { question: "(UNICAMP 2019) Os terremotos liberam energia em forma de ondas sísmicas, que se propagam pelo interior da Terra e podem ser longitudinais ou transversais. Considere um contato transformante entre placas tectônicas, como o encontrado na Califórnia, nos Estados Unidos. Qual alternativa descreve corretamente uma característica das ondas sísmicas longitudinais?", options: ["A oscilação ocorre perpendicularmente à direção de propagação.", "A onda se propaga apenas pela superfície terrestre.", "A oscilação ocorre na mesma direção da propagação da onda."], answer: 2, explanation: "Nas ondas longitudinais, as partículas oscilam paralelamente à direção em que a onda se propaga. Nas transversais, a oscilação é perpendicular a essa direção." }
    ]
  }
];
