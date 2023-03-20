import React from "react";
import PropTypes from "prop-types";
import styles from "./col.module.css";

const Col = ({ size = 1, children }) => {
  const className = `col-${size.toString()}`;
  return <div className={`${styles.col} ${styles[className]}`}>{children}</div>;
};

Col.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node,
};

export default Col;
