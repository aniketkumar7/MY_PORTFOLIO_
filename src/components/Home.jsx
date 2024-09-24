import PropTypes from "prop-types";
import home from "../assets/home.png";
import { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./home.css";

const Home = forwardRef(({ textColor }, ref) => {
const imgRef = useRef(null);
const textRef = useRef(null);

useEffect(() => {
  // Simulate preloader delay
  const timer = setTimeout(() => {
    gsap.to(imgRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });

    // Animate the text spans using GSAP
    gsap.to(textRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate the text spans using GSAP
    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0, scale: 0.5, rotation: 45, color: "#111315" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        color: textColor,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, 5000); // Adjust the delay as needed

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="home " ref={ref}>
      <div className="home-text" ref={textRef} style={{ color: textColor }}>
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </div>

      <div className="home-img" ref={imgRef}>
        <img src={home} alt="" />
      </div>
    </div>
  );
});

Home.displayName = "Home";
// props validation
Home.propTypes = {
  textColor: PropTypes.string.isRequired,
}
export default Home;
