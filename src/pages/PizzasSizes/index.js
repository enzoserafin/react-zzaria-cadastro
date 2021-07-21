import { Route } from 'react-router-dom'
import TablePizzasSizes from './components/Table'
import FormRegisterSize from './components/Form'
import { PIZZAS_SIZES, NEW, EDIT } from '../../routes'

const newSizePath = `${PIZZAS_SIZES}${NEW}`
const editSizePath = `${PIZZAS_SIZES}${EDIT()}`

const PizzasSizes = () => {
  return (
    <>
      <Route path={[newSizePath, editSizePath]}>
        <FormRegisterSize />
      </Route>
      <TablePizzasSizes />
    </>
  )
}

export default PizzasSizes
