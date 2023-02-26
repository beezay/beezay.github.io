import React from 'react'
import NavbarWrapper from 'core/components/NavbarWrapper'
import LoginContainer from 'core/containers/Authentication/LoginContainer'

const AppContainer = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
    <NavbarWrapper />
    <LoginContainer />
    </div>
  )
}

export default AppContainer
