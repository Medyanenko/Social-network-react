import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import s from "./Friends.module.css";


const Friends = ({friends}) => {
  let FriendsElements = friends.filter((obj) => obj.followed === true).map((s, id) => (
    <FriendsItem key={id} name={s.name} avatar={s.avatar} />
  ));
  return(
  <div className={s.friends}>
    <div className={s.friendsTitle}>Friends</div>
    <div className={s.friendsBlock}>
      {FriendsElements}
    </div>
  </div>
  )
};

export default Friends;
