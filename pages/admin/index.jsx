/** @format */

import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { FaSignOutAlt } from 'react-icons/fa'
import styles from '../../styles/Admin.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AddProduct from '../../components/AddProduct'

function Index({ productsList, ordersList }) {
  const [products, setProducts] = useState(productsList)
  const [orders, setOrders] = useState(ordersList)
  const status = ['preparing', 'on the way', 'delivered']
  const router = useRouter()

  const handleLogOut = async () => {
    await axios.post(
      'https://nextjs-food-ordering-seven.vercel.app/api/auth/logout'
    )
    router.push('/admin/login')
  }

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://nextjs-food-ordering-seven.vercel.app/products/${id}`
      )
      setProducts(products.filter((product) => product._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleStatus = async (id) => {
    const orderToUpdate = orders.filter((order) => order._id === id)[0]
    const currentStatus = orderToUpdate.status

    try {
      const res = await axios.put(
        `https://nextjs-food-ordering-seven.vercel.app/api/orders/${id}`,
        {
          status: currentStatus + 1
        }
      )
      setOrders([res.data, ...orders.filter((order) => order._id !== id)])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.addButton}>
          <AddProduct />
        </div>
        <div className={styles.logoutButton}>
          <Button
            color='error'
            auto
            iconRight={<FaSignOutAlt />}
            onPress={handleLogOut}
          >
            Log out
          </Button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Products</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            {products.map((product) => (
              <tbody key={product._id}>
                <tr className={styles.trData}>
                  <td>
                    <Image
                      src={product.image}
                      alt=''
                      width={50}
                      height={50}
                      objectFit='cover'
                    ></Image>
                  </td>
                  <td>{product._id.slice(0, 5)}...</td>
                  <td>{product.title}</td>
                  <td>{product.prices[0]}</td>
                  <td className={styles.buttonContainer}>
                    <Button
                      auto
                      bordered
                      size='xs'
                      color='secondary'
                      // onPress={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Orders</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tbody>
            {orders.map((order) => (
              <tbody key={order._id}>
                <tr className={styles.trData}>
                  <td>{order._id.slice(0, 5)}...</td>
                  <td>{order.customer}</td>
                  <td>{order.total} €</td>
                  <td>
                    {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                  </td>
                  <td>{status[order.status]}</td>
                  <td>
                    <Button
                      auto
                      bordered
                      size='xs'
                      color='success'
                      onPress={() => handleStatus(order._id)}
                    >
                      Next Stage
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req?.cookies || ''

  if (cookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false
      }
    }
  }

  const productsRes = await axios.get(
    'https://nextjs-food-ordering-seven.vercel.app/api/products'
  )
  const ordersRes = await axios.get(
    'https://nextjs-food-ordering-seven.vercel.app/api/orders'
  )

  return {
    props: {
      productsList: productsRes.data,
      ordersList: ordersRes.data
    }
  }
}

export default Index
