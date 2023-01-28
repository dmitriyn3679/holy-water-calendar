import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';

const initialState = getFromLocalStorage('events') || [];

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('events', JSON.stringify(state));
    },
    updateEvent: (state, action) => {
      const modifiedState = state.map((event) => {
        if (event.id === action.payload.id) {
          return {
            id: event.id,
            title: action.payload.title,
            description: action.payload.description,
            dateTime: action.payload.dateTime,
          };
        }

        return event;
      });
      localStorage.setItem('events', JSON.stringify(modifiedState));

      return modifiedState;
    },
    deleteEvent: (state, action) => {
      const modifiedState = state
          .filter((event) => event.id !== action.payload);
      localStorage.setItem('events', JSON.stringify(modifiedState));

      return modifiedState;
    },
  },
});

export default eventsSlice.reducer;
export const { actions } = eventsSlice;
