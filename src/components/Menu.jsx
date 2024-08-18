import { PropTypes } from 'prop-types';
import { gsap } from "gsap";
import {motion} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./menu.css";

const Menu = ({sectionRefs,textColor}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const menuItemsRef = useRef([]);

  const handleItemClick = (index) => {
    setActiveItem(index);
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".fullscreen-menu", {
        x: 0,
        duration: 0.5,
        width: "100%",
        opacity: 1,
        visibility: "visible",
        ease: "power1.inOut",
      });
      gsap.fromTo(
        menuItemsRef.current,
        { y: 80, opacity: 0, display: "block" },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.3,
          ease: "power1.inOut",
        }
      );
    } else {
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(menuItemsRef.current, { display: "none" });
        },
      });
      gsap.to(".fullscreen-menu", {
        duration: 0.6,
        width: "0%",
        opacity: 0,
        visibility: "hidden",
        delay: 1.2,
        ease: "power1.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <div className="nav">
      <nav className="navbar">
        <div className="logo" style={{ color: textColor }}>
          ANIKET
        </div>
        <button
          className="menu-button"
          style={{ backgroundColor: textColor }}
          onClick={toggleMenu}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <motion.div
          className="fullscreen-menu menu"
          animate={{ x: menuOpen ? 0 : 100, opacity: menuOpen ? 1 : 0 }}>
          <ul className="menu-items">
            {["Home", "Skills", "About", "Projects", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  ref={(el) => (menuItemsRef.current[index] = el)}>
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
        </motion.div>
      </nav>
    </div>
  );
};


// Props Validation
Menu.propTypes = {
  sectionRefs: PropTypes.array.isRequired,
  textColor: PropTypes.string.isRequired,
}
export default Menu;
