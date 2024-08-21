import { PropTypes } from 'prop-types';
import { forwardRef } from "react";
import Marquee from "../utils/Marquee"
import './skills.css'

// Define an array of items for the Marquee component
const items = [
  'Skills/Tech',
  'Skills/Tech',
  'Skills/Tech',
  'Skills/Tech',
  'Skills/Tech',
];

// Define the Skills component using forwardRef to allow parent components to pass refs
const Skills = forwardRef(({textColor}, ref) => {
  return (
    <div ref={ref}>
      {/* Render the Marquee component with the defined items and text color */}
      <Marquee items={items} textColor={textColor} />

      {/* Render a grid of skill cards */}
      <div className="skills">
        <div className="cards">
          <div className="card">
            <h1>C</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>C++</h1>
          </div>

          <div className="card">
            <h1>JAVA</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>PYTHON</h1>
          </div>

          <div className="card">
            <h1>JAVASCRIPT</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>HTML</h1>
          </div>

          <div className="card">
            <h1>CSS</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>TAILWIND CSS</h1>
          </div>

          <div className="card">
            <h1>REACT</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>NODE JS</h1>
          </div>

          <div className="card">
            <h1>GIT</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>GITHUB</h1>
          </div>

          <div className="card">
            <h1>SKETCHING</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>FIGMA</h1>
          </div>

          <div className="card">
            <h1>CANVA</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>SQL</h1>
          </div>

          <div className="card">
            <h1>STREAMLIT</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>AWS</h1>
          </div>

          <div className="card">
            <h1>SQLITE</h1>
          </div>

          <div className="card" style={{ backgroundColor: textColor }}>
            <h1>MICROSOFT DESIGNER</h1>
          </div>

          <div className="card">
            <h1>UI DESIGN</h1>
          </div>
        </div>
      </div>
    </div>
  );
});


//props validation
Skills.propTypes = {
  textColor: PropTypes.string.isRequired,
}

// Set the display name for the component for better debugging
Skills.displayName = "Skills";

// Export the Skills component
export default Skills