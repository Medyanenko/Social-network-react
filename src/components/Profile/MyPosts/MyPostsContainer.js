import React from "react";
import {addPostActionCreator} from '../../../redux/profileReducer';
import {updatePostActionCreator} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return{
        profilePage : state.profilePage.posts,  
        newPostText : state.profilePage.newPostText 
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (postText) => {
            dispatch(updatePostActionCreator(postText));
        },
        addPost: () => {
           dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;