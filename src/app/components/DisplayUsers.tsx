"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function DisplayUsers() {
  const userData = useSelector((data) => data.users);
  console.log(userData);
  const dispatch = useDispatch();

  return (
    <div className="text-center h-[500px] w-[500px] bg-[#524C42] p-[20px] border-[5px] border-[#32012F] rounded-b-[30px] overflow-y-auto scrollbar-hide">
      <h1 className="text-[30px] ">Display Users</h1>
      <div
        style={{
          maxHeight: "400px",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {userData.map((item: any) => (
          <div className="bg-[#32012F] rounded-[10px] p-[10px] mb-[10px] ">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
