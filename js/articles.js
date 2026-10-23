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
    id: "inteligencia-artificial",
    category: "Tecnologia",
    date: "2026-10-20",
    readTime: "5 MIN DE LEITURA",
    title: "Inteligência artificial: como as máquinas aprendem?",
    excerpt: "A tecnologia parece mágica, mas por trás das respostas existem dados, padrões e muito treinamento.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Ilustração abstrata de inteligência artificial em tons azuis",
    featured: true,
    content: [
      { type: "p", text: "A inteligência artificial (IA) está presente em recomendações de vídeos, filtros de fotos, assistentes virtuais e ferramentas que ajudam a escrever ou programar. Apesar do nome parecer coisa de ficção científica, a ideia central é criar sistemas capazes de realizar tarefas que normalmente exigiriam habilidades humanas, como reconhecer imagens, compreender linguagem ou identificar padrões." },
      { type: "h3", text: "Aprender com exemplos" },
      { type: "p", text: "Muitos sistemas modernos de IA usam aprendizado de máquina. Em vez de receber uma regra escrita para cada situação possível, o sistema analisa muitos exemplos e ajusta seus parâmetros para encontrar padrões. Um modelo treinado com muitas imagens de gatos, por exemplo, pode aprender características que ajudam a reconhecer um gato em uma imagem nova." },
      { type: "p", text: "Esse aprendizado depende da qualidade e da variedade dos dados. Se os exemplos forem limitados ou representarem mal o mundo real, o resultado também pode ser limitado. Por isso, pessoas precisam avaliar como os sistemas são treinados e em quais situações eles funcionam bem." },
      { type: "h3", text: "A IA não sabe tudo" },
      { type: "p", text: "Uma ferramenta de IA pode produzir uma resposta convincente e ainda assim cometer erros. Ela não deve ser tratada como uma fonte infalível: informações importantes precisam ser conferidas, principalmente quando envolvem saúde, dinheiro, segurança ou decisões relevantes." },
      { type: "p", text: "Também existem questões éticas, como privacidade, direitos autorais, vieses e o impacto das decisões automatizadas. Usar IA de forma responsável significa entender seus benefícios, reconhecer suas limitações e manter a supervisão humana quando necessário." },
      { type: "h3", text: "Em resumo" },
      { type: "p", text: "A IA é uma área ampla da computação. Alguns sistemas seguem regras definidas por pessoas; outros aprendem padrões a partir de dados. Em ambos os casos, bons resultados exigem objetivos claros, testes e avaliação crítica." }
    ],
    quiz: [
      { question: "O que caracteriza muitos sistemas de aprendizado de máquina?", options: ["Eles aprendem padrões a partir de exemplos e dados.", "Eles pensam exatamente como uma pessoa.", "Eles funcionam sem nenhum treinamento."], answer: 0, explanation: "O aprendizado de máquina utiliza dados e exemplos para ajustar um modelo e reconhecer padrões. Isso não significa que ele pense ou compreenda o mundo da mesma forma que uma pessoa." },
      { question: "Por que é importante verificar uma resposta gerada por IA?", options: ["Porque toda resposta é necessariamente falsa.", "Porque a ferramenta pode produzir erros mesmo quando parece confiante.", "Porque a IA só responde com perguntas."], answer: 1, explanation: "Sistemas de IA podem gerar informações incorretas ou desatualizadas com uma linguagem convincente. Conferir fontes confiáveis ajuda a evitar que esses erros sejam tratados como fatos." },
      { question: "Qual atitude demonstra uso responsável da IA?", options: ["Compartilhar qualquer dado pessoal para receber respostas melhores.", "Aceitar todas as respostas sem questionar.", "Considerar limitações, proteger dados e conferir informações importantes."], answer: 2, explanation: "Usar IA com responsabilidade inclui cuidar da privacidade, avaliar possíveis vieses e confirmar informações importantes, mantendo a participação humana nas decisões relevantes." }
    ]
  },
  {
    id: "sono-e-memoria",
    category: "Ciência",
    date: "2026-10-13",
    readTime: "4 MIN DE LEITURA",
    title: "Sono e memória: por que dormir ajuda a aprender?",
    excerpt: "Dormir não é tempo perdido: durante o descanso, o cérebro trabalha em processos importantes para a memória.",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b6d4e1a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Quarto aconchegante com luz suave e cama",
    featured: true,
    content: [
      { type: "p", text: "Depois de estudar por horas, pode parecer tentador trocar algumas horas de sono por mais uma revisão. Mas o sono participa de processos importantes para a aprendizagem. Ele não substitui o estudo, porém ajuda o cérebro a organizar e estabilizar parte do que foi aprendido." },
      { type: "h3", text: "O cérebro continua ativo" },
      { type: "p", text: "O sono acontece em ciclos que incluem diferentes fases. Durante a noite, a atividade cerebral muda, e diferentes fases estão associadas a funções como memória, regulação emocional e recuperação física. A consolidação da memória é o processo pelo qual lembranças recentes podem se tornar mais estáveis ao longo do tempo." },
      { type: "p", text: "Isso não significa que o cérebro simplesmente grave tudo o que aconteceu durante o dia. O que lembramos depende de muitos fatores: atenção, compreensão, prática, emoções e também descanso." },
      { type: "h3", text: "Estudar melhor, não apenas por mais tempo" },
      { type: "p", text: "Estratégias como distribuir o estudo em vários dias, tentar recordar a matéria sem olhar as anotações e fazer pausas podem ajudar a aprender. Dormir de forma regular complementa essas estratégias e favorece a atenção no dia seguinte." },
      { type: "h3", text: "Cada pessoa tem necessidades diferentes" },
      { type: "p", text: "A necessidade de sono varia com a idade e de pessoa para pessoa. Rotina consistente, ambiente confortável e menos estímulos perto da hora de dormir podem ajudar. Se as dificuldades para dormir forem persistentes ou atrapalharem muito o dia a dia, vale conversar com um profissional de saúde." }
    ],
    quiz: [
      { question: "Qual é uma função associada ao sono?", options: ["Apagar todas as lembranças do dia.", "Ajudar a consolidar algumas memórias.", "Garantir que a pessoa nunca esqueça nada."], answer: 1, explanation: "O sono participa da consolidação da memória, ajudando a estabilizar parte do que foi aprendido. Ele não garante que todas as informações sejam lembradas." },
      { question: "Qual estratégia pode complementar uma boa rotina de sono?", options: ["Estudar tudo apenas na véspera.", "Evitar qualquer pausa durante o estudo.", "Distribuir o estudo ao longo de vários dias."], answer: 2, explanation: "Distribuir o estudo ao longo do tempo permite revisitar o conteúdo e fortalecer a aprendizagem. O descanso complementa a prática, em vez de substituí-la." },
      { question: "O que o sono faz com a aprendizagem?", options: ["Ajuda, mas não substitui atenção e prática.", "Torna o estudo desnecessário.", "Faz todo conteúdo ser memorizado automaticamente."], answer: 0, explanation: "O sono é importante, mas aprender também depende de atenção, compreensão, prática e outros fatores. Não existe garantia de memorizar tudo apenas dormindo." }
    ]
  },
  {
    id: "pegada-digital",
    category: "Comportamento",
    date: "2026-10-06",
    readTime: "5 MIN DE LEITURA",
    title: "Pegada digital: o que suas ações deixam na internet?",
    excerpt: "Curtidas, comentários e cadastros formam rastros digitais. Entender isso ajuda a navegar com mais consciência.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Pessoa usando notebook em uma mesa de trabalho",
    featured: true,
    content: [
      { type: "p", text: "Toda vez que usamos um aplicativo, visitamos um site ou publicamos algo, podemos deixar informações para trás. Esse conjunto de rastros é conhecido como pegada digital. Ela pode incluir publicações, comentários, fotos, dados de navegação e informações fornecidas ao criar uma conta." },
      { type: "h3", text: "Pegadas ativas e passivas" },
      { type: "p", text: "A pegada digital ativa é formada por informações que compartilhamos intencionalmente, como uma foto publicada ou um comentário. A pegada passiva pode incluir dados coletados durante o uso de serviços, como informações técnicas do dispositivo ou registros de navegação, dependendo das configurações e das práticas da plataforma." },
      { type: "p", text: "Nem todo dado coletado fica público, e cada serviço funciona de um jeito. Ainda assim, vale ler as configurações de privacidade e entender quais permissões estamos concedendo." },
      { type: "h3", text: "Pense antes de publicar" },
      { type: "p", text: "Uma publicação pode ser copiada, salva ou compartilhada por outras pessoas. Apagar o conteúdo original nem sempre remove todas as cópias. Antes de publicar, considere se há dados pessoais, localização, informações de outras pessoas ou algo que você não gostaria que circulasse fora do contexto original." },
      { type: "h3", text: "Hábitos digitais mais conscientes" },
      { type: "p", text: "Use senhas fortes e diferentes, ative a autenticação em duas etapas quando possível, revise permissões dos aplicativos e desconfie de links inesperados. Também é importante pedir consentimento antes de publicar imagens ou informações de outras pessoas." },
      { type: "p", text: "Ter consciência da pegada digital não significa deixar de participar da internet. Significa escolher com mais cuidado o que compartilhar e compreender que dados têm valor." }
    ],
    quiz: [
      { question: "Qual é um exemplo de pegada digital ativa?", options: ["Publicar um comentário em uma rede social.", "Um registro técnico coletado automaticamente.", "O funcionamento interno de um roteador."], answer: 0, explanation: "A pegada ativa envolve informações compartilhadas intencionalmente, como comentários, fotos ou publicações feitas pelo próprio usuário." },
      { question: "Por que apagar uma publicação pode não remover totalmente seu conteúdo?", options: ["Porque a internet não permite apagar nada.", "Porque outras pessoas podem ter copiado ou salvado o conteúdo.", "Porque toda publicação é sempre pública para sempre."], answer: 1, explanation: "Outras pessoas podem fazer capturas de tela, baixar arquivos ou compartilhar cópias. Por isso, é bom pensar antes de publicar, mesmo quando existe uma opção de apagar." },
      { question: "Qual hábito ajuda a proteger a vida digital?", options: ["Usar a mesma senha em todos os serviços.", "Aceitar todas as permissões sem ler.", "Revisar permissões e ativar autenticação em duas etapas quando disponível."], answer: 2, explanation: "Revisar permissões e usar autenticação em duas etapas pode reduzir riscos. Senhas fortes e diferentes para cada serviço também ajudam a proteger as contas." }
    ]
  }
];
