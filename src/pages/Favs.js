import React from 'react'
import { Layout } from '../components/Layout'
import { FavsWithQuery } from '../containers/GetFavorites'

export default () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}
