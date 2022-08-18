import React from "react";
import {Link} from 'react-router-dom'
import s from "./NotFound.module.css"

const NotFound  = () => {
    return(
        <div className={s.notFoundBlock}>
         <div> ...Page 404</div>
         <div>< br /></div>
         <div>
            <Link to='/'>
               Go to main page
            </Link>
         </div>
      </div>
    )
}

export default NotFound;


