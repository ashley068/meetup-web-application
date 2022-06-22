import { Calendar } from "antd";
import React from "react";
function onPanelChange(value, mode) {
  console.log(value, mode);
}
const CalendarItem = () => {
  return (
    <div style={{ border: "1px solid #d9d9d9", borderRadius: 4 }}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarItem;
