import React, { Component } from 'react';
import ContentButton from '../components/buttons/ContentButton';
import Footer from '../components/boxes/Footer';
import PropTypes from 'prop-types';


class Works extends Component {
    render() {
        return (
            <div id="main_wrapper">
            <header>
                        
            </header>

                    
            <div id="main_container">
                <div id="contents">
                    <h1 className="big-title-text">MY WORKS</h1>
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
