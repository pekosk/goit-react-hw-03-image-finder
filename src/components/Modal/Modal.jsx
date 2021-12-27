import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");
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
  };

  render() {
    const { onCloseModal } = this;
    const { children } = this.props;
    return createPortal(
      <div className={styles.overlay} onClick={onCloseModal}>
        <div className={styles.modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Modal;
