import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./ThemeSlice";

let Store = configureStore({
  reducer: themeSlice.reducer,
});

export default Store;
