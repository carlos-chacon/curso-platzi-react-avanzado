import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhotoWithQuery } from '../hooks/useGetPhotoWithQuery'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id)

  if (error) return <h1>Error Internal Error</h1>
  if (loading) return <h1>Loading ...</h1>

  return (
    <>
      <a href='/'>Back</a>
      <PhotoCard {...data.photo} />
    </>
  )
}
