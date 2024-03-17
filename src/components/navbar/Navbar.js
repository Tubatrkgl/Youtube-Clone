import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
const [open, setOpen] =useState()
  const toggleHandler = ()=>{
    console.log("clicked")
  }
  return (
    <div className="flex fixed top-0 justify-center items-center w-[100%] h-[50px] z-10 bg-white">
      <div className="flex mt-6 w-[96%] py-3 justify-between items-center">
        <div className="flex items-center gap-5">
          <GiHamburgerMenu onClick={toggleHandler} size={24} />
          <img
            className="w-[90px]"
            src="https://seeklogo.com/images/Y/youtube-2017-logo-D185B4FEFA-seeklogo.com.png"
            alt="youtube-logo"
          />
        </div>
        <div className="flex w-[45%] items-center">
          <div className="w-[100%] py-4 border-gray-300">
            <input
              placeholder="Search"
              className="border outline-none 
              h-[40px] px-3 border-gray-400 
              w-full rounded rounded-l-full "
              type="text"
            />
          </div>
          <button className="flex justify-center items-center w-[64px] h-[40px] border-gray-400 
          rounded rounded-r-full bg-gray-400">
            <IoIosSearch size={20} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <CiVideoOn size={24} className="cursor-pointer" />
          <IoIosNotificationsOutline size={24} className="cursor-pointer" />
          <Avatar
            src="https://i.redd.it/l69d7d8m3sqa1.jpg"
            size={24}
            round={true}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
