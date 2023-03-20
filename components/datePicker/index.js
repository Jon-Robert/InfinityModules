import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./datePicker.module.css";

const DatePicker = ({ onDatePick, locale }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
    const formattedDate = date.toLocaleDateString(locale || "is-IS");
    onDatePick && onDatePick(formattedDate);
  };

  return (
    <div className={styles.datePicker}>
      <input
        type="date"
        className={styles.input}
        value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
        onChange={handleDateChange}
      />
    </div>
  );
};

DatePicker.propTypes = {
  onDatePick: PropTypes.func,
  locale: PropTypes.string,
};

export default DatePicker;
