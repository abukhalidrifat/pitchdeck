import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.logo}>
                $DECKS
            </div>
            <div className={styles.menu}>
                <ul>
                    <li className={styles.book}>Book a session</li>
                </ul>
            </div>
        </div>
    </>
  )
}
