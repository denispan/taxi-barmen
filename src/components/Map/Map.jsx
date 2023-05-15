import React, {useEffect} from 'react';
import styles from "./Map.module.scss";
import {useYandexMap} from './useYandexMap';

const Map = () => {
  useYandexMap();

  return (
    <div className={styles.container}>
      <div id="map" className={styles.map}></div>
    </div>
  )
};

export default Map;
