import PropTypes from "prop-types";
import home from "../assets/home.png";
import { forwardRef } from "react";
import "./home.css";

const Home = forwardRef(({ textColor }, ref) => {
  return (
    <div className="home " ref={ref}>
      <div className="home-text" style={{ color: textColor }}>
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

      <div className="home-img">
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
