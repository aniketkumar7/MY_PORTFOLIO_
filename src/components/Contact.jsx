import { forwardRef } from "react";
import PropTypes from "prop-types";
import Marquee from "../utils/Marquee";
import arrow from "../assets/arrow.png";
import "./contact.css";

const Contact = forwardRef(({homeRef, textColor}, ref)=> {

  // Define items for the Marquee component
  const items = [
    "Get in touch",
    "Get in touch",
    "Get in touch",
    "Get in touch",
    "Get in touch",
  ];

  return (
    <div className="contact" ref={ref} style={{ "--color": textColor }}>
      {/* Render the Marquee component with items and text color */}
      <Marquee items={items} textColor={textColor} />

      <div className="connect">
        <div className="connect-container">
          <div className="contact-desc">
            <h3>
              THANKS FOR WATCHING. YOU CAN CONTACT ME ANYTIME WITH{" "}
              <span>
                <a href="mailto:aniketkumar639597@gmail.com">EMAIL </a>
              </span>
              OR
            </h3>

            {/* Social media links */}
            <div className="social">
              <div className="c-card">
                <a href="https://github.com/aniketkumar7" target="_blank">GITHUB</a>
              </div>

              <div className="c-card">
                <a href="https://www.tublian.com/profile/aniketkumar7" target="_blank">
                  TUBILIAN
                </a>
              </div>

              <div className="c-card">
                <a href="https://www.linkedin.com/in/aniketkumar07/"
                target="_blank">
                  LINKEDIN
                </a>
              </div>

              <div className="c-card">
                <a href="https://medium.com/@aniketkumar639597"
                target="_blank">MEDIUM</a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <span>[</span>
            <a
              href=""
              onClick={(e) => {
                // Prevent default anchor behavior
                e.preventDefault();
                // Scroll to home section
                homeRef.current.scrollIntoView({ behavior: "smooth" });
              }}>
              <img src={arrow} alt="" />
            </a>
            <span>]</span>
          </div>

        </div>
      </div>
    </div>
  );
});

// props validtion
Contact.propTypes = {
  homeRef: PropTypes.object.isRequired,
  textColor: PropTypes.string.isRequired,
};

// Set a display name for the component in React DevTools
Contact.displayName = "Contact";

// Export the Contact component
export default Contact