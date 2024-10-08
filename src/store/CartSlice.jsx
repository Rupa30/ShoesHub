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
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: Number(newItem.price),
                    quantity: 1,
                    totalPrice: Number(newItem.price),
                    image: newItem.image,
                });
            }
            state.totalQuantity++;
            state.totalAmount = Number(state.totalAmount) + Number(newItem.price); // Update total amount
        },
        decrementQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;  // Update total price
                state.totalQuantity--; // Correct totalQuantity
                state.totalAmount -= existingItem.price;  // Update total amount
            } else {
                state.totalQuantity -= existingItem.quantity; // Deduct totalQuantity by remaining quantity
                state.items = state.items.filter((item) => item.id !== id); // Remove the item if quantity is 0
                state.totalAmount -= existingItem.price; // Update total amount
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity; // Adjust totalQuantity by the quantity removed
                state.totalAmount -= existingItem.totalPrice;  // Update the amount
                state.items = state.items.filter((item) => item.id !== id); // Remove the item
            }
        },
        incrementQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;  // Update total price
                state.totalQuantity++; // Adjust totalQuantity by 1
                state.totalAmount += existingItem.price; // Update total amount
            }
        },
    },
});

export const { addToCart, decrementQuantity, removeFromCart, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
