import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@src/redux/reducer";
import {
    TypedUseSelectorHook,
    useDispatch as originalUseDispatch,
    useSelector as originalUseSelector
} from "react-redux";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => originalUseDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = originalUseSelector;

export default store;
