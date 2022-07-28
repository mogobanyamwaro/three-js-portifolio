const isSelected = (date: any, value: any) => {
  return value.isSame(date, "day");
};

const beforeToday = (date: any) => {
  return date.isBefore(new Date(), "day");
};

const isToday = (day: any) => {
  return day.isSame(new Date(), "day");
};

export function dayStyles(day: any, value: any) {
  if (isSelected(day, value)) {
    return "selected";
  }
  if (isToday(day)) {
    return "today";
  }
  if (beforeToday(day)) {
    return "prev-date";
  }

  return "";
}
