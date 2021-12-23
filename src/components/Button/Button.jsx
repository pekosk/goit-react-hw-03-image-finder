import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onLoadMore }) => {
      return (
          <button type="button" onClick={onLoadMore} className={styles.btn}>Load More</button>
    );
}
  
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
}

export default Button;
