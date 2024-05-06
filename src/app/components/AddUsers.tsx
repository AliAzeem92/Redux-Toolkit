"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

export default function AddUsers() {
  const [name, setName] = useState("");

  const handleInputChange = (e: any) => {
    setName(e.target.value);
  };

  const dispatch = useDispatch();
  const userDispatch = () => {
    console.log(name);
    dispatch(addUser(name));
  };

  return (
    <div className="text-center bg-[#524C42] w-[500px] p-[20px] border-[5px] border-[#32012F] rounded-t-[30px] ">
      <h1 className="text-[30px] ">Users List</h1>
      <input
        type="text"
        placeholder="Add New User"
        value={name}
        onChange={handleInputChange}
        className="w-[250px] h-[35px] border-[2px] border-[#FF70AB] p-[10px] bg-transparent mt-[10px] rounded-[10px] "
      />
      <button
        onClick={userDispatch}
        className="border-[2px] p-[5px] border-[#F97300] bg-[#F97300] ml-[10px] rounded-[10px] text-[white] "
      >
        Add User
      </button>
    </div>
  );
}
