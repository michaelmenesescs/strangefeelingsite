import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import '98.css'



export default function Home() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>The Cosmic Sunshine</title>
        <meta name="description" content="The Cosmic Sunshine, a music and visual experience from New York City" />
        <link rel="icon" href="/media/logo.png" />
      </Head>
      <div className = "window"  
            style={{
                    width: "100%", 
                    height: "100%"
                    }} >
         <div className='title-bar'
              style={{
                width: "100%",
                height: '100%',
                color: "white",
                fontSize: "20pt",
                padding: "30px"
              }}
         
         >
           <div className={styles.wrapper}>
            <Image src={'/media/logo.png'} width="100px" height="100px" />
           </div>
           welcome to the cosmic sunshine
         </div>
          <div className='window'>
              <div className='window-body'
                style={{
                    textAlign:"center",
                    fontSize: "30pt",
                    padding: "20px",
                    height: "100%",
                    
                  }}
              >
                would you like a strange feeling?  
                </div>
              <div className={styles.buttonContainer}>
                <button style={{
                  width: '400px', 
                  height: '200px',
                  fontSize: '25pt'
                }}> <Link href="main"> please </Link></button>
                
              </div>
          </div>
      </div>
    </div>
  )
}
