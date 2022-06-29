import React from "react";
import { IconButton, } from "@mui/material";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ShowMore from "../ShowMore/ShowMore.js";

import "./Userbtns.css"


export default function Userbtns(){

    const testArr = ["asasdad","asasdad", "asasdad", "asasdad", "asasdad", "asasdad", "asasdad", "asasdad", "asasdad" ]

    const test = testArr.map(el => {
        return (
            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="btn">
                    <PlaylistPlayIcon className="userbtn-icons"/>
                    <p>{el}</p>
            </IconButton>
        )
    })


    return (
        <div className="userbtn-container">
            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="userbtn-btns btn">
                <VideoLibraryOutlinedIcon className="userbtn-icons"/>
                <p>Library</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="btn">
                <HistoryOutlinedIcon className="userbtn-icons"/>
                <p>History</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="btn">
                <PlayCircleFilledWhiteOutlinedIcon className="userbtn-icons"/>
                <p>Your videos</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="btn">
                <WatchLaterOutlinedIcon className="userbtn-icons"/>
                <p>Watch later</p>
            </IconButton>

            <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} className="btn">
                <ThumbUpOutlinedIcon className="userbtn-icons"/>
                <p>Liked videos</p>
            </IconButton>

            <ShowMore
                text={`Show more`}
                data={test}
            />
        </div>
    )
}