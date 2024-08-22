import React from 'react' 
import Homee from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login'; 
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/doctors/Doctors';
import DoctorsDetails from '../pages/doctors/DoctorsDetails';
import { Routes, Route  } from 'react-router-dom';

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homee />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorsDetails />} />
        </Routes>
      
    </div>
  )
}

export default Routers
