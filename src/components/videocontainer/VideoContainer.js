import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../../constant/youtube";
import VideoCart from "../videocart/VideoCart";
const VideoContainer = () => {

  const [videoData, setVideoData] =useState([]);

  useEffect(() => {
 const fetchVideo =async ()=>{
  try {
    const resp = await axios.get(YOUTUBE_VIDEO_API,{
      params:{
        key:API_KEY,
      }
    });
   setVideoData(resp?.data.items);
  } catch (error) {
    console.log(error)
  }
 }
 fetchVideo();
  }, [])
  
  return (
  <div className="grid grid-cols-3 gap-4 my-2 py-8" >
{
  videoData.map((item)=>{
    return(
      <VideoCart key={item.id} item={item}/>
    )
  })
}
  </div>
  )
};

export default VideoContainer;
