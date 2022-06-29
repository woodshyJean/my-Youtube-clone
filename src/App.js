import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import {Routes, Route, Link} from "react-router-dom"
import React, {useState} from "react";
import VideoData from './MockData/Data';
import { Grid, ListItem} from '@mui/material';

function App() {

  ///Autoplay
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
  ////////////


    const [searchTerm, setSearchTerm] = useState("")
    const [searchMatch, setSearchMatch] = useState([])
    const [page, setPage] = useState({
      search: false,
      main: true,
    })

    const results = Array.from(new Set(searchMatch))
    

    const plz = function(e){
        e.preventDefault();
        setSearchMatch([]);
        let searchTerm = document.getElementById("searchBar").value.toLowerCase()
        setSearchTerm(searchTerm)
        let resultsObj = searchTerm.split(' ').reduce((a, v) => ({ ...a ,[v]: true}), {} );
        VideoData.data.filter((vid) => { 
          vid.keyWords.forEach((el) => {
              if(!resultsObj[el.toLowerCase()]){
                  return
               }
              if(resultsObj[el.toLowerCase()]){
              setSearchMatch((prev) => {
                  return [
                      ...prev,
                      vid
                      ]
                  })
              }
          })
        
      })

      setPage((prev) => {
        return {
          search: !prev.search
        }
      })

    }

    //console.log(results)

  return (
      
      <Routes>
        <Route path='/' element={<HomeLayout play={handleAutoplay} stop={handleStopAutoplay} data={VideoData} click={plz} results={results} page={page}/>}>
        </Route>
      </Routes>

  );
}

function HomeLayout(props){
  //console.log(props)
  return (
    <>

      {/*<Grid container rowSpacing={0} className="grid-container">
        <Grid item xs={12}>
          <Navbar  root={props.root} plz={props.plz} click={props.click} home={props.home}/>
        </Grid>
        <Grid item xs={1.47}>
          <Sidebar />
        </Grid>
        <Grid item xs={10.53} className="main">
          <Main  play={props.play} stop={props.stop} data={props.data.data} results={props.results} page={props.page} setPage={props.setPage} />
        </Grid>
  </Grid>*/}



      <div className="App">
        <div className='nav'>
          <Navbar classN={""} root={props.root} plz={props.plz} click={props.click} home={props.home}/>
        </div>

        <div className='test'>
          <Sidebar classN=""/>
          <Main classN="" play={props.play} stop={props.stop} data={props.data.data} results={props.results} page={props.page} setPage={props.setPage} />
        </div>
      </div>
    </>
  )
}

export default App;
