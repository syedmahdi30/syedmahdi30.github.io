// App.js
import React from 'react';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import { Certification } from './components/Certification';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Certification />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

