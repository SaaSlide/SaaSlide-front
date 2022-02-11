import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './hooks'

ReactDOM.render(
  <BrowserRouter>
    <SocketProvider>
      <App />
    </SocketProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
