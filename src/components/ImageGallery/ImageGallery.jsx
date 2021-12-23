import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ items, onImageOpen }) => {
  const elem = items.map(item => (
    <ImageGalleryItem onClick={() => onImageOpen(item.id)} key={item.id} {...items}/>
  ));
      return (
        <ul className={styles.galleryList}>
          {elem}
        </ul>
    );
}
  
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
  })),
  onImageOpen: PropTypes.func.isRequired
}

export default ImageGallery;