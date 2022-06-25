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
            <IconButton className="homebtn-btns">
                <HomeOutlinedIcon className="homebtn-icons"/>
                <p>Home</p>
            </IconButton>

            <IconButton className="homebtn-btns">
                <ExploreOutlinedIcon className="homebtn-icons"/>
                <p>Explore</p>
            </IconButton>

            <IconButton className="homebtn-btns">
                <SubscriptionsOutlinedIcon className="homebtn-icons"/>
                <p>Shorts</p>
            </IconButton>

            <IconButton className="homebtn-btns">
                <VideoLibraryOutlinedIcon className="homebtn-icons"/>
                <p>Subscriptions</p>
            </IconButton>
        </div>
    )
}