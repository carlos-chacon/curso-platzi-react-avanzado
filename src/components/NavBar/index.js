import React from 'react'
import { MdHome, MdFavoriteBorder, MdPerson } from 'react-icons/md'
import { Nav, Link } from './styles'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user'><MdPerson size={SIZE} /></Link>
    </Nav>
  )
}
