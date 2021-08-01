import useStyles from '@components/container/container.styles'
import { Typography, Grid, Box, CircularProgress } from '@material-ui/core'
import Header from './components/header'
import { Input, Status } from '../../components'
import { useState } from 'react'

const Home = () => {
  const classes = useStyles
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div>
      <Header />
      <Box my={4} />
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Typography>
            <Box fontWeight="fontWeightMedium">Número da transação</Box>
          </Typography>
          <Input placeholder="Insira o número da transação" />
        </Grid>
        {loading ? (
          <Grid item>
            <CircularProgress color="primary" />
          </Grid>
        ) : (
          <Grid item>
            <Status status={true} />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default Home
