import React from "react";
import { IconButton, } from "@mui/material";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import "./Userbtns.css"


export default function Userbtns(){
    return (
        <div className="userbtn-container">
            <IconButton className="userbtn-btns">
                <VideoLibraryOutlinedIcon className="userbtn-icons"/>
                <p>Library</p>
            </IconButton>

            <IconButton>
                <HistoryOutlinedIcon className="userbtn-icons"/>
                <p>History</p>
            </IconButton>

            <IconButton>
                <PlayCircleFilledWhiteOutlinedIcon className="userbtn-icons"/>
                <p>Your videos</p>
            </IconButton>

            <IconButton>
                <WatchLaterOutlinedIcon className="userbtn-icons"/>
                <p>Watch later</p>
            </IconButton>

            <IconButton>
                <ThumbUpOutlinedIcon className="userbtn-icons"/>
                <p>Liked videos</p>
            </IconButton>

            <div className="userbtns-showMore">
                <IconButton>
                    <KeyboardArrowDownOutlinedIcon className="userbtn-icons"/>
                    <p>Show more</p>
                </IconButton>
            </div>
            
        </div>
    )
}