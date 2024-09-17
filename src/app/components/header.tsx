"use client";
import { FaHeart, FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Menu from "./menu";

export default function Header() {
  return (
    <header>
      <div className="header w-[80%] left-[10%] relative flex flex-row justify-around">
        <div className="left-header min-w-[10%] flex flex-row space-x-10">
          <div className="cursor-pointer flex justify-around items-center">
            <FaHeart className="text-[20px]" />
          </div>
          <div className="cursor-pointer flex justify-around items-center">
            <IoSearchOutline className="text-[20px]" />
          </div>
        </div>
        <div className="mid-header min-w-[80%] flex justify-around">
          <Image src={logo} width={200} height={100} alt="Store logo" />
        </div>
        <div className="right-header min-w-[10%] flex flex-row space-x-10">
          <div className="cursor-pointer flex justify-around items-center">
            <FaUser className="text-[20px]" />
          </div>
          <div className="cursor-pointer flex justify-around items-center">
            <FaCartShopping className="text-[20px]" />
          </div>
          <div className="cursor-pointer flex justify-around items-center">
            <GiHamburgerMenu className="text-[20px]" />
          </div>
        </div>
      </div>
      <hr className="w-[80%] relative left-[10%]" />
      <div className="header w-[80%] left-[10%] relative flex flex-row justify-around">
        <Menu className="pt-[13px] pb-[13px]" />
      </div>
    </header>
  );
}
