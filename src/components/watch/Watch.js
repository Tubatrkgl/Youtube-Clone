import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../../constant/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "../livechat/LiveChat";

const Watch = () => {
    const [input, setInput] =useState()
  const [singleVideo, setSingleVideo] = useState(null);
  const [searcParams] = useSearchParams();
  const videoId = searcParams.get("v");

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      console.log(res?.data?.items[0]);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);
  return (
    <div className="flex ml-4 justify-between w-[100%] mt-3">
      <div>
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?si=Fr8hrF6rsIpPjE7V`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">
          {singleVideo?.snippet?.title}
        </h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-[30%] mt-2">
            <div className="flex">
              <Avatar
                src="https://i.redd.it/l69d7d8m3sqa1.jpg"
                size={24}
                round={true}
                className="cursor-pointer"
              />
              <h1 className="font-bold ml-2">
                {singleVideo?.snippet?.channelTitle}
              </h1>
            </div>
            <button className="px-3 py-2 bg-gray-200 text-black font- rounded-full ">
              Subscribed
            </button>
          </div>
          <div className="flex gap-5 mt-2">
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <AiOutlineLike className="mr-5" size={22} />

              <AiOutlineDislike size={22} />
            </div>
            <div className="flex gap-2 items-center cursor-pointer bg-gray-200 px-3 py-1 rounded-full ">
              <PiShareFat size={22} />
              <span>Share</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer bg-gray-200 px-3 py-1 rounded-full">
              <TfiDownload size={20} />
              <span>Download</span>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className="w-[100%] mx-8 border border-gray-300 rounded-lg h-fit p-4">
        <div className="flex justify-between items-center">
          <h1>Top Chat</h1>
          <BsThreeDotsVertical />
        </div>
        <div className="overflow-y-auto h-[28rem]">
            <LiveChat/>
        </div>
        <div className="flex items-center justify-between border-t p-2">
          <div className="flex items-center w-[90%]">
            <div>
              <Avatar
                src="https://i.redd.it/l69d7d8m3sqa1.jpg"
                size={24}
                round={true}
                className="cursor-pointer"
              />
            </div>
            <input className="border-b border-gray-300 outline-none ml-4" type="text" placeholder="Send message..." />
          <div className="bg-gray-200 cusor-pointer p-2 rounded-full">
             <LuSendHorizonal />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
