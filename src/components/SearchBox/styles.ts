import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    width: 60%;
    display: flex;

    input {
      height: 32px;
      width: 100%;

      padding: 0 10px;

      border-radius: 5px;
      border: 1px solid var(--borderColor);
      background-color: var(--bgColor);
      color: var(--white);

      &::placeholder {
        color: var(--borderColor);
      }

      &:focus {
        box-shadow: 0 0 0 3px #0c2d6b;
        outline: 0;
        border-color: var(--blue);
        background-color: transparent;
      }
    }

    button {
      margin-left: 8px;
      padding: 5px 16px;

      border: 1px solid var(--borderColor);
      border-radius: 4px;
      color: var(--buttonTextColor);
      background-color: var(--buttonBgColor);
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: var(--borderColor);
        border-color: var(--borderHoverColor);
      }
    }

    @media only screen and (max-width: 650px) {
      flex-direction: column;
      width: 80%;

      button {
        margin: 10px 0 0 0;
        height: 32px;
      }
    }
  }
`

export const GitHub = styled.a`
  position: absolute;
  top: 0;
  margin:  16px;

  svg {
    color: var(--white);
    cursor: pointer;

    &:hover {
      filter: opacity(0.7);
    }
  }
`
