import {
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
        <h2>Newsletter</h2>
        <form action="">
          <input type="text" placeholder="Digite seu melhor email..." />
          <button type="submit">Inscrever-se</button>
        </form>
      </div>
      <div className="socials">
        <h2>Siga nossas Redes</h2>
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            {' '}
            <RiFacebookBoxFill size={28} />
            Facebook
          </a>
        </span>
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            {' '}
            <RiLinkedinBoxFill size={28} />
            Linkedin
          </a>
        </span>
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            {' '}
            <RiTwitterFill size={28} />
            Twitter
          </a>
        </span>
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            {' '}
            <RiInstagramLine size={28} />
            Instagram
          </a>
        </span>
        <span>
          <a href="" target="_blank" rel="noopener noreferrer">
            {' '}
            <RiGithubFill size={28} />
            GitHub
          </a>
        </span>
      </div>
    </aside>
  );
}
