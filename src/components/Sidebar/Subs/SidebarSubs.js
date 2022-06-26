import React from "react";
import {IconButton} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "./SidebarSubs.css"

export default function SidebarSubs(){
    return (
        <div className="sidebarSubs-container">
            <IconButton style={{justifyContent:"start", minWidth:"200px"}}>
                <KeyboardArrowDownOutlinedIcon className="sidebarSubs-icons"/>
                <p>Show 0 more</p>
            </IconButton>
        </div>
    )
}