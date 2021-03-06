import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';




const App = (props) => {
  return (
  <BrowserRouter>
    <div className='app-wrapper'> 
      <Header/>
      <Navbar/>
      <FriendsContainer store = {props.store} />
      <div className='app-wrapper-content'>
      <Routes>
          <Route path='/profile/:userId' element={<ProfileContainer store = {props.store}/>} />
          <Route path="profile/*" element={<ProfileContainer store = {props.store}/>} />
          <Route path="dialogs/*" element={<DialogsContainer store = {props.store}/>} />
          <Route path="users/"  element={<UsersContainer/>}/>
          <Route path="/news" element= {<News/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/settings" element={<Settings/>}/>
      </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
