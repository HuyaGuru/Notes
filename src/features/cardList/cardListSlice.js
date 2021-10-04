import { createSlice } from "@reduxjs/toolkit";

export const cardListSlice = createSlice({
    name: "cardList",
    initialState: [
        {title: "Untitled", text:""},
        { title: "Bio Class", date: [2021, 9, 17], text: "BioClass" },
        { title: "Groceries", date: [2021, 9, 16], text: "Groceries" },
        { title: "Movies", date: [2021, 9, 15], text: "Movies" },
    ],
    reducers: {
        push: (state, action) => {
            state.push(action.payload);
        },
        pop: (state, action) => {
            state.pop(action.payload);
        },
        replace: (state, action) => {
            state[action.payload.index] = {
                title: action.payload.title,
                date: action.payload.date,
                text: action.payload.text
            }
        }
    },
});

export const { push, pop, replace } = cardListSlice.actions;

export const cardListFunc = (state) => state.cardList;

export default cardListSlice.reducer;
