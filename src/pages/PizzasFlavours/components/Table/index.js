import { Link, useRouteMatch } from 'react-router-dom'
import t from 'prop-types'
import { PIZZAS_FLAVOURS, NEW, EDIT } from '../../../../routes'
import {
  Button,
  TableContainer,
  TableTitle,
  TitleContainer,
  THead,
  Th
} from './styles'
import {
  Grid,
  List,
  ListItem as MaterialListItem,
  ListItemText,
  Table,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core'
import { Add, Edit, Delete } from '@material-ui/icons'
import useCollection from '../../../../hooks/db/collection'
import getPizzasImg from '../../../../utils/getPizzasImg'
// import singularOrPlural from '../../../../utils/singularOrPlural'

const TablePizzasFlavours = () => {
  const { data: pizzasFlavours, remove } = useCollection('pizzasFlavours')
  const newFlavourPath = useRouteMatch(`${PIZZAS_FLAVOURS}${NEW}`)
  console.log(pizzasFlavours)

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

      <Table>
        <THead>
          <TableRow>
            <Th>Foto</Th>
            <Th>Nome</Th>
            <Th>Valores</Th>
            <Th />
          </TableRow>
        </THead>
        <TableBody>
          {pizzasFlavours?.map(pizza => (
            <TableRow key={pizza.id}>
              <TableCell>
                <img
                  src={getPizzasImg(pizza.image)}
                  alt={pizza.name}
                  width='50'
                />
              </TableCell>

              <TableCell>{pizza.name}</TableCell>
              <TableCell>
                <List>
                  <ListItem name='Broto' value={10} />
                  <ListItem name='Pequena' value={20} />
                  <ListItem name='Grande' value={30} />
                </List>
              </TableCell>

              <TableCell align='right'>
                <Button
                  startIcon={<Edit />}
                  component={Link}
                  to={PIZZAS_FLAVOURS + EDIT(pizza.id)}
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
      </Table>
    </TableContainer>
  )
}

const ListItem = ({ name, value }) => (
  <MaterialListItem>
    <ListItemText>
      <strong>{name}</strong>: R$ {value}
    </ListItemText>
  </MaterialListItem>
)

ListItem.propTypes = {
  name: t.string.isRequired,
  value: t.number.isRequired
}

export default TablePizzasFlavours
