import {Day} from "../Day";
import './Month.scss';
import {memo} from "react";

export const Month = memo(({ month }) => {
  return (
    <div className="month">
      {month.map((week) => (
        week.map(day => (
          <Day key={day.toString()} date={day} />
        ))
      ))}
    </div>
  );
});
