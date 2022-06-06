import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg" />
        {props.message}
        <div>
          <span>like </span>
          {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
