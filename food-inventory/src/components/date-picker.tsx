import React, { useState } from "react";
import { Box } from "@mui/material";

import "../stylesheet/date-picker.scss";

export default function DatePicker() {
  let [initialMonth, setInitialMonth] = useState(4);
  let [initialYear, setInitialYear] = useState(2021);
  let [intervalState, setIntervalState] = useState(0);
  let [intervalBegin, setIntervalBegin] = useState(-1);
  let [intervalEnd, setIntervalEnd] = useState(-1);

  function intervalLogic(currentDate: number) {
    console.log(intervalBegin + " " + intervalEnd);
    switch (intervalState) {
      case 0: {
        setIntervalBegin(currentDate);
        setIntervalState(1);
        break;
      }
      case 1: {
        setIntervalEnd(currentDate);
        if (intervalBegin <= intervalEnd) {
          //ApelFunctie
          console.log(intervalBegin + " " + intervalEnd);
        }
        setIntervalState(0);
        break;
      }
    }
  }

  let days: number[] = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
  let months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "July",
    "June",
    "August",
    "September",
    "Octomber",
    "November",
    "December",
  ];
  let calendarDays: JSX.Element[] = [];

  if (
    (initialYear % 4 === 0 && initialYear % 100 !== 0) ||
    initialYear % 400 === 0
  )
    ++days[1];

  for (let index = 1; index <= days[initialMonth]; ++index) {
    calendarDays.push(
      <li id={index.toString()} onClick={() => intervalLogic(index)}>
        {index}
      </li>
    );
  }

  function incrementMonth() {
    if (initialMonth === 11) {
      setInitialMonth(0);
    } else {
      setInitialMonth(++initialMonth);
    }
  }

  function decrementMonth() {
    if (initialMonth === 0) {
      setInitialMonth(11);
    } else {
      setInitialMonth(--initialMonth);
    }
  }

  function incrementYear() {
    setInitialYear(++initialYear);
  }

  function decrementYear() {
    setInitialYear(--initialYear);
  }

  return (
    <div id="date-picker-container">
      <div className="month">
        <div className="border-right-container">
          <p>15 TODAY</p>
        </div>
        <div className="border-right-container same-line-display">
          <p>
            {months[initialMonth]}
            <i onClick={incrementMonth} className="triangle-down"></i>
            <i onClick={decrementMonth} className="triangle-down"></i>
          </p>
        </div>
        <div className="same-line-display">
          <p>
            {initialYear}
            <i onClick={incrementYear} className="triangle-down"></i>
            <i onClick={decrementYear} className="triangle-down"></i>
          </p>
        </div>
      </div>

      <ul className="daynames">
        <li>MO</li>
        <li>TU</li>
        <li>WE</li>
        <li>TH</li>
        <li>FR</li>
        <li>SA</li>
        <li>SU</li>
      </ul>

      <ul className="days">{calendarDays}</ul>
    </div>
  );
}
