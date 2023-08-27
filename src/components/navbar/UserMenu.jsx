import React from 'react';

import { AiOutlineMenu } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { ImEarth } from "react-icons/im";
const UserMenu = () => {
  return (
    <div 
    className="
    flex
    space-x-2
    items-center
    ">
        <div className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          ">Airbnb your home</div>
        <div className='
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
        '>
            <ImEarth/>
            
        </div>
        <button className='
        flex
        space-x-4
        p-3
        border-[1px] 
        border-neutral-200 
        cursor-pointer
        rounded-full 
        hover:shadow-md
        '>
            <AiOutlineMenu />
            <FiUser/>
        </button>
    </div>
  )
}

export default UserMenu