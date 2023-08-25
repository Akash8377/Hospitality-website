import React from 'react'
import {  BrowserRouter  , Route , Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'



// Css
import './Css/Navbar.css'
import './Css/Lap.css'
import AboutUs from './Pages/AboutUs'
import EventBooking from './Pages/EventBooking'
import ContactUs from './Pages/ContactUs'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/event-booking' element={<EventBooking />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/sign'
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App