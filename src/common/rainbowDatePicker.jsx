import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

const RainbowDatePicker = () => {
  const [date, setDate] = useState(null);

  function onChange(date) {
    setDate(date);
  }
  return (
    <>
      <DatePicker
        id="datePicker-1"
        value={date}
        onChange={onChange}
        label="DatePicker Label"
        formatStyle="large"
      />
    </>
  );
};

export default RainbowDatePicker;
