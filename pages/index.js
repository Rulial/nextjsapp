import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EVENT HORIZON</title>
        <meta name="description" content="Imagination>0" />
        <link rel="icon" href="/PI.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PATH <a href="https://path-integral.com">INTEGRAL</a>
        </h1>

        <p className={styles.description}>
          We are still building{' '}
          <code className={styles.code}><br></br>shall be up and running soon...</code>
        </p> 

        <div className={styles.grid}>
          <a href="https://path-integral.com" className={styles.card}>
            <h2>Event Horizon &rarr;</h2>
            <p>Find in-depth information about features and API.</p>
          </a>

          <a href="https://path-integral.com" className={styles.card}>
            <h2>Metagame &rarr;</h2>
            <p>Find in-depth information about features and API.</p>
          </a>

          <a
            href="https://path-integral.com"
            className={styles.card}
          >
            <h2>SWUMR &rarr;</h2>
            <p>Discover our Defi protocol for this eco system.</p>
          </a>

          <a
            href="https://path-integral.com"
            className={styles.card}
          >
            <h2>Say Hi! &rarr;</h2>
            <p>
              Want to know more or contribute? hello@path-integral.com
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://path-integral.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/PIL04.png" alt="PI LOGO" width={72} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}
