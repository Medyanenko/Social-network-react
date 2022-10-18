import {getAuthUserData} from './auth-reducer.js'
type initializedSuccessType = {
  id: number,
  type: 'INITIALIZED_SUCCESS'
}
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type initialStateType = {
  initialized: boolean
}

let initialState:initialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action:initializedSuccessType) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
      default:
        return state;
  }
}

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});

export const initializeApp = () => {
  return (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
      dispatch(initializedSuccess());
    })
  }
}

export default appReducer;