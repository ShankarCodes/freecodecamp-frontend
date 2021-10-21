import React from 'react';

class Timer extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            timeLeft:props.timeLeft,
            running: false,
            intervalId: null,
        }
        this.toggleRun = this.toggleRun.bind(this);
        this.countdownTimer = this.countdownTimer.bind(this);
    }
    countdownTimer(){
        this.setState((state,props)=>(state.timeLeft>=1?{timeLeft: state.timeLeft-1}:{timeLeft: 0}))
    }
    toggleRun(){
        if(!this.state.running){
            this.setState(
                {
                    intervalId:setInterval(this.countdownTimer,1000)
                })
        }
        else{
            clearInterval(this.state.intervalId)
            this.setState({intervalId:null})
        }
        this.setState((state,props)=>{return {running: !state.running}})
    }
    render(){
        return <div>
            <h1 id={this.props.labelId}>
                {this.props.label}{this.props.timeLeft}
            </h1>
            <div id="time-left">
                {`${('00' + Math.floor(this.state.timeLeft/60)).slice(-2)}:${('00' + Math.floor(this.state.timeLeft%60)).slice(-2)}`}
            </div>
            <button id="start_stop" onClick={this.toggleRun}>{this.state.running?"Pause":"Start"}</button>
            <button id="reset" onClick={this.props.onReset}>Reset</button>
        </div>
    }
}

export default Timer;