import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NameBar from '../components/NameBar'




export default function Home() {
  return (
    <div >
      <Head>
        <title>The Cosmic Sunshine</title>
        <meta name="description" content="The Cosmic Sunshine, a sonic and visual experience from New York City" />
        <link rel="icon" href="/media/logo.png" />
      </Head>
      <div className={styles.bgWrap}>
        <video autoPlay loop muted id="myVideo" width="1444" height="1950">
              <source src='/bckgnd.mp4' type='video/mp4' />
        </video>
       
      </div>
      <NameBar />

   
      

        <div className={styles.homeLinks}>
        <div className={styles.link}>
          <Link href="/gallery">
            Gallery
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/contact">
            Contact
          </Link>

        </div>
        <div className={styles.link}>
          <Link href="/music">
            Music
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="https://mirror.xyz/0xcF0d89AcC115f3e1537930fe9E883cb0F5C4cBa7" >
            Blog
          </Link>
        </div>
      </div>


    </div>
  )
}
