import React from 'react'
import styles from './Counter.module.scss'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }
    handleIncrement(){
        if(this.props.count + 1 <= this.props.maxValue)
            this.props.changeCountBy(+1);
    }
    handleDecrement(){
        if(this.props.count - 1 >= this.props.minValue)
            this.props.changeCountBy(-1);
    }
    render(){
        return<div className={styles.counter}>
            <h2 id={`${this.props.idPrefix}-label`} className={styles.label}>
                {this.props.label}
            </h2>
            <hr/>
            <div className={styles.container}>
                <h3 id={`${this.props.idPrefix}-length`} className={styles.display}>
                    {this.props.count}
                </h3>
                <div className={styles.buttonGroup}>
                    {this.props.disabled?<>
                    <button id={`${this.props.idPrefix}-decrement`} onClick={this.handleDecrement} className={styles.btn} disabled>
                        <i className={`fas fa-arrow-down fa-2x iconBtn`}></i>
                    </button>
                    <button id={`${this.props.idPrefix}-increment`} onClick={this.handleIncrement} className={styles.btn} disabled>
                        <i className={`fas fa-arrow-up fa-2x iconBtn`}></i>
                    </button>
                    </>
                    :<>
                    <button id={`${this.props.idPrefix}-decrement`} onClick={this.handleDecrement} className={styles.btn} >
                        <i className={`fas fa-arrow-down fa-2x iconBtn`}></i>
                    </button>
                    <button id={`${this.props.idPrefix}-increment`} onClick={this.handleIncrement} className={styles.btn} >
                        <i className={`fas fa-arrow-up fa-2x iconBtn`}></i>
                    </button>
                    </>
    }
                </div>
            </div>
        </div>
    }
}

export default Counter