import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { actionDispatch } from 'core/hooks/useActionDispatch'
import { useEffect } from 'react'
import { fetchWeatherAPIData } from 'slices/WeatherAPISlice/weatherAPISlice'

const WeatherInfoContainer = () => {

  useEffect(()=>{
    actionDispatch(fetchWeatherAPIData())
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