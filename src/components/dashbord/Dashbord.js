import React from "react";
import styles from "../dashbord/Dashbord.module.css"
import { Link } from 'react-router-dom';

const Dashbord = ()=>{
 
     
    return(
        <div className="row mx-0">
            <div className="col-md-2 p-0">
                <div className={styles.nav}>
                <Link to="/dashbord" className={styles.a}>home</Link>
                <Link to="/contact" className={styles.a}>contacts</Link>
                <Link to="/Sales" className={styles.a}>sales</Link>
                </div>
            </div>
            <div className="col-md-10">
            {/* <div className={styles.home}>Welcome to Home page</div> */}
            </div>
        </div>
    )
}
export default Dashbord;

