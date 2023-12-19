// import { describe, expect } from "vitest";
// import { expect } from "vitest";
// import React from "react";
import * as actions from "../store/actions";
import rootReducer from "../store/reducers.js";
import configureStore from "redux-mock-store";
import createReducer, { initialState } from "../store/reducers.js";

import thunk from "redux-thunk";
import reducers from "../store/reducers.js";
// import { test } from "vitest";
// import { test } from "vitest";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore(initialState);
});
describe("rootreducer", () => {
  test("initial state", () => {
    expect(rootReducer(undefined, { type: undefined })).toEqual({
      flowersShopArr: {},
      favorites: [],
      shop: [],
      removeProduct: {},
      isModal: null,
      formData: {
        name: "Ваше ім'я",
        lastName: "Прізвище",
        age: "Вік",
        addressToDelivery: "Адреса доставки",
        phone: "Контактний телефон",
      },
    });
  });

  it("should handle actionGetProducts", () => {
    const payload = {
      cardflower: [
        {
          title: "Букет з троянд та еустоми ",
          cost: "1200",
          imgIcon: "./icons/flower1.png",
          artc: "fl1",
          quantity: "1",
        },
        {
          title: "Букет з троянд,альстрамерії та гвоздик",
          cost: "850",
          imgIcon: "./icons/flower2.png",
          artc: "fl2",
          quantity: "1",
        },
        {
          title: "Букет з троянд та гіпсофіли",
          cost: "1200",
          imgIcon: "./icons/flower3.png",
          artc: "fl3",
          quantity: "1",
        },
        {
          title: "Персикові тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower4.png",
          artc: "fl4",
          quantity: "1",
        },
        {
          title: "Білі та бузкові тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower5.png",
          artc: "fl5",
          quantity: "1",
        },
        {
          title: "Білі тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower6.png",
          artc: "fl6",
          quantity: "1",
        },
        {
          title: "Рожева півонія",
          cost: "875",
          imgIcon: "./icons/flower7.png",
          artc: "fl7",
          quantity: "1",
        },
        {
          title: "Ніжно рожева півонія",
          cost: "850",
          imgIcon: "./icons/flower8.png",
          artc: "fl8",
          quantity: "1",
        },
        {
          title: "Кольорова гортензія",
          cost: "900",
          imgIcon: "./icons/flower9.png",
          artc: "fl9",
          quantity: "1",
        },
        {
          title: "Персикова еустома",
          cost: "980",
          imgIcon: "./icons/flower10.png",
          artc: "fl10",
          quantity: "1",
        },
        {
          title: "Кольорава альстромерія",
          cost: "700",
          imgIcon: "./icons/flower11.png",
          artc: "fl11",
          quantity: "1",
        },
      ],
    };
    const newState = createReducer(
      initialState,
      actions.actionGetProducts(payload)
    );
    expect(newState.flowersShopArr).toEqual(payload);
  });
  it("actionFavorite", () => {
    const payload = {
      cardflower: [
        {
          title: "Букет з троянд та еустоми ",
          cost: "1200",
          imgIcon: "./icons/flower1.png",
          artc: "fl1",
          quantity: "1",
        },
        {
          title: "Букет з троянд,альстрамерії та гвоздик",
          cost: "850",
          imgIcon: "./icons/flower2.png",
          artc: "fl2",
          quantity: "1",
        },
        {
          title: "Букет з троянд та гіпсофіли",
          cost: "1200",
          imgIcon: "./icons/flower3.png",
          artc: "fl3",
          quantity: "1",
        },
        {
          title: "Персикові тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower4.png",
          artc: "fl4",
          quantity: "1",
        },
        {
          title: "Білі та бузкові тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower5.png",
          artc: "fl5",
          quantity: "1",
        },
        {
          title: "Білі тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower6.png",
          artc: "fl6",
          quantity: "1",
        },
        {
          title: "Рожева півонія",
          cost: "875",
          imgIcon: "./icons/flower7.png",
          artc: "fl7",
          quantity: "1",
        },
        {
          title: "Ніжно рожева півонія",
          cost: "850",
          imgIcon: "./icons/flower8.png",
          artc: "fl8",
          quantity: "1",
        },
        {
          title: "Кольорова гортензія",
          cost: "900",
          imgIcon: "./icons/flower9.png",
          artc: "fl9",
          quantity: "1",
        },
        {
          title: "Персикова еустома",
          cost: "980",
          imgIcon: "./icons/flower10.png",
          artc: "fl10",
          quantity: "1",
        },
        {
          title: "Кольорава альстромерія",
          cost: "700",
          imgIcon: "./icons/flower11.png",
          artc: "fl11",
          quantity: "1",
        },
      ],
    };
    const newState = createReducer(
      initialState,
      actions.actionFavorite(payload)
    );
    expect(newState.favorites).toEqual(payload);
  });

  it(" додавати товар до магазину", () => {
    const payload = {
      cardflower: [
        {
          title: "Букет з троянд та еустоми ",
          cost: "1200",
          imgIcon: "./icons/flower1.png",
          artc: "fl1",
          quantity: "1",
        },
        {
          title: "Букет з троянд,альстрамерії та гвоздик",
          cost: "850",
          imgIcon: "./icons/flower2.png",
          artc: "fl2",
          quantity: "1",
        },
        {
          title: "Букет з троянд та гіпсофіли",
          cost: "1200",
          imgIcon: "./icons/flower3.png",
          artc: "fl3",
          quantity: "1",
        },
        {
          title: "Персикові тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower4.png",
          artc: "fl4",
          quantity: "1",
        },
        {
          title: "Білі та бузкові тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower5.png",
          artc: "fl5",
          quantity: "1",
        },
        {
          title: "Білі тюльпани",
          cost: "1350",
          imgIcon: "./icons/flower6.png",
          artc: "fl6",
          quantity: "1",
        },
        {
          title: "Рожева півонія",
          cost: "875",
          imgIcon: "./icons/flower7.png",
          artc: "fl7",
          quantity: "1",
        },
        {
          title: "Ніжно рожева півонія",
          cost: "850",
          imgIcon: "./icons/flower8.png",
          artc: "fl8",
          quantity: "1",
        },
        {
          title: "Кольорова гортензія",
          cost: "900",
          imgIcon: "./icons/flower9.png",
          artc: "fl9",
          quantity: "1",
        },
        {
          title: "Персикова еустома",
          cost: "980",
          imgIcon: "./icons/flower10.png",
          artc: "fl10",
          quantity: "1",
        },
        {
          title: "Кольорава альстромерія",
          cost: "700",
          imgIcon: "./icons/flower11.png",
          artc: "fl11",
          quantity: "1",
        },
      ],
    };
    const newState = createReducer(
      initialState,
      actions.actionAddToShop(payload)
    );

    // Перевірте, чи товар додано до магазину в новому стані
    expect(newState.shop).toContainEqual(payload);

    // Перевірте, чи дані в local storage оновлені
    const localStorageData = JSON.parse(localStorage.getItem("shopData"));
    expect(localStorageData).toEqual(expect.arrayContaining([payload]));
  });

  //   const expectedLocalStorage = JSON.stringify(expectedState.shop);
  //   expect(localStorage.setItem).toHaveBeenLastCalledWith(
  //     "shopData",
  //     expectedLocalStorage
  //   );
  // });
});
