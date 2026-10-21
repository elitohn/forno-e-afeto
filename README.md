<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=175&color=0:0F172A,55:164E63,100:0891B2&text=Forno%20e%20Afeto&fontColor=FFFFFF&fontSize=34&fontAlignY=38&desc=Site%20conceitual%20de%20padaria%20artesanal&descAlignY=61&descSize=15" alt="Capa do projeto Forno e Afeto" width="100%" />

![Tecnologias](https://img.shields.io/badge/HTML5%2C%20CSS3%20e%20JavaScript-0F172A?style=flat-square) ![Idioma](https://img.shields.io/badge/documentação-pt--BR-0891B2?style=flat-square) ![Tipo](https://img.shields.io/badge/projeto-acadêmico-334155?style=flat-square)

</div>

# Forno & Afeto

Site responsivo e conceitual para uma padaria artesanal fictícia em Brasília. O projeto apresenta produtos, a história da marca, informações para visitantes e orientações sobre encomendas.

Desenvolvido para a disciplina de **Desenvolvimento Front-End (DFE) da UCB**, o site usa HTML semântico, CSS e JavaScript para criar uma página única com navegação por seções e interações simples.

## Prévia do projeto

A página está organizada em seções acessíveis pelo menu: início, destaques, nossa história, encomendas e contato. As imagens dos produtos e do banner são carregadas do Unsplash, então precisam de conexão com a internet para aparecer.

## Funcionalidades

- Layout responsivo para desktop, tablet e celular;
- Navegação por links internos entre as seções;
- Cards de produtos com sugestões de consumo exibidas ao clicar;
- Botão de encomenda que mostra ou oculta orientações;
- Informações de apresentação e contato da padaria.

> Este é um projeto acadêmico de interface. O botão de encomenda apenas mostra orientações na página; ele não envia pedidos e não há backend ou sistema de pagamento.

## Tecnologias

- HTML5;
- CSS3, com Flexbox, Grid e media queries;
- JavaScript para as interações da página;
- Imagens externas do Unsplash.

## Como executar

Não há dependências ou etapa de build.

1. Clone o repositório:

   ```bash
   git clone https://github.com/elitohn/forno-e-afeto.git
   ```

2. Entre na pasta e abra `index.html` no navegador:

   ```bash
   cd forno-e-afeto
   ```

Também é possível abrir o projeto no Visual Studio Code e iniciar um servidor local com a extensão Live Server.

## Estrutura

```text
.
├── css/
│   └── style.css
├── js/
│   └── script.js
└── index.html
```

- `index.html`: conteúdo e estrutura das seções;
- `css/style.css`: identidade visual, layout responsivo e estados dos componentes;
- `js/script.js`: sugestões interativas dos produtos e abertura das orientações de encomenda.

## Objetivo

Praticar estruturação semântica de páginas, estilização responsiva e interatividade básica no navegador.

Desenvolvido por **Wellyton Huan** para fins acadêmicos.
