import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { PIZZAS_SIZES } from '../../../../routes'
import { Container, Form } from './styles'
import { Button, Grid, Typography } from '@material-ui/core'
import TextField from '../../../../components/TextField'
import useCollection from '../../../../hooks/db/collection'

const FormRegisterSize = () => {
  const { add } = useCollection('pizzasSizes')

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const { name, size, slices, flavours } = e.target.elements

    const normalizedData = {
      name: name.value,
      size: +size.value,
      slices: +slices.value,
      flavours: +flavours.value
    }
    add(normalizedData)
  }, [add])

  return (
    <Container >
      <Grid item xs={12}>
        <Typography variant='h4'>
          Cadastrar novo tamanho
        </Typography>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <TextField
          label='Nome para esse tamanho. Ex: Pequena'
          name='name'
        />

        <TextField
          label='Diâmetro da pizza em cm'
          name='size'
        />
        <TextField
          label='Quantidade de fatias'
          name='slices'
        />
        <TextField
          label='Quantidade de sabores'
          name='flavours'
        />
        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              component={Link}
              to={PIZZAS_SIZES}
            >
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' type='submit'>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Container>
  )
}

export default FormRegisterSize
