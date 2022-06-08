import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "dialog/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <div className={s.avatar}>
        <img src={props.avatar} />
      </div>
      <NavLink to={path} className={s.link}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
