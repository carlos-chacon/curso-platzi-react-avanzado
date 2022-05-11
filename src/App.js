/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Context } from './Context'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const { isAuth } = useContext(Context)
  console.log(isAuth)
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Routes>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
        <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
        <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <NavBar />
    </div>
  )
}
