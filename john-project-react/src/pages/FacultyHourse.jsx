import React from 'react'
import { useParams } from 'react-router-dom';
import { facultyHourse } from '../assets/facultyHourse';

const FacultyHourse = () => {
    const { hours } = useParams()
    const faculty = facultyHourse.find((f) => f.id === parseInt(hours));

    if (!faculty) return <p className="text-center text-red-500">Faculty not found.</p>;

    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const columns = ["I", "II", "III", "IV", "V"];

    return (
        <div>
            <div>
                <div className=' flex items-center gap-2 bg-[#FAEEE1] text-xl px-2 py-1 font-bold w-full'>
                    <h1 className=' ' >Faculty Hours :</h1>
                    <p>{faculty.name}</p>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <table className="border border-gray-300 w-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-8 py-4">#</th>
                            {columns.map((col) => (
                                <th key={col} className="border px-8 py-4">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="odd:bg-gray-100 even:bg-white">
                                <td className="border px-8 py-4 font-bold">{row}</td>
                                {columns.map((colIndex) => (
                                    <td key={colIndex} className="border px-4 py-2 text-center">{colIndex}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FacultyHourse