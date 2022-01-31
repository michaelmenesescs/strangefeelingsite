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
          <Image src={"/media/StrangeCover.png"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/thinkaboutit.jpg"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/edcover.png"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/edback.jpeg"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/logo.png"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/juno.jpeg"} width="1512px" height="2016px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/2018shoot.jpg"} width="1080px" height="1620px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/CosmicSunshine55.jpeg"} width="1080px" height="1620px" />
        </div>
        
        <div className={styles.imgwrapper}>
          <Image src={"/media/FemmeMagiqueCover.png"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/greenpoint.jpeg"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/LPRStage.jpeg"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/serenity.png"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/cleopatra.png"} width="640px" height="640px" />
        </div>
        <div className={styles.imgwrapper}>
          <Image src={"/media/soundsofsun.jpg"} width="640px" height="640px" />
        </div>
       


      </div>

    </div>
  )
};

export default index;
