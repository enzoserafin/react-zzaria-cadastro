import { Grid } from '@material-ui/core'
import { Container, GitHubButton, Logo } from './styles'

const Login = () => (
  <Container>
    <Grid container justify='center' spacing={40}>

      <Grid item>
        <Logo />
      </Grid>

      <Grid item xs={12} container justify='center'>
        <GitHubButton>Entrar com GitHub</GitHubButton>
      </Grid>

    </Grid>
  </Container>
)

export default Login