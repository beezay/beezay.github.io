import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherAPIData } from '../../slices/WeatherAPISlice/weatherAPISlice'

const WeatherInfoContainer = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchWeatherAPIData())
  },[])

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
          <Button variant='outlined'>Kathmandu</Button>
          </Grid>
          <Grid item>
        <Typography>Time</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default WeatherInfoContainer