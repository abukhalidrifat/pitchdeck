import React from "react";
import styles from "./AboutMe.module.css";
import aboutMe from "../../icons/aboutMe.jpg";

export default function AboutMe() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <p className={styles.first}>Hello, I am Adib!</p>
          <p className={styles.second}>
            Taking your pitch deck game to next level
          </p>
          <p className={styles.third}>
            ​Adib Ahnaf is the Founder of DollarDecks. He is the co-founder and
            CEO of Socian AI raising a total of 2.5M$ as of now. He has mentored
            some of the finest startups in creating perfect pitch decks at
            LaunchX, LvlUp, and Kickass Ventures.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={aboutMe} alt="Adib" />
        </div>
      </div>
    </>
  );
}
