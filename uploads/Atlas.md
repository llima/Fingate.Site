---
title: Atlas. Quebra de sigilo como processo, não como exportação.
description: Ferramenta de quebra de sigilo formal da Fingate. Gerencia ordens judiciais e requisições de Receita Federal, COAF, MP, Judiciário e CVM. Construído sobre Lei Complementar 105/2001.
og:title: Atlas. Quebra de sigilo formal como processo da Fingate.
og:description: Cada ofício, um protocolo. Pacote determinístico. Trilha imutável por evento.
og:image: /assets/og-fingate-atlas.png
canonical_url: https://fingate.com.br/atlas
schema_org: Product
---

# Atlas - Copy da página /atlas

**Página:** Produto Atlas (fingate.com.br/atlas)
**Categoria:** Compliance regulatório
**Empresa/Família:** Fingate
**Acrônimo:** Access and Transparency Legal Audit System
**Frase de papel canônica (§7.1):** "Quebra de sigilo como processo, não como exportação."
**Público-alvo:** Jurídico, Compliance, CISO, CCO.
**Tom de voz:** Conforme canon Fingate v1.5.
**Idioma:** português brasileiro
**Status:** Em desenvolvimento comercial.
**Fonte canônica do copy:** `Produtos/Atlas/drafts/Atlas - Copy Landing Page.md`. Esta página é a adaptação da LP para o canal site.
**Data:** 2026-05-12

---

## 1. Hero

**Pill:** `[ícone Atlas mono onlight]` Compliance regulatório

**Headline (H1, Satoshi Semi-Bold, duas linhas):**
A quebra de sigilo
como processo, não como exportação.

**Subheadline (Inter Regular):** O Atlas registra cada ofício de Receita Federal, COAF, MP, Judiciário e CVM como processo formal, com protocolo, pacote auditável e trilha por evento. Calibrado para a Lei Complementar 105/2001 e as resoluções BACEN sobre sigilo bancário.

**CTA primário:** Falar no WhatsApp. Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Atlas%20no%20site%20da%20Fingate%20e%20quero%20falar%20com%20a%20equipe%20jur%C3%ADdica.` data-origin="produto_atlas".

**CTA secundário:** Conhecer a arquitetura.

**Microcopy de apoio:** Integração via MCP e API · Governança herdada do Maestro · Pacote determinístico com hash retido · Trilha imutável por evento.

**Selo de credibilidade:** Compatível com LC 105/2001 e resoluções BACEN sobre sigilo bancário.

---

## 2. Faixa de credibilidade

> Construído para o ofício jurídico do banco brasileiro.

- Lei Complementar 105/2001 como fundação
- Resoluções BACEN sobre sigilo bancário
- Receita Federal, COAF, MP, Judiciário e CVM mapeados como autoridades requisitantes
- Trilha por evento exportável em formato regulatório

---

## 3. O problema

**Headline:** O ofício chega. O improviso começa.

**Corpo:** A requisição da autoridade entra por e-mail. O jurídico encaminha para a TI. Alguém abre uma planilha, alguém roda uma query no core bancário, alguém compacta dados sensíveis em um zip e devolve por e-mail. O pacote sai, mas a trilha mora em cinco caixas de mensagem distintas. Quando o BACEN pedir o histórico do procedimento, o banco vai precisar reconstruir manualmente. E quando o próximo ofício chegar, o ciclo recomeça do zero.

---

## 4. Como funciona

**Headline:** Três passos, um processo formal.

**Passo 1 - Registrar o ofício.** O Atlas captura a requisição da autoridade (Receita Federal, COAF, MP, Judiciário, CVM), a base legal e o prazo. Protocolo gerado na hora, classe processual registrada, prazo em cronômetro visível.

**Passo 2 - Montar o pacote.** O Atlas consulta as fontes autorizadas, monta o pacote em formato regulatório, calcula hash do conteúdo e registra quem montou. Reprodução determinística garantida.

**Passo 3 - Entregar com trilha.** O pacote vai ao aprovador definido pelo Maestro. Aprovação registrada, download registrado, trilha imutável por evento. Quando a próxima fiscalização chegar, o registro está pronto.

---

## 5. Pilares de valor (4 cards)

**Card 1 - Protocolo formal por ofício.**
Classe processual, autoridade requisitante, base legal e prazo entram no registro do ofício. Sem campo livre disfarçado de protocolo. O cronômetro de prazo legal é visível desde a entrada; a versão do registro acompanha cada etapa do processo até a entrega final.

**Card 2 - Pacote auditável e determinístico.**
O Atlas consulta as fontes autorizadas e monta o pacote em formato regulatório. O hash do conteúdo fica retido junto com o ofício. Mesmo ofício, mesmo dado-base, mesmo pacote. Sem zip improvisado, sem planilha com dado sensível solto na rede do banco.

**Card 3 - Trilha por evento, imutável.**
Cada solicitação, aprovação e download é registrado como ocorrência formal, com identidade, data, hora e ofício de origem. O registro é imutável por design. A trilha é exportável em formato regulatório quando o banco precisa demonstrar conformidade.

**Card 4 - Calibrado para a regulação brasileira.**
A Lei Complementar 105/2001 é a fundação do produto, não cláusula de manual. As resoluções BACEN sobre sigilo bancário informam os fluxos. As autoridades requisitantes mapeadas são as que efetivamente operam o sistema brasileiro.

---

## 6. Casos de uso

**Headline:** Onde o Atlas entra primeiro.

- Resposta a ofício de quebra de sigilo bancário emitido por juízo cível
- Atendimento de requisição da Receita Federal em fiscalização tributária
- Resposta a RIF de retorno do COAF
- Cumprimento de ordem do MP em ação penal
- Atendimento de requisição da CVM em apuração de mercado de capitais
- Suporte a inquérito policial com autorização judicial específica
- Resposta a precatório com determinação de retenção

---

## 7. Diferenciais

**Headline:** O que muda quando quebra de sigilo é processo, não improviso.

**Bloco A - Construído sobre a LC 105/2001.** A quebra de sigilo no Brasil tem fundação legal específica. O Atlas trata o regime legal como código, não como cláusula de manual de procedimento. Cada ofício carrega sua base legal explícita; a trilha guarda o vínculo entre o pacote e o dispositivo legal invocado.

**Bloco B - Governança herdada do Maestro.** Quem aprova quebra de sigilo é definido pela alçada já registrada no Maestro: jurídico, compliance ou diretor estatutário, conforme a política do banco. O fluxo do Atlas usa a hierarquia existente, sem reconfiguração paralela.

**Bloco C - Pacote determinístico, não exportação livre.** O ofício não vira liberação de query no core. O Atlas consulta fontes autorizadas, monta o pacote em formato regulatório e retém o hash. Reprodução técnica garantida; dado sensível não escorrega.

**Bloco D - Operação brasileira no produto, não em campo livre.** Receita Federal, COAF, MP, Judiciário, CVM e BACEN estão no Atlas como entidades de primeira classe. Quem opera o produto reconhece o fluxo do ofício real.

---

## 8. Governança e auditoria

**Headline:** Auditoria não é tela de log. É registro formal por evento.

**Corpo:** O Atlas registra cada evento da quebra de sigilo como ocorrência formal, com identidade do autor, data, hora, ofício de origem e hash do conteúdo manipulado. A trilha é imutável por design e exportável em formato regulatório. Quando o banco precisa demonstrar conformidade em fiscalização BACEN, em pedido reverso de autoridade ou em auditoria interna, o registro está pronto.

- Trilha imutável por evento, sem edição posterior
- Hash do pacote retido junto ao ofício
- Aprovação registrada com identidade do aprovador
- Download registrado com identidade de quem baixou
- Retenção configurável por classe processual
- Exportação da trilha em formato regulatório

---

## 9. Encaixe no ecossistema Fingate

**Headline:** Quebra de sigilo na camada utilitária.

**Corpo:** O Atlas se conecta ao **Maestro** para herdar alçadas e fluxos de aprovação. Ao **Tempo**, quando um alerta de risco vira ofício formal. Ao **Ágora**, quando o caso de PLD evolui para quebra de sigilo. Ao **Libreto**, quando a documentação do procedimento precisa de versão pública. Ao **Signum**, quando a entrega exige assinatura digital. A camada utilitária modular da Fingate trata cada produto como peça do sistema, não como ferramenta isolada.

> **Quebra de sigilo como processo, não como exportação.**

---

## 10. FAQ

**O Atlas substitui o sistema de protocolo do banco?**
Não. O Atlas é ferramenta específica para quebra de sigilo formal. O sistema geral de protocolo da instituição continua válido; o Atlas se integra a ele via MCP ou API.

**Como o Atlas se relaciona com o core bancário?**
O Atlas consulta o core como fonte autorizada para montar o pacote do ofício. Não substitui o core, não duplica dados. Lê com permissão registrada e devolve trilha do que foi consultado.

**A trilha de auditoria pode ser editada?**
Não. Cada evento é imutável por design. A trilha é exportável em formato regulatório quando o banco precisa demonstrar conformidade.

**O Atlas atende quebra de sigilo telefônico?**
O escopo do Atlas é sigilo bancário (Lei Complementar 105/2001) e dados sob guarda da instituição financeira. Sigilo telefônico segue regime distinto e não é coberto.

**Quanto tempo demora a implantação?**
Depende do mapeamento das fontes autorizadas e da configuração das alçadas no Maestro. Workshop técnico inicial dimensiona o ciclo. Sem prazo prometido sem workshop.

**Como o jurídico do banco usa o Atlas?**
O time jurídico registra o ofício, acompanha o cronômetro de prazo, aprova o pacote dentro da alçada e libera a entrega. Uso direto pelo jurídico ou por meio de fluxo combinado com TI, conforme a política da instituição.

---

## 11. CTA final

**Headline:** Trate quebra de sigilo como processo, não como tarefa de plantão.

**Subheadline:** Em 30 minutos no WhatsApp, mostramos a trilha por evento sobre o ofício real do seu banco.

**CTA primário:** Falar no WhatsApp. Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Atlas%20no%20site%20da%20Fingate%20e%20quero%20falar%20com%20a%20equipe%20jur%C3%ADdica.` data-origin="produto_atlas".

---

## Imagens e ícones recomendados

| Posição | Asset | Caminho |
|---|---|---|
| Header (light) | Logo principal sobre fundo branco | `FINGATE_01_principal_fundo_branco.svg` |
| Hero (dark) | Logo secundária sobre fundo escuro | `FINGATE_02_secundaria_fundo_escuro.svg` |
| Favicon | Gema full color | `GEMA_01_full_color.svg` |
| Hero - ícone do produto | Atlas dark | `_workshop/icons/assets/Atlas.svg` |
| Cards e seções intermediárias | Atlas onlight | `_workshop/icons/assets/Atlas-onlight.svg` |
| Open Graph | A produzir | `/assets/og-fingate-atlas.png` |

---

## Schema.org sugerido

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Atlas",
  "url": "https://fingate.com.br/atlas",
  "description": "Ferramenta de quebra de sigilo formal da Fingate. Gerencia ordens judiciais e requisições de Receita Federal, COAF, MP, Judiciário e CVM. Pacote determinístico com hash retido. Trilha imutável por evento. Construído sobre Lei Complementar 105/2001.",
  "category": "Compliance regulatório",
  "brand": {
    "@type": "Brand",
    "name": "Fingate"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Fingate Tecnologia e Desenvolvimento Financeiro",
    "url": "https://fingate.com.br"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Jurídico, Compliance, CISO e CCO de instituições financeiras"
  }
}
```

Schema BreadcrumbList: `Fingate > Produtos > Atlas`.

---

## Footer global

Reaproveitar da Home. Item "Atlas" na coluna 2 (Produtos) marcado como ativo. Breadcrumb: `Fingate > Produtos > Atlas`.

---

## Notas de implementação para o time de design

- Hero sobre fundo Esmeralda Profundo, com ícone `Atlas.svg` (globo terrestre com meridianos) em escala grande. O ícone conversa com a tese de mapa formal das autoridades brasileiras.
- §6 (Casos de uso) com lista densa de ofícios reconhecíveis (juízo cível, Receita Federal, COAF, MP, CVM, polícia, precatório) - pode receber tratamento visual de tags ou pílulas.
- §7 (Diferenciais) em 4 blocos verticais com destaque para a fundação legal (LC 105/2001).
- §9 (Encaixe) com a frase de papel em blockquote grande. Nomes dos outros produtos (Maestro, Tempo, Ágora, Libreto, Signum) como links sutis.
- Pílulas regulatórias para Receita Federal, COAF, MP, Judiciário, CVM, BACEN, Lei Complementar 105/2001 em §2.
- Implementar `data-origin="produto_atlas"` em todos os links wa.me.

---

## Fonte

* LP canônica: `Produtos/Atlas/drafts/Atlas - Copy Landing Page.md` (data 2026-05-10).
* Canon `_canon/canon_copy_fingate.md` v1.5.
* Frase de papel: canon §7.1.
* `Site/references/whatsapp-cta.md` (entrada `produto_atlas`).
* `Site/references/assets-marca.md`.
* Brief de adaptação 2026-05-12 do orquestrador.
