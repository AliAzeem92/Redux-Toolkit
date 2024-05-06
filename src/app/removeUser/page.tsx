"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function DisplayUsers() {
  const userData = useSelector((data) => data.users);
  console.log(userData);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="m-[30px] text-center text-[#E2DFD0] bg-[#524C42] p-[20px] border-[5px] border-[#32012F] rounded-t-[30px] overflow-y-auto scrollbar-hide">
        <h1 className="text-[70px] mb-[10px] ">Remove Users</h1>
      </div>
      <div className="text-[30px] m-[30px] text-center text-[#E2DFD0]  bg-[#524C42] p-[20px] border-[5px] border-[#32012F] rounded-b-[30px] overflow-y-auto scrollbar-hide">
        <div
          style={{
            maxHeight: "700px",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {userData.map((item: any) => (
            <div className="bg-[#32012F] rounded-[10px] p-[20px] mb-[20px] flex justify-between ">
              <span>{item.name}</span>
              <button
                onClick={() => dispatch(removeUser(item.id))}
                className="border-[2px] p-[5px] border-[#FF70AB] bg-[#FF70AB] ml-[10px] rounded-[10px] text-[white] "
              >
                Remove user
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
