import React, { useEffect, useState} from "react";
import { TextField, InputAdornment, IconButton, } from "@mui/material";
import  {Link} from "react-router-dom"
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

    //console.log(props)
    return (
        <div className={`nav-container ${props.classN}`}>

            <div className="far-left">
                <IconButton  style={{padding:'16px'}}>
                    <MenuIcon
                        style={{ color: 'white'}}
                        sx={{ fontSize: 24 }}
                    />
                </IconButton>

                <Link to="/" className="logo">
                    <YouTubeIcon 
                    color={'error'}
                    sx={{ fontSize: 35, color:"red"}}
                    />
                    <div className="logo-background"></div>
                    <h1 className="youtube-name">
                        YouTube
                    </h1>
                </Link>
            </div>


            <form id="searchForm" className="middle" onSubmit={props.submit}>
                <TextField
                type={"text"}
                name={"searchBar"}
                onChange={props.getSearch} 
                fullWidth
                id="searchBar" 
                placeholder="Search"
                variant="outlined"
                size="small"
                style={{ backgroundColor: "hsl(0, 0%, 7%)" }}
                sx={{ input: { color: "white" }, "label": {color: "white"} }} 
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton onClick={props.click} id="searchButton" type="submit">
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
            </form>


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










    //console.log(props)
//
    //const [searchTerm, setSearchTerm] = useState("")
    //const [searchMatch, setSearchMatch] = useState([])
    //const results = Array.from(new Set(searchMatch))
//
    //function getSearchTerm(event){
    //    //console.log(event.target.value)
    //    setSearchTerm(event.target.value)
    //}
//
    //function handleSubmit(event){
    //    event.preventDefault();
    //    setSearchMatch([])
    //    let tArr = searchTerm.split(' ').reduce((a, v) => ({ ...a ,[v]: true}), {} )
    //    props.data.filter((vid) => {  
    //        vid.keyWords.forEach((el, i) => {
    //            if(!tArr[el]){
    //                return
    //             }
//
    //            if(tArr[el]){
    //            setSearchMatch((prev) => {
    //                return [
    //                    ...prev,
    //                    vid
    //                    ]
    //                })
    //            }
    //        })
    //    
    //    })
    //}
    ////console.log(searchMatch)
    ////console.log(Array.from(new Set(searchMatch)))
    //console.log(results)