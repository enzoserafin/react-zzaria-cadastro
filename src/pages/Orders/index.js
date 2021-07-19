import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core'

const Orders = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>
                Informações do pedido
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>
              <div>
                <Typography variant='button'>
                  Horário do pedido: 10: 20h
                </Typography>
              </div>

              <div>
                <Typography variant='button'>
                  Pedido:
                </Typography>
                <ul>
                  <li>
                    1 pizza MÉDIA de {' '}
                    Frango com Catupiry e Calabresa
                  </li>
                </ul>
              </div>

              <div>
                <Typography variant='button'>
                  Endereço de entrega:
                </Typography>
                <Typography>
                  Rua tal, n 92,{' '}
                  Apto 35<br />
                  Bairro: Maracanã - CEP: 12345-678<br />
                  Curitiba / PR
                </Typography>
              </div>
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Orders
