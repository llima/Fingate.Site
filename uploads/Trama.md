---
title: Trama. Antifraude que enxerga a rede, não o evento.
description: Antifraude em grafo da Fingate. Camadas combinadas de regra, modelo e política contextual. Detecta rings, mulas e beneficiários compartilhados em tempo real.
og:title: Trama. Antifraude em rede para o sistema financeiro brasileiro.
og:description: Grafo nativo. Camadas combinadas que conversam. Calibração brasileira em PIX, STR e BACEN.
og:image: /assets/og-fingate-trama.png
canonical_url: https://fingate.com.br/trama
schema_org: Product
---

# Trama - Copy da página /trama

**Página:** Produto Trama (fingate.com.br/trama)
**Categoria:** Monitoramento e antifraude
**Empresa/Família:** Fingate
**Acrônimo:** Threat Recognition, Analytics, Modeling & Audit
**Frase de papel canônica (§7.1):** "Antifraude que enxerga a rede, não o evento."
**Público-alvo:** Head de Antifraude, CISO, CTO, Head de Risco.
**Tom de voz:** Conforme canon Fingate v1.5.
**Idioma:** português brasileiro
**Status:** Em desenvolvimento comercial.
**Fonte canônica do copy:** `Produtos/Trama/drafts/Trama - Copy Landing Page.md`. Esta página é a adaptação da LP para o canal site.
**Data:** 2026-05-12

---

## 1. Hero

**Pill:** `[ícone Trama mono onlight]` Monitoramento e antifraude

**Headline (H1, Satoshi Semi-Bold, duas linhas):**
Antifraude em rede para
o sistema financeiro brasileiro.

**Subheadline (Inter Regular):** O Trama analisa risco em tempo real sobre o grafo da operação, com camadas combinadas de regras, modelos e políticas contextuais. Detecta rings, mulas e beneficiários compartilhados antes do prejuízo se formar.

**CTA primário:** Falar no WhatsApp. Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Trama%20no%20site%20da%20Fingate%20e%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20t%C3%A9cnica.` data-origin="produto_trama".

**CTA secundário:** Conhecer a arquitetura.

**Microcopy de apoio:** Implantação assistida com workshop técnico · Integração via API e MCP · Fila ordenada por risco em rede · Trilha de auditoria por evento.

**Selo de credibilidade:** Construído sobre o mesmo plano de controle que sustenta o Maestro em produção em instituição financeira brasileira.

---

## 2. Faixa de credibilidade

> Calibrado para a operação brasileira: PIX, STR, conta reserva, BACEN, COAF.

Áreas atendidas: antifraude transacional, antifraude por canal, antifraude por beneficiário, antifraude por dispositivo.

---

## 3. O problema

**Headline:** A fraude opera em rede. A defesa pontual não enxerga o desenho.

**Corpo:** A fraude moderna coordena. Mulas trocam dispositivo no momento certo, beneficiários se repetem entre vítimas distantes, rings sincronizam ataques em janelas curtas que escapam à análise transacional. A instituição financeira que decide por transação isolada vê desvio onde existe coincidência. Quando o desenho aparece, o prejuízo já formou e o caso já saiu para investigação.

---

## 4. Como funciona

**Headline:** Três passos do evento ao alerta qualificado.

**Passo 1 - Captura.** O Trama recebe a transação em tempo real, do Tempo ou direto do core, e atualiza o grafo da operação: nós, arestas, atributos.

**Passo 2 - Análise em camadas.** Sobre o grafo atualizado, três camadas atuam em paralelo (regras, modelos, políticas contextuais). Cada camada produz um sinal e o Trama compõe o veredito final.

**Passo 3 - Alerta qualificado.** Quando o risco se confirma como cluster, o alerta sai com o desenho do grafo (nós envolvidos, arestas críticas, padrão detectado) e cai na fila do Tempo, ordenado por risco em rede.

---

## 5. Pilares de valor (4 cards)

**Card 1 - Análise em rede.**
Grafo nativo da operação. Nós, arestas, contexto. O risco lê a posição do evento no tecido, não o evento isolado.

**Card 2 - Camadas combinadas.**
Regras, modelos e políticas contextuais que conversam. Cada camada na sua especialidade.

**Card 3 - Tempo real e fila qualificada.**
Análise instantânea, alerta com desenho do grafo. Fila ordenada por risco em rede.

**Card 4 - Governança herdada do Maestro.**
Trilha auditável por evento. Alçada, decisão e versão da política sempre vinculadas.

---

## 6. Casos de uso

**Headline:** Onde a análise em rede faz diferença.

- Detecção de ring de mulas em PIX que coordena ataques em janelas curtas.
- Identificação de beneficiário compartilhado entre vítimas de golpe sem histórico aparente de relação.
- Reconhecimento de cluster de dispositivos novos com padrão de cadastro idêntico.
- Bloqueio precoce de cadeia de beneficiários que tenta drenar uma conta em saltos rápidos.
- Qualificação de alerta do Tempo com o desenho do grafo, para decisão informada do analista.
- Encaminhamento de cluster suspeito ao Ágora quando o padrão sugere PLD, com o grafo anexado ao caso.
- Apoio à investigação do Atlas quando ofício pede mapeamento de relacionamentos do investigado.

---

## 7. Diferenciais

**Headline:** Onde o Trama se descola das alternativas.

**Bloco A - Grafo nativo, não adaptado.** O Trama foi construído com o grafo no centro, não como camada adicional sobre um motor transacional. Nó, aresta e atributo são primeiros cidadãos. A consulta de risco não pega o histórico do CPF e tenta deduzir a rede; pega o subgrafo ao redor do CPF e compõe.

**Bloco B - Camadas que conversam.** Regra, modelo e política contextual não competem. Cada camada produz um sinal específico, e o Trama orquestra o veredito final. O time de risco mantém regras formalizadas que conhecem o caso, sem perder a sensibilidade do modelo.

**Bloco C - Calibração brasileira.** PIX, STR, conta reserva, BACEN, COAF entraram no produto desde a primeira linha de código, não como adaptação posterior. Padrões de fraude observados na operação brasileira (mula de fim de semana, ring de cadastro novo, beneficiário PIX em três contas) são o vocabulário do produto.

**Bloco D - Encaixe no portfólio Fingate.** O Trama enriquece alertas do Tempo com o grafo, herda governança do Maestro, encaminha ao Ágora quando o padrão é PLD e responde ao Atlas quando ofício pede mapeamento. Não substitui o time de risco, soma à operação.

---

## 8. Governança e auditoria

**Headline:** Cada decisão registrada, com regra, modelo e versão.

**Corpo:** Cada decisão do Trama carrega trilha por evento: qual regra disparou, qual modelo classificou, qual versão da política contextual estava ativa, qual subgrafo justificou o alerta, quem aprovou ou contestou. O auditor interno (e o regulador, quando o caso virar processo administrativo) percorre o evento como percorre um voo registrado: começo, meio, decisão, justificativa, alçada.

- Trilha auditável por evento, vinculada ao plano de controle do Maestro.
- Versionamento de regras, modelos e políticas; nada decide sem versão.
- Rastreio do subgrafo no momento do alerta, congelado para revisão.
- Saída direta para BACEN, COAF e auditoria interna no formato exigido.

---

## 9. Encaixe no ecossistema Fingate

**Headline:** A camada de inteligência em rede da família.

**Corpo:** O Trama é a camada de inteligência em rede da família Fingate. Recebe transações do **Tempo** (ou direto do core), enriquece a fila com o desenho do grafo, herda governança do **Maestro** e fala com **Ágora** (PLD) e **Atlas** (quebra de sigilo) quando o caso muda de natureza. Convive com **Fígaro**: o agente de IA pode consultar o subgrafo do Trama sob permissão explícita para apoiar investigação assistida.

> **Antifraude que enxerga a rede, não o evento.**

---

## 10. FAQ

**O Trama substitui o antifraude que já temos no core?**
Não. O Trama soma uma camada de inteligência em rede sobre o que o core já captura. A decisão pode permanecer no core (Trama emite sinal) ou migrar para o Trama (decisão final com auditoria), conforme o desenho da implantação.

**Precisamos ter o Tempo em produção para usar o Trama?**
Não. O Trama integra direto via API ou MCP. O Tempo é a interface natural de fila para o time de risco e o ganho operacional aumenta quando os dois operam juntos, mas a integração não é obrigatória.

**Quanto tempo leva a implantação?**
Workshop técnico inicial define escopo, integração e calibração. A operação em produção começa em fases (sombra, alerta, decisão) com critérios objetivos para cada salto. Sem prometer prazo sem workshop.

**Os modelos comportamentais usam dados de outros clientes?**
Não. Cada instituição treina o próprio modelo com o próprio histórico. O Trama oferece arquitetura, vocabulário e baselines técnicas; o sinal estatístico é da casa.

**Como o Trama lida com falso positivo?**
Cada alerta carrega o subgrafo que o motivou. O analista contesta com clique e a contestação realimenta os modelos. A política contextual também ajusta limiar por canal e horário, reduzindo o ruído sem cegar a defesa.

**O Trama atende LGPD?**
Sim. Construído com criptografia ponta a ponta, retenção configurável e quebra de sigilo formal pelo Atlas quando o caso virar ofício. O grafo é dado pessoal por construção; o produto trata como tal.

---

## 11. CTA final

**Headline:** A fraude já coordena. O Trama te dá a rede para responder.

**Subheadline:** Em 30 minutos no WhatsApp, mostramos como o grafo da sua operação pode virar uma camada de defesa em tempo real.

**CTA primário:** Falar no WhatsApp. Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20do%20Trama%20no%20site%20da%20Fingate%20e%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20t%C3%A9cnica.` data-origin="produto_trama".

---

## Imagens e ícones recomendados

| Posição | Asset | Caminho |
|---|---|---|
| Header (light) | Logo principal sobre fundo branco | `FINGATE_01_principal_fundo_branco.svg` |
| Hero (dark) | Logo secundária sobre fundo escuro | `FINGATE_02_secundaria_fundo_escuro.svg` |
| Favicon | Gema full color | `GEMA_01_full_color.svg` |
| Hero - ícone do produto | Trama dark | `_workshop/icons/assets/Trama.svg` |
| Cards e seções intermediárias | Trama onlight | `_workshop/icons/assets/Trama-onlight.svg` |
| Open Graph | A produzir | `/assets/og-fingate-trama.png` |

---

## Schema.org sugerido

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Trama",
  "url": "https://fingate.com.br/trama",
  "description": "Antifraude em grafo da Fingate. Análise de risco em tempo real com camadas combinadas de regra, modelo e política contextual. Detecta rings, mulas e beneficiários compartilhados.",
  "category": "Monitoramento e antifraude",
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
    "audienceType": "Head de Antifraude, CISO, CTO e Head de Risco de instituições financeiras"
  }
}
```

Schema BreadcrumbList: `Fingate > Produtos > Trama`.

---

## Footer global

Reaproveitar da Home. Item "Trama" na coluna 2 (Produtos) marcado como ativo. Breadcrumb: `Fingate > Produtos > Trama`.

---

## Notas de implementação para o time de design

- Hero sobre fundo Esmeralda Profundo, com ícone `Trama.svg` (tecido em camadas) em escala grande. O ícone conversa visualmente com a tese de análise em rede.
- Visualização da seção §5 ou §7 pode receber tratamento gráfico de grafo discreto (nós e arestas em paleta lapidada), reforçando a tese sem virar ilustração técnica.
- §9 (Encaixe) com a frase de papel em blockquote grande. Nomes dos outros produtos (Tempo, Maestro, Ágora, Atlas, Fígaro) podem virar links sutis.
- Termos do domínio (ring, mula, beneficiário compartilhado) podem receber tooltip com explicação curta em rodadas futuras.
- Implementar `data-origin="produto_trama"` em todos os links wa.me.

---

## Fonte

* LP canônica: `Produtos/Trama/drafts/Trama - Copy Landing Page.md` (data 2026-05-10).
* Canon `_canon/canon_copy_fingate.md` v1.5.
* Frase de papel: canon §7.1.
* `Site/references/whatsapp-cta.md` (entrada `produto_trama`).
* `Site/references/assets-marca.md`.
* Brief de adaptação 2026-05-12 do orquestrador.
