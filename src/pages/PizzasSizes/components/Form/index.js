import { Container } from './styles'
import { Button, Grid, Typography } from '@material-ui/core'
import TextField from '../../../../components/TextField'

const FormRegisterSize = () => {
  return (
    <Container >
      <Grid item xs={12}>
        <Typography variant='h4'>
          Cadastrar novo tamanho
        </Typography>
      </Grid>

      <Grid item container xs={12} spacing={2} component='form'>
        <TextField
          label='Nome para esse tamanho. Ex: Pequena'
        />

        <TextField
          label='Diâmetro da pizza em cm'
        />
        <TextField
          label='Quantidade de fatias'
        />
        <TextField
          label='Quantidade de sabores'
        />
        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button variant='contained'>
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' type='submit'>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FormRegisterSize
