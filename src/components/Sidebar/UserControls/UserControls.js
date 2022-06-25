import React from "react";

import {InputAdornment, IconButton, } from "@mui/material";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import "./UserControls.css"

export default function UserControls(){
    return (
        <div className="usercontrols-container">
            <IconButton>
                <SettingsOutlinedIcon className="usercontrols-icons"/>
                <p>Settings</p>
            </IconButton>

            <IconButton className="userbtn-btns">
                <FlagOutlinedIcon className="usercontrols-icons"/>
                <p>Report history</p>
            </IconButton>

            <IconButton className="userbtn-btns">
                <HelpOutlineOutlinedIcon className="usercontrols-icons"/>
                <p>Help</p>
            </IconButton>

            <IconButton className="userbtn-btns">
                <FeedbackOutlinedIcon className="usercontrols-icons"/>
                <p>Send feedback</p>
            </IconButton>
        </div>
    )
}