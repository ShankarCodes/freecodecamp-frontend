import React from 'react';
import Navbar from '../Navbar';
import Quotebox from './Quotebox';
import styles from './Quotemachine.module.scss';

const App = () =>{
    return <div className={styles.page}>
        <Navbar></Navbar>
        <Quotebox/>
        <div className={styles.footer}>
            <div>
                <a href="https://github.com/shankarcodes/freecodecamp-frontend">Source</a>
            </div>
            <p>
                Quotes from <a href="https://github.com/lukePeavey/quotable">here</a>
            </p>
        </div>
    </div>
}

export default App;