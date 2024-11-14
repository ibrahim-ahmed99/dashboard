import React from "react";
import styles from "./HomePage.module.css";
import FrontNav from "../FronNav/FrontNav";
const HomePage = ()=>{
    return(
        <div>
          <FrontNav/>
            <h1 className={styles.h1}>welcome to HomePage</h1>
        </div>
    )
}
export default HomePage;