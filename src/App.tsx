import React, { useState } from "react";
import moment from "moment";
import Calendar from "./components/Calendar";
// import "./App.css";
import ZipcodeInput from "./components/zipcode.input";

function App() {
  // const [value, setValue] = useState(moment());
  // return <Calendar setValue={setValue} value={value} />;

  const [val, setVal] = useState<number>(0);
  const [error, setError] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(val);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(function (prev: any) {
      if (e.target.validity.valid) {
        return e.target.value;
      } else {
        setError("Only numbers are allowed");
        return prev;
      }
    });
  };
  return (
    <ZipcodeInput
      error={error}
      val={val}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;
