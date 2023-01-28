import { useDispatch, useSelector } from "react-redux";
import { styles } from "./customize";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { actions } from "../../features/date";

export const DatePickerApp = () => {
  const dispatch = useDispatch();
  const visibleDate = useSelector(state => state.date)
  const preparedDate = {...visibleDate, month: visibleDate.month + 1 }
  
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
