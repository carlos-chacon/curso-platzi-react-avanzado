import React from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategory = () => {
  return (
    <List>
      {
        [1, 2].map(category => <Item key={category}> <Category /> </Item>)
      }
    </List>
  )
}
