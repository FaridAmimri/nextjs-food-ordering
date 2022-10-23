/** @format */

import styles from '../../styles/Order.module.css'
import { Table, Card, Button } from '@nextui-org/react'
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
        <Table
          aria-label='order table'
          css={{
            height: 'auto',
            minWidth: '100%'
          }}
        >
          <Table.Header >
            <Table.Column className={styles.column}>
              <div className={styles.header}>Order ID</div>
            </Table.Column>
            <Table.Column className={styles.column}>
              <div className={styles.header}>Customer</div>
            </Table.Column>
            <Table.Column className={styles.column}>
              <div className={styles.header}>Address</div>
            </Table.Column>
            <Table.Column className={styles.column}>
              <div className={styles.header}>Total</div>
            </Table.Column>
          </Table.Header>

          <Table.Body className={styles.body}>
            <Table.Row>
              <Table.Cell>
                <p className={styles.id}>137383737</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.name}>Farid Amimri</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.address}>75000 Paris</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.total}>79.60 €</p>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

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
            <div className={styles.content}>
              <b className={styles.contentTitle}>Subtotal:</b>
              79.60 €
            </div>
            <div className={styles.content}>
              <b className={styles.contentTitle}>Discount:</b>
              0.00 €
            </div>
            <div className={styles.content}>
              <b className={styles.contentTitle}>Total:</b>
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
