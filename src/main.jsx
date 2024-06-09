import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Store from './Component/E-Comm/Store.js'
import { Provider } from 'react-redux'
import mystore from './Component/Store/MainStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
