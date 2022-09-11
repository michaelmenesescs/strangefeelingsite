import React from "react";
import Head from "next/head";
import styles from '../../styles/Home.module.css'
import ResponsiveNavbar from "../../components/ResponsiveNavbar"
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
        <div className={styles.desc}>
          The Cosmic Sunshine on All Platforms
        </div>
        <div className={styles.links}>
        <div className={styles.link}>
          <a href={"https://open.spotify.com/artist/3s0wd40FeDFlVHDlDfhpFC"}>
            Spotify
          </a>
        </div>
        <div className={styles.link}>
          <a href={"https://music.apple.com/us/artist/the-cosmic-sunshine/1251864225"}>
            Apple Music
          </a>
        </div>
        <div className={styles.link}>
          <a href={"https://soundcloud.com/thecosmicsunshine"}>
            Soundcloud
          </a>
        </div>
        <div className={styles.link}>
          <a href={"https://audius.co/cosmicsunshine"}>
            Audius
          </a>
        </div>
        <div className={styles.link}>
          <a href={"https://www.youtube.com/channel/UCVLDSQ4766OqNwqpatDVzSg"}>
            Youtube
          </a>
          </div>
        <div className={styles.link}>
          <a href={"https://thecosmicsunshine.bandcamp.com/"}>
            Bandcamp
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
