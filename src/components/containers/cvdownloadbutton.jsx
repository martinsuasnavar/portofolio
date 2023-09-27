import React, { Component } from 'react';
import '../../styles/buttons.css';
import PropTypes from 'prop-types';

function ButtonAction(event){
    event.preventDefault(); //prevent the default behavior of anchor (<a>) tags
    alert("This button has no functionality yet");
}

class Cvdownloadbutton extends Component {
    render() {
        return (
            <a href="#" className="contents-button" onClick={ButtonAction}>
                DOWNLOAD MY CV
            </a>
        );
    }
}


Cvdownloadbutton.propTypes = {

};


export default Cvdownloadbutton;
