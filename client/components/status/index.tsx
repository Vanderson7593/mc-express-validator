import { Typography, Grid, Box } from '@material-ui/core'
import { IInvoice } from '@types'
import useAsyncState from 'client/hooks/use-async-state'
import Image from 'next/image'
import { FC } from 'react'
import useStyles from './status.styles'
import { StatusProperties } from './status.types'

const VALID_BILL_IMG = '/valid.png'
const INVALID_BILL_IMG = '/invalid.png'
const ERROR_BILL_IMG = '/error.png'

const Status: FC<StatusProperties> = ({ data, error, success }) => {
  const classes = useStyles()

  const renderText = (): string => {
    if (success && data) return ' válido'
    if (success && !data) return ' ínvalido'
    if (error) return 'Não foi possível validar o seu comprovativo'
    return ''
  }

  const imagePath = (): string => {
    if (success && data) return VALID_BILL_IMG
    if (success && !data) return INVALID_BILL_IMG
    if (error) return ERROR_BILL_IMG
    return '/'
  }

  return (
    <div className={classes.status}>
      <Grid container direction="column" alignItems="center">
        <Grid item>{(success || error) && <Image src={imagePath()} width={50} height={50} />}</Grid>
        <Grid item>
          <Typography className={error || !data ? classes.invalid : classes.valid}>
            {success && 'Comprovativo'} {renderText()}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Status
