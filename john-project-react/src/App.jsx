import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideNav from './components/SideNav'
import Profile from './pages/Profile'
import Faculty from './pages/Faculty'
import Syllabus from './pages/Syllabus'
import Programmes from './pages/Programmes'
import FacultyDetails from './pages/FacultyDetails'
import FacultyHourse from './pages/FacultyHourse'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className=' grid grid-cols-1 md:grid-cols-5 w-[90%] mx-auto py-10'>
        <SideNav/>
        <div className=' col-span-4'>
            <Routes>
                <Route path='/profile' element={<Profile/>} />
                <Route path='/faculty' element={<Faculty/>} />
                <Route path='/syllabus' element={<Syllabus/>} />
                <Route path='/programmes' element={<Programmes/>} />
                <Route path="/faculty/:detail_id" element={<FacultyDetails />} />
                <Route path="/faculty/hours/:hours" element={<FacultyHourse />} />
            </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App