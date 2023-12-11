import { createAction } from "@reduxjs/toolkit";
import { sendRequest } from "../helpers/sendRequest";

export const actionUpdate = createAction("ACTION_UPDATE");
export const actionGetProducts = createAction("ACTION_GET_PRODUCT");
export const actionHandleFavorite = createAction("ACTION_ADD_TO_FAVORITE");
export const actionAddToShop = createAction("ACTION_ADD_TO_SHOP");
export const actionModal = createAction("ACTION_ISMODAL");
export const actionFavorite = createAction("ACTION_FAVORITE");
export const actionclearCart = createAction("CLEAR_CART");
export const actionRemoveCartProduct = createAction("ACTION_REMOVE_PRODUCT");

export const actionFetchProduct = () => (dispatch) => {
  return sendRequest("data.json").then((data) => {
    dispatch(actionGetProducts(data));
  });
};

export const actionToggleFavorire = () => async (dispatch) => {
  return await dispatch(
    actionFavorite(
      JSON.parse(window.localStorage.getItem("favoriteData")) || []
    )
  );
};

// export const actionBasket = () => async (dispatch) => {
//   return await dispatch(
//     actionAddToShop(JSON.parse(window.localStorage.getItem("shopData")) || [])
//   );
// };
export const actionRemoveProduct = (index) => async (dispatch) => {
  return await dispatch(actionRemoveCartProduct(index));
};
