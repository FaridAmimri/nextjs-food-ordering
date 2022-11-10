/** @format */

import Image from 'next/image'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src='/assets/background.png'
          alt=''
          layout='fill'
          objectFit='cover'
          priority={true}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.memo}>
            PIZZA DI MAMA !
            <br /> BEST TASTE !
            <br /> BEST QUALITY !
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            1 square de beranger
            <br /> 75000 Paris
          </p>
          <p className={styles.text}>
            13 rue Paul bert
            <br /> 69000 Lyon
          </p>
          <p className={styles.text}>
            18 avenue du gray
            <br /> 25000 Besancon
          </p>
          <p className={styles.text}>
            8 boulevard du prestige
            <br /> 13000 Marseille
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - THURSDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            FRIDAY
            <br /> 15:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
