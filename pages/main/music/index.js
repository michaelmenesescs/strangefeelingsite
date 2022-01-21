import React from "react";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import ResponsiveNavbar from "../../../components/ResponsiveNavbar";
import Link from "next/link";

const index = () => {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Music</title>
        <meta
          name="description"
          content="The Cosmic Sunshine, a music and visual experience from New York City"
        />
        <link rel="icon" href="/media/logo.png" />
      </Head>
      <ResponsiveNavbar />
      <div className={styles.musicContainer}>
        
        <div className={styles.linkContainer}>
          <a href={"https://open.spotify.com/artist/3s0wd40FeDFlVHDlDfhpFC"}>
            Spotify
          </a>
          <a href={"https://music.apple.com/us/artist/the-cosmic-sunshine/1251864225"}>
            Apple Music
          </a>
          <a href={"https://soundcloud.com/thecosmicsunshine"}>
            Soundcloud
          </a>
          <a href={"https://audius.co/cosmicsunshine"}>
            Audius
          </a>
          <a href={"https://www.youtube.com/channel/UCVLDSQ4766OqNwqpatDVzSg"}>
            Youtube
          </a>



        </div>
      </div>
    </div>
  );
};

export default index;
