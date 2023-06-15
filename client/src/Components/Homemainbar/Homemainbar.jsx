import React from 'react'
import './Homemainbar.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Questions from './Questions'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'
const Homemainbar = () => {
  const location = useLocation();
  
  const navigate = useNavigate();
  const questionList = useSelector((state) => state.askQuestionReducer)
  // const questionList = [
  //   {
  //     id: 1,
  //     upVote: 1,
  //     downVote: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java","node js","react js","no sql"],
  //     userPosted: "nano",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: {
  //       answerBody : "Answer",
  //       userAnswered: "kumar",
  //       answerredOn: "jam 2",
  //       userId: 2,
  //     }
  //   },
  //   {
  //     id: 2,
  //     upVote: 0,
  //     downVote: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript","no sql"],
  //     userPosted: "nano",
  //     askedOn: "jan 1",
  //     userId: 2,
  //     answer: {
  //       answerBody : "Answer",
  //       userAnswered: "kumar",
  //       answerredOn: "jam 2",
  //       userId: 2,
  //     }
  //   },
  //   {
  //     id: 3,
  //     upVote: 3,
  //     downVote: 1,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript","python","no sql"],
  //     userPosted: "nano",
  //     userId: 3,
  //     askedOn: "jan 1",answer: {
  //       answerBody : "Answer",
  //       userAnswered: "kumar",
  //       answerredOn: "jam 2",
  //       userId: 2,
  //     }
  //   }
  // ]
  const user = JSON.parse(localStorage.getItem("Profile"))
  const checkAuth = () => {
    if(user===null) {
      alert("login or signup to ask a question")
      navigate('/Auth')
    }
    else{
      navigate('/Askquestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>{
          location.pathname=== '/' ? <h1>Top Questions</h1> :
          <h1>All Questions</h1>
        } 
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questionList.data === null ? 
          <h1>Loading...</h1> :
          <>
            <p>{questionList.data.length}questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        }
    </div>
    </div>
  )
}

export default Homemainbar
