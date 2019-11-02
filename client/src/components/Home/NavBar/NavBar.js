import React from 'react';
import styles from './NavBar.module.css'

const NavBar = () => {

  return (<div className={styles.NavBar}>
      <div className={styles.Link}>About</div>
      <div className={styles.Link}>Contact</div>
      <div className={styles.Login}>Login</div>
    </div>

  )

}
export default NavBar;