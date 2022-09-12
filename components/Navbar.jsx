import styles from "../styles/Navbar.module.css"
import React from 'react'
import Image from "next/image"


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32"></Image>
         
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>01757865368</div>
        </div>
       
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width="160" height="69"></Image>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blogs</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30" height="30"></Image>
        </div>
        <div className={styles.counter}>2</div>
      </div>
    
      
    </div>
  )
}

export default Navbar