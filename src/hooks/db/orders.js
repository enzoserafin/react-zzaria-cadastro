import { useEffect, useState, useMemo, useCallback } from 'react'
import { db } from '../../services/Firebase'

const useOrders = () => {
  const [orders, setOrders] = useState(null)

  const status = useMemo(() => ({
    pending: 'pending',
    inProgress: 'inProgress',
    outForDelivery: 'outForDelivery',
    delivered: 'delivered'
  }), [])

  const updateOrder = useCallback(({ orderId, status }) => {
    console.log('orderId: ', orderId)
    console.log('status: ', status)
  }, [])

  useEffect(() => {
    db.collection('orders').get().then(querySnapshot => {
      const docs = []

      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })

      const initialStatus = Object.keys(status).reduce((acc, status) => {
        return {
          ...acc,
          [status]: []
        }
      }, {})

      setOrders(docs.reduce((acc, doc) => {
        const mainStatus = doc.status || status.pending

        return {
          ...acc,
          [mainStatus]: acc[mainStatus].concat(doc)

        }
      }, initialStatus)
      )
    })
  }, [status])

  return { orders, status, updateOrder }
}

export default useOrders
