import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


const StyledLink = styled(Link)`
    text-decoration: none;
  
`

const ResponsiveNavbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.blockL}>
        <StyledLink href="/">
          <Image src={"/media/60logo.png"} width="452px" height="101px" alt="Logo for the Cosmic Sunshine" loading="eager"/>
        </StyledLink>
      </div>
      <div className={styles.blockR}>
        <StyledLink href="/contact">contact  </StyledLink>
        <StyledLink href="/gallery">gallery  </StyledLink>
        <StyledLink href="/music">music   </StyledLink>
        <StyledLink href="https://mirror.xyz/0xcF0d89AcC115f3e1537930fe9E883cb0F5C4cBa7">blog  </StyledLink>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
