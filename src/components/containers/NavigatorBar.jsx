import React, { Component } from 'react';
import './NavigatorBar.css';
import { Link } from 'react-router-dom';
import MyImage from '../misc/MyImage';

const NavigatorBar = () => {
    return (
        <div className="navigator">
            <Link className="navigator-button" to="/"><MyImage src="/images/logo.png" width="20px" alt="Developer logo"/></Link>
            <Link className="navigator-button" to="/works">my Works</Link>
            <Link className="navigator-button" to="/services">my Services</Link>
            <Link className="navigator-button" to="/contact">contact Me</Link>
        </div>
    );
}

export default NavigatorBar;
