import React from "react";
import { useSelector } from "react-redux";
import ChatMessage from "../chatmessage/ChatMessage";

const LiveChat = () => {
  const messages = useSelector((store) => store.chat.messages);

  return (
    <div className="px-4 py-1">
      <div>
        {messages.map((item, idx) => (
          <ChatMessage key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
