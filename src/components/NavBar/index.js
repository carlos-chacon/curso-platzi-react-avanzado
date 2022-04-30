import React from 'react'
import { useLocation } from 'react-router-dom'
import { MdHome, MdFavoriteBorder, MdPerson } from 'react-icons/md'
import { Nav, Link } from './styles'

const SIZE = '32px'

export const NavBar = () => {
  const { pathname } = useLocation()
  return (
    <Nav>
      <Link to='/' className={pathname === '/' ? 'selected' : ''}><MdHome size={SIZE} /></Link>
      <Link to='/favs' className={pathname === '/favs' ? 'selected' : ''}><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user' className={pathname === '/user' ? 'selected' : ''}><MdPerson size={SIZE} /></Link>
    </Nav>
  )
}
