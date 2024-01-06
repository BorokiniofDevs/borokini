import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Borokini</div>
      <div>
    <Links/>
      </div>
    </div>
  )
}

export default Navbar