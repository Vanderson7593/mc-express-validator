import { Grid, Typography, Box } from '@material-ui/core'
import useStyles from './header.styles'
import Image from 'next/image'

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Image src="/mcx-logo.png" width={236} height={120} />
        </Grid>
        <Grid item>
          <Typography variant="h5" color="primary">
            <Box fontWeight="fontWeightMedium">Validar comprovativo digital</Box>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Header
