import styles from './Display.module.scss'
import React from 'react';
const Display = ({ expression, result }) => {
    return <div>
        <div className={styles.displaybox}>
            <p className={styles.expression} id="display">
                {expression}
            </p>
            <p className={styles.result}>
                {result}
            </p>
        </div>
    </div>
}
export default Display;