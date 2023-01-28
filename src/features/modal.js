import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: () => true,
    close: () => false,
  },
});

export default modalSlice.reducer;
export const { actions } = modalSlice;
