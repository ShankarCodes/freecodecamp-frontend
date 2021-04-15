import styles from './Textarea.module.scss';
import React, { useState } from 'react';

const Textarea = ({textid, handleOnChange, value}) =>{
    return <textarea id={textid} onChange={handleOnChange} value={value}>
    </textarea>
}
export default Textarea;