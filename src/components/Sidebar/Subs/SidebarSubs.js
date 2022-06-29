import React from "react";
import {IconButton} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShowMore from "../ShowMore/ShowMore";
import "./SidebarSubs.css"
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

export default function SidebarSubs(){

    return (
        <div className="sidebarSubs-container">
            <ShowMore
                text={`Show 0 more`}
            />
        </div>
    )
}