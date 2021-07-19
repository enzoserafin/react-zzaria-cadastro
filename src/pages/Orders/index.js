import {
  Subtitle,
  TableContainer,
  TableTitle,
  THead,
  Th
} from './styles'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core'

import useOrders from '../../hooks/db/orders.js'
import getHour from '../../utils/getHour'

const allOrderStatus = [
  {
    title: 'Pedidos pendentes'
  },
  {
    title: 'Pedidos em produção'
  },
  {
    title: 'Saiu para entrega'
  },
  {
    title: 'Pedidos finalizados'
  }
]

const Orders = () => {
  const { orders } = useOrders()

  console.log('orders:', orders)

  return allOrderStatus.map(orderStatus => (
    <TableContainer key={orderStatus.title}>
      <TableTitle>
        {orderStatus.title}
      </TableTitle>
      <Table>
        <THead>
          <TableRow>
            <Th>
              <Typography>
                Informações do pedido
              </Typography>
            </Th>
          </TableRow>
        </THead>

        <TableBody>
          {orders?.map(order => (
            <TableRow key={order.id}>
              <TableCell>
                <div>
                  <Subtitle>
                    Horário do pedido: {getHour(order.createdAt.toDate())}
                  </Subtitle>
                </div>

                <div>
                  <Subtitle>
                    Pedido:
                  </Subtitle>
                  <ul>
                    <li>
                      1 pizza MÉDIA de {' '}
                      Frango com Catupiry e Calabresa
                    </li>
                  </ul>
                </div>

                <div>
                  <Subtitle>
                    Endereço de entrega:
                  </Subtitle>
                  <Typography>
                    Rua tal, n 92,{' '}
                    Apto 35<br />
                    Bairro: Maracanã - CEP: 12345-678<br />
                    Curitiba / PR
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  ))
}

export default Orders
