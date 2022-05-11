import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { UserForm } from '../components/UserForm'
import { LoginMutation } from '../containers/LoginMutation'
import { RegisterMutation } from '../containers/RegisterMutation'
import { Context } from '../Context'

export default () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Ingresa o Regístrate'>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title='Registrarse'
            />
          )
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMsg =
            error && 'La contraseña no es correcta o el usuario no existe.'
          return (
            <UserForm
              onSubmit={onSubmit}
              error={errorMsg}
              disabled={loading}
              title='Inicial session'
            />
          )
        }}
      </LoginMutation>
    </Layout>
  )
}
