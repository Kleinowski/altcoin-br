import Layout from '@/components/layout';
import '@/styles/globals.scss';
import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
