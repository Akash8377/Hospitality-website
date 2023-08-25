import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/Partial/Contact Us Components/Banner'
import OverflowingContent from '../Component/Partial/Contact Us Components/Overflowing-content'

const ContactUs = () => {
  return (
    <>
    <div style={{backgroundColor : "#eee"}} ></div>
        <Navbar />
        <Banner />
        <OverflowingContent />
    </>
  )
}

export default ContactUs