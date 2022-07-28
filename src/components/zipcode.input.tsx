import React, { useState } from "react";
import "./zipcode.css";

interface IZipcodeInputProps {
  error?: string;
  val: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ZipcodeInput(props: IZipcodeInputProps) {
  const { error, val, handleChange, handleSubmit } = props;
  return (
    <div className="container">
      <h1>{error && error}</h1>
      <form onSubmit={handleSubmit}>
        <label>Zipcodes</label>
        <p>{val}</p>
        <input
          type="text"
          pattern="[0-9]*"
          autoComplete="on"
          value={val}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ZipcodeInput;
