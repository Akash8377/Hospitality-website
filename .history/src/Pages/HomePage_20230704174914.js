import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import AboutUs from '../Component/Shared/about-us'
import Banner from '../Component/Shared/Banner'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <AboutUs />
    </>
  )
}

export default HomePage