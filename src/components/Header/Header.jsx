import React from 'react';
import styles from "./Header.module.scss";
import CarsFree from '../CarsFree/CarsFree';
import Notice from '../Notice/Notice';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="https://frantsuz-club.ru/wp-content/uploads/2021/02/logotip-franzucz-4.png" />
      <CarsFree />
      <Notice />
    </div>
  )
};


export default Header;
