import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {addPostActionCreator} from '../../../redux/profileReducer';
import {updatePostActionCreator} from '../../../redux/profileReducer';



const MyPosts = (props) => {
  let postsElements = props.profilePage.map((p,id) => <Post key={id} message={p.message} likesCount={p.like} />)
  
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let postText = newPostElement.current.value;
    props.updateNewPostText(postText)
  }
  
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
