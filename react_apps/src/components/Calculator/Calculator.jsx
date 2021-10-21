import styles from './Calculator.module.scss'
import { React, useState } from 'react'
import Navbar from '../Navbar'
import Numberpad from './Numberpad'
import Display from './Dipslay'
const App = () => {
    const [expression, setExpression] = useState("0");
    const [result, setResult] = useState("0");
    return <div>
        <Navbar />
        <div className={styles.page}>
            <div className={styles.bg}>
                <Display expression={expression} result={result} />
                <Numberpad expression={expression} setExpression={setExpression} setResult={setResult} />
            </div>
        </div>
    </div>
}
export default App;