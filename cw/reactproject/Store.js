/* import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
 */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
