import React  from "react";
import { Questions } from "./questionData";
export default class Navigator extends React.Component{
    handleChange = (value) => {
        const { onChange } =this.props;
        onChange(value);
    }
    render(){
        const {id,color,reviewColor} =this.props;
        const questionsNavigator = Questions.map((element,i)=>{
            let navigationButtonId = i;
            if(color.includes(i)){
                return <button id={navigationButtonId} className="saved" key={`save${i}`} onClick={()=>{this.handleChange(i)}}>{i+1}</button>
            }
            else if(reviewColor.includes(i)){
                return <button id={navigationButtonId} className="review" key={`review${i}`} onClick={()=>{this.handleChange(i)}}>{i+1}</button>
            }
            else if(i === id){
                return <button id={navigationButtonId} className="selected" key={`current${i}`} onClick={()=>{this.handleChange(i)}}>{i+1}</button>
            }
            else {
                return <button id={navigationButtonId} key={`default${i}`} onClick={()=>{this.handleChange(i)}}>{i+1}</button>
            }
        })
        return <div className="navigatorDiv">{questionsNavigator}</div>
    }
}