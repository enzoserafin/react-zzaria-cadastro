import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { AuthProvider } from './contexts/auth'
import App from './App'
import { GlobalStyle } from './global/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },

  extend: {
    drawerWidth: 280
  }
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default Root
