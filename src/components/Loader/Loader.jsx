import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Loader from "react-loader-spinner";

import ImageGalleryItem from './ImageGalleryItem';

class Loader extends Component {
     render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}

export default Loader;