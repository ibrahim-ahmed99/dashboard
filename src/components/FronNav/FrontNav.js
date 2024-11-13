import React from "react";
import { Link } from "react-router-dom";
import styles from "./FrontNav.module.css" ;
const FrontNav = ()=>{
    <div className={styles.navBar}>
      <Link to="/login" className={styles.link}>Login</Link>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/ContactUs" className={styles.link}>Contact</Link>
    </div>
}

export default FrontNav;