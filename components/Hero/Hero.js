import React from "react";
import Navbar from "../Navbar";
const index = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center space-y-6 pt-[8rem] mb-[2rem]">
        <h1 className="font-bold tracking-tight text-7xl px-[20rem] text-center ">
          Double the hire, half the effort
        </h1>
        <p className="font-semibold text-gray-500 text-lg px-[18rem] text-center">
          Open conversation and nurture relationships at scale and be the first
          choice when your ideal candidate is ready to explore.
        </p>
        <button className="bg-gray-200 font-bold rounded-md p-4">
          View Kula Outreach
        </button>
      </div>
    </>
  );
};

export default index;
