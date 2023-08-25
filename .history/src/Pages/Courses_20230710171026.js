import React from 'react'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'
import OverFlowingComp from '../Component/Partial/CoursesComponent/over-flowing-comp'

const Courses = () => {
  return (
    <>
        <Navbar />
        <OverFlowingComp />
        <Footer />
    </>
  )
}

export default Courses