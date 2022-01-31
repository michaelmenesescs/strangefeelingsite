import React from 'react';
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

const index = () => {
  return (

    <div className={styles.mainContainer} >
      <Head>
        <title>Blog</title>
        <meta name="description" content="The Cosmic Sunshine, a music and visual experience from New York City" />
        <link rel="icon" href="/media/logo.png" />
      </Head>

    </div>
  )
};

export default index;
