import styles from "./Button.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Button extends Component {
  render() {
      return (
          <button type="button" className={styles.btn}>Load More</button>
    );
  }
}

export default Button;
