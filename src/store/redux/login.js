import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    setLoggedInUser: (state, action) => {
      state.user = action.payload.user;
    },
    setLoggedOutUser: (state) => {
      state.user = null;
    },
  },
});

export const setLoggedInUser = userSlice.actions.setLoggedInUser;
export const setLoggedOutUser = userSlice.actions.setLoggedOutUser;

export default userSlice.reducer;
