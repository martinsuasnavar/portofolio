import React, { Component } from 'react';
import Facade from '../components/boxes/Facade';
import Footer from '../components/boxes/Footer';
import PropTypes from 'prop-types';


class Services extends Component {
    render() {
        return (
            <div id="main_wrapper">
            <header>
                        
            </header>

               
            <div><Facade h1Text="Martin Suasnavar" h2Text="my Services"/></div>
     
            <div id="main_container">
                <div id="contents">
                <h1 className="big-title-text">PROFESSIONAL MATTER</h1>
                <section>
                    <article className="article">
                        <h2 className="title-text">Front-end solutions</h2>
                        I design UI solutions based on React.js.
                        <br></br>
                    </article>
                </section>
                </div>
            </div>
            <footer><Footer /></footer>
            </div>
        );
    }
}


Services.propTypes = {

};


export default Services;
