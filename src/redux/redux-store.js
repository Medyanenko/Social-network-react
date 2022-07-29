 
import { applyMiddleware, combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import SidebarReducer from "./sidebarReducer";
import UsersReducer from "./usersReducer";
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"


let reducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    sidebar:SidebarReducer,
    usersPage:UsersReducer,
    auth:authReducer

});

let store = legacy_createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;