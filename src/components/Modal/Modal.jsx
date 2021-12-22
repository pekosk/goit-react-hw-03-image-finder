import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Modal extends Component {
    render() {
        return (
            <div class="overlay">
  <div className={styles.modal}>
    <img src="" alt="" />
  </div>
</div>
    );
  }
}

export default Modal;