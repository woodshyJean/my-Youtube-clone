import React, {useEffect, useState} from "react";
import "./SearchVideo.css"

export default function SearchVideo(props){

    return (
        <div className="searchVideo-container">
            <video key={props.data.key} id={props.data.key} controls={props.control}  muted={true} onMouseEnter={props.play} onMouseLeave={props.stop} className="searchVideo-thumb">
                <source src={props.data.video} type="video/mp4"/>
            </video>
            <div className="searchVideo-info-container">
                <div className="searchVideo-info">
                    <p className="searchVideo-title">
                        {props.data.title}
                    </p>

                    <div className="searchVideo-analytics">
                        <p className="searchVideo-views">
                            <span className="searchVideo-views-number">{props.data.views}</span> views •
                        </p>
                        <p className="searchVideo-date">
                            {props.data.uploadDate}
                        </p>
                    </div>

                    <div className="searchVideo-user-prof-photo-container">
                        <img  className="searchVideo-user-prof-photo" src={props.data.userPic} alt=""></img>
                        <p className="searchVideo-user">
                            {props.data.user}
                        </p>
                    </div>

                    <div className="searchVideo-description-container">
                        <p className="searchVideo-description">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}