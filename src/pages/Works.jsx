import React, { Component } from 'react';
import Facade from '../components/boxes/Facade';
import ContentButton from '../components/buttons/ContentButton';
import Footer from '../components/boxes/Footer';
import PropTypes from 'prop-types';
import MyImage from '../components/misc/MyImage';


class Works extends Component {
    render() {
        return (
            <div id="main_wrapper">
            <header>
                        
            </header>

            <div><Facade h1Text="Martin Suasnavar" h2Text="my Works"/></div>

                    
            <div id="main_container">
                <div id="contents">
                <MyImage src="images/github-logo.png" width="200px"></MyImage>
                    <section>
                        <article className="article">
                            <h2 className="title-text">GitHub</h2>
                            You can check what I'm doing at the moment in my GitHub.
                            <br></br>
                            <ContentButton  buttonText={"MY GITHUB"} pathTarget={"https://github.com/martinsuasnavar"} />
                        </article>
                    </section>
                </div>
            </div>
            <footer><Footer /></footer>
            </div>
        );
    }
}


Works.propTypes = {

};


export default Works;
