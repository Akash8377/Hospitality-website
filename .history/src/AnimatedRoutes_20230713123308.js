import React from 'react'
import { BrowserRouter, Route, Routes , useLocation } from "react-router-dom";

const AnimatedRoutes = () => {
    
    const location = useLocation()
  return (
    <>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/event-booking" element={<EventBooking />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/find-work" element={<FindWork />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/staff-logIn" element={<StaffLoginIn />} />
          <Route path="/book-an-event" element={<BookAnEvent />} />
          <Route path="/book-full-bar" element={<BookFullService />} />
          <Route path="/permanent-job" element={<PermanentJob />} />
          <Route path="/casual-staff" element={<CasualStaff />} />
          <Route path="/permanent-staff" element={<PermanentStaff />} />
          <Route path="/client-login" element={<ClientLoginIn />} />
    </>
  )
}

export default AnimatedRoutes