import { setMenuItemList } from "../redux/stateSlice/itemSlice";
import store from "../redux/store";
import { errorToast } from "../utils/TostMessage";
import axiosInstance from "../utils/axiosInstance";


export const menuItemsWithCategory =(searchKeyword) => {

  axiosInstance
    .get("/places/category/" + searchKeyword)
    .then((res) => {
      
      if (res.status === 200 && res.data["data"].length > 0) {
        
        store.dispatch(setMenuItemList(res.data["data"]));
      } else {
        store.dispatch(setMenuItemList([]));
      }
    })
    .catch((err) => {
      store.dispatch(setMenuItemList([]));
      errorToast("Something went wrong! Try again.");
    });
};
