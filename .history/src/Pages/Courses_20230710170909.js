import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import FAQ from '../Component/Partial/Contact Us Components/FAQ'
import OverFlowingComp from '../Component/Partial/CoursesComponent/over-flowing-comp'

const Courses = () => {
  return (
    <>
        <Navbar />
        <OverFlowingComp />
        <FAQ />
    </>
  )
}

export default Courses