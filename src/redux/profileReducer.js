const ADD_POST = 'ADD-POST';
const UPDARE_POST = 'UPDATE-POST';

let initialState = {
    posts: [{
        id: 1,
        message: 'Hi',
        like: '15'
      },
      {
        id: 2,
        message: 'Hola',
        like: '20'
      }
    ],
    newPostText: "5000$"
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDARE_POST:
            state.newPostText = action.newPost;
            return state;
        default:
            return state;
    }
    
}
    export const addPostActionCreator = () => ({type: ADD_POST});
    export const updatePostActionCreator = (postText) => ({ type: UPDARE_POST, newPost: postText});
export default ProfileReducer;