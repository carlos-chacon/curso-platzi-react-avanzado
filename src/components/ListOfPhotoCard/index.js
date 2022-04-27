import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => {
  return (
    [1, 2, 3, 4, 5].map(id => <PhotoCard key={id} />)
  )
}
