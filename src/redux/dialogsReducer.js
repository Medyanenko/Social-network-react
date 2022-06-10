const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const DialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMesage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMesage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageActionCreator = (messageText) => ({ type: UPDATE_MESSAGE, newMessage: messageText});

export default DialogsReducer;