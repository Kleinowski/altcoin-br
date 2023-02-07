import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from 'react-icons/ri';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <div className={`main-footer ${styles.container}`}>
      <section className={`${styles.column} ${styles.icons}`}>
        <a href="" target="_blank" rel="noopener noreferrer">
          {' '}
          <RiFacebookBoxFill size={28} />
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          {' '}
          <RiInstagramLine size={28} />
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          {' '}
          <RiLinkedinBoxFill size={28} />
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          {' '}
          <RiTwitterFill size={28} />
        </a>

        <a
          href="https://github.com/Kleinowski"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <RiGithubFill size={28} />
        </a>
      </section>
      <section className={styles.contact}>
        <span>
          <h3>Phone: 123-456-7890</h3>
        </span>
      </section>

      <section className="copyright">
        <span></span> Todos os direitos reservados © 2023
      </section>
    </div>
  );
}
