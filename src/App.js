// App.js
import React, { useEffect} from 'react';
import { ThemeProvider } from './contexts/ThemeContext'; // 👈 Add this
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
    <ThemeProvider>
      <div className="App">
        <NavigationBar />
        <Banner />
        <Certifications />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

