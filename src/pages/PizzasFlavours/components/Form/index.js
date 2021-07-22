import { useEffect, useCallback, /* useReducer, */ useRef, useMemo } from 'react'
import { Link, /* useHistory, */ useParams } from 'react-router-dom'
import { PIZZAS_FLAVOURS } from '../../../../routes'
import { Container, Form } from './styles'
import { Button, Grid, InputLabel, Typography } from '@material-ui/core'
import TextField from '../../../../components/TextField'
// import usePizzaSize, { initialState } from '../../../../hooks/pizzaSize'

const FormRegisterFlavour = () => {
  const { id } = useParams()
  // const { pizza, add, edit } = usePizzaSize(id)
  // const [pizzaEditable, dispatch] = useReducer(reducer, initialState)
  // console.log('pizza para editar:', pizzaEditable)
  // const history = useHistory()
  const nameField = useRef()

  const texts = useMemo(() => ({
    title: id ? 'Editar sabor' : 'Cadastrar novo sabor',
    button: id ? 'Salvar' : 'Cadastrar'
  }), [id])

  useEffect(() => {
    nameField.current.focus()
  }, [id])

  // useEffect(() => {
  //   dispatch({
  //     type: 'EDIT',
  //     payload: pizza
  //   })
  // }, [pizza])

  // const handleChange = useCallback((e) => {
  //   const { name, value } = e.target
  //   dispatch({
  //     type: 'UPDATE_FIELD',
  //     payload: {
  //       [name]: value
  //     }
  //   })
  // }, [])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const { name, image } = e.target.elements

    const normalizedDate = {
      name: name.value,
      image: image.value,
      value: {
        0: 10,
        1: 20,
        2: 30
      }
    }
    console.log(normalizedDate)
  }, [])

  return (
    <Container >
      <Grid item xs={12}>
        <Typography variant='h4'>
          {texts.title}
        </Typography>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <TextField
          label='Nome do sabor'
          name='name'
          // value={pizzaEditable.name}
          // onChanged={handleChange}
          inputRef={nameField}
        />

        <TextField
          label='Link para imagem desse sabor'
          name='image'
          // value={pizzaEditable.name}
          // onChanged={handleChange}
          inputRef={nameField}
        />

        <Grid item xs={12}>
          <InputLabel>Valores (em R$) para cada tamanho:</InputLabel>
        </Grid>

        <TextField
          label='Pequena'
          name='size-0'
          xs={3}
        />

        <TextField
          label='Média'
          name='size-1'
          xs={3}
        />

        <TextField
          label='Grande'
          name='size-2'
          xs={3}
        />

        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              component={Link}
              to={PIZZAS_FLAVOURS}
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

// function reducer(state, action) {
//   if (action.type === 'EDIT') {
//     return action.payload
//   }

//   if (action.type === 'UPDATE_FIELD') {
//     return {
//       ...state,
//       ...action.payload
//     }
//   }
//   return state
// }

export default FormRegisterFlavour
