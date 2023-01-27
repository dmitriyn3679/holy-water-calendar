import { configureStore } from '@reduxjs/toolkit'
import dateReducer from '../features/date';
import eventsReducer from '../features/events';
import modalReducer from '../features/modal';
import selectedReducer from '../features/selected';

export const store = configureStore({
  reducer: {
    date: dateReducer,
    events: eventsReducer,
    modal: modalReducer,
    selected: selectedReducer,
  }
})
