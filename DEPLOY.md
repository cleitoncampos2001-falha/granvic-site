# Checklist de Deploy — Site GRANVIC (EasyPanel)

> Você me disse que o VPS usa **EasyPanel** — isso muda o caminho: o EasyPanel
> já cuida de nginx, SSL e reverse proxy sozinho (usa Traefik por trás). Você
> não vai editar nenhum arquivo de servidor manualmente. Tudo acontece em
> **3 lugares diferentes**, e cada passo abaixo diz exatamente qual:
>
> - 🖥️ **Terminal do seu Mac** — app "Terminal" ou "iTerm", já é onde você roda os comandos do Claude Code
> - 🌐 **Painel do EasyPanel** — no navegador, é interface visual (cliques, não comandos digitados)
> - 🌍 **Painel de DNS** — no navegador, o site de onde você registrou `granvic.com.br` (Registro.br, GoDaddy etc.)
>
> **Isolamento do projeto de IA:** você vai criar um App **novo e separado**
> no EasyPanel para o site — o projeto de IA que já roda lá (n8n/motor-ajas)
> fica intocado, em outro App, sem nenhuma relação com este.

---

## ✅ JÁ FEITO (por mim, nesta sessão — você não precisa repetir)

- [x] O código do site foi commitado e enviado para o GitHub, num repositório **privado**:
  **https://github.com/cleitoncampos2001-falha/granvic-site**
- [x] Criei um `Dockerfile` na raiz do projeto — é ele que o EasyPanel vai usar para "montar" o site (builda o Astro e serve os arquivos prontos via nginx dentro do próprio container). Você não precisa entender o conteúdo dele, só saber que ele existe e está no repositório.

O que falta é 100% feito por você, na ordem abaixo.

---

## PASSO 1 — Decidir: repositório privado ou público? 🌐 (site do GitHub, no navegador)

O repositório está **privado** hoje. Isso tem uma implicação: pra o EasyPanel conseguir "puxar" o código dele, ele precisa de autorização.

Como não existe nenhum dado sensível no código (sem senha, sem chave de API — conferi antes de subir), a forma mais simples pra quem nunca fez isso é **tornar o repositório público**:

1. Acesse: https://github.com/cleitoncampos2001-falha/granvic-site/settings
2. Role até o final da página, seção **"Danger Zone"**
3. Clique em **"Change visibility"** → **"Change to public"**
4. Confirme digitando o nome do repositório quando pedido

> Se preferir manter privado, é possível — mas exige conectar sua conta do GitHub ao EasyPanel via OAuth (passo extra, descrito no PASSO 3, opção B). Recomendo público pela simplicidade, já que é o site institucional mesmo — o conteúdo já é público por natureza.

---

## PASSO 2 — Apontar o DNS do domínio 🌍 (painel onde `granvic.com.br` foi registrado)

Esse passo pode ser feito em paralelo com os outros (DNS demora a propagar, então quanto antes, melhor).

1. Entre no painel onde você registrou `granvic.com.br` (Registro.br, GoDaddy, ou outro)
2. Procure a seção de **"DNS"** ou **"Zona DNS"** ou **"Gerenciar DNS"**
3. Crie (ou edite) estes dois registros:

| Tipo | Nome/Host | Valor/Aponta para |
|---|---|---|
| A | `@` (ou vazio, ou `granvic.com.br`) | **[IP do seu VPS]** |
| A | `www` | **[IP do seu VPS]** |

> **Preciso que você me diga o IP do VPS** (ou onde encontrá-lo — geralmente aparece no painel da Hostinger, na página do VPS) pra eu confirmar que esse passo está certo, ou você mesmo já sabe esse IP de cor.

Propagação: de alguns minutos a até 24h (na prática, quase sempre menos de 1h).

---

## PASSO 3 — Criar o App no EasyPanel 🌐 (painel do EasyPanel, no navegador)

1. Acesse o painel do EasyPanel do seu VPS (a URL costuma ser `https://SEU_IP:3000` ou um domínio próprio que você já usa pra administrar o servidor)
2. Entre no **Projeto** onde quer que o site fique. Duas opções:
   - Usar o **mesmo projeto** onde está o motor-ajas (tudo bem, cada App dentro de um projeto é isolado — containers separados)
   - Ou clicar em **"+ Create Project"** e criar um projeto novo só pra isso (ex.: nome `granvic-site`) — mais organizado, mais fácil de identificar depois
3. Dentro do projeto, clique em **"+ Create Service"** (ou **"+ Add Service"**, o texto exato pode variar um pouco de versão)
4. Escolha o tipo **"App"**
5. Dê um nome ao serviço, ex.: `granvic-site`
6. Na aba **"Source"** (Fonte):
   - **Opção A (repositório público — se você fez o Passo 1):** escolha **"GitHub"**, cole a URL `https://github.com/cleitoncampos2001-falha/granvic-site`, branch `main`
   - **Opção B (repositório privado):** primeiro conecte sua conta do GitHub em **Settings → Git → GitHub** (o EasyPanel pede autorização OAuth, você loga com sua conta do GitHub e autoriza), depois selecione o repositório `granvic-site` na lista que aparece
7. Na aba **"Build"**:
   - Método de build: escolha **"Dockerfile"**
   - Caminho do Dockerfile: deixe o padrão (`./Dockerfile` ou vazio — ele já está na raiz)
8. Na aba **"Domains"** (Domínios):
   - Clique em **"+ Add Domain"**
   - Digite `granvic.com.br`
   - Repita para `www.granvic.com.br`
   - O EasyPanel emite o certificado SSL sozinho (Let's Encrypt) assim que o DNS do Passo 2 estiver apontando certo — não precisa fazer mais nada pra isso
9. Clique em **"Deploy"** (ou "Save" + "Deploy", dependendo da versão)
10. Acompanhe o log de build na tela — o processo builda a imagem Docker (roda `npm ci` + `npm run build` dentro do container) e sobe o nginx servindo os arquivos. Leva de 1 a 3 minutos, normalmente.

---

## PASSO 4 — Testar 🖥️ (navegador, qualquer computador)

- [ ] Acesse `https://granvic.com.br` — deve abrir a Home do site
- [ ] Clique em 2-3 links internos (ex.: "A GRANVIC", "Soluções") — sem erro
- [ ] Confira pelo celular também
- [ ] Confirme que o projeto de IA (n8n, `assets.ajas.com.br` etc.) continua respondendo normalmente — se algo nele quebrar, me avise imediatamente, algo deu errado no isolamento

---

## PASSO 5 — Deploys futuros (toda vez que eu ou você mudar algo no código)

🖥️ **No Terminal do seu Mac:**

```bash
cd ~/Sites/granvic
git add -A
git commit -m "descrição da mudança"
git push
```

🌐 **No EasyPanel:** o App detecta o push novo automaticamente (se "auto-deploy" estiver ligado — geralmente vem ligado por padrão) e refaz o build sozinho. Se não, tem um botão **"Redeploy"** ou **"Rebuild"** na tela do App pra forçar manualmente.

---

## Pendências que não bloqueiam o deploy, mas valem antes de divulgar o link

Ver `PENDENCIAS.md` da GRANVIC (P-077 a P-080):
- **P-077 (crítica):** criar a caixa `privacidade@granvic.com.br` — a Política de Privacidade já publicada promete esse canal.
- **P-078:** publicar o Google Apps Script do formulário de `/contato` e colar a URL em `src/config/site.ts` (`FORM_ENDPOINT`) — hoje o formulário mostra o fallback de WhatsApp/e-mail.
- **P-079 / P-080:** blog e fotografia real — os placeholders ("em breve" / "Imagem a produzir") ficam visíveis até serem resolvidos.

**Se travar em qualquer passo, me chame** — descreva o que apareceu na tela (ou manda um print) que eu ajudo a resolver.
