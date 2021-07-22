import { Route } from 'react-router-dom'
import TablePizzasFlavours from './components/Table'
import FormRegisterFlavours from './components/Form'
import { PIZZAS_FLAVOURS, NEW, EDIT } from '../../routes'

const newFlavourPath = `${PIZZAS_FLAVOURS}${NEW}`
const editFlavourPath = `${PIZZAS_FLAVOURS}${EDIT()}`

const PizzasFlavours = () => {
  return (
    <>
      <Route path={[newFlavourPath, editFlavourPath]}>
        <FormRegisterFlavours />
      </Route>
      <TablePizzasFlavours />
    </>
  )
}

export default PizzasFlavours
