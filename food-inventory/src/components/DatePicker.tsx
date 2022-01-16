import React, { useState } from "react";

import "../stylesheet/date-picker.scss";
import dateIntervalService from "../hooks/useDateInterval";

function colorDate(day: number, colour: string) {
  let calendarDay = document.getElementById(day.toString());
  if (calendarDay) calendarDay.style.color = colour;
}

export default function DatePicker() {
  let [initialMonth, setInitialMonth] = useState(4);
  let [initialYear, setInitialYear] = useState(2021);

  let dateInterval: Array<number> = [];

  function intervalHighlight(begin: number, end: number) {
    for (let index = 1; index <= 31; ++index) {
      colorDate(index, "white");
    }

    for (let index = begin; index <= end; ++index) {
      colorDate(index, "red");
    }
  }

  function intervalLogic(currentDate: number) {
    dateInterval.push(currentDate);

    if (dateInterval.length === 1) {
      colorDate(dateInterval[0], "red");
      return;
    }

    if (dateInterval.length > 2) {
      for (let index = dateInterval[0]; index <= dateInterval[1]; ++index) {
        colorDate(index, "white");
      }
      dateInterval.splice(2, 3);
      return;
    }

    dateInterval.sort((x: number, y: number) => {
      return x - y;
    });

    intervalHighlight(dateInterval[0], dateInterval[1]);
    console.log(dateInterval);
  }

  function submitDateInterval() {
    if (!dateInterval[0] || !dateInterval[1]) {
      console.log("ERROR: Can't submit only a data point!");
      return;
    }
    dateIntervalService.postDateInterval(dateInterval[0], dateInterval[1]);
    //window.location.reload();
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
      <div id="month">
        <div className="border-right-container">
          <p>TODAY {new Date().getDate()}</p>
        </div>
        <div className="border-right-container same-line-display">
          <p>
            {months[initialMonth]}
            <button onClick={incrementMonth}>ʌ</button>
            <button onClick={decrementMonth}>v</button>
          </p>
        </div>
        <div className="same-line-display">
          <p>
            {initialYear}
            <button onClick={incrementYear}>ʌ</button>
            <button onClick={decrementYear}>v</button>
          </p>
        </div>
      </div>

      <ul id="daynames">
        <li>MO</li>
        <li>TU</li>
        <li>WE</li>
        <li>TH</li>
        <li>FR</li>
        <li>SA</li>
        <li>SU</li>
      </ul>

      <ul id="days">{calendarDays}</ul>
      <button id="submitButton" onClick={() => submitDateInterval()}>
        Submit date interval
      </button>
    </div>
  );
}
