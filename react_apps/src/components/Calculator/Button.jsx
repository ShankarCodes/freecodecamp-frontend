import styles from './Button.module.scss';
import React from "react";
const Button = ({ value, area }) => {
    return <button style={{ gridArea: area }} className={styles.btn}>
        {value}
    </button>
}
export default Button;