import { Route } from 'react-router-dom'
import TablePizzasSizes from './components/Table'
import FormRegisterSize from './components/Form'
import { PIZZAS_SIZES, NEW } from '../../routes'

const PizzasSizes = () => {
  return (
    <>
      <Route path={`${PIZZAS_SIZES}${NEW}`}>
        <FormRegisterSize />
      </Route>
      <TablePizzasSizes />
    </>
  )
}

export default PizzasSizes
