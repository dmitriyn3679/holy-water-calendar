import React from 'react';
import { Day } from "../Day";
import './Month.scss';

export const Month = React.memo(function Month({ month }) {
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
