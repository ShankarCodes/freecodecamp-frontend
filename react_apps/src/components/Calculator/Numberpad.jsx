import Button from './Button';
import styles from './Numberpad.module.scss';
const Numberpad = ({ expression, setExpression }) => {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let symbols = ['decimal', 'equals', 'add', 'subtract', 'multiply', 'clear', 'divide', 'lparen', 'rparen']
    let symbolsRep = ['.', '=', '+', '-', '*', 'CL', '/', '(', ')']
    /*
    return <div className={styles.buttonsContainer}>
        {numbers.map((num, i) => <button id={num} style={{ gridArea: num, backgroundColor: `rgb(${25 * (10 - i)}, ${25 * i}, ${255})` }} key={`button-${num}`} className={styles.btn}>{i}</button>)}
        {symbols.map((sym, i) => <button id={sym} style={{ gridArea: sym, backgroundColor: `rgb(${25 * (10 - i)}, ${255}, ${25 * i})` }} key={`button-${sym}`} className={styles.btn}>{symbolsRep[i]}</button>)}
    </div>
    */
    return <div className={styles.buttonsContainer}>
        {
            numbers.map((num, i) =>
                <Button
                    key={`button-${num}`}
                    value={i}
                    area={num}
                />)
        }
        {
            symbols.map((sym, i) =>
                <Button
                    key={`button-${sym}`}
                    value={symbolsRep[i]}
                    area={sym}
                />)
        }
    </div>
}
export default Numberpad;