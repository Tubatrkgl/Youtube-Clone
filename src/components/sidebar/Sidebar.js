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
    icons: <RxCounterClockwiseClock size={22}/>,
    title: "Past",
  },
  {
    icons:<RiVideoLine size={22}/>,
    title:"Your Videos"
  },
  {
    icons:<MdOutlineWatchLater size={22} />,
    title:"watch later"
},
{
    icons:<LiaDownloadSolid size={22} />,
    title:"Downloads"
},
{
    icons:<HiOutlineScissors size={22}/>,
    title:"Your clips" 
},
{
    icons:<MdKeyboardArrowDown size={22}/>,
    title:"Show more"
},
{
    icons: <hr className="my-2 border-t-2 border-gray-300 w-full" />, 
},
{
    title:"Subscriptions"
},
{

}


];

const Sidebar = () => {
  return (
    <div className="w-[12%] ml-5">
      {SideItem.map((item, index) => {
        return (
          <div key={index} className="flex my-3">
            {item.icons}
            <p className="ml-5">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
