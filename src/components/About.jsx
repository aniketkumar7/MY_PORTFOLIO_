import { PropTypes } from 'prop-types';
import img from "../assets/about.jpg";
import { forwardRef } from "react";
import excited from "../assets/excited.png";
import eye from "../assets/eye.png";
import hand from "../assets/hand.png";
import shield from "../assets/medal.png";
import { motion } from "framer-motion";
import "./about.css";
import Marquee from "../utils/Marquee";

const About = forwardRef(({ textColor }, ref) => {

  const items = [
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
    "About Me",
  ];

  return (
    <div ref={ref}>
      <div className="aboutme">
        <Marquee items={items} textColor={textColor} />
      </div>

      <motion.div
        className="about"
        style={{ "--color": textColor }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <motion.div
          className="about-left"
          variants={{
            hidden: { x: -100 },
            visible: { x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}>
          <div className="about-left-container">
            <div className="about-img">
              <img src={img} alt="" />
            </div>

            {/* <img className="absolute img4" src={creator} alt="" /> */}
            <img className="img2 absolute" src={excited} alt="" />
            <img className="absolute img3" src={eye} alt="" />
            <img className="img9 absolute" src={shield} alt="" />

            <div className="img-head">
              <h1>ANIKET</h1>
              <h1>KUMAR</h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          variants={{
            hidden: { x: 100 },
            visible: { x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}>
          <div className="about-title">
            <h1>
              <span>Namaste</span>
              <img src={hand} alt="" />
            </h1>
          </div>
          <div className="about-desc">
            <h3>
              I&apos;m <span>Aniket Kumar </span>a student{" "}
              <span>at MIET, </span>
              pursuing my B.Tech in Computer Science and Engineering. With a
              strong passion for <span>design</span>, web development, and{" "}
              <span>competitive programming</span>, I am committed to improving
              my skills and expanding my knowledge in these areas.
              <br />
              <br />
              As a skilled <span>Front-End Developer</span>, I possess a solid
              foundation in Web Development and am proficient in frontend
              technologies. I actively engage in projects that challenge my
              problem-solving abilities and foster my creativity.
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

About.displayName = "About";
//props validation
About.propTypes = {
  textColor: PropTypes.string,
};
export default About;
