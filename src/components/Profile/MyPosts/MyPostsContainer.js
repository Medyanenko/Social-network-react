import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {addPostActionCreator} from '../../../redux/profileReducer';
import {updatePostActionCreator} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () =>{
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (postText) => {
        let action = updatePostActionCreator(postText);
        props.store.dispatch(action);   
      }
    return(
        <MyPosts 
        addPost={addPost} 
        updateNewPostText = {onPostChange} 
        profilePage={state.profilePage.posts} 
        newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;
