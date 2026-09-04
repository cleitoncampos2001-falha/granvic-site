# Checklist de Deploy — Site GRANVIC no VPS (Hostinger)

> Objetivo: publicar `granvic.com.br` no mesmo VPS onde já roda o projeto
> de IA (motor-ajas/n8n), **sem tocar em nada do que já está no ar**.
> O site é 100% estático (HTML/CSS/JS puro, gerado pelo build) — não
> precisa de Node, PM2 nem processo próprio rodando no servidor. Isso
> torna o risco de interferência muito baixo: é só um novo site servido
> pelo nginx, num diretório separado, numa porta que o nginx já expõe
> (80/443), com um `server_name` diferente do que a IA usa.

---

## 0. Antes de começar

- [ ] Confirmar que o VPS tem **nginx** instalado e rodando (`nginx -v` / `systemctl status nginx`)
- [ ] Confirmar o **domínio `granvic.com.br`** — onde ele está registrado (Registro.br, GoDaddy etc.) e se você tem acesso ao painel de DNS
- [ ] **Não editar nenhum arquivo de configuração existente do nginx** (os que já servem o motor-ajas/n8n). Tudo aqui cria arquivos NOVOS.

---

## 1. Gerar o build de produção (no seu Mac)

```bash
cd ~/Sites/granvic
npm run build
```

Isso gera a pasta `dist/` — é ela, e só ela, que precisa ir pro servidor (não o resto do projeto: `node_modules/`, `src/`, etc. ficam de fora).

---

## 2. Enviar o build pro VPS

Escolha um caminho isolado, fora de qualquer pasta que a IA já usa. Sugestão:

```bash
ssh root@SEU_IP_DO_VPS "mkdir -p /var/www/granvic-site"

rsync -avz --delete ~/Sites/granvic/dist/ root@SEU_IP_DO_VPS:/var/www/granvic-site/
```

(`--delete` mantém o destino idêntico ao `dist/` local a cada novo deploy — sem lixo de versões antigas acumulando.)

---

## 3. Criar o bloco do nginx para o site (arquivo NOVO, não mexe nos existentes)

No VPS:

```bash
sudo nano /etc/nginx/sites-available/granvic-site
```

Cole:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name granvic.com.br www.granvic.com.br;

    root /var/www/granvic-site;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Cache agressivo pros arquivos com hash no nome (Vite/Astro já versiona)
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Ativar o site (sem tocar nos outros já ativos):

```bash
sudo ln -s /etc/nginx/sites-available/granvic-site /etc/nginx/sites-enabled/granvic-site
sudo nginx -t        # testa a config ANTES de recarregar — se der erro, não reinicia nada
sudo systemctl reload nginx
```

`nginx -t` é o passo de segurança: se algo estiver errado no arquivo novo, ele avisa e o nginx continua rodando a config antiga (a da IA) sem interrupção.

---

## 4. Apontar o DNS

No painel onde o domínio `granvic.com.br` está registrado, criar (ou conferir):

| Tipo | Nome | Valor |
|---|---|---|
| A | `@` (ou `granvic.com.br`) | IP do VPS |
| A | `www` | IP do VPS |

Propagação pode levar de minutos a algumas horas.

---

## 5. Certificado SSL (HTTPS) — Let's Encrypt via Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y   # se ainda não tiver
sudo certbot --nginx -d granvic.com.br -d www.granvic.com.br
```

O Certbot edita **só** o bloco `granvic-site` que você criou (ele identifica pelo `server_name`) — não mexe nos certificados/configs de outros domínios já configurados no mesmo nginx.

---

## 6. Testar

- [ ] `https://granvic.com.br` abre a Home
- [ ] Navegar por 2-3 páginas internas (ex.: `/a-granvic`, `/solucoes/imoveis`) — sem erro 404
- [ ] Testar em mobile (o site é responsivo)
- [ ] Confirmar que o projeto de IA (n8n, assets.ajas.com.br etc.) continua respondendo normalmente

---

## 7. Deploys futuros (depois de qualquer mudança no código)

Sempre os mesmos 2 passos, do seu Mac:

```bash
cd ~/Sites/granvic && npm run build
rsync -avz --delete dist/ root@SEU_IP_DO_VPS:/var/www/granvic-site/
```

Não precisa mexer no nginx de novo — só rodar isso a cada atualização de conteúdo/código.

---

## Pendências que ainda faltam para o site funcionar 100% em produção

Ver `PENDENCIAS.md` da GRANVIC (P-077 a P-080) — nenhuma delas bloqueia o deploy em si, mas valem antes de divulgar o link:
- **P-077 (crítica):** criar a caixa `privacidade@granvic.com.br` — a Política de Privacidade já publicada promete esse canal.
- **P-078:** publicar o Google Apps Script do formulário de `/contato` e colar a URL em `src/config/site.ts` (`FORM_ENDPOINT`) — hoje o formulário mostra o fallback de WhatsApp/e-mail.
- **P-079 / P-080:** blog e fotografia real — não bloqueiam o ar, mas os placeholders ("em breve" / "Imagem a produzir") ficam visíveis até serem resolvidos.
