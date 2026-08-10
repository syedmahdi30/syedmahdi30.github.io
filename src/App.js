import React from "react";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavigationBar />
      <main id="main-content">
        <Banner />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
