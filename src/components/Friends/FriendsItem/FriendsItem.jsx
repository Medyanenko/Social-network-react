import React from "react";
import s from "./../Friends.module.css";
import userPhoto from "./../../../assets/img/user.png"


const FriendsItem = (props) => {
  
    return (
        <div className={s.friendsItem}>
          <div>
            <img src={props.photos != null ? props.photos : userPhoto} alt="avatar" />
          </div>
          <div>{props.name}</div>
        </div>
      );
};

export default FriendsItem;