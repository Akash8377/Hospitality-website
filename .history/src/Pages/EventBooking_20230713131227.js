import React , {useEffect} from 'react'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/Partial/Event Booking Component/Banner'
import VideoBanner from '../Component/Partial/Event Booking Component/Video-Banner'
import LinkSection from '../Component/Partial/LinkSection'

const EventBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <LinkSection />
        <Banner />
        <VideoBanner />
    </>
  )
}

export default EventBooking