import { GlobalStyle } from "./styles/global"

import { Header } from "./components/Header"
import { UserInfo } from "./components/UserInfo"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <UserInfo />
    </div>
  )
}

export default App
