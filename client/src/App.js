import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Map from './Map'
import Footer from './Footer'

function App() {
  return (
    <div className="root__container">
      <Navbar />
      <Home />
      <Menu />
      <About />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;

