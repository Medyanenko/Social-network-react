import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {addPostActionCreator} from '../../../redux/state';
import {updatePostActionCreator} from '../../../redux/state';



const MyPosts = (props) => {
  let postsElements = props.profilePage.map((p,id) => <Post key={id} message={p.message} likesCount={p.like} />)
  
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostActionCreator(text));   
  }
  
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
