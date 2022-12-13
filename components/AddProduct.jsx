/** @format */

import { Modal, Button, Text, Input, Spacer, Loading } from '@nextui-org/react'
import axios from 'axios'
import { useState } from 'react'
import styles from '../styles/AddProduct.module.css'

function AddProduct() {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [prices, setPrices] = useState([])
  const [extra, setExtra] = useState(null)
  const [extraOptions, setExtraOptions] = useState([])

  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
  }

  const changePrice = (e, index) => {
    const currentPrices = prices
    currentPrices[index] = e.target.value
    setPrices(currentPrices)
  }

  const handleExtra = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value })
  }

  const handleExtraOptions = (e) => {
    setExtraOptions((prev) => [...prev, extra])
  }

  const handleCreate = async () => {
    setLoading(true)
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'uploads')
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/dwnmbt2d0/image/upload',
        data
      )

      const { url } = uploadRes.data
      const newProduct = {
        title,
        image: url,
        description,
        prices,
        extraOptions
      }

      await axios.post(
        'https://nextjs-food-ordering-seven.vercel.app/api/products',
        newProduct
      )
      setVisible(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <Button
        auto
        color='warning'
        onPress={handler}
        className={styles.addButton}
      >
        Add New Pizza
      </Button>
      <Modal
        closeButton
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <div className={styles.header}>
            <Text id='modal-title' size={18}>
              Add your pizza
            </Text>
            {loading && <Loading color='warning' type='gradient' size='md' />}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.imageContainer}>
            <Text id='imageTitle' size={15}>
              Choose an image
            </Text>
            <Input
              fullWidth
              underlined
              type='file'
              color='warning'
              size='lg'
              placeholder='Choose an image'
              aria-labelledby='image'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <Input
            clearable
            fullWidth
            underlined
            placeholder='Title'
            color='warning'
            size='lg'
            aria-labelledby='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            clearable
            fullWidth
            underlined
            type='text'
            color='warning'
            size='xl'
            placeholder='Description'
            aria-labelledby='Description'
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className={styles.priceContainer}>
            <Text id='prices' size={15}>
              Prices
            </Text>
            <Spacer x={1} />
            <Input
              bordered
              type='number'
              color='warning'
              width='80px'
              placeholder='Sm'
              aria-labelledby='Small'
              onChange={(e) => changePrice(e, 0)}
            />
            <Spacer x={1} />
            <Input
              bordered
              type='number'
              color='warning'
              width='80px'
              placeholder='Md'
              aria-labelledby='Medium'
              onChange={(e) => changePrice(e, 1)}
            />
            <Spacer x={1} />
            <Input
              bordered
              type='number'
              color='warning'
              width='80px'
              placeholder='Lg'
              aria-labelledby='Large'
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
          <div className={styles.extraContainer}>
            <Input
              clearable
              underlined
              type='text'
              color='warning'
              size='xl'
              name='text'
              placeholder='Extra'
              aria-labelledby='Extra'
              onChange={handleExtra}
            />
            <Spacer x={0.5} />
            <Input
              bordered
              type='number'
              color='warning'
              width='110px'
              name='price'
              placeholder='Price'
              aria-labelledby='Price'
              onChange={handleExtra}
            />
            <Spacer x={0.5} />
            <Button auto color='error' onPress={handleExtraOptions}>
              Add
            </Button>
          </div>
          <div className={styles.extraOptions}>
            {extraOptions.map((extra, index) => (
              <span key={index}>{extra.text}</span>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto color='warning' onPress={handleCreate}>
            Add my new Pizza
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProduct
