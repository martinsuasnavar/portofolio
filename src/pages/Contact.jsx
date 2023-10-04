import React, { Component } from 'react';
import { Facade, MyImage, WhiteSpace, ContentButton, Footer } from './shared';
import ContactForm from '../components/misc/ContactForm';
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
                        <WhiteSpace width={"10"} height={"10"}/>
                        <div className="big-title-text">Or</div>
                        <div>Send me a message to my LinkedIn</div>
                        <WhiteSpace width={"50"} height={"50"}/>
                        <MyImage src={"/images/linkedin-logo-black.png"} width={"100"}/>
                        <WhiteSpace width={"10"} height={"10"}/>
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
