/**
 * Soluções liberadas (PÁGINA 03). Copy oficial de SITE_GRANVIC_CONTEUDO.md.
 * Veículos ATIVADO (02/09) e Agro ATIVADO (04/09, D-028) — ambos reverteram
 * gates anteriores por decisão direta do gestor. Agro: objetivos incluem
 * armazenagem/irrigação (citados na Tese 05/esteira do acervo — não
 * desenvolvidos como sub-narrativa própria, só como item de lista, para não
 * inventar dor/promessa que não existe no material). Energia solar NÃO
 * incluída — é produto separado (Canopus exclusivo) na matriz oficial.
 * Estrutura por solução: Problema → Objetivos → Promessa → Como funciona →
 *                        Benefícios → Dúvidas → CTA.
 */
export interface Solucao {
  slug: string;
  nome: string;
  seoTitle: string;
  seoDesc: string;
  h1: string;
  cenaImagem: string;
  /** Caminho da imagem real em /public, quando já produzida (D-035). */
  imagemReal?: string;
  problema: string[];
  objetivosLista?: string[];
  objetivosTabela?: { obj: string; desc: string }[];
  promessa: string;
  comoFunciona: string;
  beneficios: string[];
  duvidas: { q: string; a: string }[];
  ctaHumano: string;
  /** Só definir quando a ordem primário/secundário do CTA final for invertida
   * em relação ao padrão (ex.: Veículos — primário é comparar, não humano). */
  ctaSecundarioLabel?: string;
}

export const solucoes: Solucao[] = [
  {
    slug: 'imoveis',
    nome: 'Imóveis',
    seoTitle: 'Patrimônio Imobiliário — Planejamento de Aquisição | GRANVIC',
    seoDesc:
      'Do primeiro imóvel ao imóvel de renda e à sede própria: defina o papel de cada imóvel no seu patrimônio antes de decidir como pagar.',
    h1: 'Tem imóvel que custa. Tem imóvel que paga.',
    cenaImagem: 'a família recebendo as chaves da casa própria pela primeira vez',
    imagemReal: '/imagens/objetivo-imovel.jpg',
    problema: [
      'A maioria das pessoas compra imóvel por necessidade imediata e descobre tarde que comprou um custo. Outras pagam aluguel por uma década inteira sem perceber que estão construindo o patrimônio de outra pessoa — e o sonho da casa própria fica sempre um passo à frente.',
      'A diferença entre os dois casos nunca foi o imóvel. Foi o plano — ou a ausência dele.',
    ],
    objetivosTabela: [
      { obj: 'Primeiro imóvel', desc: 'Quem está saindo do aluguel com estratégia, não com pressa' },
      { obj: 'Casa própria', desc: 'O sonho de sair do aluguel e ter o seu endereço' },
      { obj: 'Imóvel de renda', desc: 'Quem quer que o ativo passe a produzir' },
      { obj: 'Upgrade patrimonial', desc: 'Quem já tem o primeiro imóvel e quer o segundo passo' },
      { obj: 'Construção e ampliação', desc: 'Quem tem o terreno e precisa do plano' },
    ],
    promessa:
      'Você não escolhe um imóvel e depois procura como pagar. Você define o papel que aquele imóvel tem no seu patrimônio — e o caminho aparece a partir daí.',
    comoFunciona:
      'Começamos entendendo o que você já tem, o que aquilo produz e onde você quer chegar. A partir disso, definimos qual imóvel faz sentido primeiro, em que ordem, e qual instrumento viabiliza cada etapa — comparando as opções disponíveis para o seu caso.',
    beneficios: [
      'Clareza sobre qual imóvel comprar primeiro',
      'Um cronograma de aquisição, não uma compra isolada',
      'A comparação honesta entre as formas de aquisição',
      'Acompanhamento ao longo dos anos, para o segundo e o terceiro passo',
    ],
    duvidas: [
      { q: 'Já tenho um imóvel. Preciso disso?', a: 'Ter um imóvel e ter uma estratégia patrimonial são coisas diferentes. O diagnóstico costuma mostrar o que o patrimônio atual produz — e o que ele ainda não produz.' },
      { q: 'Como funciona o processo até eu poder usar o crédito para comprar o imóvel?', a: 'Você entra em um grupo, e o acesso ao crédito acontece dentro do prazo desse grupo — que é indeterminado, não imediato e não depende só da sua vontade. Comparamos esse caminho com as outras formas de aquisição disponíveis, para você decidir com o prazo real em mãos, não com uma expectativa.' },
      { q: 'Dá para usar esse crédito em qualquer tipo de imóvel — até na planta ou comercial?', a: 'Em geral sim, mas a regra exata varia por grupo e administradora. Confirmamos isso no seu caso durante a conversa consultiva, antes de qualquer decisão.' },
      { q: 'Preciso conversar com meu cônjuge antes de decidir?', a: 'Faz todo sentido — é uma decisão de vocês dois. Nossa sugestão é que participem juntos desde a primeira conversa.' },
    ],
    ctaHumano: 'Falar com um especialista em patrimônio imobiliário',
  },
  {
    slug: 'veiculos',
    nome: 'Veículos',
    seoTitle: 'Planejamento de Mobilidade | GRANVIC',
    seoDesc:
      'Primeiro veículo, troca planejada ou upgrade — de entrada a elétrico: compare o custo total de cada forma de aquisição antes de decidir.',
    h1: 'O carro dos seus sonhos pode ser o seu primeiro grande patrimônio.',
    cenaImagem: 'a pessoa abrindo a porta do carro novo pela primeira vez',
    imagemReal: '/imagens/objetivo-veiculo.jpg',
    problema: [
      'Para muita gente, o primeiro carro é a primeira grande conquista patrimonial — e o carro dos sonhos costuma vir logo depois. A decisão, no entanto, é quase sempre tomada pela parcela que cabe no bolso, não pelo que ela custa de verdade ao longo do tempo.',
    ],
    objetivosLista: ['Primeiro veículo', 'Troca programada', 'Seminovo', 'Upgrade', 'Veículo da empresa', 'Mobilidade dentro do orçamento estratégico'],
    promessa:
      'A pergunta certa não é "quanto fica a parcela". É quanto essa decisão custa ao seu patrimônio nos próximos cinco anos — e como fazê-la sem destruir capital.',
    comoFunciona:
      'Comparamos o custo total das formas de aquisição, o que o seu capital deixa de render em cada uma, e em quanto tempo você tem o bem. Em alguns casos a conclusão é adiar — e dizemos isso.',
    beneficios: [
      'Decisão pelo custo total, não pela parcela',
      'Troca planejada em vez de troca por impulso',
      'Preservação de capital',
      'Enquadramento da compra dentro do plano patrimonial',
    ],
    duvidas: [
      { q: 'Financiar não é mais rápido?', a: 'É. Quem precisa do bem agora tem menos opções, e elas custam mais. A questão é se o seu caso comporta prazo — porque, se comportar, o custo total tende a ser menor.' },
      { q: 'Quanto tempo, em média, leva até eu ter acesso ao crédito?', a: 'Não existe uma média confiável — o prazo depende do grupo e varia caso a caso, e comunicar uma média criaria uma expectativa que pode não se cumprir. O que fazemos é comparar esse caminho com as outras formas de aquisição, para você ver se o seu caso comporta um prazo indeterminado ou não.' },
      { q: 'Se eu quiser trocar de carro antes de terminar de pagar, dá para fazer isso?', a: 'Sim — o veículo pode ser negociado antes da quitação, respeitando a alienação fiduciária vigente até o fim do compromisso. Como isso funciona no seu caso é detalhado na conversa consultiva.' },
      { q: 'Já tenho o dinheiro. Compro à vista?', a: 'Talvez. Mas pagar à vista tem um custo que quase ninguém calcula: o que aquele capital deixaria de render. A comparação mostra os dois lados.' },
    ],
    ctaHumano: 'Comparar as formas de aquisição',
    ctaSecundarioLabel: 'Falar com um especialista',
  },
  {
    slug: 'pesados',
    nome: 'Caminhões e Pesados',
    seoTitle: 'Ativo Produtivo e Frota | GRANVIC',
    seoDesc:
      'Primeiro caminhão, renovação de frota e implementos: adquira ativo produtivo sem comprometer o capital de giro — e comparando todas as formas de aquisição.',
    h1: 'O caminhão certo se paga. O errado paga de volta em prejuízo.',
    cenaImagem: 'o primeiro caminhão saindo para a estrada, ao amanhecer',
    imagemReal: '/imagens/objetivo-pesados.jpg',
    problema: [
      'Frota que cresce sem plano transforma expansão em sufoco. O ativo produtivo tem uma variável que os outros não têm: o custo da espera. Uma frota que geraria margem todo mês custa dinheiro para não existir — e esse número precisa entrar na conta.',
    ],
    objetivosLista: ['Primeiro caminhão', 'Renovação de frota', 'Implementos', 'Máquinas', 'Expansão de capacidade operacional'],
    promessa:
      'Adquirir ativo produtivo sem comprometer o capital de giro da operação — e sabendo, antes de decidir, qual forma de aquisição custa menos no seu caso.',
    comoFunciona:
      'Calculamos o custo total de cada forma de aquisição, o custo de oportunidade do capital que ficaria imobilizado, o tempo até o ativo entrar em operação e se você se enquadra em alguma linha dirigida — que, quando existe, costuma ser a melhor opção.',
    beneficios: [
      'Expansão sem sufocar o caixa',
      'Comparação com FINAME, Move Brasil e leasing',
      'O custo da espera calculado, não ignorado',
      'Renovação programada em vez de emergencial',
    ],
    duvidas: [
      { q: 'Dá para ampliar minha frota aos poucos, sem comprometer o caixa da operação?', a: 'Sim — é o cenário em que essa forma de aquisição costuma fazer mais sentido: ampliar sem imobilizar o capital de giro de uma vez. Comparamos essa opção com FINAME, Move Brasil e leasing para o seu caso.' },
      { q: 'Consigo ter acesso ao crédito mesmo sendo um caminhão de valor mais alto?', a: 'Sim, não há restrição de valor. O que muda é o prazo até o acesso ao crédito, que tende a ser mais longo quanto maior o valor — isso entra na comparação com as outras formas de aquisição.' },
      { q: 'O caminhão fica no meu nome desde o início ou só depois da quitação?', a: 'Fica em seu nome desde a aquisição, com alienação fiduciária até a quitação — mesma lógica de um financiamento. A posse e o uso são seus desde o início.' },
      { q: 'Consigo condição melhor pelo banco da montadora?', a: 'Pode conseguir mesmo. Por isso a comparação inclui essa opção — e se ela vencer no seu caso, é ela que recomendamos.' },
      { q: 'Preciso do caminhão agora. Isso ainda serve pra mim?', a: 'Depende. Quem precisa do bem imediatamente deve olhar primeiro as opções de posse imediata. Calculamos quanto essa urgência custa e mostramos as alternativas.' },
    ],
    ctaHumano: 'Falar com um especialista',
  },
  {
    slug: 'agro',
    nome: 'Agro',
    seoTitle: 'Patrimônio Rural — Máquinas e Diversificação | GRANVIC',
    seoDesc:
      'Máquinas e implementos, armazenagem, irrigação e diversificação patrimonial fora da porteira — comece testando seu enquadramento em crédito rural dirigido.',
    h1: 'Você tem terra. É hora de ter estratégia.',
    cenaImagem: 'produtor e sucessor caminhando na lavoura, máquina em operação ao fundo',
    imagemReal: '/imagens/objetivo-agro.jpg',
    problema: [
      'O produtor rural é, com frequência, o cliente mais capitalizado e o mais concentrado. Quase todo o patrimônio está no mesmo lugar, exposto aos mesmos riscos — clima, preço, safra.',
    ],
    objetivosLista: ['Máquinas e implementos', 'Renovação de frota agrícola', 'Armazenagem da colheita', 'Irrigação', 'Diversificação patrimonial'],
    promessa: 'Patrimônio fora da porteira. Sem parar de investir dentro dela.',
    comoFunciona:
      'Primeiro testamos enquadramento em crédito rural dirigido — Pronaf, Pronamp, Moderfrota. Quando o produtor se enquadra, essas linhas costumam ser a melhor opção, e é isso que recomendamos. Quando não se enquadra, a comparação que importa é outra. O plano também considera armazenagem e irrigação como parte da diversificação fora da porteira.',
    beneficios: [
      'Teste de enquadramento antes de qualquer recomendação',
      'Preservação de caixa em ano de safra apertada',
      'Diversificação sem sair da atividade',
      'Comparação com as linhas dirigidas',
    ],
    duvidas: [
      { q: 'Consigo usar o crédito pra comprar terra, maquinário e insumos, ou é só pra um tipo de ativo?', a: 'O uso não se limita a um único tipo de ativo — pode contemplar máquinas, implementos, terra ou insumos duráveis, dependendo do grupo. O que se aplica ao seu caso é confirmado na conversa consultiva, junto com o teste de enquadramento em crédito rural dirigido.' },
      { q: 'Já tenho crédito rural. Preciso de mais alguma coisa?', a: 'Se você se enquadra em uma linha dirigida, normalmente é ela que recomendamos — e a conversa passa a ser sobre o que fazer com o patrimônio fora da atividade.' },
      { q: 'O que é "patrimônio fora da porteira"?', a: 'É construir patrimônio que não dependa da mesma safra, do mesmo clima e do mesmo preço que o resto do seu patrimônio já depende. Diversificação, sem sair da atividade.' },
      { q: 'Vocês avaliam meu enquadramento no crédito rural?', a: 'Testamos o enquadramento com você como primeiro passo. A análise formal é do agente financeiro — o que fazemos é garantir que essa porta seja testada antes de qualquer outra.' },
    ],
    ctaHumano: 'Falar com um especialista',
  },
  {
    slug: 'empresarial',
    nome: 'Empresarial',
    seoTitle: 'Patrimônio Empresarial e Sede Própria | GRANVIC',
    seoDesc:
      'Sede própria, expansão e patrimônio fora da operação: separe a vida do CNPJ e faça seu patrimônio pessoal crescer junto com o faturamento.',
    h1: 'Se sua empresa parasse hoje, qual patrimônio continuaria com você?',
    cenaImagem: 'a placa com o nome da empresa sendo instalada na fachada',
    imagemReal: '/imagens/objetivo-empresarial.jpg',
    problema: [
      'O empresário brasileiro constrói patrimônio dentro da operação e raramente fora dela. Reinveste tudo, cresce em faturamento e descobre, no dia em que precisa parar ou vender, que a empresa era o patrimônio inteiro.',
      'Quando a empresa para, o patrimônio vai junto — a menos que exista um plano.',
    ],
    objetivosTabela: [
      { obj: 'Sede própria', desc: 'A empresa deixa de financiar o patrimônio do dono do imóvel' },
      { obj: 'Consultório ou clínica própria', desc: 'Médicos e dentistas que hoje pagam aluguel no lugar onde trabalham' },
      { obj: 'Expansão operacional', desc: 'Novos espaços, filiais e galpões dentro de um cronograma' },
      { obj: 'Patrimônio fora da operação', desc: 'Ativos no CPF, desvinculados do risco do CNPJ' },
      { obj: 'Imóveis de renda', desc: 'Patrimônio passivo independente da operação' },
      { obj: 'Organização patrimonial', desc: 'Separar empresa e família, estruturalmente' },
    ],
    promessa: 'Sua empresa não deve ser seu único patrimônio.',
    comoFunciona:
      'Mapeamos quanto do seu patrimônio está dentro e quanto está fora da operação. Na maioria dos casos, é a primeira vez que o empresário vê esse número. A partir dele, definimos a ordem das aquisições e como executá-las preservando o capital de giro.',
    beneficios: [
      'Patrimônio pessoal crescendo junto com o faturamento',
      'Sede própria planejada, não emergencial',
      'Aquisição de ativos sem comprometer o caixa operacional',
      'Uma visão que separa a vida do CNPJ',
    ],
    duvidas: [
      { q: 'Por que não simplesmente reinvestir tudo na empresa?', a: 'É uma escolha legítima e muitas vezes correta. A questão é se ela foi uma decisão ou um automatismo — e o que aconteceria com você se a operação parasse por seis meses.' },
      { q: 'Consigo usar isso para capital de giro, ou só para ativos físicos como máquinas e imóveis comerciais?', a: 'É voltado para ativos físicos — imóveis, máquinas, equipamentos —, não para capital de giro. Se o que falta é caixa para a operação, essa não é a ferramenta certa; se é ativo patrimonial fora do CNPJ, é exatamente para isso que ela serve.' },
      { q: 'Qual a diferença entre fazer isso pela empresa ou no meu CPF?', a: 'No CNPJ, o ativo fica exposto ao risco da operação. No CPF, fica protegido dela — mas entra em outra lógica de custo e uso. O diagnóstico mostra qual faz mais sentido no seu caso.' },
      { q: 'Isso substitui a conversa com meu contador?', a: 'Não. O contador olha o lado tributário, que é o dele. O plano patrimonial é outra camada, e as duas conversam — podemos preparar um resumo para você levar a ele.' },
    ],
    ctaHumano: 'Falar com um especialista em patrimônio empresarial',
  },
];

export const solucoesPorSlug = Object.fromEntries(solucoes.map((s) => [s.slug, s]));
