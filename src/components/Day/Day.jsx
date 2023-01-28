import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Event } from "../Event";
import classNames from "classnames";
import dayjs from "dayjs";
import _ from 'lodash';
import './Day.scss';

export const Day = ({ date }) => {
  const currentDate = date.format('DD.MM.YYYY');
  const visibleDate = useSelector(state => state.date);
  const events = useSelector(state => state.events);
  const today = dayjs().format('DD.MM.YYYY');
  const weekday = new Date(date)
    .toLocaleString('en-US', {weekday: 'short'});
  
  const currentEvent = useMemo(() => {
    return events.filter(event => {
      return  _.isEqual(
        dayjs(event.dateTime).format('DD.MM.YYYY'),
        currentDate
      );
    });
  }, [events, currentDate]);
  
  return (
    <div className={classNames(
      'day',
      {'day--disabled': dayjs().month(visibleDate.month).month() !== date.month()},
      {'day--today': currentDate === today},
    )}>
      <div className="day__container">
        <span className="day__number">{date.format('D')}</span>
        <span className="day__weekday">{weekday}</span>
      </div>
      <div className="day__events">
        {currentEvent.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};
