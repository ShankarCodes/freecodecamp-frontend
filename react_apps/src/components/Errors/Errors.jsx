import React from 'react';
import Navbar from '../Navbar';
import './errors.scss';

const Error404 = () =>{
    return <div>
        <Navbar/>
        <div class="error-message">
        <h1 className="error-heading">
            404
        </h1>
        <p className="error-subtitle">
            The requested url was not found.
        </p>
        </div>
    </div>
}

export {Error404};