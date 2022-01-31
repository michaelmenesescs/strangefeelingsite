import React from 'react';
import ResponsiveNavbar from '../../components/ResponsiveNavbar';
import styles from '../../styles/Home.module.css'
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
      <div className={styles.contactContainer}>
        <div className={styles.links}>
        <div className={styles.link}>
          <a href={"https://www.instagram.com/thecosmicsunshine/"}>
            Instagram
          </a>
        </div>
        <div className={styles.link}>
          <a href={"https://twitter.com/SunshineCosmic"}>
            Twitter
          </a>
        </div>
        <div className={styles.link}>
          <a href={"https://www.tiktok.com/@thecosmicsunshine"}>
            TikTok
          </a>
        </div>
        <div className={styles.link}>
          <a href={"https://www.pinterest.com/thecosmicsunshine/"}>
            Pinterest
          </a>
        </div>
        <div className={styles.link}>
          <a href={"mailto:thecosmicsunshine@gmail.com"}>
            Email
          </a>
        </div>
        </div>
      </div>

    </div>
  )
};

export default index;
