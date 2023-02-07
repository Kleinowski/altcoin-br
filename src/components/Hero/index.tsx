import Image from 'next/image';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <article className={styles.container}>
      <Swiper
        modules={[A11y, Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <article className={styles.contentContainer}>
            <div className={styles.imageContainer}>
              <Image
                src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
                alt="Image"
                fill
              />
            </div>
            <div className={styles.content}>
              <span>Noticia</span>
              <h2>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                sit?
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                voluptas non minima, quia architecto vitae consectetur
                doloremque soluta a corrupti.
              </p>
              <a href="#" className={styles.btn}>
                Ler mais
              </a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.contentContainer}>
            <div className={styles.imageContainer}>
              <Image
                src="https://images.unsplash.com/photo-1675552561502-790d8b311735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Image"
                fill
              />
            </div>
            <div className={styles.content}>
              <span>Guia</span>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias eaque excepturi odit cum accusantium! Aliquam.
              </p>
              <a href="#" className={styles.btn}>
                Ler mais
              </a>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </article>
  );
}
