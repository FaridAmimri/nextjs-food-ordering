import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs-Pizzeria</title>
        <meta name="description" content="Your best pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </div>
  )
}
