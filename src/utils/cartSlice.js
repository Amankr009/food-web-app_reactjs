import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        items: [],
        price: []
    },
    reducers: {
        addItems: (state, action) => {
            //redux toolkit uses immer BTS
            //mutating the state here
            state.items.push(action.payload);
        },
        addPrice: (state, action) => {
            state.price.push(action.payload);
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // []
        },
        //originalState = [200,400]
        clearPrice: (state) => {
            //return {price: []}; // this new [] will be replaced inside originalState = []
            state.price.length = []
        }
    }
});

export const {addItems, addPrice, removeItems, clearCart, clearPrice} = cartSlice.actions;

export default cartSlice.reducer;