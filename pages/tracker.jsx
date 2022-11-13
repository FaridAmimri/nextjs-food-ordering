/** @format */

import { Button, Input, Loading } from '@nextui-org/react'
import { FaHandPaper } from 'react-icons/fa'
import axios from 'axios'
import { useState } from 'react'
import styles from '../styles/Tracker.module.css'
useState

function Tracker({ orderList }) {
  const [fullName, setFullName] = useState('')
  const [orderTrack, setOrderTrack] = useState({})
  const [statusVisible, setStatusVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const status = ['being prepared', 'on the way', 'delivered']

  const handleTracker = async () => {
    setLoading(true)
    const order = await orderList.find(
      (order) => order.customer.toLowerCase() === fullName.toLowerCase()
    )
    if (order === undefined) {
      setError(true)
      setStatusVisible(false)
      setLoading(false)
    } else {
      setOrderTrack(order)
      setStatusVisible(true)
      setError(false)
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Mama ! Where is my Pizza ? <br /> Enter your full name to track it !
        </h1>
        <form className={styles.form}>
          <div className={styles.input}>
            <Input
              type='text'
              width='300px'
              name='fullname'
              clearable
              color='warning'
              underlined
              placeholder='Full name'
              aria-labelledby='Full name'
              id='full name'
              onChange={(e) => setFullName(e.target.value)}
            ></Input>
            {error && (
              <span className={styles.error}>
                There is no order with this name !
              </span>
            )}
          </div>
          <Button
            size='md'
            aria-labelledby='order tracker'
            color='warning'
            onPress={handleTracker}
          >
            Track my order
          </Button>
        </form>
        {statusVisible && (
          <span className={styles.status}>
            Hey <FaHandPaper /> {orderTrack.customer}, your Pizza is{' '}
            {status[orderTrack.status]} !
          </span>
        )}
      </div>
      {loading && <Loading color='warning' type='gradient' size='lg' />}
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    'https://nextjs-food-ordering-seven.vercel.app/api/orders'
  )
  return {
    props: {
      orderList: res.data
    }
  }
}

export default Tracker
