import { Component } from 'react';

import './App.css';

import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from './components/Loader';
import ImageGallery from './components/ImageGallery';



class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <Button />
      </>
    );
  }
}

export default App;