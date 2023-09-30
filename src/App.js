import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimationProvider } from './AnimationContext';
import Home from './pages/Home';
import Works from './pages/Works';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NavigationBar from './components/containers/NavigationBar';

//IMPORTANT: make sure react-router-dom has been installed in node-modules folder, or else a runtime error is going to be cause since the library is not found

const App = () => {
  return (
    <AnimationProvider>
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </AnimationProvider>
  );
};

export default App;