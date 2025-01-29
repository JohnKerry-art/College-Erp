import React from "react";

function HoursPage() {
  return (
    <div>
      <h2>Working Hours</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Day</th>
            <th>Open</th>
            <th>Close</th>
            <th>Break Start</th>
            <th>Break End</th>
          </tr>
        </thead>
        <tbody>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
            <tr key={index}>
              <td>{day}</td>
              <td>9:00 AM</td>
              <td>5:00 PM</td>
              <td>12:00 PM</td>
              <td>1:00 PM</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HoursPage;
