import React, { useState } from 'react';
import Navbar from '../Navbar';
import Counter from './Counter';
import Timer from './Timer';

const Clock = ()=>{
    const [currentState, setcurrentState] = useState("session");
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timeLeft, setTimeLeft] = useState(1500);
    return<div>
        <Navbar/>
        <Counter 
            value={sessionLength} 
            label="Session Length" 
            labelId="session-label"
            incId="session-increment"
            decId="session-decrement"
            valId="session-length"
            minValue = {1}
            maxValue = {60}
            onChange = {(value)=>{setSessionLength(value)}}
        />
        <Counter 
            value={breakLength} 
            label="Break Length" 
            labelId="break-label"
            incId="break-increment"
            decId="break-decrement"
            valId="break-length"
            minValue = {1}
            maxValue = {60}
            onChange = {(value)=>{setBreakLength(value)}}
        />
        <Timer
            label="Session"
            labelId="timer-label"
            timeLeft={sessionLength*60}
            onReset={()=>{setBreakLength(5); setSessionLength(25);}}
            updateTime={(newTime)=>setTimeLeft}
        />
    </div>
}
export default Clock;