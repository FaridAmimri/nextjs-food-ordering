/** @format */

import Image from 'next/image'
import styles from '../styles/Cart.module.css'
import { Card, Button } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  console.log(cart)

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
              {cart.total}
            </div>
            <div className={styles.cardContent}>
              <b>Discount:</b>
              0.00 €
            </div>
            <div className={styles.cardContent}>
              <b>Total:</b>
              {cart.total}
            </div>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <div className={styles.button}>
              <Button color='warning' auto>
                CHECKOUT NOW !
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default Cart
