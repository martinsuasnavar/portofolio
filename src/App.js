import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LinkedinButton from './components/containers/linkedinbutton';
import Cvdownloadbutton from './components/containers/cvdownloadbutton';
import FacadeAboutMeButton from './components/containers/facadeaboutmebutton';
import NavigationBar from './components/containers/navigationbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //React Router library, necessarty to navigate between pages in React UI

//WARNING: React Router 6 (the current version being used here) uses <Routes> instead of <Switch>
//<Switch> has been DEPRECATED
//The Router is defined right here in App.js

const App = () => {
  // Find the placeholder element by its ID
  const navigationBarPlaceholder = document.getElementById('navigation-bar-placeholder')
  const facadeAboutMeButtonPlaceholder = document.getElementById('facade-about-me-button-placeholder')
  const linkedinButtonPlaceholder = document.getElementById('linkedin-button-placeholder');
  const cvButtonPlaceholder = document.getElementById('cv-button-placeholder');

  // Render buttons components into their placeholders
  ReactDOM.render(<NavigationBar />, navigationBarPlaceholder);
  ReactDOM.render(<FacadeAboutMeButton />, facadeAboutMeButtonPlaceholder);
  ReactDOM.render(<LinkedinButton />, linkedinButtonPlaceholder);
  ReactDOM.render(<Cvdownloadbutton />, cvButtonPlaceholder);
  return (
    <div>
    {/* Your other React components */}
  </div>
  );
};

export default App;
