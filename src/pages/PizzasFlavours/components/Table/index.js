import { Link, useRouteMatch } from 'react-router-dom'
import {
  PIZZAS_FLAVOURS, NEW
  // , EDIT
} from '../../../../routes'
import {
  Button,
  TableContainer,
  TableTitle,
  TitleContainer
  // THead,
  // Th
} from './styles'
import {
  Grid
  // Table,
  // TableBody,
  // TableRow,
  // TableCell
} from '@material-ui/core'
import {
  Add
  // , Edit, Delete
} from '@material-ui/icons'
// import useCollection from '../../../../hooks/db/collection'
// import singularOrPlural from '../../../../utils/singularOrPlural'

const TablePizzasFlavours = () => {
  // const { data: pizzasSizes, remove } = useCollection('pizzasSizes')
  const newFlavourPath = useRouteMatch(`${PIZZAS_FLAVOURS}${NEW}`)

  return (
    <TableContainer>
      <TitleContainer>
        <Grid item>
          <TableTitle>
            Sabores cadastrados
          </TableTitle>
        </Grid>
        <Grid item>
          <Button
            color='primary'
            startIcon={<Add />}
            component={Link}
            to={`${PIZZAS_FLAVOURS}${NEW}`}
            disabled={!!newFlavourPath}
          >
            Adicionar novo sabor
          </Button>
        </Grid>
      </TitleContainer>

      {/* <Table>
        <THead>
          <TableRow>
            <Th>Nome</Th>
            <Th>Diâmetro</Th>
            <Th>Fatias</Th>
            <Th>Sabores</Th>
            <Th />
          </TableRow>
        </THead>
        <TableBody>
          {pizzasSizes?.map(pizza => (
            <TableRow key={pizza.id}>
              <TableCell>{pizza.name}</TableCell>
              <TableCell>{pizza.size} cm</TableCell>
              <TableCell>{pizza.slices} fatias</TableCell>
              <TableCell>
                {pizza.flavours} {' '}
                {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
              </TableCell>

              <TableCell align='right'>
                <Button
                  startIcon={<Edit />}
                  component={Link}
                  to={PIZZAS_SIZES + EDIT(pizza.id)}
                >
                  Editar
                </Button>

                <Button
                  color='secondary'
                  startIcon={<Delete />}
                  onClick={() => remove(pizza.id)}
                >
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </TableContainer>
  )
}

export default TablePizzasFlavours
