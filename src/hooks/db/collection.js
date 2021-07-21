import { useEffect, useCallback, useState } from 'react'
import useMounted from '../mounted'
import { useLocation } from 'react-router-dom'
import { db } from '../../services/Firebase'

const useCollection = (collection) => {
  const [data, setData] = useState(null)
  const { pathname } = useLocation()
  const mounted = useMounted()

  const add = useCallback((data) => {
    console.log('data add new', data)
    return db.collection(collection).add(data)
  }, [collection])

  useEffect(() => {
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
  }, [collection, pathname, mounted])

  return { data, add }
}

export default useCollection
