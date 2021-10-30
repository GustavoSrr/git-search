import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    height: 28px;
    width: 250px;

    margin-left: 15px;
    padding: 0 10px;

    border-radius: 5px;
    border: 1px solid var(--borderColor);
    background-color: var(--bgColor);
    color: var(--white);

    &::placeholder {
      color: var(--gray);
    }

    &:focus {
      outline: 0;
      border: 1px solid var(--blue);
      background-color: transparent;
    }
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
