import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.quantity * existingItem.price; // Update total price
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }

            state.totalQuantity++;
            state.totalAmount += newItem.price; // Update total amount
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity; // Update total quantity
                state.totalAmount -= existingItem.totalPrice; // Update total amount
                state.items = state.items.filter(item => item.id !== id); // Remove the item
            }
        },
        incrementQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.quantity * existingItem.price; // Update total price
                state.totalAmount += existingItem.price; // Update total amount
            }
        },
        decrementQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.quantity * existingItem.price; // Update total price
                    state.totalAmount -= existingItem.price; // Update total amount
                } else {
                    state.items = state.items.filter(item => item.id !== id); // Remove the item if quantity is 0
                    state.totalQuantity--;
                    state.totalAmount -= existingItem.totalPrice; // Update total amount
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
