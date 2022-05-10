import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavoritesWithQuery } from '../hooks/useGetFavoritesWithQuery'

export const FavsWithQuery = () => {
  const { loading, error, data } = useGetFavoritesWithQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error !</p>

  const { favs } = data
  console.log(favs)
  return <ListOfFavs favs={favs} />
}
