import {initialDate} from "../helpers/initialDate";
import {createSlice} from "@reduxjs/toolkit";
import {getFromLocalStorage} from "../helpers/getFromLocalStorage";

const initialState = getFromLocalStorage('visibleDate') || initialDate;

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    selectDate: (state, action) => {
      state.day = action.payload.day;
      state.month = action.payload.month;
      state.year = action.payload.year;
      localStorage.setItem('visibleDate', JSON.stringify(state));
    },
    prevMonth: (state) => {
      if (state.month === 0) {
        state.month = 11;
        state.year -= 1;
        localStorage.setItem('visibleDate', JSON.stringify(state));
    
        return;
      }
  
      state.month -= 1;
      localStorage.setItem('visibleDate', JSON.stringify(state));
    },
    nextMonth: (state) => {
      if (state.month === 11) {
        state.month = 0;
        state.year += 1;
        localStorage.setItem('visibleDate', JSON.stringify(state));
        
        return;
      }
  
      state.month += 1;
      localStorage.setItem('visibleDate', JSON.stringify(state));
    },
  },
});

export default dateSlice.reducer;
export const { actions } = dateSlice;
