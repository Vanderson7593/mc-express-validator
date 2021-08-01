import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles(
  (theme: Theme) => ({
    status: {
      display: 'flex',
      justifyContent: 'center'
    },
    invalid: {
      color: theme.palette.error.dark,
      fontWeight: theme.typography.fontWeightMedium
    },
    valid: {
      color: theme.palette.success.dark,
      fontWeight: theme.typography.fontWeightMedium
    }
  }),
  { index: 1 }
)

export default useStyles
