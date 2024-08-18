import PropTypes from "prop-types";
import "./marquee.css";
const Marquee = ({ items , textColor }) => {
  // Duplicate the items to create a continuous effect
  const duplicatedItems = [...items, ...items];

  return (
    <div className="marquee" style={{ "--color1": textColor }}>
      <div className="marquee-content">
        {duplicatedItems.map((item, index) => (
          <div
            className="marquee-item"
            key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

Marquee.propTypes = {
  items: PropTypes.array.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Marquee;
