import { useContext } from "react"
import { SearchContext } from "./contexts/search"

import { GlobalStyle } from "./styles/global"

import { Header } from "./components/Header"
import { SearchBox } from "./components/SearchBox"
import { UserInfo } from "./components/UserInfo"

function App() {
  const { user } = useContext(SearchContext)

  return (
    <div className="App">
      <GlobalStyle />
      {user ? <><Header /> <UserInfo /></> : <SearchBox />}
    </div>
  )
}

export default App
