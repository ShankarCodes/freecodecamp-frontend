import styles from './TextInfo.module.scss';
import TextStatistics from './TextStatistics';
import Navbar from '../Navbar';
import {React, useState} from 'react';
const TextInfo = () =>{
    const [text, setText] = useState('');
    return <div className={styles.page}>
        <Navbar/>
        <div className={styles.sidebyside}>
            <textarea 
                placeholder="Enter your text here"
                className={styles.inputbox}
                onChange={e=>setText(e.target.value)}
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                spellCheck="false"
                ></textarea>
        <TextStatistics text={text}/>
        </div>
    </div>
}
export default TextInfo;