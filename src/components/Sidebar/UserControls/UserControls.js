import React from "react";

import {IconButton} from "@mui/material";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import "./UserControls.css"

export default function UserControls(){
    return (
        <div className="usercontrols-container">
            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="btn">
                <SettingsOutlinedIcon className="usercontrols-icons"/>
                <p>Settings</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="userbtn-btns btn">
                <FlagOutlinedIcon className="usercontrols-icons"/>
                <p>Report history</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="userbtn-btns btn">
                <HelpOutlineOutlinedIcon className="usercontrols-icons"/>
                <p>Help</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="userbtn-btns btn">
                <FeedbackOutlinedIcon className="usercontrols-icons"/>
                <p>Send feedback</p>
            </IconButton>
        </div>
    )
}