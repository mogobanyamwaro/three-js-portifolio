import * as Moment from "moment";

export const buildCalender = (value: Moment.Moment) => {
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calender = [];
  while (day.isBefore(endDay, "day")) {
    calender.push(Array.from(Array(7), () => day.add(1, "day").clone()));
  }
  return calender;
};
