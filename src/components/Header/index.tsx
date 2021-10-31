import React, { FormEvent, useContext, useState } from 'react'

import { FaGithub } from 'react-icons/fa'
// import { VscInfo } from 'react-icons/vsc'
import { SearchContext } from '../../contexts/search'

import { Container, Left, Right } from './styles'

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
        <Left>
          <FaGithub size="32" />
          <form onSubmit={(event) => handleSearchForUser(event)}>
            <input
              placeholder="Pesquisar"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </form>
        </Left>
        {/* <Right>
          <VscInfo size="32" />
        </Right> */}
    </Container>
  )
}
