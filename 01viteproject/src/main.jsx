import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

const cold = ReactDOM.createRoot(document.getElementById('con'))
cold.render(
  <>
  <Chai/>
    <App />
    </>
)
