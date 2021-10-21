import React from 'react'
import Counter from './Counter'
import Timer from './Timer'
import styles from './Clock.module.scss';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sessionLength: 25,
            breakLength: 5,
            isRunning: false,
            isSession: true,
            hasBeenReset: false,
        }
        this.changeSessionLengthBy = this.changeSessionLengthBy.bind(this)
        this.changeBreakLengthBy = this.changeBreakLengthBy.bind(this)
        this.reset = this.reset.bind(this)
        this.timerUpdatedDuetoReset = this.timerUpdatedDuetoReset.bind(this)
        this.changeTimerToBreak = this.changeTimerToBreak.bind(this)
        this.changeTimerToSession = this.changeTimerToSession.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    timerUpdatedDuetoReset(){
        this.setState({hasBeenReset:false})
    }
    reset(){
        this.setState({
            sessionLength: 25,
            breakLength: 5,
            isRunning: false,
            isSession: true,
            hasBeenReset: true,
        })
    }
    changeSessionLengthBy(changeInLength){
        this.setState((state,props)=>{
            return {
                sessionLength: state.sessionLength + changeInLength
            }
        })
    }
    changeBreakLengthBy(changeInLength){
        this.setState((state,props)=>{
            return {
                breakLength: state.breakLength + changeInLength
            }
        })
    }

    changeTimerToBreak(){
        this.setState((state)=>{
            return {
                isSession: false,
            }
        })
        console.log("Changing timer")
    }
    changeTimerToSession(){
        this.setState((state)=>{
            return {
                isSession: true,
            }
        })
        console.log("Changing timer")
    }
    resetTimer(){
        this.setState({
            isRunning: false,
            hasBeenReset: true,
        })
    }

    render(){
        return <div className={styles.clock}>
            <div className={styles.counters}>
                <Counter
                    count={this.state.sessionLength}
                    idPrefix = "session"
                    label = "Session length"
                    minValue = {1}
                    maxValue = {60}
                    changeCountBy ={this.changeSessionLengthBy}
                    disabled={this.state.isRunning}/>
                <Counter
                    count={this.state.breakLength}
                    idPrefix="break"
                    label="Break length"
                    minValue = {1}
                    maxValue = {60}
                    changeCountBy={this.changeBreakLengthBy}
                    disabled={this.state.isRunning}/>
            </div>
            <div className={styles.timer}>
                <Timer
                    timeLeft={this.state.isSession?(this.state.sessionLength*60):(this.state.breakLength*60)}
                    isRunning={this.state.isRunning}
                    label={this.state.isSession?"Session":"Break"}
                    hasBeenReset={this.state.hasBeenReset}
                    timerUpdatedDuetoReset={this.timerUpdatedDuetoReset}
                    changeTimer={this.state.isSession?this.changeTimerToBreak:this.changeTimerToSession}>

                    <button 
                        className={styles.btn} 
                        onClick={()=>this.setState((state)=>{return{isRunning: !state.isRunning}})}>
                        <i 
                            className={`fas fa-2x fa-${this.state.isRunning?"pause":"play"} iconBtn`} 
                            id="start_stop"/>
                    </button>
                    <button className={`textBtn`} onClick={this.reset} id="reset">
                            Reset
                    </button>
                </Timer>
            </div>
        </div>
    }

}

export default Clock