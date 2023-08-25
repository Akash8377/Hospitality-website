import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import HeadingCont from '../Component/Partial/heading-cont'

const SignIn = () => {
  return (
    <>
    <Navbar />

    <HeadingCont
        title={"Continue Signing In with"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        }
      />
    </>
  )
}

export default SignIn