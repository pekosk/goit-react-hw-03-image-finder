import { Component } from 'react';
import { ApiService } from './api/api';

import styles from './App.module.css';

import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from "react-loader-spinner";
import ImageGallery from './components/ImageGallery';



class App extends Component {
  state = {
    id: "",
    largeImageURL: "",
    items: [],
    loading: false,
    error: null,
    page: 1,
    query: "",
    modalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, items } = this.state;
    if (prevState.query !== query && query) {
      this.setState({ loading: true, items: [] });
      this.fetchQuery();
    }
    if (items.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  searchQuery = ({ query }) => {
    this.setState({ query, page: 1, });
  };

  LoadMore = (e) => {
    this.fetchQuery();
  };

  render() {
    const { items, loading, error, page, query, id, modalOpen, largeImageURL } = this.state;
    const { searchQuery, closeModal, openModal, loadMore } = this;
    return (
      <>
        <Searchbar onSubmit={searchQuery} />
        <ImageGallery items={items} />
        <Button />
        <div className={styles.loader}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      </>
    );
  }
}

export default App;