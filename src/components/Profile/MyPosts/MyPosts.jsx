import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Formik, Form, Field} from "formik";


const MyPosts = (props) => {
  let postsElements = props.profilePage.map((p,id) => <Post key={id} message={p.message} likesCount={p.like} />)
   
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
        <AddPostForm addPost={props.addPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};
const AddPostForm = (props) => {
    let addNewPost = (values) => {    
     props.addPost( values );    
  }
  return (
     <Formik
        initialValues={{
          newPostText: ""
        }}
        onSubmit={(values, {resetForm}) => {
          addNewPost( values.newPostText );
           resetForm( {values: ''} );
        }
        }
     >
        {() => (
           <Form>
              <div>
                 <Field
                    name={'newPostText'}
                    as={'textarea'}
                    placeholder={'enter text'}
                 />
              </div>

              <button type={'submit'}>Add Post</button>
           </Form>
        )}
     </Formik>
  )
}
export default MyPosts;
