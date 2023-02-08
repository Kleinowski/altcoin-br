import Link from 'next/link';
import {
  RiBitCoinFill,
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from 'react-icons/ri';
import styles from './Sidebar.module.scss';

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.newsletter}>
        <h2 className={styles.heading}>Newsletter</h2>
        <form action="">
          <input
            type="email"
            required
            placeholder="Digite seu melhor email..."
          />
          <button type="submit">Inscrever-se</button>
        </form>
      </div>

      <div className={styles.socialsContainer}>
        <h2 className={styles.heading}>Siga nossas Redes</h2>
        <div className={styles.socials}>
          <Link href="/">
            <RiFacebookBoxFill size={28} />
            Facebook
          </Link>
          <Link href="/">
            <RiLinkedinBoxFill size={28} />
            Linkedin
          </Link>
          <Link href="/">
            <RiTwitterFill size={28} />
            Twitter
          </Link>
          <Link href="/">
            <RiInstagramLine size={28} />
            Instagram
          </Link>
          <Link href="/">
            <RiGithubFill size={28} />
            GitHub
          </Link>
        </div>
      </div>

      <div className={styles.cryptoGraph}>
        <h2 className={styles.heading}>Preços Top 5</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Valor</th>
              <th>24h</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <RiBitCoinFill size={24} />
              </td>
              <td className={styles.name}>Bitcoin</td>
              <td>R$ 120.000,00</td>
              <td style={{ color: 'red' }}>-5%</td>
            </tr>
            <tr>
              <td>
                {' '}
                <RiBitCoinFill size={24} />
              </td>
              <td className={styles.name}>Ethereum</td>
              <td>R$ 25.000,00</td>
              <td style={{ color: 'green' }}>+3%</td>
            </tr>
            <tr>
              <td>
                {' '}
                <RiBitCoinFill size={24} />
              </td>
              <td className={styles.name}>Ethereum</td>
              <td>R$ 25.000,00</td>
              <td style={{ color: 'green' }}>+3%</td>
            </tr>
            <tr>
              <td>
                {' '}
                <RiBitCoinFill size={24} />
              </td>
              <td className={styles.name}>Ethereum</td>
              <td>R$ 25.000,00</td>
              <td style={{ color: 'green' }}>+3%</td>
            </tr>
            <tr>
              <td>
                {' '}
                <RiBitCoinFill size={24} />
              </td>
              <td className={styles.name}>Ethereum</td>
              <td>R$ 25.000,00</td>
              <td style={{ color: 'green' }}>+3%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </aside>
  );
}
