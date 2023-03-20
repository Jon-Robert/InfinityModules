import React from "react";
import PropTypes from "prop-types";
import styles from "./row.module.css";

const Row = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
