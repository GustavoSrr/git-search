import React from 'react'
import ReactDOM from 'react-dom'

import SearchProvider from "./contexts/search";

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
