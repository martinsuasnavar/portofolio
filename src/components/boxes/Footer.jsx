import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageButton from '../buttons/ImageButton';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
        <div>
        <div className="footer-white-space"></div>
       
            <div className="footer-text"> 
            
                    ⚡ Portofolio - Martin Suasnavar 2023
            </div>
            <div className="footer-buttons-container">
            <a className="footer-button"><ImageButton  buttonImg="/images/linkedin-logo-button.png" imgWidth="40px" targetPath="https://www.linkedin.com/in/mart%C3%ADn-suasnavar-579a4726a/"/></a>
            <a className="footer-button"><ImageButton className="footer-button" buttonImg="/images/github-logo-button.png" imgWidth="40px" targetPath="https://github.com/martinsuasnavar"/></a>
        </div>
        <div className="footer-white-space"></div>
            <div className="footer-sub-text"> 
                This project has been bootstrapped with React.js
            </div>
            
           </div>
        );
    }
}


Footer.propTypes = {

};


export default Footer;
