import { makeStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      fontWeight: theme.typography.fontWeightMedium
    }
  }),
  { index: 1 }
)

export default useStyles
