/** @format */

import styles from '../styles/Navbar.module.css'
import { FaPhone, FaPizzaSlice, FaShoppingCart, FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)
  const location = useRouter()
  const quantity = useSelector((state) => state.cart.quantity)

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div
      className={styles.container}
      id={expandNavbar ? styles.open : styles.close}
    >
      <div className={styles.item}>
        <div className={styles.callButton}>
          <FaPhone />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW !</div>
          <div className={styles.text}>06 40 40 82 05</div>
        </div>
      </div>
      <div
        className={styles.item}
        id={expandNavbar ? styles.openLinks : styles.closeLinks}
      >
        <ul className={styles.list}>
          <Link href='/'>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href='/admin'>
            <li className={styles.listItem}>Dashboard</li>
          </Link>
          <div className={styles.logo}>
            <FaPizzaSlice />
          </div>
          <Link href='/products'>
            <li className={styles.listItem}>Pizzas</li>
          </Link>
          <Link href='/tracker'>
            <li className={styles.listItem}>Tracker</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.toggleButton}>
          <FaBars
            onClick={() => {
              setExpandNavbar((prev) => !prev)
            }}
          />
        </div>
        <Link href='/cart'>
          <div
            className={styles.cart}
            id={expandNavbar ? styles.openCart : styles.closeCart}
          >
            <div className={styles.cartIcon}>
              <FaShoppingCart />
            </div>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
