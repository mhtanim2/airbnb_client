import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { menuItemsWithCategory } from "../../APIRequest/APIRequest";
import Container from "../Container";
const Item = () => {
  let [searchKeyword, setSearchKeyword] = useState("0");

  useEffect(() => {
    menuItemsWithCategory(searchKeyword);
  }, []);

  const { menuItemList } = useSelector((state) => state.menuItem);
  debugger;
  return (
    <>
    <div className="mt-[180px]">
      <Container>
        {menuItemList?.map((item) => (
          <div
            className="
        pt-5
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-4
        2xl:grid-cols-4
        gap-8
        
      "
          >
            {item.Items?.map((listing) => (
              <div className="col-span-1 cursor-pointer group">
                <div key={listing._id} className="flex flex-col gap-2 w-full">
                  <div
                    className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
                  >
                    <img
                      fill
                      className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
                      src={listing.ItemImage}
                      alt="Listing"
                    />
                    <div
                      className="
              absolute
              top-3
              right-3
              group-hover:scale-110
              
            "
                    >
                      <AiOutlineHeart size={25} />
                      
                    </div>
                  </div>
                  <div className="font-semibold text-lg">
                    {listing.ItemName}
                  </div>
                  
                  <div className="font-semibold text-sm">
                    {listing.LocationValue}
                  </div>
                  <div className="font-light text-neutral-500">
                    {moment(listing.CreatedDate).format('MMMM Do YYYY')}
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">$ {listing.UnitPrice}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Container>
      </div>
    </>
  );
};


export default Item;
