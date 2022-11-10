/** @format */

import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import AddProduct from '../components/AddProduct'
import FoodList from '../components/FoodList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({ productList, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs-Pizzeria</title>
        <meta name='description' content='Your best pizza' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
      {admin && <AddProduct />}
      <FoodList productList={productList} />
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req?.cookies || ''
  let admin = true

  if (cookie.token !== process.env.TOKEN) {
    admin = false
  }

  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      productList: res.data,
      admin
    }
  }
}
