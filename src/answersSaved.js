import React from "react";
import 'antd/dist/antd.min.css';
import { Questions } from "./questionData";
import { connect } from "react-redux";
import { correctAnswers } from "./correctAnswers";
import { Link } from "react-router-dom";
class ShowAnswers extends React.Component{
    answersSaved = localStorage.getItem('answers');
    answers = JSON.parse(this.answersSaved);
    componentDidMount() {
        let mark = 0;
        if(this.answers ===  null) {    
            return ''
        }
        else {
            this.answers.forEach(element =>{
                correctAnswers.forEach((correctElement,i) => {
                    if(element.QuestionNumber === correctElement.QuestionNumber){
                        if(Array.isArray(element.Ans) && Array.isArray(correctElement.Ans)){
                            if(JSON.stringify(element.Ans) === JSON.stringify(correctElement.Ans)){
                                mark = mark + 1
                            }
                        }
                        if(element.Ans === correctElement.Ans){
                            mark = mark+1;
                        }
                    }
                })
            })
            this.props.updateMark(mark);
            this.checkPassOrFail(mark);
        }
    }
    checkPassOrFail(mark)
    {
        if(mark >= (Questions.length / 2)){
            this.props.updateStatus("Pass") 
        }
        else{
            this.props.updateStatus("Fail")
        }
    }
    render(){
        if(this.answers === null){
            return(
                <div>
                    <h3  className="resultHeading">Saved Answers</h3>
                    <table className="tableWidth" >
                        <thead>
                            <tr>
                                <td >Question Number</td>
                                <td >Answer Chose</td>
                                <td >Correct Answer</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> - </td>
                                <td> - </td>
                                <td> - </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="markScored">You scored {this.props.mark} out of {Questions.length} and your status is {this.props.status}</div>
                    <div>
                        <Link to="/toFirstPage">
                            <button className="goFirstPage">Go Home</button>
                        </Link>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h3  className="resultHeading">Saved Answers</h3>
                    <table className="tableWidth" >
                        <thead>
                            <tr>
                                <td >Question Number</td>
                                <td >Answer Chose</td>
                                <td >Correct Answer</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.answers.map((element,i) =>{
                                return(
                                    <tr key={i}>
                                        {correctAnswers.map(correctElement => {
                                            if(element.QuestionNumber === correctElement.QuestionNumber){
                                                if(Array.isArray(element.Ans) && Array.isArray(correctElement.Ans)){
                                                    if(JSON.stringify(element.Ans) === JSON.stringify(correctElement.Ans)){
                                                        return(
                                                            <React.Fragment key={i}>
                                                                <td className="correct">{element.QuestionNumber}</td>
                                                                <td className="correct">{element.Ans}</td>
                                                                <td className="correct">{correctElement.Ans}</td>
                                                            </React.Fragment>
                                                        )
                                                    }
                                                }
                                                if(element.Ans === correctElement.Ans){
                                                    return(
                                                        <React.Fragment key={i}>
                                                                <td className="correct">{element.QuestionNumber}</td>
                                                                <td className="correct">{element.Ans}</td>
                                                                <td className="correct">{correctElement.Ans}</td>
                                                        </React.Fragment>
                                                    )
                                                }
                                                return(
                                                    <React.Fragment key={i}>
                                                            <td className="wrong">{element.QuestionNumber}</td>
                                                            <td className="wrong">{element.Ans}</td>
                                                            <td className="wrong">{correctElement.Ans}</td>
                                                    </React.Fragment>
                                                )
                                            }
                                            else
                                                return '';
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="markScored">You scored {this.props.mark} out of {Questions.length} and your status is {this.props.status}</div>
                    <div>
                        <Link to="/toFirstPage">
                            <button className="goFirstPage">Go Home</button>
                        </Link>
                    </div>
                </div>
            )
        }
     }
}
function mapStateToProps(state){
    return {
        mark: state.mark,
        status: state.status,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateMark: (value) => {
            dispatch({
                type: "MARK_UPDATE", payload:value})
        },
        updateStatus :(value) =>{
            dispatch({
                type: "STATUS_UPDATE", payload:value})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowAnswers);