import React from "react";
import { Questions } from "./questionData";
import Options from "./options";
export default class MainContent extends React.Component{
    constructor(props){
        super();
        this.state = {totalQuestionCount:Questions.length}
    }
    render(){
        const {id,answers,setAnswer} =this.props;
    return(
        <>
            <div>
                <div>
                    ({Questions[id].question_no}){Questions[id].question}
                </div>
                <div>
                    {<Options type={Questions[id].type} options={Questions[id].options} questionId={Questions[id].question_no} setAnswer={setAnswer} answers={answers}/>}
                </div>
            </div>
        </>
        )
    }
}