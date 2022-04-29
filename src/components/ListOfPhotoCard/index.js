import React from 'react'
import { useQuery } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import { whitPhotos } from '../../hoc/whitPhotos'

export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data } = useQuery(whitPhotos, { variables: { categoryId } })
  if (error) return <h2>Internal Server Error</h2>
  if (loading) return <h2>loading ...</h2>
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
