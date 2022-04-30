import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Routes>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
      </Routes>
    </div>
  )
}
