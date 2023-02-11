import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';

export function Navbar() {
  const router = useRouter();

  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Altcoin
        </Link>
        <ul>
          <li>
            <Link
              href="/"
              className={router.pathname === '/' ? `${styles.active}` : ''}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/noticias"
              className={
                router.pathname === '/noticias' ? `${styles.active}` : ''
              }
            >
              Notícias
            </Link>
          </li>
          <li>
            <Link
              href="/guias"
              className={router.pathname === '/guias' ? `${styles.active}` : ''}
            >
              Guias
            </Link>
          </li>
          <li>
            <Link
              href="/cotacoes"
              className={
                router.pathname === '/cotacoes' ? `${styles.active}` : ''
              }
            >
              Cotações
            </Link>
          </li>
          <li>
            <Link
              href="/glossario"
              className={
                router.pathname === '/glossario' ? `${styles.active}` : ''
              }
            >
              Glossário
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={
                router.pathname === '/contato' ? `${styles.active}` : ''
              }
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
