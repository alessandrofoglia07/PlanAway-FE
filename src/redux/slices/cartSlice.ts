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
        addToCart: (state, action : PayloadAction<{name: string, room: string, dates: string, price: number, id: number}>) => {
            const addingItem = action.payload;
            state.cart.push(addingItem);
            state.cartQuantity += 1;
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            state.cartQuantity -= 1;
        },
        clearCart: (state) => {
            state.cart = [];
            state.cartQuantity = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
