import React from "react";
import s from "./../Friends.module.css";


const FriendsItem = (props) => {
  
    return (
        <div className={s.friendsItem}>
          <div>
            <img src={props.avatar} alt="avatar" />
          </div>
          <div>{props.name}</div>
        </div>
      );
};

export default FriendsItem;