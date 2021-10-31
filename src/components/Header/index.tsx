import React, { FormEvent, useContext, useState } from 'react'

import { FaGithub } from 'react-icons/fa'
import { SearchContext } from '../../contexts/search'

import { Container, Content } from './styles'

export const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState('')

  const { searchUser } = useContext(SearchContext)

  function handleSearchForUser(event: FormEvent) {
    event.preventDefault()

    if(inputValue) {
      searchUser(inputValue)
    } else {
      return
    }
  }
  return (
    <Container>
      <Content>
        <a href="https://github.com/GustavoSrr"><FaGithub size="32"/></a>
        <form onSubmit={(event) => handleSearchForUser(event)}>
          <input
            placeholder="Pesquisar"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
      </Content>
    </Container>
  )
}
