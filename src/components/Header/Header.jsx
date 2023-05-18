import React from 'react';
import styles from "./Header.module.scss";
import CarsFree from '../CarsFree/CarsFree';
import Notice from '../Notice/Notice';
import mainLogo from "../../assets/img/logo-franc.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={mainLogo} />
      <CarsFree />
      <Notice />
    </header>
  )
};

export default Header;
