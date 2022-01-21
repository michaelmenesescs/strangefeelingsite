import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
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
            <Image src={"/media/logo.png"} width="100px" height="100px" />
        
        </div>
        <div className={styles.blockR}>
          
              <StyledLink href="/main/contact">contact  </StyledLink>
              <StyledLink href="/main/gallery">gallery  </StyledLink>
              <StyledLink href="/main/gallery">music    </StyledLink>
        
        
        </div>
    </div>
  );
};

export default ResponsiveNavbar;
