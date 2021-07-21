import { useEffect, useState } from 'react'
import useCollection from './db/collection'

export const initialState = {
  name: '',
  size: '',
  slices: '',
  flavours: ''
}

function usePizzaSize(id) {
  const { data, add, edit } = useCollection('pizzasSizes')
  const [pizza, setPizza] = useState(initialState)

  useEffect(() => {
    setPizza(data?.find(p => p.id === id) || initialState)
  }, [data, id])
  return { pizza, add, edit }
}

export default usePizzaSize
