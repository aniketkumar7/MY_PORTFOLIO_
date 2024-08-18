import{ useState, useEffect, useRef } from "react";

function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor"
      ref={cursorRef}
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "35px",
        height: "35px",
        zIndex: 9999,
        borderRadius: "50%",
        backgroundColor: "transparent",
        mixBlendMode: "difference",
        border: "2px solid white",
        pointerEvents: "none",
        transformOrigin: "center", // Set transform origin for smoother scaling
        transition: "transform 0.2s ease",
      }}
    />
  );
}

export default AnimatedCursor;
