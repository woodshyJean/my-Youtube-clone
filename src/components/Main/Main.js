import React from "react";

import VideoCard from "../VideoCard/VideoCard";
import SearchVideo from "../../Pages/Search/SearchVideo/SearchVideo";
//import VideoData from "../../MockData/Data";

import "./Main.css"


export default function Main(props){

    //console.log(props)

    const VideoRender = props.data.map((data) => {
        return <VideoCard
      
          src={data.video}
          picsrc={data.userPic}
          title={data.title}
          user={data.user}
          views={data.views}
          date={data.uploadDate}
          handleAutoplay={props.play}
          handleStopAutoplay={props.stop}
          control={data.videocontrols}
          autoplay={data.autoplay}
          vidkey={data.key}
  
        />
        
    })

    const test2 = props.results.map((info) => {
        //console.log(info)
        return (
            <SearchVideo 
            data={info}
            play={props.play}
            stop={props.stop}
            />
        )
    })



    //console.log(test2)


    return (
        <div className={`main-container ${props.classN}`}>
            {props.page.main ? VideoRender  : test2}
        </div>
    )
}