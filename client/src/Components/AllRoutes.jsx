import React from 'react'
import Home from '../pages/Home/Home';
import Auth from '../pages/Auth/Auth';
import { Route, Routes} from 'react-router-dom';
import Questions from '../pages/Questions/Questions';
import Askquestion from './Askquestion/Askquestion';
import Displayquestion from '../pages/Questions/Displayquestion';
import Users from '../Users/Users';
import Tags from '../pages/Tags/Tags';
import UserProfile from '../pages/UserProfile/UserProfile';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/Auth" element={<Auth />}/>
      <Route path='/Questions' element={<Questions />} />
      <Route path='/Askquestion' element={<Askquestion />} />
      <Route path='/Questions/:id' element={<Displayquestion />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users/:id" element={<UserProfile />} />
    </Routes>
  )
}

export default AllRoutes
