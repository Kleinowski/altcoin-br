import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './Navbar.module.scss';

export function Navbar() {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/historical?limit=10',
          {
            headers: {
              'X-CMC_PRO_API_KEY': 'f8c512d0-e99b-4005-b82b-b6fbaf7ccb7b',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
        </ul>
      </nav>
    </header>
  );
}
