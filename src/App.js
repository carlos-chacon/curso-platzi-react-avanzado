import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <ListOfCategory />
    <ListOfPhotoCard />
  </div>
)
