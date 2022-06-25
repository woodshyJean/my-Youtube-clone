import React from "react";
import {InputAdornment, IconButton, } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "./SidebarSubs.css"

export default function SidebarSubs(){
    return (
        <div className="sidebarSubs-container">
            <IconButton>
                <KeyboardArrowDownOutlinedIcon className="sidebarSubs-icons"/>
                <p>Show 0 more</p>
            </IconButton>
        </div>
    )
}