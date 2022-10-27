/** @format */

import Image from 'next/image'
import styles from '../styles/Cart.module.css'
import { Card, Button } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'

function cart() {
  // const dispatch = useDispatch()
  // const cart = useSelector((state) => state.cart)

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
            <tr className={styles.tableRowData}>
              <td className={styles.tableData}>
                <div className={styles.imgContainer}>
                  <Image src='/assets/pizza.png' layout='fill' alt='' />
                </div>
              </td>
              <td className={styles.tableData}>
                <span className={styles.name}>Margherita</span>
              </td>
              <td className={styles.tableData}>
                <span className={styles.extras}>Spicy sauce</span>
              </td>
              <td className={styles.tableData}>
                <span className={styles.price}>19,90 €</span>
              </td>
              <td className={styles.tableData}>
                <span className={styles.quantity}>2</span>
              </td>
              <td className={styles.tableData}>
                <span className={styles.total}>39,80 €</span>
              </td>
            </tr>
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
              79.60 €
            </div>
            <div className={styles.cardContent}>
              <b>Discount:</b>
              0.00 €
            </div>
            <div className={styles.cardContent}>
              <b>Total:</b>
              79.60 €
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

export default cart
