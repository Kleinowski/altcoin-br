import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
}
