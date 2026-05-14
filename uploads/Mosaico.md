---
title: Mosaico. Decisão de crédito que sua política reconhece.
description: Motor de análise e originação de crédito da Fingate. Policy-as-code. Bureau, Open Finance e dados internos no mesmo motor. Auditoria por evento.
og:title: Mosaico. Motor de crédito com policy-as-code.
og:description: A política vira código versionado. Bureau, Open Finance e dados internos no mesmo motor.
og:image: /assets/og-fingate-mosaico.png
canonical_url: https://fingate.com.br/mosaico
schema_org: Product
---

# Mosaico - Copy da página /mosaico

**Página:** Produto Mosaico (fingate.com.br/mosaico)
**Categoria:** Governança e decisão
**Empresa/Família:** Fingate
**Acrônimo:** Modular Origination, Scoring & Analytics for Integrated Credit Operations
**Frase de papel canônica (§7.1):** "Decisão de crédito que sua política reconhece."
**Público-alvo:** Head de Crédito, CRO (Chief Risk Officer), CTO, Head de Originação.
**Tom de voz:** Conforme canon Fingate v1.5.
**Idioma:** português brasileiro
**Status:** Em desenvolvimento comercial.
**Fonte canônica do copy:** `Produtos/Mosaico/drafts/Mosaico - Copy Landing Page.md`. Esta página é a adaptação da LP para o canal site.
**Data:** 2026-05-12

---

## 1. Hero

**Pill:** `[ícone Mosaico mono onlight]` Governança e decisão

**Headline (H1, Satoshi Semi-Bold, duas linhas):**
Decisão de crédito
que sua política reconhece.

**Subheadline (Inter Regular):** O Mosaico recebe a política de crédito como código versionado, combina bureau, Open Finance e dados internos no mesmo motor, e registra cada decisão como evento auditável.

**CTA primário:** Falar no WhatsApp. Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Mosaico%20no%20site%20da%20Fingate%20e%20quero%20falar%20com%20a%20equipe%20de%20cr%C3%A9dito.` data-origin="produto_mosaico".

**CTA secundário:** Conhecer a arquitetura.

**Microcopy de apoio:** Policy-as-code · Open Finance nativo · Auditoria por evento · Modelo padrão ou proprietário.

**Selo de credibilidade:** Calibrado para BACEN, Open Finance e LGPD desde a primeira decisão.

---

## 2. Faixa de credibilidade

> O motor de crédito que coloca política, bureau, Open Finance e dados internos sob o mesmo plano de controle.

Áreas atendidas: originação PF, esteira de crédito PJ, mesa de crédito, cartão e limite, consignado, antecipação de recebíveis, recuperação.

---

## 3. O problema

**Headline:** Política em PDF não decide crédito.

**Corpo:** Na maior parte das instituições financeiras brasileiras, a política de crédito vive em documento aprovado pelo comitê, as exceções vivem em planilhas mantidas por analistas seniores, e o motor de decisão executa o que o time conseguiu traduzir em regra no fornecedor do core bancário. Quando a política muda, ninguém sabe se o motor mudou junto. Quando a fiscalização pede a base de uma decisão de seis meses atrás, o time reconstrói. Quando o analista de crédito sai, vai embora com a regra na cabeça. O Mosaico foi construído para que a política seja a fonte da decisão, não uma referência que a decisão tenta seguir.

---

## 4. Como funciona

**Headline:** Da política à decisão, no mesmo motor.

**Passo 1 - Modele a política.** Defina faixas de risco, cutoffs, exceções e combinações de fontes (bureau, Open Finance, dados internos) em código revisado por par. Versão e publicação são objeto de commit, com diff visível para o comitê de crédito.

**Passo 2 - Conecte os dados.** Integre bureau de crédito, Open Finance, variáveis internas (histórico de relacionamento, saldo, garantia, score interno). O Mosaico orquestra a consulta no momento da decisão, com cache configurável por fonte e fallback definido pela política.

**Passo 3 - Decida e registre.** Cada solicitação recebe decisão (aprovado, recusado, contraoferta, revisão manual) com a política aplicada, os fatores ponderados e o responsável. Override por analista, quando permitido pela política, fica registrado como exceção rastreável.

---

## 5. Pilares de valor (4 cards)

**Card 1 - Policy-as-code.**
Política versionada em código, revisão por par, diff por commit. Comitê aprova mudança sabendo o que muda.

**Card 2 - Bureau, Open Finance e dados internos no mesmo motor.**
Fontes externas e internas combinadas na mesma decisão, sem ETL paralelo.

**Card 3 - Modelo padrão ou seu próprio modelo.**
Motor de scoring pronto para o segmento financeiro brasileiro. Modelo proprietário hospedado sob a mesma governança, com versionamento e métricas de performance.

**Card 4 - Decisão auditável por evento.**
Cada decisão registra política, fatores, fontes e responsável. Auditoria interna e fiscalização externa olham o mesmo registro.

---

## 6. Casos de uso

**Headline:** O mesmo motor para originação, análise e revisão.

- **Crédito PF originação digital:** decisão em segundos com bureau, Open Finance e dados de relacionamento, com política calibrada por canal.
- **Crédito PJ esteira de fornecedor:** análise de risco de fornecedor B2B com dados de bureau corporativo, demonstrativos e relacionamento histórico.
- **Cartão e limite rotativo:** definição de limite inicial, aumento programado e revisão periódica sob a mesma política versionada.
- **Consignado:** decisão sob política específica de averbação, com cutoffs por convênio e validação de margem.
- **Antecipação de recebíveis:** análise de sacado, garantia e concentração no mesmo motor da originação.
- **Mesa de crédito (revisão manual):** o motor encaminha casos fora da política para revisão humana, com contexto da solicitação e justificativa obrigatória na decisão.
- **Recuperação e cobrança:** mesma política, agora aplicada a segmentação por risco e propensão de retorno.

---

## 7. Diferenciais

**Headline:** O que o motor de crédito do core bancário não faz.

**Bloco A - Policy-as-code com revisão por par.** A política não é configuração em tela; é código em repositório. Mudança passa por revisão, deixa diff e fica versionada. Comitê de crédito aprova com pleno conhecimento do que muda.

**Bloco B - Open Finance nativo.** Não é integração feita por cima do motor; é fonte de primeira classe. Consentimento, fluxo OFB, normalização e cache estão no Mosaico, e a política aplica regra sobre dados consentidos sem ETL externo.

**Bloco C - Modelo seu, governança nossa.** Quando a operação tem modelo de scoring proprietário, o Mosaico hospeda. O modelo entra como artefato versionado, com histórico, métricas de performance (PSI, KS, AUC) e governança de promoção entre ambientes. Time de risco continua dono.

**Bloco D - Mesma trilha para decisão automática e manual.** Decisão automatizada e override de mesa de crédito vivem no mesmo registro. Auditoria não tem dois sistemas para conciliar.

---

## 8. Governança e auditoria

**Headline:** Cada decisão de crédito, com responsável, política e fator.

**Corpo:** O Mosaico registra, em cada decisão, a versão da política aplicada, os fatores que pesaram na avaliação, as fontes consultadas e o responsável quando há atuação humana. Comitê de crédito tem visibilidade contínua da política em produção e do impacto de cada mudança. Auditoria interna e fiscalização externa consultam o mesmo registro. O ofício que vier pedindo a base de uma decisão é respondido com extrato direto do motor.

- Versionamento de política por commit, com diff e responsável.
- Aprovação de política em ambiente separado de produção (sandbox e produção).
- Trilha de auditoria por evento (decisão, override, mudança de política, atualização de modelo).
- Métricas de modelo (PSI, KS, AUC) acompanhadas em painel próprio.
- Conformidade com BACEN, LGPD e regras de Open Finance desde a primeira decisão.

---

## 9. Encaixe no ecossistema Fingate

**Headline:** O motor de decisão, na camada utilitária da Fingate.

**Corpo:** O Mosaico consome o Maestro para área, hierarquia e alçada do time de crédito (quem aprova exceção, quem revisa modelo, quem assina mudança de política). Decisões individuais e mudança de política podem ser encaminhadas ao Fígaro para análise assistida, sob permissão explícita. Documentação de política, fluxograma e relatório de monitoramento vivem no Libreto. Eventos de fraude detectados pela Trama enriquecem a decisão de crédito em tempo real. Operações que demandam evidência assinada (CCB, aditivo, contraoferta aceita) registram a formalização no Signum.

> **Decisão de crédito que sua política reconhece.**

---

## 10. FAQ

**O Mosaico substitui o motor de crédito do meu core bancário?**
Em geral sim, ao longo da implantação. O Mosaico assume a decisão; o core bancário continua responsável pelo book contábil e pelo desembolso. Coexistência durante o piloto é o caminho usual.

**Preciso de um time de data science para usar?**
Não. O Mosaico vem com motor de scoring padrão e biblioteca de políticas para o segmento financeiro brasileiro. Quando a operação tiver modelo proprietário, o time de risco continua dono; o Mosaico hospeda e governa.

**Open Finance é integração separada?**
Não. Open Finance é fonte de primeira classe. Consentimento, leitura compartilhada e normalização são parte do Mosaico, não plug-in.

**Como funciona a auditoria de decisão?**
Cada decisão registra versão da política aplicada, fatores ponderados, fontes consultadas e responsável. A trilha é consultável por solicitação, por período, por canal ou por filtro de fonte.

**Em quanto tempo entra em produção?**
Implantação assistida. Piloto com uma esteira (originação PF, esteira PJ, cartão) costuma estar em produção em poucas semanas após o workshop de modelagem da política.

**Posso versionar minha política em sandbox antes de promover para produção?**
Sim. O Mosaico opera com ambientes separados, promoção controlada e simulação de impacto antes da mudança entrar no ar.

---

## 11. CTA final

**Headline:** Coloque a política no motor. Coloque o motor sob auditoria.

**Subheadline:** Veja o Mosaico aplicando a política da sua operação sobre uma carteira real, com bureau, Open Finance e dados internos no mesmo motor. Em 30 minutos no WhatsApp, mapeamos sua esteira de crédito e a estrutura de política que faz sentido versionar primeiro.

**CTA primário:** Falar no WhatsApp. Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Mosaico%20no%20site%20da%20Fingate%20e%20quero%20falar%20com%20a%20equipe%20de%20cr%C3%A9dito.` data-origin="produto_mosaico".

---

## Imagens e ícones recomendados

| Posição | Asset | Caminho |
|---|---|---|
| Header (light) | Logo principal sobre fundo branco | `FINGATE_01_principal_fundo_branco.svg` |
| Hero (dark) | Logo secundária sobre fundo escuro | `FINGATE_02_secundaria_fundo_escuro.svg` |
| Favicon | Gema full color | `GEMA_01_full_color.svg` |
| Hero - ícone do produto | Mosaico dark | `_workshop/icons/assets/Mosaico.svg` |
| Cards e seções intermediárias | Mosaico onlight | `_workshop/icons/assets/Mosaico-onlight.svg` |
| Open Graph | A produzir | `/assets/og-fingate-mosaico.png` |

---

## Schema.org sugerido

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mosaico",
  "url": "https://fingate.com.br/mosaico",
  "description": "Motor de análise e originação de crédito da Fingate. Recebe a política como código versionado, combina bureau, Open Finance e dados internos no mesmo motor, e registra cada decisão como evento auditável.",
  "category": "Governança e decisão",
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
    "audienceType": "Head de Crédito, CRO, CTO e Head de Originação de instituições financeiras"
  }
}
```

Schema BreadcrumbList: `Fingate > Produtos > Mosaico`.

---

## Footer global

Reaproveitar da Home. Item "Mosaico" na coluna 2 (Produtos) marcado como ativo. Breadcrumb: `Fingate > Produtos > Mosaico`.

---

## Notas de implementação para o time de design

- Hero sobre fundo Esmeralda Profundo, com ícone `Mosaico.svg` em escala grande. O conceito do ícone é "tesselas" (arte mosaico greco-romana); o desenho conversa bem com a tese de policy-as-code (peças que compõem uma decisão).
- Bloco §5 (Pilares) em grid 4 colunas; bloco §7 (Diferenciais) em 4 blocos verticais.
- §9 (Encaixe) com a frase de papel em blockquote grande, fundo Cinza Claro com tint Esmeralda 5%.
- Implementar `data-origin="produto_mosaico"` em todos os links wa.me.
- Vocabulário regulatório com destaque visual (BACEN, LGPD, Open Finance) - pode receber pílulas em §2 e §8.

---

## Fonte

* LP canônica: `Produtos/Mosaico/drafts/Mosaico - Copy Landing Page.md` (data 2026-05-10, body do §4 reaproveitado integralmente).
* Canon `_canon/canon_copy_fingate.md` v1.5.
* Frase de papel: canon §7.1.
* `Site/references/whatsapp-cta.md` (entrada `produto_mosaico`).
* `Site/references/assets-marca.md`.
* Brief de adaptação 2026-05-12 do orquestrador.
