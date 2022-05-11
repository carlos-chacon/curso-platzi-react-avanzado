import React, { useContext } from 'react'
import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <div>User</div>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
