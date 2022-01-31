import React from "react";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const NameBar = () => {
  return (
      <div className={styles.navContainer}>
        <div className={styles.blockL}>
            <Image src={"/media/60logo.png"} width="452px" height="101px" alt="Logo for the Cosmic Sunshine" loading="eager "/>
        </div>
      </div>
  );
};

export default NameBar;
