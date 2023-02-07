import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <h1 className={styles.sectionTitle}>Mais populares</h1>

        <div className={`${styles.container}`}>
          <div className={styles.leftContent}>
            <Hero />

            <h1 className={styles.sectionTitle}>últimas postagens</h1>

            <main className={styles.postsContainer}>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </main>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
