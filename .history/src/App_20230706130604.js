import React from 'react'
import {  BrowserRouter  , Route , Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'



// Css
import './Css/Navbar.css'
import './Css/Lap.css'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App