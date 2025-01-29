import React from "react";
import { useParams } from "react-router-dom";

const FacultyHours = () => {
  // Retrieve the faculty name from the URL
  const { name } = useParams();

  // Dummy data for faculty hours (you can replace this with real data)
  const hoursData = {
    "Dr. L. AROCKIAM": [
      { day: "Monday", time: "9:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "2:00 PM - 4:00 PM" },
    ],
    "Dr. S. BRITTO RAMESH KUMAR": [
      { day: "Tuesday", time: "10:00 AM - 1:00 PM" },
      { day: "Thursday", time: "3:00 PM - 5:00 PM" },
    ],
    "Dr. A. ALOYSIUS": [
      { day: "Monday", time: "11:00 AM - 1:00 PM" },
      { day: "Friday", time: "12:00 PM - 3:00 PM" },
    ],
  };

  const facultyHours = hoursData[name] || [];

  return (
    <div className="faculty-hours-container">
      <h1>{name}'s Office Hours</h1>
      {facultyHours.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {facultyHours.map((hour, index) => (
              <tr key={index}>
                <td>{hour.day}</td>
                <td>{hour.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No office hours available.</p>
      )}
    </div>
  );
};

export default FacultyHours;
