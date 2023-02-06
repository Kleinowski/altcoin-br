import Hero from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import News from '@/components/News';
import { Sidebar } from '@/components/Sidebar';
import styles from '@/styles/Home.module.scss';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className={styles.sectionTitle}>Mais populares</h1>

      <div className={styles.container}>
        <Hero />
        <Sidebar />
      </div>
    </>
  );
}
