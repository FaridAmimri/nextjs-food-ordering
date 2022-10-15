/** @format */

import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { FaPhone } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { FaPizzaSlice } from 'react-icons/fa'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <FaPhone />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW !</div>
          <div className={styles.text}>06 40 40 82 05</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <div className={styles.logo}>
            <FaPizzaSlice />
          </div>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <FaShoppingCart />
        </div>
        <div className={styles.counter}>2</div>
      </div>
    </div>
  )
}

export default Navbar
