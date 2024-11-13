import React from "react";
import BackNav from "../BackNav/BackNav";
import styles from "./Dashbord.module.css";
const Dashbord = ()=>{    
    return(
        <div className="row mx-0">
          <BackNav/>
            <div className="col-md-10">
            <div className={styles.home}>Welcome to Home page</div>
            </div>
        </div>
    )
}
export default Dashbord;

