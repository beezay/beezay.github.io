import React from 'react'
import {useScrollTrigger, Slide} from '@mui/material'

const HideOnScroll = (props) => {

  const {children, window} = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <React.Fragment>
      <Slide appear={false} direction='down' in={!trigger}>
{children}
      </Slide>
    </React.Fragment>
  )
}

export default HideOnScroll