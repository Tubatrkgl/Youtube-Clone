import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../../constant/youtube";
import VideoCart from "../videocart/VideoCart";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const resp = await axios.get(YOUTUBE_VIDEO_API, {
          params: {
            key: API_KEY,
          },
        });
        setVideoData(resp?.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 my-2 py-8">
      {videoData.map((item) => {
        return (
          <Link key={item.id} to={`/watch?v=${item.id}`}>
            <VideoCart item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
