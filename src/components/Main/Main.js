import React, {useEffect} from "react";

import VideoCard from "../VideoCard/VideoCard";
import VideoData from "../../MockData/Data";

import "./Main.css"


export default function Main(props){

    //console.log(props)

    const [data, setData] = React.useState(VideoData)

    
    function handleAutoplay(event){
        console.log(event)
        console.log(event.target.id)
        //const dateNow = new Date()
        //const dateLater = +new Date() +2000
        //
        //console.log(new Date(dateNow), new Date(dateLater));
        //const found = data.find(element => {
        //    return element.key === +event.target.id
        //})
        //console.log(found)
        //let test = event.target.classList.toString()

        //setData((prev) => {
        //    return [
        //        ...prev,
        //    ]
        //})

        //console.log(test)
        //console.log(document.querySelector(`.${test}`))
        if(event){
            document.getElementById(event.target.id).play()
        }
    }

    function handleStopAutoplay(event){
        if(event){
            document.getElementById(event.target.id).pause()
        }
    }

    const VideoRender = data.map((data) => {
        return <VideoCard
      
          src={data.video}
          picsrc={data.userPic}
          title={data.title}
          user={data.user}
          views={data.views}
          date={data.uploadDate}
          handleAutoplay={handleAutoplay}
          handleStopAutoplay={handleStopAutoplay}
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