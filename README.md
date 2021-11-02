<h1 align="center">😺 Git Search</h1>

<img align="center" src="./assets/screenshot.png" draggable="false" />

> Um projeto feito para fazer pesquisas por usuários do GitHub consultando a API oficial.

## 📃 Conteúdo

  1. [Tecnologias](#-tecnologias)
  2. [Como funciona](#-como-funciona)
  3. [Veja o projeto](#-veja-o-projeto)
  4. [Instalação](#-instalação)

## 📡 Tecnologias

  - React
  - Vite
  - Node Fetch
  - Styled Components
  - EsLint
  - StyleLint

## 🤔 Como funciona?

  1. Ao digitar o nome do usuário no input de pesquisa, a consulta fica salva em um state do React.
  2. Quando o <kbd>Enter</kbd> é pressionado, via context, uma requisição é feita à API oficial do GitHub, que guarda os dados do usuário pesquisado em outro state.
  3. E, finalmente, os dados são exibidos em tela.

## 🚀 Veja o projeto!

  O projeto está hospedado na Vercel, [clicando aqui](https://git-search-project.vercel.app/) você pode visitar e testar.

## ⬇ Instalação
  ```bash
  # Clone este repositório
  git clone git@github.com:GustavoSrr/gitsearch.git
  # Entre na pasta gerada
  cd gitsearch
  # Instale as dependências
  npm i
  # ou
  yarn
  # Inicie o projeto
  npm start
  # ou
  yarn dev
```
