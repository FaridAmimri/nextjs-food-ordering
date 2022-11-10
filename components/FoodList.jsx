/** @format */

import styles from '../styles/FoodList.module.css'
import FoodCard from './FoodCard'

function FoodList({ productList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PIZZA DI MAMA</h1>
      <p className={styles.description}>
        Welcome to Pizza Di Mama ! <br />
        Our pizzas are all homemade by Mama. She makes for you any pizza you
        want. <br />
        Do you want to eat delicious pizzas with the best taste and the best
        quality ? <br />
        Don&apos;t waste time and Get ones below ! We&apos;ll tell Mama about
        your order.
      </p>
      <div className={styles.wrapper}>
        {productList.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  )
}

export default FoodList
