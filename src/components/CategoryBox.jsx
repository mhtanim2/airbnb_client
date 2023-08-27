import React from "react";
import { menuItemsWithCategory } from "../APIRequest/APIRequest";
import { isEmpty } from "../helper/formValidation";

const CategoryBox = ({ key, ItemCategory, ItemImage }) => {
  const handleItemClick = async (item) => {
    isEmpty(item) ? menuItemsWithCategory("0") : menuItemsWithCategory(item);
  };
  return (
    <div
      onClick={() => {
        handleItemClick(ItemCategory);
      }}
      key={key}
      className={`
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-2
            p-3
            border-b-1
            hover:text-neutral-800
            transition
            cursor-pointer
            hover:shadow-md
            opacity-70
          `}
    >
      <img
        className="
          w-6  rounded-2xl object-cover cursor-pointer	
          "
        src={ItemImage}
        alt="category"
      />
      <div className="font-medium text-sm">{ItemCategory}</div>
    </div>
  );
};

export default CategoryBox;
