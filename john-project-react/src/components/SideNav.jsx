import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-64 bg-gray-100 border rounded-lg shadow-md">
      <div className="bg-yellow-700 text-white font-bold p-3 rounded-t-lg">Profile</div>
      <ul className="text-sm">
        <Link to={"/profile"}>
            <li className="border-b p-3 text-red-800 font-semibold">&raquo; Profile</li>
        </Link>
        <Link to={"/faculty"}>
        <li className="border-b p-3 text-red-800 font-semibold">&raquo; Faculty</li>
        </Link>
        <Link to={"/syllabus"}>
        <li className="border-b p-3 text-red-800 font-semibold">&raquo; Syllabus</li>
        </Link>
        <Link to={"/programmes"}>
        <li className="border-b p-3 text-red-800 font-semibold">&raquo; programmes</li>
        </Link>
        {/* <li className="border-b p-3 text-red-800 font-semibold">&raquo; Programme Specific Outcomes</li>
        <li className="border-b p-3 text-red-800 font-semibold">&raquo; Doctoral Degree Awarded</li>
        <li className="border-b p-3 text-red-800 font-semibold">&raquo; Association</li>
        <li className="p-3 text-red-800 font-semibold">&raquo; Endowments</li> */}
      </ul>
    </div>
  );
};

export default SideNav;
