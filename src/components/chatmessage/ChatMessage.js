import React from "react";
import Avatar from "react-avatar";
// import { LuSendHorizonal } from "react-icons/lu";
const ChatMessage = () => {
  return (
    <div className="flex items-center">
      <div>
        {/* <LuSendHorizonal /> */}
        <Avatar
          src="https://www.shareicon.net/data/2016/05/26/771203_man_512x512.png"
          size={24}
          round={true}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 font-bold text-sm">Patel</h1>
        <p className="ml-2 py-2 text-sm">İnformative video</p>
      </div>
    </div>
  );
};

export default ChatMessage;
