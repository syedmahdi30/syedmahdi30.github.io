// App.js
import React, { useEffect} from 'react';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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

