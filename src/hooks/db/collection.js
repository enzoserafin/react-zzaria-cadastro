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

  const edit = useCallback((id, data) => {
    return db.collection(collection).doc(id).set(data)
  }, [collection, fetchColletionData])

  useEffect(() => {
    fetchColletionData()
  }, [pathname, fetchColletionData])

  return { data, add, remove, edit }
}

export default useCollection
