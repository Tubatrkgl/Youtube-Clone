import React, { useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../../constant/youtube";
import VideoCart from "../videocart/VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../../utils/appSlice";
const VideoContainer = () => {
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const resp = await axios.get(YOUTUBE_VIDEO_API, {
          params: {
            key: API_KEY,
          },
        });

        dispatch(setHomeVideo(resp?.data.items));
      } catch (error) {
        console.log(error);
      }
      fetchVideo();
    };
  }, []);
  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
      dispatch(setHomeVideo(res.data.items))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideoByCategory();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 my-2 py-8">
      {video.map((item) => {
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
