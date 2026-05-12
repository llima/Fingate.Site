# Fingate — Site

Home institucional da Fingate em HTML, CSS e JS vanilla. Sem framework, sem CMS.

## Estrutura

```
/
├── index.html          Home (1 página)
├── css/main.css        Tokens + componentes + responsivo
├── js/main.js          Interações leves (header, mobile menu, reveal, analytics hook)
├── assets/images/      Logos Fingate + variações da gema
└── README.md
```

## Rodar local

```bash
# qualquer servidor estático
python3 -m http.server 8000
# ou
npx serve .
```

Abrir `http://localhost:8000/`.

## Tokens

Definidos em `:root` no topo de `css/main.css`. Paleta canônica do Manual de Marca: Esmeralda Profundo `#11484B`, Esmeralda Médio `#27A698`, Menta `#48C9A2`. Tipografia: Satoshi (títulos), Inter (corpo), JetBrains Mono (código).

## Próximas páginas

Sobre, Portfólio e 9 páginas de produto (Maestro, Fígaro, Tempo, Libreto, Ágora, Atlas, Mosaico, Trama, Signum). Header e footer já estruturados para reuso.
