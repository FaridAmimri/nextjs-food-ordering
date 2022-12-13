/** @format */

import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'
import { Checkbox, Input, Button } from '@nextui-org/react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { useRouter } from 'next/router'

function Product({ pizza }) {
  const [price, setPrice] = useState(pizza.prices[0])
  const [size, setSize] = useState(0)
  const [extras, setExtras] = useState([])
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const router = useRouter()

  const changePrice = (number) => {
    setPrice(price + number)
  }

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size]
    setSize(sizeIndex)
    changePrice(difference)
  }

  const handleChange = (event, option) => {
    const checked = event

    if (checked) {
      changePrice(option.price)
      setExtras([...extras, option])
    } else {
      changePrice(-option.price)
      setExtras(extras.filter((extra) => extra._id !== option._id))
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }))
    router.push('/cart')
  }

  return (
    <div className={styles.container}>
      <div className={styles.productImg}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.image}
            layout='fill'
            alt=''
            objectFit='contain'
            aria-label='pizza'
            priority
          />
        </div>
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>{price} €</span>
        <p className={styles.description}>{pizza.description}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image
              src='/assets/size.png'
              layout='fill'
              alt=''
              aria-label='pizza size Small'
            />
            <span className={styles.text}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image
              src='/assets/size.png'
              layout='fill'
              alt=''
              aria-label='pizza size Medium'
            />
            <span className={styles.text}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image
              src='/assets/size.png'
              layout='fill'
              alt=''
              aria-label='pizza size Large'
            />
            <span className={styles.text}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <Checkbox
                color='warning'
                id={option.text}
                name={option.text}
                size='md'
                className={styles.checkbox}
                label={option.text}
                isRounded={true}
                onChange={(event) => handleChange(event, option)}
              />
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <Input
            type='number'
            value={quantity}
            width='70px'
            className={styles.quantity}
            aria-label='input number'
            id='undefined'
            onChange={(event) => setQuantity(event.target.value)}
          />

          <Button
            className={styles.button}
            color='warning'
            onPress={handleClick}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://nextjs-food-ordering-seven.vercel.app/api/products/${params.id}`
  )
  return {
    props: {
      pizza: res.data
    }
  }
}

export default Product
