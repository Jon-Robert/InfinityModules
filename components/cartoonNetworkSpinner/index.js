import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./cartoonNetworkSpinner.module.css";

const CartoonNetworkSpinner = ({ interval = 3 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rotationDegree, setRotationDegree] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
      setRotationDegree((rotationDegree + 360 / images.length) % 360);
    }, interval * 1000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, interval, rotationDegree]);

  const images = [
    "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/3/23/asset/dc9b6ca9069a/sub-buzz-735-1651619191-1.jpg?downsize=900:*&output-format=auto&output-quality=auto",
    "https://www.pngitem.com/pimgs/m/585-5856510_cartoon-network-cartoon-characters-hd-png-download.png",
    "https://www.pngitem.com/pimgs/m/560-5603513_character-transparent-cartoon-network-buttercup-powerpuff-girls-hd.png",
    "https://i.pinimg.com/736x/cd/f4/dd/cdf4ddbfc17de639d7f27bcf4d6e211b--lab-rats-cartoon-network.jpg",
    "https://static.wikia.nocookie.net/warner-bros-entertainment/images/0/07/Darwin_pose1%281%29.gif",
    "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/3/20/asset/345b0809c001/sub-buzz-501-1651611540-1.jpg",
  ];

  return (
    <div className={styles.spinnerContainer}>
      <div
        className={styles.spinner}
        style={{ transform: `rotate(${rotationDegree}deg)` }}
      >
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Cartoon Network character ${index}`}
            className={`${styles.image} ${
              currentImageIndex === index ? styles.visible : styles.hidden
            }`}
            style={{
              transform: `rotate(${(-360 / images.length) * index}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

CartoonNetworkSpinner.propTypes = {
  interval: PropTypes.number,
};

export default CartoonNetworkSpinner;
