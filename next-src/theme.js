import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00AB55'
    },
    secondary: {
      main: '#9A7D0F'
    },
    error: {
      main: '#F25C45'
    },
    success: {
      main: '#007F4F'
    },
    gray: {
      main: '#949494'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          boxShadow: 'none',
          textTransform: 'none'
        }
      }
    }
  }
})

export default theme
