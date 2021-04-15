import styles from './Pane.module.scss';
import React from 'react';
const Pane = ({children}) =>{
    return <div className={styles.pane}>
        {children}
    </div>
}
export default Pane;