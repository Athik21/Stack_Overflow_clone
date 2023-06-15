import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './UsersProfile.css'
import { updataProfile } from '../../actions/Users'
const EditProfileForm = ({currentUser, setSwitch}) => {
    const [name, setName] = useState(currentUser?.result.name)
    const [about, setAbout] = useState(currentUser?.result.about)
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const handelCancle = () =>{
        setSwitch(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(tags.length === 0 ){
            dispatch(updataProfile(currentUser?.result?._id, { name, about, tags: currentUser?.result?.tags }));
        }
        else{
            dispatch(updataProfile(currentUser?.result?._id,{ name , about , tags }));
        }
        setSwitch(false)
    } 
return (
    <div>
      <h1 className='edit-profile-title'>
          Edit Your Profile
      </h1>
      <h2 className='edit-proflie-title-2'>
        Public information
      </h2>
      <form className='edit-profile-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>
            <h3>Display Name</h3>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} id='name'/>
        </label>
        <label htmlFor='about'>
            <h3>About me</h3>
            <textarea id="about" cols="38" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}/>   
        </label>
        <label htmlFor='tags'>
            <h3>Watched Tags</h3>
            <p>Add tags seperated by 1 space</p>
            <input type='text' onChange={(e) => setTags(e.target.value.split(" "))} id='tags'/>
        </label><br />
        <input type='submit' value="Save Profile" className='user-submit-btn' />
        <button type='button' className='user-cancel-btn' onClick={handelCancle}>Cancel</button>
      </form>
    </div>
  )
}

export default EditProfileForm
