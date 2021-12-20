import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
