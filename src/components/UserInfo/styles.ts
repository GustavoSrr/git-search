import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  margin: 0 20px;
`

export const Avatar = styled.img`
  width: 50%;
  max-width: 250px;
  height: auto;

  margin-bottom: 20px;

  border: 2px solid var(--borderColor);
  border-radius: 50%;

  @media only screen and (max-width: 800px) {
    max-width: 200px;
  }
`

export const NickName = styled.h1`
  margin: 0;

  font-size: 30px;
  color: var(--white);

  @media only screen and (max-width: 650px) {
    font-size: 27px;
  }
`

export const Login = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  margin: 0;

  margin-bottom: 10px;

  font-weight: normal;
  color: var(--gray);
  filter: opacity(0.7);
`

export const Bio = styled.p`
  margin: 0;
  margin-bottom: 10px;

  max-width: 600px;

  text-align: center;
  color: var(--gray);
`

export const Others = styled.div`
  display: flex;
  color: var(--gray);
  filter: opacity(0.7);
  gap: 8px;

  a {
    color: var(--gray);
    text-decoration: none;

    &:hover {
      color: var(--white);
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: left;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 3px;
    }
  }
`
