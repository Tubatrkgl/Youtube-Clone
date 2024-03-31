import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({ item }) => {
  return (
    <div className="flex items-center">
      <div>
        <Avatar
          src="https://www.shareicon.net/data/2016/05/26/771203_man_512x512.png"
          size={24}
          round={true}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 font-bold text-sm">{item.name}</h1>
        <p className="ml-2 py-2 text-sm">{item.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
