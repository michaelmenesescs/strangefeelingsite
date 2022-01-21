import React from 'react';
import ResponsiveNavbar from '../../../components/ResponsiveNavbar'
import styles from '../../../styles/Home.module.css'
import Head from 'next/head'


const index = () => {
  return (

    <div className={styles.mainContainer}>
    <Head>
        <title>Contact</title>
        <meta name="description" content="The Cosmic Sunshine, a music and visual experience from New York City" />
        <link rel="icon" href="/media/logo.png" />
    </Head>
    <ResponsiveNavbar />
    Contact Page
      
  </div>
)};

export default index;
