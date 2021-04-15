import styles from './Fullpage.module.scss';
import React from 'react';
const Fullpage = ({children, center}) =>{
    return <div className={`${styles.fullpage} ${center?styles.center:''}`}>
        {children}
        </div>
}
export default Fullpage;