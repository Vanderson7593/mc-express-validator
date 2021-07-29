import { blue, lightBlue, grey } from '@material-ui/core/colors'
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
    type: 'light',
    background: {
      default: grey[200],
      paper: grey[50]
    },
    primary: {
      light: lightBlue[600],
      main: blue[700],
      dark: blue[900]
    },
    text: {
      primary: grey[800],
      secondary: grey[50]
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Open Sans', '-apple-system'].join(',')
  }
})

theme = responsiveFontSizes(theme)

export default theme
