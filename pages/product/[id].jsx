/** @format */

import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'
import { Checkbox, Input, Button } from '@nextui-org/react'

const pizza = {
  id: 1,
  image: '/assets/pizza.png',
  name: 'MARGHERITA',
  price: [19.95, 23.95, 27.95],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}

function Product() {
  const [size, setSize] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.productImg}>
        <div className={styles.imgContainer}>
          <Image src={pizza.image} layout='fill' alt='' objectFit='contain' />
        </div>
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price[size]} €</span>
        <p className={styles.description}>
          {pizza.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Hic aut veniam rerum ullam? Culpa minus pariatur vero magnam
          sint dicta accusantium fugiat. A, sed dicta sunt totam voluptatibus
          atque delectus.
        </p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src='/assets/size.png' layout='fill' alt='' />
            <span className={styles.text}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src='/assets/size.png' layout='fill' alt='' />
            <span className={styles.text}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src='/assets/size.png' layout='fill' alt='' />
            <span className={styles.text}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <Checkbox
              color='warning'
              id='double'
              name='double'
              size='xs'
              className={styles.checkbox}
              label='Double Ingredients'
            />
          </div>
          <div className={styles.option}>
            <Checkbox
              color='warning'
              id='cheese'
              name='cheese'
              size='xs'
              className={styles.checkbox}
              label='Extra Cheese'
            />
          </div>
          <div className={styles.option}>
            <Checkbox
              color='warning'
              id='spicy'
              name='spicy'
              size='xs'
              className={styles.checkbox}
              label='Spicy Sauce'
            />
          </div>
          <div className={styles.option}>
            <Checkbox
              color='warning'
              id='garlic'
              name='garlic'
              size='xs'
              className={styles.checkbox}
              label='Garlic Sauce'
            />
          </div>
        </div>
        <div className={styles.add}>
          <Input
            type='number'
            value={1}
            width='50px'
            className={styles.quantity}
          />

          <Button className={styles.button} color='warning' auto>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Product
