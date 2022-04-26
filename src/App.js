import React from 'react'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { GlobalStyles } from './GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyles />
    <ListOfCategory />
    <ListOfPhotoCard />
  </div>
)
