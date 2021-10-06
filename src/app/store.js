import { configureStore } from "@reduxjs/toolkit";

import cardListReducer from "../features/cardList/cardListSlice"
import currentCardReducer from "../features/currentCard";

export default configureStore({
    reducer: {
        cardList: cardListReducer,
        currentCard: currentCardReducer
    },
})