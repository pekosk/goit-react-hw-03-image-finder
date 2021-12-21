import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class ImageGalleryItem extends Component {
    render() {
        return (
            <li className={styles.galleryItem}>
  <img src="" alt="" />
</li>
    );
  }
}

export default ImageGalleryItem;