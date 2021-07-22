import { useEffect, useCallback, useReducer, useRef, useMemo } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { PIZZAS_SIZES } from '../../../../routes'
import { Container, Form } from './styles'
import { Button, Grid, Typography } from '@material-ui/core'
import TextField from '../../../../components/TextField'
import usePizzaSize, { initialState } from '../../../../hooks/pizzaSize'

const FormRegisterSize = () => {
  const { id } = useParams()
  const { pizza, add, edit } = usePizzaSize(id)
  const [pizzaEditable, dispatch] = useReducer(reducer, initialState)
  console.log('pizza para editar:', pizzaEditable)
  const history = useHistory()
  const nameField = useRef()

  const texts = useMemo(() => ({
    title: id ? 'Editar tamanho' : 'Cadastrar novo tamanho',
    button: id ? 'Salvar' : 'Cadastrar'
  }), [id])

  useEffect(() => {
    nameField.current.focus()
  }, [id])

  useEffect(() => {
    dispatch({
      type: 'EDIT',
      payload: pizza
    })
  }, [pizza])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    dispatch({
      type: 'UPDATE_FIELD',
      payload: {
        [name]: value
      }
    })
  }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const { name, size, slices, flavours } = pizzaEditable

    const normalizedData = {
      name,
      size: +size,
      slices: +slices,
      flavours: +flavours
    }
    if (id) {
      await edit(id, normalizedData)
    } else {
      await add(normalizedData)
    }

    history.push(PIZZAS_SIZES)
  }, [add, edit, history, pizzaEditable])

  return (
    <Container >
      <Grid item xs={12}>
        <Typography variant='h4'>
          {texts.title}
        </Typography>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <TextField
          label='Nome para esse tamanho. Ex: Pequena'
          name='name'
          value={pizzaEditable.name}
          onChanged={handleChange}
          inputRef={nameField}
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
              {texts.button}
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

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      ...action.payload
    }
  }
  return state
}

export default FormRegisterSize
