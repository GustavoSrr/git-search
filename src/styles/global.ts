import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --bgColor: #0d1117;
    --borderColor: #30363d;
    --borderHoverColor: #8b949e;
    --buttonBgColor: #21262d;
    --buttonTextColor: #c9d1d9;
    --headerBgColor: #161b22;

    --blue: #1f6feb;
    --white: #f0f6fc;
    --gray: #c9d1d9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    width: 100%;

    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    background-color: var(--bgColor);
  }
`
