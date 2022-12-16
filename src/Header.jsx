import React from "react";
import { useContext } from "react";
import UserContext from "./Context";

function Header() {
  const { userDetails } = useContext(UserContext).state;
  return (
    <div className='w-screen h-auto px-2 py-2 flex items-center justify-between'>
      <p>Home</p>
      <div className='flex flex-col gap-1 items-center'>
        <img
          src={userDetails?.image_URL}
          className='object-cover w-16 h-10'
        ></img>
        <small>{userDetails?.name}</small>
      </div>
    </div>
  );
}

export default Header;
