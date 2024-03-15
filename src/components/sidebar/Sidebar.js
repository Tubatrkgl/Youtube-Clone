import React from "react";
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineScissors } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import Avatar from "react-avatar";
import { HiTrendingUp } from "react-icons/hi";
import { MdOutlineMusicNote } from "react-icons/md";
import { BsSoundwave } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";

const Sidebar = () => {
  const SideItem = [
    {
      icons: <CiHome size={22} />,
      title: "Home",
    },
    {
      icons: <SiYoutubeshorts size={22} />,
      title: "Short",
    },
    {
      icons: <MdOutlineSubscriptions size={22} />,
      title: "Subscription",
    },
    {
      icons: <SiYoutubemusic size={22} />,
      title: "Youtube Music",
    },
    {
      icons: <hr className="my-2 border-t-2 border-gray-300 w-full" />,
    },
    {
      icons: <MdKeyboardArrowRight size={22} />,
      title: "You",
    },
    {
      icons: <RxAvatar size={22} />,
      title: "your channel",
    },
    {
      icons: <RxCounterClockwiseClock size={22} />,
      title: "Past",
    },
    {
      icons: <RiVideoLine size={22} />,
      title: "Your Videos",
    },
    {
      icons: <MdOutlineWatchLater size={22} />,
      title: "watch later",
    },
    {
      icons: <LiaDownloadSolid size={22} />,
      title: "Downloads",
    },
    {
      icons: <HiOutlineScissors size={22} />,
      title: "Your clips",
    },
    {
      icons: <MdKeyboardArrowDown size={22} />,
      title: "Show more",
    },
    {
      icons: <hr className="my-2 border-t-2 border-gray-300 w-full" />,
    },
    {
      title: "Subscriptions",
    },
    {
      icons: <Avatar name="John" size="30" round={true} />,
      title: "Theodore",
    },
    {
      icons: <Avatar name="William" size="30" round={true} />,
      title: "John",
    },
    {
      icons: <Avatar name="Emily" size="30" round={true} />,
      title: "Emily",
    },
    {
      icons: <Avatar name="Zanchk" size="30" round={true} />,
      title: "Zanchk",
    },
    {
      icons: <MdKeyboardArrowDown size={22} />,
      title: "show 55 more",
    },
    {
      icons: <hr className="my-2 border-t-2 border-gray-300 w-full" />,
    },
    {
      title: "Discover",
    },
    {
      icons: <HiTrendingUp size={22} />,
      title: "Trends",
    },
    {
      icons: <MdOutlineMusicNote size={22} />,
      title: "Music",
    },
    {
      icons: <BsSoundwave size={22} />,
      title: "Live",
    },
    {
      icons: <IoGameControllerOutline size={22} />,
      title: "Game",
    },
    {
      icons: <GiTrophyCup size={22} />,
      title: "Sport",
    },
    {
        icons: <hr className="my-2 border-t-2 border-gray-300 w-full" />
    },
    {
      title: "More content from...",
    },
    {
       icons: <Avatar
        src="https://static.vecteezy.com/system/resources/previews/017/395/382/original/youtube-studio-icons-free-png.png"
        size={26}
        round={true}
        className="cursor-pointer"
      />,
      title:"Youtube Studio"
     },
    {
      icons:<Avatar
      src="https://static.vecteezy.com/system/resources/previews/017/396/813/original/youtube-music-icon-free-png.png"
      size={26}
      round={true}
      className="cursor-pointer"/>,
      title: "Youtube Music"
    },
    {
        icons:<Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XN1oKItYMW5vRm8SIePH1qtG3sLkVK0W2TdWHDK9pK3-jWSJ0c8Z__GMaS-rSh8Td2M&usqp=CAU"
        size={26}
        round={true}
        className="cursor-pointer"/>,
      title: "Youtube Kids",
    },
  ];

  return (
    <div className="relative left-0 w-auto p-5 h-[calc(100vh-4.625rem)] ml-4
    mt-6 overflow-y-scroll overflow-x-hidden">
      {SideItem.map((item, index) => { 
        return (
          <div key={index} className="flex my-3">
            {item.icons}
            {item.title && <p className="ml-5">{item.title}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
