import React from "react";
import preloader from "../../../assets/img/preloader.gif";
import s from "./Preloader.module.css";

let Preloader = (props) => {
    return( 
    <div className={s.Preloader} >
        <img src={preloader} alt="preloader"/>
    </div>
    )
 
}

export default Preloader;