import Link from "next/link";
import React from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl">Captur</h1>
        </Link>
        <ul className="hidden sm:flex ">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div className="block sm:hidden z-10">
          <AiOutlineMenu size={20} />
        </div>
        {/*Mobile Menu */}
        <div className="absolute sm:hidden top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-screen bg-black text-center ease-in duration-300 ">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/portfolio">Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
