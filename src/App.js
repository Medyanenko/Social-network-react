import React, { Component, Suspense} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import './App.css';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux"
import {initializeApp} from './redux/app-reducer.js'
import Preloader from './components/Common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends Component{
  componentDidMount(){
    this.props.initializeApp()
  }
  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'> 
          <HeaderContainer/>
          <Navbar/>
          <FriendsContainer />
          <div className='app-wrapper-content'>
          <Suspense fallback={<div><Preloader /></div>}>
          <Routes>
              <Route path='/profile/:userId' element={<ProfileContainer/>} />
              <Route path="profile/*" element={<ProfileContainer />} />
              <Route path="dialogs/*" element={<DialogsContainer />} />
              <Route path="users/"  element={<UsersContainer/>}/>
              <Route path="login/"  element={<Login/>}/>
              <Route path="/news" element= {<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
          </Routes>
          </Suspense>
          </div>
        </div> 
      </BrowserRouter>
      );
  }
}
const mapStateToProps = (state) => ({initialized: state.app.initialized})
export default connect(mapStateToProps, {initializeApp})(App);

