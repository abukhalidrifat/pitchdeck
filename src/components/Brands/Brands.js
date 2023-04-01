import React from "react";
import styles from "./Brand.module.css";
import brand1 from "../../icons/brand1.jpg";

export default function Brands() {
  const brandData = [
    brand1,
    brand1,
    brand1,
    brand1,
  ];
  return (
    <>
      <div className={styles.container}>
        <p>Brands &amp; Partnership</p>
        <div className={styles.imgWrapper}>
          {brandData.map((data) => (
            <div style={{ display:'flex' }}>
              <img src={data} alt="brand" />
              {/* <div className={styles.border}></div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
