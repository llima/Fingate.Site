---
title: Brief de design - Home Fingate (fingate.com.br)
description: Brief autocontido para o Claude Design implementar a Home institucional da Fingate. Inclui referência Figma, tokens, assets, copy final, estrutura HTML/CSS sugerida, acessibilidade, SEO e critérios de aceite.
versao: 1.0
data: 2026-05-12
destinatario: Claude Design (agente de design)
remetente: Fingate - Site (chat especialista de copy do site)
escopo: Apenas a Home (fingate.com.br/). Sobre, Portfólio e páginas de produto virão em briefs separados nas próximas rodadas.
referencia_figma: https://www.figma.com/design/KThbPcWMTSlXqTzkijiOXI/F%C3%ADngate---Landing-Page?node-id=14-320
---

# Brief - Home Fingate

> **Para o Claude Design.** Este documento é autocontido. Você tem aqui todo o copy final aprovado, todos os tokens de marca, todos os assets necessários, a referência visual primária (Figma) e os critérios de aceite. Sua entrega esperada: HTML, CSS e JavaScript (vanilla, sem framework) implementando a Home institucional da Fingate em fingate.com.br/.

---

## 1. Contexto do projeto

**Cliente.** Fingate Tecnologia e Desenvolvimento Financeiro. Fintech B2B brasileira que entrega a camada utilitária modular do sistema financeiro brasileiro.

**Site.** Institucional, em construção. Total de 12 páginas na primeira versão: Home, Sobre, Portfólio e 9 páginas de produto. **Este brief cobre apenas a Home.** Sobre e Portfólio virão em briefs separados nas próximas rodadas.

**Stack alvo.** HTML5 semântico, CSS3 puro com variáveis de design tokens, JavaScript vanilla apenas para interações leves. **Sem framework (sem React, Vue, Next).** **Sem CMS** (sem WordPress, Webflow). Arquivos servidos estaticamente.

**Domínio.** fingate.com.br.

**Audiência.** Decisores executivos de instituições financeiras brasileiras (CEO, CFO, CCO, CISO, CTO, Head de Risco, Head de Crédito, Head de IA, Head de Inovação). Imprensa, parceiros e mercado.

**Canal de contato exclusivo.** WhatsApp Business. **Sem página de contato** e sem formulário no site.

**CNPJ e razão social (para footer e structured data).** Fingate Tecnologia e Desenvolvimento Financeiro · CNPJ 08.033.252/0001-29 · São Paulo, SP.

---

## 2. Referência visual primária (Figma)

**Arquivo Figma.** `KThbPcWMTSlXqTzkijiOXI` (nome: "Fíngate - Landing Page").
**URL.** https://www.figma.com/design/KThbPcWMTSlXqTzkijiOXI/F%C3%ADngate---Landing-Page?node-id=14-320
**Frame primário.** node `14:320`, dimensões 1440x7712px.

### 2.1 Estrutura visual do Figma (use como blueprint)

A LP no Figma está estruturada em **6 seções principais + header + footer** e este brief casa 1:1 com essa estrutura. Cada seção começa com uma **pill** (chip com ícone e label curta), seguida de **headline em duas linhas** (mistura preto e cor de marca) e um **bloco de cards**. Reaproveite:

- Padrão de pill (chip pequeno com ícone à esquerda, texto curto à direita).
- Hierarquia de tipografia (H1 grande no hero, H2 em duas linhas nas seções).
- Padrão de cards de produto (mockup mais nome mais descritor mais "Saiba mais" com seta forward).
- Padrão da faixa de Impacto (4 cards horizontais com número grande e label).
- Círculos decorativos esmeralda no fundo do hero (Ellipse 1648, 1649, 1650).
- Paleta esmeralda profundo no hero, branco nas seções intermediárias, alternância visual entre Esmeralda e Branco/Cinza Claro.
- Padrão de footer multicoluna com tagline na coluna 1.

### 2.2 O que NÃO copiar do Figma

A LP Figma foi desenhada **antes** do canon v1.4 da marca. Cinco atualizações de copy são obrigatórias (detalhadas em `Site/references/memo-design-figma.md`, anexo). Resumo:

1. Headline do hero NÃO é "A plataforma definitiva de inteligência financeira"; é "A camada utilitária modular do sistema financeiro brasileiro."
2. Headline da seção de produtos NÃO é "Ecossistema completo de Inteligência financeira"; é "Nove ferramentas modulares, uma camada de controle."
3. Cards de produto: a LP tem 6 (Figaro, Rino, Radar, Atlas, Maestro, Fintra). **Nova versão tem 9** (Maestro, Fígaro, Tempo, Libreto, Ágora, Atlas, Mosaico, Trama, Signum). Rino virou Tempo, Radar virou Ágora, Fintra virou Mosaico. Adicione Libreto, Trama, Signum que não estavam.
4. Descritor do Fígaro: o atual usa o verbo "transforma" (proibido pelo canon). Substituir.
5. Faixa de Impacto: 4 stats sem prova adjacente no Figma. **Substituir pelos 4 valores verificáveis** listados no §6 deste brief (Saída A).

**Estrutura visual, grid, espaçamento, paleta, tipografia, ícones de pill, treatment de stats e padrão das pills permanecem como no Figma.**

---

## 3. Tokens de design

### 3.1 Paleta canônica (manual de marca)

```css
:root {
  /* Esmeralda (paleta primária) */
  --esmeralda-profundo: #11484B;
  --esmeralda-medio: #27A698;
  --menta: #48C9A2;

  /* Neutros */
  --branco: #FFFFFF;
  --cinza-claro: #F5F5F5;
  --preto: #0A0A0A;

  /* Paleta lapidada (5 tons, uso institucional e ícone do Fígaro) */
  --lapidada-1: #36AA8A;
  --lapidada-2: #278A78;
  --lapidada-3: #147170;
  --lapidada-4: #1A656D;
  --lapidada-5: #175667;
}
```

### 3.2 Tipografia

```css
:root {
  /* Famílias */
  --font-titulo: "Satoshi", system-ui, sans-serif;
  --font-corpo: "Inter", system-ui, sans-serif;
  --font-codigo: "JetBrains Mono", ui-monospace, monospace;

  /* Hierarquia (use clamp para responsivo fluido) */
  --fs-h1: clamp(2.5rem, 5vw, 4.5rem);  /* hero */
  --fs-h2: clamp(2rem, 4vw, 3.25rem);   /* seções */
  --fs-h3: clamp(1.25rem, 2vw, 1.5rem); /* cards */
  --fs-body-lg: clamp(1.125rem, 1.5vw, 1.25rem);
  --fs-body: 1rem;
  --fs-microcopy: 0.875rem;

  /* Pesos */
  --fw-regular: 400;
  --fs-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
}
```

**Famílias servidas como woff2 hinted**, preload das variações mais usadas (Satoshi Bold, Satoshi Semi-Bold, Inter Regular, Inter Medium, Inter Semi-Bold, Inter Bold).

Arquivos disponíveis em:
- `Manuais/Manual da Marca/brand-assets/fonts/Satoshi_Complete.zip`
- `Manuais/Manual da Marca/brand-assets/fonts/Inter-4.1/` (TTF e woff2 prontos)
- `Manuais/Manual da Marca/brand-assets/fonts/JetBrainsMono-2.304.zip`

### 3.3 Espaçamento e ritmo vertical

Escala 4pt:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;
}
```

Padding interno de seção: `--space-32` no desktop, `--space-16` no mobile.
Container central: `max-width: 1200px; padding-inline: --space-6;`.

### 3.4 Border radius e sombras

```css
:root {
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 2px rgba(10, 10, 10, 0.04);
  --shadow-md: 0 4px 16px rgba(10, 10, 10, 0.08);
  --shadow-lg: 0 12px 40px rgba(10, 10, 10, 0.12);
}
```

Pills usam `--radius-full`. Cards usam `--radius-lg`.

---

## 4. Assets de marca

### 4.1 Logo Fingate (7 variações)

Pasta canônica: `Manuais/Manual da Marca/brand-assets/logo/principal/svg/`.

| Uso na Home | Arquivo |
|---|---|
| Header sobre fundo claro | `FINGATE_01_principal_fundo_branco.svg` |
| Header sobre fundo escuro, Hero sobre Esmeralda Profundo | `FINGATE_02_secundaria_fundo_escuro.svg` |
| Faixas sobre Menta | `FINGATE_03_terciaria_fundo_menta.svg` |
| Sidebar mono dark, footer escuro | `FINGATE_04_mono_branca.svg` |
| Impressão B/W | `FINGATE_05_mono_preta.svg` |
| Casos especiais de contraste | `FINGATE_06_mono_preta_gema_contraste.svg` |
| Footer denso sobre Esmeralda | `FINGATE_07_mono_sobre_esmeralda.svg` |

PNG equivalente em `brand-assets/logo/principal/png/`.

### 4.2 Símbolo "Gema" isolado (6 variações)

Pasta canônica: `Manuais/Manual da Marca/brand-assets/logo/gema/svg/`.

| Uso na Home | Arquivo |
|---|---|
| Favicon, touch icon, app icon | `GEMA_01_full_color.svg` |
| Marcador de seção sobre fundo claro | `GEMA_02_esmeralda_profundo.svg` |
| Hover de menu, estado ativo | `GEMA_03_esmeralda_medio.svg` |
| Acentos sobre fundo escuro | `GEMA_04_menta.svg` |
| Spinner sobre fundo escuro | `GEMA_05_branca.svg` |
| Impressão B/W | `GEMA_06_preta.svg` |

### 4.3 Ícones de produto (9 produtos x 2 versões)

Pasta canônica: `Workspace/Fingate - Institucional/_workshop/icons/assets/`.

| Produto | Conceito | Arquivo dark | Arquivo onlight |
|---|---|---|---|
| Maestro | Mão com batuta | `Maestro.svg` | `Maestro-onlight.svg` |
| Fígaro | Cartola lapidada (paleta 5 tons) | `Figaro.svg` | `Figaro-onlight.svg` |
| Tempo | Metrônomo | `Tempo.svg` | `Tempo-onlight.svg` |
| Libreto | Livro aberto | `Libreto.svg` | `Libreto-onlight.svg` |
| Ágora | Frontão sobre colunata | `Agora.svg` | `Agora-onlight.svg` |
| Atlas | Globo terrestre com meridianos | `Atlas.svg` | `Atlas-onlight.svg` |
| Mosaico | Tesselas | `Mosaico.svg` | `Mosaico-onlight.svg` |
| Trama | Tecido em camadas | `Trama.svg` | `Trama-onlight.svg` |
| Signum | Pena | `Signum.svg` | `Signum-onlight.svg` |

Versão dark sobre Esmeralda Profundo. Versão onlight em #1A656D sobre fundo branco. **Fígaro tem versão lapidada institucional** com 5 tons da paleta esmeralda (usar como destaque no card do Fígaro).

### 4.4 Ícones de pill (a produzir)

Cada pill no Figma usa um ícone discreto à esquerda do label. A LP atual usa um grupo `Frame 1160446373` com um glyph dentro. Para a Home, os ícones de pill por seção são:

| Pill | Conceito do ícone | Sugestão |
|---|---|---|
| Camada utilitária da operação financeira brasileira (hero) | Gema | `GEMA_03_esmeralda_medio.svg` em 10x10px |
| Segurança | Cadeado fino | A produzir, traço 1.5px |
| Produtos | Gema ou conjunto de 9 dots | `GEMA_03` ou ícone novo |
| Problemas que resolvemos | Triângulo de alerta ou símbolo de exclamação | A produzir |
| Diferenciais | Diamante ou losango | A produzir |

Sinta-se livre para padronizar os ícones de pill em sistema próprio coerente com a marca, contanto que respeite a paleta lapidada e o traço fino.

### 4.5 Faixa de 9 ícones (rodapé do hero, opcional)

Se desenhar a faixa de 9 ícones logo abaixo do hero (mencionada no §5 do copy do Portfólio): usar versão onlight de cada produto sobre fundo Cinza Claro, em fileira horizontal, com nome do produto abaixo do ícone.

---

## 5. Referência ao Figma node a node (mapa)

Para facilitar sua navegação no arquivo Figma, segue mapa dos nós principais com função:

| Nó Figma | Conteúdo | Equivalente neste brief |
|---|---|---|
| `14:320` | Frame raiz da LP (1440x7712) | Todo o documento |
| `14:301` | Seção 1 - Hero (1440x1275) | §6.1 deste brief |
| `14:342` | Seção 2 - Segurança (1440x1183) | §6.2 |
| `14:392` | Seção 3 - Soluções (renomeada para Produtos, 1440x2040) | §6.3 e §6.4 |
| `28:1344` | Seção 4 - Breaker CTA (1440x408) | §6.5 |
| `28:1358` | Seção 5 - Problemas + Diferenciais (1440x2375) | §6.6 e §6.7 |
| `14:642` e `14:695` | Footer (1440x320 + 1440x105) | §6.9 |
| `14:697` | Header (1440x136) | §6.8 |

Pode usar `mcp__ea66c440-...__get_metadata` e `mcp__ea66c440-...__get_screenshot` com `fileKey: KThbPcWMTSlXqTzkijiOXI` e o `nodeId` de cada subseção para puxar detalhes pixel a pixel se precisar.

---

## 6. Copy final da Home + especificações por seção

Copy aprovado pelo orquestrador em 2026-05-11. **Use exatamente este texto**, sem reescrever. Pequenos ajustes de microcopy podem acontecer; alinhe com o orquestrador antes.

### 6.1 Header global (renderizado em todas as páginas)

Fixo no topo, fundo claro por padrão (branco com leve sombra ao scroll). Mobile: hamburger menu com slide-out lateral.

**Logo (link para `/`).** `FINGATE_01_principal_fundo_branco.svg`.

**Menu central** (esconde em mobile, vira hamburger):
- Sobre (link para `/sobre`)
- Produtos (link para `/produtos`, com dropdown opcional listando os 9 nomes por categoria; alternativa: apenas link sem dropdown)

**CTA destacado à direita.** Botão "Falar no WhatsApp", fundo Esmeralda Profundo, texto branco, padding generoso, border-radius `--radius-full`.

Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fingate%20e%20quero%20conversar%20com%20a%20equipe.`

**Texto do botão.** "Falar no WhatsApp".

Atributos do `<a>`: `target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa no WhatsApp com a equipe da Fingate"`.

### 6.2 Seção 1 - Hero

**Fundo.** Esmeralda Profundo `#11484B`. Círculos decorativos esmeralda em opacidade baixa (Ellipse 1648, 1649, 1650 do Figma; reaproveitar valores absolutos do Figma).

**Pill (chip):** `[ícone gema]` Camada utilitária da operação financeira brasileira

**Headline (H1, Satoshi Semi-Bold, branco, duas linhas):**

```
A camada utilitária modular
do sistema financeiro brasileiro.
```

**Subheadline (Inter Regular, branco, opacidade 0.85):**

```
A Fingate entrega 9 ferramentas modulares para risco, compliance,
crédito, antifraude, documentação, IA generativa, assinatura digital
e quebra de sigilo formal. Construído sobre BACEN, COAF, CVM, LGPD e
ICP-Brasil desde a primeira linha de código.
```

**CTA primário.** Botão "Falar no WhatsApp", fundo Menta `#48C9A2`, texto Esmeralda Profundo, border-radius `--radius-full`, seta forward à direita.

Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fingate%20e%20quero%20conversar%20com%20a%20equipe.`

**Selo de credibilidade (linha abaixo do CTA, microcopy Inter Medium, branco opacidade 0.7):**

```
Em produção no Banco Original.
```

**Assets visuais opcionais.** Mockup de produto sobreposto à direita (padrão do Figma frame `14:300`, composição de interfaces de produto em camadas). Se for incluir, manter visual abstrato (sem texto legível de produto fictício).

### 6.3 Seção 2 - Segurança

**Fundo.** Branco `#FFFFFF`.

**Pill:** `[ícone cadeado]` Segurança

**Headline (H2, Satoshi Semi-Bold, duas linhas; primeira linha em preto, segunda em Esmeralda Médio):**

```
Segurança não é uma funcionalidade.
É arquitetura.
```

**Corpo (Inter Regular, preto, max-width 60ch):**

```
Na Fingate, segurança não é camada aplicada depois. É a fundação desde
o primeiro endpoint. Cada produto é construído sobre regulação
brasileira, com auditoria contínua por evento, criptografia em
trânsito e em repouso, e quebra de sigilo formal com protocolo. No
mercado financeiro, cada decisão precisa ser justificável; cada
acesso, registrado; cada evidência, recuperável.
```

**4 cards de pilares de segurança (grid 4 colunas em desktop, 2 em tablet, 1 em mobile):**

Cada card tem fundo Cinza Claro `#F5F5F5`, padding `--space-6`, border-radius `--radius-lg`, ícone discreto no topo (a produzir), título H3 em Satoshi Semi-Bold, descritor em Inter Regular.

**Card 1 - Regulação brasileira na fundação.**
```
BACEN, COAF, CVM, LGPD, ICP-Brasil e Open Finance entram em cada
produto desde o desenho. Circular BACEN 3.978, Lei 9.613, MP
2.200-2/2001, Lei 14.063/2020 e Lei Complementar 105/2001 informam o
motor, não o manual.
```

**Card 2 - Trilha de auditoria por evento.**
```
Cada decisão registra entrada, regra aplicada, responsável e
timestamp. Histórico imutável. A fiscalização percorre o evento como
percorre um voo registrado.
```

**Card 3 - Criptografia em trânsito e em repouso.**
```
Conversas do Fígaro, documentos do Libreto, transações do Tempo,
evidências do Signum: tudo cifrado, com rotação de chaves e separação
clara entre item corporativo e pessoal.
```

**Card 4 - Quebra de sigilo como processo.**
```
Acesso a histórico só sob protocolo formal. Hash do pacote retido.
Identidade do solicitante registrada. Trilha exportável em formato
regulatório. O Atlas trata sigilo bancário como o regime legal exige.
```

### 6.4 Seção 3 - Produtos (9 cards em 4 categorias)

**Fundo.** Branco com círculos decorativos esmeralda em opacidade baixa (Ellipse 1648, 1649, 1650 da seção 3 do Figma).

**Pill:** `[ícone gema]` Produtos

**Headline (H2, Satoshi Semi-Bold, duas linhas; primeira linha preto, segunda em Esmeralda Médio):**

```
Nove ferramentas modulares,
uma camada de controle.
```

**Corpo (Inter Regular, max-width 80ch):**

```
Cada produto opera de forma independente e ganha em conjunto. A
operação contrata o módulo que resolve a dor priorizada, sem comprar
suíte. Calibração brasileira em cada um. Governança herdada do
Maestro em todos. Implantação em semanas, evolução sob a auditoria
que a instituição já reconhece.
```

**9 cards de produto (grid 3 colunas em desktop, 2 em tablet, 1 em mobile).**

**Padrão de card.** Fundo branco com borda Cinza Claro 1px, border-radius `--radius-lg`, padding `--space-6`. Ícone do produto no topo (mono onlight, 64x64px). Nome do produto em H3 Satoshi Semi-Bold. Frase de papel canônica em destaque (Inter Semi-Bold, italic, max-width 30ch). Descritor curto em Inter Regular. Link "Saiba mais" com seta forward, Esmeralda Médio. Hover: leve elevação com shadow-md.

Os 9 cards na ordem:

**Card 1 - Maestro.**
- Ícone: `_workshop/icons/assets/Maestro-onlight.svg`
- Categoria: Governança e decisão
- Frase de papel: *Toda decisão da empresa, no ritmo certo.*
- Descritor: Engine de orquestração de fluxos, alçadas, aprovações e ausência temporária. Tudo o que a família consome em comum nasce aqui.
- Link: `/maestro`

**Card 2 - Fígaro.**
- Ícone: `_workshop/icons/assets/Figaro.svg` (versão lapidada, 5 tons da paleta esmeralda; usar como destaque visual)
- Categoria: Inteligência e formalização
- Frase de papel: *Sem o Fígaro, a Fingate é um conjunto de boas ferramentas. Com o Fígaro, a Fingate é um sistema operacional de risco financeiro.*
- Descritor: Plataforma de IA generativa corporativa com governança bancária. Lê o portfólio inteiro e atua sob permissão explícita. Em produção no Banco Original.
- Link: `/figaro`

**Card 3 - Tempo.**
- Ícone: `_workshop/icons/assets/Tempo-onlight.svg`
- Categoria: Monitoramento e antifraude
- Frase de papel: *O alerta certo, no analista certo, no momento certo.*
- Descritor: Painel de monitoramento transacional com IA embarcada e regras configuráveis. Visões dedicadas para Cliente e Cabine. Calibrado para PIX, STR e Circular BACEN 3.978.
- Link: `/tempo`

**Card 4 - Libreto.**
- Ícone: `_workshop/icons/assets/Libreto-onlight.svg`
- Categoria: Inteligência e formalização
- Frase de papel: *A documentação do banco, sob o mesmo plano de controle das transações.*
- Descritor: Repositório, editor colaborativo e publicador HTML de documentação corporativa. Permissão herdada do Maestro. Integração com o Fígaro via MCP.
- Link: `/libreto`

**Card 5 - Ágora.**
- Ícone: `_workshop/icons/assets/Agora-onlight.svg`
- Categoria: Compliance regulatório
- Frase de papel: *PLD que termina em RIF, não em planilha.*
- Descritor: Conduz cada caso suspeito por um ciclo formal de 4 etapas até o RIF entregue ao COAF. Construído sobre Circular BACEN 3.978 e Lei 9.613.
- Link: `/agora`

**Card 6 - Atlas.**
- Ícone: `_workshop/icons/assets/Atlas-onlight.svg`
- Categoria: Compliance regulatório
- Frase de papel: *Quebra de sigilo como processo, não como exportação.*
- Descritor: Gerencia ordens judiciais e requisições de Receita Federal, COAF, MP, Judiciário e CVM. Pacote determinístico com hash retido. Construído sobre Lei Complementar 105/2001.
- Link: `/atlas`

**Card 7 - Mosaico.**
- Ícone: `_workshop/icons/assets/Mosaico-onlight.svg`
- Categoria: Governança e decisão
- Frase de papel: *Decisão de crédito que sua política reconhece.*
- Descritor: Motor de crédito com policy-as-code. Bureau, Open Finance e dados internos no mesmo motor. Modelo padrão ou proprietário sob a mesma governança.
- Link: `/mosaico`

**Card 8 - Trama.**
- Ícone: `_workshop/icons/assets/Trama-onlight.svg`
- Categoria: Monitoramento e antifraude
- Frase de papel: *Antifraude que enxerga a rede, não o evento.*
- Descritor: Antifraude em grafo, com camadas combinadas de regra, modelo e política contextual. Detecta rings, mulas e beneficiários compartilhados antes do prejuízo se formar.
- Link: `/trama`

**Card 9 - Signum.**
- Ícone: `_workshop/icons/assets/Signum-onlight.svg`
- Categoria: Inteligência e formalização
- Frase de papel: *Cada assinatura, uma evidência auditável.*
- Descritor: Assinatura digital para formalização financeira. Padrões ICP-Brasil, PAdES, CAdES e XAdES. Persistência LTA pronta para 5, 10 ou 20 anos de fiscalização.
- Link: `/signum`

**CTA da seção (abaixo dos 9 cards).** Link "Ver portfólio completo" com seta forward, em Esmeralda Médio, levando para `/produtos`.

### 6.4.1 Faixa de Impacto (logo abaixo dos 9 cards)

**Headline pequeno (opcional, Inter Medium uppercase, Esmeralda Médio):** Impacto

**4 cards horizontais (grid 4 colunas em desktop, 2x2 em tablet, 1x4 empilhado em mobile):**

| Card | Número grande | Label abaixo |
|---|---|---|
| 1 | **9** | Ferramentas modulares na família |
| 2 | **5** | Regulações cobertas (BACEN, COAF, CVM, LGPD, ICP-Brasil) |
| 3 | **1** | Instituição financeira em produção (Banco Original) |
| 4 | **API** | Integração nativa via API e MCP |

**Padrão de card.** Fundo Esmeralda Profundo, texto branco. Número grande em Satoshi Bold tamanho `--fs-h2`, label em Inter Medium tamanho `--fs-body`. Padding `--space-8`, border-radius `--radius-lg`.

### 6.5 Seção 4 - Breaker CTA

**Fundo.** Esmeralda Profundo `#11484B`.

**Layout.** 2 colunas: texto à esquerda, card visual à direita.

**Headline (H2, Satoshi Semi-Bold, branco, duas linhas):**

```
Comece pela conversa
que cabe no seu tempo.
```

**Subheadline (Inter Regular, branco opacidade 0.85):**

```
Em 30 minutos no WhatsApp, identificamos a operação real, a dor
priorizada e o módulo Fingate que faz sentido entrar primeiro. Sem
formulário, sem qualificação assíncrona, sem promessa de prazo antes
do workshop.
```

**CTA primário.** Botão "Falar no WhatsApp", fundo Menta, texto Esmeralda Profundo.

Link: `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fingate%20e%20quero%20entender%20qual%20m%C3%B3dulo%20faz%20sentido%20para%20a%20minha%20opera%C3%A7%C3%A3o.`

**Card visual à direita.** Gema lapidada `_workshop/icons/assets/Figaro.svg` (versão institucional 5 tons) em escala grande, ou `GEMA_01_full_color.svg`, sobre o próprio fundo Esmeralda. Microcopy abaixo: "Construído para a operação financeira brasileira."

### 6.6 Seção 5 - Problemas que resolvemos

**Fundo.** Branco com círculos decorativos esmeralda em opacidade baixa.

**Pill:** `[ícone alerta]` Problemas que resolvemos

**Headline (H2, Satoshi Semi-Bold, duas linhas):**

```
A operação financeira moderna deixou
de caber em três caminhos.
```

**Corpo (Inter Regular, max-width 80ch):**

```
Quando a instituição precisa de uma ferramenta nova de risco,
compliance, crédito ou IA, costuma escolher entre três alternativas
que envelhecem rápido. A Fingate entra como quarta opção, calibrada
para o regime regulatório brasileiro e pronta para integrar ao que a
instituição já tem.
```

**6 cards problema-solução (grid 3 colunas em desktop, 2 em tablet, 1 em mobile).**

**Padrão de card.** Fundo branco com borda Cinza Claro, border-radius `--radius-lg`, padding `--space-6`. Ícone no topo (a produzir, traço fino). Título H3 Satoshi Semi-Bold. Descritor curto Inter Regular. Linha de impacto com prefix `↳` (seta sub-direção). Linha de resposta Fingate em destaque (Inter Semi-Bold, Esmeralda Médio).

**Card 1 - Suíte enterprise global.**
- Descritor: Capacidade técnica, ciclo de implantação de 6 a 12 meses, custo descalibrado para a operação brasileira.
- `↳` Sua roadmap fica refém do release do fornecedor.
- **Fingate.** Implantação em semanas. Contratação por módulo. Sem ciclo enterprise.

**Card 2 - Módulo do core bancário.**
- Descritor: Visão genérica de risco, UX antiga, dívida regulatória do fornecedor.
- `↳` Você paga caro por uma versão amarrada ao que o core consegue evoluir.
- **Fingate.** Ferramenta independente, com governança própria. Integração via API e MCP sem reescrever pipeline.

**Card 3 - Construção in-house.**
- Descritor: Parece resolver na primeira versão. Vira coleção de scripts que ninguém mais sabe auditar.
- `↳` Dívida técnica acumulada em 18 meses.
- **Fingate.** Módulo pronto sob a governança herdada do Maestro, com trilha por evento desde o dia 1.

**Card 4 - Sistemas desconectados.**
- Descritor: Cadastro paralelo em três ferramentas, ACL divergente do organograma, política em PDF.
- `↳` Quem entra de férias precisa ser redirecionado em três sistemas; quem sai, revogado em três janelas.
- **Fingate.** Cadastro único no Maestro, herdado por todos os produtos. Sem provisionamento separado.

**Card 5 - Auditoria reativa.**
- Descritor: Relatório que se monta na hora da fiscalização. Evidência reconstruída de memória.
- `↳` Quando o BACEN ou COAF chega, o histórico vira arqueologia.
- **Fingate.** Trilha auditável por evento desde a primeira transação, alerta, decisão de crédito, assinatura ou ofício.

**Card 6 - Política em PDF.**
- Descritor: A política mora num documento aprovado no comitê. O motor executa o que o time conseguiu traduzir em regra.
- `↳` Quando a política muda, ninguém sabe se o motor mudou junto.
- **Fingate.** Policy-as-code no Mosaico, Ágora e Atlas. Versão da política aplicada fica registrada em cada decisão.

### 6.7 Seção 6 - Diferenciais (Por que a Fingate)

**Fundo.** Cinza Claro `#F5F5F5`.

**Pill:** `[ícone fingate]` Diferenciais

**Headline (H2, Satoshi Semi-Bold, uma linha):** Por que a Fingate?

**Corpo (Inter Regular, max-width 80ch):**

```
Seu fornecedor de core bancário cobra enterprise por módulos que
deveriam ser padrão. Construir in-house vira dívida técnica em 18
meses. A suíte global entrega capacidade com ciclo de implantação
descalibrado. A Fingate é a quarta opção: moderna, modular,
API-first, com IA embarcada onde resolve, e calibrada para a operação
brasileira (PIX, STR, BACEN, COAF, CVM, ICP-Brasil, LGPD) desde a
primeira linha de código.
```

**Layout.** 2 colunas: à esquerda 2 cards menores empilhados, à direita 1 card grande comparativo.

**Card menor 1 - Modular por design.**
```
A operação contrata o módulo que faz sentido entrar primeiro. Os
outros 8 esperam. Cada produto opera de forma independente, com sua
dor resolvida, e ganha em conjunto quando o portfólio cresce.
```

**Card menor 2 - Calibrada para a regulação brasileira.**
```
PIX e STR como entidades de primeira classe. RIF gerado dentro da
ferramenta. Quebra de sigilo como processo. Assinatura ICP-Brasil.
Open Finance como fonte de primeira classe. A operação fala a língua
da fiscalização sem tradução.
```

**Card grande à direita - As três alternativas, lado a lado.**

Tabela visual de 4 linhas:

| Alternativa | Custo da decisão |
|---|---|
| Suíte enterprise global | Ciclo de implantação de 6 a 12 meses, contratação enterprise, evolução pelo release do fornecedor |
| Construção in-house | Dívida técnica em 18 meses, dependência de quem escreveu, manutenção crescente |
| Módulo do core bancário | UX antiga, dívida regulatória herdada, evolução amarrada ao release do core |
| **Fingate** | Módulo independente, semanas para entrar em produção, governança nativa, calibração brasileira |

**Visual.** A linha da Fingate fica destacada (fundo Menta ou borda Esmeralda Médio, texto em negrito).

### 6.8 Footer global (renderizado em todas as páginas)

**Fundo.** Esmeralda Profundo `#11484B`.

**Layout.** 4 colunas em desktop, 2x2 em tablet, 1x4 empilhado em mobile. Cor de texto: branco com opacidade variável.

**Coluna 1 - Logo e tagline.**
- Logo: `FINGATE_04_mono_branca.svg` (mono branca, ~120px de largura).
- Tagline abaixo (Inter Regular, opacidade 0.7): "A camada utilitária modular do sistema financeiro brasileiro."

**Coluna 2 - Produtos.**
- Header: "Produtos" (Inter Semi-Bold, branco).
- 9 links nominais para cada página de produto:
  - Maestro (`/maestro`)
  - Fígaro (`/figaro`)
  - Tempo (`/tempo`)
  - Libreto (`/libreto`)
  - Ágora (`/agora`)
  - Atlas (`/atlas`)
  - Mosaico (`/mosaico`)
  - Trama (`/trama`)
  - Signum (`/signum`)

**Coluna 3 - Institucional.**
- Header: "Institucional"
- Home (`/`)
- Sobre (`/sobre`)
- Portfólio (`/produtos`)

**Coluna 4 - Contato.**
- Header: "Contato"
- WhatsApp Business (link externo): `https://wa.me/5511936210224?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fingate%20e%20quero%20conversar%20com%20a%20equipe.`
- LinkedIn (`https://www.linkedin.com/company/fingate`, validar URL com orquestrador)
- Política de Privacidade (`/politica-de-privacidade`, página a produzir em rodada futura; link pode ficar quebrado por enquanto ou apontar para `#`)
- Termos de Uso (`/termos-de-uso`, idem)

**Faixa inferior (separada por linha horizontal sutil em Menta opacidade 0.2):**

```
Fingate Tecnologia e Desenvolvimento Financeiro · CNPJ 08.033.252/0001-29 · São Paulo, SP
© 2026 Fingate. Todos os direitos reservados.
```

Inter Regular, opacidade 0.6, fs-microcopy, centralizado.

### 6.9 Breadcrumb

A Home não tem breadcrumb. Outras páginas terão (`Fingate > Sobre`, etc.).

---

## 7. Estrutura HTML sugerida

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fingate. A camada utilitária modular do sistema financeiro brasileiro.</title>
  <meta name="description" content="Fingate é a fintech B2B que entrega 9 ferramentas modulares para risco, compliance, crédito, antifraude e documentação. Em produção em instituição financeira brasileira.">
  <link rel="canonical" href="https://fingate.com.br/">

  <!-- Open Graph -->
  <meta property="og:title" content="Fingate. A camada utilitária modular do sistema financeiro brasileiro.">
  <meta property="og:description" content="9 ferramentas modulares para a operação financeira brasileira. Em produção no Banco Original.">
  <meta property="og:image" content="https://fingate.com.br/assets/og-fingate-home.png">
  <meta property="og:url" content="https://fingate.com.br/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Fingate. A camada utilitária modular do sistema financeiro brasileiro.">
  <meta name="twitter:description" content="9 ferramentas modulares para a operação financeira brasileira.">
  <meta name="twitter:image" content="https://fingate.com.br/assets/og-fingate-home.png">

  <!-- Favicon e touch icon -->
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">

  <!-- Fontes (preload) -->
  <link rel="preload" href="/assets/fonts/Satoshi-Bold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/Satoshi-SemiBold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/Inter-Medium.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/Inter-SemiBold.woff2" as="font" type="font/woff2" crossorigin>

  <link rel="stylesheet" href="/css/main.css">

  <!-- Schema.org Organization mais WebSite -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://fingate.com.br/#organization",
        "name": "Fingate Tecnologia e Desenvolvimento Financeiro",
        "legalName": "Fingate Tecnologia e Desenvolvimento Financeiro",
        "url": "https://fingate.com.br",
        "logo": "https://fingate.com.br/assets/logo-fingate.svg",
        "description": "Fintech B2B brasileira que entrega a camada utilitária modular do sistema financeiro brasileiro.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "taxID": "08.033.252/0001-29",
        "sameAs": ["https://www.linkedin.com/company/fingate"]
      },
      {
        "@type": "WebSite",
        "@id": "https://fingate.com.br/#website",
        "url": "https://fingate.com.br",
        "name": "Fingate",
        "publisher": {"@id": "https://fingate.com.br/#organization"},
        "inLanguage": "pt-BR"
      }
    ]
  }
  </script>
</head>
<body>

  <header class="site-header" role="banner">
    <!-- Logo, menu, CTA WhatsApp -->
  </header>

  <main>
    <section class="hero" id="hero" aria-labelledby="hero-headline">
      <!-- Seção 1 -->
    </section>

    <section class="seguranca" id="seguranca" aria-labelledby="seguranca-headline">
      <!-- Seção 2 -->
    </section>

    <section class="produtos" id="produtos" aria-labelledby="produtos-headline">
      <!-- Seção 3 mais Faixa de Impacto -->
    </section>

    <section class="breaker-cta" id="breaker" aria-labelledby="breaker-headline">
      <!-- Seção 4 -->
    </section>

    <section class="problemas" id="problemas" aria-labelledby="problemas-headline">
      <!-- Seção 5 -->
    </section>

    <section class="diferenciais" id="diferenciais" aria-labelledby="diferenciais-headline">
      <!-- Seção 6 -->
    </section>
  </main>

  <footer class="site-footer" role="contentinfo">
    <!-- Footer global -->
  </footer>

  <script src="/js/main.js" defer></script>
</body>
</html>
```

---

## 8. Interações JavaScript (vanilla)

Lista de comportamentos esperados, sem framework:

1. **Mobile menu (hamburger).** Toggle do menu lateral em viewport `<768px`. Animação CSS, JS apenas para classe `.is-open`.
2. **Header sticky com scroll.** Header com `position: sticky; top: 0` e shadow sutil ao scroll. JS adiciona classe `.is-scrolled` quando `window.scrollY > 0`.
3. **Scroll suave.** Links internos com âncora usam `scroll-behavior: smooth` no CSS, sem JS.
4. **Lazy load de imagens.** Imagens fora do hero com `loading="lazy"`. SVGs podem ficar inline para evitar requisições extras (especialmente ícones de produto).
5. **Analytics no clique do WhatsApp.** Cada CTA WhatsApp dispara evento. Sugestão de implementação:
   ```js
   document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
     link.addEventListener('click', (e) => {
       const origin = link.dataset.origin || 'unknown';
       // dispatch event: whatsapp_click com label = origin
     });
   });
   ```
   Cada CTA recebe `data-origin="header_global"`, `data-origin="hero"`, `data-origin="breaker_cta_home"`, `data-origin="footer_global"` para o evento poder qualificar a origem do clique.
6. **Dropdown do menu Produtos (opcional).** Se decidir mostrar dropdown ao hover no item "Produtos", JS para abrir/fechar com delay sutil. Em mobile, vira accordion.
7. **Hover/focus dos cards.** Tudo CSS, com `transition` e `transform: translateY(-2px)` no hover.

**Não usar.** Carrossel automático, parallax intenso, modal de newsletter, popup de cookie agressivo (banner sutil no rodapé, sim).

---

## 9. Responsividade (mobile-first)

**Breakpoints sugeridos:**

```css
/* Mobile-first: estilos base já cobrem mobile */
@media (min-width: 640px) { /* sm: tablet pequeno */ }
@media (min-width: 768px) { /* md: tablet */ }
@media (min-width: 1024px) { /* lg: desktop pequeno */ }
@media (min-width: 1280px) { /* xl: desktop padrão (Figma) */ }
```

**Grid de cards por viewport:**

| Seção | Mobile | Tablet | Desktop |
|---|---|---|---|
| 4 cards de segurança | 1 col | 2 col | 4 col |
| 9 cards de produto | 1 col | 2 col | 3 col |
| Faixa de Impacto (4) | 1 col empilhado | 2x2 | 4 col |
| 6 cards problema-solução | 1 col | 2 col | 3 col |
| Diferenciais (2 menores + 1 grande) | 1 col empilhado | 2 col empilhado | 2 col lado a lado |

**Footer.** 4 colunas em desktop, 2x2 em tablet, 1 col empilhado em mobile.

**Tipografia responsiva.** Use `clamp()` nas variáveis de tamanho (já sugerido em §3.2).

---

## 10. Acessibilidade (WCAG 2.1 AA mínimo)

**Critérios obrigatórios:**

- Contraste mínimo 4.5:1 para texto normal e 3:1 para texto grande (H1, H2).
- Branco sobre Esmeralda Profundo: contraste 9.85:1 (aprovado).
- Esmeralda Profundo sobre Branco: contraste 9.85:1 (aprovado).
- Validar contraste de Menta sobre Branco e Cinza Claro sobre Branco antes de usar como texto.
- Navegação por teclado funcional (Tab order coerente, foco visível com outline próprio em Menta).
- `alt` em todas as imagens significativas. `alt=""` em ícones decorativos.
- `aria-label` em botões com ícone sem texto.
- `aria-labelledby` em seções com `<h2>` (já no template HTML do §7).
- Reduced motion: respeitar `prefers-reduced-motion` desabilitando transições não-essenciais.
- Tamanho mínimo de alvo de toque: 44x44px (CTAs e links no menu mobile).
- Heading hierarchy correta (um H1 por página, H2 só dentro de seções de primeiro nível).

---

## 11. Performance

**Metas Lighthouse (mobile, throttling 3G rápido):**

- Performance: 90+
- Acessibilidade: 100
- Best Practices: 95+
- SEO: 100

**Práticas obrigatórias:**

- Critical CSS inline no `<head>` (estilos do hero e header).
- Resto do CSS carregado com `<link rel="stylesheet">` em final do `<body>` se for muito grande, ou via async.
- Fontes em woff2 hinted com `font-display: swap`.
- SVGs inline para ícones de produto (evita N requisições).
- Logo Fingate em SVG inline ou via `<object>` ou `<img>` conforme o que melhor cachear.
- JS deferido (`defer`).
- Imagens grandes com `<picture>` para servir AVIF/WebP com fallback PNG.
- Compressão Brotli ou Gzip ativada no servidor.

---

## 12. SEO

**On-page:**

- `<title>` único, 50 a 60 caracteres (já fornecido em §7).
- `<meta name="description">` 150 a 160 caracteres.
- `<link rel="canonical">` para `https://fingate.com.br/`.
- Open Graph completo (já no §7).
- Twitter Card completo (já no §7).
- Schema.org Organization e WebSite (já no §7).
- Heading hierarchy correta (1 H1 no hero, H2 em cada seção).
- Texto alternativo em imagens significativas (logo Fingate, ícones de produto).

**Off-page (a fazer pelo time de marketing, fora do escopo desta entrega):**

- `sitemap.xml` listando as 12 páginas. Quando outras páginas existirem.
- `robots.txt` permitindo crawl.
- Submissão ao Google Search Console e Bing Webmaster.

---

## 13. Open Graph image (a produzir)

**Caminho final.** `https://fingate.com.br/assets/og-fingate-home.png`
**Dimensão.** 1200x630px (padrão Open Graph).
**Base visual sugerida.**

- Fundo: Esmeralda Profundo `#11484B`.
- Logo Fingate à esquerda: `FINGATE_02_secundaria_fundo_escuro.svg` em escala média.
- Headline à direita: "A camada utilitária modular do sistema financeiro brasileiro." em Satoshi Semi-Bold branco, max-width 60% da largura.
- Microcopy inferior: "9 ferramentas modulares · Em produção no Banco Original."
- Gema lapidada (5 tons) discreta no canto inferior direito.

Produzir este PNG como parte da entrega do design system.

---

## 14. Critérios de aceite

A entrega da Home só será aceita se atender a todos os critérios abaixo:

1. **Copy idêntico ao deste brief.** Sem alteração de palavra, sem invenção de microcopy.
2. **Estrutura visual casando com o Figma** (6 seções + header + footer + as 5 atualizações do §2.2 aplicadas).
3. **Tokens de marca aplicados** (paleta canon, tipografia Satoshi + Inter, espaçamento 4pt, border-radius das pills e cards).
4. **Em-dash zero.** Caractere em-dash codepoint U+2014 (bytes 0xE2 0x80 0x94) proibido em qualquer lugar do HTML, CSS ou conteúdo.
5. **Vocabulário canônico respeitado** (lista completa no §15).
6. **Responsivo mobile-first** funcional nos 4 breakpoints.
7. **Acessibilidade WCAG 2.1 AA** validada por axe ou WAVE.
8. **Lighthouse 90+** em todas as categorias no mobile.
9. **HTML W3C válido** (validator.w3.org).
10. **Schema.org Organization e WebSite** presentes e válidos.
11. **CTAs WhatsApp** com texto pré-preenchido contextualizado por origem (header, hero, breaker, footer). Links exatos no §6.
12. **Atributos de segurança** em links externos: `target="_blank" rel="noopener noreferrer"`.
13. **Logos e ícones canônicos** dos paths em §4. Nenhum logo improvisado.

---

## 15. Não-negociáveis do canon de marca

Lista de termos PROIBIDOS no copy, no HTML, no CSS de comentários e em qualquer microcopy improvisada:

**Verbos proibidos:** revolucionar, disruptar, inovar, democratizar, transformar, elevar, evoluir.

**Adjetivos proibidos:** revolucionário, disruptivo, inovador, completo, robusto, definitivo, único, da próxima geração, de ponta, de última geração.

**Substantivos com restrição:**
- "Solução" - PROIBIDO. Usar "ferramenta" ou "produto".
- "Plataforma" - PROIBIDO como descritor da Fingate inteira. Válido apenas para descrever produto individual com qualificação técnica (ex: "Plataforma de IA generativa corporativa" no Fígaro).
- "Ecossistema" - PROIBIDO em uso metafórico. Aceitável quando literal ("o ecossistema Fingate de produtos").

**Estruturas proibidas:**
- "Tudo em um", "fim a fim" (canon §2.3).
- "Ponta a ponta" como descritor de produto. Aceitável como qualificador técnico de criptografia (canon §2.4).
- "Para sempre", "definitivo", claims sem prova adjacente.
- Auto-superlativos ("primeira do Brasil", "líder em X").

**Estilo proibido:**
- Em-dash (codepoint U+2014, bytes 0xE2 0x80 0x94). Substituir por hífen com espaços, vírgula, dois-pontos, ponto ou parênteses.
- Tratamento na segunda pessoa do plural ("vocês") ou outro registro ("tu", "a gente"). Padrão é "você" no singular.
- Emojis em copy institucional.
- Exclamações em copy institucional.
- Ataque nominal a concorrentes (NICE Actimize, SAS, Topaz, Notion, Confluence, SharePoint, DocuSign). Posicionar pela diferença factual, nunca pela depreciação do outro.

**Vocabulário preferido (canon §2.4):**
- Substantivos do domínio: alçada, fluxo, etapa, solicitação, aprovador, SLA, transação, alerta, conta reserva, prompt, agente, skill, rule, documento, versão, permissão.
- Verbos concretos: registra, publica, audita, vincula, orquestra, monitora, intercepta, formaliza, qualifica, encaminha.
- Citações regulatórias diretas: BACEN, COAF, CVM, LGPD, PLD, PIX, STR, Circular BACEN 3.978, Lei 9.613, MP 2.200-2/2001, Lei 14.063/2020, Lei Complementar 105/2001.
- Concretudes técnicas: criptografia ponta a ponta, quebra de sigilo formal, MCP, Llama, infraestrutura própria, policy-as-code, Open Finance, ICP-Brasil.

**Capitalização canônica dos 9 produtos:** inicial maiúscula em copy comercial e institucional (Maestro, Fígaro, Tempo, Libreto, Ágora, Atlas, Mosaico, Trama, Signum). CAPS apenas em peças de marca visual (logo, manifesto visual).

---

## 16. Entregáveis esperados

Quando você (Claude Design) terminar a Home, entregue:

1. **`index.html`** (página completa, HTML5 semântico).
2. **`/css/main.css`** (com tokens, base, componentes, utilities).
3. **`/js/main.js`** (interações leves).
4. **`/assets/`** (favicon, OG image, fontes woff2, ícones SVG inline ou em arquivo separado conforme conveniência).
5. **`/assets/og-fingate-home.png`** (Open Graph image produzida conforme §13).
6. **README curto** (`README.md` na raiz do projeto) explicando estrutura de pastas, como rodar local, como deployar.

Sub-pastas sugeridas:
```
/
├── index.html
├── css/
│   └── main.css
├── js/
│   └── main.js
├── assets/
│   ├── fonts/
│   ├── images/
│   ├── icons/
│   ├── og-fingate-home.png
│   └── favicon.svg
└── README.md
```

---

## 17. O que NÃO está no escopo desta rodada

- **Sobre, Portfólio e 9 páginas de produto.** Virão em briefs separados nas próximas rodadas. Mas o header e o footer da Home **serão reaproveitados em todas as páginas**, então construa-os pensando em reuso (ex: como partials, includes, ou componentes JS).
- **Política de Privacidade e Termos de Uso.** Copy a produzir em rodada futura. Por enquanto, os links no footer podem apontar para `#` ou ficarem como `<span>` desativado.
- **Blog, Carreiras, Investidores, Imprensa, Docs, Segurança.** Páginas futuras (sitemap §9).
- **Sistema de busca interna.** Não está na primeira versão.
- **Dark mode.** Não está na primeira versão.
- **Internacionalização (en-US, es-ES).** Não está na primeira versão.

---

## 18. Comunicação durante a execução

Se você (Claude Design) tiver dúvida em qualquer ponto, **NÃO improvise**. Pergunte ao orquestrador (Fingate Product Copy Orchestrator) antes de tomar decisão de copy ou microcopy não coberto neste brief.

Áreas onde dúvida é provável:

- **Microcopy de erro** (não há formulário, mas pode haver erro de carregamento, fonte que não baixa etc.).
- **Texto de hover/tooltip** em cards.
- **Texto alternativo de imagens decorativas** (geralmente `alt=""`, mas verifique).
- **Texto do botão "Saiba mais" dos cards de produto.** Padrão: "Conhecer o [Produto]" com seta forward. Se preferir variar, alinhe.

---

## 19. Referências cruzadas (anexos)

Os arquivos abaixo estão disponíveis no workspace e complementam este brief. Caso precise, peça acesso ao orquestrador:

- `Site/drafts/Site - Copy Home.md` - copy completo da Home (versão expandida, com seções de Para quem e FAQ que não cabem na estrutura visual do Figma; vão para outras páginas).
- `Site/references/memo-design-figma.md` - memo detalhado das 5 atualizações de copy do Figma.
- `Site/references/assets-marca.md` - inventário completo dos logos, ícones e tipografia.
- `Site/references/whatsapp-cta.md` - as 15 variações de texto pré-preenchido por origem.
- `Site/drafts/Site - Sitemap.md` - mapa completo das 12 páginas.
- `_canon/canon_copy_fingate.md` v1.4 - canon completo da marca Fingate (a fonte de verdade).

---

## 20. Resumo executivo

Você vai construir a Home institucional da Fingate em HTML, CSS e JS vanilla. A referência visual é a LP Figma `KThbPcWMTSlXqTzkijiOXI` node `14:320`, com 5 atualizações de copy obrigatórias (canon v1.4 sobre o copy desatualizado do Figma). O copy final está aqui no §6, idêntico, sem reescrita. Os tokens de design estão no §3. Os assets em §4. Critérios de aceite em §14. Não-negociáveis em §15.

Estrutura da Home:

1. Header global (logo + menu + CTA WhatsApp).
2. Hero (frase canônica, subhead, CTA WhatsApp, selo Banco Original).
3. Segurança (4 cards de pilares).
4. Produtos (9 cards organizados em 4 categorias funcionais, mais Faixa de Impacto com 4 valores verificáveis).
5. Breaker CTA (segundo bloco WhatsApp).
6. Problemas que resolvemos (6 cards problema-solução).
7. Diferenciais (2 cards menores mais 1 card comparativo).
8. Footer global (4 colunas mais faixa de razão social).

Canal de contato exclusivo: WhatsApp `https://wa.me/5511936210224` com texto pré-preenchido contextualizado por origem.

Boa entrega.

---

## Fonte do brief

* Canon `_canon/canon_copy_fingate.md` v1.4 (2026-05-10), fonte de verdade da marca Fingate.
* `Site/drafts/Site - Copy Home.md` v2 (entregue 2026-05-11, casada com estrutura visual do Figma).
* `Site/references/assets-marca.md` (inventário de logos, ícones, tipografia).
* `Site/references/memo-design-figma.md` (5 atualizações de copy do Figma).
* `Site/references/whatsapp-cta.md` (textos pré-preenchidos).
* `Site/drafts/Site - Sitemap.md` (aprovado).
* Brief inicial do agente `Site/brief.md`.
* LP Figma `KThbPcWMTSlXqTzkijiOXI` node `14:320` (referência visual primária).
* Decisões do checkpoint 2026-05-11 do orquestrador: WhatsApp único, 4 categorias funcionais, Saída A da faixa de Impacto, dados de PJ.
* Auditoria das 9 LPs em 2026-05-11.
