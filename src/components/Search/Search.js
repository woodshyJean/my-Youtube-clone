import React, {useState, useEffect} from "react";
import SearchVideo from "./SearchVideo/SearchVideo";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import VideoData from "../../MockData/Data";
import "./Search.css"

export default function Search(props){

    //console.log(props)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchMatch, setSearchMatch] = useState([])

    const results = Array.from(new Set(searchMatch))

    useEffect(() => {
        const form = document.getElementById("searchForm")
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let searchTerm = document.getElementById("searchBar").value
            setSearchTerm(searchTerm.toLowerCase())
        })
    })

    function getMatches(){
        setSearchMatch([]);
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
    }

    const test = results.map((info) => {
        //console.log(info)
        return (
            <SearchVideo 
            data={info}
            play={props.play}
            stop={props.stop}
            />
        )
    })

    return (
        <div className="search">
            <Navbar classN={'nav'} submit={getMatches}/>
            <Sidebar classN={'side'}/>
            <div className="search-results">
                {test}
            </div>
        </div>
    )
}