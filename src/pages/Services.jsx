import React, { Component } from 'react';
import { Facade, MyImage, WhiteSpace, ContentButton, Footer } from './shared';import PropTypes from 'prop-types';


class Services extends Component {
    render() {
        return (
            <div id="main_wrapper">
            <header>
                        
            </header>

               
            <div><Facade h1Text="Martin Suasnavar" h2Text="my Services"/></div>
     
            <div id="main_container">
                <div id="contents">
                <div className="big-title-text">What services do I provide?</div>
                <MyImage src="images/briefcase-react-icon.png" width="200px"></MyImage>
                <section>
                    <article className="article-center">
                        <WhiteSpace height={"300px"} width={"300px"}/>
                        <h2 className="title-text">Front-end solutions:</h2>
                        <li>Responsive web design</li>
                        <li>User Interface (UI) design</li>
                        <li>User Experience (UX) integration</li>
                        <li>Use of React.js to create interfaces</li>
                    </article>
                    <article className="article-center">
                        Any inquiere (methodologies, billings etc.) can be done by contacting me with a message.
                        
                    </article>
                    <ContentButton  buttonText={"CONTACT ME"} pathTarget={"/contact"} />
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
