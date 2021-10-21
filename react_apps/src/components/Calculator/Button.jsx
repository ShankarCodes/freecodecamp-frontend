import styles from './Button.module.scss';
import React from "react";
const Button = ({ value, area, onClick, id }) => {
    return <button style={{ gridArea: area }} className={styles.btn} onClick={(event) => onClick(event.target.value)} id={id}>
        {value}
    </button>
}
export default Button;