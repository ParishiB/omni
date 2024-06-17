"use client";
import { useState } from "react";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { CgSandClock } from "react-icons/cg";
import { IoFileTrayOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="ml-5 bg-[#F9FAFC] h-screen">
      <div className="">
        <img src="public/logo.png" alt="" className="" />
        <h1 className="font-bold">Front.Desk</h1>
      </div>
      <div className="flex">
        <p>Location name</p>
        <HiOutlineArrowsRightLeft />
      </div>
      <div className="time"></div>
      <div className="">
        <IoFileTrayOutline />
        <p>Orders</p>
      </div>
      <div className="">
        <SiTicktick />
        <p>Subscriptions</p>
      </div>
      <div className="">
        <SlCalender />
        <p>Calender</p>
      </div>
      <div className="">
        <CgSandClock />
        <p>Waitlist</p>
      </div>

      <div className="">
        <p>Dashboard</p>
      </div>
      <div className="">Admin Nameadminname@mail.com</div>
      <div className="">Help center</div>
    </div>
  );
}
