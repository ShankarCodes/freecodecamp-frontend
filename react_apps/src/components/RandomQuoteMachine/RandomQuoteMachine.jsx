import React from 'react';
import Navbar from '../Navbar';
import Quotebox from './Quotebox';

const App = () =>{
    return <div className="page">
        <Navbar></Navbar>
        <Quotebox/>
        <div className="footer">
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