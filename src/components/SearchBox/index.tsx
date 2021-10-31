import React, { FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../../contexts/search';

import { FaGithub } from 'react-icons/fa';

import { Container, GitHub } from './styles';

export const SearchBox: React.FC = () => {
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
      <GitHub href="https://github.com/GustavoSrr">
        <FaGithub size="32"/>
      </GitHub>
      <form onSubmit={(event) => handleSearchForUser(event)}>
        <input
          name="SearchInput"
          placeholder="Pesquisar"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  )
}
