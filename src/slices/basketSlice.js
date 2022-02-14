import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
      // copy basket
      let newBasket = [...state.items];

      // remove item from copy basket
      if (index >= 0) {
        newBasket.splice(index, 1)
      }
      // error
      else {
        console.warn(`can\'s remove product with id ${action.payload.id}`)
      }

      // put new basket
      state.items = newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
