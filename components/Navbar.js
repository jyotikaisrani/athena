import React from "react";
import Image from "next/image";

const Navbar = () => {
  const src =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png";

  return (
    <div className="bg-[#100f10] p-5 text-white w-full flex flex-row text-lg px-14">
      <div className="flex-[0.5] flex flex-row items-center justify-start space-x-6">
        <Image
          loader={() => src}
          src={src}
          alt="Picture of the author"
          height={40}
          width={40}
        />
        <h2>Product</h2>
        <h2>Story</h2>
        <h2>Resources</h2>
      </div>
      <div className="flex-[0.5] flex flex-row items-center justify-end">
        <button className="bg-gradient-to-r from-[#0d80ef] to-[#6c38f9] py-2 px-4 rounded-md">
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
