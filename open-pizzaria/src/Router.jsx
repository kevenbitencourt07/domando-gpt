import React from 'react'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Cardápio from './Pages/Cardápio'
import Menu from './Components/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/sobre" element={<Sobre />}  />
            <Route path="/cardapio" element={<Cardápio />}  />
        </Routes>
    </BrowserRouter>
  )
}
