import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { ListOfCategory } from '../components/ListOfCategory'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'

const HomePage = () => {
  const { id } = useParams()
  return (
    <Layout title='Fotos de mascotas' subtitle='Con petgram puede encontrar fotos de animales domésticos muy bonitos'>
      <ListOfCategory />
      <ListOfPhotoCard categoryId={id} />
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  console.log(prevProps, props)
  return prevProps.id === props.id
})
