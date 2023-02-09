import Image from 'next/image';
import Link from 'next/link';
import styles from './PostCard.module.scss';

interface PostCardProps {
  content: {
    image: string;
    category: string;
    title: string;
    summary: string;
    linkSrc: string;
  };
  author: {
    image: string;
    name: string;
  };
}

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
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem modi sed placeat, veniam fuga a.
          </h2>
        </div>
        <footer className={styles.footerContainer}>
          <div className={styles.authorDetails}>
            <Image
              src="https://images.unsplash.com/photo-1675693383068-5226fcd68c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              width={32}
              height={32}
            />
            <span>Willian</span>
          </div>
          <span className={styles.postTime}>há 20 dias</span>
        </footer>
      </Link>
    </article>
  );
}
