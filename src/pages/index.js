import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Githubcorner from './components/Githubcorner'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monaliza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Githubcorner url="https://github.com/nftmona/nfthackathon"/>

      <main className={styles.main}>
        

        <div className={styles.grid}>
          <a
            href="/Instafeedpage"
            className={styles.card}
          >
            <h3>NFTs on The Gram &rarr;</h3>
            <p>See some dope minted NFTs on the gram</p>
          </a>
          <a
            href="/Instadroppage"
            className={styles.card}
          >
            <h3>Drop them NFTs &rarr;</h3>
            <p>Mint your own NFTs</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      <a href={"https://github.com"}><img src="/githublogo.png" alt="Github Icon" className={styles.logo} /></a>
      <a href={"https://discord.com"}><img src="/discord.svg" alt="Discord Icon" className={styles.logo} /></a>
      </footer>
    </div>
  )
}
