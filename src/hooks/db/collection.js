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
    console.log('data add new', data)
    return db.collection(collection).add(data)
  }, [collection])

  const remove = useCallback(async (id) => {
    console.log('data remove', id)
    await db.collection(collection).doc(id).delete()
    fetchColletionData()
  }, [collection, fetchColletionData])

  const edit = useCallback(async (size) => {
    console.log('Edit', size)
    // await db.collection(collection).doc(size.id).set({

    // })
    fetchColletionData()
  }, [collection, fetchColletionData])

  useEffect(() => {
    fetchColletionData()
  }, [pathname, fetchColletionData])

  return { data, add, remove, edit }
}

export default useCollection
