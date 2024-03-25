import axios from "axios";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
const Watch = () => {
  const [singleVideo, setSingleVideo] = useState("");
  const [searcParams] = useSearchParams();
  const videoId = searcParams.get("v");

  const getSingleVideo = async () => {

    try {
        const res = await axios.get("");
        const resData = await res.json();
        console.log(resData);
    } catch (error) {
        console.log(error)
    }
  };

  console.log("video id =", videoId);
  return (
    <div className="ml-4">
      <div className="">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?si=Fr8hrF6rsIpPjE7V`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">Title</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Watch;
