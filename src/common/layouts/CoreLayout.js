import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import { Route, Routes } from 'react-router-dom';
import Search from '../components/Search';


function CoreLayout({ children , history }) {

  return (
    <div className="main">
      <SideBar />
      <Routes> 
      
      <Route path='/' exact element = {<>
      <div className="main__content">
        
        
        <Header history={history} />
        <div className="main__content__child">
          {children}
        </div>
      </div>
      <Player /> 
      </>} />
      <Route path='/search' exact element = {<Search data={'SEARCH'}/>} />
      <Route path='/favourites' exact element = {<Search data={'FAVOURITE'}/>} />
      <Route path='/playlists' exact element = {<Search data={'PLAYLIST'}/>} />
      <Route path='/charts' exact element = {<Search data={'CHARTS'}/>} />
      </Routes>
    </div>
  );
}

export default CoreLayout;
