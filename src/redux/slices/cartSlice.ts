import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CartSlice {
    cart: any[];
    cartQuantity: number;
};

const initialState: CartSlice = {
    cart: [],
    cartQuantity: 0
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action : PayloadAction<{name: string, room: string, dates: string}>) => {
            state.cart.push(action.payload);
            state.cartQuantity += 1;
        },
        clearCart: (state) => {
            state.cart = [];
            state.cartQuantity = 0;
        }
    }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
