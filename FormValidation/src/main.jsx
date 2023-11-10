import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <ToastContainer className='toast-font' autoClose={2000} theme="colored"/>
  </BrowserRouter>
)
