import React from 'react'
import LeftSidebar from '../../Components/Leftsidebar/LeftSidebar'
import RightSidebar from '../../Components/Rightsidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'
const Displayquestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <QuestionDetails />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Displayquestion
