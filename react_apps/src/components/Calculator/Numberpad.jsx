import Button from './Button';
import styles from './Numberpad.module.scss';
import { evaluate } from 'mathjs';

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const symbols = ['decimal', 'add', 'subtract', 'multiply', 'divide', 'lparen', 'rparen']
const symbolsRep = ['.', '+', '-', '*', '/', '(', ')']
const validateExpression = (expression, newsym) => {
    if (expression === "0" && newsym !== "0") {
        return newsym;
    }
    else if (expression === "0" && newsym === "0") {
        return "0";
    }
    else if (expression.slice(-1) === "." && newsym === ".") {
        return expression;
    }
    else if (symbolsRep.includes(expression.slice(-1)) && symbolsRep.includes(newsym) && newsym === "-") {
        return expression + newsym;
    }
    else if (symbolsRep.includes(expression.slice(-1)) && symbolsRep.includes(newsym) && expression.slice(-1) === "-") {
        return expression.slice(0, -2) + newsym;
    }
    else if (symbolsRep.includes(expression.slice(-1)) && symbolsRep.includes(newsym)) {
        return expression.slice(0, -1) + newsym;
    }
    else {
        return expression + newsym;
    }
}
const Numberpad = ({ expression, setExpression, setResult }) => {
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
                    onClick={() => { let vexp = (validateExpression(expression, String(i))); setExpression(vexp); try { let exp = String(evaluate(vexp)); setResult(exp) } catch { } /* setResult((expression)) */ }}
                    id={num}
                />)
        }
        {
            symbols.map((sym, i) =>
                <Button
                    key={`button-${sym}`}
                    value={symbolsRep[i]}
                    area={sym}
                    onClick={() => { let vexp = (validateExpression(expression, symbolsRep[i])); setExpression(vexp); try { let exp = String(evaluate(vexp)); setResult(exp) } catch { }  /*setResult((expression))*/ }}
                    id={sym}
                />)
        }
        <Button
            key="button-clear"
            value="CL"
            area="clear"
            onClick={() => { setExpression("0"); setResult("0") }}
            id="clear"
        />
        <Button
            key="button-equals"
            value="="
            area="equals"
            onClick={() => { try { let exp = String(evaluate(expression)); setExpression(exp) } catch { } }}
            id="equals"
        />
    </div>
}
export default Numberpad;