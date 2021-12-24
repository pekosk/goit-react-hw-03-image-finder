import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    query: '',
  }

  submitQuery = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ query: '' });
  };

  searchQuery = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { query } = this.state;
    const { submitQuery, searchQuery } = this;
    return (
      <header className={styles.searchbar}>
        <form onSubmit={submitQuery} className={styles.form}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={searchQuery}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
