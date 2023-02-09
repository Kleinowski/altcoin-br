import News from '@/components/News';
import styles from '@/styles/Noticias.module.scss';
export default function Noticias() {
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <section className={styles.featured}>
          <h1>Destaques</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            accusamus ut, numquam iure id unde ea impedit explicabo, officia
            fugit nam. Harum, facere quis fugit sapiente incidunt rerum atque
            consectetur.
          </span>
        </section>
        <section className={styles.news}>
          <News />
          <News />
          <News />
          <News />
        </section>
      </div>
    </div>
  );
}
