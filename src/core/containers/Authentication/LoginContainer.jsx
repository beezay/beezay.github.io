import Login from 'core/components/Authentication/Login'
import { firebaseAuth } from 'core/firebase/firebase'
import React from 'react'

const LoginContainer = () => {
  console.log('login----', firebaseAuth)
  return (
    <Login />
  )
}

export default LoginContainer