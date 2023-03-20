import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./carousel.module.css";

const Carousel = ({ images, size }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div className={`${styles.carousel} ${styles[size]}`}>
      <div
        className={styles.items}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.item}>
            <img src={image} alt="carousel item" className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrow} onClick={handlePrev}>
          &lt;
        </button>
        <button className={styles.arrow} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Carousel.defaultProps = {
  size: "medium",
};

export default Carousel;
