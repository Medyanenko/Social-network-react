const ADD_POST = 'ADD-POST';
const UPDARE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: "5000$",
    profile: null
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDARE_POST:
            return {
                ...state,
                newPostText: action.newPost
            };
        case SET_USER_PROFILE:
            return{
                ...state, 
                profile: action.profile
            }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updatePostActionCreator = (postText) => ({
    type: UPDARE_POST,
    newPost: postText
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export default ProfileReducer;