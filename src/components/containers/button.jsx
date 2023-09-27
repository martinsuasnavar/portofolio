import React, { Component } from 'react';
import PropTypes from 'prop-types';


function MyButton(){
    const handleClick = () => {}
        alert("Button clicked!")
};

class Button extends Component {
    render() {
        return (
            <div>
                Button
            </div>
        );
    }
}


Button.propTypes = {

};


export default Button;
