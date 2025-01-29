import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FacultyList from './components/FacultyList'; // Ensure this is correct
import FacultyHours from "./components/FacultyHours";  // Ensure this is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FacultyList />} />
        <Route path="/faculty-hours/:name" element={<FacultyHours />} />
      </Routes>
    </Router>
  );
}

export default App;
