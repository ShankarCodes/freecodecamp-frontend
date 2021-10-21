import styles from './Calculator.module.scss'
import { React, useState } from 'react'
import Navbar from '../Navbar'
import Numberpad from './Numberpad'
import Display from './Dipslay'
const App = () => {
    const [expression, setExpression] = useState("");
    return <div>
        <Navbar />
        <div className={styles.page}>
            <div className={styles.bg}>
                <Display expression={expression} result={4} />
                <Numberpad expression={expression} setExpression={setExpression} />
            </div>
        </div>
    </div>
}
export default App;