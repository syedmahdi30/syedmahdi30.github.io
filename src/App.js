// App.js
import React, { useEffect} from 'react';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
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
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

