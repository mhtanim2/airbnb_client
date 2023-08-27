import React, { useEffect, useState } from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { menuItemsWithCategory } from "../../APIRequest/APIRequest";
import { errorToast } from "../../utils/TostMessage";
import axiosInstance from "../../utils/axiosInstance";
import CategoryBox from "../CategoryBox.jsx";
import Container from "../Container";
const Categories = () => {

  const [categoryList, setCategoryList] = useState([]);
 
  let [searchKeyword,setSearchKeyword]=useState("0");

  useEffect(() => {
    axiosInstance
      .get("/category/number/places")
      .then((res) => {
        setCategoryList(res.data["data"]);
      })
      .catch((err) => {
        errorToast("Something went wrong");
      });
  }, []);
  
  const searchKeywordOnChange= (e) => {
    setSearchKeyword(e.target.value);
    ((e.target.value).length === 0)
      ? menuItemsWithCategory("0")
      : menuItemsWithCategory(searchKeyword);
}

  return (
    <Container>
      <div className='pt-2 flex flex-row items-center justify-between 
      '>
      <div
        className="
          flex 
          flex-row 
          justify-center
          gap-4
          overflow-x-auto
          basis-5/6
          hover:shadow-md
        "
      >
        {categoryList.map(item => (
          <CategoryBox
            key={item._id}
            ItemCategory={item.ItemCategory}
            ItemImage={item.ItemImage}
          />
        ))}
      </div>
      <div className='
      flex flex-row basis-1/6
      justify-center
      '>
        <button className='flex flex-row justify-center gap-3 border p-4 rounded-full 
        hover:shadow-md'> <span className=""> <BsFillFilterCircleFill/></span> 
        
        <input  onChange={searchKeywordOnChange}class="placeholder:italic block 
        text-center
        border rounded-full py-2 shadow-sm focus:outline-none focus:border-rose-500 focus:ring-rose-500 focus:ring-1 sm:text-sm" placeholder="Filter" type="text" name="Search"/></button>
      </div>
      </div>
    </Container>
  )
}

export default Categories