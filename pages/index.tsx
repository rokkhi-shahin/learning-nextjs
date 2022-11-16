import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Coder Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <p className={styles.description}>
         A blog for hunting coders by a hunting coder
        </p>

      </main>

      <footer className={styles.footer}>
          Developed by<span style={{fontWeight:'bold', marginLeft:'5px'}}>Shahin</span>
      </footer>
    </div>
  )
}
