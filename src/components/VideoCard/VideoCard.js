import React from "react";

import "./VideoCard.css"

export default function VideoCard(props){
    //console.log(props)
    return (
        <div className="videoCard-container">
            <video id={props.vidkey} controls={props.control} autoplay={props.autoplay} muted={true} onMouseEnter={props.handleAutoplay} onMouseLeave={props.handleStopAutoplay} className="video-thumb">
                <source src={props.src} type="video/mp4"/>
            </video>
            <div className="video-info-container">
                <div className="user-prof-photo-container">
                    <img  className="user-prof-photo" src={props.picsrc} alt=""></img>
                </div>
                <div className="video-info">
                    <p className="video-title">
                        {props.title}
                    </p>
                    <p className="video-user">
                        {props.user}
                    </p>

                    <div className="video-analytics">
                        <p className="video-views">
                            {props.views} views •
                        </p>
                        <p className="video-date">
                            {props.date}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}