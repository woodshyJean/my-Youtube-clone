import React from "react";
import { TextField, InputAdornment, IconButton, } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import './Navbar.css';

export default function Navbar(props){
    console.log(props)
    return (
        <div className={`nav-container ${props.classN}`}>

            <div className="far-left">
                <IconButton  style={{padding:'16px'}}>
                    <MenuIcon
                        style={{ color: 'white'}}
                        sx={{ fontSize: 24 }}
                    />
                </IconButton>
                <div className="logo">
                    <YouTubeIcon 
                    color={'error'}
                    sx={{ fontSize: 35, color:"red"}}
                    />
                    <div className="logo-background"></div>
                    <h1 className="youtube-name">
                        YouTube
                    </h1>
                </div>
            </div>


            <div className="middle">
                <TextField 
                fullWidth
                id="outlined-basic" 
                placeholder="Search"
                variant="outlined"
                size="small"
                style={{ backgroundColor: "hsl(0, 0%, 7%)" }}
                sx={{ input: { color: "white" }, "label": {color: "white"} }} 
                InputProps={{
                    endAdornment: <InputAdornment position="end"> 
                        <IconButton>
                        <SearchIcon
                            style={{ color: 'white' }}
                        />
                        </IconButton>
                   </InputAdornment>,
                }}
                 />
                <IconButton >
                    <KeyboardVoiceIcon
                        style={{ color: 'white' }}
                    />
                </IconButton>
            </div>

            <div className="far-right">
                <IconButton >
                   <VideoCameraFrontOutlinedIcon
                        style={{ color: 'white' }}
                   />
                </IconButton>
                

                <IconButton >
                   <GridViewOutlinedIcon
                        style={{ color: 'white' }}
                        sx={{ fontSize: 24 }}
                   />
                </IconButton>
                

                <IconButton >
                   <NotificationsNoneOutlinedIcon
                        style={{ color: 'white' }}
                   />
                </IconButton>
                

                <IconButton >
                   <AccountCircleSharpIcon
                    style={{ color: 'white', paddingRight:"16px"}}
                   />
                </IconButton>
            </div>
 
        </div>
    )

}