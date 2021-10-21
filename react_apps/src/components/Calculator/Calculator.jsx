import styles from './Calculator.module.scss'
import { React } from 'react'
import Navbar from '../Navbar'
import Numberpad from './Numberpad'
import Display from './Dipslay'
const App = () => {
    return <div>
        <Navbar />
        <div className={styles.page}>
            <div className={styles.bg}>
                <Display />
                <Numberpad />
            </div>
        </div>
    </div>
}
export default App;