import React, { Component } from 'react';
import '../../styles/greeting.css';
import PropTypes from 'prop-types';


class Greeting extends Component {
    render() {
        return (
            <div>
                <h1 className="header">
                    ¡HOLA!
                </h1>
            </div>
        );
    }
}


Greeting.propTypes = {

};


export default Greeting;
