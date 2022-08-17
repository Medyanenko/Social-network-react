import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS ';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
      case GET_CAPTCHA_URL_SUCCESS:
        return {
          ...state,
          ...action.data,
        }
      default:
        return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
    isAuth
  }
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  data:{captchaUrl}
});

export const getAuthUserData = () => {
  return async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
      let {
        id,
        email,
        login
      } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }

  }
}
export const login = (email, password, rememberMe, setFieldValue) => {
  return async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    } 
    else{
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl())
        setFieldValue("general", data.messages.join(" "))
      } 
      
    }
    
  }
}
export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
  }
}
export const logout = () => {
  return async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }
}

export default authReducer;