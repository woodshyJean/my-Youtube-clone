import React, {useState, useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Search.css"

export default function Search(props){

    console.log(props)
    console.log(props.page)

    //const test = props.data.map((info) => {
    //    //console.log(info)
    //    return (
    //        <SearchVideo 
    //        data={info}
    //        play={props.play}
    //        stop={props.stop}
    //        />
    //    )
    //})


    return (
        <div className="search">
            <Navbar classN={'nav'} />
            <Sidebar classN={'side'}/>
            <div className="search-results">
                {test}
            </div>
        </div>
    )
}