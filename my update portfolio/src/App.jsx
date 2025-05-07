import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Certificates from './components/certificates/Certificates'; // Correct import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Nav />
              <About />
              <Experience />
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
};

export default App;