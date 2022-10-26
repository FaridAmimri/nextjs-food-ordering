/** @format */

import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/FoodCard.module.css'

function FoodCard({ food }) {
  return (
    <div className={styles.container}>
      <Link href={`/product/${food._id}`}>
        <Image src={food.image} alt='' width={500} height={500} />
      </Link>
      <h1 className={styles.title}>{food.title}</h1>
      <span className={styles.price}>{food.prices[0]} €</span>
      <p className={styles.description}>{food.description}</p>
    </div>
  )
}

export default FoodCard
