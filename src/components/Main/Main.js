import React, {useEffect} from "react";

import VideoCard from "../VideoCard/VideoCard";
import VideoData from "../../MockData/Data";

import "./Main.css"


export default function Main(props){

    //console.log(props)

    const [data, setData] = React.useState(VideoData.data)

    const VideoRender = data.map((data) => {
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


    return (
        <div className={`main-container ${props.classN}`}>
            {VideoRender}
        </div>
    )
}