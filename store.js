import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./slice/restaurantSlice";
import cardSlice from "./slice/cardSlice";

export const store =configureStore(
    {
        reducer:{
            restaurant:restaurantSlice,
            cardSlice: cardSlice,
        },
    }
)