import React, { useRef } from "react";
import { BiSearch } from 'react-icons/bi';
import { menuItemsWithCategory } from "../../APIRequest/APIRequest";
import { isEmpty } from "../../helper/formValidation";
const Search = () => {

  let inputRef = useRef();

  const searchHandler = () => {
    let getSearchInput = inputRef.value;
    isEmpty(getSearchInput)
      ? menuItemsWithCategory("0")
      : menuItemsWithCategory(getSearchInput);
  };
  
  return (
    <div
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div 
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
       
       <input  ref={(input) => (inputRef = input)} class="placeholder:italic block 
       text-center
       border rounded-full ml-3 py-2 shadow-sm focus:outline-none focus:border-rose-500 focus:ring-rose-500 focus:ring-1 sm:text-sm" placeholder="Anywhere" type="text" name="search"/>

        <div
          className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
        >
          Any Place
        </div>
        <div 
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">Any Location</div>
          <div 
            className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
          >
            <span
            onClick={searchHandler}
          >
            <BiSearch size={18} cursor={"pointer"}/>
          </span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search