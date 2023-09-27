import React from 'react';
import '../../styles/buttons.css';
import PropTypes from 'prop-types';

function ButtonAction(){
    const targetElement = document.getElementById("contents");
    targetElement.scrollIntoView({behavior: "smooth"});
}


function FacadeAboutMeButton() {
  return (
      <a href="#" className="facade-button" onClick={ButtonAction}>
        <div className="facade-button-text">
          about Me
        </div>
      </a>
    
  );
}

FacadeAboutMeButton.propTypes = {};

export default FacadeAboutMeButton;