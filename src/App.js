import React, { Component, Suspense} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom"; 
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import NotFound from './components/Common/NotFound/NotFound';
import Login from './components/Login/Login';
import {connect} from "react-redux"
import {initializeApp} from './redux/app-reducer.js'
import Preloader from './components/Common/Preloader/Preloader';
import { Navigate } from 'react-router-dom';

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
      <HashRouter>
        <HeaderContainer/>
        <div className='app-wrapper'> 
          <Navbar/>
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
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
          </Suspense>
          </div>
          <FriendsContainer />
        </div> 
      </HashRouter>
      );
  }
}
const mapStateToProps = (state) => ({initialized: state.app.initialized})
export default connect(mapStateToProps, {initializeApp})(App);

