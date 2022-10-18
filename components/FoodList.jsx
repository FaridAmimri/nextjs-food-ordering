/** @format */

import styles from '../styles/FoodList.module.css'
import FoodCard from './FoodCard'

function FoodList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PIZZA DI MAMA</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi
        culpa quasi ullam deserunt, cumque enim recusandae perferendis
        molestiae, mollitia assumenda accusamus quia ipsam natus neque, est
        nesciunt fugiat alias!
      </p>
      <div className={styles.wrapper}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  )
}

export default FoodList
