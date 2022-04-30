/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import Context from './Context'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { Home } from './pages/Home'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
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
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Routes>
                <Route path='/favs' element={<Favs />} />
                <Route path='/user' element={<User />} />
              </Routes>
              : <Routes>
                <Route path='/favs' element={<NotRegisteredUser />} />
                <Route path='/user' element={<NotRegisteredUser />} />
              </Routes>
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
