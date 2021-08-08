import { orange, grey, blueGrey } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

let theme = createMuiTheme({
  props: {
    MuiLink: {
      underline: 'none',
      target: '_blank',
      color: 'inherit'
    },
    MuiInputBase: {
      autoFocus: true
    }
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: grey[200],
        borderRadius: 4,
        padding: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%'
      }
    },
    MuiIconButton: {
      root: {
        borderRadius: 4,
        height: 35
      }
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
