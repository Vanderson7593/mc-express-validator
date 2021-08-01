import { Typography, Grid, Box } from '@material-ui/core'
import Image from 'next/image'
import { FC } from 'react'
import useStyles from './status.styles'
import { StatusProperties } from './status.types'

const VALID_BILL_IMG = '/valid.png'
const INVALID_BILL_IMG = '/invalid.png'

const Status: FC<StatusProperties> = ({ status }) => {
  const classes = useStyles()

  const renderText = (): string => (status ? ' válido' : ' ínvalido')

  return (
    <div className={classes.status}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Image src={status ? VALID_BILL_IMG : INVALID_BILL_IMG} width={80} height={80} />
        </Grid>
        <Grid item>
          <Typography variant="h6" className={status ? classes.valid : classes.invalid}>
            Comprovativo {renderText()}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Status
