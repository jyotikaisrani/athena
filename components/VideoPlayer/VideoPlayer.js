import React from "react";

const VideoPlayer = ({ videoRef }) => {
  return (
    <div className="w-full h-screen right-0 top-0 sticky  flex flex-row items-center justify-end">
      <div className="w-[40rem] h-[30rem] rounded-3xl object-cover overflow-hidden">
        <video autoPlay loop muted ref={videoRef} />
      </div>
    </div>
  );
};

export default VideoPlayer;
