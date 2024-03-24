import React from "react";
import Avatar from "react-avatar";

const VideoCart = ({item}) => {
  return (
    <div className="w-94 cursor-pointer my-2">
      <img
        className="rounded-xl w-full"
        src={item.snippet.thumbnails.high.url}
        alt="video"
      />
      <div>
        <div className="flex mt-2">
          <Avatar
            src="https://i.redd.it/l69d7d8m3sqa1.jpg"
            size={24}
            round={true}
            className="cursor-pointer"
          />
          <div className="ml-2">
            <h1 className="font-bold">{item.snippet.title}</h1>
            <p className="text-xs text-gray-500">{item.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
