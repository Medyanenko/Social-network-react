 
import { applyMiddleware, combineReducers, legacy_createStore, compose} from "redux";
import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import SidebarReducer from "./FriendsReducer";
import UsersReducer from "./usersReducer";
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk"


let reducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    friendsBlock:SidebarReducer,
    usersPage:UsersReducer,
    auth:authReducer,
    app:appReducer
});
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;