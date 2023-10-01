import React, { Component } from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import MyImage from '../misc/MyImage';
import PropTypes from 'prop-types';


class NavigationBar extends Component {
    render() {
        return (
            <div className="navigator">
                <Link className="navigator-button" to="/"><MyImage src="/images/logo.png" width="20px" alt="Developer logo"/></Link>
                <Link className="navigator-button" to="/works">my Works</Link>
                <Link className="navigator-button" to="/services">my Services</Link>
                <Link className="navigator-button" to="/contact">contact Me</Link>
            </div>
        );
    }
}


NavigationBar.propTypes = {

};


export default NavigationBar;
