import { Grid, Typography, Box } from '@material-ui/core'
import Image from 'next/image'
import { FC } from 'react'

const Header: FC = () => (
  <>
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Image src="/mcx-logo.png" width={200} height={98} />
      </Grid>
      <Grid item>
        <Typography variant="h5" color="primary">
          <Box fontWeight="fontWeightMedium">Validar comprovativo digital</Box>
        </Typography>
      </Grid>
    </Grid>
  </>
)

export default Header
