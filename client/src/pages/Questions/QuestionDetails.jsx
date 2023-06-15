import React,{useState} from 'react'
import { useParams, Link , useNavigate, useLocation} from 'react-router-dom'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import Avatar from '../../Components/Avatar'
import DisplayAnswers from './DisplayAnswers'
import { useDispatch , useSelector} from 'react-redux'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'
import moment from 'moment'
import copy from "copy-to-clipboard"
import './Questions.css'
const QuestionDetails = () => {
    const {id} = useParams()
    const questionList = useSelector((state) => state.askQuestionReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("Profile"))
    const [Answer, setAnswer] = useState("");
    const handlePostAnswer = (e, answerlength) =>{
        e.preventDefault();
        if(user === null) {
            alert('Login of Signup to answer a question')
            navigate("/Auth")
        }
        else{
            if(Answer === ""){
                alert("Enter an answer before submitting")
            }
            else{
                dispatch(postAnswer({id, noOfAnswers: answerlength + 1, answerBody: Answer, userAnswered: user?.result?.name, userId: user?.result?._id}))
            }
        }
    }
    const location = useLocation();
    const url = "http://localhost:3000"
    const handleShare = () =>{
        copy(url+location.pathname)
        alert("Copied URL: "+url+location.pathname)
        console.log(location)
    }
    const handleDelete = (e) =>{
        e.preventDefault()
        dispatch(deleteQuestion( id , navigate ));
    }
    const upvoteHandler = () => {
        if(user===null){
            alert("Please signup or login to Vote")
            navigate("/Auth")
        }
        else{
            dispatch(voteQuestion(id, 'upVote', user.result._id))
        }
    }
    const downvoteHandler = () => {
        if(user===null){
            alert("Please signup or login to Vote")
            navigate("/Auth")
        }else{
            dispatch(voteQuestion(id, 'downVote', user.result._id))
        }
    }
  return (
    <div className='question-details-page'>
      {
        
        questionList.data === null ? <h1>Loading...</h1>:
        <>
            {
                questionList.data.filter((question) => question._id === id).map((question) => (
                    <div key={question._id}>
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className='question-votes'>
                                    <img className='votes-icon' src={upvote} onClick={upvoteHandler} alt='upvote' width="18px"/>
                                    <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={downvote} alt='upvote' className='votes-icon' onClick={downvoteHandler} width="18px"/>
                                </div>
                                <div style={{width: "100%"}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className='question-details-tags'>
                                        {
                                            question.questionTags.map((tag)=>(
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='question-actions-user'>
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                user?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>
                                                )
                                            }
                                        </div>
                                        <div>
                                            <p>asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/Users/${question.userId}`} className='user-link' style={{color: "#0086c8"}}>
                                                <Avatar backgroundColor="orange" px="8px" py="5px" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>{question.userPosted}</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 && (
                                <section>
                                    <h3>{question.noOfAnswers} Answers</h3>
                                    <DisplayAnswers key={question._id} question={question} handleShare={handleShare}/>
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <h3>Your Answer</h3>
                            <form onSubmit={(e) => { handlePostAnswer(e, question.answer.length); }}>
                                <textarea name="answer" id="" cols="30" rows="10" onChange={(e) => {setAnswer(e.target.value)}}></textarea><br />
                                <input type='submit' className='post-ans-btn' value='Post Your Answer' />
                            </form>
                            <p>Browse other Question tagged
                            {
                                question.questionTags.map((tag) =>(
                                    <Link to="/Tags" key={tag} className='ans-tags'>{tag} </Link>
                                ))
                            } or {
                                <Link to="/AskQuestion" style={{textDecoration:"none", color:"#009dff"}}> ask your</Link>
                            }
                            </p>
                        </section>
                    </div>
                ))
            }
        </>
      }
    </div>
  )
}

export default QuestionDetails
