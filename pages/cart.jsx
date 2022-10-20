/** @format */

import Image from 'next/image'
import styles from '../styles/Cart.module.css'
import { Table, Card, Text, Button, Row } from '@nextui-org/react'

function cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Table
          aria-label='cart table'
          css={{
            height: 'auto',
            minWidth: '100%'
          }}
        >
          <Table.Header>
            <Table.Column className={styles.column}>
              <div className={styles.header}>Product</div>
            </Table.Column>
            <Table.Column>
              {' '}
              <div className={styles.header}>Name</div>
            </Table.Column>
            <Table.Column>
              {' '}
              <div className={styles.header}>Extras</div>
            </Table.Column>
            <Table.Column>
              {' '}
              <div className={styles.header}>Price</div>
            </Table.Column>
            <Table.Column>
              {' '}
              <div className={styles.header}>Quantity</div>
            </Table.Column>
            <Table.Column>
              {' '}
              <div className={styles.header}>Total</div>
            </Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key='1'>
              <Table.Cell>
                <div className={styles.imgContainer}>
                  <Image
                    src='/assets/pizza.png'
                    layout='fill'
                    objectFit='cover'
                    alt=''
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.name}>CORALZO</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.extras}>Double ingredients, spicy sauce</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.price}>19.95 €</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.quantity}>2</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.total}>39.90 €</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row key='1'>
              <Table.Cell>
                <div className={styles.imgContainer}>
                  <Image
                    src='/assets/pizza.png'
                    layout='fill'
                    objectFit='cover'
                    alt=''
                  />
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.name}>CORALZO</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.extras}>Double ingredients, spicy sauce</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.price}>19.95 €</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.quantity}>2</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.total}>39.90 €</p>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className={styles.right}>
        {/* <Grid sm={12} md={5}> */}
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
