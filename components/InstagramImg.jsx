import Image from "next/image";
import React from "react";
import {FaInstagram} from "react-icons/fa";

const InstagramImg = ({socialImg}) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* Overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 " />
      <p>
        <FaInstagram size={30} />
      </p>
    </div>
  );
};

export default InstagramImg;
