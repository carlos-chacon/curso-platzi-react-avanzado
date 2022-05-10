import React from 'react'
import { UserForm } from '../components/UserForm'
import { LoginMutation } from '../containers/LoginMutation'
import { RegisterMutation } from '../containers/RegisterMutation'
import Context from '../Context'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
      ({ isAuth, activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario ya existe o hay algún problema'

                  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
                }
              }
            </RegisterMutation>

            <LoginMutation>
              {
                (login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'La contraseña no es correcta o el usuario no existe.'
                  return <UserForm onSubmit={onSubmit} error={errorMsg} disabled={loading} title='Inicial session' />
                }
              }
            </LoginMutation>

          </>
        )
      }
      }
    </Context.Consumer>
  )
}
