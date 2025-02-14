import { useParams, Link } from "react-router-dom";
import { facultyMembers } from "../assets/facultyMembers";

// const facultyData = [
//   { id: 1, name: "Dr. L. AROCKIAM", position: "ASSOCIATE PROFESSOR AND HEAD", bio: "Expert in AI and Data Science.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5AlXL5aRN56VufqTMiX8HD7GP8rACwn3Vw&s" },
//   { id: 2, name: "Dr. S. BRITTO RAMESH KUMAR", position: "ASSISTANT PROFESSOR", bio: "Specialist in Machine Learning.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJSx__S7g5MPvcnaAIMEQ4RdJSpzO8Gy97Q&s" },
//   { id: 3, name: "Dr. A. ALOYSIUS", position: "ASSISTANT PROFESSOR", bio: "Expert in Cybersecurity.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANzKlAKfcR-kYhd5Wm58tdMCCVoEvWHuYMQ&s" },
// ];

const FacultyDetails = () => {
  const { detail_id } = useParams();
  const faculty = facultyMembers.find((f) => f.id === parseInt(detail_id));

  if (!faculty) return <p className="text-center text-red-500">Faculty not found.</p>;

  return (
    <div className=" bg-gray-100 p-6 rounded-lg">
        <div>
            {/* <h1 className=' bg-[#FAEEE1] text-xl px-2 py-1 font-bold w-full' >Faculty Details</h1> */}
        </div>
        <div className="max-w-2xl mx-auto shadow-lg rounded-lg p-6 bg-white">
          <img src={faculty.image} alt={faculty.name} className="mx-auto rounded-full w-32 h-32" />
          <h1 className="text-xl font-bold text-center mt-4">{faculty.name}</h1>
          <p className="text-center text-gray-600">{faculty.position}</p>
          <p className="mt-4">{faculty.bio}</p>
          <div className=" flex justify-center">
            <Link to="/faculty" className="text-blue-500 mb-4 text-center bg-gray-100 hover:bg-white hover:border py-2 px-4 rounded-lg w-fit flex justify-center border">Back to Faculty List</Link>
          </div>
          <div>
            <p className=" font-bold text-black pt-2 px-2 border-b border-black bg-blue-100 ">Personal Data</p>
            <div className=" flex flex-col gap-5 pt-3">
              <p>Date of Birth and Age : {faculty.dob} </p>
              <p>Religion : {faculty.religion} </p>
              {
                faculty.maritalstatus ? 
                <p>Marital Status : {faculty.maritalstatus} </p>
                :
                ""
              }
              <p>Email : {faculty.Email} </p>
              <p>Residential Address : {faculty.place} </p>
              <p>Address : {faculty.Address} </p>
              <p>Mobile : {faculty.mobile} </p>
            </div>
          </div>
          <div>
            <p className=" font-bold text-black pt-2 px-2 border-b border-black bg-blue-100 my-3">Educational Details </p>
            <img src={faculty.educationImg} alt="" />
          </div>
        </div>
    </div>
  );
};

export default FacultyDetails;
