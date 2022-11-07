/** @format */

import axios from 'axios'
import Head from 'next/head'
import FoodList from '../components/FoodList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
  const cookie = ctx.req?.cookies || ''
  let admin = false

  if (cookie.token !== process.env.TOKEN) {
    admin = true
  }

  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      productList: res.data,
      admin
    }
  }
}

export default function Home({ productList, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs-Pizzeria</title>
        <meta name='description' content='Your best pizza' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
      <FoodList productList={productList} />
    </div>
  )
}
