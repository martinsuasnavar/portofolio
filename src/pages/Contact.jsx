import React, { Component } from 'react';
import Facade from '../components/boxes/Facade';
import ContactForm from '../components/misc/ContactForm';
import WhiteSpace from '../components/misc/WhiteSpace';
import ContentButton from '../components/buttons/ContentButton';
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
                        <div className="big-title-text">Let's take the first step</div>
                        <WhiteSpace width={"100"} height={"100"}/>
                        <div>Either contact me by filling the following appliaction form</div>
                        <br></br>
                        <ContactForm />
                        <WhiteSpace width={"100"} height={"100"}/>
                        <div>Or you can send me a message to my Linkedin</div>
                        <WhiteSpace width={"100"} height={"100"}/>
                        <ContentButton buttonText={"MY LINKEDIN"} pathTarget={"https://www.linkedin.com/in/mart%C3%ADn-suasnavar-579a4726a/"}/>
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
