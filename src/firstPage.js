import React from "react";
import { Link } from "react-router-dom";
export default class FirstPage extends React.Component{
    render(){
        if(localStorage.getItem('answers')){

            localStorage.clear();
        }
        return(
            <div className="backGroundImage">
                <div className="headings">
                    <h3>General Knowledge Quiz</h3>
                </div>
                <div className="instructionsDiv">
                    <div className="instructionsHeading">
                        <h4>Please Read all the below instructions carefully before start the exam</h4>
                    </div>
                    <ul>
                        <li>The timer<>⏰</>will start after clicking the start exam button</li>
                        <li>The start exam button will take you to the exam page</li>
                        <li>No Logins or name are asked in the exam page you can take the quiz anonymously</li>
                        <li>The time remaining for the quiz to end will displayed below the navigator</li>
                        <li>Keep in mind that the selected answer of each question saved only after clicking the save button <button>Save</button></li>
                        <li>So, click save before proceed to next question</li>
                        <li>The submit button <button>submit</button> will enable on reaching the last question</li>
                        <li>Don't forgot to press the submit button at last</li>
                        <li>If failed to press the submit button before the time's up don't worry the answers are saved</li>
                        <li>You can view your saved answers and the score after the exam over</li>
                        <li>There will be an alert on last five minutes</li>
                    </ul>
                    <h4 className="instructionsHeading">Important Instructions</h4>
                    <ul className="liRed">
                        <li>Must complete the quiz in Single take</li>
                        <li>Must avoid the page reload or browser closing</li>
                    </ul>
                </div>
                <Link to='/toMainPage'>
                    <button className="startExamButton">Start Exam</button>
                </Link>
            </div>
        )
    }
}