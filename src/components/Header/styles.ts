import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  padding: 16px 32px;

  background-color: var(--headerBgColor);

  svg {
    color: var(--white);
    cursor: pointer;

    &:hover {
      filter: opacity(0.7);
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    width: 100%;

    margin-left: 15px;

    input {
      height: 28px;
      width: 20%;

      padding: 0 10px;

      border-radius: 5px;
      border: 1px solid var(--borderColor);
      background-color: var(--bgColor);
      color: var(--white);
      transition: width 0.3s ease-in-out;

      &::placeholder {
        color: var(--gray);
      }

      &:focus {
        outline: 0;
        border: 1px solid var(--blue);
        background-color: transparent;
        width: 100%;
      }

      @media only screen and (max-width: 800px) {
        width: 60%;
      }

      @media only screen and (max-width: 500px) {
        width: 100%;
      }
    }
  }
`
