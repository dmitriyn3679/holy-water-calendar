import {getMonth} from "../../helpers/getCurrentMonth";
import {Month} from "../Month";
import {Header} from "../Header";
import './Calendar.scss';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../features/date";
import {initialDate} from "../../helpers/initialDate";
import {CustomModal} from "../CustomModal";
import {useMemo} from "react";

export const Calendar = () => {
  const visibleDate = useSelector(state => state.date);
  const dispatch = useDispatch();
  
  const monthData = useMemo(() => {
    return getMonth(visibleDate);
  }, [visibleDate]);
  
  const prevMonth = () => {
    dispatch(actions.prevMonth());
  };

  const nextMonth = () => {
    dispatch(actions.nextMonth());
  };

  const today = () => {
    dispatch(actions.selectDate(initialDate))
  }
  
  return (
    <div className="calendar">
      <div className="container">
        <CustomModal />
        <Header
          today={today}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
        />
        <Month
          month={monthData}
        />
      </div>
    </div>
  );
};
