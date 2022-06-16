 
import { combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import SidebarReducer from "./sidebarReducer";
import UsersReducer from "./usersReducer";


let reducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    sidebar:SidebarReducer,
    usersPage:UsersReducer

});

let store = legacy_createStore(reducer);

export default store;