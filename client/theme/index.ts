import { orange, lightBlue, grey, blueGrey } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  props: {
    MuiLink: {
      underline: 'none',
      target: '_blank',
      color: 'inherit'
    }
  },
  palette: {
    background: {
      default: grey[200],
      paper: grey[50]
    },
    primary: {
      main: orange[700]
    },
    text: {
      primary: blueGrey[400],
      secondary: orange[700]
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Open Sans', '-apple-system'].join(',')
  }
})

theme = responsiveFontSizes(theme)

export default theme
