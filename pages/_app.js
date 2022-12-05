import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { Raleway } from '@next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Layout>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
