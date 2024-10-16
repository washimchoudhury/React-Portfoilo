//whenever we want to see changes in page when it reload we use useEffect hooks here we are using to show the animation .
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
//import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />

        <Contact />
      </div>
    </>
  );
}

export default App;
