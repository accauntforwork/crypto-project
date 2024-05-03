import { createSlice } from "@reduxjs/toolkit";

const localData = JSON.parse(localStorage.getItem("watchlist")) || [];

const initialState = {
  watchlistIds: localData,
};
console.log(JSON.parse(localStorage.getItem("watchlist")));
export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const existingId = state.watchlistIds.watchlistIds.find(
        (item) => item.id === action.payload.id
      );

      if (!existingId) {
        state.watchlistIds.watchlistIds.push(action.payload);
        localStorage.setItem("watchlist", JSON.stringify(state));
        console.log(state.watchlistIds);
      }
    },
    removeFromWatchlist: (state, action) => {
      const index = state.watchlistIds.watchlistIds.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.watchlistIds.watchlistIds.splice(index, 1);
        localStorage.setItem("watchlist", JSON.stringify(state));
      }
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
