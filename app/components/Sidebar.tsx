"use client";
import { useState } from "react";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { CgSandClock } from "react-icons/cg";
import { IoFileTrayOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";

const items = [
  { icon: <IoFileTrayOutline />, label: "Orders" },
  { icon: <SiTicktick />, label: "Subscriptions" },
  { icon: <SlCalender />, label: "Calender" },
  { icon: <CgSandClock />, label: "Waitlist" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-[#F9FAFC] h-screen">
      <div className="">
        <img src="public/logo.png" alt="" className="" />
        <h1 className="font-bold">Front.Desk</h1>
      </div>
      <div className="flex">
        <p>Location name</p>
        <HiOutlineArrowsRightLeft />
      </div>
      <div className="time"></div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 p-2">
          {item.icon}
          <p>{item.label}</p>
        </div>
      ))}
      <div className="fixed bottom-0">
        <div className=" justify-around items-center">
          <div className="flex">
            <MdOutlineDashboard />
            <p>Dashboard</p>
          </div>
          <div className="">
            <p>Admin Name</p>
            <p>adminname@mail.com</p>
          </div>
          <div className="grid grid-cols-2">
            <CiCircleQuestion />
            <div className="">
              <p>Help center</p>
              <p>@2024 Omnify.Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
