import { CategoryButton } from '@/components/CategoryButton';
import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';
import styles from '@/styles/Home.module.scss';
import { useState } from 'react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Noticia');

  return (
    <>
      <div className="wrapper">
        <h1 className={styles.sectionTitle}>Mais populares</h1>

        <div className={`${styles.container}`}>
          <div className={styles.leftContent}>
            <Hero />

            <h1 className={styles.sectionTitle}>últimas postagens</h1>

            <div className={styles.categories}>
              <CategoryButton
                onClick={() => setActiveCategory('Noticias')}
                isActive={activeCategory === 'Noticias'}
              >
                Noticias
              </CategoryButton>
              <CategoryButton
                onClick={() => setActiveCategory('Guias')}
                isActive={activeCategory === 'Guias'}
              >
                Guias
              </CategoryButton>
              <CategoryButton
                onClick={() => setActiveCategory('Curiosidades')}
                isActive={activeCategory === 'Curiosidades'}
              >
                Curiosidades
              </CategoryButton>
            </div>
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
