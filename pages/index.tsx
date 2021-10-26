import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import { Cart } from '../modules/cart/cart';
import styles from '../styles/Home.module.scss';
import { Footer } from '../modules/footer/footer';
import { useState } from 'react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weblib APP</title>
        <meta name="description" content="Weblib" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        Mon panier
      </header>
      <main className={styles.container}>
        <Image alt="cat" className={styles.catImage} src="http://placekitten.com/g/300/300" width="300" height="300"/>
        <Cart />
      </main>
      <Footer/>
    </div>
  )
}

export default Home
