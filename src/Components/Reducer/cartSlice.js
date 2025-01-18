import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (items) => {
    return items.reduce((sum, item) => {
        let itemTotal = Number(item.quantity*item.price);
        console.log('item total:')
        console.log(itemTotal)
        return sum + (isNaN(itemTotal) ? 0 : itemTotal); // Add only if it's a number
    }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addUpdateProduct: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex(i => i.id === item.id);

      if (existingItemIndex === -1) {
    if (item.quantity > 0) {
      const newItemTotal = Number(item.price) * Number(item.quantity); // Ensure both are numbers
      state.items.push({ ...item, totalItem: newItemTotal });
    }
  } else {
    if (item.quantity > 0) {
      state.items[existingItemIndex].quantity = Number(item.quantity); // Ensure quantity is a number
      state.items[existingItemIndex].totalItem = Number(item.price) * Number(state.items[existingItemIndex].quantity); // Ensure price and quantity are numbers
    } else {
          state.items.splice(existingItemIndex, 1);
        }
      }

      state.total = calculateTotal(state.items);
    },
    removeProduct: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      state.total = calculateTotal(state.items);
    },
    initializeCart: (state) => {
      const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
      state.items = storedCart;    
      state.total = calculateTotal(storedCart);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  },
});

export const { addUpdateProduct, removeProduct, initializeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;