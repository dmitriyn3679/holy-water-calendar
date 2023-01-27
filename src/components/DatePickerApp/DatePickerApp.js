import React from "react";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {styles} from "./customize";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../features/date";

export const DatePickerApp = () => {
  const visibleDate = useSelector(state => state.date)
  const preparedDate = {...visibleDate, month: visibleDate.month + 1}
  const dispatch = useDispatch();
  
  const selectDate = (date) => {
    dispatch(actions.selectDate({
      day: date.day,
      month: date.month - 1,
      year: date.year,
    }));
  };
  
  const renderCustomInput = ({ ref }) => (
    <button
      ref={ref}
      placeholder="I'm a custom input"
      style={styles.button}
    >
      <CalendarMonthIcon fontSize='large' sx={styles.icon} />
    </button>
  )
  
  return (
    <DatePicker
      value={preparedDate}
      onChange={selectDate}
      colorPrimary='#1876D2'
      renderInput={renderCustomInput}
    />
  );
};
