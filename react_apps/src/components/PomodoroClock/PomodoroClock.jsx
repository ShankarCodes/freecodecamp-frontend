import React from 'react'
import Navbar from '../Navbar'
import Clock from './Clock'
import styles from './PomodoroClock.module.scss'

class PomodoroClock extends React.Component{
    render(){
        return <>
        <Navbar/>
        <div className={styles.page}>
            <h2 className="heading">
                Pomodoro Clock
            </h2>
            <Clock/>
        </div>
    </>
}
}

export default PomodoroClock