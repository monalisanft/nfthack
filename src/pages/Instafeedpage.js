import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Instafeed() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Insta Feed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <i>Instagram Feed</i>
        </h1>
        <br></br>
        <form>
        <label htmlFor="gsearch">Search The Gram: &rarr;</label>
        <input type="search" id="gsearch" name="gsearch" />
        </form>
        <p><b>Check out some slammin artists pages on the Gram</b></p>
        <div className={styles.grid}>
          <a href="/nextp" className={styles.card}>
            <h3>Features &rarr;</h3>
            <p>Coming soon...</p>
            <img src="/home.svg" alt="Home Logo" className={styles.logo} />
          </a>
          <a href="/nextp" className={styles.card}>
            <h3>Features &rarr;</h3>
            <p>Coming soon...</p>
            <img src="/home.svg" alt="Home Logo" className={styles.logo} />
          </a>
          <a href="/nextp" className={styles.card}>
            <h3>Features &rarr;</h3>
            <p>Coming soon...</p>
            <img src="/home.svg" alt="Home Logo" className={styles.logo} />
          </a>
          <a href="/nextp" className={styles.card}>
            <h3>Features &rarr;</h3>
            <p>Coming soon...</p>
            <img src="/home.svg" alt="Home Logo" className={styles.logo} />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      <a href={"/"}><img src="/home.svg" alt="Home Logo" className={styles.logo} /></a>
      <a href={"https://github.com"}><img src="/githublogo.png" alt="Github Icon" className={styles.logo} /></a>
      <a href={"https://discord.com"}><img src="/discord.svg" alt="Discord Icon" className={styles.logo} /></a>
      </footer>
    </div>
  )
}
