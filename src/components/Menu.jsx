import PropTypes from "prop-types";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./menu.css";

const Menu = ({ sectionRefs, textColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const menuItemsRef = useRef([]);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Function to handle item clicks
  const handleItemClick = (index) => {
    setActiveItem(index);
    // Smoothly scroll to the corresponding section
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Effect to handle menu animations based on menuOpen state
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.8,
        width: "100%",
        opacity: 1,
        visibility: "visible",
        ease: "power3.inOut",
      });
      gsap.fromTo(
        menuItemsRef.current,
        { y: 80, opacity: 0, scale: 0.8, rotation: 15, display: "block" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.inOut",
        }
      );
    } else {
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -15,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(menuItemsRef.current, { display: "none" });
        },
      });
      gsap.to(menuRef.current, {
        duration: 0.6,
        width: "0%",
        opacity: 0,
        visibility: "hidden",
        ease: "power3.inOut",
        delay: 1.3,
      });
    }
  }, [menuOpen]);

  // Effect to animate navbar elements
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay:5, ease: "power2.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay:5.2, ease: "power2.out"}
    );
  }, []);

  return (
    <div className="nav">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo" ref={logoRef} style={{ color: textColor }}>
          <a href="#">ANIKET</a>
        </div>

        {/* Button to toggle the menu */}
        <button
          className="menu-button"
          ref={buttonRef}
          style={{ backgroundColor: textColor }}
          onClick={toggleMenu}>
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Fullscreen menu that animates in and out */}
        <div className="fullscreen-menu menu" ref={menuRef}>
          <ul className="menu-items">
            {["Home", "Skills", "About", "Projects", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  ref={(el) => (menuItemsRef.current[index] = el)}>
                  {/* Store reference for animation */}
                  <a
                    style={{ color: textColor }}
                    className={activeItem === item ? "active" : ""}
                    onClick={() => handleItemClick(index)}
                    href="#">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

// Props Validation
Menu.propTypes = {
  sectionRefs: PropTypes.array.isRequired,
  textColor: PropTypes.string.isRequired,
};

// Export the Menu component
export default Menu;
