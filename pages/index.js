import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-blue-400">
      <Head>
        <title>John message to Elisky</title>
        <meta name="description" content="This is mad cruise bro" />
        <link rel="icon" href="" />
      </Head>

      <main className="">
        <h1 className={styles.title}>
          Eliezer, how far? Has Pops gone out? {/*<a href="https://nextjs.org">Next.js!</a>*/}
        </h1>

                
      </main>

      <footer className={styles.footer}>
        {/*<a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
  </a>*/}<p>Powered by John Uchendu sitting in the room 0_0</p>
      </footer>
    </div>
  )
}
