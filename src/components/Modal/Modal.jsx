import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.close);
  }

  componentDidUpdate() {
    window.addEventListener("keydown", this.close);
}

  close = (e) => {
    if (e.code === "Escape") {
      return this.props.closeModal();
    }
  };

  onCloseModal = (e) => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      this.props.closeModal();
    }
  }

  render() {
    const { onCloseModal } = this;
    const { children } = this.props;
      return (
          <div class="overlay">
            <div className={styles.modal} onClick={onCloseModal}>
                <img src="" alt="" />
            </div>
          </div>
    );
  }
}

export default Modal;