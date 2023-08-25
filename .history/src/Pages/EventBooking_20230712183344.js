import React from 'react'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/Partial/Event Booking Component/Banner'
import VideoBanner from '../Component/Partial/Event Booking Component/Video-Banner'

const EventBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Navbar />
        <Banner />
        <VideoBanner />
        <Footer />
    </>
  )
}

export default EventBooking