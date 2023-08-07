import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({ ...newItem, quantity: 1 });
            }
            else {
                existingItem.quantity++
                existingItem.price = existingItem.originalPrice * existingItem.quantity

            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        updateCart: (state, action) => {
            const newItemId = action.payload.id;
            const existingItem = state.items.find(item => item.id === newItemId);
            existingItem.quantity = parseInt(action.payload.newQuan)
            existingItem.price = existingItem.originalPrice * existingItem.quantity
        }
    }
})

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions
export default cartSlice.reducer
