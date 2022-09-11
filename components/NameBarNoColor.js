import React from "react";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const NameBarNoColor = () => {
  return (
      <div className={styles.navContainer}>
        <div className={styles.blockLsansColor}>
            <Image src={"/media/60logo.png"} width="452px" height="101px" alt="Logo for the Cosmic Sunshine" />
        </div>
      </div>
  );
};

export default NameBarNoColor;
