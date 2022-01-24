import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dion Pizza</title>
        <meta name="description" content="Pizza restaurent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </div>
  )
}

export default Home
