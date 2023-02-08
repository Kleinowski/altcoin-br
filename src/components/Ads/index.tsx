import Image from 'next/image';
import Link from 'next/link';
import styles from './Ads.module.scss';

export function Ads() {
  return (
    <>
      <div className={styles.content}>
        <Link href="/">
          <Image
            src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            fill
          />
          <span>Klein é gayzinho</span>
        </Link>
      </div>
    </>
  );
}
