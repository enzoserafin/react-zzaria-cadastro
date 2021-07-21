import { useEffect, useCallback, useReducer } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { PIZZAS_SIZES } from '../../../../routes'
import { Container, Form } from './styles'
import { Button, Grid, Typography } from '@material-ui/core'
import TextField from '../../../../components/TextField'
import usePizzaSize, { initialState } from '../../../../hooks/pizzaSize'

const FormRegisterSize = () => {
  const { id } = useParams()
  const { pizza, add } = usePizzaSize(id)
  const [pizzaEditable, dispatch] = useReducer(reducer, initialState)
  console.log('pizza para editar:', pizzaEditable)
  const history = useHistory()

  useEffect(() => {
    dispatch({
      type: 'EDIT',
      payload: pizza
    })
  }, [pizza])

  const handleChange = useCallback((e) => {
    console.log(e)
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const { name, size, slices, flavours } = e.target.elements

    const normalizedData = {
      name: name.value,
      size: +size.value,
      slices: +slices.value,
      flavours: +flavours.value
    }
    await add(normalizedData)
    history.push(PIZZAS_SIZES)
  }, [add, history])

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
          value={pizzaEditable.name}
          onChanged={handleChange}
        />

        <TextField
          label='Diâmetro da pizza em cm'
          name='size'
          value={pizzaEditable.size}
          onChanged={handleChange}
        />
        <TextField
          label='Quantidade de fatias'
          name='slices'
          value={pizzaEditable.slices}
          onChanged={handleChange}
        />
        <TextField
          label='Quantidade de sabores'
          name='flavours'
          value={pizzaEditable.flavours}
          onChanged={handleChange}
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

function reducer(state, action) {
  if (action.type === 'EDIT') {
    return action.payload
  }
  return state
}

export default FormRegisterSize
