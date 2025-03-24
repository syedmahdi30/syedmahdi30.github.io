// App.js
import React from 'react';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Certifications />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

