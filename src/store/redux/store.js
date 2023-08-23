import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users";
import loginReducer from "./login";
export const store = configureStore({
  reducer: {
    usersList: userReducer,
    login: loginReducer,
  },
});
