import React, { Component } from 'react';
import Footer from '../components/boxes/Footer';
import Facade from '../components/boxes/Facade';
import MyImage from '../components/misc/MyImage';
import PropTypes from 'prop-types';
import '../styles/main.css';
import LinkedinButton from '../components/containers/linkedinbutton';
import Cvdownloadbutton from '../components/containers/cvdownloadbutton';
//This is a page component

class Home extends Component {
    render() {
        return (
     
    
        <div id="main_wrapper">
            <header>
            </header>
            
            <div id="main_container">
      
                <div><Facade/></div>

                <div id="contents">
                    <section>
                        <h1 className="big-title-text">HELLO</h1>
                    
                        <article className="article">
                            <h2 className="title-text">About me</h2>
                            I am a 21 years old IT engineering student who seeks opportunities to grow and learn. To start off my IT career, I have choosen Front-end development of websites, as one of my passions is designing visuals. I already have previous experience by self-learning with languages like C#, by modifying videogames in Unity, so I believe that's a good base to have the logics for what is the world of programming in its whole. I don't like overlooking details that are troublesome at my eyes, so I can be perfectionist at my work.
                        </article>
                    </section>
                    <section>
                        <article className="article">
                            <h2 className="title-text">What is my vision for myself?</h2>
                            Learning new front-end technologies and incorporate also back-end when the time is appropiate. Full Stack is my mayor objective.
                        </article>
                    </section>
                    <section>
                        <article className="article">
                            <h2 className="title-text">What am I planning to implement in my website?</h2>
                            I want to incorporate more JavaScript functionality to my website, as well as adding purpose to certain buttons. I am also planning to incorporate the React.Js framework once I get used with JavaScript. An option to switch between Dark and Light themes also seems like a cool idea, being it done in JavaScript. A switcher between Spanish and English languages also seems solid.
                        </article>
                    </section>
                    
                    <cv><MyImage src="/images/me.png" width="100px" alt="Developer logo"/></cv>
                    <div className="cv-buttons">
                        <LinkedinButton></LinkedinButton>         
                        <Cvdownloadbutton></Cvdownloadbutton>
                    </div>
                </div>
                
            </div>
            
            <footer><Footer /></footer>
            
            
        </div>
  
  

        );
    }

}


Home.propTypes = {

};


export default Home;