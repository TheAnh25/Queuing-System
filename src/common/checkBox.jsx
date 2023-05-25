import React from "react";
import { Checkbox } from "antd";

const CheckBox = ({ titleCheckbox }) => {
  return (
    <div>
      <Checkbox>{titleCheckbox}</Checkbox>
    </div>
  );
};

export default CheckBox;
