import styles from './GridLayout.module.scss';
import React from 'react';
const GridLayout = ({children, expanded}) =>{
    return <div className={styles.sidebyside} style={expanded?{gridTemplateColumns: '1fr'}:null}>{children}</div>
}
export default GridLayout;