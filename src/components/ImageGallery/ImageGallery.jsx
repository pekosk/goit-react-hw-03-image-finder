import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
    render() {
        return (
            <ul className={styles.galleryList}>
  <ImageGalleryItem />
</ul>
    );
  }
}

export default ImageGallery;