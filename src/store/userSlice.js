import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    showUserName: true,
  },
  reducers: {
    togleUserNameVisibility: state => {
      state.showUserName = !state.showUserName;
    },
  },
});

export const { togleUserNameVisibility } = userSlice.actions;

export default userSlice.reducer;
