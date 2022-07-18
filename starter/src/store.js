import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './feature/cart/cartSlice'
import modalReducer from './feature/modal/modalSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
});

// configureStore will compose of actions and 
// reducers and actions 
// by passing an object 

