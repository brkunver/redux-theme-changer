import { createSlice } from "@reduxjs/toolkit";

let initialTheme = {
  isDark: false,
  background: "#E4F9F5",
  fontColor: "#40514E",
  thirdColor: "#30E3CA",
};

let themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    toggleTheme: (state) => {
      if (state.isDark) {
        state.isDark = false;
        state.background = "#E4F9F5";
        state.fontColor = "#40514E";
        state.thirdColor = "#30E3CA";
      } else {
        //for light theme
        state.isDark = true;
        state.background = "#222831";
        state.fontColor = "#EEEEEE";
        state.thirdColor = "#393E46";
      }
    },
  },
});

export default themeSlice;
