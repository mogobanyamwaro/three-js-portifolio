import * as moment from "moment";
import React from "react";
import { dayStyles } from "../utils/helpers";
import { buildCalender } from "../utils/buildCalender";
import CalenderHeader from "./Header";
import { useState, useEffect } from "react";
import Weekdays from "./Weekdays";

interface ICalendarProps {
  value: moment.Moment;
  setValue: (value: moment.Moment) => void;
}

function Calendar(props: ICalendarProps) {
  const { value, setValue } = props;
  const [calender, setCalender] = useState<any>([]);

  useEffect(() => {
    setCalender(buildCalender(value));
  }, [value]);

  return (
    <div className="container">
      <div className="calendar">
        <CalenderHeader setValue={setValue} value={value} />
        <Weekdays />
        <div className="days">
          {calender.map((week: string[], index: number) => {
            return (
              <React.Fragment key={index}>
                {week.map((day: any, index: number) => {
                  return (
                    <div
                      className={dayStyles(day, value)}
                      onClick={() => setValue(day)}
                      key={index}
                    >
                      {day.format("D")}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
