import { useMemo } from 'react'
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
import singularOrPlural from '../../utils/singularOrPlural'
import ordenator from '../../utils/ordenator'

const Orders = () => {
  const { orders, status } = useOrders()

  console.log('orders:', orders)

  const allOrderStatus = useMemo(() => {
    return [
      {
        title: 'Pedidos pendentes',
        type: status.pending
      },
      {
        title: 'Pedidos em produção',
        type: status.inProgress
      },
      {
        title: 'Saiu para entrega',
        type: status.outForDelivery
      },
      {
        title: 'Pedidos finalizados',
        type: status.delivered
      }
    ]
  }, [status])

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
          {orders?.[orderStatus.type].map(order => {
            const {
              address,
              number,
              complement,
              district,
              code: cep,
              city,
              state
            } = order.address

            return (
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
                      {order.pizzas.map((pizza, index) => (
                        <li key={index}>
                          <Typography>
                            {pizza.quantity} {' '}
                            {singularOrPlural(
                              pizza.quantity, 'pizza', 'pizzas'
                            )} {' '}
                            {pizza.size.name.toUpperCase()} de {' '}
                            {ordenator(pizza.flavours
                              .map(flavour => flavour.name)
                            )
                            }
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Subtitle>
                      Endereço de entrega:
                    </Subtitle>
                    <Typography>
                      {address}, {number && number},{' '} { }
                      {complement && complement}<br />
                      Bairro: {district} - CEP: {cep}<br />
                      {city} / {state}
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}

        </TableBody>
      </Table>
    </TableContainer>
  ))
}

export default Orders
