/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Context } from './Context'
import { GlobalStyles } from './styles/GlobalStyles'

const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Home = React.lazy(() => import('./pages/Home'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)
  console.log(isAuth)
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
