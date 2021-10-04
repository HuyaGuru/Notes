import { createSlice } from "@reduxjs/toolkit";

export const cardListSlice = createSlice({
    name: "cardList",
    initialState: [
        { title: "Bio Class", date: [2021, 9, 17], text: "BioClass" },
        { title: "Groceries", date: [2021, 9, 16], text: "Groceries" },
        { title: "Movies", date: [2021, 9, 15], text: "Movies" },
    ],
    reducers: {
        push: (state, action) => {
            state.push(action.payload);
        },
        pop: (state, action) => {
            state.pop([action]);
        },
    },
});

export const { push, pop } = cardListSlice.actions;

export const cardListFunc = (state) => state.cardList;

export default cardListSlice.reducer;
