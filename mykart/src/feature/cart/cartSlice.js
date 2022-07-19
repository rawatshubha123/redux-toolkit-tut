import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";  
import cartItems from "../../cartItems";

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  ()=>{
    return fetch(url)
     .then((resp) => resp.json())
     .catch(err => console.log(err));
  }
)

const initialState = {
    cartItems: [],
  amount: 3,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) =>{
        state.cartItems = [];
      },
      removeItem: (state, action) =>{
        // console.log(action.payload);
        let itemId = action.payload;
        state.cartItems = state.cartItems.filter((curr) => curr.id !== itemId);
      },
      increase: (state, { payload }) =>{
        const cartItem = state.cartItems.find((item)=> item.id === payload.id);
        cartItem.amount += 1;
      },
      decrease: (state, { payload }) =>{
        const cartItem = state.cartItems.find((item)=> item.id === payload.id);
        cartItem.amount -= 1;
      },
      calculateTotals: (state) => {
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item) => {
          amount += item.amount;
          let itemPrice = +item.price;
          // console.log(itemPrice);
          total += item.amount * itemPrice;
        })
        state.amount = amount;
        // console.log(total);
        state.total = total;
      }
    },
    extraReducers: {
      [getCartItems.pending]: (state) =>{
        state.isLoading = true;
      },
      [getCartItems.fulfilled]: (state,action) =>{
        state.isLoading = false;
        // console.log(action.payload);
        state.cartItems = action.payload;
      },
      [getCartItems.rejected]: (state) =>{
        state.isLoading = false;
      }
    }
});


export const {clearCart, removeItem, increase, decrease,
  calculateTotals
} = cartSlice.actions;

export default cartSlice.reducer;   
