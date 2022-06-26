import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import {Routes, Route, Link} from "react-router-dom"
import { Switch } from '@mui/material';
import React, {useEffect, useState} from "react";

function App() {
  function handleAutoplay(event){
    
    if(event){
        document.getElementById(event.target.id).play()
    }
    }

    function handleStopAutoplay(event){
        if(event){
            document.getElementById(event.target.id).pause()
        }
    }


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomeLayout play={handleAutoplay} stop={handleStopAutoplay}/>}>
        </Route>
        <Route path={`/search`} element={<Search play={handleAutoplay} stop={handleStopAutoplay}/>}>
        </Route>
      </Routes>



    </div>
  );
}

function HomeLayout(props){
  //console.log(props)
  return (
    <>
      <Navbar classN={'nav'} root={props.root}/>
      <Sidebar classN={'side'}/>
      <Main classN={'main'} play={props.play} stop={props.stop}/>
    </>
  )
}

export default App;
