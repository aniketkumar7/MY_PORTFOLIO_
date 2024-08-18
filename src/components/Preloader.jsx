import { useEffect, useState } from "react";
import "./preloader.css"; // Import your CSS file

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false); // State to control exit animation

  useEffect(() => {
    // Start the counting interval
    const interval = setInterval(() => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1); // Increment counter
      } else {
        clearInterval(interval); // Stop the counter when it reaches 100%
      }
    }, 30); // Adjust the speed of counting

    // Simulate loading time
    const timer = setTimeout(() => {
      setHide(true); // Trigger exit animation
      setTimeout(() => setLoading(false), 400);
      clearInterval(interval); // Clear the interval
    }, 700);

    return () => {
      clearInterval(interval); // Cleanup the interval on unmount
      clearTimeout(timer); // Cleanup the timer on unmount
    };
  }, [count]);

  return (
    loading && (
      <div className={`preloader ${hide ? "hide" : ""}`}>
        <div className="preloader-inner">
          <div className="preloader-line"></div>
          <div className="preloader-line"></div>
          <div className="preloader-line"></div>
        </div>
        <div className="counter">
          Loading... <span>{count}</span>%
        </div>{" "}
        {/* Counter element */}
      </div>
    )
  );
};

export default Preloader;
