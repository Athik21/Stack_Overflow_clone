import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getQuestion } from './actions/question';
import { fetchAllUsers } from './actions/Users';
function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getQuestion());
    dispatch(fetchAllUsers());
  }, [dispatch])
  
  return (
    <div className="App">
      <Router>
        <Navbar />  
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
