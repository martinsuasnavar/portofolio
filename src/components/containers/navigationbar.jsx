import React, { Component } from 'react';
import '../../styles/navigator.css';
import '../../styles/buttons.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class NavigationBar extends Component {
    render() {
        return (
            <div className="navigator">
                <Link className="navigator-button" to="/">about Me</Link>
                <Link className="navigator-button" to="/works">my Works</Link>
                <Link className="navigator-button" to="/services">my Services</Link>
                <Link className="navigator-button" to="/contact">Contact</Link>
            </div>
        );
    }
}


NavigationBar.propTypes = {

};


export default NavigationBar;
