import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export default () => {
  const { id } = useParams()
  return (
    <Layout title={`Fotografía ${id}`}>
      <PhotoCardWithQuery id={id} />
    </Layout>
  )
}
