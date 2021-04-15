import styles from './GridLayout.module.scss';
import React from 'react';
const GridLayout = ({children}) =>{
    return <div className={styles.sidebyside}>{children}</div>
}
export default GridLayout;