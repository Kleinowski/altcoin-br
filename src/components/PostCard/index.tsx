import Image from 'next/image';
import Link from 'next/link';
import styles from './PostCard.module.scss';

interface PostCardProps {}

export default function PostCard() {
  return (
    <article className={styles.container}>
      <Link href="/">
        <header className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80"
            alt=""
            fill
          />
        </header>
        <div className={styles.contentContainer}>
          <span>Categoria</span>
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ut
            hic iure, odio non nemo alias qui quo unde cum esse provident
            quibusdam maxime doloremque culpa expedita, laborum asperiores
            accusamus!
          </p>
        </div>
        <footer className={styles.authorDetails}>
          <Image
            src="https://images.unsplash.com/photo-1675693383068-5226fcd68c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            width={32}
            height={32}
          />
          <span>Willian Kleinowski</span>
        </footer>
      </Link>
    </article>
  );
}
