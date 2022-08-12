import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://gd-8.com/wp-content/uploads/2015/06/design-1200x480.png" alt="img-logo"></img>
      <div className={s.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>  
        : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
