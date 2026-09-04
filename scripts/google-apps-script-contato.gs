/**
 * GRANVIC — Recebimento do formulário de contato do site (/contato).
 * Modelo interino de CRM (D-07): grava o lead numa aba "Leads" de uma
 * planilha do Google + envia um alerta por e-mail. Trocar pelo CRM real
 * quando contratado, sem precisar mudar o formulário do site.
 *
 * COMO PUBLICAR (uma vez só):
 * 1. Crie (ou abra) uma planilha Google Sheets do grupo (ex.: "GRANVIC — Leads do Site").
 * 2. Menu Extensões → Apps Script.
 * 3. Apague o conteúdo padrão e cole este arquivo inteiro.
 * 4. Ajuste EMAIL_ALERTA abaixo se necessário.
 * 5. Menu Implantar → Nova implantação → tipo "App da Web".
 *    - Executar como: "Eu" (sua conta)
 *    - Quem pode acessar: "Qualquer pessoa"
 * 6. Autorize as permissões pedidas (grava na planilha, envia e-mail).
 * 7. Copie a URL do App da Web gerada.
 * 8. Cole essa URL em ~/Sites/granvic/src/config/site.ts, na constante
 *    FORM_ENDPOINT (troque `null` pela URL entre aspas).
 * 9. Rebuild do site (`npm run build`) e teste enviando o formulário.
 */

const EMAIL_ALERTA = 'atendimento@granvic.com.br';
const NOME_ABA = 'Leads';

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(NOME_ABA) || criarAba(ss);
  const dados = e.parameter;

  sheet.appendRow([
    new Date(),
    dados.nome || '',
    dados.contato || '',
    dados.mensagem || '',
    dados.origem || '',
  ]);

  try {
    MailApp.sendEmail({
      to: EMAIL_ALERTA,
      subject: 'Novo contato pelo site — ' + (dados.nome || 'sem nome'),
      body:
        'Nome: ' + (dados.nome || '-') + '\n' +
        'Contato: ' + (dados.contato || '-') + '\n' +
        'Mensagem: ' + (dados.mensagem || '-') + '\n' +
        'Página de origem: ' + (dados.origem || '-'),
    });
  } catch (err) {
    // Não bloquear a gravação do lead se o e-mail falhar.
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function criarAba(ss) {
  const sheet = ss.insertSheet(NOME_ABA);
  sheet.appendRow(['Data/hora', 'Nome', 'Contato', 'Mensagem', 'Origem']);
  sheet.setFrozenRows(1);
  return sheet;
}
