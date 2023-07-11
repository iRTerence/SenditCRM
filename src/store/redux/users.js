import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: "",
  },

  reducers: {
    getUserList: (state, action) => {
      state.users = action.payload.users;
    },
  },
});

export const getUserList = userSlice.actions.getUserList;
export default userSlice.reducer;
