import React from "react";
import { Questions } from "./questionData";
export default class Buttons extends React.Component{
    storeAnswerInCookie = (id,valueToBeStored,color,setColor) => {
        setColor([...color,id]);
        var dataToBeStored = JSON.stringify(valueToBeStored);
        localStorage.setItem('answers',dataToBeStored);   //to store the answer in the local storage
        document.cookie = "answers = "+dataToBeStored;   //to store the values in the cookie
    }
    storeReviewAnswerInCookie = (id,reviewColor,setReviewColor) => {
        setReviewColor([...reviewColor,id]);
    }
    submitAnswer = () =>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Do you really want to finish the test now")){
            document.getElementById("wrapper").style.display="none";
            document.getElementById("Acknowledge").style.display="flex";
        }
        else{
            alert("Submission cancelled")
        }
    }
    handleChange = (value) => {
        const { onChange } =this.props;
        onChange(value);
    }
    render() {
        const {id,answers,color,setColor,reviewColor,setReviewColor} = this.props
        return(
            <>
                <div className="buttons">
                    {!(id === 0) && <button id="button1" onClick={()=>{this.handleChange(id-1)}}>Previous</button>}
                    <button id="button2" onClick={()=>this.storeAnswerInCookie(id,answers,color,setColor)}>Save</button>
                    <button id="button3" onClick={()=>this.storeReviewAnswerInCookie(id,reviewColor,setReviewColor)}>Mark&ReviewLater</button>
                    {(id === (Questions.length)-1) && <button id="button4" onClick={()=>this.submitAnswer()}>Submit</button>}
                    {!(id === (Questions.length)-1) && <button id="button5"  onClick={()=>{this.handleChange(id+1)}}>Next</button>}
                </div>
            </>
        )
    }
}