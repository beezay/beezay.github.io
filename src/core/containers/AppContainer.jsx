import React from 'react'
import NavbarWrapper from 'core/components/NavbarWrapper'
import Login from 'core/components/Authentication/Login'

const AppContainer = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
    <NavbarWrapper />
    <Login />
    </div>
  )
}

export default AppContainer
