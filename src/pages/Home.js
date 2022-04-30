import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategory } from '../components/ListOfCategory'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'

export const Home = () => {
  const { id } = useParams()
  return (
    <>
      <ListOfCategory />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
