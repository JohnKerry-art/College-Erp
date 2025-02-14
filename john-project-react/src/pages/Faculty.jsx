import React from 'react'
import FacultyCard from '../components/FacultyCard'
import { facultyMembers } from '../assets/facultyMembers'

const Faculty = () => {
    
  return (
    <div>
        <div>
            <h1 className=' bg-[#FAEEE1] text-xl px-2 py-1 font-bold w-full' >Faculty</h1>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100">
            {facultyMembers.map((member, index) => (
                <FacultyCard key={index} member={member} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Faculty