import { createSlice } from "@reduxjs/toolkit";

export const currentCard = createSlice({
	name: "currentCard",
	initialState: 0,
	reducers: {
		setCurrentCard: (state, action) => {
			return state = action.payload;
		},
	},
});

export const { setCurrentCard } = currentCard.actions;

export const currentCardFunc = (state) => state.currentCard;

export default currentCard.reducer;
