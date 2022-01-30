import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          <Link href="/"><a>Next.js!</a></Link>
        </h1>
        <h1 className={styles.title}>
          ComOver$
          <Link href="/vlogs"><a>Vlogs!</a></Link>
        </h1>
        <h1 className={styles.title}>
          Gotcha!
          <Link href="/contact"><a>Contacts!</a></Link>
        </h1>
      </main>

    </div>
  )
}
