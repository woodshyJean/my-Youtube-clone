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
            <IconButton>
                <LocalMoviesOutlinedIcon className="morebtns-icons"/>
                <p>Movies & shows</p>
            </IconButton>

            <IconButton>
                <SportsEsportsOutlinedIcon className="morebtns-icons"/>
                <p>Gaming</p>
            </IconButton>

            <IconButton>
                <SettingsInputAntennaOutlinedIcon className="morebtns-icons"/>
                <p>Live</p>
            </IconButton>

            <IconButton>
                <EmojiEventsOutlinedIcon className="morebtns-icons"/>
                <p>Sports</p>
            </IconButton>
        </div>
    )
}