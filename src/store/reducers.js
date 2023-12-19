import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions.js";

const shopDataFromLocalStorage = localStorage.getItem("shopData");

const inizializationShop = JSON.parse(shopDataFromLocalStorage) || [];

export const initialState = {
  flowersShopArr: {},
  favorites: [],
  shop: inizializationShop,
  removeProduct: {},
  isModal: null,
  formData: {
    name: "Ваше ім'я",
    lastName: "Прізвище",
    age: "Вік",
    addressToDelivery: "Адреса доставки",
    phone: "Контактний телефон",
  },
};

// action==={}=>{type,payload}
export default createReducer(initialState, {
  [actions.actionGetProducts]: (state, { payload }) => {
    state.flowersShopArr = payload;
  },
  [actions.actionFavorite]: (state, { payload }) => {
    state.favorites = payload;
  },

  [actions.actionHandleFavorite]: (state, { payload }) => {
    if (payload && payload.artc) {
      if (!state.favorites.some((item) => item && item.artc === payload.artc)) {
        state.favorites = [...state.favorites, payload];
      } else {
        state.favorites = state.favorites.filter(
          (item) => item && item.artc !== payload.artc
        );
      }
      localStorage.setItem("favoriteData", JSON.stringify(state.favorites));
    }
  },

  [actions.actionAddToShop]: (state, { payload }) => {
    state.shop = [...state.shop, payload];
    localStorage.setItem("shopData", JSON.stringify(state.shop));
  },
  [actions.actionRemoveCartProduct]: (state, { payload }) => {
    // const { index } = payload;
    if (payload !== undefined && payload >= 0 && payload < state.shop.length) {
      // Створіть новий масив без елемента за вказаним індексом
      state.shop = state.shop.filter((item, i) => i !== payload);

      localStorage.setItem("shopData", JSON.stringify(state.shop));
    }
  },
  [actions.actionModal]: (state, { payload }) => {
    state.isModal = payload;
  },
  [actions.actionUpdate]: (state, { payload }) => {
    state.formData = { ...payload };
    console.log("state.formData", state.formData);
  },
  [actions.actionclearCart]: (state, { payload }) => {
    state.shop = [];
    localStorage.removeItem("shopData");
  },
  [actions.actionQuantity]: (state, { payload }) => {
    state.shop = state.shop.map((item) => {
      if (item.artc === payload.artc) {
        if (payload.operator === "+") {
          item.quantity += 1;
        } else {
          item.quantity = item.quantity - 1;
        }
      }
      return item;
    });
  },
});
