import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../utils/appSlice";

const buttonList = [
  "All",
  "Javascript",
  "Java",
  "Live",
  "React",
  "Music",
  "Songs",
  "Vlogs",
  "Trending",
  "Programming",
  "Home repair",
  "Tourism",
  "Handicrafts",
  "News",
  "Technology",
  "Cricket",
  "Comedy",
  "Thriller",
  "New to you",
];

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
     dispatch(setCategory(tag));
      setActive(tag);
    }
  };
  console.log(active);
  return (
    <div className="flex w-full py-2 overflow-x-scroll no-scrollbar my-1">
      {buttonList.map((buttonName, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                videoByTag(buttonName);
              }}
              className={`${
                active === buttonName
                  ? "bg-slate-900 text-white"
                  : "bg-gray-200"
              } bg-gray-200 px-4 py-1 font-medium rounded-lg mx-2`}
            >
              <span className="whitespace-nowrap">{buttonName}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
