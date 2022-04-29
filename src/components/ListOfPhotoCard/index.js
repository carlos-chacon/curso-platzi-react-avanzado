import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'

const whitPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCard = () => {
  const { loading, error, data } = useQuery(whitPhotos)
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
