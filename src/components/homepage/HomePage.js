import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
const HomePage = ()=>{
    return(
        <div>
            <div className={styles.navBar}>
      <Link to="/login" className={styles.link} >Login</Link>
      <Link to="/" className={styles.link} >Home</Link>
      <Link to="/ContactUs" className={styles.link} >Contact</Link>
    </div>
    <h1>welcome to HomePage</h1>
        </div>
    )
}
export default HomePage;