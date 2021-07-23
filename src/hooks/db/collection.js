import { useEffect, useCallback, useState } from 'react'
import useMounted from '../mounted'
import { useLocation } from 'react-router-dom'
import { db } from '../../services/Firebase'

const useCollection = (collection) => {
  const [data, setData] = useState(null)
  const { pathname } = useLocation()
  const mounted = useMounted()

  const fetchColletionData = useCallback(() => {
    db.collection(collection).get().then(querySnapshot => {
      const docs = []
      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })
      if (mounted.current) {
        setData(docs)
      }
    })
  }, [collection, mounted])

  const add = useCallback((data) => {
    return db.collection(collection).add(data)
  }, [collection])

  const remove = useCallback(async (id) => {
    await db.collection(collection).doc(id).delete()
    fetchColletionData()
  }, [collection, fetchColletionData])

  const removePizzaSize = useCallback(async (id) => {
    const pizzaSizeRef = db.collection('pizzasSizes').doc(id)

    db.runTransaction(async (transaction) => {
      const sizeDoc = await transaction.get(pizzaSizeRef)
      if (!sizeDoc.exists) {
        throw new Error('Esse tamanho não existe')
      }
      transaction.delete(pizzaSizeRef)

      const allFlavours = await db.collection('pizzasFlavours').get()

      allFlavours.forEach(flavour => {
        const { [id]: sizeId, ...value } = flavour.data().value
        const flavourRef = db.collection('pizzasFlavours').doc(flavour.id)
        transaction.update(flavourRef, { value })
      })
    })
      .then(() => {
        console.log('Finalizou transaction com sucesso!')
        fetchColletionData()
      })
      .catch((e) => console.log('deu erro na transaction', e))
  }, [fetchColletionData])

  const edit = useCallback((id, data) => {
    return db.collection(collection).doc(id).set(data)
  }, [collection, fetchColletionData])

  useEffect(() => {
    fetchColletionData()
  }, [pathname, fetchColletionData])

  return { data, add, remove, edit, removePizzaSize }
}

export default useCollection
