import { forwardRef } from "react";
import PropTypes from "prop-types";
import Marquee from "../utils/Marquee";
import arrow from "../assets/arrow.png";
import "./contact.css";

const Contact = forwardRef(({homeRef, textColor}, ref)=> {

    const items = [
      "Get in touch",
      "Get in touch",
      "Get in touch",
      "Get in touch",
      "Get in touch",
    ];

  return (
    <div className="contact" ref={ref} style={{ "--color": textColor }}>
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
            <div className="social">
              <div className="c-card">
                <a href="https://github.com/aniketkumar7">GITHUB</a>
              </div>

              <div className="c-card">
                <a href="https://www.tublian.com/profile/aniketkumar7">
                  TUBILIAN
                </a>
              </div>

              <div className="c-card">
                <a href="https://www.linkedin.com/in/aniketkumar07/">
                  LINKEDIN
                </a>
              </div>

              <div className="c-card">
                <a href="https://medium.com/@aniketkumar639597">MEDIUM</a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <span>[</span>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                homeRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to home section
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

Contact.displayName = "Contact";
export default Contact