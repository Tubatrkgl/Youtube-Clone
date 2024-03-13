import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      <div className="flex px-5 py-3 justify-between px-5">
        <div className="flex items-center gap-5">
          <GiHamburgerMenu size={24} />
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
              px-2 py-1 border-gray-400 
              w-full rounded rounded-l-full "
              type="text"
            />
          </div>
          <button className="py-2 px-3 border-gray-400 rounded rounded-r-full bg-gray-400">
            <IoIosSearch size={18} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <CiVideoOn size={24} />
          <IoIosNotificationsOutline size={24} />
          <Avatar
            src="https://i.redd.it/l69d7d8m3sqa1.jpg"
            size={24}
            round={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
