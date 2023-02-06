import Hero from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import styles from '@/styles/Home.module.scss';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Hero />
      </div>
    </>
  );
}
