import React from "react";
import { Link } from "react-router-dom";
import "components/FacultyList";

const FacultyList = () => {
  const facultyMembers = [
    {
      name: "Dr. L. AROCKIAM",
      position: "ASSOCIATE PROFESSOR AND HEAD",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5AlXL5aRN56VufqTMiX8HD7GP8rACwn3Vw&s",
    },
    {
      name: "Dr. S. BRITTO RAMESH KUMAR",
      position: "ASSISTANT PROFESSOR",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJSx__S7g5MPvcnaAIMEQ4RdJSpzO8Gy97Q&s",
    },
    {
      name: "Dr. A. ALOYSIUS",
      position: "ASSISTANT PROFESSOR",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANzKlAKfcR-kYhd5Wm58tdMCCVoEvWHuYMQ&s",
    },
  ];

  return (
    <div className="background_color-1">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://depaulcollege.in/wp-content/uploads/2022/06/DEPAUL_04-1.jpg"
            className="img1"
            alt="College Logo"
          />
        </a>
      </nav>

      <h1 className="h1">COMPUTER SCIENCE</h1>
      <p className="paragraph">Faculty</p>

      <div className="bottom-section">
        <div className="card-row">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="card-item">
              <img src={faculty.imgSrc} className="card-image" alt="Faculty" />
              <p className="card-head">{faculty.name}</p>
              <p className="card-para">{faculty.position}</p>
              <a href="#" className="card-head">
                View Profile
              </a>
              <br />
              <Link to={`/faculty-hours/${faculty.name}`} className="card-head">
                View Hours
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyList;
