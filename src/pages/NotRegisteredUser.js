import React from 'react'
import { UserForm } from '../components/UserForm'
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

            <UserForm onSubmit={activateAuth} title='Inicial session' />
          </>
        )
      }
      }
    </Context.Consumer>
  )
}
