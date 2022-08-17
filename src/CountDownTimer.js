import React from 'react'
import { useState,useEffect } from 'react';
const CountDownTimer = ({hoursMinSecs}) => {
    const { hours = 0, minutes = 0, seconds = 0 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]); 
    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0){
            document.getElementById("wrapper").style.display="none";
            document.getElementById("Acknowledge").style.display="flex";
        }
        else if(hrs === 0 && mins === 5 && secs === 0){
            alert("Hurry Up!!! Last Five Minutes");
            setTime([hrs,mins-1,59])
        }
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
    if(mins <= 4 && secs <= 60){
        return (
            <div>
                <p className='lastMinutes'>{`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
            </div>
        );
    }
    else{
        return (
            <div>
                <p className='timer'>{`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
            </div>
        );
    }
}
export default CountDownTimer;