import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackNav.module.css";
const BackNav =()=>{

    return(
        <div className="col-md-2 p-0">
        <div className={styles.nav}>
        <Link to="/dashbord" className={styles.a}>home</Link>
        <Link to="/contact" className={styles.a}>contacts</Link>
        <Link to="/Sales" className={styles.a}>sales</Link>
        </div>
    </div>
    )
}
export default BackNav;