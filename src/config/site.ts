/**
 * CONFIGURAÇÃO CENTRAL DO SITE GRANVIC
 * ------------------------------------
 * Fonte única dos dados institucionais e de contato.
 * Governança: dados que NÃO constam nos documentos oficiais ficam marcados
 * como "A CONFIRMAR" — não inventar. Preencher aqui quando o gestor fornecer.
 *
 * Identidade visual: ver src/styles/global.css (derivado de brand.json).
 */

export const SITE = {
  nome: 'GRANVIC',
  nomeOficial: 'GRANVIC — Assessoria Patrimonial',
  // ⚠️ A CONFIRMAR — domínio final. Usado em canonical, sitemap e Open Graph.
  url: 'https://www.granvic.com.br',
  descricao:
    'GRANVIC — Assessoria Patrimonial. Estratégia que vira patrimônio.',
  // Assinatura oficial (GL02 §2 — aprovada). Não alterar.
  assinatura: 'Estratégia que vira patrimônio. Patrimônio que vira legado.',
  idioma: 'pt-BR',
} as const;

/**
 * Dados jurídicos do rodapé.
 * ⚠️ A CONFIRMAR — não constam nos documentos lidos. Não inventar.
 */
export const JURIDICO = {
  razaoSocial: 'GRANVIC LTDA',
  cnpj: '27.584.918/0001-81',
  emailInstitucional: 'atendimento@granvic.com.br',
} as const;

/**
 * WhatsApp — canal oficial de atendimento.
 * ⚠️ A CONFIRMAR — número oficial não consta nos documentos. Não inventar.
 * Formato internacional só com dígitos, ex.: '5531999999999'.
 * Enquanto null, os CTAs de WhatsApp ficam desabilitados (não geram link quebrado).
 */
export const WHATSAPP = {
  numero: '5531982581295' as string | null, // provisório (gestor) — trocar pelo oficial depois
  // Mensagens pré-preenchidas por origem (Mapa §7.2).
  mensagens: {
    home:
      'Olá! Vim pelo site da GRANVIC e quero entender melhor o planejamento patrimonial.',
    solucao: 'Olá! Vim pela página de [solução] e quero conversar.',
    comparador:
      'Olá! Fiz a simulação no site e quero entender as opções para o meu caso.',
  },
} as const;

/**
 * Redes sociais (Mapa §9.1).
 * Regra: NUNCA renderizar ícone de rede sem URL válida — perfil vazio/link
 * quebrado corrói credibilidade. Rede com `url: null` simplesmente não aparece.
 */
export const REDES = {
  instagram: {
    label: 'Instagram',
    url: 'https://www.instagram.com/granvicoficial',
    ativo: true,
  },
  linkedin: {
    label: 'LinkedIn',
    // ⚠️ A CONFIRMAR — URL exata do perfil. Ativar quando o gestor fornecer.
    url: null as string | null,
    ativo: false,
  },
  youtube: {
    label: 'YouTube',
    // "Interruptor": canal em criação (semana de 11/08/2026).
    // Ativar (ativo: true + url) no dia em que o canal for ao ar.
    url: null as string | null,
    ativo: false,
  },
} as const;

/**
 * Formulário de contato — grava lead numa planilha do grupo + alerta por
 * e-mail (modelo interino D-07, enquanto não há CRM contratado).
 * ⚠️ A CONFIRMAR — cole aqui a URL do Web App depois de publicar o Google
 * Apps Script (script pronto em scripts/google-apps-script-contato.gs, com
 * instruções de deploy no topo do arquivo). Enquanto null, o formulário
 * mostra o fallback de WhatsApp/e-mail em vez de tentar enviar.
 */
export const FORM_ENDPOINT: string | null = null;

/**
 * Agendamento — widget de calendário embutido em /agendar (Cal.com).
 * ⚠️ A CONFIRMAR — crie uma conta gratuita em https://cal.com, crie um tipo
 * de evento (ex.: "Primeira Conversa — 30min") e cole aqui o `calLink`
 * (formato "seuusuario/nome-do-evento", igual aparece na URL pública do
 * evento). Enquanto null, /agendar mostra o fallback de WhatsApp/e-mail.
 */
export const CAL_LINK: string | null = 'cleiton-campos-jxt7le/primeira-conversa';

/** Monta um link wa.me com mensagem pré-preenchida, ou null se sem número. */
export function whatsappLink(mensagem: string): string | null {
  if (!WHATSAPP.numero) return null;
  return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensagem)}`;
}

/** Navegação principal do header (Fase 1 — sem /simulacao até a Fase 4). */
export const NAV_PRINCIPAL = [
  { label: 'A GRANVIC', href: '/a-granvic' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Planejamento Patrimonial', href: '/planejamento-patrimonial' },
  { label: 'Conteúdos', href: '/conteudos' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Agendar', href: '/agendar' },
] as const;
