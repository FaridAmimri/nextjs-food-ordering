/** @format */

import Image from 'next/image'
import styles from '../styles/FoodCard.module.css'

function FoodCard() {
  return (
    <div className={styles.container}>
      <Image src='/assets/pizza.png' alt='' width={500} height={500} />
      <h1 className={styles.title}>FIORI ZUCCA</h1>
      <span className={styles.price}>19,00 €</span>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default FoodCard
