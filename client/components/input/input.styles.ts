import { makeStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'

const useStyles = makeStyles(
  (theme: Theme) => ({
    textField: {
      backgroundColor: theme.palette.grey[200],
      borderRadius: 4,
      padding: 1,
      paddingLeft: 10,
      paddingRight: 10,
      width: 340
    }
  }),
  { index: 1 }
)

export default useStyles
