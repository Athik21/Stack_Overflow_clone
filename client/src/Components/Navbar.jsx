import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search.svg'
import Avatar from '../Components/Avatar'
import Button from '../Components/Button'
import decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import {useSelector, useDispatch} from 'react-redux'
import { setCurrentUser } from '../actions/CurrentUser'

const Navbar = () => {
  var user = useSelector((state) => state.currentUserReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logoutHandler = () =>{
    dispatch({type : "LOGOUT"})
    navigate("/");
    dispatch(setCurrentUser(null))
  }
  useEffect(()=>{
      const token = user?.token
      if(token){
        const decodedToken = decode(token);
        if(decodedToken.exp * 1000 < new Date().getTime()){
          logoutHandler()
        }
      }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
  },[dispatch]) 
  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to="/" className='nav-item nav-logo'><img src={logo} alt="logo" /></Link>
            <Link to="/" className='nav-item nav-btn'>About</Link>
            <Link to="/" className='nav-item nav-btn'>Products</Link>
            <Link to="/" className='nav-item nav-btn'>For Teams</Link>
            
            <form>
                <input type="text" placeholder='Search...' />
                <img src={search} className='search-icon' alt="search" width="15" />
            </form>
            { user === null ? 
               <Link to="/Auth" className='nav-item nav-links'>Login</Link> :
               <>
                  <Avatar backgroundColor='#009dff' px="12px" py="7px" borderRadius="50%" color="white"
                  ><Link to={`/Users/${user?.result?._id}`} style={{textDecoration:"none", color:"white"}}>
                    {user.result.name.charAt(0).toUpperCase()}
                    </Link>
                  </Avatar>
                  <button className='nav-item nav-links' onClick={logoutHandler}>Logout</button>
               </>
            }
        </div>
    </nav>
  )
}

export default Navbar
