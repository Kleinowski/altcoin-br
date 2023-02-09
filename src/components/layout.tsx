import styles from '@/styles/Layout.module.scss';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

import { Roboto } from '@next/font/google';
import { Ads } from './Ads';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`${roboto.className} main-container`}>
        <Navbar />
        <section className="ads-container wrapper">
          <Ads />
          <Ads />
          <Ads />
          <Ads />
        </section>
        <div className={`${styles.pageContent} wrapper`}>
          <div className={`${styles.leftContent} `}>{children}</div>
          <div className={styles.rightContent}>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
