import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stackchain Stats</title>
        <meta name="description" content="Stats app for stackchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to stackchainstats.com</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/search?q=stackchaintip&src=typed_query&f=live"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Stackchain
        </a>
      </footer>
    </div>
  );
}
