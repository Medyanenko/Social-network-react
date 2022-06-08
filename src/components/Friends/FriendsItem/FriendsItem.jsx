import React from "react";
import s from "./../Friends.module.css";


const FriendsItem = (props) => {
  
    return (
        <div>
          <div>
            <img src={props.avatar} />
          </div>
          <div>{props.name}</div>
        </div>
      );
};

export default FriendsItem;