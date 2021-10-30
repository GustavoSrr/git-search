import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --bgColor: #0d1117;
    --borderColor: #30363d;
    --headerBgColor: #161b22;

    --blue: #1f6feb;
    --white: #f0f6fc;
    --gray: #c9d1d9;
  }

  body {
    min-height: 100vh;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: var(--bgColor);
  }
`
