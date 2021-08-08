import { FieldProps } from '@types'
import { FC } from 'react'
import useStyles from './field.styles'
import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { capitalizeFirstLetter } from 'client/utils/strings'

const Field: FC<FieldProps> = ({ label, value }) => {
  const classes = useStyles()

  return (
    <Box>
      <Typography className={classes.root}>{label}</Typography>
      <Typography className={classes.root}>{value}</Typography>
    </Box>
  )
}

export default Field
