import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Banner from '../Component/Partial/Find Work Component/Banner'
import ContactUsForm from '../Component/Partial/Find Work Component/contact-us-form'

const FindWork = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <HeadingCont
        title={"Who we Are?"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
        <ContactUsForm />
    </>
  )
}

export default FindWork