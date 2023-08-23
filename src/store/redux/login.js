import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "login",
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
export default userSlice.reducer;
