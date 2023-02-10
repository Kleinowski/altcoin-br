import Guides from '@/components/Guides';
import styles from '@/styles/Guides.module.scss';
export default function Guias() {
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <section className={styles.guides}>
          <Guides />
          <Guides />
          <Guides />
          <Guides />
          <Guides />
        </section>
      </div>
    </div>
  );
}
