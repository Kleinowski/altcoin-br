import Layout from '@/components/layout';
import '@/styles/globals.scss';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
