import React, { useState } from 'react';


const Counter = (
        {
            value,
            label,
            labelId,
            incId,
            decId,
            valId,
            minValue,
            maxValue,
            onChange
        }
        )=>{
    return <div>
        <h1 id={labelId}>
            {label}
        </h1>
        <div id={valId}>
            {value}
        </div>
        <button id={incId} onClick={()=>onChange(((value+1)<=maxValue)?value+1:60)}>+</button>
        <button id={decId} onClick={()=>onChange(((value-1)>=minValue)?value-1:1)}>-</button>
    </div>
}

export default Counter;