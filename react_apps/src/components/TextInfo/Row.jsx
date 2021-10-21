import {React} from 'react';
const Row = ({label, value, children, labelSize, textSize}) =>{
    return <li>
        <span style={{fontWeight: 600, fontSize: labelSize||'1.3em'}}>
            {label}:{" "}
        </span>
        <span style={{fontWeight: 400, fontSize: textSize||'1.3em', color: 'rgb(0, 10, 71)'}}>
            {value}
        </span>
        {children}
    </li>
}
export default Row;