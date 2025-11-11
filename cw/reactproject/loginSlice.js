import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  loggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state) => {
      if (state.username && state.password) {
        state.loggedIn = true;
      }
    },
    clear: (state) => {
      state.username = '';
      state.password = '';
      state.loggedIn = false;
    },
  },
});

export const { setUsername, setPassword, login, clear } = loginSlice.actions;
export default loginSlice.reducer;
