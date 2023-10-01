import React, { Component } from 'react';
import Facade from '../components/boxes/Facade';
import ContactForm from '../components/misc/ContactForm';
import Footer from '../components/boxes/Footer';
import PropTypes from 'prop-types';


class Contact extends Component {
    render() {
        return (
            <div id="main_wrapper">
            <header>
                        
            </header>

            <div><Facade h1Text="Martin Suasnavar" h2Text="contact Me"/></div>

                    
            <div id="main_container">
                <div id="contents">
                    <h1 className="big-title-text"></h1>
                    <section>
                        <ContactForm />
                    </section>
                </div>
            </div>
            <footer><Footer /></footer>
            </div>
        );
    }
}


Contact.propTypes = {

};


export default Contact;
