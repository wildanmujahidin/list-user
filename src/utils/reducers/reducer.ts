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
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setdarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setdarkMode, addToFavorites, removeFromFavorites } =
  sliceState.actions;
export default reducer;
