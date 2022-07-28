import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://www.clipartmax.com/png/full/39-395435_3d-art-logo-design-free-logos-online-logo-design-free-png.png" alt="img-logo"></img>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
