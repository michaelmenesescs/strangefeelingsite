import React from 'react';
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ResponsiveNavbar from '../../components/ResponsiveNavbar';
import Image from 'next/image'


const index = () => {
  return (

    <div className={styles.mainContainer} >
      <Head>
        <title>Gallery</title>
        <meta name="description" content="The Cosmic Sunshine, a music and visual experience from New York City" />
        <link rel="icon" href="/media/logo.png" />
      </Head>
      <ResponsiveNavbar />
      <div className={styles.galleryContainer}>
        <div className={styles.imgwrapper}>
          <Image src={"/media/moog.jpg"} width="960px" height="640px" alt="moog" loading='eager' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/bsides.png"} width="640px" height="640px" alt="B sides" loading='eager' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/distant.png"} width="640px" height="640px" alt="Distant Lover" loading='eager' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/StrangeCover.png"} width="640px" height="640px" alt="90's cover" loading='eager' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/thinkaboutit.jpg"} width="640px" height="640px" alt="Think about it too much, 2021" loading='eager' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/edcover.png"} width="640px" height="640px" alt="Front cover for Ethereal Dreams, 2020" loading='eager' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/edback.jpeg"} width="640px" height="640px" alt="Back cover for Ethereal Dreams, 2020" loading='eager' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/logo.png"} width="640px" height="640px" alt="Official logo for the Cosmic Sunshine" loading='eager' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/juno.jpeg"} width="1512px" height="2016px" alt="Midnight Love in New York City" loading='lazy' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/2018shoot.jpg"} width="1080px" height="1620px" alt="2018 Photo Shoot" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/CosmicSunshine55.jpeg"} width="1080px" height="1620px" alt="Live at Le Poisson Rouge, NYC, 2019" loading='lazy' />
        </div>

        <div className={styles.imgwrapper}>
          <Image src={"/media/FemmeMagiqueCover.png"} width="640px" height="640px" alt="Femme Magique, 2019" loading='lazy' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/greenpoint.jpeg"} width="640px" height="640px" alt="In Greenpoint, 2018" loading='lazy' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/LPRStage.jpeg"} width="640px" height="640px" alt="Live at Le Poisson Rouge, NYC, 2019" loading='lazy' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/serenity.png"} width="640px" height="640px" alt="Serenity, 2018" loading='lazy' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/cleopatra.png"} width="640px" height="640px" alt="Cleopatra, 2018" loading='lazy' />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/soundsofsun.jpg"} width="640px" height="640px" alt="Sounds of the Sun, 2018" loading='lazy' />
        </div>



      </div>

    </div>
  )
};

export default index;
