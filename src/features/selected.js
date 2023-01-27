import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelected: (state, action) => action.payload,
    removeSelected: () => ({}),
  },
});

export default selectedSlice.reducer;
export const { actions } = selectedSlice;
