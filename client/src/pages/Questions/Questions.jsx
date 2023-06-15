import React from 'react'

import "../../App.css"
import LeftSidebar from '../../Components/Leftsidebar/LeftSidebar'
import RightSidebar from '../../Components/Rightsidebar/RightSidebar'
import Homemainbar from '../../Components/Homemainbar/Homemainbar'
const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <Homemainbar />
        <RightSidebar />
      </div>
    </div>
  )
}
export default Questions
