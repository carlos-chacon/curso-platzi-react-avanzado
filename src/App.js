import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  const renderProp = detailId
    ? <PhotoCardWithQuery id={detailId} />
    : (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
      </Routes>
      )
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {renderProp}
    </div>
  )
}
