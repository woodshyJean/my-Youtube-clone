import React from "react";
import {InputAdornment, IconButton, } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import "./Homebtns.css"

export default function HomeBtns(){
    return (
        <div className="homebtns-container">
            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="homebtn-btns btn">
                <HomeOutlinedIcon className="homebtn-icons"/>
                <p>Home</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="homebtn-btns btn">
                <ExploreOutlinedIcon className="homebtn-icons"/>
                <p>Explore</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="homebtn-btns btn">
                <SubscriptionsOutlinedIcon className="homebtn-icons"/>
                <p>Shorts</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="homebtn-btns btn">
                <VideoLibraryOutlinedIcon className="homebtn-icons"/>
                <p>Subscriptions</p>
            </IconButton>
        </div>
    )
}