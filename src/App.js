import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import {Routes, Route, Link} from "react-router-dom"
import React, {useState} from "react";
import VideoData from './MockData/Data';

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
        let searchTerm = document.getElementById("searchBar").value
        setSearchTerm(searchTerm.toLowerCase())
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
    <div className="App">
      
      <Routes>
        <Route path='/' element={<HomeLayout play={handleAutoplay} stop={handleStopAutoplay} data={VideoData} click={plz} results={results} page={page}/>}>
        </Route>
      </Routes>



    </div>
  );
}

function HomeLayout(props){
  //console.log(props)
  return (
    <>
      <Navbar classN={'nav'} root={props.root} plz={props.plz} click={props.click} home={props.home}/>
      <Sidebar classN={'side'}/>
      <Main classN={'main'} play={props.play} stop={props.stop} data={props.data.data} results={props.results} page={props.page} setPage={props.setPage} />
    </>
  )
}

export default App;
