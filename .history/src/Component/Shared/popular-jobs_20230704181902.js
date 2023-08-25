import React from 'react'

const PopularJobs = () => {
  return (
    <div className='Popular_Jobs'>
        <table>
           <tbody>
            <tr>
                <td>
                    <span className='flex-cont'>
                            <img src='./Image/logo.png' alt=''/>
                            <p>Head Chef</p>
                    </span>
                </td>
                <td>
                <span className='flex-cont'>
                            <img src='./Image/logo.png' alt=''/>
                            <p>Head Chef</p>
                    </span>
                <i className="fa-solid fa-calendar-days"></i>  20th Feb 2023
                <select>Select Duration</select>
                </td>
            </tr>
           </tbody>
        </table>
    </div>
  )
}

export default PopularJobs