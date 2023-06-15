import React from 'react'
import './Askquestions.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { askQuestion } from '../../actions/question'
import {useSelector,useDispatch} from 'react-redux'
const Askquestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("")
  const [questionTags, setQuestionTags] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.currentUserReducer);

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted: user.result.name, userId : user?.result?._id},navigate));
    navigate("/")
  }
  const handleEnter = (e) =>{
    if(e.key === 'Enter'){
      setQuestionBody(questionBody + "\n")
    }
  }
  return (
    <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Ask a Public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className='ask-form-container'>
            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input type='text' onChange={(e) => {setQuestionTitle(e.target.value);}} placeholder='e.g. Is there is any possiblity of implementing multiple inheritance in Java' name='questiontitle' id='ask-ques-title' />
            </label>
            <label htmlFor='ask-ques-body'>
              <h4>Body</h4>
              <p>Include all the information someone would you need to answer</p>
              <textarea onKeyPress={(e) => {handleEnter(e.target.value);}} onChange={(e) => {setQuestionBody(e.target.value);}} name="questionbody" id="ask-ques-body" cols="30" rows="10"></textarea>
            </label>
            <label htmlFor='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Ask up to 5 tags to describe what your question is about</p>
              <input type='text' onChange={(e) => {setQuestionTags(e.target.value.split(","));}} placeholder='(ex: xml, typescript, java)' name='questiontags' id='ask-ques-tags' />
            </label>
          </div>
          <input className='review-btn' type="submit" value='Review your question' />
        </form>
      </div>
    </div>
  )
}

export default Askquestion
