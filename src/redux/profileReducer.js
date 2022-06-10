const ADD_POST = 'ADD-POST';
const UPDARE_POST = 'UPDATE-POST';
const ProfileReducer = (state, action) => {
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