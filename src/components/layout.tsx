import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

import { Poppins } from '@next/font/google';
import { Ads } from './Ads';

interface LayoutProps {
  children: ReactNode;
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`${poppins.className} main-container`}>
        <Navbar />
        <section className="ads-container wrapper">
          <Ads />
          <Ads />
          <Ads />
          <Ads />
        </section>
        {children}
        <Footer />
      </div>
    </>
  );
}
