// store.js
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./Redux/Slices/gameSlice"; // Import your authSlice reducer

const store = configureStore({
  reducer: {
    auth: gameReducer, // Add your authSlice reducer to the root reducer
    // Add more slices here if you have them
  },
});

export default store;
