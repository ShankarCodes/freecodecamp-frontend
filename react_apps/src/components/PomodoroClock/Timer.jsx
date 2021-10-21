import React from 'react'
import styles from './Timer.module.scss'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            timeLeft: this.props.timeLeft,
            interval: null,
        }
        console.log(this.props.timeLeft)
        this.tick = this.tick.bind(this)
    }
    tick(){
        if(this.state.timeLeft-1<0){
            // We are setting the time left to 2 because after the clock changes, there is a once second gap 
            // For it to show as 5:00 and not as 4:59.
            this.setState({timeLeft: 2})
            clearInterval(this.state.interval)
            this.setState({interval: null})
            this.props.changeTimer()
            this.setState({interval: setInterval(this.tick, 1000)})
        }
        else{
        this.setState((state,props)=>{
            return {timeLeft: state.timeLeft-1}
        })}
    }
    componentDidUpdate(previousProps){
        if(this.props.timeLeft !== previousProps.timeLeft){
            this.setState({timeLeft: this.props.timeLeft})
            console.log('Time updated')
        }
        if(this.props.hasBeenReset){
            this.setState({timeLeft: 25*60})
            this.props.timerUpdatedDuetoReset()
        }
        // State of parent has changed, maybe the timer was running and now it is stopped.
        if(this.props.isRunning !== previousProps.isRunning) {
            // Check if currently timer has been started...
            if(this.props.isRunning){
                // Check if any other interval exists, if it exits, clear it before starting a new one.
                if(!this.state.interval){
                    clearInterval(this.state.interval)
                }
                this.setState({interval: setInterval(this.tick, 1000)})
            }
            // The timer has been stopped
            else{
                // Interval exists, so remove it
                if(this.state.interval){
                    clearInterval(this.state.interval)
                    this.setState({interval: null})
                }
                // Else do nothing
            }
            
        }
    }
    componentWillUnmount(){
        if(this.state.interval){
            clearInterval(this.state.interval)
            this.setState({interval: null})
        }
    }
    render(){
        return <div className={styles.timer}>
            <h1 className={styles.label} id="timer-label">
                {this.props.label}
            </h1>
            <div className={styles.container}>
            <h1 className={styles.display} id="time-left">
                {`${('00' + Math.floor(this.state.timeLeft/60)).slice(-2)}:${('00' + Math.floor(this.state.timeLeft%60)).slice(-2)}`}
            </h1>
            {this.props.children}
            </div>
        </div>
    }
}
export default Timer