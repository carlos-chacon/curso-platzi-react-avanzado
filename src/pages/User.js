import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../Context'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Usuario' subtitle='Datos del usuario'>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Layout>
  )
}
