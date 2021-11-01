import { useContext } from "react"
import { SearchContext } from "./contexts/search"
import Helmet from 'react-helmet'

import { GlobalStyle } from "./styles/global"

import { Header } from "./components/Header"
import { SearchBox } from "./components/SearchBox"
import { UserInfo } from "./components/UserInfo"

function App() {
  const { user } = useContext(SearchContext)

  return (
    <div className="App">
      <Helmet>
        <title>{user?.login || "Git Search"}</title>
      </Helmet>
      <GlobalStyle />
      {user ? <><Header /> <UserInfo /></> : <SearchBox />}
    </div>
  )
}

export default App
