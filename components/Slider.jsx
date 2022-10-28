/** @format */

import { useState } from 'react'
import styles from '../styles/Slider.module.css'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

const images = [
  '/assets/featured2.png',
  '/assets/featured3.png'
]

function Slider() {
  const imgListLength = images.length
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleArrow = (direction) => {
    if (direction === 'left') {
      setCurrentSlide(currentSlide === 0 ? imgListLength - 1 : currentSlide - 1)
    }
    if (direction === 'right') {
      setCurrentSlide(currentSlide === imgListLength - 1 ? 0 : currentSlide + 1)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <FaChevronLeft
          layout='fill'
          style={{ left: 0 }}
          onClick={() => handleArrow('left')}
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * currentSlide}vw)` }}
      >
        {images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            {index === currentSlide && (
              <Image src={image} alt='' layout='fill' priority='true' />
            )}
          </div>
        ))}
      </div>

      <div className={styles.arrowContainer}>
        <FaChevronRight
          layout='fill'
          style={{ right: 0 }}
          onClick={() => handleArrow('right')}
        />
      </div>
    </div>
  )
}

export default Slider
