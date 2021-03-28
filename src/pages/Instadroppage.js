import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function DroPage() {
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Mint NFTs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.title}>1 Step Closer</div>
      <div className={styles.grid}>
          <a
            href="/singlepiecedrop"
            className={styles.card}
          >
            <h3>Single Piece of Magic &rarr;</h3>
            <p>Follow to drop a single piece of magic *</p>
          </a>
          <a
            href="/Instafeedpage"
            className={styles.card}
          >
            <h3>Got Many &rarr;</h3>
            <p>Couldn't contain your gift in one piece and want to share with many</p>
          </a>
          <p><b>Choose "Single Piece of Magic" if you would like to create a single nft
        or <br></br> choose "Got Many" if you would like to share many or put up multiple times</b></p>
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
