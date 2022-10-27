/** @format */

import styles from '../../styles/Order.module.css'
import { Card, Button } from '@nextui-org/react'
import {
  FaCashRegister,
  FaCheckCircle,
  FaHourglassStart,
  FaBiking,
  FaHome
} from 'react-icons/fa'

function Order() {
  const status = 0

  const statusClass = (index) => {
    if (index - status < 1) return styles.done
    if (index - status === 1) return styles.inProgress
    if (index - status > 1) return styles.undone
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody className={styles.tableBody}>
            <tr className={styles.tableRowTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tableRowData}>
              <td>
                <span className={styles.id}>137383737</span>
              </td>
              <td>
                <span className={styles.name}>Farid Amimri</span>
              </td>
              <td>
                <span className={styles.address}>75000 Paris</span>
              </td>
              <td>
                <span className={styles.total}>79.60 €</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.orders}>
          <div className={statusClass(0)}>
            <div className={styles.icon}>
              <FaCashRegister />
            </div>
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <FaCheckCircle />
            </div>
          </div>
          <div className={statusClass(1)}>
            <div className={styles.icon}>
              <FaHourglassStart />
            </div>
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <FaCheckCircle />
            </div>
          </div>
          <div className={statusClass(2)}>
            <div className={styles.icon}>
              <FaBiking />
            </div>
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <FaCheckCircle />
            </div>
          </div>
          <div className={statusClass(3)}>
            <div className={styles.icon}>
              <FaHome />
            </div>
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <FaCheckCircle />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <Card css={{ mw: '100%' }}>
          <Card.Header>
            <h1> CART TOTAL</h1>
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
              <Button flat color='success'>
                PAID
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default Order
