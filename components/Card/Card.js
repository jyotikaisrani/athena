import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView, useInViewEffect } from "react-hook-inview";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const sameple1 =
  "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
const sameple2 =
  "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
const sameple3 =
  "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";

const Card = ({ currData, videoRef, currKey }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView === true) {
      if (currKey === 1) {
        videoRef.current.src = sameple1;
      } else if (currKey === 2) {
        videoRef.current.src = sameple2;
      } else {
        videoRef.current.src = sameple3;
      }
    }
    // console.log(currData.heading, inView, videoRef.current.src, currKey);
  }, [inView]);

  return (
    <div
      className="flex flex-row w-full h-screen justify-between items-center"
      ref={ref}
      currKey={currKey}
    >
      <div className="flex-[0.3] flex flex-col space-y-3">
        <h2 className="w-fit font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#d3486d] to-[#433485]">
          {currData.heading}
        </h2>
        <h1 className="font-extrabold text-3xl uppercase">
          {currData.subHeading}
        </h1>
        <p className="text-gray-500 font-bold text-base">
          {currData.description}
        </p>
      </div>
      <div className="flex-[0.7]"></div>
    </div>
  );
};

export default Card;
