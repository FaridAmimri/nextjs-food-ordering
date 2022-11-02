/** @format */

import Image from 'next/image'
import styles from '../styles/Cart.module.css'
import { Card, Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from '@paypal/react-paypal-js'
import { useRouter } from 'next/router'
import { reset } from '../redux/cartSlice'
import axios from 'axios'
import CashModal from '../components/CashModal'

function Cart() {
  const dispatch = useDispatch()
  const router = useRouter()

  const cart = useSelector((state) => state.cart)
  const [payment, setPayment] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const amount = cart.total
  const currency = 'EUR'
  const style = { layout: 'vertical' }

  const createOrder = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data)
      res.status === 201 && router.push(`/orders/${res.data._id}`)
      dispatch(reset())
    } catch (error) {
      console.log(error)
    }
  }

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency
        }
      })
    }, [currency, showSpinner])

    return (
      <>
        {showSpinner && isPending && <div className='spinner' />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount
                    }
                  }
                ]
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId
              })
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1
              })
            })
          }}
        />
      </>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody className={styles.tableBody}>
            <tr className={styles.tableRowTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {cart.products.map((product) => (
              <tr className={styles.tableRowData} key={product._id}>
                <td className={styles.tableData}>
                  <div className={styles.imgContainer}>
                    <Image src={product.image} layout='fill' alt='' />
                  </div>
                </td>
                <td className={styles.tableData}>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td className={styles.tableData}>
                  {product.extras.map((extra) => (
                    <span className={styles.extras} key={extra._id}>
                      {extra.text},
                    </span>
                  ))}
                </td>
                <td className={styles.tableData}>
                  <span className={styles.price}>{product.price} €</span>
                </td>
                <td className={styles.tableData}>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td className={styles.tableData}>
                  <span className={styles.total}>
                    {product.price * product.quantity} €
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <Card css={{ mw: '100%' }}>
          <Card.Header>
            <h1 className={styles.cardHeader}> CART TOTAL</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <div className={styles.cardContent}>
              <b>Subtotal:</b>
              {cart.total} €
            </div>
            <div className={styles.cardContent}>
              <b>Discount:</b>
              0.00 €
            </div>
            <div className={styles.cardContent}>
              <b>Total:</b>
              {cart.total} €
            </div>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            {payment ? (
              <div className={styles.paymentMethod}>
                <div className={styles.cashMethod}>
                  <Button onPress={() => setModalVisible(true)}>
                    CASH ON DELIVERY
                  </Button>
                </div>

                <div className={styles.paypalMethod}>
                  <PayPalScriptProvider
                    options={{
                      'client-id':
                        'AVHFUb2h3RxT5VjXT1CZHDkfX-0AbI75MiRjPgAe3fnzX655H_81wZ4_1WmbcEI_4GeoShQGo0_OA4qx',
                      components: 'buttons',
                      currency: 'EUR',
                      'disable-funding': 'credit,card,p24'
                    }}
                  >
                    <ButtonWrapper currency={currency} showSpinner={false} />
                  </PayPalScriptProvider>
                </div>
              </div>
            ) : (
              <div className={styles.button}>
                <Button color='warning' auto onPress={() => setPayment(true)}>
                  CHECKOUT NOW !
                </Button>
              </div>
            )}
          </Card.Footer>
        </Card>
      </div>
      <CashModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        total={cart.total}
        createOrder={createOrder}
      />
    </div>
  )
}

export default Cart
