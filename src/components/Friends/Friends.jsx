import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import s from "./Friends.module.css";

const Friends = (props) => {
  let FriendsElements = props.state.map((s, id) => (
    <FriendsItem key={id} name={s.name} avatar={s.avatar} />
  ));
  return(
  <div className={s.friends}>
    <h3>Friends</h3>
    <div className={s.friendsBlock}>
      {FriendsElements}
    </div>
  </div>
  )
};

export default Friends;
