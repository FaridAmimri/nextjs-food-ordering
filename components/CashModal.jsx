/** @format */

import styles from '../styles/CashModal.module.css'
import { useState } from 'react'
import { Modal, Button, Text, Input } from '@nextui-org/react'

function CashModal({ modalVisible, setModalVisible, total, createOrder }) {
  const [customer, setCustomer] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 })
  }

  return (
    <div className={styles.container}>
      <Modal
        closeButton
        preventClose
        aria-labelledby='modal-title'
        open={modalVisible}
      >
        <Modal.Header className={styles.header}>
          <Text id='modal-title' size={18}>
            You will pay {total} € after delivery
          </Text>
        </Modal.Header>
        <Modal.Body className={styles.body}>
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            aria-labelledby='customer'
            placeholder='John Doe'
            onChange={(e) => setCustomer(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            aria-labelledby='phone number'
            placeholder='06 40 40 82 05'
            onChange={(e) => setNumber(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            aria-labelledby='address'
            placeholder='Av. de la Pelouse, 75000 Paris'
            onChange={(e) => setAddress(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.footer}>
            <Button auto onPress={handleClick}>
              Order
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CashModal
