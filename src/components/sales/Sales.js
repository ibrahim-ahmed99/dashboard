import React from "react";
import styles from './Sales.module.css';
import BackNav from "../BackNav/BackNav";
const Sales = ()=>{
    return(
        <div className="row mx-0">
          <BackNav/>
            <div className="col-md-10"><div className={styles.home}>Welcome to Sales page</div>
</div>
        </div>
    )
}
export default Sales;