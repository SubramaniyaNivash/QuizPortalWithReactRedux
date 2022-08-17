import React from "react";
export default class Options extends React.Component{
    checkBoxAnswers = [];
    checkBoxQuestionsId = [];
    storeAnswer = e =>{
        const {setAnswer,answers,questionId} =this.props;
        if(e.target.type === "radio"){
            let answersCopy = [...answers];
            const presentCheck = answersCopy.find(({QuestionNumber}) => QuestionNumber === questionId);
            const index = answersCopy.indexOf(presentCheck);
            if(presentCheck){
                answersCopy[index].Ans = e.target.value;
                setAnswer(answersCopy);
            }
            else{
                setAnswer([...answers,{QuestionNumber:questionId,Ans:e.target.value}]);
            }
        }
        else if(e.target.type === "checkbox"){
            if(!this.checkBoxQuestionsId.includes(questionId)){
                this.checkBoxAnswers=[]
            }
            this.checkBoxQuestionsId.push(questionId);
            if(this.checkBoxQuestionsId.includes(questionId)){ if(!this.checkBoxAnswers.includes(e.target.value)){
                    this.checkBoxAnswers.push(e.target.value);
                }
                else{
                    this.checkBoxAnswers.pop(e.target.value)
                }
            }
            else{
                if(!this.checkBoxAnswers.includes(e.target.value)){
                    this.checkBoxAnswers = [];
                    this.checkBoxAnswers.push(e.target.value);
                }
                else{
                    this.checkBoxAnswers.pop(e.target.value)
                }
            }
            let answersCopy = [...answers];
            const presentCheck = answersCopy.find(({QuestionNumber}) => QuestionNumber === questionId);
            const index = answers.indexOf(presentCheck);
            if(presentCheck){
                answersCopy[index].Ans = this.checkBoxAnswers;
                setAnswer(answersCopy);
            }
            else{
                setAnswer([...answers,{QuestionNumber:questionId,Ans:this.checkBoxAnswers}]);
            }
        }
    }
    render(){
        const {type, options, questionId, answers} = this.props;
        return(
            <div className="optionsMargin">
                {options.map((element,i) => {
                    if(type==='radio') {
                        return(
                            <div key={`radio${i}`}>
                                <input type={type} value={element} name={questionId} onChange={this.storeAnswer} checked={answers.some(value=> value.Ans === element)}/>
                                <label>{element}</label>
                            </div>
                        )
                    }
                    else if(type==='checkbox') {
                        return(
                        <div key={`checkBox${i}`}>
                                <input type={type} value={element} name={questionId} onChange={this.storeAnswer} checked={this.checkBoxAnswers.includes(element)}/>
                                <label>{element}</label>
                        </div>
                        )
                    }
                    else return '';
                })}
            </div>
        )
    }
}