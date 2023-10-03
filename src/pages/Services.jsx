import React, { Component } from 'react';
import Facade from '../components/boxes/Facade';
import Footer from '../components/boxes/Footer';
import ContentButton from '../components/buttons/ContentButton';
import WhiteSpace from '../components/misc/WhiteSpace';
import MyImage from '../components/misc/MyImage';
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
                <MyImage src="images/react-logo512.png" width="200px"></MyImage>
                <section>
                    <article className="article">
                        <div className="big-title-text">What services do I provide?</div>
                        <WhiteSpace height={"300px"} width={"300px"}/>
                        <h2 className="title-text">My core:</h2>
                        <li>Front-end solutions</li>
                        <br></br>
                        <h2 className="title-text">My tools:</h2>
                        <li>React.js library for JavaScript</li>
                        <br></br>
                        <h2 className="title-text">My capabilities:</h2>
                        <li>User Experience (UX)</li>
                        <br></br>
                        <h2 className="title-text">My customer needs:</h2>
                        <li>Friendly UIs (User Interface)</li>
                        <li>Usability</li>
                    </article>
                    <article className="article">
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
