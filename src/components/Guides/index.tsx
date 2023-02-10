import Image from 'next/image';
import Link from 'next/link';
import styles from './Guides.module.scss';

export default function Guides() {
  return (
    <div className={styles.container}>
      <section className={styles.img}>
        <Image
          src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80"
          alt=""
          fill
        />
      </section>
      <section className={styles.guides}>
        <h2>Guias</h2>

        <span>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          odio placeat sapiente facere voluptas molestias distinctio, tenetur
          doloribus, officia modi consequuntur, repellendus explicabo numquam
          asperiores a! Vitae nisi quibusdam error? Ipsam, rerum! Adipisci, nam
          vel modi unde quod eos accusamus, nemo eius distinctio itaque quo
          tempore ex soluta excepturi reiciendis eaque. Iste dolorem accusamus
          sit quibusdam reiciendis fugiat hic vero. Aliquid temporibus enim
          nobis iusto blanditiis non est, rem laboriosam praesentium, amet eius
          molestias accusantium voluptate voluptas repudiandae ipsum
          consequuntur eos maiores esse itaque dolore nesciunt. Vitae maxime
          minima odit.
        </span>
      </section>
    </div>
  );
}
