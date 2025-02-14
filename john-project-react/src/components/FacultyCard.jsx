import React from 'react'
import { Link } from 'react-router-dom';

const FacultyCard = ({member}) => {
    return (
        <div className="border rounded-lg shadow-md p-6 text-center bg-white hover:shadow-2xl hover:scale-105 transition-all">
          <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-md" />
          <h3 className="font-bold mt-2">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.position}</p>
          <div className=' flex gap-2 justify-center py-2'>
            <Link to={`/faculty/${member.id}`} className="text-red-600 text-sm font-semibold mt-2 inline-block bg-blue-100 px-3 py-1 rounded-lg hover:bg-white hover:border hover:border-blue-100 border">
              View Profile
            </Link>
            <Link to={`/faculty/hours/${member.id}`} className="text-red-600 text-sm font-semibold mt-2 inline-block bg-blue-100 px-3 py-1 rounded-lg hover:bg-white hover:border hover:border-blue-100 border">
              View Hours
            </Link>
          </div>
        </div>
      );
}

export default FacultyCard