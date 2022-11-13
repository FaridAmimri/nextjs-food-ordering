/** @format */

import axios from 'axios'
import Head from 'next/head'
import FoodList from '../components/FoodList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({ productList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Di Mama</title>
        <meta name='description' content='Your best pizza' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
      <FoodList productList={productList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    'https://nextjs-food-ordering-seven.vercel.app/api/products'
  )
  return {
    props: {
      productList: res.data
    }
  }
}
