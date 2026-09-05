/**
 * Os 6 cartões de objetivo — usados na Home (BLOCO 02) e no índice de Soluções.
 * Copy oficial de SITE_GRANVIC_CONTEUDO.md. `gated` = publicação depende de D-03.
 * `cenaImagem` = cena da §9 (sugestão visual) — usada no card e no hero da solução.
 * Veículos ATIVADO (decisão do gestor, 02/09) — copy pronto, ungated.
 * Agro ATIVADO (decisão do gestor, 04/09, D-028) — reverte o gate estrutural:
 * venda consultiva (CTA "falar com especialista") já é o padrão de toda
 * solução do site, então o argumento de "canal diferente" não se sustenta
 * mais.
 * "Serviços" (6º card, 04/09) — leva a /servicos, energia solar em destaque +
 * outras categorias do mercado de consórcio. Entra no grid ao lado dos
 * demais por pedido do gestor ("fecha em 6", melhor visualmente que 5).
 */
export interface Objetivo {
  nome: string;
  texto: string;
  dor: string;
  cta: string;
  href: string;
  cenaImagem: string;
  gated?: boolean;
  /** Caminho da imagem real em /public, quando já produzida (04-05/09). Sem
   * pessoas, foco no ativo em padrão premium (decisão do gestor, D-035 —
   * contraria a diretriz "pessoa em primeiro plano" do motor de marketing,
   * aceita como direção própria do site institucional). Enquanto ausente,
   * o componente usa o placeholder atmosférico "Imagem a produzir". */
  imagemReal?: string;
}

export const objetivos: Objetivo[] = [
  {
    nome: 'Imóvel',
    texto:
      'Primeiro imóvel, imóvel de renda, consultório ou clínica própria. O imóvel é o ativo que estrutura a maioria dos planos.',
    dor: 'O aluguel que você paga há dez anos construiu o patrimônio de alguém. E não foi o seu.',
    cta: 'Ver como isso vira plano',
    href: '/solucoes/imoveis',
    cenaImagem: 'a família recebendo as chaves da casa própria pela primeira vez',
    imagemReal: '/imagens/objetivo-imovel.jpg',
  },
  {
    nome: 'Veículo',
    texto: 'Aquisição e troca dentro de um orçamento estratégico — não por impulso.',
    dor: 'Tem veículo que é despesa com rodas. Tem veículo que é ativo. O plano decide qual você vai ter.',
    cta: 'Ver como isso vira plano',
    href: '/solucoes/veiculos',
    cenaImagem: 'a pessoa abrindo a porta do carro novo pela primeira vez',
    imagemReal: '/imagens/objetivo-veiculo.jpg',
  },
  {
    nome: 'Caminhões e Pesados',
    texto: 'Frota, implementos e ativos operacionais que geram renda.',
    dor: 'O caminhão certo se paga. O errado paga de volta em prejuízo.',
    cta: 'Falar com um especialista',
    href: '/solucoes/pesados',
    cenaImagem: 'o primeiro caminhão da frota saindo para a estrada, ao amanhecer',
    imagemReal: '/imagens/objetivo-pesados.jpg',
  },
  {
    nome: 'Agro',
    texto: 'Máquinas, implementos, armazenagem e diversificação para quem produz.',
    dor: 'Você tem terra. É hora de ter estratégia.',
    cta: 'Falar com um especialista',
    href: '/solucoes/agro',
    cenaImagem: 'produtor e sucessor caminhando na lavoura, máquina em operação ao fundo',
    imagemReal: '/imagens/objetivo-agro.jpg',
  },
  {
    nome: 'Empresa',
    texto: 'Sede própria, expansão e patrimônio fora da operação.',
    dor: 'Se sua empresa parasse hoje, qual patrimônio continuaria com você?',
    cta: 'Falar com um especialista',
    href: '/solucoes/empresarial',
    cenaImagem: 'a placa com o nome da empresa sendo instalada na fachada',
    imagemReal: '/imagens/objetivo-empresarial.jpg',
  },
  {
    nome: 'Serviços',
    texto: 'Energia solar e outras categorias do mercado de consórcio que também entram no plano.',
    dor: 'Tem energia que é conta todo mês. Tem energia que é patrimônio.',
    cta: 'Explorar outros patrimônios',
    href: '/servicos',
    cenaImagem: 'painéis solares sendo instalados no telhado de casa',
    imagemReal: '/imagens/objetivo-servicos.jpg',
  },
];
