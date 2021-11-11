import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import cardListReducer from "../features/cardList/cardListSlice";
import currentCardReducer from "../features/currentCard";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	whitelist: ["cardList"],
};
const rootReducer = combineReducers({
	cardList: cardListReducer,
	currentCard: currentCardReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

let persistor = persistStore(store)

export default persistor;