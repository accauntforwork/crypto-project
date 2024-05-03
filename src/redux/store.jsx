import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";
import watchlistSlice from "./watchlistSlice";

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    watchlist: watchlistSlice,
  },
});

export default store;
