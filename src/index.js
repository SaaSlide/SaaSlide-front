import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/app.scss'
import './assets/styles/variable.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import SocketProvider from './utils/socket'

ReactDOM.render(
  <BrowserRouter>
    {/* <SocketProvider room={'room1'} pseudo={'John Doe'}> */}
    <App />
    {/* </SocketProvider> */}
  </BrowserRouter>,
  document.getElementById('root'),
)
