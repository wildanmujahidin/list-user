import { createSlice } from "@reduxjs/toolkit";
import { UsersType } from "../types/users";

interface StateType {
  favorites: UsersType[];
  darkMode: boolean;
}

const initialState: StateType = {
  favorites: [],
  darkMode: false,
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setdarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setFavorites, setdarkMode } = sliceState.actions;
export default reducer;
