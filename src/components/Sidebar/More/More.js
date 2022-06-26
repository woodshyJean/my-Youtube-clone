import React from "react";
import {IconButton, } from "@mui/material";
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SettingsInputAntennaOutlinedIcon from '@mui/icons-material/SettingsInputAntennaOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import "./More.css"

export default function More(){
    return (
        <div className="morebtns-container">
            <IconButton style={{justifyContent:"start", minWidth:"200px"}}>
                <LocalMoviesOutlinedIcon className="morebtns-icons"/>
                <p>Movies & shows</p>
            </IconButton>

            <IconButton style={{justifyContent:"start", minWidth:"200px"}}>
                <SportsEsportsOutlinedIcon className="morebtns-icons"/>
                <p>Gaming</p>
            </IconButton>

            <IconButton style={{justifyContent:"start", minWidth:"200px"}}>
                <SettingsInputAntennaOutlinedIcon className="morebtns-icons"/>
                <p>Live</p>
            </IconButton>

            <IconButton style={{justifyContent:"start", minWidth:"200px"}}>
                <EmojiEventsOutlinedIcon className="morebtns-icons"/>
                <p>Sports</p>
            </IconButton>
        </div>
    )
}