import React from "react";
import styles from './WhatIdo.module.css'


export default function WhatIdo(props) {
  return (
    <>
        <div className={styles.container}>
          <div className={styles.title}>
            <img src={props.image} alt={props.image} width={40} style={{ marginRight:'10px' }}/>
            <p>{props.title}</p>
          </div>
          <div className={styles.subTitle}>
            <p>
              {props.subTitle}
            </p>
          </div>
        </div>
    </>
  );
}
