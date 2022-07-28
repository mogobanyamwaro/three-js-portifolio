import React from "react";

interface IHeaderProps {
  value: any;
  setValue: (value: any) => void;
}

function CalenderHeader(props: IHeaderProps) {
  const { value, setValue } = props;

  const currentMonthName = () => {
    return value.format("MMMM");
  };

  const currentYear = () => {
    return value.format("YYYY");
  };

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    return value.clone().add(1, "month");
  };

  return (
    <div className="month">
      <i
        onClick={() => setValue(() => prevMonth())}
        className="fas fa-angle-left prev"
      ></i>
      <div className="date">
        <h1> {currentMonthName()}</h1>
        <p>{currentYear()}</p>
      </div>
      <i
        onClick={() => setValue(() => nextMonth())}
        className="fas fa-angle-right next"
      ></i>
    </div>
  );
}

export default CalenderHeader;
