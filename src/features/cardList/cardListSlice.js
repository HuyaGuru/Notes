import { createSlice } from "@reduxjs/toolkit";

export const cardListSlice = createSlice({
    name: "cardList",
    initialState: [
        {title: "Untitled", text:""},
        { title: "Update!!", date: [2021, 10, 17], text: "A newer version of this app is available at notes-huyaguru.vercel.app" },
        { title: "Groceries", date: [2021, 9, 16], text: "1kg Tomatoes\n1kg Onions" },
        { title: "Movies", date: [2021, 9, 15], text: "Godzilla: King of Monsters" },
    ],
    reducers: {
        push: (state, action) => {
            state.push(action.payload);
        },
        splice: (state, action) => {
            state.splice(action.payload.pos, action.payload.length);
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

export const { push, splice, replace } = cardListSlice.actions;

export const cardListFunc = (state) => state.cardList;

export default cardListSlice.reducer;
