import React from "react";
import Avatar from "react-avatar";

const VideoCart = () => {
  return (
    <div className="w-94 cursor-pointer">
      <img
        className="rounded-xl w-full"
        src="https://avatars.mds.yandex.net/i?id=2a0000017a0630a79b766fa4cf2e72388e35-5177029-images-thumbs&n=13"
        alt="vide"
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
            <h1 className="font-bold">Master React with Patel Programmer </h1>
            <p className="text-xs text-gray-500">Patel Programmer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
