import About from "./components/About";
import Home from "./components/Home";
import AnimatedCursor from "./utils/Cursor";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useRef, useState } from "react";
import Preloader from "./components/Preloader";

const App = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // const colors = [
  //   "#0a7273", // Green
  //   "#f7b126c1", // Yellow
  //   "#8E44ADcc", // Purple
  //   "#4b93ffc0", // Orange
  //   "#4dd173c0", // Emerald
  //   "#f8623dab", // Alizarin
  // ];
   const colors = [
     "#0a7273", // Green
     "#f7b126c1", // Yellow
     "#8E44ADcc", // Purple
     "#4b93ffc0", // Orange
     "#4dd173c0", // Emerald
     "#f8623dab", // Alizarin
   ];

  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    // Select a random color from the array
    const randomTextColor = colors[Math.floor(Math.random() * colors.length)];
    setTextColor(randomTextColor);
  }, []);

  return (
    <>
      <div className="App">
        <Preloader />
        <Menu
          sectionRefs={[homeRef, skillsRef, aboutRef, projectsRef, contactRef]}
          textColor={textColor}
        />
        <div ref={homeRef}>
          <Home textColor={textColor} />
        </div>
        <div ref={skillsRef}>
          <Skills textColor={textColor} />
        </div>
        <div ref={aboutRef}>
          <About textColor={textColor} />
        </div>
        <div ref={projectsRef}>
          <Projects textColor={textColor} />
        </div>
        <div ref={contactRef}>
          <Contact homeRef={homeRef} textColor={textColor} />
        </div>
      </div>
      <AnimatedCursor />
    </>
  );
};
export default App;
