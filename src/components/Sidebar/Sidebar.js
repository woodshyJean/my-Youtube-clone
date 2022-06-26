import React from "react";
import HomeBtns from "./homebtns/Homebtns";
import Userbtns from "./Userbtns/Userbtns";
import SidebarSubs from "./Subs/SidebarSubs";
import More from "./More/More";
import UserControls from "./UserControls/UserControls";
import About from "./About/About";

import "./Sidebar.css"

export default function Sidebar(props){
    //console.log(props)
    return (
        <div className={`sidebar-container ${props.classN}`}>
            <HomeBtns/>
            <hr className="sidebar-seperator"></hr>
            <Userbtns/>
            <hr className="sidebar-seperator"></hr>
            <SidebarSubs/>
            <hr className="sidebar-seperator"></hr>
            <More/>
            <hr className="sidebar-seperator"></hr>
            <UserControls/>
            <hr className="sidebar-seperator"></hr>
            <About/>
        </div>
    )
}