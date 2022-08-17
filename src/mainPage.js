import Navigator from './navigator';
import MainContent from './mainContent';
import Buttons from './buttons';
import CountDownTimer from './CountDownTimer';
import { useState } from 'react';
import React from 'react';
import image from '/Users/subramaniyanivash/Quiz Portal with react along with redux/quiz_portal/src/images/Thank You.jpeg'
import ShowAnswers from './answersSaved';
import { Questions } from './questionData';
export default function MainPage(){
  const [id,setId] = useState(0);
  const [answers,setAnswer] = useState([]);
  const [savedQuestionId,setsSavedQuestionId] = useState([]);
  const [reviewQuestionId,setReviewQuestionId] = useState([]);
  const [hoursMinSecs, setHoursMinSecs] = useState({hours:0, minutes:Questions.length, seconds: 0});
  const [showAnswers,setShowAnswers] = useState(false)
  const handleSetId = (value) => {
    setId(value);
  }
  return (
    <div>
      <div id='Acknowledge'> 
        {!showAnswers &&  <div>
          <h2 className="AcknowledgeHeading">Thanks For Taking the Quiz , click show score to show the result</h2>
          </div>
        }
        {!showAnswers && <div>
          <button id='button6' onClick={()=> setShowAnswers(true)}>show score</button>
        </div>
        }
        {showAnswers && <ShowAnswers/>}
        {!showAnswers && <div className="imageDiv">
          <img className="image" src={image} alt="BigCo Inc. logo"/>
        </div>
        }
      </div>
      <div id='wrapper'>
        <div className="header">Quiz Portal</div>
        <div className='container'>
          <div className="navigator">
            <div className='headings'>Navigator</div>
            <Navigator onChange={handleSetId} id={id} color={savedQuestionId} reviewColor={reviewQuestionId}/>
            <div className='legend'> 
              <p className='headings'>Legend</p>
              <p className='box orange'></p>Current Question
              <p className='box green'></p>Saved Question
              <p className='box purple'></p>Marked for Review
              <p className='box gray'></p>Not Answered
            </div>
            <div className='timer'>
              <p className='headings'>Time Remaining</p>
              <CountDownTimer hoursMinSecs={hoursMinSecs} setTime={setHoursMinSecs}/>
            </div>
          </div>
          <div className='mainContent'>
            <h3 className='headingQuestion'>Question</h3>
            <MainContent id={id} setAnswer={setAnswer} answers={answers}/>
            <Buttons onChange={handleSetId} id={id} answers={answers} color={savedQuestionId} setColor={setsSavedQuestionId} reviewColor={reviewQuestionId} setReviewColor={setReviewQuestionId}/>
          </div> 
        </div>
      </div>
    </div>
  );
}