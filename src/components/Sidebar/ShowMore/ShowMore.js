import React, {useEffect, useState} from "react";
import { IconButton, } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./ShowMore.css"

export default function ShowMore(props){

    //console.log(props.data)

    let [status, setStatus] = useState({
        shown:true,
        hidden:false
    })

    function handleShowMore(){
        setStatus((prev) => {
            return {
                shown:!prev.shown,
                hidden:!prev.hidden,
            }
        })
    }

    function handleShowLess(){
        setStatus((prev) => {
            return {
                shown:!prev.shown,
                hidden:!prev.hidden,
            }
        })
    }


    return (
        <div className="userbtns-showMore">
            {status.shown && <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} onClick={handleShowMore} className="btn">
                <KeyboardArrowDownOutlinedIcon className="userbtn-icons"/>
                <p>{props.text}</p>
            </IconButton>}
            
            {!status.shown && (
            <div className="showmore-playlist-container">
                {/*<IconButton style={{justifyContent:"start", minWidth:"200px"}}>
                    <PlaylistPlayIcon className="userbtn-icons"/>
                    <p>Test</p>
            </IconButton>*/}

                {props.data}

                <div className="userbtns-showMore">
                    <IconButton disableRipple style={{justifyContent:"start", minWidth:"200px" , borderRadius:"0%"}} onClick={handleShowLess} className="btn">
                        <KeyboardArrowUpIcon className="userbtn-icons"/>
                        <p>Show less</p>
                    </IconButton>
                </div>
            </div>)}
        </div>
    )
}