import {
  TableContainer,
  TableTitle,
  THead,
  Th
} from './styles'
import {
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core'
import useCollection from '../../hooks/db/collection'
import singularOrPlural from '../../utils/singularOrPlural'

const PizzasSizes = () => {
  const pizzasSizes = useCollection('pizzasSizes')

  return (
    <TableContainer>
      <TableTitle>
        Tamanhos cadastrados
      </TableTitle>

      <Table>
        <THead>
          <TableRow>
            <Th>Nome</Th>
            <Th>Diâmetro</Th>
            <Th>Fatias</Th>
            <Th>Sabores</Th>
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
                {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PizzasSizes
