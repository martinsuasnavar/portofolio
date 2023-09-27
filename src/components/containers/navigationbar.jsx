import React, { Component } from 'react';
import '../../styles/navigator.css';
import '../../styles/buttons.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavButton(props){
    return(
        <a href="#" className="navigator-button" onClick={props.onClick}>
            {props.label}
        </a>
    )
}

function alertNoButtonFunctionality(event){
    event.preventDefault(); //prevent the default behavior of anchor (<a>) tags
    alert("This button has no functionality yet");
}

function ButtonAction(buttonName){
     if (buttonName == "services"){
        alertNoButtonFunctionality();
    }
    else if (buttonName == "contact"){
        alertNoButtonFunctionality();
    }
}

class NavigationBar extends Component {
    render() {
        return (
            <div className="navigator">
                <NavButton label="my Works" to="/works"/>
                <NavButton label="my Services" to="/works" onClick={() => this.props.onButtonClick.onClick(ButtonAction("services"))}/>
                <NavButton label="contact Me" to="/works" onClick={() => this.props.onButtonClick.onClick(ButtonAction("contact"))}/>
            </div>
        );
    }
}


NavigationBar.propTypes = {

};


export default NavigationBar;
