import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onLoadMore }) => {
  return (
    <div className={styles.loadBtn}>
      <button type="button" onClick={onLoadMore} className={styles.btn}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
