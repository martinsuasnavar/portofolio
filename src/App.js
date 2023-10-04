import {  BrowserRouter, Route, Routes } from 'react-router-dom';
//pages
import { Home, Works, Services, Contact } from './pages';

//misc
import NavigationBar from './components/containers/NavigationBar';


//IMPORTANT: make sure react-router-dom has been installed in node-modules folder, or else a runtime error is going to be cause since the library is not found

const App = () => {
  return (
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;