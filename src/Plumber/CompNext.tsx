import React, { useState } from "react";

const   CompNext: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [showPopup, setShowPopup] = useState(false);

  const handleDateSelect = (selectedDate: string) => {
    setSelectedDate(selectedDate);
  };

  const handleTimeSelect = (selectedTime: string) => {
    setSelectedTime(selectedTime);
  };

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  const dates = Array.from({ length: 30 }, (_, index) =>
    (index + 1).toString()
  );

  return (
    <div className="time-data-container">
      <h1 className="header">Service Book</h1>

      <div className="select-container">
        <label htmlFor="month" className="label">
          Select Month:
        </label>
        <select id="month" className="select">
          <option value="">Select a Month</option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>

      <div className="select-container">
        <label htmlFor="date" className="label">
          Select Date:
        </label>
        <select
          id="date"
          onChange={(e) => handleDateSelect(e.target.value)}
          className="select"
        >
          <option value="">Select a Date</option>
          {dates.map((dateValue) => (
            <option key={dateValue} value={dateValue}>
              {dateValue}
            </option>
          ))}
        </select>
      </div>

      <div className="select-container">
        <label htmlFor="time" className="label">
          Select Time:
        </label>
        <select
          id="time"
          onChange={(e) => handleTimeSelect(e.target.value)}
          className="select"
        >
          <option value="">Select a Time</option>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>Your submission was successful.</p>
            <button className="btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompNext;
