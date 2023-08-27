import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./stateSlice/categorySlice";
import itemReducer from "./stateSlice/itemSlice";
export default configureStore({
  reducer: {
    category: categoryReducer,
    menuItem: itemReducer
  },
});
